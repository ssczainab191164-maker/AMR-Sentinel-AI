import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini Client lazy/guarded
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "AMR Sentinel AI" });
  });

  // AI Resistance Analyzer Endpoint
  app.post("/api/analyze", async (req, res) => {
    try {
      const { query, topic } = req.body;
      if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Query parameter is required" });
      }

      const ai = getAiClient();
      const systemInstruction = `Act as a microbiology education assistant. Explain antimicrobial resistance topics for undergraduate microbiology students using clear scientific language. Provide accurate educational explanations about microorganisms, antibiotic resistance mechanisms, laboratory testing, and prevention strategies.

Structure your response with clear Markdown formatting and clean headings:
### Microorganism / Topic Overview
### Antibiotic Classes Involved
### Resistance Mechanisms (e.g., enzymatic degradation, target alteration, efflux pumps, permeability changes)
### Important Resistance Genes & Mutations (e.g., mecA, blaKPC, blaNDM, vanA, rpoB, gyrA)
### Laboratory Detection Methods (e.g. Kirby-Bauer disk diffusion, MIC determination, PCR, MALDI-TOF)
### Antimicrobial Susceptibility Testing (AST) Importance
### Prevention & Stewardship Strategies`;

      const prompt = topic
        ? `Analyze the microorganism or resistance topic: "${query}". Category/Focus: ${topic}.`
        : `Analyze the following microorganism, resistance gene, or AMR topic: "${query}".`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.2,
        },
      });

      const text = response.text || "No analysis generated.";
      res.json({ result: text });
    } catch (err: any) {
      console.error("Error in /api/analyze:", err);
      res.status(500).json({
        error: err.message || "Failed to analyze AMR topic. Please check API configuration.",
      });
    }
  });

  // AI Tutor Endpoint
  app.post("/api/tutor", async (req, res) => {
    try {
      const { question, category } = req.body;
      if (!question || typeof question !== "string") {
        return res.status(400).json({ error: "Question parameter is required" });
      }

      const ai = getAiClient();
      const systemInstruction = `Act as a microbiology education assistant. Explain antimicrobial resistance topics for undergraduate microbiology students using clear scientific language. Provide accurate educational explanations about microorganisms, antibiotic resistance mechanisms, laboratory testing, and prevention strategies.`;

      const prompt = category
        ? `Question (${category}): "${question}". Provide a structured, clear educational response suitable for undergraduate microbiology students.`
        : `Question: "${question}". Provide a structured, clear educational response suitable for undergraduate microbiology students.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.2,
        },
      });

      const text = response.text || "No explanation generated.";
      res.json({ explanation: text });
    } catch (err: any) {
      console.error("Error in /api/tutor:", err);
      res.status(500).json({
        error: err.message || "Failed to generate tutor explanation.",
      });
    }
  });

  // AMR Risk Simulator Endpoint
  app.post("/api/simulate-risk", async (req, res) => {
    try {
      const { scenarioId, scenarioName, scenarioDescription, parameters } = req.body;
      if (!scenarioName) {
        return res.status(400).json({ error: "Scenario name is required" });
      }

      const ai = getAiClient();
      const systemInstruction = `Act as a microbiology and epidemiology education assistant specializing in antimicrobial resistance (AMR). Analyze the user's selected clinical or public health scenario and explain the resistance selection dynamics for undergraduate microbiology students. Return your response in JSON format according to the requested schema.`;

      const prompt = `Analyze this AMR risk scenario:
Scenario: ${scenarioName}
Description: ${scenarioDescription || "N/A"}
Parameters/Context: ${JSON.stringify(parameters || {})}

Provide a comprehensive scientific risk assessment formatted in JSON with:
1. riskLevel: 'LOW', 'MODERATE', 'HIGH', or 'CRITICAL'
2. summary: A concise 2-sentence executive summary
3. biologicalMechanism: Detailed biological explanation of how resistance mutants are selected or horizontally transferred
4. clinicalImpact: Clinical and public health consequences (treatment failures, morbidity, hospitalization)
5. preventionSteps: Array of 3-5 concrete prevention and stewardship strategies`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              riskLevel: { type: Type.STRING, description: "LOW, MODERATE, HIGH, or CRITICAL" },
              summary: { type: Type.STRING },
              biologicalMechanism: { type: Type.STRING },
              clinicalImpact: { type: Type.STRING },
              preventionSteps: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
            },
            required: ["riskLevel", "summary", "biologicalMechanism", "clinicalImpact", "preventionSteps"],
          },
          temperature: 0.2,
        },
      });

      const text = response.text;
      let parsed = {};
      if (text) {
        try {
          parsed = JSON.parse(text);
        } catch {
          parsed = { summary: text };
        }
      }
      res.json(parsed);
    } catch (err: any) {
      console.error("Error in /api/simulate-risk:", err);
      res.status(500).json({
        error: err.message || "Failed to run risk simulation.",
      });
    }
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AMR Sentinel AI Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});

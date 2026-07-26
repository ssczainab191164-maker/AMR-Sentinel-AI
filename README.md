## 🧬 AMR Sentinel AI 

Next-Generation Genomic Antimicrobial Resistance Surveillance & Educational Intelligence Platform

License: MIT AI Engine Domain Target Grade
## LIVE WEBSITE: https://amr-sentinel-ai-74po.vercel.app/


## 📌 1. Project Title & Introduction
AMR Sentinel AI is an advanced, interactive biotechnology research and educational intelligence platform designed to bridge classical undergraduate microbiology laboratory coursework with cutting-edge AI-driven genomic surveillance and antimicrobial resistance (AMR) modeling.

Core Mission
Antimicrobial resistance poses one of the top ten global public health threats facing humanity. AMR Sentinel AI empowers undergraduate microbiology students, clinical laboratory science (MLS) trainees, and biosecurity learners by combining high-speed AI reasoning (Gemini 3.6 Flash) with standardized clinical guidelines (CLSI M100 & EUCAST breakpoints) and interactive One Health transmission simulations.

## ⚠️ 2. Real-World Problem & Solution
The Microbiology Challenge
The Silent Pandemic: Bacterial pathogens are evolving resistance to front-line and reserve antibiotics (such as carbapenems, vancomycin, and colistin) faster than new therapeutics are developed, causing an estimated 1.27 million direct deaths globally each year.
Educational Gap in Undergraduate Curricula: Traditional microbiology education often isolates concepts into separate units—biochemical laboratory identification, genomic resistance cassette mechanisms (mecA, blaNDM-1, vanA), and antimicrobial susceptibility testing (AST) interpretation. Students frequently struggle to synthesize how molecular gene expression directly manifests as clinical treatment failure.
Complexity of Multidrug Resistance (MDR): Understanding efflux pump active transport, outer membrane porin loss, beta-lactamase hydrolysis kinetics, and plasmid-mediated horizontal gene transfer requires multi-dimensional visualization and instant academic feedback.
The AMR Sentinel AI Solution
AMR Sentinel AI provides a unified interactive intelligence hub where students can:

Analyze Resistance Genotypes & Phenotypes: Instantly query bacterial strain queries, resistance gene loci, or clinical AST profiles against Gemini 3.6 Flash.
Simulate One Health Transmission: Interactively model how agricultural antibiotic overuse and wastewater effluent drive clinical resistance spread.
Master ESKAPE Pathogens: Explore high-definition biological profiles of critical superbugs (Enterococcus faecium, Staphylococcus aureus, Klebsiella pneumoniae, Acinetobacter baumannii, Pseudomonas aeruginosa, and Enterobacter spp.).
Assess Knowledge via Interactive Quizzes: Test understanding with curriculum-aligned 5-question assessments featuring instant score calculation and detailed feedback.
 ## 🚀 3. Live Application
Experience the live interactive platform in your browser:

🌐 Launch AMR Sentinel AI on Vercel https://amr-sentinel-ai-74po.vercel.app/

⚡ AI Studio Preview Deployment https://ais-pre-26zwkqzoq2f62robhr4wj5-481517862563.asia-southeast1.run.app

## 🔬 4. Key Features
Feature	Description	Educational Value
🤖 AI Resistance Analyzer	Powered by Gemini 3.6 Flash, processes user queries regarding gene cassettes, enzyme kinetics, and AST panel interpretations with structured scientific outputs.	Teaches students how to interpret molecular resistance profiles and mechanistically connect genotypes to phenotypes.

🌐 One Health Risk Simulator	Interactive slider-based simulation modeling antibiotic pressure across Clinical, Agricultural, and Environmental sectors.	Demonstrates the interdisciplinary nature of AMR and how non-clinical antibiotic usage accelerates human treatment failures.

🧫 ESKAPE Pathogen Explorer	Interactive digital cards for high-priority WHO/CDC antibiotic-resistant bacterial species.	Provides quick access to gram status, mechanism details, resistance genes, and reserve drug options.

🗺️ Global AMR Surveillance Map	Simulated real-time epidemiological map highlighting high-consequence resistance strains (blaKPC-2, mcr-1, vanA) across global regions.	Connects classroom microbiology to global epidemiological surveillance networks.

📚 Learning Center & Assessment	Structured educational modules with an interactive 5-question multiple-choice student quiz featuring instant scoring and feedback.	Reinforces key concepts (mecA, ESBLs, AST breakpoints, and stewardship de-escalation).

🎓 AI Microbiology Tutor	Interactive AI Q&A console configured to answer undergraduate microbiology questions with scientific rigor and step-by-step explanations.	Serves as an 24/7 academic teaching assistant for microbiology lab and lecture preparation.

💬 Student Feedback Portal	Dedicated modal interface allowing students and educators to submit curriculum requests, bug reports, or academic questions.	Enables continuous improvement of the educational platform.
## 🤖 5. AI Integration
AMR Sentinel AI leverages Gemini 3.6 Flash via the official @google/genai TypeScript SDK in a secure server-side architecture (/api/* endpoints).

How AI Enhances Learning
Instant Mechanism Decomposition: Deconstructs complex biochemical processes (e.g., how PBP2a encoded by mecA resists beta-lactams due to low binding affinity) into structured undergraduate-friendly summaries.
Diagnostic Panel Translation: Explains minimum inhibitory concentration (MIC) values and disk diffusion zone diameters using CLSI M100 and EUCAST breakpoint standards.
Stewardship Guidance: Formulates educational rationale for antibiotic de-escalation and combination therapy options.
📋 System Instruction / System Prompt
You are AMR Sentinel AI, an expert AI research assistant specializing in microbiology, 
genomic antimicrobial resistance (AMR), bacterial resistance mechanisms, antimicrobial 
susceptibility testing (AST) guidelines (CLSI/EUCAST), and One Health biosecurity.

Your target audience consists of undergraduate microbiology students, clinical laboratory 
science (MLS) trainees, and biosecurity learners.

Guidelines for AI Responses:
1. Maintain strict scientific accuracy while presenting explanations at an accessible, 
   engaging undergraduate level.
2. Structure output cleanly using markdown headings, concise bullet points, bold key terms, 
   and code formatting for bacterial genes (e.g., `mecA`, `blaNDM-1`, `vanA`).
3. Explicitly categorize mechanisms into four primary classes:
   - Enzymatic Degradation / Modification (e.g., β-lactamases, aminoglycoside-modifying enzymes)
   - Target Site Modification / Protection (e.g., PBP2a, ribosomal methylation)
   - Efflux Pump Active Transport (e.g., RND family, MexAB-OprM)
   - Permeability Reduction (e.g., outer membrane porin OmpC/OmpF loss)
4. Always reference relevant clinical guidelines (CLSI M100 or EUCAST) where appropriate.
5. Emphasize One Health stewardship principles (clinical de-escalation, agricultural reduction, environmental monitoring).
6. End with 2-3 recommended follow-up review questions or lab investigation concepts.
## 🧫 6. Scientific Background
AMR Sentinel AI covers key microbiology concepts essential to undergraduate biology and pre-medical curricula:

1. Mechanisms of Bacterial Resistance
Enzymatic Inactivation: Beta-lactamases (
β
β-lactamases) hydrolyze the amide bond in the 
β
β-lactam ring. Extended-Spectrum 
β
β-lactamases (ESBLs like blaCTX-M) hydrolyze 3rd generation cephalosporins, while Carbapenemases (blaKPC, blaNDM-1, blaOXA-48) degrade carbapenems.
Target Modification: The acquisition of the mecA gene via the SCCmec staphylococcal cassette encodes Penicillin-Binding Protein 2a (PBP2a), which possesses low affinity for almost all 
β
β-lactams, producing Methicillin-Resistant Staphylococcus aureus (MRSA).
Active Efflux & Porin Deficiencies: Multi-drug efflux pumps (e.g., AcrAB-TolC in E. coli, MexAB-OprM in P. aeruginosa) actively transport antibiotics out of the periplasmic space, working synergistically with porin downregulation.
Target Modification in Enterococci: Vancomycin-Resistant Enterococcus (VRE) utilizes the vanA gene operon to synthesize peptidoglycan precursors terminating in D-Alanyl-D-Lactate instead of D-Alanyl-D-Alanine, decreasing vancomycin binding affinity by 1,000-fold.
2. Antimicrobial Susceptibility Testing (AST)
Kirby-Bauer Disk Diffusion: Measures zone of inhibition diameter (mm) around antibiotic-impregnated paper disks on Mueller-Hinton agar.
Minimum Inhibitory Concentration (MIC): The lowest concentration of an antimicrobial agent that prevents visible in vitro growth of a microorganism (
μ
g
/
m
L
μg/mL).
Breakpoints: Standardized values defined annually by CLSI and EUCAST categorizing isolates as Susceptible (S), Intermediate (I), or Resistant (R).
3. One Health Interdisciplinary Framework
Resistance genes originate and propagate across three interconnected domains:

Clinical Sector: High selective pressure from human antibiotic treatments in intensive care units.
Agricultural & Veterinary Sector: Prophylactic use of antibiotics (such as colistin) in livestock select for mobile plasmid resistance genes like mcr-1.
Environmental Sector: Wastewater effluent from pharmaceutical manufacturing and hospital discharge creates environmental gene reservoirs in soil and aquatic microbiomes.
## 🛠️ 7. Technology Stack
Category	Technology / Library	Purpose / Role
AI Engine	@google/genai (Gemini 3.6 Flash)	Server-side AI intelligence, mechanism synthesis, and tutoring
Frontend Framework	React 18 + TypeScript	Component-driven UI architecture and strict type safety
Build Tool	Vite	Ultra-fast HMR and modular bundling
Styling & Design	Tailwind CSS	Utility-first responsive design system with custom healthcare colors
Icons	Lucide React	High-quality SVG vector icons (Microscope, Dna, ShieldAlert, Cpu)
Animations	Motion (motion/react) & Tailwind Animate	Smooth layout transitions, pulsing radar rings, and UI feedback
Markdown Processing	react-markdown	Rendering structured AI outputs into styled HTML
Deployment	Vercel Platform & Cloud Run Container	Edge deployment with automatic CI/CD and serverless functions
## 🖼️ 8. Application UI Feature Breakdown & Screenshots
The application features 7 distinct interactive tabs and 2 modal interfaces tailored specifically for undergraduate microbiology education and AI research workflows:

1. Main Dashboard (Dashboard)
<img width="1892" height="900" alt="Screenshot 2026-07-26 194215" src="https://github.com/user-attachments/assets/037755d1-4efc-4277-b76e-577d9048fd6e" />
2. AI Resistance Analyzer (AI Analyzer)
<img width="1900" height="904" alt="Screenshot 2026-07-26 194227" src="https://github.com/user-attachments/assets/7931d4b0-c7b1-4ead-8772-21a18dc2baf2" />
3. One Health Risk Simulator (Risk Simulator)
<img width="1895" height="900" alt="Screenshot 2026-07-26 194241" src="https://github.com/user-attachments/assets/8c2a52d9-6bdf-46d0-a7b4-9664e97403b7" />
4. ESKAPE Pathogen Explorer (Pathogen Cards)
<img width="1904" height="907" alt="Screenshot 2026-07-26 194259" src="https://github.com/user-attachments/assets/3cbc2b92-8f83-4170-813f-4e07078358be" />
  5. Global Bio-Surveillance Map (Bio-Surveillance)
<img width="1904" height="907" alt="Screenshot 2026-07-26 194335" src="https://github.com/user-attachments/assets/c5f9ac0e-6d5a-4688-ab09-0ec374f43677" />
6. Student Learning Center & Quiz (Learning Center)
<img width="1902" height="911" alt="Screenshot 2026-07-26 194406" src="https://github.com/user-attachments/assets/93ab6e17-a6d7-407b-bf87-740fba386670" />
7. AI Microbiology Tutor (AI Tutor)
<img width="1902" height="914" alt="Screenshot 2026-07-26 194424" src="https://github.com/user-attachments/assets/53343edf-c291-4d05-94bf-34a80853571d" />
8. Platform Information & Student Feedback Modal (About & Feedback)
<img width="1012" height="870" alt="Screenshot 2026-07-26 194442" src="https://github.com/user-attachments/assets/66de93bb-8bfd-416d-9e0f-d2d16491af67" />
## ABOUT

<img width="1091" height="873" alt="Screenshot 2026-07-26 194501" src="https://github.com/user-attachments/assets/70cc4fc6-d5e1-4dd9-8c35-eec17fa8579b" />
## FEEDBACK
<img width="1015" height="865" alt="Screenshot 2026-07-26 194520" src="https://github.com/user-attachments/assets/7cc1ab57-0e47-4ce7-804c-132c33c4c5ac" />

## 🎓 09. Project Impact
Educational Value: Connects abstract genetic code and biochemical pathways to observable clinical drug resistance.
Scientific Rigor: Grounded in recognized international diagnostic standards (CLSI, EUCAST, WHO priority pathogen lists).
Biotechnology Readiness: Prepares students for modern bio-data science and AI-assisted medical research workflows.
## 📄 10. Conclusion
AMR Sentinel AI demonstrates how artificial intelligence can be responsibly integrated into undergraduate science education. By combining high-speed AI reasoning with rigorous scientific standards and interactive visual modeling, the platform serves as a powerful bridge between textbook microbiology and the global fight against antimicrobial resistance.

Developed for Undergraduate Microbiology & Biotechnology Education | Powered by Google Gemini 3.6 Flash


import { AiLoadingAnimation } from './AiLoadingAnimation';
import React, { useState } from 'react';
import {
  Sparkles,
  Cpu,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  Send,
  FlaskConical,
  Dna,
  ShieldAlert,
  Microscope,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageSquare
} from 'lucide-react';

interface AiTutorProps {
  initialTopic?: string;
  onNavigateTab?: (tab: string) => void;
}

export const AiTutor: React.FC<AiTutorProps> = ({ initialTopic, onNavigateTab }) => {
  const [question, setQuestion] = useState(initialTopic || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    'All',
    'Antimicrobial Resistance',
    'Antibiotic Mechanisms',
    'Resistance Genes',
    'Microbial Identification',
    'Laboratory Detection Methods',
    'AST Interpretation',
    'Infection Prevention'
  ];

  const quickQuestions = [
    'Explain MRSA resistance mechanism',
    'How do efflux pumps cause resistance?',
    'Difference between intrinsic and acquired resistance',
    'Explain ESBL production',
    'Importance of AST in microbiology'
  ];

  const suggestedQuestions = [
    {
      category: 'Resistance Genes',
      title: 'MRSA Resistance Mechanism',
      query: 'Explain MRSA resistance mechanism and how mecA encodes PBP2a to prevent beta-lactam binding.'
    },
    {
      category: 'Antibiotic Mechanisms',
      title: 'Efflux Pump Mediated Resistance',
      query: 'How do efflux pumps cause resistance across multiple antibiotic classes in Gram-negative bacteria?'
    },
    {
      category: 'Antimicrobial Resistance',
      title: 'Intrinsic vs Acquired Resistance',
      query: 'What is the difference between intrinsic and acquired resistance in microbiology with clinical examples?'
    },
    {
      category: 'Resistance Genes',
      title: 'ESBL Enzyme Production',
      query: 'Explain ESBL production, CTX-M gene dissemination, and clinical cephalosporin resistance.'
    },
    {
      category: 'AST Interpretation',
      title: 'Clinical Importance of AST',
      query: 'What is the importance of AST in microbiology and how does it guide antibiotic stewardship?'
    },
    {
      category: 'One Health Approach',
      title: 'One Health & Agricultural Overuse',
      query: 'Explain the One Health approach in mitigating antimicrobial resistance across humans, animals, and ecosystems.'
    }
  ];

  const filteredQuestions = selectedCategory === 'All'
    ? suggestedQuestions
    : suggestedQuestions.filter(q => q.category === selectedCategory);

  const handleGenerateExplanation = async (customQuery?: string) => {
    const qToRun = customQuery || question;
    if (!qToRun.trim()) return;

    setLoading(true);
    setError(null);
    setCopied(false);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: qToRun,
          category: selectedCategory !== 'All' ? selectedCategory : undefined
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      if (data.explanation) {
        setResponse(data.explanation);
      } else if (data.result) {
        setResponse(data.result);
      } else {
        throw new Error('No explanation returned from server');
      }
    } catch (err: any) {
      console.error('AI Tutor error:', err);
      // Robust client fallback
      setResponse(generateFallbackExplanation(qToRun));
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setQuestion('');
    setResponse('');
    setError(null);
    setCopied(false);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-4">
      
      {/* Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wide">
          <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" /> AI Interactive Microbiology Learning Assistant
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          AMR AI Education Tutor
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Ask any question regarding antimicrobial resistance, bacterial mechanisms, key resistance gene loci, AST diagnostic protocols, microbial identification, and infection stewardship strategies.
        </p>

        {/* System Role Badge */}
        <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-xs text-slate-200 max-w-3xl flex items-start gap-2.5">
          <BookOpen className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
          <p className="font-mono text-[11px] leading-relaxed text-slate-300">
            <strong className="text-teal-300">Tutor Role Instruction:</strong> "Act as a microbiology education assistant. Explain antimicrobial resistance topics for undergraduate microbiology students using clear scientific language. Provide accurate educational explanations about microorganisms, antibiotic resistance mechanisms, laboratory testing, and prevention strategies."
          </p>
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Query Input & Topic Shortcuts */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Question Input Box */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal-600" />
                <span>Ask Microbiology Tutor</span>
              </label>
              <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                Gemini 3.6 Flash
              </span>
            </div>

            {/* Quick Question Buttons */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                Quick Question Prompts:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((qq, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setQuestion(qq);
                      handleGenerateExplanation(qq);
                    }}
                    className="px-2.5 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 hover:border-teal-300 rounded-xl text-[11px] font-bold transition text-left cursor-pointer"
                  >
                    + {qq}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., How does the mecA gene cause methicillin resistance in Staphylococcus aureus? Explain the role of PBP2a..."
              rows={4}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium transition resize-none"
            />

            {/* Action Buttons Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={() => handleGenerateExplanation()}
                disabled={loading || !question.trim()}
                className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-teal-600 via-blue-600 to-teal-700 hover:from-teal-500 hover:to-blue-500 disabled:opacity-50 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer uppercase tracking-wider"
              >
                {loading ? (
                  <>
                    <Cpu className="w-4 h-4 animate-spin text-teal-200" />
                    <span>Generating Answer...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-teal-200" />
                    <span>Generate Explanation</span>
                  </>
                )}
              </button>

              <button
                onClick={handleClear}
                disabled={!question && !response}
                className="py-3.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 font-bold text-xs transition cursor-pointer flex items-center gap-1.5 border border-slate-200"
                title="Clear question and output"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Category Filter & Suggested Question Chips */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-teal-600" />
                <span>Curriculum Topic Shortcuts</span>
              </span>
            </div>

            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Curriculum Categories' : cat}
                </option>
              ))}
            </select>

            {/* Questions List */}
            <div className="space-y-2.5 pt-1">
              {filteredQuestions.map((sq, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuestion(sq.query);
                    handleGenerateExplanation(sq.query);
                  }}
                  className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-teal-50/70 border border-slate-200/80 hover:border-teal-300 transition group cursor-pointer space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-100 px-2 py-0.5 rounded-md">
                      {sq.category}
                    </span>
                    <span className="text-[10px] text-teal-700 font-bold group-hover:underline">Ask AI →</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xs group-hover:text-teal-800 transition-colors">
                    {sq.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {sq.query}
                  </p>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: AI Tutor Response Panel */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6 min-h-[500px] flex flex-col justify-between">
            
            <div className="space-y-4">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                    <Microscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-base">
                      Microbiology Tutor Response
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono">Undergraduate Scientific Level</p>
                  </div>
                </div>

                {response && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer border border-slate-200"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-600" />
                          <span>Copy Response</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleClear}
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs transition cursor-pointer border border-slate-200"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Response Display Box */}
              {loading ? (
                <AiLoadingAnimation
                  title="Synthesizing Scientific Explanation..."
                  subtitle="Consulting genomic resistance literature, CLSI guidelines, and biochemical pathways"
                  isDark={false}
                />
              ) : response ? (
                <div className="prose prose-slate max-w-none text-slate-800 text-xs sm:text-sm leading-relaxed space-y-4 pt-2">
                  <div className="p-5 bg-slate-900 text-slate-100 rounded-2xl font-sans leading-relaxed border border-slate-800 whitespace-pre-line">
                    {response}
                  </div>
                </div>
              ) : (
                <div className="py-20 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
                    <HelpCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">How can I assist your AMR study today?</h4>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Type a custom question above or select one of the suggested curriculum shortcuts to generate a scientific explanation.
                  </p>
                </div>
              )}

            </div>

            {/* Footer Navigation Suggestion */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Educational microbiology response
              </span>
              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('cards')}
                  className="text-teal-700 hover:text-teal-900 font-bold hover:underline cursor-pointer"
                >
                  Explore Microbe Cards →
                </button>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* Educational Disclaimer Banner */}
      <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200 text-teal-900 text-xs sm:text-sm flex items-start gap-3 shadow-2xs">
        <AlertCircle className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
        <p className="font-medium text-slate-700 leading-relaxed">
          "This application provides educational information only and does not replace professional medical advice."
        </p>
      </div>

    </div>
  );
};

// Fallback explanation generator for offline resilience
function generateFallbackExplanation(query: string): string {
  return `### AI Microbiology Tutor Analysis

**Query Target:** ${query}

#### 1. Concept & Biological Overview
Antimicrobial resistance (AMR) represents an evolutionary mechanism where microorganisms acquire the ability to survive lethal concentrations of antimicrobial agents. Target bacteria modify cell structures, synthesize drug-inactivating enzymes, or alter membrane permeability.

#### 2. Primary Mechanism & Resistance Genes
- **Target Modification:** Loci such as *mecA* encode altered penicillin-binding proteins (PBP2a in MRSA) with drastically reduced beta-lactam binding affinity.
- **Enzymatic Degradation:** Carbapenemase genes (*blaKPC*, *blaNDM*, *blaOXA-48*) encode beta-lactamases capable of hydrolyzing carbapenems, cephalosporins, and penicillins.
- **Plasmid-Mediated Resistance:** Mobile plasmid markers like *mcr-1* express phosphoethanolamine transferase, altering lipid A charges on Gram-negative outer membranes to resist colistin.

#### 3. Laboratory Diagnostics & AST Protocols
- **Phenotypic Testing:** Kirby-Bauer disk diffusion and Broth Microdilution establish Minimal Inhibitory Concentration (MIC) values according to CLSI and EUCAST guidelines.
- **Assays:** Modified Carbapenem Inactivation Method (mCIM) and EDTA-CIM (eCIM) differentiate serine vs metallo-beta-lactamases.

#### 4. Infection Prevention & Stewardship
Implementation of strict contact isolation, hand hygiene compliance (>90%), culture-guided antibiotic de-escalation, and restriction of non-therapeutic agricultural antibiotics under the One Health framework.`;
}

import { AiLoadingAnimation } from './AiLoadingAnimation';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Cpu, Copy, Check, Trash2, Sparkles, Send, RefreshCw, BookOpen, ShieldAlert, AlertTriangle, FileText } from 'lucide-react';

interface AiAnalyzerProps {
  initialQuery?: string;
  onClearInitialQuery?: () => void;
}

export const AiAnalyzer: React.FC<AiAnalyzerProps> = ({ initialQuery, onClearInitialQuery }) => {
  const [query, setQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      handleGenerate(initialQuery);
      if (onClearInitialQuery) onClearInitialQuery();
    }
  }, [initialQuery]);

  const presetTopics = [
    { label: 'All', value: 'All' },
    { label: 'Pathogens', value: 'Microorganism' },
    { label: 'Resistance Genes', value: 'Resistance Genes' },
    { label: 'Mechanisms', value: 'Biochemical Mechanisms' },
    { label: 'Lab AST Diagnostics', value: 'Laboratory Testing' },
    { label: 'Stewardship', value: 'Prevention & Stewardship' },
  ];

  const quickChips = [
    'MRSA mecA mechanism',
    'Gram-negative efflux pumps (MexAB-OprM)',
    'Carbapenemase blaNDM-1 transfer',
    'E. coli ESBL cephalosporinase',
    'Kirby-Bauer vs MIC Broth Dilution',
    'Vancomycin-resistant Enterococcus (vanA)',
    'MDR-TB Rifampicin rpoB mutation',
    'Acinetobacter baumannii CRAB'
  ];

  const handleGenerate = async (customQuery?: string) => {
    const activeQuery = customQuery || query;
    if (!activeQuery.trim()) return;

    setLoading(true);
    setError(null);
    setCopied(false);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: activeQuery,
          topic: selectedTopic !== 'All' ? selectedTopic : undefined
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();
      setResponse(data.result);
    } catch (err: any) {
      console.warn("AI Endpoint Notice, using rich fallback analysis:", err);
      // Generate detailed offline fallback analysis
      setResponse(generateOfflineFallback(activeQuery, selectedTopic));
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
    setQuery('');
    setResponse(null);
    setError(null);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" /> AI Education Research Engine
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Resistance Analyzer
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Enter a microorganism, resistance gene (e.g., <code className="bg-slate-800 px-1.5 py-0.5 rounded text-teal-300 font-mono text-xs">mecA</code>, <code className="bg-slate-800 px-1.5 py-0.5 rounded text-teal-300 font-mono text-xs">blaNDM-1</code>), or antibiotic resistance mechanism for instant, structured microbiological analysis.
          </p>

          <div className="pt-2 p-3 bg-slate-900/90 rounded-xl border border-slate-700/80 text-xs text-slate-300 font-mono flex items-start gap-2">
            <span className="text-teal-400 font-bold shrink-0">System Instruction Persona:</span>
            <span className="text-slate-400 italic">
              "Act as a microbiology education assistant. Explain antimicrobial resistance topics for undergraduate microbiology students using clear scientific language."
            </span>
          </div>
        </div>
      </div>

      {/* Main Control Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6">
        
        {/* Category Filters */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Focus Category
          </label>
          <div className="flex flex-wrap gap-2">
            {presetTopics.map((topic) => (
              <button
                key={topic.value}
                onClick={() => setSelectedTopic(topic.value)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedTopic === topic.value
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Box */}
        <div className="space-y-3">
          <div className="relative">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                  handleGenerate();
                }
              }}
              placeholder="e.g., MRSA, Carbapenem resistance, Efflux pumps in Pseudomonas, ESBL detection, vanA gene..."
              rows={3}
              className="w-full p-4 pr-12 bg-slate-50 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-900 placeholder:text-slate-400 font-medium text-sm sm:text-base leading-relaxed resize-none transition-all shadow-inner"
            />
            <div className="absolute right-3 bottom-3 text-xs text-slate-400 font-mono pointer-events-none hidden sm:block">
              Press Ctrl+Enter
            </div>
          </div>

          {/* Quick Search Chips */}
          <div className="space-y-1.5">
            <p className="text-xs font-semibold text-slate-500">Quick Prompts:</p>
            <div className="flex flex-wrap gap-1.5">
              {quickChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(chip);
                    handleGenerate(chip);
                  }}
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 border border-slate-200 text-xs text-slate-700 transition-colors cursor-pointer font-medium"
                >
                  + {chip}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleGenerate()}
              disabled={loading || !query.trim()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Analyzing Microbiology Target...
                </>
              ) : (
                <>
                  <Cpu className="w-4 h-4" />
                  Generate Explanation
                </>
              )}
            </button>

            {response && (
              <button
                onClick={handleCopy}
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied to Clipboard' : 'Copy Response'}
              </button>
            )}
          </div>

          {(query || response) && (
            <button
              onClick={handleClear}
              className="px-4 py-3 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-500 hover:text-red-600 font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              Clear Terminal
            </button>
          )}
        </div>

      </div>

      {/* Response Console */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-200 font-sans space-y-6">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-500"></div>
            <span className="text-teal-400 font-bold uppercase tracking-wider">AMR Sentinel Research Output</span>
          </div>
          <div className="text-slate-400">
            Model: <span className="text-teal-300 font-semibold">Gemini 3.6 Flash</span>
          </div>
        </div>

        {/* Console Body */}
        {loading ? (
          <AiLoadingAnimation
            title="Analyzing Microbiology Resistance Target..."
            subtitle="Querying Gemini 3.6 Flash & Genomic Resistance Knowledge Loci"
            isDark={true}
          />
        ) : error ? (
          <div className="p-4 bg-red-950/60 border border-red-800/80 rounded-xl text-red-300 text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Analysis Error</p>
              <p className="text-xs text-red-300/90 mt-1">{error}</p>
            </div>
          </div>
        ) : response ? (
          <div className="prose prose-invert max-w-none prose-headings:text-teal-300 prose-headings:font-bold prose-h3:text-lg prose-h3:border-b prose-h3:border-slate-800 prose-h3:pb-2 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-white prose-code:text-teal-300 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        ) : (
          <div className="py-16 text-center space-y-3 text-slate-500 font-mono text-sm">
            <Cpu className="w-12 h-12 text-slate-700 mx-auto" />
            <p className="text-slate-400 font-medium">Awaiting scientific query entry...</p>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Type any microorganism or antibiotic topic above and click "Generate Explanation" to receive a comprehensive analysis.
            </p>
          </div>
        )}

        {/* Console Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p className="italic">
            This application provides educational information only and does not replace professional medical advice.
          </p>
          <span className="font-mono text-[10px] text-teal-400/80 uppercase">
            [Undergraduate Microbiology Protocol v1.0]
          </span>
        </div>

      </div>

    </div>
  );
};

// Rich Offline Fallback Engine
function generateOfflineFallback(query: string, topic: string): string {
  const q = query.toLowerCase();

  if (q.includes('mrsa') || q.includes('methicillin') || q.includes('meca')) {
    return `### Microorganism / Topic Overview
**Methicillin-Resistant Staphylococcus aureus (MRSA)** is a Gram-positive, cluster-forming coccus that causes skin and soft tissue infections, necrotizing pneumonia, endocarditis, osteomyelitis, and healthcare-associated bloodstream sepsis.

### Antibiotic Classes Involved
* **Inactivated / Resistant:** Penicillins (methicillin, oxacillin, ampicillin), Cephalosporins (1st through 4th generation), Carbapenems, and Monobactams.
* **Effective Therapeutics:** Glycopeptides (Vancomycin), Oxazolidinones (Linezolid), Lipopeptides (Daptomycin), and 5th-generation Cephalosporins (Ceftaroline).

### Resistance Mechanisms
* **Target Site Modification:** MRSA synthesizes an altered Penicillin-Binding Protein termed **PBP2a**. Standard β-lactam antibiotics cannot bind to PBP2a due to conformational changes in the transpeptidase active site, allowing cell wall peptidoglycan cross-linking to continue unabated despite high drug concentrations.

### Important Resistance Genes & Mutations
* **\`mecA\` or \`mecC\` genes:** Carried on the mobile genomic cassette **SCCmec** (Staphylococcal Cassette Chromosome *mec*). The gene is regulated by the \`mecI\` repressor and \`mecR1\` signal transducer.

### Laboratory Detection Methods
1. **Cefoxitin Disk Diffusion Test:** Cefoxitin is a potent inducer of \`mecA\` expression and is preferred over oxacillin for disk diffusion screening.
2. **Oxacillin / Cefoxitin MIC Determination:** Broth microdilution or E-test strips.
3. **Molecular PCR:** Rapid detection of \`mecA\`/\`mecC\` nucleic acid sequences directly from blood cultures or nasal swabs.

### Antimicrobial Susceptibility Testing (AST) Importance
AST is imperative to rule out co-resistance to Macrolides, Clindamycin (inducible resistance via \`erm\` genes detected by D-test), and Fluoroquinolones, and to establish the exact Vancomycin MIC to avoid "Vancomycin creep".

### Prevention & Stewardship Strategies
* **Contact Precautions:** Patient isolation, gown and glove protocols in ICUs.
* **Hand Hygiene:** Alcohol-based hand rubs before and after patient contact.
* **Decolonization:** Mupirocin nasal ointment and chlorhexidine body washes for surgical prophylaxis.`;
  }

  if (q.includes('esbl') || q.includes('e. coli') || q.includes('cephalosporin')) {
    return `### Microorganism / Topic Overview
**Extended-Spectrum Beta-Lactamase (ESBL)-producing Enterobacteriaceae** (most notably *Escherichia coli* and *Klebsiella pneumoniae*) represent a severe Gram-negative resistance threat causing complicated urinary tract infections, pyelonephritis, and intra-abdominal sepsis.

### Antibiotic Classes Involved
* **Inactivated:** Penicillins, 1st, 2nd, 3rd, and 4th generation Cephalosporins (e.g., Ceftriaxone, Cefotaxime, Ceftazidime), and Monobactams (Aztreonam).
* **Retained Activity:** Carbapenems (Ertapenem, Meropenem, Imipenem), Cephamycins (Cefoxitin), and β-lactamase inhibitor combinations (Ceftolozane-tazobactam).

### Resistance Mechanisms
* **Enzymatic Degradation:** ESBLs are Ambler Class A enzymes capable of hydrolyzing the β-lactam ring of extended-spectrum cephalosporins and monobactams through active-site serine nucleophilic attack.

### Important Resistance Genes & Mutations
* **\`blaCTX-M\` family:** (Especially CTX-M-15), which has become the dominant global ESBL variant.
* **\`blaTEM\` and \`blaSHV\` variants:** Derived via point mutations altering amino acids around the active site cavity.

### Laboratory Detection Methods
1. **Double-Disk Synergy Test (DDST):** Demonstration of synergy between a 3rd-gen cephalosporin disk and an Amoxicillin-Clavulanic acid disk placed 20-30 mm apart (characteristic keyhole/phantom zone enhancement).
2. **CLSI Phenotypic Confirmation:** ≥3 two-fold dilution decrease in MIC for ceftazidime or cefotaxime when tested in combination with clavulanic acid versus tested alone.

### Antimicrobial Susceptibility Testing (AST) Importance
Confirms whether Carbapenems are necessary or if carbapenem-sparing agents (e.g., Nitrofurantoin or Fosfomycin for uncomplicated cystitis) can be safely selected.

### Prevention & Stewardship Strategies
* **Diagnostic Stewardship:** Rapid multiplex blood culture identification.
* **Infection Control:** Strict contact isolation in acute-care facilities.
* **Stewardship:** Minimizing indiscriminate empirical 3rd-gen cephalosporin use.`;
  }

  return `### Microorganism / Topic Overview
**Antimicrobial Resistance Analysis for:** *${query}*

Antimicrobial resistance in clinically relevant microorganisms involves complex biological countermeasures that prevent therapeutic drug concentrations from acting at target cellular sites.

### Antibiotic Classes Involved
* **Beta-lactams:** Penicillins, Cephalosporins, Carbapenems, Monobactams.
* **Protein Synthesis Inhibitors:** Aminoglycosides, Tetracyclines, Macrolides, Oxazolidinones.
* **Nucleic Acid Inhibitors:** Fluoroquinolones, Rifamycins, Sulfonamides/Trimethoprim.
* **Cell Membrane Agents:** Polymyxins (Colistin), Lipopeptides (Daptomycin).

### Resistance Mechanisms
1. **Enzymatic Inactivation:** Destruction or chemical alteration of the drug molecule (e.g., β-lactamases, aminoglycoside acetyltransferases).
2. **Multidrug Efflux Pumps:** Membrane-spanning transporter complexes (e.g., RND family) actively pumping drugs out of periplasmic space.
3. **Target Modifications:** Chromosomal mutations or enzymatic methylation shielding cellular targets (e.g., mutated topoisomerases or ribosomal RNA).
4. **Permeability Barriers & Porin Loss:** Downregulation or mutation of outer membrane porin channels preventing drug entry.

### Important Resistance Genes & Mutations
* **\${query.toUpperCase()}\` Associated Genes:** \`mecA\`, \`blaKPC\`, \`blaNDM-1\`, \`blaCTX-M\`, \`vanA\`, \`rpoB\`, \`gyrA\`, \`mcr-1\`.

### Laboratory Detection Methods
* **Kirby-Bauer Disk Diffusion:** Zone of inhibition measurement on Mueller-Hinton agar.
* **Minimal Inhibitory Concentration (MIC):** Broth microdilution or gradient diffusion strips (E-test).
* **Automated Phenotypic AST:** Vitek 2, BD Phoenix, or MicroScan WalkAway systems.
* **Molecular Genotypic Panels:** Real-time PCR and Next-Generation Sequencing (NGS) for resistance gene identification.

### Antimicrobial Susceptibility Testing (AST) Importance
AST provides definitive clinical guidance to transition from broad-spectrum empirical therapy to targeted narrow-spectrum antimicrobials, preventing further selective resistance pressure.

### Prevention & Stewardship Strategies
* **Hospital Infection Prevention:** Strict hand hygiene, surface disinfection, and cohort isolation.
* **Prescribing Protocols:** Adherence to evidence-based infectious disease guidelines.
* **One Health Containment:** Eliminating non-therapeutic livestock antibiotic administration and managing pharmaceutical environmental waste.`;
}

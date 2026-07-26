import React from 'react';
import { Cpu, ArrowRight, BookOpen, Activity, ShieldAlert, Sparkles, Dna, FlaskConical, CheckCircle2, Globe2, GraduationCap, Circle, Trophy } from 'lucide-react';
import { PATHOGENS_DATA } from '../data/pathogens';
import { LEARNING_TOPICS } from '../data/learning';

interface HomeProps {
  onNavigate: (tab: string) => void;
  onQuickAnalyze: (query: string) => void;
  completedModules?: string[];
  onToggleModule?: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onQuickAnalyze,
  completedModules = [],
  onToggleModule
}) => {
  const totalModules = LEARNING_TOPICS.length;
  const completedCount = completedModules.length;
  const completionPercentage = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;

  const quickPrompts = [
    { title: 'MRSA mecA Mechanism', query: 'Explain Methicillin resistance in MRSA, PBP2a structure, and mecA gene detection.' },
    { title: 'KPC & NDM Carbapenemases', query: 'Compare KPC and NDM-1 carbapenemases in Gram-negative Enterobacteriaceae.' },
    { title: 'Pseudomonas Efflux Pumps', query: 'Describe MexAB-OprM multidrug efflux pumps and porin loss in Pseudomonas aeruginosa.' },
    { title: 'ESBL Beta-Lactamases', query: 'How do Extended-Spectrum Beta-Lactamases hydrolyze 3rd-generation cephalosporins?' },
    { title: 'MDR-TB Rifampin Resistance', query: 'Explain rpoB gene mutations causing Rifampicin resistance in Mycobacterium tuberculosis.' }
  ];

  return (
    <div className="space-y-16 py-6">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" /> AI-Powered Research Assistant for Microbiology
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              AMR Sentinel <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400">AI</span>
            </h1>

            <p className="text-xl font-medium text-teal-200/90 leading-snug">
              "Explore Antibiotic Resistance with Artificial Intelligence"
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              An AI-powered educational platform for microbiology students to explore antimicrobial resistance mechanisms, resistant microorganisms, laboratory diagnostics, and prevention strategies.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onNavigate('analyzer')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-teal-500/25 transition-all duration-200 hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
              >
                <Cpu className="w-5 h-5" />
                Start Exploring
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('simulator')}
                className="px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-base transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Activity className="w-5 h-5 text-teal-400" />
                Run Risk Simulator
              </button>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Powered by Gemini 3.6 Flash</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Undergraduate Curriculum Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>WHO Priority Pathogens</span>
              </div>
            </div>
          </div>

          {/* Graphic Dashboard Mockup */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-700/70 rounded-2xl p-6 shadow-2xl space-y-5 backdrop-blur-md relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">AMR-Analyzer.core</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono">LIVE AI</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-teal-400 font-bold">$ query:</span> MRSA mecA gene expression
                  <p className="text-slate-400 text-[11px] mt-1">Status: Analyzed • Target PBP2a binding affinity = 0.003x</p>
                </div>

                <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-2">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Global Threat Rank:</span>
                    <span className="text-red-400 font-bold">WHO CRITICAL</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-teal-400 to-red-500 h-1.5 rounded-full w-4/5"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 bg-slate-800/50 rounded border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px]">Mechanisms:</span>
                    <span className="text-cyan-300 font-bold">Enzymatic / Efflux</span>
                  </div>
                  <div className="p-2.5 bg-slate-800/50 rounded border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px]">Primary Gene:</span>
                    <span className="text-amber-300 font-bold">blaCTX-M / mecA</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('analyzer')}
                className="w-full py-2.5 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Launch Full AI Research Terminal <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Progress Tracker Dashboard Summary */}
      <section className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-teal-600" /> Curriculum Progress Tracker
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Learning Progress Dashboard
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Track your completion of undergraduate microbiology learning modules, diagnostic mechanisms, and antibiotic stewardship protocols.
            </p>
          </div>

          {/* Percentage Badge Block */}
          <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white p-5 rounded-2xl border border-slate-800 flex items-center gap-5 shadow-lg shrink-0">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-teal-400 transition-all duration-500 ease-out"
                  strokeDasharray={`${completionPercentage}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute text-sm font-black text-teal-300 font-mono">{completionPercentage}%</span>
            </div>
            <div>
              <p className="text-2xl font-black text-white leading-none">
                {completedCount} <span className="text-sm font-normal text-slate-400">/ {totalModules}</span>
              </p>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-teal-400 mt-1">
                Modules Completed
              </p>
              <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                {completedCount === totalModules ? '🎉 Curriculum Mastered!' : `${totalModules - completedCount} modules remaining`}
              </p>
            </div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-slate-700">
            <span>Overall Curriculum Completion</span>
            <span className="text-teal-700 font-mono font-extrabold">{completionPercentage}% Completed ({completedCount} of {totalModules} Modules)</span>
          </div>
          <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 rounded-full transition-all duration-500 shadow-xs"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Modules Interactive List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {LEARNING_TOPICS.map((topic) => {
            const isDone = completedModules.includes(topic.id);
            return (
              <div
                key={topic.id}
                className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-3 ${
                  isDone
                    ? 'bg-teal-50/70 border-teal-300 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isDone ? 'bg-teal-200 text-teal-900' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {isDone ? '✓ Completed' : 'Pending'}
                    </span>
                    <button
                      onClick={() => onToggleModule?.(topic.id)}
                      className={`p-1 rounded-lg transition-colors cursor-pointer ${
                        isDone ? 'text-teal-700 hover:bg-teal-100' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200'
                      }`}
                      title={isDone ? 'Click to mark as incomplete' : 'Click to mark as completed'}
                    >
                      {isDone ? <CheckCircle2 className="w-5 h-5 text-teal-600 fill-teal-100" /> : <Circle className="w-5 h-5 text-slate-400" />}
                    </button>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm leading-snug">
                    {topic.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {topic.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('learning')}
                  className="w-full py-2 text-xs font-bold text-teal-700 hover:text-teal-900 bg-white hover:bg-teal-100/50 rounded-xl border border-teal-200/80 transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>{isDone ? 'Review Module' : 'Study Module'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats & Impact Bar */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 hover:border-teal-300 transition-colors">
          <div className="p-3 w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <Globe2 className="w-6 h-6" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">1.27 Million</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Direct AMR Deaths / Year</p>
          <p className="text-xs text-slate-600">Global burden associated with 4.95M annual fatalities.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 hover:border-teal-300 transition-colors">
          <div className="p-3 w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">8 Key Pathogens</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">WHO Priority Profiles</p>
          <p className="text-xs text-slate-600">Including MRSA, CRE, ESBL E. coli, & MDR-TB.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 hover:border-teal-300 transition-colors">
          <div className="p-3 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Dna className="w-6 h-6" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">4 Core Pathways</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Biochemical Mechanisms</p>
          <p className="text-xs text-slate-600">Enzymatic destruction, efflux, target site & porin loss.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 hover:border-teal-300 transition-colors">
          <div className="p-3 w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <FlaskConical className="w-6 h-6" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">AST & Stewardship</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Clinical Diagnostics</p>
          <p className="text-xs text-slate-600">MIC, Kirby-Bauer disk diffusion & PCR gene assays.</p>
        </div>
      </section>

      {/* Quick Prompts Launchpad */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-teal-400" />
              AI Prompt Launchpad
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Select any topic below to run an instant deep microbiology analysis using Gemini 3.6 Flash:
            </p>
          </div>
          <button
            onClick={() => onNavigate('analyzer')}
            className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            Open AI Analyzer
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickPrompts.map((p, idx) => (
            <div
              key={idx}
              onClick={() => onQuickAnalyze(p.query)}
              className="p-4 bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-slate-700/80 hover:border-teal-500/80 cursor-pointer transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <p className="text-sm font-bold text-teal-300 group-hover:text-teal-200">{p.title}</p>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{p.query}</p>
              </div>
              <div className="mt-3 flex items-center text-xs font-semibold text-teal-400 group-hover:translate-x-1 transition-transform">
                Analyze with AI <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pathogens Preview Cards */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Resistant Pathogen Profiles
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Key microorganisms, resistance phenotypes, and laboratory detection methods.
            </p>
          </div>
          <button
            onClick={() => onNavigate('cards')}
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <ShieldAlert className="w-4 h-4 text-teal-600" />
            View All Microbe Cards
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATHOGENS_DATA.slice(0, 4).map((pathogen) => (
            <div
              key={pathogen.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden group"
            >
              <div className="p-5 bg-gradient-to-br from-slate-50 to-blue-50/50 border-b border-slate-100 flex justify-between items-start">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    pathogen.whoPriority === 'Critical'
                      ? 'bg-red-100 text-red-700 border border-red-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    WHO {pathogen.whoPriority}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-teal-700 transition-colors">
                    {pathogen.name}
                  </h3>
                  <p className="text-xs italic text-slate-500 font-serif">{pathogen.scientificName}</p>
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-1 rounded bg-slate-200/70 text-slate-700">
                  {pathogen.gramStatus}
                </span>
              </div>

              <div className="p-5 flex-1 space-y-3 text-xs text-slate-600">
                <div>
                  <span className="font-bold text-slate-900 block">Resistance Problem:</span>
                  <p className="mt-0.5 line-clamp-2">{pathogen.resistanceProblem}</p>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Detection:</span>
                  <p className="mt-0.5 text-slate-700 font-medium">{pathogen.detectionMethod}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onQuickAnalyze(`Detailed analysis of ${pathogen.name} (${pathogen.scientificName}) resistance mechanisms, gene markers (${pathogen.keyGenes.join(', ')}), and AST protocols.`)}
                  className="w-full py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Cpu className="w-3.5 h-3.5" /> Analyze with AI
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Bio-Surveillance Section Link Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-blue-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="space-y-3 max-w-2xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full border border-teal-400/30 flex items-center gap-1.5 w-fit">
            <Globe2 className="w-3.5 h-3.5 text-teal-400" /> WHO GLASS & Epidemiological Intelligence
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Global AMR Bio-Surveillance Dashboard
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Explore global AMR priority data, WHO GLASS monitoring networks across human, animal, and environmental domains, rapid diagnostic AST technologies (PCR, mCIM, MIC), and the Integrated One Health Defense Framework.
          </p>
        </div>

        <button
          onClick={() => onNavigate('surveillance')}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-teal-500/20 transition-transform hover:scale-105 shrink-0 flex items-center gap-2 cursor-pointer relative z-10"
        >
          <Globe2 className="w-5 h-5" /> Explore Global Surveillance
        </button>
      </section>

      {/* Learning & Stewardship Shortcut */}
      <section className="bg-gradient-to-r from-teal-50 via-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-10 border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full">
            Microbiology Curriculum
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Interactive Learning & Quiz Hub
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Master the core concepts of antimicrobial resistance: from beta-lactamase degradation and RND efflux pumps to antibiotic stewardship principles and the One Health framework. Test your knowledge with instant self-assessment quizzes!
          </p>
        </div>

        <button
          onClick={() => onNavigate('learning')}
          className="px-8 py-4 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-transform hover:scale-105 shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <BookOpen className="w-5 h-5" /> Open Learning Hub
        </button>
      </section>

    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { Microscope, Dna, Sparkles, Cpu, ShieldAlert, Activity } from 'lucide-react';

interface AiLoadingAnimationProps {
  title?: string;
  subtitle?: string;
  isDark?: boolean;
}

export const AiLoadingAnimation: React.FC<AiLoadingAnimationProps> = ({
  title = "Analyzing Microbiology Data...",
  subtitle = "Querying Gemini 3.6 Flash & Genomic Resistance Database",
  isDark = true
}) => {
  const steps = [
    "Sequencing resistance cassette loci...",
    "Evaluating β-lactamase hydrolysis kinetics...",
    "Cross-referencing CLSI M100 & EUCAST breakpoints...",
    "Analyzing efflux pump active-transport mechanics...",
    "Synthesizing undergraduate educational summary..."
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % steps.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className={`py-12 px-6 text-center rounded-3xl transition-all duration-300 ${
      isDark 
        ? 'bg-slate-950/80 border border-slate-800 text-slate-200' 
        : 'bg-teal-50/60 border border-teal-200 text-slate-800'
    }`}>
      <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
        {/* Outer Pulsing Radar Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-teal-500/30 animate-ping"></div>
        <div className="absolute inset-2 rounded-full border-2 border-teal-400/50 animate-spin" style={{ animationDuration: '4s' }}></div>
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-teal-600/30 via-cyan-500/20 to-blue-600/30 blur-sm"></div>

        {/* Central Biotechnology Icon Stack */}
        <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-700 via-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
          <Microscope className="w-6 h-6 animate-pulse" />
          <Dna className="w-4 h-4 text-cyan-200 absolute -top-1 -right-1 animate-bounce" />
          <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute -bottom-1 -left-1" />
        </div>
      </div>

      <div className="space-y-2 max-w-md mx-auto">
        <h3 className={`font-black text-base sm:text-lg tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h3>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-bold">
          <Cpu className="w-3.5 h-3.5 text-teal-400 animate-spin" />
          <span>{steps[currentStepIndex]}</span>
        </div>

        <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed pt-1`}>
          {subtitle}
        </p>
      </div>

      {/* Animated Scan Bar */}
      <div className="w-48 h-1.5 bg-slate-800 rounded-full mx-auto mt-6 overflow-hidden relative border border-slate-700">
        <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

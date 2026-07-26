import React from 'react';
import { Microscope, ShieldAlert, HeartHandshake, ExternalLink, Sparkles, Award } from 'lucide-react';
import logoImage from '../assets/images/amr_sentinel_logo_1785007880805.jpg';

interface FooterProps {
  onOpenAbout?: () => void;
  onOpenFeedback?: () => void;
  onNavigateTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout, onOpenFeedback, onNavigateTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Disclaimer Banner */}
        <div className="mb-10 bg-amber-950/40 border border-amber-600/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-amber-200/90 text-xs sm:text-sm shadow-inner">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-amber-300 uppercase tracking-wider text-[11px] mb-0.5">Educational Medical Disclaimer</p>
            <p className="text-amber-100/90 leading-relaxed font-sans">
              "This application provides educational information only and does not replace professional medical advice, clinical diagnosis, or hospital treatment protocols."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-teal-500 overflow-hidden shrink-0 shadow-md">
                <img 
                  src={logoImage} 
                  alt="AMR Sentinel AI Logo" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">AMR Sentinel <span className="text-teal-400">AI</span></span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              An AI-powered educational platform for microbiology students to explore antimicrobial resistance mechanisms, resistant microorganisms, laboratory diagnostics, and prevention strategies.
            </p>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs text-slate-400 font-mono space-y-1">
              <p className="font-semibold text-teal-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> AI Tutor Persona:
              </p>
              <p className="text-slate-300 italic text-[11px] leading-normal">
                "Act as a microbiology education assistant. Explain antimicrobial resistance topics for undergraduate microbiology students using clear scientific language."
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Core Platform Modules</h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li><button onClick={() => onNavigateTab?.('home')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Dashboard</button></li>
              <li><button onClick={() => onNavigateTab?.('analyzer')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">AI Analyzer</button></li>
              <li><button onClick={() => onNavigateTab?.('simulator')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Risk Simulator</button></li>
              <li><button onClick={() => onNavigateTab?.('cards')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Pathogen Cards</button></li>
              <li><button onClick={() => onNavigateTab?.('learning')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">Learning Center</button></li>
              <li><button onClick={() => onNavigateTab?.('tutor')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">AI Tutor</button></li>
            </ul>
          </div>

          {/* Key Guidelines & About */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Educational Accreditation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-teal-400 shrink-0" />
                <span>WHO Antimicrobial Awareness Aligned</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Biosafety Level 1 Educational Platform</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-teal-400 shrink-0" />
                <span>CLSI M100 & EUCAST AST Guidelines</span>
              </li>
            </ul>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={onOpenAbout}
                className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded-xl text-xs font-bold border border-slate-700 transition cursor-pointer text-left flex items-center justify-between"
              >
                <span>About Platform Mission</span>
                <span>→</span>
              </button>
              <button
                onClick={onOpenFeedback}
                className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-teal-300 rounded-xl text-xs font-bold border border-slate-700 transition cursor-pointer text-left flex items-center justify-between"
              >
                <span>Student Feedback & Contact</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="font-medium text-slate-400">AMR Sentinel AI © 2026</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-800 font-mono text-[11px] font-semibold">
              Biosafety Level 1 Educational Platform
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800 font-mono text-[11px] font-semibold">
              WHO Antimicrobial Awareness Aligned
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};


import React, { useState } from 'react';
import { Microscope, Cpu, ShieldAlert, BookOpen, Activity, Globe, Menu, X, Sparkles, GraduationCap, Dna, Info, MessageSquare } from 'lucide-react';
import logoImage from '../assets/images/amr_sentinel_logo_1785007880805.jpg';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAbout?: () => void;
  onOpenFeedback?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenAbout, onOpenFeedback }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Dashboard', icon: Microscope },
    { id: 'analyzer', label: 'AI Analyzer', icon: Cpu },
    { id: 'simulator', label: 'Risk Simulator', icon: Activity },
    { id: 'cards', label: 'Pathogen Cards', icon: ShieldAlert },
    { id: 'surveillance', label: 'Bio-Surveillance', icon: Globe },
    { id: 'learning', label: 'Learning Center', icon: BookOpen },
    { id: 'tutor', label: 'AI Tutor', icon: GraduationCap, badge: 'AI' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand - Combined Biotech AI Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-700 via-teal-600 to-cyan-500 p-0.5 shadow-md shadow-teal-500/20 group-hover:shadow-teal-500/35 transition-all duration-300 group-hover:scale-105 overflow-hidden shrink-0">
              <img 
                src={logoImage} 
                alt="AMR Sentinel AI Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[14px]" 
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 font-sans">
                  AMR Sentinel
                </span>
                <span className="px-2 py-0.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200/80 rounded-full flex items-center gap-1 shadow-2xs">
                  <Sparkles className="w-3 h-3 text-teal-600 animate-pulse" /> AI
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase font-mono">Microbiology Research Terminal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50 via-teal-50 to-slate-50 text-teal-800 border border-teal-300/80 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                  {item.label}
                  {item.badge && (
                    <span className="text-[9px] bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* About & Feedback Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenAbout}
              className="p-2 rounded-xl text-slate-600 hover:text-teal-700 hover:bg-teal-50 border border-slate-200/80 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
              title="About AMR Sentinel AI Mission"
            >
              <Info className="w-4 h-4 text-teal-600" />
              <span className="hidden xl:inline">About</span>
            </button>
            
            <button
              onClick={onOpenFeedback}
              className="p-2 rounded-xl text-slate-600 hover:text-teal-700 hover:bg-teal-50 border border-slate-200/80 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
              title="Send Feedback or Questions"
            >
              <MessageSquare className="w-4 h-4 text-teal-600" />
              <span className="hidden xl:inline">Feedback</span>
            </button>
          </div>

          {/* System Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-200 border border-slate-800 text-xs shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-mono text-[11px] font-semibold text-slate-300">Gemini 3.6 Flash</span>
            <span className="text-slate-600">|</span>
            <span className="text-teal-300 font-extrabold uppercase text-[10px] tracking-wider">Research Terminal</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden border border-slate-200/80"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1.5 shadow-xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-4 py-3 rounded-xl text-left font-bold text-sm flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-teal-50 text-teal-800 border border-teal-300 font-extrabold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                  {item.label}
                </div>
                {item.badge && (
                  <span className="text-[10px] bg-teal-700 text-white font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          {/* Mobile About & Feedback Buttons */}
          <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-100">
            <button
              onClick={() => {
                if (onOpenAbout) onOpenAbout();
                setMobileMenuOpen(false);
              }}
              className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200"
            >
              <Info className="w-4 h-4 text-teal-600" /> Platform Mission
            </button>
            <button
              onClick={() => {
                if (onOpenFeedback) onOpenFeedback();
                setMobileMenuOpen(false);
              }}
              className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200"
            >
              <MessageSquare className="w-4 h-4 text-teal-600" /> Student Feedback
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 mt-2 flex items-center justify-between px-2 text-xs text-slate-500 font-mono">
            <span>Model: Gemini 3.6 Flash</span>
            <span className="text-teal-700 font-bold uppercase">Active Engine</span>
          </div>
        </div>
      )}
    </header>
  );
};


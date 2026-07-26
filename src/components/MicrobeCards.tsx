import React, { useState } from 'react';
import { PATHOGENS_DATA } from '../data/pathogens';
import { Pathogen } from '../types';
import {
  ShieldAlert,
  Search,
  Filter,
  Cpu,
  CheckCircle2,
  X,
  Dna,
  FlaskConical,
  AlertTriangle,
  Flame,
  Shield,
  Layers,
  Sparkles,
  ChevronRight,
  BookOpen,
  Info
} from 'lucide-react';

interface MicrobeCardsProps {
  onQuickAnalyze: (query: string) => void;
}

export const MicrobeCards: React.FC<MicrobeCardsProps> = ({ onQuickAnalyze }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<string>('All');
  const [gramFilter, setGramFilter] = useState<string>('All');
  const [selectedPathogen, setSelectedPathogen] = useState<Pathogen | null>(null);

  const priorityOptions = [
    'All',
    'Critical Priority Pathogen',
    'High Priority Pathogen',
    'Global Health Emergency'
  ];

  const gramOptions = ['All', 'Gram-Positive', 'Gram-Negative', 'Acid-Fast', 'Fungal'];

  const filteredPathogens = PATHOGENS_DATA.filter((p) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      !term ||
      p.name.toLowerCase().includes(term) ||
      p.scientificName.toLowerCase().includes(term) ||
      p.resistanceProblem.toLowerCase().includes(term) ||
      p.morphologyAndStructure.toLowerCase().includes(term) ||
      p.keyGenes.some((g) => g.toLowerCase().includes(term)) ||
      p.antibioticsAffected.some((a) => a.toLowerCase().includes(term));

    const matchesPriority =
      priorityFilter === 'All' || p.severityLabel === priorityFilter;

    const matchesGram = gramFilter === 'All' || p.gramStatus === gramFilter;

    return matchesSearch && matchesPriority && matchesGram;
  });

  const getSeverityBadge = (label: Pathogen['severityLabel']) => {
    switch (label) {
      case 'Global Health Emergency':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300 shadow-2xs">
            <Flame className="w-3 h-3 text-rose-600" /> Global Health Emergency
          </span>
        );
      case 'Critical Priority Pathogen':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-100 text-red-800 border border-red-300 shadow-2xs">
            <AlertTriangle className="w-3 h-3 text-red-600" /> Critical Priority Pathogen
          </span>
        );
      case 'High Priority Pathogen':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
            <ShieldAlert className="w-3 h-3 text-amber-700" /> High Priority Pathogen
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-4">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wide">
          <FlaskConical className="w-4 h-4 text-teal-400" /> Pathogen Genomics & Diagnostic Repository
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Microbe Resistance Cards
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          In-depth scientific profiles of high-priority multidrug-resistant bacteria, mycobacteria, and fungi. Explore morphological structures, biochemical mechanisms, gene markers, AST methods, and infection control protocols.
        </p>

        {/* Quick Stats Strip */}
        <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-xs text-slate-300 font-medium block">Cataloged Organisms</span>
            <span className="text-xl font-bold font-mono text-teal-300">{PATHOGENS_DATA.length} Profiles</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-xs text-slate-300 font-medium block">Critical Threats</span>
            <span className="text-xl font-bold font-mono text-rose-300">
              {PATHOGENS_DATA.filter(p => p.whoPriority === 'Critical').length} Pathogens
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-xs text-slate-300 font-medium block">Key Resistance Genes</span>
            <span className="text-xl font-bold font-mono text-amber-300">25+ Loci</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-xs text-slate-300 font-medium block">Target AST Methods</span>
            <span className="text-xl font-bold font-mono text-teal-200">CLSI & EUCAST</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search pathogen, gene, or drug..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium transition"
            />
          </div>

          {/* Filters Container */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            
            {/* Priority Filter */}
            <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-slate-500 px-2 flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5 text-teal-600" /> Priority:
              </span>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="bg-white text-slate-800 text-xs font-bold py-1.5 px-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
              >
                {priorityOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Gram/Type Filter */}
            <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-slate-500 px-2 flex items-center gap-1 shrink-0">
                <Layers className="w-3.5 h-3.5 text-teal-600" /> Type:
              </span>
              <select
                value={gramFilter}
                onChange={(e) => setGramFilter(e.target.value)}
                className="bg-white text-slate-800 text-xs font-bold py-1.5 px-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
              >
                {gramOptions.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Gram Types' : cat}
                  </option>
                ))}
              </select>
            </div>

          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs text-slate-500 font-medium">
          <span>
            Showing <strong className="text-slate-900">{filteredPathogens.length}</strong> of{' '}
            <strong className="text-slate-900">{PATHOGENS_DATA.length}</strong> Pathogen Profiles
          </span>
          {(searchTerm || priorityFilter !== 'All' || gramFilter !== 'All') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setPriorityFilter('All');
                setGramFilter('All');
              }}
              className="text-teal-700 hover:text-teal-900 font-bold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Pathogens Cards Grid */}
      {filteredPathogens.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPathogens.map((pathogen) => (
            <div
              key={pathogen.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-teal-400/80"
            >
              <div>
                {/* Card Top Header */}
                <div className="p-5 bg-gradient-to-br from-slate-50 via-teal-50/20 to-slate-50 border-b border-slate-100 space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    {getSeverityBadge(pathogen.severityLabel)}
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-800 border border-slate-300">
                      {pathogen.gramStatus}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                      {pathogen.name}
                    </h3>
                    <p className="text-xs italic text-slate-600 font-serif font-medium mt-0.5">
                      {pathogen.scientificName}
                    </p>
                  </div>
                </div>

                {/* Card Body Information */}
                <div className="p-5 space-y-4 text-xs text-slate-700">
                  
                  {/* Morphology and Structure */}
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wider text-teal-800">
                      Structure & Morphology:
                    </span>
                    <p className="mt-1 text-slate-700 font-medium leading-relaxed line-clamp-2">
                      {pathogen.morphologyAndStructure}
                    </p>
                  </div>

                  {/* Resistance Problem */}
                  <div>
                    <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wider text-teal-800">
                      Resistance Problem:
                    </span>
                    <p className="mt-1 text-slate-700 leading-relaxed font-medium line-clamp-3">
                      {pathogen.resistanceProblem}
                    </p>
                  </div>

                  {/* Resistance Genes */}
                  <div>
                    <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wider text-teal-800">
                      Important Resistance Genes:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {pathogen.keyGenes.map((gene, idx) => (
                        <span
                          key={idx}
                          className="bg-teal-50 text-teal-900 border border-teal-200 px-2 py-0.5 rounded-md font-mono text-[10px] font-bold"
                        >
                          {gene}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Laboratory Detection */}
                  <div>
                    <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wider text-teal-800">
                      Laboratory Detection:
                    </span>
                    <p className="mt-1 text-slate-700 font-medium leading-relaxed line-clamp-2">
                      {pathogen.detectionMethod}
                    </p>
                  </div>

                  {/* AST Methods */}
                  <div>
                    <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wider text-teal-800">
                      AST Methods:
                    </span>
                    <p className="mt-1 text-slate-600 font-medium text-[11px] leading-snug">
                      • {pathogen.astMethods[0]}
                    </p>
                  </div>

                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex gap-2.5">
                <button
                  onClick={() => setSelectedPathogen(pathogen)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-900 font-extrabold text-xs transition-all cursor-pointer text-center"
                >
                  Full Profile
                </button>
                <button
                  onClick={() =>
                    onQuickAnalyze(
                      `Comprehensive microbiological deep dive on ${pathogen.name} (${pathogen.scientificName}):\n- Gram classification: ${pathogen.gramStatus}\n- Morphology & structure: ${pathogen.morphologyAndStructure}\n- Resistance mechanisms and genes: ${pathogen.keyGenes.join(', ')}\n- Laboratory detection & AST protocols: ${pathogen.astMethods.join('; ')}\n- Clinical infection control strategies.`
                    )
                  }
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Cpu className="w-3.5 h-3.5" /> AI Deep Dive
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">No Pathogens Found</h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            No pathogen profiles match your current search query or active filter settings. Try adjusting your keyword or resetting filters.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setPriorityFilter('All');
              setGramFilter('All');
            }}
            className="px-6 py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition cursor-pointer"
          >
            Clear Search & Filters
          </button>
        </div>
      )}

      {/* Pathogen Full Profile Modal */}
      {selectedPathogen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-slate-200">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {getSeverityBadge(selectedPathogen.severityLabel)}
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border">
                    {selectedPathogen.gramStatus}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                    WHO {selectedPathogen.whoPriority} Priority
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {selectedPathogen.name}
                  </h2>
                  <p className="text-sm italic text-slate-600 font-serif font-semibold">
                    {selectedPathogen.scientificName}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedPathogen(null)}
                className="p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Detailed Sections */}
            <div className="space-y-6 text-xs sm:text-sm text-slate-700">
              
              {/* Overview & Morphology */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-teal-800">
                    Microorganism Overview
                  </span>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {selectedPathogen.overview}
                  </p>
                </div>

                <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-200/70 space-y-1.5">
                  <span className="font-bold text-teal-900 block text-xs uppercase tracking-wider">
                    Structure & Morphology
                  </span>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    {selectedPathogen.morphologyAndStructure}
                  </p>
                </div>
              </div>

              {/* Biochemical Mechanism */}
              <div className="p-4 bg-slate-900 text-slate-200 rounded-2xl border border-slate-800 space-y-2">
                <span className="font-bold text-teal-400 block text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Dna className="w-4 h-4 text-teal-400" /> Biochemical Resistance Mechanism
                </span>
                <p className="leading-relaxed text-xs sm:text-sm font-sans">
                  {selectedPathogen.biochemicalMechanism}
                </p>
              </div>

              {/* Inactivated Drugs & Resistance Genes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-teal-800">
                    Inactivated Antibiotic Classes
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {selectedPathogen.antibioticsAffected.map((ab, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                        <span>{ab}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-teal-800">
                    Important Resistance Genes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPathogen.keyGenes.map((g, idx) => (
                      <span
                        key={idx}
                        className="bg-teal-100 text-teal-900 border border-teal-300 font-mono text-xs px-2.5 py-1 rounded-lg font-bold"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Detection & AST Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-teal-800">
                    Laboratory Diagnostic Protocols
                  </span>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    {selectedPathogen.detectionMethod}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-teal-800">
                    Antimicrobial Susceptibility Testing (AST)
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedPathogen.astMethods.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-medium">
                        <FlaskConical className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Prevention & Infection Control */}
              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 space-y-2">
                <span className="font-bold text-emerald-900 block text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-700" /> Prevention & Infection Control Strategies
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                  {selectedPathogen.preventionTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedPathogen(null)}
                className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs transition cursor-pointer"
              >
                Close Profile
              </button>
              <button
                onClick={() => {
                  const pName = selectedPathogen.name;
                  const pSci = selectedPathogen.scientificName;
                  setSelectedPathogen(null);
                  onQuickAnalyze(
                    `Explain antimicrobial resistance mechanisms, resistance genes (${selectedPathogen.keyGenes.join(', ')}), AST testing procedures, and infection control strategies for ${pName} (${pSci}).`
                  );
                }}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-extrabold text-xs transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Cpu className="w-4 h-4" /> AI Deep Dive Analysis
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

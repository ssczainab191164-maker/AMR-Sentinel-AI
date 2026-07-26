import React, { useState } from 'react';
import {
  Globe,
  Globe2,
  ShieldAlert,
  Activity,
  FlaskConical,
  Cpu,
  Dna,
  CheckCircle2,
  AlertTriangle,
  Flame,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowRight,
  Stethoscope,
  Microscope,
  FileCheck2,
  DollarSign,
  Zap,
  Info
} from 'lucide-react';

interface GlobalSurveillanceProps {
  onQuickAnalyze?: (query: string) => void;
  onNavigateTab?: (tab: string) => void;
}

export const GlobalSurveillance: React.FC<GlobalSurveillanceProps> = ({
  onQuickAnalyze,
  onNavigateTab
}) => {
  const [activeDiagnosticTab, setActiveDiagnosticTab] = useState<'poc' | 'pcr' | 'mcim' | 'ast' | 'mic'>('pcr');
  const [glassSource, setGlassSource] = useState<'human' | 'animal' | 'environment'>('human');

  return (
    <div className="max-w-7xl mx-auto space-y-10 py-4">
      
      {/* Hero Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wide">
          <Globe className="w-4 h-4 text-teal-400 animate-spin-slow" /> WHO GLASS & Epidemiological Bio-Surveillance
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          Global AMR Bio-Surveillance
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Explore how artificial intelligence, genomic surveillance networks, rapid laboratory diagnostics, antimicrobial stewardship, and the One Health framework unite to monitor and contain superbug resistance worldwide.
        </p>

        {/* High-Impact Global Metrics Bar */}
        <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 block">Annual Direct Mortality</span>
            <span className="text-2xl sm:text-3xl font-black font-mono text-white">1.27M</span>
            <p className="text-[10px] text-slate-300">Direct deaths globally (2019 Lancet study)</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300 block">AMR-Associated Deaths</span>
            <span className="text-2xl sm:text-3xl font-black font-mono text-rose-300">4.95M</span>
            <p className="text-[10px] text-slate-300">Deaths associated with drug-resistant infections</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">2050 Projected Burden</span>
            <span className="text-2xl sm:text-3xl font-black font-mono text-amber-300">10.0M</span>
            <p className="text-[10px] text-slate-300">Annual deaths by 2050 without intervention</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-200 block">Economic Impact</span>
            <span className="text-2xl sm:text-3xl font-black font-mono text-teal-200">$100T</span>
            <p className="text-[10px] text-slate-300">Cumulative GDP loss by 2050 (World Bank)</p>
          </div>
        </div>
      </div>

      {/* 1. Global Priority Section */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Epidemiological Urgency
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-2">
              1. Antimicrobial Resistance: A Global Priority
            </h2>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-rose-700 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200">
            <Flame className="w-4 h-4 text-rose-600" /> WHO Top 10 Global Health Threat
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p className="font-medium">
              Antimicrobial resistance occurs when bacteria, fungi, viruses, and parasites mutate over time and no longer respond to medicines, rendering standard therapies ineffective and drastically increasing the risk of disease spread, severe illness, and death.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              The World Health Organization (WHO) has categorized resistant pathogens into critical, high, and medium priorities to steer international research and development towards novel therapeutic targets. Without rapid global bio-surveillance, routine medical procedures—such as organ transplants, chemotherapy, and orthopedic surgeries—will become high-risk interventions due to incurable opportunistic infections.
            </p>

            {/* WHO Tier Badges */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                <span className="text-[10px] font-black uppercase text-rose-800 tracking-wider">Critical Priority</span>
                <p className="text-xs font-bold text-slate-900">A. baumannii (CRAB), P. aeruginosa, CRE K. pneumoniae & E. coli</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                <span className="text-[10px] font-black uppercase text-amber-900 tracking-wider">High Priority</span>
                <p className="text-xs font-bold text-slate-900">MRSA, VRE, Fluoroquinolone-resistant Salmonella & N. gonorrhoeae</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 space-y-1">
                <span className="text-[10px] font-black uppercase text-blue-900 tracking-wider">Medium Priority</span>
                <p className="text-xs font-bold text-slate-900">Penicillin-nonsusceptible S. pneumoniae & Shigella spp.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-teal-950 p-6 rounded-3xl text-white space-y-4 border border-slate-800 shadow-lg">
            <h3 className="text-lg font-bold text-teal-300 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-teal-400" /> Projected Global Burden (2020–2050)
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-mono text-slate-300 mb-1">
                  <span>Current Direct Deaths</span>
                  <span className="text-teal-400 font-bold">1.27M / Year</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-500 h-full w-[13%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-slate-300 mb-1">
                  <span>2030 Intermediary Projection</span>
                  <span className="text-amber-400 font-bold">5.20M / Year</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[52%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-slate-300 mb-1">
                  <span>2050 Unmitigated Crisis</span>
                  <span className="text-rose-400 font-bold">10.0M / Year</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[100%]"></div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-800">
              *If left unaddressed, annual AMR mortality will surpass cancer deaths (8.2M) and diabetes deaths (1.5M) combined by 2050.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Rapid Diagnostics & AST Section */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Diagnostic Stewardship
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-2">
            2. Rapid Diagnostics & Antimicrobial Susceptibility Testing (AST)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Standard culture methods require 48–72 hours. Advanced molecular and automated AST technologies enable rapid point-of-care decisions within hours to halt empirical overuse.
          </p>
        </div>

        {/* Interactive Tabs for Diagnostic Methods */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {[
            { id: 'poc', label: 'POC-AST', icon: Zap },
            { id: 'pcr', label: 'PCR Molecular', icon: Dna },
            { id: 'mcim', label: 'mCIM / eCIM Assays', icon: FlaskConical },
            { id: 'ast', label: 'Automated AST', icon: Cpu },
            { id: 'mic', label: 'MIC Determination', icon: Activity }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeDiagnosticTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveDiagnosticTab(tab.id as any)}
                className={`p-3.5 rounded-2xl border font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-teal-700 text-white border-teal-700 shadow-md scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Detail Display */}
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200/80 space-y-4">
          {activeDiagnosticTab === 'poc' && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-teal-600" /> Point-of-Care Antimicrobial Susceptibility Testing (POC-AST)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Point-of-care AST assays utilize microfluidics, optical light-scattering, or isothermal amplification directly on clinical samples (urine, swab, blood) to deliver susceptibility results within 30 to 120 minutes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-teal-800 block">Clinical Impact:</strong> Prevents unnecessary empirical prescription of broad-spectrum carbapenems in emergency departments.
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-teal-800 block">Technology Example:</strong> Microfluidic single-cell morphokinetic growth monitoring under antibiotic pressure.
                </div>
              </div>
            </div>
          )}

          {activeDiagnosticTab === 'pcr' && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Dna className="w-5 h-5 text-teal-600" /> Real-Time PCR & Multiplex Genetic Detection
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Multiplex Polymerase Chain Reaction (PCR) assays amplify specific target DNA sequences within 1–2 hours, confirming the presence of high-concern resistance genes prior to phenotypic growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="font-bold text-rose-700 block text-[11px]">Gene: mecA / mecC</span>
                  <p className="text-slate-600 font-sans text-[11px] mt-1">Confirms MRSA PBP2a low-affinity transpeptidase.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="font-bold text-amber-700 block text-[11px]">Gene: blaKPC / blaNDM</span>
                  <p className="text-slate-600 font-sans text-[11px] mt-1">Identifies serine or metallo-carbapenemase enzymes in CRE.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="font-bold text-teal-700 block text-[11px]">Gene: mcr-1 to mcr-10</span>
                  <p className="text-slate-600 font-sans text-[11px] mt-1">Detects plasmid-mediated colistin resistance (EptA transferase).</p>
                </div>
              </div>
            </div>
          )}

          {activeDiagnosticTab === 'mcim' && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-teal-600" /> mCIM & eCIM Phenotypic Assays
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                The Modified Carbapenem Inactivation Method (mCIM) combined with EDTA-CIM (eCIM) differentiates serine carbapenemases (Class A KPC, Class D OXA-48) from metallo-β-lactamases (Class B NDM, VIM, IMP).
              </p>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <p>
                  <strong>Mechanism:</strong> A meropenem disk is incubated in a suspension of the test isolate. If carbapenemase is present, the meropenem is hydrolyzed. Subsequent testing on a susceptible E. coli indicator lawn reveals no zone of inhibition (mCIM positive). Addition of EDTA chelates zinc ions required by Metallo-β-lactamases (eCIM positive), pinpointing drug choice.
                </p>
              </div>
            </div>
          )}

          {activeDiagnosticTab === 'ast' && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-teal-600" /> Automated AST Systems (Vitek 2, BD Phoenix, MicroScan)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Automated clinical microbiology platforms monitor bacterial turbidity in micro-well cards equipped with serial drug dilutions. Optical sensors measure kinetic growth curves every 15–30 minutes to calculate exact Minimal Inhibitory Concentrations (MICs).
              </p>
            </div>
          )}

          {activeDiagnosticTab === 'mic' && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-teal-600" /> Minimal Inhibitory Concentration (MIC) Determination
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                MIC is the lowest concentration of an antimicrobial agent that visibly inhibits bacterial growth in vitro. Interpreted using CLSI and EUCAST clinical breakpoints to categorize isolates as Susceptible (S), Intermediate (I), or Resistant (R).
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 3. WHO GLASS Surveillance Network */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            International Monitoring Network
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-2">
            3. WHO GLASS (Global Antimicrobial Resistance & Use Surveillance System)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            GLASS standardizes the collection, analysis, and sharing of AMR data across countries to inform national policies, clinical practice guidelines, and international containment measures.
          </p>
        </div>

        {/* GLASS Source Toggle Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              id: 'human',
              title: 'Human Health Surveillance',
              subtitle: 'Blood, urine, stool, urethral specimens',
              badge: 'Clinical Wards & ICUs'
            },
            {
              id: 'animal',
              title: 'Veterinary & Livestock',
              subtitle: 'Poultry, swine, cattle, aquaculture',
              badge: 'Agricultural Value Chain'
            },
            {
              id: 'environment',
              title: 'Environmental Biosphere',
              subtitle: 'Wastewater, rivers, farm soil, effluent',
              badge: 'Environmental Reservoirs'
            }
          ].map((item) => {
            const isActive = glassSource === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setGlassSource(item.id as any)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-br from-teal-50 to-blue-50 border-teal-500 shadow-md ring-1 ring-teal-500'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                    {item.badge}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-teal-600' : 'bg-slate-300'}`}></div>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mt-2">{item.title}</h3>
                <p className="text-xs text-slate-600 mt-1">{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* GLASS Active Context Box */}
        <div className="p-6 bg-slate-900 text-slate-200 rounded-3xl border border-slate-800 space-y-3">
          {glassSource === 'human' && (
            <div className="space-y-2 text-xs sm:text-sm">
              <span className="text-teal-400 font-bold uppercase tracking-wider block text-xs">
                Human Clinical Surveillance Dynamics
              </span>
              <p className="leading-relaxed">
                Monitors priority bacterial pathogens (A. baumannii, K. pneumoniae, E. coli, S. aureus, S. pneumoniae, Salmonella spp., Shigella spp., N. gonorrhoeae) isolated from bloodstream, urinary tract, gastrointestinal, and genital tract infections.
              </p>
            </div>
          )}

          {glassSource === 'animal' && (
            <div className="space-y-2 text-xs sm:text-sm">
              <span className="text-amber-400 font-bold uppercase tracking-wider block text-xs">
                Veterinary & Agricultural Surveillance Dynamics
              </span>
              <p className="leading-relaxed">
                Tracks non-therapeutic antibiotic usage as growth promoters in food-producing livestock. Detects plasmid-mediated resistance markers like mcr-1 (colistin resistance) transmitted through food chains to human consumers.
              </p>
            </div>
          )}

          {glassSource === 'environment' && (
            <div className="space-y-2 text-xs sm:text-sm">
              <span className="text-emerald-400 font-bold uppercase tracking-wider block text-xs">
                Environmental Metagenomic Surveillance Dynamics
              </span>
              <p className="leading-relaxed">
                Analyzes urban wastewater treatment plant effluents, pharmaceutical manufacturing runoff, and agricultural soil. Metagenomic shotgun sequencing reveals the environmental resistome—the reservoir of mobile antibiotic resistance genes.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Why AMR is a Global Health Challenge */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Drivers of Resistance
          </span>
          <h2 className="text-2xl font-black text-slate-900">
            4. Why AMR is a Major Global Health Challenge
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Multiple interconnected factors accelerate the emergence and dissemination of multidrug-resistant superbugs across borders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs hover:shadow-lg transition">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Exhaustion of Last-Resort Antibiotics
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When front-line penicillins and cephalosporins fail, clinicians resort to carbapenems and colistin. Pan-drug resistant isolates harboring blaNDM-1 + mcr-1 neutralize even these last-line drugs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs hover:shadow-lg transition">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Sub-MIC Selective Pressure
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sub-lethal antibiotic concentrations in human tissues (from incomplete courses) or agricultural runoff kill susceptible wild-type strains while selectively enriching mutant resistant subpopulations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs hover:shadow-lg transition">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <Dna className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Horizontal Gene Transfer (HGT)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Plasmids, transposons, and integrons transfer resistance genes between non-pathogenic commensal gut bacteria and virulent pathogens via bacterial conjugation pili, transformation, and transduction.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs hover:shadow-lg transition">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Economic & Healthcare Strain
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Resistant infections require prolonged hospitalizations, expensive combination intravenous drugs, intensive care monitoring, and high isolation facility overheads, straining health systems.
            </p>
          </div>

        </div>
      </div>

      {/* 5. How AMR Sentinel AI Helps Learners */}
      <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full border border-teal-400/30">
            Educational Empowerment
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            5. How AMR Sentinel AI Empowers Microbiology Learners
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Bridging the gap between molecular genetics, clinical laboratory diagnostics, and public health policy through interactive AI simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-teal-500/30 text-teal-300 flex items-center justify-center font-bold">
              <Dna className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-sm text-white">Gene-to-Phenotype Linkage</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Understand how specific gene loci (mecA, blaKPC, vanA) directly dictate biochemical drug breakdown or target PBP modification.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-teal-500/30 text-teal-300 flex items-center justify-center font-bold">
              <Microscope className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-sm text-white">Diagnostic Workflows</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Master CLSI and EUCAST interpretative criteria for Kirby-Bauer disk diffusion, microdilution MIC, and phenotypic mCIM/eCIM assays.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-teal-500/30 text-teal-300 flex items-center justify-center font-bold">
              <Activity className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-sm text-white">Risk Simulations</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Adjust patient treatment compliance, diagnostic certainty, and hygiene controls to calculate selective pressure outcomes in real-time.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-teal-500/30 text-teal-300 flex items-center justify-center font-bold">
              <Cpu className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-sm text-white">Gemini AI Assistance</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Query any pathogen, resistance mechanism, or drug class for instant, structured academic summaries tailored to undergraduate science curricula.
            </p>
          </div>

        </div>

        <div className="pt-2 flex flex-wrap gap-3">
          {onNavigateTab && (
            <button
              onClick={() => onNavigateTab('analyzer')}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:from-teal-400 hover:to-emerald-400 transition cursor-pointer flex items-center gap-2 shadow-md"
            >
              <Cpu className="w-4 h-4" /> Launch AI Resistance Analyzer
            </button>
          )}

          {onNavigateTab && (
            <button
              onClick={() => onNavigateTab('simulator')}
              className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition cursor-pointer border border-white/20 flex items-center gap-2"
            >
              <Activity className="w-4 h-4" /> Run Risk Simulator
            </button>
          )}
        </div>
      </div>

      {/* 6. Integrated Defense Framework */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Global Containment Strategy
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-2">
            Integrated Defense Framework
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Containing global superbug resistance requires seamless integration across three pillar domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-black">
              1
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Laboratory Diagnostics
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Rapid identification of causative pathogens and drug resistance genes directly from clinical specimens. Implementation of rapid blood culture AST panels and MALDI-TOF mass spectrometry to reduce empirical antibiotic treatment times.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>GeneXpert & Multiplex PCR</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>mCIM / eCIM Carbapenemase Assays</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-black">
              2
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Antimicrobial Stewardship
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enforcing evidence-based prescribing guidelines, de-escalation protocols based on culture results, dose optimization, and strict infection control barriers in hospital intensive care units.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Culture-guided De-escalation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Hand Hygiene & Isolation Bundles</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-black">
              3
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              One Health Surveillance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Intersectoral cooperation uniting human healthcare, veterinary agriculture, and environmental sanitation. Banning non-therapeutic antibiotic growth promoters in livestock and monitoring effluent runoff.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>WHO GLASS Global Repository</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Wastewater Resistome Monitoring</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

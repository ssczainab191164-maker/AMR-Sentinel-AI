import React, { useState } from 'react';
import { SCENARIOS_DATA } from '../data/scenarios';
import { RiskScenario, SimulationResult } from '../types';
import {
  Activity,
  AlertTriangle,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  Sliders,
  Dna,
  CheckCircle,
  Info,
  Flame,
  Globe,
  Layers,
  ArrowRight,
  ShieldAlert,
  Microscope,
  Award
} from 'lucide-react';

export const RiskSimulator: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<RiskScenario>(SCENARIOS_DATA[0]);
  const [compliance, setCompliance] = useState<number>(selectedScenario.defaultParams.patientCompliance);
  const [exposureDuration, setExposureDuration] = useState<number>(selectedScenario.defaultParams.exposureDurationDays);
  const [hygiene, setHygiene] = useState<number>(selectedScenario.defaultParams.hygieneStrictness);
  const [agriRestriction, setAgriRestriction] = useState<number>(selectedScenario.defaultParams.agriRestriction);

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<SimulationResult | null>(null);

  const handleScenarioSelect = (sc: RiskScenario) => {
    setSelectedScenario(sc);
    setCompliance(sc.defaultParams.patientCompliance);
    setExposureDuration(sc.defaultParams.exposureDurationDays);
    setHygiene(sc.defaultParams.hygieneStrictness);
    setAgriRestriction(sc.defaultParams.agriRestriction);
    setResult(null);
  };

  const handleRunSimulation = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/simulate-risk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioId: selectedScenario.id,
          scenarioName: selectedScenario.title,
          scenarioDescription: selectedScenario.shortDesc,
          parameters: {
            patientPrescriptionAdherencePercent: compliance,
            drugExposureTimeDays: exposureDuration,
            infectionControlHygienePercent: hygiene,
            agriculturalAntibioticRestrictionPercent: agriRestriction
          }
        }),
      });

      if (!res.ok) throw new Error('Simulation API response not ok');
      const data = await res.json();
      if (data.riskLevel) {
        // Supplement with calculated population metrics if API returns partial
        const popMetrics = calculatePopulationMetrics(selectedScenario, compliance, exposureDuration, hygiene, agriRestriction);
        setResult({
          ...data,
          evolutionaryImpact: data.evolutionaryImpact || data.biologicalMechanism,
          spreadMechanism: data.spreadMechanism || selectedScenario.explanationDetails.spreadVector,
          populationMetrics: popMetrics
        });
      } else {
        throw new Error('Invalid JSON format');
      }
    } catch {
      // Offline / Robust Fallback Simulation Engine
      setResult(calculateFallbackSimulation(selectedScenario, compliance, exposureDuration, hygiene, agriRestriction));
    } finally {
      setLoading(false);
    }
  };

  // Real-time calculated population metrics for parameter preview
  const liveMetrics = calculatePopulationMetrics(selectedScenario, compliance, exposureDuration, hygiene, agriRestriction);

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-4">
      
      {/* Title Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-teal-950 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wide">
          <Activity className="w-4 h-4 text-teal-400 animate-pulse" /> Interactive Evolutionary Bio-Simulation
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          AMR Risk Simulator
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Model how human behaviors, clinical diagnostic gaps, sub-MIC antibiotic exposure, and agricultural practices exert selective pressure on bacterial populations to accelerate mutation, survival, and horizontal transmission.
        </p>

        {/* Dynamic Parameter Live Preview Bar */}
        <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-xs text-slate-300 font-medium block">Selective Pressure Index</span>
            <span className="text-xl font-bold font-mono text-amber-300">
              {liveMetrics.selectivePressureIndex}%
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-xs text-slate-300 font-medium block">Resistant Mutant Share</span>
            <span className="text-xl font-bold font-mono text-rose-300">
              {liveMetrics.resistantMutantPercent}%
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-xs text-slate-300 font-medium block">Plasmid HGT Risk</span>
            <span className="text-xl font-bold font-mono text-teal-200">
              {liveMetrics.hgtRiskPercent}%
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <span className="text-xs text-slate-300 font-medium block">Susceptible Wild-Type</span>
            <span className="text-xl font-bold font-mono text-emerald-300">
              {liveMetrics.wildTypePercent}%
            </span>
          </div>
        </div>
      </div>

      {/* Educational Disclaimer Banner */}
      <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200 text-teal-900 text-xs sm:text-sm flex items-start gap-3 shadow-2xs">
        <Info className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <strong className="font-extrabold uppercase tracking-wide text-[11px] block text-teal-800">
            Academic & Clinical Educational Disclaimer
          </strong>
          <p className="font-medium text-slate-700 leading-relaxed">
            This application provides educational information only and does not replace professional medical advice, clinical diagnosis, or treatment protocols.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Scenario Selector & Parameters */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* 1. Scenario Cards */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-600" />
                <span>1. Select Simulation Scenario</span>
              </h2>
              <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                4 Core Models
              </span>
            </div>

            <div className="space-y-3">
              {SCENARIOS_DATA.map((sc) => {
                const isSelected = selectedScenario.id === sc.id;
                return (
                  <div
                    key={sc.id}
                    onClick={() => handleScenarioSelect(sc)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-gradient-to-r from-teal-50 via-blue-50 to-slate-50 border-teal-500 shadow-md ring-2 ring-teal-500/20'
                        : 'bg-slate-50/80 hover:bg-slate-100 border-slate-200/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-100 px-2 py-0.5 rounded-md border border-teal-200">
                          {sc.category}
                        </span>
                        <h3 className="font-extrabold text-slate-900 text-sm mt-1.5">
                          {sc.title}
                        </h3>
                      </div>
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase border ${
                        sc.defaultRisk === 'CRITICAL'
                          ? 'bg-rose-100 text-rose-800 border-rose-300'
                          : 'bg-amber-100 text-amber-900 border-amber-300'
                      }`}>
                        {sc.defaultRisk} RISK
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed font-medium">
                      {sc.shortDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Simulation Sliders */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-5">
            <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-teal-600" />
                <span>2. Adjust Parameters</span>
              </h2>
              <span className="text-xs text-slate-500 font-mono">Interactive</span>
            </div>

            {/* Slider 1: Patient Prescription Adherence */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">Patient Prescription Adherence:</span>
                <span className={`font-mono font-bold ${compliance < 50 ? 'text-rose-600' : 'text-teal-700'}`}>
                  {compliance}% {compliance < 50 ? '(Sub-MIC Dose Risk)' : '(Full Course)'}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={compliance}
                onChange={(e) => setCompliance(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Low adherence leaves residual bacteria exposed to sub-lethal antibiotic concentrations.</p>
            </div>

            {/* Slider 2: Drug Exposure Time */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">Drug Exposure Time / Duration:</span>
                <span className={`font-mono font-bold ${exposureDuration < 4 ? 'text-amber-600' : 'text-teal-700'}`}>
                  {exposureDuration} Days {exposureDuration < 4 ? '(Truncated Course)' : '(Full Regimen)'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="14"
                step="1"
                value={exposureDuration}
                onChange={(e) => setExposureDuration(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Shortened exposure yields partial bacterial clearance, selecting for resistant survivors.</p>
            </div>

            {/* Slider 3: Hospital Infection Control */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">Infection Control / Hand Hygiene:</span>
                <span className={`font-mono font-bold ${hygiene < 40 ? 'text-rose-600' : 'text-teal-700'}`}>
                  {hygiene}% {hygiene < 40 ? '(High Spread Vector)' : '(Strict Isolation)'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={hygiene}
                onChange={(e) => setHygiene(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Determines cross-contamination probability across hospital surfaces and clinical hands.</p>
            </div>

            {/* Slider 4: Agricultural Antibiotic Restriction */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">Livestock Antibiotic Restriction:</span>
                <span className={`font-mono font-bold ${agriRestriction < 40 ? 'text-amber-600' : 'text-teal-700'}`}>
                  {agriRestriction}% {agriRestriction < 40 ? '(Overuse in Feed)' : '(Strict One Health)'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={agriRestriction}
                onChange={(e) => setAgriRestriction(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500">Controls non-therapeutic growth promoter use in food animal agriculture.</p>
            </div>

            {/* Main Action Button */}
            <button
              onClick={handleRunSimulation}
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-600 via-blue-600 to-teal-700 hover:from-teal-500 hover:to-blue-500 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer uppercase tracking-wider"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-teal-200" />
                  <span>Simulating Selection Dynamics...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-teal-300" />
                  <span>Run Evolutionary Risk Simulation</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Right Column: Simulation Output Dashboard */}
        <div className="lg:col-span-7 space-y-6">
          
          {loading ? (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-12 text-center space-y-4">
              <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="font-extrabold text-slate-900 text-base">Running Evolutionary Bio-Simulation...</p>
              <p className="text-slate-500 text-xs max-w-md mx-auto leading-relaxed">
                Calculating selective pressure coefficients, sub-MIC mutant survival rates, and horizontal gene transfer conjugation kinetics.
              </p>
            </div>
          ) : result ? (
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-300">
              
              {/* Result Header Badge */}
              <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                result.riskLevel === 'CRITICAL'
                  ? 'bg-rose-50 border-rose-300 text-rose-950'
                  : result.riskLevel === 'HIGH'
                  ? 'bg-amber-50 border-amber-300 text-amber-950'
                  : result.riskLevel === 'MODERATE'
                  ? 'bg-yellow-50 border-yellow-300 text-yellow-950'
                  : 'bg-emerald-50 border-emerald-300 text-emerald-950'
              }`}>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider block opacity-80">
                    Calculated Population Risk Level
                  </span>
                  <p className="text-3xl font-black tracking-tight mt-0.5 flex items-center gap-2">
                    {result.riskLevel === 'CRITICAL' && <Flame className="w-7 h-7 text-rose-600" />}
                    {result.riskLevel === 'HIGH' && <AlertTriangle className="w-7 h-7 text-amber-600" />}
                    {result.riskLevel} RISK
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/90 border shadow-2xs font-mono text-xs font-bold text-slate-800 shrink-0">
                  Scenario: {selectedScenario.title}
                </div>
              </div>

              {/* Dynamic Population Metric Visualizer */}
              {result.populationMetrics && (
                <div className="p-5 bg-slate-900 text-slate-200 rounded-2xl space-y-3 border border-slate-800">
                  <div className="flex justify-between items-center text-xs font-bold font-mono">
                    <span className="text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Microscope className="w-4 h-4 text-teal-400" /> Bacterial Population Shift Analysis
                    </span>
                    <span className="text-slate-400">Genomic Profile</span>
                  </div>

                  {/* Stacked Progress Bar */}
                  <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden flex border border-slate-700">
                    <div
                      style={{ width: `${result.populationMetrics.wildTypePercent}%` }}
                      className="bg-emerald-500 h-full transition-all duration-500"
                      title={`Wild-Type Susceptible: ${result.populationMetrics.wildTypePercent}%`}
                    ></div>
                    <div
                      style={{ width: `${result.populationMetrics.resistantMutantPercent}%` }}
                      className="bg-rose-500 h-full transition-all duration-500"
                      title={`Resistant Mutant: ${result.populationMetrics.resistantMutantPercent}%`}
                    ></div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono pt-1">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></div>
                      <span>Wild-Type: <strong>{result.populationMetrics.wildTypePercent}%</strong></span>
                    </div>

                    <div className="flex items-center gap-1.5 text-rose-400">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></div>
                      <span>Resistant: <strong>{result.populationMetrics.resistantMutantPercent}%</strong></span>
                    </div>

                    <div className="flex items-center gap-1.5 text-amber-300">
                      <Activity className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Pressure: <strong>{result.populationMetrics.selectivePressureIndex}%</strong></span>
                    </div>

                    <div className="flex items-center gap-1.5 text-teal-300">
                      <Dna className="w-3 h-3 text-teal-400 shrink-0" />
                      <span>HGT Risk: <strong>{result.populationMetrics.hgtRiskPercent}%</strong></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Executive Summary */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                  Simulation Executive Summary
                </span>
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                  {result.summary}
                </p>
              </div>

              {/* Biological Mechanism */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Dna className="w-4 h-4 text-teal-600" />
                  <span>How Resistance Develops (Biological Mechanism)</span>
                </h3>

                <div className="p-4 bg-slate-900 text-slate-200 rounded-2xl text-xs sm:text-sm leading-relaxed font-sans border border-slate-800 space-y-2">
                  <p>{result.biologicalMechanism}</p>
                </div>
              </div>

              {/* Evolutionary & Population Selection Impact */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-600" />
                  <span>Evolutionary & Population Selection Dynamics</span>
                </h3>

                <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  <p>{result.evolutionaryImpact}</p>
                </div>
              </div>

              {/* Spread & Transmission Vector */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Globe className="w-4 h-4 text-teal-600" />
                  <span>Transmission Vector & Spread Mechanism</span>
                </h3>

                <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  <p>{result.spreadMechanism || result.clinicalImpact}</p>
                </div>
              </div>

              {/* Prevention & Stewardship Strategies */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Prevention & Correct Adherence Strategies</span>
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {result.preventionSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-800">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Ready for Evolutionary Bio-Simulation</h3>
              <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Select a scenario on the left, fine-tune adherence, exposure, and infection control parameters with the sliders, and click "Run Evolutionary Risk Simulation".
              </p>
            </div>
          )}

        </div>

      </div>

      {/* Educational Features Breakdown Cards */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Microbiology Curriculum Focus
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-2">
            Key Learning Outcomes for Undergraduate Microbiology
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            How evolutionary bio-simulations bridge the gap between bacterial genetics, pharmacology, and global disease stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <Dna className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">Selective Pressure Math</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Understand how sub-MIC drug concentrations kill wild-type strains while selectively enriching low-frequency mutant subpopulations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <Activity className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">Step-Wise Mutation Barriers</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Study point mutations in target enzymes (e.g., gyrA topoisomerase or rpoB RNA polymerase) vs acquisition of multi-gene plasmids.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">Horizontal Gene Transfer</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Analyze conjugation pilus transfer, transformation of bare DNA, and bacteriophage transduction across bacterial families.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <Globe className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">One Health Interconnectedness</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Evaluate how veterinary antibiotic usage in livestock food production creates environmental resistome reservoirs affecting human medicine.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

// Helper function to calculate dynamic live population metrics
function calculatePopulationMetrics(
  sc: RiskScenario,
  compliance: number,
  duration: number,
  hygiene: number,
  agriRestriction: number
) {
  let selectivePressureIndex = 50;
  if (compliance < 50) selectivePressureIndex += 25;
  if (duration < 5) selectivePressureIndex += 15;
  if (hygiene < 40) selectivePressureIndex += 10;
  if (agriRestriction < 40) selectivePressureIndex += 10;

  selectivePressureIndex = Math.min(100, Math.max(10, selectivePressureIndex));

  const resistantMutantPercent = Math.min(95, Math.max(5, Math.round(selectivePressureIndex * 0.85)));
  const wildTypePercent = 100 - resistantMutantPercent;
  const hgtRiskPercent = Math.min(98, Math.max(5, Math.round((100 - hygiene) * 0.5 + (100 - agriRestriction) * 0.5)));

  return {
    wildTypePercent,
    resistantMutantPercent,
    selectivePressureIndex,
    hgtRiskPercent
  };
}

// Comprehensive Fallback Simulation Calculation
function calculateFallbackSimulation(
  sc: RiskScenario,
  compliance: number,
  duration: number,
  hygiene: number,
  agriRestriction: number
): SimulationResult {
  let score = 0;
  if (compliance < 50) score += 35;
  else if (compliance < 80) score += 15;

  if (duration < 5) score += 25;
  else if (duration < 7) score += 10;

  if (hygiene < 40) score += 25;
  else if (hygiene < 70) score += 10;

  if (agriRestriction < 40) score += 25;
  else if (agriRestriction < 70) score += 10;

  let riskLevel: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL' = 'LOW';
  if (score >= 65) riskLevel = 'CRITICAL';
  else if (score >= 40) riskLevel = 'HIGH';
  else if (score >= 20) riskLevel = 'MODERATE';

  const populationMetrics = calculatePopulationMetrics(sc, compliance, duration, hygiene, agriRestriction);

  const summary = `Scenario "${sc.title}" under current parameters (${compliance}% patient adherence, ${duration}-day exposure duration, ${hygiene}% hygiene strictness, ${agriRestriction}% livestock restriction) presents a ${riskLevel} evolutionary selection risk with a ${populationMetrics.resistantMutantPercent}% mutant population share.`;

  const biologicalMechanism = `When patients stop antibiotic therapy early (${compliance}% compliance) or when drugs are administered sub-therapeutically, drug serum levels drop into the sub-MIC mutant selection window. Susceptible wild-type bacteria are eliminated, removing competitive inhibition and allowing pre-existing low-frequency mutant isolates (e.g. harboring efflux pump up-regulations or target site point mutations) to survive, replicate, and dominate the population.`;

  const evolutionaryImpact = `Sub-MIC selective pressure significantly accelerates step-wise evolutionary adaptation. Surviving bacterial lineages acquire higher-tier secondary mutations in essential genes (such as gyrA/parC fluoroquinolone resistance loci or rpoB rifampicin resistance loci), raising the Minimal Inhibitory Concentration (MIC) by up to 100-fold.`;

  const spreadMechanism = sc.explanationDetails.spreadVector || `Surviving resistant pathogens are shed into the immediate environment and transferred to vulnerable host contacts via contaminated clinical surfaces, unwashed hands, or agricultural wastewater runoff. High bacterial density in biofilms enhances horizontal gene transfer (HGT) via conjugative plasmids.`;

  const clinicalImpact = `Elevated likelihood of primary treatment failure, prolonged hospitalization stays, persistent bacteremia, and forced escalation to toxic or expensive last-resort reserve antimicrobials (e.g., colistin, tigecycline, cefiderocol).`;

  const preventionSteps = [
    'Enforce complete adherence to prescribed antimicrobial regimens; never discontinue therapy early based solely on initial symptom relief.',
    'Implement rapid diagnostic testing (RDT) and blood culture AST prior to initiating broad-spectrum empiric therapy.',
    'Maintain strict infection prevention protocols (>90% hand hygiene compliance, isolation barriers) to interrupt horizontal transmission vectors.',
    'Enact One Health regulations banning non-therapeutic antibiotic growth promoters in food-producing livestock agriculture.'
  ];

  return {
    riskLevel,
    summary,
    biologicalMechanism,
    evolutionaryImpact,
    clinicalImpact,
    spreadMechanism,
    preventionSteps,
    populationMetrics
  };
}

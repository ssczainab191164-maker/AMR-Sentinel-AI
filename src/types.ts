export interface Pathogen {
  id: string;
  name: string;
  scientificName: string;
  gramStatus: 'Gram-Positive' | 'Gram-Negative' | 'Acid-Fast' | 'Fungal';
  whoPriority: 'Critical' | 'High' | 'Medium';
  severityLabel: 'Critical Priority Pathogen' | 'High Priority Pathogen' | 'Global Health Emergency';
  morphologyAndStructure: string;
  icon: string;
  resistanceProblem: string;
  antibioticsAffected: string[];
  keyGenes: string[];
  detectionMethod: string;
  astMethods: string[];
  preventionTips: string[];
  overview: string;
  biochemicalMechanism: string;
}

export interface RiskScenario {
  id: string;
  title: string;
  category: 'Clinical Misuse' | 'Patient Behavior' | 'Infection Control' | 'Agriculture' | 'Environment';
  shortDesc: string;
  defaultRisk: 'HIGH' | 'CRITICAL' | 'MODERATE' | 'LOW';
  icon: string;
  explanationDetails: {
    misuseCause: string;
    selectivePressure: string;
    survivalMechanism: string;
    spreadVector: string;
    oneHealthImpact: string;
  };
  defaultParams: {
    patientCompliance: number; // 0 to 100%
    exposureDurationDays: number; // 1 to 14 days
    hygieneStrictness: number; // 0 to 100%
    agriRestriction: number; // 0 to 100%
  };
}

export interface SimulationResult {
  riskLevel: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  summary: string;
  biologicalMechanism: string;
  evolutionaryImpact: string;
  clinicalImpact: string;
  spreadMechanism: string;
  preventionSteps: string[];
  populationMetrics?: {
    wildTypePercent: number;
    resistantMutantPercent: number;
    selectivePressureIndex: number;
    hgtRiskPercent: number;
  };
}

export interface QuizQuestion {
  id: string;
  category: 'Basics' | 'Mechanisms' | 'Stewardship' | 'One Health';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}


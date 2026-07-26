import { RiskScenario } from '../types';

export const SCENARIOS_DATA: RiskScenario[] = [
  {
    id: 'misuse',
    title: 'Unnecessary Antibiotic Use',
    category: 'Clinical Misuse',
    shortDesc: 'Prescribing broad-spectrum antibiotics for self-limiting viral infections (e.g., viral colds, influenza, viral bronchitis, or acute pharyngitis).',
    defaultRisk: 'HIGH',
    icon: 'Pills',
    explanationDetails: {
      misuseCause: 'Antibiotics target bacterial cell structures (peptidoglycan wall, 70S ribosome) and have zero efficacy against viral pathogens.',
      selectivePressure: 'Broad-spectrum drugs exert unnecessary killing pressure on normal commensal microbiota in the gut, skin, and nasopharynx.',
      survivalMechanism: 'Elimination of susceptible commensal flora creates a biological void, enabling pre-existing resistant opportunistic bacteria to proliferate without competition.',
      spreadVector: 'Overgrowth of resistant gut commensals increases shedding into the environment and potential cross-colonization of family members.',
      oneHealthImpact: 'Drives overall community drug pressure and increases baseline resistance gene carriage in human reservoirs.'
    },
    defaultParams: {
      patientCompliance: 100,
      exposureDurationDays: 5,
      hygieneStrictness: 70,
      agriRestriction: 80
    }
  },
  {
    id: 'incomplete',
    title: 'Stopping Antibiotics Early',
    category: 'Patient Behavior',
    shortDesc: 'Discontinuing a prescribed antibiotic regimen prematurely as soon as symptoms subside, leaving residual bacterial populations in tissue.',
    defaultRisk: 'CRITICAL',
    icon: 'Hourglass',
    explanationDetails: {
      misuseCause: 'Patients mistake early symptom alleviation for complete bacterial clearance, stopping medication on Day 3 of a 10-day course.',
      selectivePressure: 'Rapidly dropping drug serum levels create a sub-MIC (Minimal Inhibitory Concentration) selective window in infected tissues.',
      survivalMechanism: 'Partially resistant bacteria with low-tier mutations or efflux pumps survive sub-MIC levels and acquire secondary step-wise mutations.',
      spreadVector: 'Relapsed persistent infection with a elevated MIC profile requiring second- or third-line intravenous rescue therapies.',
      oneHealthImpact: 'Generates recalcitrant clinical strains that circulate in outpatient and hospital settings.'
    },
    defaultParams: {
      patientCompliance: 35, // premature discontinuation
      exposureDurationDays: 3, // truncated duration
      hygieneStrictness: 65,
      agriRestriction: 80
    }
  },
  {
    id: 'control',
    title: 'Poor Hospital Infection Control',
    category: 'Infection Control',
    shortDesc: 'Inadequate hand hygiene, improper decontamination of invasive medical equipment, and breaches of contact isolation protocols in ICUs.',
    defaultRisk: 'CRITICAL',
    icon: 'HandsWash',
    explanationDetails: {
      misuseCause: 'Lapses in PPE donning/doffing and poor hand hygiene compliance (<50%) among healthcare workers between patient beds.',
      selectivePressure: 'High background antibiotic usage in intensive care units maintains constant selective pressure across hospital surfaces.',
      survivalMechanism: 'High bacterial density in bio-films and patient skin folds facilitates rapid Horizontal Gene Transfer (HGT) via conjugative plasmid pili.',
      spreadVector: 'Fomites, contaminated catheters, ventilators, and unwashed hands transmit CRE, MRSA, and VRE between vulnerable patients.',
      oneHealthImpact: 'Outbreaks of pan-drug resistant superbugs in healthcare facilities that spill over into home care communities.'
    },
    defaultParams: {
      patientCompliance: 80,
      exposureDurationDays: 7,
      hygieneStrictness: 25, // poor hygiene
      agriRestriction: 80
    }
  },
  {
    id: 'agriculture',
    title: 'Agricultural & Livestock Antibiotic Overuse',
    category: 'Agriculture',
    shortDesc: 'Routine administration of medically important antibiotics as sub-therapeutic growth promoters or mass prophylaxis in food-producing livestock.',
    defaultRisk: 'CRITICAL',
    icon: 'Wheat',
    explanationDetails: {
      misuseCause: 'Low-dose antibiotics added continuously to livestock feed and water to boost weight gain and suppress crowd disease in factory farms.',
      selectivePressure: 'Massive, continuous sub-therapeutic drug concentrations in animal intestinal tracts select for resistant zoonotic bacteria.',
      survivalMechanism: 'Plasmids carrying mobile resistance genes (e.g., mcr-1 colistin resistance, optrA linezolid resistance) replicate rapidly in farm animals.',
      spreadVector: 'Direct contact with farm animals, contaminated meat products, and agricultural manure runoff into soil and irrigation water.',
      oneHealthImpact: 'Zoonotic transmission creates an environmental resistome bridging agricultural ecosystems and human clinical medicine.'
    },
    defaultParams: {
      patientCompliance: 20, // continuous sub-therapeutic dose
      exposureDurationDays: 14, // prolonged low exposure
      hygieneStrictness: 40,
      agriRestriction: 20 // poor restriction on farm drug use
    }
  }
];


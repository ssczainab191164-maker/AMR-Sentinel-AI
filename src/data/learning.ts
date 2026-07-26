import { QuizQuestion } from '../types';

export interface LearningTopic {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  sections: {
    heading: string;
    content: string;
    keyTakeaway?: string;
  }[];
}

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    id: 'basics',
    title: 'AMR Basics & Overview',
    subtitle: 'Understanding the biological foundations of antimicrobial resistance',
    icon: 'BookOpen',
    sections: [
      {
        heading: 'What is Antimicrobial Resistance?',
        content: 'Antimicrobial Resistance (AMR) occurs when microorganisms—bacteria, viruses, fungi, and parasites—evolve mechanisms that protect them from the effects of antimicrobial medications. When microorganisms become resistant to most or all standard therapies, they are commonly referred to as "superbugs".',
        keyTakeaway: 'AMR makes standard medical treatments ineffective, leading to persistent infections, elevated healthcare costs, and increased mortality.'
      },
      {
        heading: 'The Natural Evolution vs. Accelerated Drivers',
        content: 'Resistance is an ancient, naturally occurring evolutionary phenomenon. Microbes produce antimicrobials in soil to compete with other species, and target microbes naturally evolve defensive countermeasures. However, human overuse and misuse of antibiotics in clinical medicine, veterinary practice, and agriculture have dramatically accelerated this evolutionary process.',
        keyTakeaway: 'Selective pressure from human antimicrobial usage favors the survival and proliferation of resistant mutant strains.'
      },
      {
        heading: 'Global Burden of Disease',
        content: 'According to the landmark GRAM Study published in The Lancet, AMR was directly attributable for an estimated 1.27 million global deaths in 2019 and associated with 4.95 million deaths. Without decisive global intervention, annual deaths are projected to reach 10 million by 2050.',
        keyTakeaway: 'AMR represents one of the top 10 global public health threats facing humanity.'
      }
    ]
  },
  {
    id: 'mechanisms',
    title: 'Resistance Mechanisms',
    subtitle: 'Biochemical and molecular pathways microbes use to survive drugs',
    icon: 'Dna',
    sections: [
      {
        heading: '1. Enzymatic Inactivation & Destruction',
        content: 'Bacteria produce enzymes that chemically alter or hydrolyze antibiotic molecules before they reach their cellular targets. Prominent examples include β-lactamases (which cleave the β-lactam ring of penicillins and cephalosporins) and Aminoglycoside-Modifying Enzymes (AMEs) that acetylate, phosphorylate, or adenylate aminoglycosides.',
        keyTakeaway: 'Enzymes like KPC, NDM-1, and TEM directly destroy antibiotic efficacy.'
      },
      {
        heading: '2. Multidrug Efflux Pumps',
        content: 'Membrane-bound transport proteins actively pump antibiotic molecules out of the bacterial cytoplasm and periplasm, keeping intracellular drug concentrations below the Minimal Inhibitory Concentration (MIC). Families include RND (e.g., MexAB-OprM in Pseudomonas), MFS, and ABC transporters.',
        keyTakeaway: 'Efflux pumps can extrude multiple structurally distinct classes of antibiotics simultaneously.'
      },
      {
        heading: '3. Target Modification & Alteration',
        content: 'Spontaneous point mutations in chromosomal genes or enzymatic modifications (such as methylation) alter the structural binding site of the antibiotic, preventing drug binding. Examples include mecA encoding PBP2a in MRSA, rpoB mutations in Rifampicin-resistant TB, and gyrA/parC mutations in Fluoroquinolone resistance.',
        keyTakeaway: 'Target site conformational changes prevent drug attachment without impairing essential cellular functions.'
      },
      {
        heading: '4. Horizontal Gene Transfer (HGT)',
        content: 'Bacteria rapidly spread resistance genes across species boundaries via three major HGT mechanisms:\n• Conjugation: Direct cell-to-cell transfer of plasmids via sex pili.\n• Transformation: Uptake of naked DNA fragments from the environment.\n• Transduction: Bacteriophage virus-mediated DNA transfer.',
        keyTakeaway: 'Plasmids and transposons act as mobile genetic elements driving rapid global dissemination.'
      }
    ]
  },
  {
    id: 'stewardship',
    title: 'Antibiotic Stewardship',
    subtitle: 'Clinical protocols to optimize therapy and curb resistance emergence',
    icon: 'ShieldCheck',
    sections: [
      {
        heading: 'Core Principles of Antimicrobial Stewardship Programs (ASP)',
        content: 'Antimicrobial stewardship refers to coordinated interventions designed to measure and improve the appropriate use of antimicrobials by promoting the selection of the optimal antimicrobial drug regimen, dose, duration, and route of administration.',
        keyTakeaway: 'The goal of ASP is achieving optimal clinical outcomes while minimizing toxicity and selective resistance pressure.'
      },
      {
        heading: 'Diagnostic Stewardship & Susceptibility Testing',
        content: 'Rapid diagnostic testing (RDT), multiplex PCR, MALDI-TOF mass spectrometry, and automated Minimal Inhibitory Concentration (MIC) testing enable clinicians to transition rapidly from broad-spectrum empirical therapy to targeted narrow-spectrum therapy.',
        keyTakeaway: 'De-escalation based on microbiological culture and AST results is a cornerstone of effective stewardship.'
      },
      {
        heading: 'The 5 "Rights" of Antibiotic Administration',
        content: '1. Right Patient (confirmed bacterial indication)\n2. Right Drug (narrow-spectrum sensitivity)\n3. Right Dose (optimized pharmacokinetics/pharmacodynamics)\n4. Right Route (IV to oral step-down)\n5. Right Duration (shortest evidence-based course)',
        keyTakeaway: 'Shorter, targeted therapy courses reduce secondary C. difficile infections and drug toxicity.'
      }
    ]
  },
  {
    id: 'onehealth',
    title: 'One Health Approach',
    subtitle: 'Connecting human, animal, plant, and environmental healthcare',
    icon: 'Globe',
    sections: [
      {
        heading: 'The Interconnected Ecosystem',
        content: 'The One Health framework recognizes that human health is inextricably linked to animal health, agriculture, and the environment. Resistance genes created or amplified in one sector easily migrate to others through food chains, water systems, and global travel.',
        keyTakeaway: 'Addressing AMR requires collaborative multi-sectoral strategies spanning human and veterinary medicine.'
      },
      {
        heading: 'Veterinary Medicine & Food Agriculture',
        content: 'Historically, vast quantities of medically important antibiotics were administered as growth promoters or routine group prophylaxis in commercial livestock. Phasing out non-therapeutic agricultural antibiotic use (such as Colistin in animal feed) is critical to preserving critical human reserves.',
        keyTakeaway: 'Banning agricultural growth promoters prevents animal-to-human transmission of resistant strains like mcr-1 harboring Enterobacteriaceae.'
      },
      {
        heading: 'Environmental Reservoirs',
        content: 'Pharmaceutical manufacturing wastewater, untreated sewage, and agricultural manure runoff create environmental hotspots where heavy metals, residual drugs, and wild bacteria exchange resistant plasmids freely.',
        keyTakeaway: 'Upgrading wastewater treatment infrastructure prevents environmental gene pools from spawning novel superbug variants.'
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'Mechanisms',
    question: 'Which gene is responsible for encoding PBP2a in Methicillin-resistant Staphylococcus aureus (MRSA)?',
    options: ['blaKPC', 'mecA', 'vanA', 'rpoB'],
    correctAnswer: 1,
    explanation: 'The mecA gene (carried on the SCCmec genetic element) encodes Penicillin-Binding Protein 2a (PBP2a), which has a very low affinity for β-lactam antibiotics.'
  },
  {
    id: 'q2',
    category: 'Mechanisms',
    question: 'What is the primary mechanism by which Enterococcus faecium develops vancomycin resistance (VRE)?',
    options: [
      'Overexpression of RND efflux pumps',
      'Remodeling cell wall precursors from D-Ala-D-Ala to D-Ala-D-Lac',
      'Production of carbapenemase enzymes',
      'Loss of OprD outer membrane porins'
    ],
    correctAnswer: 1,
    explanation: 'Vancomycin resistance operons (vanA/vanB) modify cell wall peptidoglycan precursors from D-Alanyl-D-Alanine to D-Alanyl-D-Lactate, reducing vancomycin binding affinity by 1,000-fold.'
  },
  {
    id: 'q3',
    category: 'Basics',
    question: 'Which mode of Horizontal Gene Transfer involves direct cell-to-cell contact via a sex pilus?',
    options: ['Transformation', 'Transduction', 'Conjugation', 'Spontaneous mutation'],
    correctAnswer: 2,
    explanation: 'Conjugation is the process where genetic material (usually plasmids) is transferred between bacteria via direct cell-to-cell contact using a sex pilus.'
  },
  {
    id: 'q4',
    category: 'Stewardship',
    question: 'What is the primary objective of "De-escalation" in antibiotic stewardship?',
    options: [
      'Increasing antibiotic dosage when symptoms persist',
      'Switching from broad-spectrum empirical therapy to narrow-spectrum targeted therapy once AST results return',
      'Stopping all antibiotics immediately without testing',
      'Adding a second broad-spectrum drug routinely'
    ],
    correctAnswer: 1,
    explanation: 'De-escalation reduces unnecessary broad-spectrum coverage by narrowing therapy to target the specific organism identified on culture and AST, minimizing collateral microbiome damage.'
  },
  {
    id: 'q5',
    category: 'One Health',
    question: 'Why is the mcr-1 gene plasmid resistance mechanism of global concern in the One Health framework?',
    options: [
      'It grants resistance to Colistin, a last-resort drug, and originated from agricultural livestock feed usage',
      'It causes resistance to oral penicillin only',
      'It is confined strictly to environmental viral phages',
      'It prevents bacterial growth in cold environments'
    ],
    correctAnswer: 0,
    explanation: 'The mcr-1 gene encodes plasmid-mediated resistance to Colistin (polymyxin E), a last-resort antibiotic for pan-drug resistant Gram-negative infections, and spread rapidly due to agricultural overuse.'
  }
];

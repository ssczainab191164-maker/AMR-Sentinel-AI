import { Pathogen } from '../types';

export const PATHOGENS_DATA: Pathogen[] = [
  {
    id: 'mrsa',
    name: 'MRSA',
    scientificName: 'Staphylococcus aureus',
    gramStatus: 'Gram-Positive',
    whoPriority: 'High',
    severityLabel: 'High Priority Pathogen',
    morphologyAndStructure: 'Gram-positive cocci in grape-like clusters, non-motile, thick peptidoglycan wall with protein A and teichoic acids.',
    icon: 'ShieldAlert',
    resistanceProblem: 'Resistant to methicillin, oxacillin, penicillin, nafcillin, and almost all standard β-lactam antibiotics.',
    antibioticsAffected: ['Penicillins', 'Cephalosporins (1st-4th Gen)', 'Carbapenems', 'Monobactams'],
    keyGenes: ['mecA', 'mecC (encoding low-affinity PBP2a)'],
    detectionMethod: 'Cefoxitin disk diffusion test, Oxacillin MIC screening, or PCR detection of the mecA gene.',
    astMethods: [
      'Kirby-Bauer Disk Diffusion (Cefoxitin 30 µg disk surrogate)',
      'Broth Microdilution MIC for Vancomycin & Daptomycin',
      'Automated AST Systems (Vitek 2, BD Phoenix)',
      'E-test Gradient Strips for Vancomycin MIC'
    ],
    preventionTips: [
      'Strict hand hygiene with alcohol-based rubs before and after patient contact',
      'Contact isolation precautions and single-room placement for colonized patients',
      'Surface decontamination with EPA-approved sporicidal disinfectants',
      'Nasal mupirocin decolonization protocols prior to elective surgical procedures'
    ],
    overview: 'Methicillin-resistant Staphylococcus aureus (MRSA) is a major nosocomial and community-associated pathogen causing severe skin and soft tissue infections, necrotizing pneumonia, infective endocarditis, osteomyelitis, and life-threatening sepsis.',
    biochemicalMechanism: 'Acquisition of the mecA gene within the Staphylococcal Cassette Chromosome mec (SCCmec) element encodes a novel Penicillin-Binding Protein 2a (PBP2a). PBP2a maintains transpeptidase cell wall synthesis even in the presence of lethal β-lactam concentrations due to extremely low drug binding affinity.'
  },
  {
    id: 'ecoli-esbl',
    name: 'E. coli (ESBL / CRE)',
    scientificName: 'Escherichia coli',
    gramStatus: 'Gram-Negative',
    whoPriority: 'Critical',
    severityLabel: 'Critical Priority Pathogen',
    morphologyAndStructure: 'Gram-negative facultative anaerobic bacillus (rod), flagellated, outer lipopolysaccharide (LPS) membrane with O, H, and K antigens.',
    icon: 'Dna',
    resistanceProblem: 'Produces Extended-Spectrum Beta-Lactamases (ESBLs) or Carbapenemases (CRE) capable of degrading 3rd-generation cephalosporins, monobactams, and carbapenems.',
    antibioticsAffected: ['Ceftriaxone', 'Cefotaxime', 'Ceftazidime', 'Aztreonam', 'Meropenem (CRE strains)', 'Fluoroquinolones'],
    keyGenes: ['blaCTX-M-15', 'blaTEM', 'blaSHV', 'blaNDM-1', 'blaKPC'],
    detectionMethod: 'Double-Disk Synergy Test (DDST), phenotypic MIC screening with clavulanic acid inhibition, or Carba NP assay.',
    astMethods: [
      'CLSI Double-Disk Synergy Test (Cefotaxime & Ceftazidime ± Clavulanate)',
      'Broth Microdilution MIC for Carbapenems & Colistin',
      'Multiplex PCR PCR for blaCTX-M and blaNDM genes',
      'Rapid Lateral Flow Immunoassay for KPC/NDM detection'
    ],
    preventionTips: [
      'Strict hand hygiene compliance in clinical ward environments',
      'Active surveillance rectal screening in high-risk intensive care units',
      'Judicious diagnostic stewardship limiting empiric broad-spectrum cephalosporins',
      'Proper food safety hygiene and agricultural antimicrobial restrictions'
    ],
    overview: 'Escherichia coli harboring plasmid-mediated ESBL or carbapenemase genes are primary drivers of treatment failure in severe pyelonephritis, intra-abdominal sepsis, and bloodstream bacteremia worldwide.',
    biochemicalMechanism: 'Plasmid-borne ESBL enzymes (predominantly CTX-M lineage) rapidly hydrolyze the β-lactam ring of advanced cephalosporins via active-site serine residues, preventing inhibition of cell-wall transpeptidases.'
  },
  {
    id: 'pseudomonas',
    name: 'P. aeruginosa',
    scientificName: 'Pseudomonas aeruginosa',
    gramStatus: 'Gram-Negative',
    whoPriority: 'Critical',
    severityLabel: 'Critical Priority Pathogen',
    morphologyAndStructure: 'Gram-negative strictly aerobic rod, single polar flagellum, produces pyocyanin/pyoverdine pigments and alginate exopolysaccharide capsule.',
    icon: 'Activity',
    resistanceProblem: 'Intrinsic low outer-membrane permeability, overexpressed multidrug efflux pumps, inducible AmpC β-lactamases, and persistent biofilm formation.',
    antibioticsAffected: ['Carbapenems', 'Piperacillin-Tazobactam', 'Cefepime', 'Ciprofloxacin', 'Gentamicin'],
    keyGenes: ['MexAB-OprM', 'MexXY-OprM', 'oprD loss', 'blaVIM', 'blaIMP'],
    detectionMethod: 'Automated susceptibility testing platforms (Vitek 2, BD Phoenix) verified by Kirby-Bauer disk diffusion according to CLSI/EUCAST benchmarks.',
    astMethods: [
      'Broth Microdilution MIC for Antipseudomonal β-lactams',
      'Kirby-Bauer Disk Diffusion with Mueller-Hinton Agar',
      'E-test Gradient Strips for Colistin & Ceftolozane-Tazobactam',
      'Modified Carbapenem Inactivation Method (mCIM) for Metallo-β-lactamases'
    ],
    preventionTips: [
      'Strict environmental water system, sink trap, and drainage sanitation',
      'Sterilization and strict single-patient protocols for respiratory therapy devices',
      'Early removal of indwelling urinary catheters and endotracheal tube maintenance',
      'Contact precautions for patients harboring multidrug-resistant isolates'
    ],
    overview: 'A formidable opportunistic pathogen causing severe ventilator-associated pneumonia in ICUs, chronic pulmonary exacerbations in cystic fibrosis, and ecthyma gangrenosum in neutropenic patients.',
    biochemicalMechanism: 'Combines loss or down-regulation of the OprD outer membrane porin (preventing carbapenem entry) with overexpressed Resistance-Nodulation-Division (RND) efflux pump complexes that actively extrude antibiotics.'
  },
  {
    id: 'tb-mdr',
    name: 'MDR-TB',
    scientificName: 'Mycobacterium tuberculosis',
    gramStatus: 'Acid-Fast',
    whoPriority: 'Critical',
    severityLabel: 'Global Health Emergency',
    morphologyAndStructure: 'Acid-fast aerobic bacillus with a thick lipid-rich cell envelope containing mycolic acids, arabinogalactan, and cord factor.',
    icon: 'Lungs',
    resistanceProblem: 'Multidrug-Resistant Tuberculosis (MDR-TB) is resistant to Isoniazid and Rifampicin; Pre-XDR/XDR-TB adds resistance to fluoroquinolones and bedaquiline.',
    antibioticsAffected: ['Isoniazid (INH)', 'Rifampicin (RIF)', 'Ethambutol', 'Pyrazinamide', 'Fluoroquinolones (in XDR-TB)'],
    keyGenes: ['rpoB (Rifampicin)', 'katG & inhA promoter (Isoniazid)', 'gyrA & gyrB (Fluoroquinolones)'],
    detectionMethod: 'Rapid automated molecular testing (GeneXpert MTB/RIF & Ultra assays) and automated liquid culture (BACTEC MGIT 960 system).',
    astMethods: [
      'GeneXpert MTB/RIF Assay (Detects rpoB mutations within 2 hours)',
      'BACTEC MGIT 960 Liquid Culture Drug Susceptibility Testing',
      'Line Probe Assays (GenoType MTBDRplus)',
      'Whole Genome Sequencing (WGS) for comprehensive mutation profiling'
    ],
    preventionTips: [
      'Negative-pressure airborne infection isolation rooms (AIIR) in clinical wards',
      'Mandatory N95 / FFP3 respirator protection for attending healthcare workers',
      'Directly Observed Therapy, Short-course (DOTS) to ensure 100% treatment adherence',
      'Contact tracing and preventive therapy for close domestic contacts'
    ],
    overview: 'MDR-TB is a major global infectious threat requiring complex 9–24 month multidrug regimens involving toxic second-line agents like bedaquiline, linezolid, and pretomanid.',
    biochemicalMechanism: 'Chromosomal point mutations in the rpoB gene alter the β-subunit binding pocket of RNA polymerase, blocking rifampicin docking. Mutations in katG prevent peroxidase activation of the prodrug isoniazid.'
  },
  {
    id: 'acinetobacter',
    name: 'A. baumannii (CRAB)',
    scientificName: 'Acinetobacter baumannii',
    gramStatus: 'Gram-Negative',
    whoPriority: 'Critical',
    severityLabel: 'Critical Priority Pathogen',
    morphologyAndStructure: 'Gram-negative strictly aerobic coccobacillus, non-motile, resilient outer capsule allowing prolonged survival on dry inanimate hospital surfaces.',
    icon: 'Zap',
    resistanceProblem: 'Carbapenem-Resistant Acinetobacter baumannii (CRAB) exhibits extreme resistance to nearly all available β-lactams, aminoglycosides, and fluoroquinolones.',
    antibioticsAffected: ['Meropenem', 'Imipenem', 'Ampicillin-Sulbactam', 'Ciprofloxacin', 'Amikacin', 'Colistin (emerging)'],
    keyGenes: ['blaOXA-23', 'blaOXA-24/40', 'blaOXA-58', 'adeABC efflux', 'armA 16S rRNA methylase'],
    detectionMethod: 'Broth microdilution MIC determination according to CLSI standards and molecular PCR amplification of OXA carbapenemase gene families.',
    astMethods: [
      'Broth Microdilution MIC for Colistin & Cefiderocol',
      'Kirby-Bauer Disk Diffusion on Mueller-Hinton Agar',
      'Multiplex PCR for OXA-23-like & OXA-24-like carbapenemases',
      'Automated Vitek 2 / Phoenix AST Panels'
    ],
    preventionTips: [
      'Rigorous terminal environmental cleaning with chlorine or hydrogen peroxide vapor',
      'Dedicated medical equipment (blood pressure cuffs, stethoscopes) per isolation room',
      'Strict adherence to ventilator bundle protocols to prevent ICU pneumonia',
      'Active colonization surveillance in burn units and trauma centers'
    ],
    overview: 'CRAB is a notorious cause of ventilator-associated pneumonia, catheter-related bloodstream infections, and severe surgical wound infections in critically ill ICU patients.',
    biochemicalMechanism: 'Driven by plasmid or transposon-acquired Class D OXA carbapenemases (blaOXA-23) coupled with upregulated AdeABC efflux pumps and down-regulated outer membrane porins.'
  },
  {
    id: 'vre',
    name: 'VRE',
    scientificName: 'Enterococcus faecium',
    gramStatus: 'Gram-Positive',
    whoPriority: 'High',
    severityLabel: 'High Priority Pathogen',
    morphologyAndStructure: 'Gram-positive facultative anaerobic cocci in pairs or short chains, robust cell wall resistant to desiccation, bile, and high temperature.',
    icon: 'Shield',
    resistanceProblem: 'Vancomycin-Resistant Enterococcus (VRE) resistant to glycopeptides, ampicillin, and high-level aminoglycosides, leaving limited options like linezolid and daptomycin.',
    antibioticsAffected: ['Vancomycin', 'Teicoplanin', 'Ampicillin', 'High-level Aminoglycosides'],
    keyGenes: ['vanA', 'vanB (encodes cell wall precursor ligases)'],
    detectionMethod: 'Vancomycin agar screen (6 µg/mL vancomycin in Brain Heart Infusion agar) and broth microdilution MIC testing.',
    astMethods: [
      'CLSI Vancomycin Agar Screen (6 µg/mL VHC in BHI)',
      'Broth Microdilution MIC for Daptomycin & Linezolid',
      'E-test Gradient Strips for Vancomycin & Teicoplanin',
      'Real-Time PCR for vanA / vanB gene loci'
    ],
    preventionTips: [
      'Contact precautions (gowns and gloves) during all direct patient care activities',
      'Chlorhexidine gluconate (CHG) daily bathing for high-risk ICU inpatients',
      'Antimicrobial stewardship interventions restricting empiric vancomycin use',
      'Thorough disinfection of patient environments with sporicidal cleaning agents'
    ],
    overview: 'Enterococcus faecium is a resilient gut commensal that causes severe healthcare-associated endocarditis, urinary tract infections, and line sepsis in immunocompromised patients.',
    biochemicalMechanism: 'The vanA/vanB operon senses glycopeptides and synthesizes modified cell wall peptidoglycan precursors terminating in D-alanyl-D-lactate instead of D-alanyl-D-alanine, decreasing vancomycin binding affinity by 1,000-fold.'
  },
  {
    id: 'klebsiella-cre',
    name: 'K. pneumoniae (CRE)',
    scientificName: 'Klebsiella pneumoniae',
    gramStatus: 'Gram-Negative',
    whoPriority: 'Critical',
    severityLabel: 'Global Health Emergency',
    morphologyAndStructure: 'Gram-negative non-motile, encapsulated bacillus with a thick hypermucoviscous polysaccharide capsule protecting against phagocytosis.',
    icon: 'Bug',
    resistanceProblem: 'Carbapenem-Resistant Enterobacteriaceae (CRE) producing KPC or NDM enzymes that destroy carbapenems and all standard β-lactams.',
    antibioticsAffected: ['Meropenem', 'Ertapenem', 'Imipenem', 'Cefepime', 'Piperacillin-Tazobactam'],
    keyGenes: ['blaKPC-2 / blaKPC-3', 'blaNDM-1', 'blaOXA-48', 'mgrB mutations (colistin resistance)'],
    detectionMethod: 'Modified Carbapenem Inactivation Method (mCIM), Carba NP colorimetric assay, or immunochromatographic lateral flow strips.',
    astMethods: [
      'Modified CIM (mCIM) and EDTA-CIM (eCIM) differentiation',
      'Broth Microdilution for Ceftazidime-Avibactam & Cefiderocol',
      'Carba NP Enzymatic Colorimetric Hydrolysis Assay',
      'Multiplex PCR Gene Amplification Panels'
    ],
    preventionTips: [
      'Strict contact isolation and dedicated nursing staff cohorts',
      'Rectal swab screening upon admission to high-risk clinical units',
      'Implementation of bundle measures for central vascular catheters and urinary drains',
      'Antimicrobial stewardship auditing broad-spectrum carbapenem usage'
    ],
    overview: 'CRE Klebsiella pneumoniae infections carry crude hospital mortality rates exceeding 40–50% in ICU settings due to pan-drug resistance profiles.',
    biochemicalMechanism: 'Plasmid-borne carbapenemase enzymes (Class A KPC, Class B Metallo-β-lactamases like NDM, or Class D OXA-48) directly destroy carbapenem rings via serine or zinc ion catalytic mechanisms.'
  },
  {
    id: 'candida-auris',
    name: 'Candida auris',
    scientificName: 'Candida auris',
    gramStatus: 'Fungal',
    whoPriority: 'Critical',
    severityLabel: 'Global Health Emergency',
    morphologyAndStructure: 'Multidrug-resistant oval-shaped budding yeast, forms pseudohyphae under specific conditions, persistent colonizer of skin and hospital room surfaces.',
    icon: 'Flame',
    resistanceProblem: 'Multidrug- and pan-resistant fungal pathogen exhibiting high-level resistance to fluconazole, amphotericin B, and emerging echinocandin resistance.',
    antibioticsAffected: ['Fluconazole', 'Voriconazole', 'Amphotericin B', 'Caspofungin / Anidulafungin (Echinocandins)'],
    keyGenes: ['ERG11 (Azole resistance mutations)', 'FKS1 (Echinocandin resistance mutations)', 'CDR1 / MDR1 (Efflux)'],
    detectionMethod: 'MALDI-TOF Mass Spectrometry or rDNA sequencing (standard automated yeast biochemical cards frequently misidentify C. auris).',
    astMethods: [
      'CLSI M27 Broth Microdilution Antifungal Susceptibility Testing',
      'MALDI-TOF MS with updated reference libraries',
      'DNA Sequencing of ERG11 and FKS1 hot-spot regions',
      'E-test Gradient Strips for Echinocandins & Amphotericin B'
    ],
    preventionTips: [
      'Disinfection exclusively with EPA-registered hospital sporicidal disinfectants',
      'Single-patient isolation rooms with contact precautions',
      'Active skin colonization surveillance screening in long-term care facilities',
      'Immediate notification to public health authorities upon case identification'
    ],
    overview: 'An emerging global multidrug-resistant fungal threat causing invasive candidemia and pericarditis with high mortality rates in intensive care patients.',
    biochemicalMechanism: 'Combines amino acid substitutions in target enzymes (ERG11 for azoles, FKS1 for echinocandins) with overexpressed ABC transporter efflux pumps that purge antifungal molecules.'
  }
];

import React, { useState } from 'react';
import { Microscope, Dna, Sparkles, X, Send, HeartHandshake, Award, ShieldAlert, BookOpen, CheckCircle2, MessageSquare, GraduationCap, Globe, Mail } from 'lucide-react';
import logoImage from '../assets/images/amr_sentinel_logo_1785007880805.jpg';

interface AboutAndFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'about' | 'feedback';
}

export const AboutAndFeedbackModal: React.FC<AboutAndFeedbackModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'about'
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'feedback'>(defaultTab);

  // Feedback Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Undergraduate Microbiology Student');
  const [category, setCategory] = useState('General Feedback');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 flex items-center justify-between relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-teal-600 to-cyan-500 p-0.5 shadow-md overflow-hidden shrink-0">
              <img 
                src={logoImage} 
                alt="AMR Sentinel AI Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[14px]" 
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">AMR Sentinel AI</h2>
                <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase bg-teal-500/20 border border-teal-400/40 text-teal-300 rounded-full">
                  About & Contact
                </span>
              </div>
              <p className="text-xs text-slate-300 font-mono">Microbiology Research & Educational Platform</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer relative z-10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2.5 rounded-t-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'about'
                ? 'bg-white text-teal-800 border-t border-x border-slate-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-teal-600" /> Platform Mission & About
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-4 py-2.5 rounded-t-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'feedback'
                ? 'bg-white text-teal-800 border-t border-x border-slate-200 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-teal-600" /> Student Feedback & Contact
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'about' ? (
            <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
              
              {/* Mission Hero */}
              <div className="p-5 rounded-2xl bg-teal-50/80 border border-teal-200/90 text-teal-950 space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-teal-800">
                  <GraduationCap className="w-4 h-4 text-teal-600" /> Core Educational Purpose
                </div>
                <h3 className="font-extrabold text-base text-slate-900">
                  Empowering the Next Generation of Microbiologists & Stewardship Leaders
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  AMR Sentinel AI is a comprehensive, interactive educational platform designed for undergraduate microbiology students, educators, and biosecurity learners. It bridges classical microbiology lab training with modern AI-driven genomic surveillance and antimicrobial resistance modeling.
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xs">
                    <Sparkles className="w-4 h-4 text-teal-600" /> Powered by Gemini 3.6 Flash
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Delivers instant structured explanations on resistance genes (<code className="text-teal-700 font-mono">mecA</code>, <code className="text-teal-700 font-mono">blaNDM-1</code>, <code className="text-teal-700 font-mono">vanA</code>), active efflux mechanics, and beta-lactamase degradation pathways.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xs">
                    <Award className="w-4 h-4 text-teal-600" /> Diagnostic Standard Alignment
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Integrates Clinical and Laboratory Standards Institute (CLSI M100) and European Committee on Antimicrobial Susceptibility Testing (EUCAST) breakpoint guidelines.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xs">
                    <Globe className="w-4 h-4 text-teal-600" /> One Health Global Perspective
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Models the interconnected transmission of resistance across human clinical care, agricultural veterinary antibiotic usage, and environmental wastewater reservoirs.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xs">
                    <ShieldAlert className="w-4 h-4 text-teal-600" /> BSL-1 Educational Scope
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Designed strictly for educational simulations and academic coursework under Biosafety Level 1 laboratory protocols.
                  </p>
                </div>
              </div>

              {/* Medical Disclaimer Note */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Academic Disclaimer:</strong> This application is built solely for educational instruction. It does not provide clinical diagnostic reports or medical prescription guidance.
                </p>
              </div>

            </div>
          ) : (
            <div>
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Thank You for Your Feedback!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your response has been logged and submitted to the AMR Sentinel Curriculum team. We appreciate your dedication to improving microbiology education.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="mt-4 px-6 py-2.5 bg-teal-700 text-white font-bold text-xs rounded-xl shadow hover:bg-teal-800 transition cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitFeedback} className="space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Have questions regarding the AMR learning modules, suggestions for new resistance mechanisms, or feedback on AI explanations? Send us a message below!
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Student / User Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Alex Rivers"
                        required
                        className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex.rivers@university.edu"
                        required
                        className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Academic Role</label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 font-medium"
                      >
                        <option value="Undergraduate Microbiology Student">Undergraduate Microbiology Student</option>
                        <option value="Graduate Research Assistant">Graduate Research Assistant</option>
                        <option value="Microbiology Educator / Professor">Microbiology Educator / Professor</option>
                        <option value="Clinical Trainee / MLS">Clinical Trainee / MLS</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Inquiry Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 font-medium"
                      >
                        <option value="General Feedback">General Feedback</option>
                        <option value="Module Request">Module / Topic Request</option>
                        <option value="AI Explanation Clarification">AI Explanation Clarification</option>
                        <option value="Bug Report">Technical Bug Report</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Message / Comments</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your thoughts, suggestions, or questions..."
                      rows={4}
                      required
                      className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 font-medium resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition cursor-pointer flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Feedback to Curriculum Team
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 px-6 shrink-0 font-mono">
          <span>AMR Sentinel AI Version 2.0</span>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 font-bold transition"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

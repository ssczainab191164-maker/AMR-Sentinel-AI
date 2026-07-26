import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { AiAnalyzer } from './components/AiAnalyzer';
import { RiskSimulator } from './components/RiskSimulator';
import { MicrobeCards } from './components/MicrobeCards';
import { GlobalSurveillance } from './components/GlobalSurveillance';
import { LearningHub } from './components/LearningHub';
import { AiTutor } from './components/AiTutor';
import { AboutAndFeedbackModal } from './components/AboutAndFeedbackModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [initialAnalyzerQuery, setInitialAnalyzerQuery] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'about' | 'feedback'>('about');

  const [completedModules, setCompletedModules] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('amr_completed_modules');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleToggleModule = (id: string) => {
    setCompletedModules((prev) => {
      const next = prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id];
      try {
        localStorage.setItem('amr_completed_modules', JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save completed modules:', e);
      }
      return next;
    });
  };

  const handleQuickAnalyze = (query: string) => {
    setInitialAnalyzerQuery(query);
    setActiveTab('analyzer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAbout = () => {
    setModalTab('about');
    setIsModalOpen(true);
  };

  const handleOpenFeedback = () => {
    setModalTab('feedback');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-200 selection:text-teal-900">
      
      {/* Sticky Header Navigation */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenAbout={handleOpenAbout}
        onOpenFeedback={handleOpenFeedback}
      />

      {/* Main View Container with Smooth Transitions */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div key={activeTab} className="animate-in fade-in duration-300">
          {activeTab === 'home' && (
            <Home
              onNavigate={(tab) => setActiveTab(tab)}
              onQuickAnalyze={handleQuickAnalyze}
              completedModules={completedModules}
              onToggleModule={handleToggleModule}
            />
          )}

          {activeTab === 'analyzer' && (
            <AiAnalyzer
              initialQuery={initialAnalyzerQuery}
              onClearInitialQuery={() => setInitialAnalyzerQuery(undefined)}
            />
          )}

          {activeTab === 'simulator' && <RiskSimulator />}

          {activeTab === 'cards' && (
            <MicrobeCards onQuickAnalyze={handleQuickAnalyze} />
          )}

          {activeTab === 'surveillance' && (
            <GlobalSurveillance
              onQuickAnalyze={handleQuickAnalyze}
              onNavigateTab={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'learning' && (
            <LearningHub
              completedModules={completedModules}
              onToggleModule={handleToggleModule}
            />
          )}

          {activeTab === 'tutor' && (
            <AiTutor onNavigateTab={(tab) => setActiveTab(tab)} />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer 
        onOpenAbout={handleOpenAbout}
        onOpenFeedback={handleOpenFeedback}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* About & Feedback Modal */}
      <AboutAndFeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTab={modalTab}
      />

    </div>
  );
}

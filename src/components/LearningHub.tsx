import React, { useState } from 'react';
import { LEARNING_TOPICS, QUIZ_QUESTIONS } from '../data/learning';
import { BookOpen, CheckCircle2, HelpCircle, RefreshCw, Award, ArrowRight, Dna, ShieldCheck, Globe, Sparkles } from 'lucide-react';

interface LearningHubProps {
  completedModules?: string[];
  onToggleModule?: (id: string) => void;
}

export const LearningHub: React.FC<LearningHubProps> = ({
  completedModules = [],
  onToggleModule
}) => {
  const [activeTopic, setActiveTopic] = useState('basics');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const totalTopics = LEARNING_TOPICS.length;
  const completedCount = completedModules.length;
  const completionPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const topicData = LEARNING_TOPICS.find((t) => t.id === activeTopic) || LEARNING_TOPICS[0];
  const isCurrentTopicCompleted = completedModules.includes(topicData.id);

  const handleSelectAnswer = (qId: string, optionIdx: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-teal-400" /> Undergraduate Curriculum Hub
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Microbiology Educational Hub
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Master foundational concepts in antimicrobial resistance, biochemical degradation mechanisms, diagnostic stewardship, and the global One Health initiative.
            </p>
          </div>

          {/* Curriculum Progress Quick Status */}
          <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between space-y-2 shrink-0 min-w-[200px]">
            <div className="flex justify-between items-center text-xs text-slate-300">
              <span className="font-bold">Module Progress</span>
              <span className="text-teal-400 font-mono font-extrabold">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <p className="text-[11px] text-teal-300/90 font-mono text-right">
              {completedCount} / {totalTopics} Completed
            </p>
          </div>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {LEARNING_TOPICS.map((t) => {
          const isActive = activeTopic === t.id && !quizStarted;
          const isDone = completedModules.includes(t.id);
          return (
            <button
              key={t.id}
              onClick={() => {
                setActiveTopic(t.id);
                setQuizStarted(false);
              }}
              className={`p-4 rounded-2xl text-left border font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2 ${
                isActive
                  ? 'bg-teal-700 text-white border-teal-600 shadow-md scale-[1.02]'
                  : isDone
                  ? 'bg-teal-50/60 hover:bg-teal-50 text-slate-900 border-teal-200'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="line-clamp-1">{t.title}</span>
                {isDone && (
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${isActive ? 'text-teal-200' : 'text-teal-600'}`} />
                )}
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className={isActive ? 'text-teal-200' : 'text-slate-500'}>
                  Module Overview
                </span>
                <span className={`px-1.5 py-0.2 rounded font-mono ${
                  isDone ? (isActive ? 'bg-teal-800 text-teal-100' : 'bg-teal-100 text-teal-800') : 'text-slate-400'
                }`}>
                  {isDone ? 'Done ✓' : 'Study'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Quiz Switch Bar */}
      <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-6 rounded-3xl border border-teal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Self-Assessment Module
          </span>
          <h3 className="text-lg font-bold">Test Your Microbiology Knowledge</h3>
          <p className="text-xs text-slate-300">5 undergraduate-level practice questions on resistance mechanisms, AST, and stewardship.</p>
        </div>

        <button
          onClick={() => setQuizStarted(!quizStarted)}
          className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <Award className="w-4 h-4" />
          {quizStarted ? 'Back to Study Modules' : 'Start Knowledge Quiz'}
        </button>
      </div>

      {/* Content Area: Quiz vs Topic Reader */}
      {quizStarted ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-8 animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">Microbiology Knowledge Assessment</span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">Antimicrobial Resistance Quiz</h2>
            </div>

            {!quizSubmitted ? (
              <div className="text-xs font-bold text-slate-600 font-mono bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 shrink-0">
                Answered: <span className="text-teal-700">{Object.keys(selectedAnswers).length}</span> / {QUIZ_QUESTIONS.length} Questions
              </div>
            ) : (
              <div className="px-4 py-2 rounded-2xl bg-teal-900 text-white border border-teal-700 shadow-sm shrink-0 flex items-center gap-3">
                <Award className="w-5 h-5 text-teal-400" />
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-teal-300">Final Grade</div>
                  <div className="text-sm font-black text-white">
                    {calculateScore()} / {QUIZ_QUESTIONS.length} ({Math.round((calculateScore() / QUIZ_QUESTIONS.length) * 100)}%)
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Submitted Score Summary Banner */}
          {quizSubmitted && (
            <div className={`p-6 rounded-2xl border transition-all ${
              calculateScore() === QUIZ_QUESTIONS.length
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : calculateScore() >= 3
                ? 'bg-teal-50 border-teal-300 text-teal-950'
                : 'bg-amber-50 border-amber-300 text-amber-950'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl shrink-0 ${
                  calculateScore() === QUIZ_QUESTIONS.length ? 'bg-emerald-200 text-emerald-800' : 'bg-teal-200 text-teal-800'
                }`}>
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black">
                    {calculateScore() === QUIZ_QUESTIONS.length
                      ? '🎉 Outstanding! Mastery Level: Expert'
                      : calculateScore() >= 3
                      ? '👏 Great Job! Mastery Level: Proficient'
                      : '📚 Keep Studying! Mastery Level: Developing'}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {calculateScore() === QUIZ_QUESTIONS.length
                      ? 'You demonstrated comprehensive understanding of mecA gene expression in MRSA, ESBL beta-lactamase mechanisms, VRE precursor modification, antibiotic stewardship de-escalation, and One Health colistin plasmid transfer.'
                      : calculateScore() >= 3
                      ? 'You have a solid foundation in antimicrobial resistance microbiology. Review the detailed explanations below to master the remaining questions.'
                      : 'Revisit the learning module topics above to strengthen your knowledge of bacterial resistance mechanisms, AST guidelines, and stewardship protocols.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Quiz Questions */}
          <div className="space-y-8">
            {QUIZ_QUESTIONS.map((q, idx) => {
              const selectedOpt = selectedAnswers[q.id];
              const isCorrect = selectedOpt === q.correctAnswer;

              return (
                <div key={q.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                      Question {idx + 1} • {q.category}
                    </span>
                    {quizSubmitted && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    )}
                  </div>

                  <p className="font-bold text-slate-900 text-base leading-snug">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    {q.options.map((opt, optIdx) => {
                      const isOptionSelected = selectedOpt === optIdx;
                      let btnStyle = 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100';

                      if (quizSubmitted) {
                        if (optIdx === q.correctAnswer) {
                          btnStyle = 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold';
                        } else if (isOptionSelected && !isCorrect) {
                          btnStyle = 'bg-red-100 text-red-900 border-red-300 font-bold';
                        }
                      } else if (isOptionSelected) {
                        btnStyle = 'bg-teal-600 text-white border-teal-600 font-bold shadow-xs';
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`w-full p-3.5 rounded-xl text-left border text-xs sm:text-sm transition-all duration-150 cursor-pointer ${btnStyle}`}
                        >
                          <span className="font-mono mr-2 font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="mt-4 p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                      <span className="font-bold text-teal-800 block uppercase tracking-wider text-[10px]">Explanation:</span>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quiz Actions */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            {!quizSubmitted ? (
              <button
                onClick={() => setQuizSubmitted(true)}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition-colors disabled:opacity-50 cursor-pointer"
              >
                Submit Answers & View Grade
              </button>
            ) : (
              <button
                onClick={handleResetQuiz}
                className="px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" /> Retake Quiz
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Topic Study Reader */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10 space-y-8 animate-in fade-in duration-200">
          
          <div className="space-y-2 pb-6 border-b border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Module: {topicData.title}
            </span>
            <h2 className="text-3xl font-black text-slate-900">{topicData.title}</h2>
            <p className="text-slate-600 text-sm font-medium">{topicData.subtitle}</p>
          </div>

          <div className="space-y-8">
            {topicData.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 text-teal-800 flex items-center gap-2">
                  <div className="w-2 h-6 bg-teal-600 rounded-full"></div>
                  {sec.heading}
                </h3>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
                  {sec.content}
                </p>

                {sec.keyTakeaway && (
                  <div className="p-4 bg-teal-50/80 border-l-4 border-teal-600 rounded-r-xl text-xs sm:text-sm text-teal-900 font-medium">
                    <span className="font-bold block uppercase tracking-wider text-[10px] text-teal-700 mb-0.5">Key Clinical Takeaway:</span>
                    {sec.keyTakeaway}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Module Completion Toggle Footer */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Finished studying {topicData.title}?</h4>
              <p className="text-xs text-slate-500">Mark this module as completed to update your curriculum progress dashboard.</p>
            </div>
            <button
              onClick={() => onToggleModule?.(topicData.id)}
              className={`px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                isCurrentTopicCompleted
                  ? 'bg-teal-700 text-white hover:bg-teal-800'
                  : 'bg-teal-500 text-slate-950 hover:bg-teal-400'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCurrentTopicCompleted ? 'Module Completed ✓ (Click to Undo)' : 'Mark Module as Completed'}
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

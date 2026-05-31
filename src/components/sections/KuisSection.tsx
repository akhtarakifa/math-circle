// src/components/sections/KuisSection.tsx
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { quizQuestions } from '@/data/quizData';
import { QuizState } from '@/types';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

const initialState: QuizState = {
  currentQuestion: 0,
  answers: Array(quizQuestions.length).fill(null),
  submitted: Array(quizQuestions.length).fill(false),
  isFinished: false,
  score: 0,
};

export function KuisSection() {
  const [state, setState] = useState<QuizState>(initialState);
  const [shake, setShake] = useState(false);
  const [showSpark, setShowSpark] = useState(false);

  const current = quizQuestions[state.currentQuestion];
  const progress = ((state.currentQuestion) / quizQuestions.length) * 100;

  const handleAnswer = useCallback((idx: number) => {
    if (state.submitted[state.currentQuestion]) return;

    const isCorrect = idx === current.correctIndex;
    const newAnswers = [...state.answers];
    const newSubmitted = [...state.submitted];
    newAnswers[state.currentQuestion] = idx;
    newSubmitted[state.currentQuestion] = true;

    const newScore = state.score + (isCorrect ? 1 : 0);

    setState((prev) => ({ ...prev, answers: newAnswers, submitted: newSubmitted, score: newScore }));

    if (isCorrect) {
      setShowSpark(true);
      setTimeout(() => setShowSpark(false), 800);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }, [state, current]);

  const handleNext = useCallback(() => {
    if (state.currentQuestion + 1 >= quizQuestions.length) {
      setState((prev) => ({ ...prev, isFinished: true }));
    } else {
      setState((prev) => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    }
  }, [state.currentQuestion]);

  const reset = () => setState(initialState);

  const scorePercent = Math.round((state.score / quizQuestions.length) * 100);
  const getMessage = () => {
    if (scorePercent >= 90) return 'Luar biasa! Kamu sangat menguasai materi lingkaran!';
    if (scorePercent >= 70) return 'Bagus! Kamu sudah paham sebagian besar materinya.';
    if (scorePercent >= 50) return 'Cukup baik! Pelajari lagi bagian yang belum dipahami.';
    return 'Jangan menyerah! Ulangi materi dan coba lagi.';
  };

  return (
    <section id="kuis" className="section-padding bg-white">
      <div className="max-w-2xl mx-auto w-full">
        <SectionHeading sans="Kuis" serif="Interaktif" />
        <p className="text-[var(--text-secondary)] text-sm mb-8">
          Uji pemahamanmu dengan 10 soal pilihan ganda. Skor tidak tersimpan — reset otomatis saat refresh.
        </p>

        {!state.isFinished ? (
          <div>
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-mono text-[var(--text-muted)] mb-2">
                <span>Soal {state.currentQuestion + 1} / {quizQuestions.length}</span>
                <span>Skor: {state.score}</span>
              </div>
              <div className="h-1.5 bg-[var(--gray-light)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--text-primary)] rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Question card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={state.currentQuestion}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`border border-[var(--border)] rounded-2xl overflow-hidden ${shake ? 'shake' : ''}`}>
                  {/* Question */}
                  <div className="bg-[var(--text-primary)] px-7 py-6">
                    <span className="text-[10px] font-mono text-[var(--text-sidebar)] uppercase tracking-widest">
                      Soal {state.currentQuestion + 1} · {current.topic}
                    </span>
                    <p className="text-white font-sans text-base leading-relaxed mt-2">
                      {current.question}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="p-4 space-y-2.5">
                    {current.options.map((opt, idx) => {
                      const isSubmitted = state.submitted[state.currentQuestion];
                      const isSelected = state.answers[state.currentQuestion] === idx;
                      const isCorrect = idx === current.correctIndex;

                      let bgClass = 'bg-[var(--bg-primary)] border-[var(--border)] hover:border-[var(--text-muted)]';
                      let textClass = 'text-[var(--text-secondary)]';

                      if (isSubmitted) {
                        if (isCorrect) {
                          bgClass = 'bg-[var(--success-bg)] border-[var(--success)]';
                          textClass = 'text-[var(--success-text)] font-semibold';
                        } else if (isSelected) {
                          bgClass = 'bg-[var(--error-bg)] border-[var(--error)]';
                          textClass = 'text-[var(--error-text)] font-semibold';
                        }
                      }

                      const label = ['A', 'B', 'C', 'D'][idx];

                      return (
                        <motion.button
                          id={`quiz-opt-${state.currentQuestion}-${idx}`}
                          key={idx}
                          onClick={() => handleAnswer(idx)}
                          disabled={isSubmitted}
                          className={`w-full text-left flex items-start gap-3.5 px-4 py-3.5 border rounded-xl transition-all duration-200 ${bgClass} ${
                            isSubmitted ? 'cursor-default' : 'cursor-pointer'
                          }`}
                          whileHover={!isSubmitted ? { scale: 1.01 } : {}}
                          whileTap={!isSubmitted ? { scale: 0.99 } : {}}
                          role="radio"
                          aria-checked={isSelected}
                          aria-label={`Pilihan ${label}: ${opt}`}
                        >
                          <span className="shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                            {label}
                          </span>
                          <span className={`text-sm font-sans leading-relaxed ${textClass}`}>{opt}</span>
                          {isSubmitted && isCorrect && (
                            <CheckCircle size={16} className="ml-auto shrink-0 text-[var(--success)] mt-0.5" />
                          )}
                          {isSubmitted && isSelected && !isCorrect && (
                            <XCircle size={16} className="ml-auto shrink-0 text-[var(--error)] mt-0.5" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <AnimatePresence>
                    {state.submitted[state.currentQuestion] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-[var(--border)] px-6 py-4 bg-[var(--bg-secondary)]"
                      >
                        <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">Pembahasan</p>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{current.explanation}</p>
                        
                        {/* Next button */}
                        <motion.button
                          onClick={handleNext}
                          className="mt-4 w-full bg-[var(--text-primary)] text-white font-sans font-semibold py-2.5 rounded-lg hover:bg-[var(--accent-mid)] transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {state.currentQuestion + 1 >= quizQuestions.length ? 'Lihat Hasil' : 'Soal Selanjutnya'}
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Spark effect */}
                {showSpark && (
                  <motion.div
                    className="flex justify-center mt-4"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <span className="text-3xl">✨</span>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Result Screen */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-[var(--text-primary)] rounded-2xl p-8 text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
              >
                <Trophy size={48} className="text-white mx-auto mb-4" />
              </motion.div>
              <p className="text-[var(--text-muted)] text-sm font-mono uppercase tracking-widest mb-2">Hasil Akhir</p>
              <motion.p
                className="text-white font-sans font-black text-7xl mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {state.score}
              </motion.p>
              <p className="text-white/40 text-sm font-mono">dari {quizQuestions.length} soal ({scorePercent}%)</p>
              <p className="text-white/70 font-sans text-sm mt-4 leading-relaxed">{getMessage()}</p>
            </div>

            {/* Review */}
            <div className="space-y-2 mb-6">
              {quizQuestions.map((q, i) => {
                const isCorrect = state.answers[i] === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-sm ${
                      isCorrect
                        ? 'border-[var(--success)] bg-[var(--success-bg)]'
                        : 'border-[var(--error)] bg-[var(--error-bg)]'
                    }`}
                  >
                    {isCorrect
                      ? <CheckCircle size={16} className="text-[var(--success)] shrink-0" />
                      : <XCircle size={16} className="text-[var(--error)] shrink-0" />
                    }
                    <span className="font-mono text-xs text-[var(--text-muted)]">#{i + 1}</span>
                    <span className={`text-xs font-sans truncate ${isCorrect ? 'text-[var(--success-text)]' : 'text-[var(--error-text)]'}`}>
                      {q.topic}
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              id="quiz-ulangi"
              onClick={reset}
              className="w-full flex items-center justify-center gap-2.5 bg-[var(--text-primary)] text-white font-sans font-semibold py-4 rounded-xl hover:bg-[var(--accent-mid)] transition-colors"
              aria-label="Ulangi kuis dari awal"
            >
              <RotateCcw size={16} />
              Ulangi Kuis
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

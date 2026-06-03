// src/hooks/useQuizState.ts
import { useState, useCallback } from 'react';
import { QuizState } from '@/types';
import { quizQuestions } from '@/data/quizData';
import { QUIZ_SCORE_THRESHOLDS, QUIZ_MESSAGES } from '@/constants/config';

const initialState: QuizState = {
  currentQuestion: 0,
  answers: Array(quizQuestions.length).fill(null),
  submitted: Array(quizQuestions.length).fill(false),
  isFinished: false,
  score: 0,
};

/**
 * Custom hook untuk mengelola state quiz
 * Memisahkan business logic dari UI component
 */
export function useQuizState() {
  const [state, setState] = useState<QuizState>(initialState);
  const [shake, setShake] = useState(false);
  const [showSpark, setShowSpark] = useState(false);

  const current = quizQuestions[state.currentQuestion];
  const progress = ((state.currentQuestion) / quizQuestions.length) * 100;

  const handleAnswer = useCallback((idx: number) => {
    setState((prevState) => {
      if (prevState.submitted[prevState.currentQuestion]) return prevState;

      const current = quizQuestions[prevState.currentQuestion];
      const isCorrect = idx === current.correctIndex;
      const newAnswers = [...prevState.answers];
      const newSubmitted = [...prevState.submitted];
      
      newAnswers[prevState.currentQuestion] = idx;
      newSubmitted[prevState.currentQuestion] = true;

      return {
        ...prevState,
        answers: newAnswers,
        submitted: newSubmitted,
        score: prevState.score + (isCorrect ? 1 : 0),
      };
    });

    // Trigger visual feedback - use current dari parameter untuk menghindari dependency
    if (current.correctIndex === idx) {
      setShowSpark(true);
      setTimeout(() => setShowSpark(false), 800);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNext = useCallback(() => {
    setState((prevState) => {
      if (prevState.currentQuestion + 1 >= quizQuestions.length) {
        return { ...prevState, isFinished: true };
      }
      return { ...prevState, currentQuestion: prevState.currentQuestion + 1 };
    });
  }, []);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  const scorePercent = Math.round((state.score / quizQuestions.length) * 100);

  const getMessage = useCallback(() => {
    if (scorePercent >= QUIZ_SCORE_THRESHOLDS.EXCELLENT) return QUIZ_MESSAGES.EXCELLENT;
    if (scorePercent >= QUIZ_SCORE_THRESHOLDS.GOOD) return QUIZ_MESSAGES.GOOD;
    if (scorePercent >= QUIZ_SCORE_THRESHOLDS.FAIR) return QUIZ_MESSAGES.FAIR;
    return QUIZ_MESSAGES.POOR;
  }, [scorePercent]);

  return {
    state,
    current,
    progress,
    shake,
    showSpark,
    handleAnswer,
    handleNext,
    reset,
    scorePercent,
    getMessage,
  };
}

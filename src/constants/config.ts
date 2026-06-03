// src/constants/config.ts

/**
 * Konfigurasi global untuk animasi, performa, dan UI
 */

// Loading & Animations
export const LOADING_DURATION_MS = 1500; // Loading screen duration
export const ANIMATION_DURATION = 0.6;
export const EASING_CURVE = [0.22, 1, 0.36, 1]; // Custom bezier easing

// Quiz Scoring Thresholds
export const QUIZ_SCORE_THRESHOLDS = {
  EXCELLENT: 90,
  GOOD: 70,
  FAIR: 50,
} as const;

export const QUIZ_MESSAGES = {
  EXCELLENT: 'Luar biasa! Kamu sangat menguasai materi lingkaran!',
  GOOD: 'Bagus! Kamu sudah paham sebagian besar materinya.',
  FAIR: 'Cukup baik! Pelajari lagi bagian yang belum dipahami.',
  POOR: 'Jangan menyerah! Ulangi materi dan coba lagi.',
} as const;

// IntersectionObserver Settings
export const INTERSECTION_OPTIONS = {
  threshold: [0, 0.25, 0.5, 0.75, 1],
  rootMargin: '-5% 0px -70% 0px',
} as const;

// Animation Delays
export const ANIMATION_DELAYS = {
  STAGGER_STEP: 0.05,
  SECTION_DELAY: 0.1,
} as const;

// Scroll Behavior
export const SCROLL_BEHAVIOR = 'smooth' as const;
export const SCROLL_BLOCK = 'start' as const;

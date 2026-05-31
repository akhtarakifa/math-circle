// src/components/layout/LoadingScreen.tsx
import { motion } from 'framer-motion';

export function LoadingScreen() {
  const letters = 'MathCircle'.split('');

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated circle SVG */}
      <div className="relative flex items-center justify-center mb-10">
        {/* Outer pulse ring */}
        <motion.div
          className="absolute w-36 h-36 rounded-full border border-white/10"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-label="MathCircle logo">
          {/* Draw circle animation */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="251.2"
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Center dot */}
          <motion.circle
            cx="50"
            cy="50"
            r="3"
            fill="white"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />
          {/* Radius line */}
          <motion.line
            x1="50"
            y1="50"
            x2="50"
            y2="10"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          />
        </svg>
      </div>

      {/* Title split animation */}
      <div className="flex gap-0.5 overflow-hidden" aria-label="MathCircle">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            className="text-white font-sans font-bold text-2xl tracking-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6 + i * 0.05,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        className="mt-3 text-[var(--text-muted)] text-sm font-sans tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        Matematika Lingkaran
      </motion.p>
    </motion.div>
  );
}

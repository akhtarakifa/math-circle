// src/components/layout/ProgressBar.tsx
import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-50">
      <motion.div
        className="h-full bg-[var(--text-secondary)] origin-left"
        style={{ scaleX: progress / 100 }}
        transition={{ duration: 0 }}
      />
    </div>
  );
}

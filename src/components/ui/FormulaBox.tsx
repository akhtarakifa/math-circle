// src/components/ui/FormulaBox.tsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { renderBlock, renderInline } from '@/lib/katex';

interface FormulaBoxProps {
  formula: string;
  label?: string;
  display?: boolean;
}

export function FormulaBox({ formula, label, display = true }: FormulaBoxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = display ? renderBlock(formula) : renderInline(formula);
    }
  }, [formula, display]);

  return (
    <motion.div
      className="formula-box my-4"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {label && (
        <p className="text-xs font-mono text-[var(--text-muted)] mb-3 uppercase tracking-widest">
          {label}
        </p>
      )}
      <div ref={ref} className="text-white" />
    </motion.div>
  );
}

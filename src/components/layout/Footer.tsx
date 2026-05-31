// src/components/layout/Footer.tsx
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-[var(--text-primary)] py-12 px-8">
      <div className="max-w-3xl mx-auto">
        {/* Top row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-label="MathCircle logo">
              <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="1.5" />
              <circle cx="14" cy="14" r="2" fill="white" />
              <line x1="14" y1="14" x2="14" y2="3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div>
              <p className="text-white font-sans font-bold text-base tracking-tight">MathCircle</p>
              <p className="text-[var(--text-secondary)] text-[10px] font-mono uppercase tracking-widest">Matematika Lingkaran</p>
            </div>
          </div>

          {/* Info */}
          <div className="text-right">
            <p className="text-[var(--text-sidebar)] font-sans text-sm font-medium">Akhtar</p>
            <p className="text-[var(--text-secondary)] text-xs font-mono mt-0.5">XI SIJA 1 · SMK Negeri 7 Semarang</p>
            <p className="text-[var(--text-secondary)] text-xs font-mono">Matematika · Tahun Ajaran 2024/2025</p>
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-[var(--text-secondary)] text-xs font-mono">
            MathCircle © 2025 — Akhtar, XI SIJA 1
          </p>
        </motion.div>

        {/* Decorative circles */}
        <div className="flex justify-center mt-8 gap-2 opacity-10" aria-hidden="true">
          {[16, 12, 8, 5].map((size) => (
            <div
              key={size}
              className="rounded-full border border-white"
              style={{ width: size, height: size }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

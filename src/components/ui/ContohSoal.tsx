// src/components/ui/ContohSoal.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ContohSoalProps {
  nomor?: number;
  soal: string;
  penyelesaian: string[];
  jawaban: string;
  variant?: 'default' | 'primary';
}

export function ContohSoal({ nomor = 1, soal, penyelesaian, jawaban, variant = 'default' }: ContohSoalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const headerBg = variant === 'primary' ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-secondary)]';
  const toggleBg = variant === 'primary' ? 'bg-[var(--bg-secondary)]' : 'bg-[var(--bg-primary)]';
  const toggleHoverBg = variant === 'primary' ? 'hover:bg-[var(--hover-bg)]' : 'hover:bg-[var(--bg-secondary)]';
  const contentBg = variant === 'primary' ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-secondary)]';

  return (
    <motion.div
      className="border border-[var(--border)] rounded-xl overflow-hidden mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className={`${headerBg} px-6 py-4`}>
        <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
          Contoh Soal {nomor}
        </span>
        <p className="mt-2 font-sans text-[var(--text-primary)] font-medium leading-relaxed">{soal}</p>
      </div>

      {/* Toggle button */}
      <button
        id={`contoh-soal-toggle-${nomor}`}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-6 py-3 ${toggleBg} ${toggleHoverBg} transition-colors border-t border-[var(--border)] cursor-pointer`}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Sembunyikan' : 'Lihat'} penyelesaian soal ${nomor}`}
      >
        <span className="text-sm font-sans font-medium text-[var(--text-secondary)]">
          {isOpen ? 'Sembunyikan' : 'Lihat'} Penyelesaian
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={16} className="text-[var(--text-muted)]" />
        </motion.div>
      </button>

      {/* Penyelesaian */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={`px-6 py-5 border-t border-[var(--border)] ${contentBg}`}>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Penyelesaian:
              </p>
              <div className="space-y-2">
                {penyelesaian.map((step, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-[var(--text-muted)] font-mono text-sm mt-0.5 shrink-0">
                      {i + 1}.
                    </span>
                    <p className="text-[var(--text-secondary)] font-sans text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center gap-3">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  Jawaban:
                </span>
                <span className="font-sans font-bold text-[var(--text-primary)] bg-[var(--text-primary)] text-white px-3 py-1 rounded-full text-sm">
                  {jawaban}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

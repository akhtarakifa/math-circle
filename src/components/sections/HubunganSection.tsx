// src/components/sections/HubunganSection.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MathTable } from '@/components/ui/MathTable';
import { AnimatedContent } from '@/components/animations/AnimatedContent';

type Hubungan = 'konsentris' | 'dalam' | 'singdalam' | 'berpotongan' | 'singluar' | 'lepas';

const hubunganData: { id: Hubungan; label: string; syarat: string; desc: string; d: number }[] = [
  { id: 'konsentris', label: 'Konsentris', syarat: 'd = 0', desc: 'Pusat sama, jari-jari beda', d: 0 },
  { id: 'dalam', label: 'Satu di Dalam', syarat: 'd < R − r', desc: 'Tidak bersentuhan', d: 15 },
  { id: 'singdalam', label: 'Sing. Dalam', syarat: 'd = R − r', desc: 'Menyentuh 1 titik dari dalam', d: 30 },
  { id: 'berpotongan', label: 'Berpotongan', syarat: 'R−r < d < R+r', desc: 'Memotong di 2 titik', d: 70 },
  { id: 'singluar', label: 'Sing. Luar', syarat: 'd = R + r', desc: 'Menyentuh 1 titik dari luar', d: 90 },
  { id: 'lepas', label: 'Saling Lepas', syarat: 'd > R + r', desc: 'Tidak berpotongan', d: 110 },
];

export function HubunganSection() {
  const [active, setActive] = useState<Hubungan>('konsentris');
  const current = hubunganData.find((h) => h.id === active)!;

  const R = 60, r = 30;
  const cx1 = 100, cy = 100;

  return (
    <section id="hubungan" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Hubungan" serif="Dua Lingkaran" />

        <AnimatedContent delay={0.1}>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            Dua lingkaran dengan pusat O₁ dan O₂, jari-jari R (besar) dan r (kecil), jarak antar pusat d.
          </p>
        </AnimatedContent>

        {/* Interactive visualizer */}
        <AnimatedContent delay={0.15}>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-6 mb-8">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto">
              {hubunganData.map((h) => (
                <button
                  id={`hubungan-${h.id}`}
                  key={h.id}
                  onClick={() => setActive(h.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                    active === h.id
                      ? 'bg-[var(--text-primary)] text-white border-[var(--text-primary)]'
                      : 'bg-white text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--text-muted)]'
                  }`}
                  aria-pressed={active === h.id}
                >
                  {h.label}
                </button>
              ))}
            </div>

            {/* SVG display */}
            <div className="flex justify-center mb-4">
              <svg
                width="320"
                height="200"
                viewBox="0 0 320 200"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                className="max-w-full"
                aria-label={`Visualisasi hubungan dua lingkaran: ${current.label}`}
              >
                {/* Circle 1 — fixed */}
                <circle cx={cx1} cy={cy} r={R} stroke="var(--text-primary)" strokeWidth="1.5" fill="var(--text-primary)" fillOpacity="0.05" />
                <circle cx={cx1} cy={cy} r="3" fill="var(--text-primary)" />
                <text x={cx1 - 6} y={cy - 8} fill="var(--text-primary)" fontSize="11" fontFamily="DM Mono,monospace">O₁</text>
                <text x={cx1 - 34} y={cy + 4} fill="var(--text-muted)" fontSize="10" fontFamily="DM Mono,monospace">R={R}</text>

                {/* Circle 2 — animated via translateX on <g> */}
                <motion.g
                  animate={{ x: current.d }}
                  transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                >
                  <circle cx={cx1} cy={cy} r={r} stroke="var(--text-secondary)" strokeWidth="1.5" fill="var(--text-secondary)" fillOpacity="0.08" />
                  <circle cx={cx1} cy={cy} r="3" fill="var(--text-secondary)" />
                  <text x={cx1 - 6} y={cy - 8} fill="var(--text-secondary)" fontSize="11" fontFamily="DM Mono,monospace">O₂</text>
                </motion.g>
              </svg>
            </div>

            {/* Info */}
            <div className="text-center">
              <span className="font-mono text-sm text-[var(--text-primary)] font-semibold">{current.syarat}</span>
              <p className="text-[var(--text-secondary)] text-sm mt-1">{current.desc}</p>
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent delay={0.2}>
          <MathTable
            headers={['Hubungan', 'Syarat', 'Keterangan']}
            rows={hubunganData.map((h) => ({
              col1: h.label,
              col2: h.syarat,
              col3: h.desc,
            }))}
          />
        </AnimatedContent>
      </div>
    </section>
  );
}

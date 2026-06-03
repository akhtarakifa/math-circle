// src/components/sections/UnsurSection.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { InfoCard } from '@/components/ui/InfoCard';
import { unsurData } from '@/data/unsurData';

type UnsurId = typeof unsurData[number]['id'];

export function UnsurSection() {
  const [activeUnsur, setActiveUnsur] = useState<UnsurId | null>(null);

  const getColor = (id: UnsurId) =>
    activeUnsur === id ? 'var(--text-primary)' : 'var(--text-sidebar)';

  const getStrokeWidth = (id: UnsurId) =>
    activeUnsur === id ? 2.5 : 1.5;

  const getOpacity = (id: UnsurId) =>
    activeUnsur === null || activeUnsur === id ? 1 : 0.25;

  return (
    <section id="unsur" className="section-padding section-alt">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Unsur-Unsur" serif="Lingkaran" />

        {/* Tab untuk mobile dan desktop */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="flex justify-center mb-6"
        >
          <div className="flex flex-wrap gap-2 p-1 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] overflow-x-auto justify-center">
            {unsurData.map((unsur) => (
              <button
                key={unsur.id}
                onClick={() => setActiveUnsur(unsur.id)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeUnsur === unsur.id
                    ? 'text-white'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                aria-pressed={activeUnsur === unsur.id}
              >
                {activeUnsur === unsur.id && (
                  <motion.span
                    layoutId="unsur-tab-active"
                    className="absolute inset-0 bg-[var(--text-primary)] rounded-lg"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{unsur.nama}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Interactive SVG Diagram */}
          <div className="flex justify-center">
            <svg
              width="280" height="280"
              viewBox="0 0 280 280"
              fill="none"
              className="w-full max-w-[280px]"
              aria-label="Diagram interaktif unsur-unsur lingkaran"
            >
              {/* Juring / Sector (shaded) */}
              <motion.path
                d="M 140 140 L 140 30 A 110 110 0 0 1 230.5 80 Z"
                fill={activeUnsur === 'juring' ? 'var(--text-primary)' : 'var(--border)'}
                data-unsur="juring"
                animate={{ opacity: getOpacity('juring'), fill: activeUnsur === 'juring' ? 'var(--accent-mid)' : 'var(--border)' }}
                transition={{ duration: 0.25 }}
              />

              {/* Tembereng / Segment */}
              <motion.path
                d="M 48 200 A 110 110 0 0 0 140 250 K 50 170 Z"
                fill={activeUnsur === 'tembereng' ? 'var(--text-secondary)' : 'var(--gray-light)'}
                data-unsur="tembereng"
                animate={{ opacity: getOpacity('tembereng') }}
                transition={{ duration: 0.25 }}
              />

              {/* Main circle */}
              <motion.circle
                cx="140" cy="140" r="110"
                stroke={getColor('busur')}
                strokeWidth={getStrokeWidth('busur')}
                fill="none"
                data-unsur="busur"
                animate={{ stroke: getColor('busur'), opacity: 1 }}
                transition={{ duration: 0.25 }}
              />

              {/* Tali busur */}
              <motion.line
                x1="34.2" y1="170" x2="245.8" y2="170"
                stroke={getColor('talibusur')}
                strokeWidth={getStrokeWidth('talibusur')}
                data-unsur="talibusur"
                animate={{ stroke: getColor('talibusur'), opacity: getOpacity('talibusur') }}
                transition={{ duration: 0.25 }}
              />

              {/* Apotema */}
              <motion.line
                x1="140" y1="140" x2="140" y2="170"
                stroke={getColor('apotema')}
                strokeWidth={getStrokeWidth('apotema')}
                strokeDasharray="4 3"
                data-unsur="apotema"
                animate={{ stroke: getColor('apotema'), opacity: getOpacity('apotema') }}
                transition={{ duration: 0.25 }}
              />
              {/* Apotema right angle marker */}
              {activeUnsur === 'apotema' && (
                <rect x="140" y="161" width="9" height="9" fill="none" stroke="var(--text-primary)" strokeWidth="1.2" />
              )}

              {/* Diameter */}
              <motion.line
                x1="30" y1="140" x2="250" y2="140"
                stroke={getColor('diameter')}
                strokeWidth={getStrokeWidth('diameter')}
                data-unsur="diameter"
                animate={{ stroke: getColor('diameter'), opacity: getOpacity('diameter') }}
                transition={{ duration: 0.25 }}
              />

              {/* Radius line */}
              <motion.line
                x1="140" y1="140" x2="140" y2="30"
                stroke={getColor('jarijari')}
                strokeWidth={getStrokeWidth('jarijari')}
                data-unsur="jarijari"
                animate={{ stroke: getColor('jarijari'), opacity: getOpacity('jarijari') }}
                transition={{ duration: 0.25 }}
              />

              {/* Center dot */}
              <motion.circle
                cx="140" cy="140"
                fill={getColor('pusat')}
                data-unsur="pusat"
                animate={{ fill: getColor('pusat'), opacity: getOpacity('pusat'), r: activeUnsur === 'pusat' ? 6 : 4 }}
                transition={{ duration: 0.25 }}
              />

              {/* Labels */}
              <text x="143" y="137" fill="var(--text-secondary)" fontSize="11" fontFamily="DM Mono,monospace">O</text>
              <text x="143" y="88" fill="var(--text-secondary)" fontSize="11" fontFamily="DM Mono,monospace">r</text>
              <text x="185" y="136" fill="var(--text-secondary)" fontSize="11" fontFamily="DM Mono,monospace">d</text>
              <text x="100" y="165" fill="var(--text-secondary)" fontSize="10" fontFamily="DM Mono,monospace">a</text>
            </svg>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {unsurData.map((unsur, i) => (
              <InfoCard
                key={unsur.id}
                delay={i * 0.07}
                className="border-[var(--border)]"
              >
                <div className="pointer-events-none">
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-sans font-semibold text-sm text-[var(--text-primary)]">
                      {unsur.nama}
                    </span>
                    <span className="font-mono text-[var(--text-muted)] text-sm">{unsur.simbol}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{unsur.deskripsi}</p>
                </div>
              </InfoCard>
            ))}
          </div>
        </div>

        <p className="text-center text-[var(--text-muted)] text-xs font-mono mt-6 uppercase tracking-widest">
          ↑ Pilih unsur di tab atas untuk highlight diagram
        </p>
      </div>
    </section>
  );
}

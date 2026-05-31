// src/components/sections/UnsurSection.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { InfoCard } from '@/components/ui/InfoCard';
import { unsurData } from '@/data/unsurData';

export function UnsurSection() {
  const [activeUnsur, setActiveUnsur] = useState<string | null>(null);

  const getColor = (id: string) =>
    activeUnsur === id ? 'var(--text-primary)' : 'var(--text-sidebar)';

  const getStrokeWidth = (id: string) =>
    activeUnsur === id ? 2.5 : 1.5;

  const getOpacity = (id: string) =>
    activeUnsur === null || activeUnsur === id ? 1 : 0.25;

  return (
    <section id="unsur" className="section-padding section-alt">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Unsur-Unsur" serif="Lingkaran" />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Interactive SVG Diagram */}
          <div className="flex justify-center sticky top-24">
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
                d="M 50 170 A 110 110 0 0 0 140 250 L 50 170 Z"
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
                x1="50" y1="170" x2="230" y2="170"
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
              <text x="143" y="137" fill="var(--text-secondary)" fontSize="11" fontFamily="Fira Mono,monospace">O</text>
              <text x="143" y="88" fill="var(--text-secondary)" fontSize="11" fontFamily="Fira Mono,monospace">r</text>
              <text x="185" y="136" fill="var(--text-secondary)" fontSize="11" fontFamily="Fira Mono,monospace">d</text>
              <text x="100" y="165" fill="var(--text-secondary)" fontSize="10" fontFamily="Fira Mono,monospace">a</text>
            </svg>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {unsurData.map((unsur, i) => (
              <InfoCard
                key={unsur.id}
                delay={i * 0.07}
                className={`cursor-pointer transition-all duration-200 ${
                  activeUnsur === unsur.id
                    ? 'border-[var(--text-primary)] shadow-md'
                    : 'hover:border-[var(--text-muted)]'
                }`}
              >
                <div
                  onMouseEnter={() => setActiveUnsur(unsur.id)}
                  onMouseLeave={() => setActiveUnsur(null)}
                  onFocus={() => setActiveUnsur(unsur.id)}
                  onBlur={() => setActiveUnsur(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Highlight ${unsur.nama} pada diagram`}
                >
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
          ↑ Arahkan kursor ke kartu untuk highlight diagram
        </p>
      </div>
    </section>
  );
}

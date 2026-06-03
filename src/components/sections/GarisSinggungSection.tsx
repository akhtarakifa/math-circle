// src/components/sections/GarisSinggungSection.tsx
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormulaBox } from '@/components/ui/FormulaBox';
import { ContohSoal } from '@/components/ui/ContohSoal';
import { AnimatedContent } from '@/components/animations/AnimatedContent';

export function GarisSinggungSection() {
  return (
    <section id="singgung" className="section-padding section-alt">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Garis" serif="Singgung Lingkaran" />

        <div className="grid md:grid-cols-2 gap-10 items-start mb-8">
          {/* Animated SVG */}
          <AnimatedContent delay={0.1} className="flex justify-center">
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" aria-label="Diagram garis singgung lingkaran">
              {/* Circle */}
              <circle cx="100" cy="120" r="70" stroke="var(--border)" strokeWidth="1.5" fill="none" />
              <circle cx="100" cy="120" r="2.5" fill="var(--text-primary)" />

              {/* Point P outside */}
              <circle cx="200" cy="120" r="3" fill="var(--text-secondary)" />
              <text x="206" y="124" fill="var(--text-secondary)" fontSize="11" fontFamily="DM Mono,monospace">P</text>

              {/* Tangent lines drawn with animation */}
              <motion.line
                x1="200" y1="120" x2="65" y2="54"
                stroke="var(--text-primary)" strokeWidth="1.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              />
              <motion.line
                x1="200" y1="120" x2="65" y2="186"
                stroke="var(--text-primary)" strokeWidth="1.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />

              {/* Radius to tangent points */}
              <motion.line
                x1="100" y1="120" x2="65" y2="54"
                stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="3 2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              />
              <motion.line
                x1="100" y1="120" x2="65" y2="186"
                stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="3 2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              />

              {/* OP line */}
              <motion.line
                x1="100" y1="120" x2="200" y2="120"
                stroke="var(--border)" strokeWidth="1"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />

              {/* Labels */}
              <text x="88" y="117" fill="var(--text-primary)" fontSize="11" fontFamily="DM Mono,monospace">O</text>
              <text x="60" y="48" fill="var(--text-secondary)" fontSize="11" fontFamily="DM Mono,monospace">T₁</text>
              <text x="60" y="198" fill="var(--text-secondary)" fontSize="11" fontFamily="DM Mono,monospace">T₂</text>
              <text x="140" y="115" fill="var(--text-muted)" fontSize="10" fontFamily="DM Mono,monospace">OP</text>

              {/* Equal length indicator */}
              <motion.path
                d="M 130 80 Q 175 90 195 115"
                stroke="var(--text-primary)" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
              <text x="165" y="80" fill="var(--text-primary)" fontSize="10" fontFamily="DM Mono,monospace">PT₁=PT₂</text>
            </svg>
          </AnimatedContent>

          {/* Formulas */}
          <div className="space-y-4">
            <AnimatedContent delay={0.1}>
              <div>
                <h3 className="font-sans font-semibold text-[var(--text-primary)] mb-1">Dari Titik di Luar Lingkaran</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-3 leading-relaxed">
                  Dari titik P di luar (pusat O, jari-jari r), panjang garis singgung ke titik singgung:
                </p>
                <FormulaBox label="Garis Singgung dari Luar" formula="l = \sqrt{OP^2 - r^2}" />
                <p className="text-[var(--text-secondary)] text-xs mt-2">
                  Dua garis singgung dari satu titik luar ke lingkaran <strong>sama panjangnya</strong>.
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent delay={0.2}>
              <div>
                <h3 className="font-sans font-semibold text-[var(--text-primary)] mb-1">GSPL (Persekutuan Luar)</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-2 leading-relaxed">
                  Menyinggung kedua lingkaran dari sisi yang sama.
                </p>
                <FormulaBox label="GSPL" formula="l_{luar} = \sqrt{d^2 - (R-r)^2}" />
              </div>
            </AnimatedContent>

            <AnimatedContent delay={0.3}>
              <div>
                <h3 className="font-sans font-semibold text-[var(--text-primary)] mb-1">GSPD (Persekutuan Dalam)</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-2 leading-relaxed">
                  Melewati daerah antara dua lingkaran. Syarat: d &gt; R + r.
                </p>
                <FormulaBox label="GSPD" formula="l_{dalam} = \sqrt{d^2 - (R+r)^2}" />
              </div>
            </AnimatedContent>
          </div>
        </div>

        <ContohSoal variant="primary" nomor={1}
          soal="Dua lingkaran dengan R = 8 cm dan r = 3 cm. Jarak antar pusat = 13 cm. Tentukan panjang GSPL dan GSPD!"
          penyelesaian={[
            'GSPL = √(d² − (R−r)²) = √(13² − (8−3)²)',
            '= √(169 − 25) = √144 = 12 cm',
            'Cek syarat GSPD: d=13 > R+r=11 ✓',
            'GSPD = √(d² − (R+r)²) = √(13² − (8+3)²)',
            '= √(169 − 121) = √48 = 4√3 ≈ 6,93 cm',
          ]}
          jawaban="GSPL = 12 cm, GSPD = 4√3 cm"
        />
      </div>
    </section>
  );
}

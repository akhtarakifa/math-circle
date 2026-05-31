// src/components/sections/SudutSection.tsx
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormulaBox } from '@/components/ui/FormulaBox';
import { MathTable } from '@/components/ui/MathTable';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { ContohSoal } from '@/components/ui/ContohSoal';

export function SudutSection() {
  // SVG for angle demo
  const cx = 100, cy = 110, r = 80;

  return (
    <section id="sudut" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Sudut Pusat &" serif="Sudut Keliling" />

        <div className="grid md:grid-cols-2 gap-10 items-start mb-8">
          {/* SVG Illustration */}
          <AnimatedContent delay={0.1} className="flex justify-center">
            <svg width="200" height="220" viewBox="0 0 200 220" fill="none" aria-label="Perbandingan sudut pusat dan sudut keliling">
              {/* Circle */}
              <circle cx={cx} cy={cy} r={r} stroke="var(--border)" strokeWidth="1.5" fill="none" />

              {/* Points on circle */}
              {/* A at 200°, B at 340° (from center) */}
              {(() => {
                const ax = cx + r * Math.cos((200 * Math.PI) / 180);
                const ay = cy + r * Math.sin((200 * Math.PI) / 180);
                const bx = cx + r * Math.cos((340 * Math.PI) / 180);
                const by = cy + r * Math.sin((340 * Math.PI) / 180);
                // C on circle at top
                const ccx = cx + r * Math.cos((-90 * Math.PI) / 180);
                const ccy = cy + r * Math.sin((-90 * Math.PI) / 180);

                return (
                  <>
                    {/* Sudut pusat lines */}
                    <motion.line x1={cx} y1={cy} x2={ax} y2={ay} stroke="var(--text-primary)" strokeWidth="1.5"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }} />
                    <motion.line x1={cx} y1={cy} x2={bx} y2={by} stroke="var(--text-primary)" strokeWidth="1.5"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }} />

                    {/* Sudut keliling lines */}
                    <motion.line x1={ccx} y1={ccy} x2={ax} y2={ay} stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4 3"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }} />
                    <motion.line x1={ccx} y1={ccy} x2={bx} y2={by} stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4 3"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.9 }} />

                    {/* Points */}
                    <circle cx={cx} cy={cy} r="3.5" fill="var(--text-primary)" />
                    <circle cx={ax} cy={ay} r="3" fill="var(--text-primary)" />
                    <circle cx={bx} cy={by} r="3" fill="var(--text-primary)" />
                    <circle cx={ccx} cy={ccy} r="3" fill="var(--text-secondary)" />

                    {/* Labels */}
                    <text x={cx - 12} y={cy + 4} fill="var(--text-primary)" fontSize="12" fontFamily="Fira Mono,monospace">O</text>
                    <text x={ax - 16} y={ay + 5} fill="var(--text-primary)" fontSize="11" fontFamily="Fira Mono,monospace">A</text>
                    <text x={bx + 4} y={by + 5} fill="var(--text-primary)" fontSize="11" fontFamily="Fira Mono,monospace">B</text>
                    <text x={ccx - 5} y={ccy - 8} fill="var(--text-secondary)" fontSize="11" fontFamily="Fira Mono,monospace">C</text>

                    {/* Legend */}
                    <line x1="10" y1="200" x2="30" y2="200" stroke="var(--text-primary)" strokeWidth="1.5" />
                    <text x="34" y="204" fill="var(--text-primary)" fontSize="10" fontFamily="DM Sans,sans-serif">∠AOB (pusat)</text>
                    <line x1="10" y1="214" x2="30" y2="214" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="4 3" />
                    <text x="34" y="218" fill="var(--text-secondary)" fontSize="10" fontFamily="DM Sans,sans-serif">∠ACB (keliling)</text>
                  </>
                );
              })()}
            </svg>
          </AnimatedContent>

          {/* Content */}
          <div className="space-y-5">
            <AnimatedContent delay={0.15}>
              <div className="p-4 border border-[var(--border)] rounded-xl">
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">Sudut Pusat</p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Sudut yang titik sudutnya berada di <span className="font-semibold text-[var(--text-primary)]">titik pusat</span> lingkaran,
                  dibentuk oleh dua jari-jari. Besar sudut pusat = besar busur yang dihadapinya.
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent delay={0.2}>
              <div className="p-4 border border-[var(--border)] rounded-xl">
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">Sudut Keliling</p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Sudut yang titik sudutnya berada <span className="font-semibold text-[var(--text-primary)]">pada lingkaran</span> dan
                  kaki-kaki sudutnya adalah tali busur.
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent delay={0.25}>
              <FormulaBox label="Hubungan Sudut Pusat & Keliling" formula="\angle \text{Pusat} = 2 \times \angle \text{Keliling}" />
            </AnimatedContent>
          </div>
        </div>

        <AnimatedContent delay={0.2}>
          <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-4">Sifat-Sifat Sudut Keliling</h3>
          <MathTable
            headers={['No', 'Sifat']}
            rows={[
              { col1: '1', col2: 'Sudut keliling yang menghadap busur yang sama besarnya sama' },
              { col1: '2', col2: 'Sudut keliling yang menghadap diameter = 90° (Teorema Thales)' },
              { col1: '3', col2: 'Sudut keliling berhadapan pada segiempat siklik = 180° (saling suplemen)' },
            ]}
          />
        </AnimatedContent>

        <AnimatedContent delay={0.25}>
          <div className="mt-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4">
            <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">Teorema Thales</p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Jika AB adalah diameter dan C adalah titik mana pun pada lingkaran (C ≠ A, B),
              maka <span className="font-semibold text-[var(--text-primary)]">∠ACB = 90°</span>.
            </p>
          </div>
        </AnimatedContent>

        <div className="mt-6">
          <ContohSoal
            nomor={1}
            soal="Sudut pusat ∠AOB = 80°. Titik C berada pada lingkaran menghadap busur AB. Berapakah ∠ACB?"
            penyelesaian={[
              '∠ACB = ½ × ∠AOB',
              '∠ACB = ½ × 80°',
              '∠ACB = 40°',
            ]}
            jawaban="∠ACB = 40°"
          />
        </div>
      </div>
    </section>
  );
}

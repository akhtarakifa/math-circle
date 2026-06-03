// src/components/sections/BusurJuringSection.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormulaBox } from '@/components/ui/FormulaBox';
import { ContohSoal } from '@/components/ui/ContohSoal';
import { AnimatedContent } from '@/components/animations/AnimatedContent';

type Tab = 'busur' | 'juring' | 'talibusur' | 'apotema' | 'tembereng';

const tabs: { id: Tab; label: string }[] = [
  { id: 'busur', label: 'Busur' },
  { id: 'juring', label: 'Juring' },
  { id: 'talibusur', label: 'Tali Busur' },
  { id: 'apotema', label: 'Apotema' },
  { id: 'tembereng', label: 'Tembereng' },
];

export function BusurJuringSection() {
  const [activeTab, setActiveTab] = useState<Tab>('busur');
  const [angle, setAngle] = useState(90);

  // Convert angle to SVG arc path
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const cx = 110, cy = 110, r = 90;
  const startAngle = -90;
  const endAngle = startAngle + angle;
  const x1 = cx + r * Math.cos(toRad(startAngle));
  const y1 = cy + r * Math.sin(toRad(startAngle));
  const x2 = cx + r * Math.cos(toRad(endAngle));
  const y2 = cy + r * Math.sin(toRad(endAngle));
  const largeArc = angle > 180 ? 1 : 0;

  return (
    <section id="busur-juring" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Busur, Juring" serif="& Tembereng" />

        {/* Tab switcher */}
        <AnimatedContent delay={0.1}>
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2 p-1 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] overflow-x-auto justify-center md:justify-start">
              {tabs.map((tab) => (
                <button
                  id={`tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-sans font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.id ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  aria-pressed={activeTab === tab.id}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="tab-active"
                      className="absolute inset-0 bg-[var(--text-primary)] rounded-lg"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* SVG Visual */}
          <AnimatedContent delay={0.15} className="flex justify-center">
            <div>
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none" aria-label="Visualisasi interaktif busur dan juring">
                {/* Full circle */}
                <circle cx={cx} cy={cy} r={r} stroke="var(--border)" strokeWidth="1.5" fill="none" />

                {/* Juring (sector) fill */}
                {(activeTab === 'juring' || activeTab === 'tembereng') && (
                  <motion.path
                    d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`}
                    fill={activeTab === 'tembereng' ? 'var(--border)' : 'var(--text-primary)'}
                    fillOpacity={activeTab === 'juring' ? 0.15 : 0.08}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Tali busur line */}
                {(activeTab === 'talibusur' || activeTab === 'apotema' || activeTab === 'tembereng') && (
                  <motion.line
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="var(--text-primary)" strokeWidth="2"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}

                {/* Apotema */}
                {activeTab === 'apotema' && (
                  <>
                    <motion.line
                      x1={cx} y1={cy}
                      x2={(x1 + x2) / 2} y2={(y1 + y2) / 2}
                      stroke="var(--text-primary)" strokeWidth="1.5" strokeDasharray="4 3"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    />
                    <circle cx={(x1 + x2) / 2} cy={(y1 + y2) / 2} r="3" fill="var(--text-primary)" />
                  </>
                )}

                {/* Arc highlight */}
                {activeTab === 'busur' && (
                  <motion.path
                    d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
                    stroke="var(--text-primary)" strokeWidth="3" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}

                {/* Radius lines for juring */}
                {(activeTab === 'juring' || activeTab === 'busur') && (
                  <>
                    <line x1={cx} y1={cy} x2={x1} y2={y1} stroke="var(--text-secondary)" strokeWidth="1.5" />
                    <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="var(--text-secondary)" strokeWidth="1.5" />
                  </>
                )}

                {/* Center point */}
                <circle cx={cx} cy={cy} r="3" fill="var(--text-primary)" />

                {/* Angle label */}
                <text x={cx + 15} y={cy - 10} fill="var(--text-secondary)" fontSize="11" fontFamily="DM Mono,monospace">
                  α = {angle}°
                </text>
              </svg>

              {/* Angle slider */}
              <div className="mt-4">
                <label htmlFor="angle-slider" className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest block mb-2 text-center">
                  Sudut Pusat α
                </label>
                <input
                  id="angle-slider"
                  type="range"
                  min={20}
                  max={340}
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="w-full accent-[var(--text-primary)] cursor-pointer"
                  aria-label="Atur besar sudut pusat"
                />
                <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)] mt-1">
                  <span>20°</span><span>340°</span>
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* Content per tab */}
          <div>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'busur' && (
                <>
                  <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-3">Panjang Busur</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    Busur adalah bagian dari keliling lingkaran. Panjangnya sebanding dengan besar sudut pusatnya.
                  </p>
                  <FormulaBox label="Rumus Panjang Busur" formula="\text{Busur} = \frac{\alpha}{360°} \times 2\pi r" />
                  <ContohSoal
                    nomor={1}
                    soal="r = 14 cm, α = 60°, π = 22/7. Hitung panjang busur!"
                    penyelesaian={[
                      'Busur = (60/360) × 2 × (22/7) × 14',
                      '= (1/6) × 88 = 88/6',
                      '≈ 14,67 cm',
                    ]}
                    jawaban="≈ 14,67 cm"
                  />
                </>
              )}
              {activeTab === 'juring' && (
                <>
                  <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-3">Luas Juring</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    Juring adalah daerah yang dibatasi dua jari-jari dan busurnya, seperti potongan pizza.
                  </p>
                  <FormulaBox label="Rumus Luas Juring" formula="L_{juring} = \frac{\alpha}{360°} \times \pi r^2" />
                  <ContohSoal
                    nomor={1}
                    soal="r = 21 cm, α = 90°, π = 22/7. Hitung luas juring!"
                    penyelesaian={[
                      'L = (90/360) × (22/7) × 21²',
                      '= (1/4) × (22/7) × 441',
                      '= (1/4) × 1.386 = 346,5 cm²',
                    ]}
                    jawaban="346,5 cm²"
                  />
                </>
              )}
              {activeTab === 'talibusur' && (
                <>
                  <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-3">Panjang Tali Busur</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    Tali busur adalah ruas garis yang menghubungkan dua titik pada lingkaran.
                  </p>
                  <FormulaBox label="Rumus Tali Busur" formula="AB = 2r \cdot \sin\left(\frac{\alpha}{2}\right)" />
                  <ContohSoal
                    nomor={1}
                    soal="r = 10 cm, α = 60°. Hitung panjang tali busur!"
                    penyelesaian={[
                      'AB = 2 × 10 × sin(60°/2)',
                      '= 20 × sin(30°)',
                      '= 20 × 0,5 = 10 cm',
                    ]}
                    jawaban="AB = 10 cm"
                  />
                </>
              )}
              {activeTab === 'apotema' && (
                <>
                  <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-3">Apotema</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    Apotema adalah jarak tegak lurus dari pusat ke tali busur. Membagi tali busur menjadi dua bagian sama.
                  </p>
                  <FormulaBox label="Rumus Apotema (dari α)" formula="a = r \cdot \cos\left(\frac{\alpha}{2}\right)" />
                  <FormulaBox label="Rumus Apotema (dari tali busur l)" formula="a = \sqrt{r^2 - \left(\frac{l}{2}\right)^2}" />
                  <ContohSoal
                    nomor={1}
                    soal="r = 10 cm, panjang tali busur = 12 cm. Hitung apotema!"
                    penyelesaian={[
                      'a = √(r² − (l/2)²)',
                      '= √(10² − (12/2)²)',
                      '= √(100 − 36) = √64 = 8 cm',
                    ]}
                    jawaban="a = 8 cm"
                  />
                </>
              )}
              {activeTab === 'tembereng' && (
                <>
                  <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-3">Luas Tembereng</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    Tembereng adalah daerah yang dibatasi tali busur dan busurnya. Luasnya = juring dikurangi segitiga.
                  </p>
                  <FormulaBox label="Rumus Luas Tembereng" formula="L_{tmbrg} = \frac{\alpha}{360°}\pi r^2 - \frac{1}{2}r^2\sin\alpha" />
                  <ContohSoal
                    nomor={1}
                    soal="r = 10 cm, α = 60°, π = 3,14. Hitung luas tembereng!"
                    penyelesaian={[
                      'Luas juring = (1/6) × 3,14 × 100 = 52,33 cm²',
                      'Luas segitiga = ½ × 100 × sin(60°) = 50 × 0,866 = 43,3 cm²',
                      'Luas tembereng = 52,33 − 43,3 = 9,03 cm²',
                    ]}
                    jawaban="≈ 9,03 cm²"
                  />
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

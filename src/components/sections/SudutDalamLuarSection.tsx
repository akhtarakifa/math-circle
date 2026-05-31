// src/components/sections/SudutDalamLuarSection.tsx
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormulaBox } from '@/components/ui/FormulaBox';
import { ContohSoal } from '@/components/ui/ContohSoal';
import { AnimatedContent } from '@/components/animations/AnimatedContent';

export function SudutDalamLuarSection() {
  return (
    <section id="sudut-luar-dalam" className="section-padding section-alt">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Sudut Dalam &" serif="Luar Lingkaran" />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Sudut Dalam */}
          <AnimatedContent delay={0.1}>
            <div className="bg-white border border-[var(--border)] rounded-xl p-6 h-full">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">Sudut Dalam</span>
              <h3 className="font-sans font-semibold text-[var(--text-primary)] mt-2 mb-3">
                Dua Tali Busur Berpotongan di Dalam
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                Jika dua tali busur AC dan BD berpotongan di titik P di dalam lingkaran:
              </p>
              <FormulaBox
                label="Rumus Sudut Dalam"
                formula="\angle APB = \frac{1}{2}(\overset{\frown}{AB} + \overset{\frown}{CD})"
              />
              <div className="mt-3 space-y-1.5">
                {[
                  '∠APB = ∠CPD (bertolak belakang)',
                  '∠APC = ∠BPD (bertolak belakang)',
                  '∠APB + ∠APC = 180° (berpelurus)',
                ].map((s) => (
                  <p key={s} className="text-[var(--text-secondary)] text-xs font-mono leading-relaxed">• {s}</p>
                ))}
              </div>
            </div>
          </AnimatedContent>

          {/* Sudut Luar */}
          <AnimatedContent delay={0.15}>
            <div className="bg-white border border-[var(--border)] rounded-xl p-6 h-full">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">Sudut Luar</span>
              <h3 className="font-sans font-semibold text-[var(--text-primary)] mt-2 mb-3">
                Titik Sudut di Luar Lingkaran
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                Berlaku untuk: 2 sekan, 1 sekan + 1 singgung, atau 2 singgung.
              </p>
              <FormulaBox
                label="Rumus Sudut Luar (semua kasus)"
                formula="\angle P = \frac{1}{2}|\text{busur jauh} - \text{busur dekat}|"
              />
              <div className="mt-3 space-y-1.5">
                {[
                  'Kasus 1: Dua garis sekan',
                  'Kasus 2: Satu sekan + satu singgung',
                  'Kasus 3: Dua garis singgung',
                ].map((s) => (
                  <p key={s} className="text-[var(--text-secondary)] text-xs font-mono leading-relaxed">• {s}</p>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>

        <div className="space-y-4">
          <AnimatedContent>
            <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-4">Contoh Soal</h3>
          </AnimatedContent>
          <ContohSoal variant="primary" nomor={1}
            soal="Dua tali busur berpotongan di dalam lingkaran. Busur AB = 100°, Busur CD = 60°. Hitung ∠APB!"
            penyelesaian={[
              '∠APB = ½ × (busur AB + busur CD)',
              '= ½ × (100° + 60°)',
              '= ½ × 160° = 80°',
            ]}
            jawaban="∠APB = 80°"
          />
          <ContohSoal variant="primary" nomor={2}
            soal="Dari titik P di luar lingkaran, dua sekan memotong lingkaran. Busur jauh = 130°, busur dekat = 50°. Hitung ∠P!"
            penyelesaian={[
              '∠P = ½ × |busur jauh − busur dekat|',
              '= ½ × |130° − 50°|',
              '= ½ × 80° = 40°',
            ]}
            jawaban="∠P = 40°"
          />
        </div>
      </div>
    </section>
  );
}

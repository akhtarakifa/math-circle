// src/components/sections/LuasSection.tsx
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormulaBox } from '@/components/ui/FormulaBox';
import { ContohSoal } from '@/components/ui/ContohSoal';
import { MathTable } from '@/components/ui/MathTable';
import { AnimatedContent } from '@/components/animations/AnimatedContent';

export function LuasSection() {
  return (
    <section id="luas" className="section-padding section-alt">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Luas" serif="Lingkaran" />

        <AnimatedContent delay={0.1}>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            Luas lingkaran adalah luas daerah yang dibatasi oleh keliling lingkaran (termasuk seluruh
            bagian dalam). Berbeda dengan keliling yang hanya mengukur garis tepinya.
          </p>
        </AnimatedContent>

        <FormulaBox label="Rumus Luas" formula="L = \pi \times r^2" />

        <AnimatedContent delay={0.15}>
          <MathTable
            headers={['Simbol', 'Keterangan']}
            rows={[
              { col1: 'L', col2: 'Luas lingkaran' },
              { col1: 'r', col2: 'Jari-jari lingkaran' },
              { col1: 'π', col2: '≈ 3,14 atau 22/7' },
            ]}
          />
        </AnimatedContent>

        {/* Visual comparison */}
        <AnimatedContent delay={0.2}>
          <div className="bg-[var(--text-primary)] rounded-xl p-6 my-6 flex flex-col sm:flex-row gap-6 items-center">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-label="Ilustrasi luas lingkaran">
              <circle cx="60" cy="60" r="52" fill="var(--text-secondary)" fillOpacity="0.3" stroke="white" strokeWidth="1.5" />
              <circle cx="60" cy="60" r="2.5" fill="white" />
              <line x1="60" y1="60" x2="112" y2="60" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="82" y="54" fill="var(--text-muted)" fontSize="12" fontFamily="DM Mono,monospace">r</text>
            </svg>
            <div className="text-white/70 text-sm font-sans leading-relaxed">
              <p className="text-white font-semibold mb-1">Ingat perbedaan:</p>
              <p>• <span className="text-white">Keliling</span> = panjang garis tepi lingkaran</p>
              <p>• <span className="text-white">Luas</span> = area seluruh daerah dalam lingkaran</p>
            </div>
          </div>
        </AnimatedContent>

        <div className="mt-4 space-y-4">
          <AnimatedContent>
            <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-4">Contoh Soal</h3>
          </AnimatedContent>
          <ContohSoal variant="primary" nomor={1}
            soal="Sebuah lingkaran berdiameter 14 cm. Hitunglah luasnya! (π = 22/7)"
            penyelesaian={[
              'Diketahui: d = 14 cm → r = d/2 = 7 cm',
              'Rumus: L = πr²',
              'L = (22/7) × 7²',
              'L = (22/7) × 49 = 22 × 7 = 154 cm²',
            ]}
            jawaban="L = 154 cm²"
          />
          <ContohSoal variant="primary" nomor={2}
            soal="Luas sebuah lingkaran adalah 314 cm². Hitunglah jari-jarinya! (π = 3,14)"
            penyelesaian={[
              'Diketahui: L = 314 cm², π = 3,14',
              'L = πr² → 314 = 3,14 × r²',
              'r² = 314 ÷ 3,14 = 100',
              'r = √100 = 10 cm',
            ]}
            jawaban="r = 10 cm"
          />
        </div>
      </div>
    </section>
  );
}

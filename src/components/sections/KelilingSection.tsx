// src/components/sections/KelilingSection.tsx
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormulaBox } from '@/components/ui/FormulaBox';
import { ContohSoal } from '@/components/ui/ContohSoal';
import { MathTable } from '@/components/ui/MathTable';
import { AnimatedContent } from '@/components/animations/AnimatedContent';

export function KelilingSection() {
  return (
    <section id="keliling" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Keliling" serif="Lingkaran" />

        <AnimatedContent delay={0.1}>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            Keliling lingkaran adalah panjang lintasan yang membentuk lingkaran itu sendiri.
            π (Pi) adalah perbandingan tetap antara keliling lingkaran dengan diameternya.
          </p>
        </AnimatedContent>

        <AnimatedContent delay={0.15}>
          <div className="flex flex-wrap gap-3 mb-6">
            {['π ≈ 3,14 (2 desimal)', 'π ≈ 22/7 (saat r kelipatan 7)', 'π ≈ 3,14159265…'].map((t) => (
              <span key={t} className="text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border)] px-3 py-1.5 rounded-full text-[var(--text-secondary)]">
                {t}
              </span>
            ))}
          </div>
        </AnimatedContent>

        <FormulaBox label="Rumus Keliling" formula="K = \pi \times d = 2 \times \pi \times r" />

        <AnimatedContent delay={0.2}>
          <MathTable
            headers={['Simbol', 'Keterangan']}
            rows={[
              { col1: 'K', col2: 'Keliling lingkaran' },
              { col1: 'd', col2: 'Diameter lingkaran' },
              { col1: 'r', col2: 'Jari-jari lingkaran' },
              { col1: 'π', col2: '≈ 3,14 atau 22/7' },
            ]}
          />
        </AnimatedContent>

        <div className="mt-8 space-y-4">
          <AnimatedContent delay={0.1}>
            <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-4">Contoh Soal</h3>
          </AnimatedContent>
          <ContohSoal
            nomor={1}
            soal="Sebuah lingkaran memiliki jari-jari 7 cm. Hitunglah kelilingnya! (π = 22/7)"
            penyelesaian={[
              'Diketahui: r = 7 cm, π = 22/7',
              'Rumus: K = 2πr',
              'K = 2 × (22/7) × 7',
              'K = 2 × 22 = 44 cm',
            ]}
            jawaban="K = 44 cm"
          />
          <ContohSoal
            nomor={2}
            soal="Roda sepeda memiliki diameter 50 cm. Berapa panjang lintasan setelah roda berputar 10 kali? (π = 3,14)"
            penyelesaian={[
              'Diketahui: d = 50 cm, π = 3,14',
              'Keliling = πd = 3,14 × 50 = 157 cm',
              'Jarak = 10 × 157 = 1.570 cm',
              'Konversi: 1.570 cm = 15,7 m',
            ]}
            jawaban="15,7 meter"
          />
        </div>
      </div>
    </section>
  );
}

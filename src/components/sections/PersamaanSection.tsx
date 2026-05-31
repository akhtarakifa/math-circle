// src/components/sections/PersamaanSection.tsx
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormulaBox } from '@/components/ui/FormulaBox';
import { ContohSoal } from '@/components/ui/ContohSoal';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { InfoCard } from '@/components/ui/InfoCard';

export function PersamaanSection() {
  return (
    <section id="persamaan" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Persamaan" serif="Lingkaran" />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <InfoCard delay={0.1}>
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">Bentuk Standar</span>
            <h3 className="font-sans font-semibold text-[var(--text-primary)] mt-2 mb-1">Pusat O(0, 0)</h3>
            <FormulaBox formula="x^2 + y^2 = r^2" display={false} />
            <p className="text-[var(--text-secondary)] text-xs mt-2">Contoh: r = 5 → x² + y² = 25</p>
          </InfoCard>

          <InfoCard delay={0.15}>
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">Bentuk Standar</span>
            <h3 className="font-sans font-semibold text-[var(--text-primary)] mt-2 mb-1">Pusat P(a, b)</h3>
            <FormulaBox formula="(x-a)^2 + (y-b)^2 = r^2" display={false} />
            <p className="text-[var(--text-secondary)] text-xs mt-2">Tanda dalam kurung = kebalikan koordinat pusat!</p>
          </InfoCard>
        </div>

        <AnimatedContent delay={0.2}>
          <div className="mb-6">
            <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-3">Bentuk Umum</h3>
            <FormulaBox label="Bentuk Umum" formula="x^2 + y^2 + Dx + Ey + F = 0" />
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4">
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">Pusat</p>
                <FormulaBox formula="\left(-\frac{D}{2},\ -\frac{E}{2}\right)" display={false} />
              </div>
              <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4">
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">Jari-jari</p>
                <FormulaBox formula="r = \sqrt{\left(\frac{D}{2}\right)^2 + \left(\frac{E}{2}\right)^2 - F}" display={false} />
              </div>
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent delay={0.25}>
          <div className="mb-6">
            <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-3">Konversi Antar Bentuk</h3>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5">
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3">Bentuk Umum → Standar (Lengkapkan Kuadrat)</p>
              <div className="space-y-1.5 text-[var(--text-secondary)] text-sm font-mono">
                <p>x² + y² − 4x + 6y + 4 = 0</p>
                <p>= (x² − 4x + 4) + (y² + 6y + 9) = −4 + 4 + 9</p>
                <p className="text-[var(--text-primary)] font-semibold">= (x − 2)² + (y + 3)² = 9</p>
                <p className="text-[var(--text-muted)] text-xs mt-2">→ Pusat (2, −3), r = 3</p>
              </div>
            </div>
          </div>
        </AnimatedContent>

        <div className="space-y-4">
          <AnimatedContent>
            <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-2">Contoh Soal</h3>
          </AnimatedContent>
          <ContohSoal
            nomor={1}
            soal="Tentukan pusat dan jari-jari lingkaran: x² + y² − 6x + 4y − 12 = 0"
            penyelesaian={[
              'D = −6, E = 4, F = −12',
              'Pusat = (−D/2, −E/2) = (−(−6)/2, −4/2) = (3, −2)',
              'r = √((D/2)² + (E/2)² − F)',
              'r = √(9 + 4 + 12) = √25 = 5',
            ]}
            jawaban="Pusat (3, −2), r = 5"
          />
          <ContohSoal
            nomor={2}
            soal="Tulis persamaan lingkaran pusat (3, −4) dan r = 6!"
            penyelesaian={[
              'Bentuk standar: (x − a)² + (y − b)² = r²',
              'a = 3, b = −4, r = 6',
              '(x − 3)² + (y − (−4))² = 36',
              '(x − 3)² + (y + 4)² = 36',
            ]}
            jawaban="(x − 3)² + (y + 4)² = 36"
          />
        </div>
      </div>
    </section>
  );
}

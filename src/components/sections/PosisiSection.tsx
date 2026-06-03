// src/components/sections/PosisiSection.tsx
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormulaBox } from '@/components/ui/FormulaBox';
import { ContohSoal } from '@/components/ui/ContohSoal';
import { MathTable } from '@/components/ui/MathTable';
import { AnimatedContent } from '@/components/animations/AnimatedContent';

export function PosisiSection() {
  return (
    <section id="posisi" className="section-padding section-alt">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Posisi Titik" serif="& Garis" />

        {/* Posisi Titik */}
        <AnimatedContent delay={0.1}>
          <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-3">
            13.1 Posisi Titik terhadap Lingkaran
          </h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
            Untuk lingkaran x² + y² = r², substitusikan titik (x₀, y₀) lalu bandingkan hasilnya dengan r².
          </p>
          <MathTable
            headers={['Kondisi', 'Posisi Titik', 'Artinya']}
            rows={[
              { col1: 'x₀² + y₀² = r²', col2: 'Pada lingkaran', col3: 'Jarak titik ke pusat = r' },
              { col1: 'x₀² + y₀² < r²', col2: 'Di dalam lingkaran', col3: 'Jarak titik ke pusat < r' },
              { col1: 'x₀² + y₀² > r²', col2: 'Di luar lingkaran', col3: 'Jarak titik ke pusat > r' },
            ]}
          />
        </AnimatedContent>

        <ContohSoal variant="primary" nomor={1}
          soal="Tentukan posisi titik A(3, 4) terhadap lingkaran x² + y² = 20!"
          penyelesaian={[
            'Substitusi A(3, 4): x₀² + y₀² = 3² + 4²',
            '= 9 + 16 = 25',
            '25 > 20 = r²',
          ]}
          jawaban="A berada di luar lingkaran"
        />

        {/* Posisi Garis */}
        <AnimatedContent delay={0.15} className="mt-8">
          <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-3">
            13.2 Posisi Garis terhadap Lingkaran
          </h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
            Untuk garis y = mx + c terhadap lingkaran x² + y² = r², substitusikan garis ke persamaan lingkaran untuk mendapat persamaan kuadrat. Gunakan diskriminan D = b² − 4ac.
          </p>
          <FormulaBox label="Diskriminan" formula="D = b^2 - 4ac" />
          <MathTable
            headers={['Diskriminan', 'Posisi Garis', 'Titik Potong']}
            rows={[
              { col1: 'D > 0', col2: 'Garis memotong lingkaran', col3: '2 titik' },
              { col1: 'D = 0', col2: 'Garis menyinggung lingkaran', col3: '1 titik' },
              { col1: 'D < 0', col2: 'Garis tidak memotong lingkaran', col3: '0 titik' },
            ]}
          />
        </AnimatedContent>

        <AnimatedContent delay={0.2}>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5 my-4">
            <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">Cara Menentukan Koefisien a, b, c</p>
            <p className="text-[var(--text-secondary)] text-sm mb-3">Substitusi y = mx + c ke x² + y² = r²:</p>
            <p className="text-[var(--text-secondary)] text-sm mb-2">x² + (mx + c)² = r²</p>
            <p className="text-[var(--text-secondary)] text-sm mb-2">x² + m²x² + 2mcx + c² = r²</p>
            <p className="text-[var(--text-secondary)] text-sm font-mono">(1 + m²)x² + 2mcx + (c² − r²) = 0</p>
            <p className="text-[var(--text-secondary)] text-sm mt-2">Maka: a = 1 + m²,  b = 2mc,  c = c² − r²</p>
          </div>
        </AnimatedContent>

        <ContohSoal variant="primary" nomor={2}
          soal="Garis y = 2x + c menyinggung lingkaran x² + y² = 5. Tentukan nilai c!"
          penyelesaian={[
            'Substitusi y = 2x + c ke x² + y² = 5:',
            'x² + (2x + c)² = 5',
            'x² + 4x² + 4cx + c² = 5',
            '5x² + 4cx + (c² − 5) = 0',
            'a = 5, b = 4c, c = (c² − 5)',
            'Syarat singgung: D = 0',
            'b² − 4ac = 0',
            '(4c)² − 4(5)(c² − 5) = 0',
            '16c² − 20c² + 100 = 0',
            '−4c² + 100 = 0',
            'c² = 25 → c = ±5',
          ]}
          jawaban="c = ±5, garis: y = 2x + 5 atau y = 2x − 5"
        />

        <ContohSoal variant="primary" nomor={3}
          soal="Garis y = 3x + c menyinggung lingkaran x² + y² = 10. Tentukan nilai c!"
          penyelesaian={[
            'Substitusi y = 3x + c ke x² + y² = 10:',
            'x² + (3x + c)² = 10',
            'x² + 9x² + 6cx + c² = 10',
            '10x² + 6cx + (c² − 10) = 0',
            'a = 10, b = 6c, c = (c² − 10)',
            'Syarat singgung: D = 0',
            'b² − 4ac = 0',
            '(6c)² − 4(10)(c² − 10) = 0',
            '36c² − 40c² + 400 = 0',
            '−4c² + 400 = 0',
            'c² = 100 → c = ±10',
          ]}
          jawaban="c = ±10"
        />
      </div>
    </section>
  );
}

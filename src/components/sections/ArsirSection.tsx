// src/components/sections/ArsirSection.tsx
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContohSoal } from '@/components/ui/ContohSoal';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { InfoCard } from '@/components/ui/InfoCard';

const tipes = [
  {
    tipe: 'Tipe 1',
    judul: 'Lingkaran dalam Persegi',
    rumus: 'Arsiran = Luas Persegi − Luas Lingkaran',
    warna: 'var(--bg-secondary)',
  },
  {
    tipe: 'Tipe 2',
    judul: 'Bangun dalam Lingkaran',
    rumus: 'Arsiran = Luas Lingkaran − Luas Bangun Dalam',
    warna: 'var(--bg-secondary)',
  },
  {
    tipe: 'Tipe 3',
    judul: 'Kombinasi Juring',
    rumus: 'Arsiran = Juring 1 + Juring 2 − Irisan',
    warna: 'var(--bg-secondary)',
  },
  {
    tipe: 'Tipe 4',
    judul: 'Tembereng',
    rumus: 'Arsiran = Luas Juring − Luas Segitiga',
    warna: 'var(--bg-secondary)',
  },
];

export function ArsirSection() {
  return (
    <section id="arsiran" className="section-padding section-alt">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Luas Daerah" serif="yang Diarsir" />

        <AnimatedContent delay={0.1}>
          <div className="bg-[var(--text-primary)] rounded-xl p-5 mb-8 flex items-center gap-4">
            <p className="text-white/80 font-sans text-sm leading-relaxed">
              <span className="text-white font-semibold">Strategi umum: </span>
              Luas Arsiran = Luas Bangun Besar − Luas Bagian yang Tidak Diarsir
            </p>
          </div>
        </AnimatedContent>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {tipes.map((t, i) => (
            <InfoCard key={t.tipe} delay={i * 0.08}>
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">{t.tipe}</span>
              <h4 className="font-sans font-semibold text-[var(--text-primary)] mt-1 mb-2">{t.judul}</h4>
              <p className="text-[var(--text-secondary)] text-xs font-mono leading-relaxed">{t.rumus}</p>
            </InfoCard>
          ))}
        </div>

        <AnimatedContent delay={0.2}>
          <h3 className="font-sans font-semibold text-[var(--text-primary)] text-lg mb-4">Contoh Soal</h3>
        </AnimatedContent>

        <ContohSoal variant="primary" nomor={1}
          soal="Persegi dengan sisi 14 cm. Di dalamnya terdapat lingkaran dengan jari-jari 7 cm. Hitung luas daerah yang diarsir! (π = 22/7)"
          penyelesaian={[
            'Luas persegi = sisi² = 14² = 196 cm²',
            'Luas lingkaran = πr² = (22/7) × 7² = (22/7) × 49 = 154 cm²',
            'Luas arsiran = Luas persegi − Luas lingkaran',
            'Luas arsiran = 196 − 154 = 42 cm²',
          ]}
          jawaban="42 cm²"
        />

        <ContohSoal variant="primary" nomor={2}
          soal="Persegi panjang 20 cm × 14 cm. Di dalamnya terdapat setengah lingkaran dengan diameter 14 cm. Hitung luas arsiran! (π = 22/7)"
          penyelesaian={[
            'r = 7 cm',
            'Luas setengah lingkaran = ½ × πr² = ½ × (22/7) × 49 = ½ × 154 = 77 cm²',
            'Luas persegi panjang = 20 × 14 = 280 cm²',
            'Luas arsiran = 280 − 77 = 203 cm²',
          ]}
          jawaban="203 cm²"
        />
      </div>
    </section>
  );
}

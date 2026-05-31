// src/components/sections/DefinisiSection.tsx
import { motion } from 'framer-motion';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function DefinisiSection() {
  const dots = Array.from({ length: 24 }, (_, i) => i);

  return (
    <section id="definisi" className="section-padding bg-white min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading sans="Definisi" serif="Lingkaran" order="sans-first" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5">
            <AnimatedContent delay={0.1}>
              <p className="text-[var(--text-secondary)] font-sans text-base leading-relaxed">
                <span className="font-semibold text-[var(--text-primary)]">Lingkaran</span> adalah himpunan semua
                titik pada bidang datar yang memiliki jarak yang sama terhadap satu titik tertentu.
              </p>
            </AnimatedContent>
            <AnimatedContent delay={0.2}>
              <p className="text-[var(--text-secondary)] font-sans text-base leading-relaxed">
                Titik tertentu tersebut disebut <span className="font-semibold text-[var(--text-primary)]">titik pusat</span>, dan
                jarak yang sama itu disebut <span className="font-semibold text-[var(--text-primary)]">jari-jari</span>.
              </p>
            </AnimatedContent>
            <AnimatedContent delay={0.3}>
              <div className="border-l-2 border-[var(--text-primary)] pl-4 py-1">
                <p className="text-[var(--text-secondary)] font-sans text-sm italic leading-relaxed">
                  Secara matematis, lingkaran dengan pusat O dan jari-jari r adalah himpunan semua
                  titik P sehingga |OP| = r.
                </p>
              </div>
            </AnimatedContent>
            <AnimatedContent delay={0.4}>
              <p className="text-[var(--text-secondary)] font-sans text-sm leading-relaxed">
                Lingkaran berbeda dengan <span className="font-semibold text-[var(--text-primary)]">disk (cakram)</span> —
                lingkaran hanya merujuk pada garis lengkungnya (circumference), bukan daerah di dalamnya.
              </p>
            </AnimatedContent>
          </div>

          {/* SVG illustration */}
          <AnimatedContent delay={0.2} className="flex justify-center">
            <div className="relative w-56 h-56">
              <svg width="224" height="224" viewBox="0 0 224 224" fill="none" aria-label="Ilustrasi lingkaran dengan titik-titik pada perimeter">
                {/* Main circle */}
                <motion.circle
                  cx="112" cy="112" r="90"
                  stroke="var(--text-primary)" strokeWidth="1.5" fill="none"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Center */}
                <circle cx="112" cy="112" r="3" fill="var(--text-primary)" />
                {/* Radius line */}
                <motion.line
                  x1="112" y1="112" x2="202" y2="112"
                  stroke="var(--text-primary)" strokeWidth="1.5" strokeDasharray="4 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
                {/* Label r */}
                <text x="152" y="106" fill="var(--text-secondary)" fontSize="13" fontFamily="Fira Mono, monospace">r</text>
                {/* Label O */}
                <text x="96" y="110" fill="var(--text-primary)" fontSize="12" fontFamily="Fira Mono, monospace">O</text>

                {/* Perimeter dots — staggered appearance */}
                {dots.map((i) => {
                  const angle = (i / dots.length) * 2 * Math.PI;
                  const x = 112 + 90 * Math.cos(angle);
                  const y = 112 + 90 * Math.sin(angle);
                  return (
                    <motion.circle
                      key={i} cx={x} cy={y}
                      fill="var(--text-primary)"
                      initial={{ r: 0, opacity: 0 }}
                      whileInView={{ r: 2.5, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i + 0.3, duration: 0.3 }}
                    />
                  );
                })}
              </svg>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}

// src/components/sections/HeroSection.tsx
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { scrollToSection } from '@/utils/navigation';

export function HeroSection() {
  const scrollToDefinisi = () => {
    scrollToSection('definisi');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--text-primary)]"
    >
      {/* Background floating circles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { size: 600, x: '60%', y: '-10%', delay: 0 },
          { size: 400, x: '-5%', y: '60%', delay: 0.5 },
          { size: 200, x: '80%', y: '70%', delay: 1 },
          { size: 150, x: '15%', y: '15%', delay: 0.8 },
        ].map((c, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/5"
            style={{ width: c.size, height: c.size, left: c.x, top: c.y }}
            animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: c.delay, ease: 'easeInOut' }}
          />
        ))}
        {/* Large decorative SVG circle */}
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] hidden md:block"
          width="700"
          height="700"
          viewBox="0 0 700 700"
          fill="none"
          aria-hidden="true"
        >
          <motion.circle
            cx="350"
            cy="350"
            r="340"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="2136.3"
            initial={{ strokeDashoffset: 2136.3 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-white/40 text-xs font-mono uppercase tracking-widest">
            Matematika · Kelas XI SMK · 2025/2026
          </span>
        </motion.div>

        {/* Main heading */}
        <h1 className="mb-6">
          <motion.span
            className="block font-serif italic text-white leading-none"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Lingkaran
          </motion.span>
          <motion.span
            className="block font-sans font-black text-white/80 tracking-tighter mt-2"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            MATEMATIKA SMK
          </motion.span>
        </h1>

        {/* Description */}
        <motion.p
          className="text-white/50 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Pelajari konsep lengkap lingkaran secara terstruktur: unsur-unsur, keliling, luas,
          sudut, hubungan dua lingkaran, garis singgung, persamaan lingkaran, dan uji
          pemahamanmu lewat kuis interaktif.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[
            { num: '14', label: 'Topik' },
            { num: '10', label: 'Soal Kuis' },
            { num: '8', label: 'Unsur Lingkaran' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white font-sans font-black text-3xl">{s.num}</p>
              <p className="text-white/40 font-sans text-xs uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          id="hero-mulai-belajar"
          onClick={scrollToDefinisi}
          className="group relative inline-flex items-center gap-2.5 bg-white text-[var(--text-primary)] font-sans font-semibold px-7 py-3.5 rounded-full text-sm overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Mulai belajar matematika lingkaran"
        >
          <span className="relative z-10">Mulai Belajar</span>
          <ArrowDown size={16} className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}

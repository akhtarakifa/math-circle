// src/components/ui/SectionHeading.tsx
import { motion, type Variants } from 'framer-motion';

interface SectionHeadingProps {
  sans: string;
  serif: string;
  order?: 'sans-first' | 'serif-first';
  size?: 'lg' | 'xl';
  className?: string;
}

export function SectionHeading({
  sans,
  serif,
  order = 'sans-first',
  size = 'xl',
  className = '',
}: SectionHeadingProps) {
  const sizeClass = size === 'xl' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl';

  const variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.h2
      className={`${sizeClass} leading-tight mb-6 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={variants}
    >
      {order === 'sans-first' ? (
        <>
          <span className="font-sans font-bold text-[var(--text-primary)]">{sans} </span>
          <span className="font-serif italic font-normal text-[var(--text-primary)]">{serif}</span>
        </>
      ) : (
        <>
          <span className="font-serif italic font-normal text-[var(--text-primary)]">{serif} </span>
          <span className="font-sans font-bold text-[var(--text-primary)]">{sans}</span>
        </>
      )}
    </motion.h2>
  );
}

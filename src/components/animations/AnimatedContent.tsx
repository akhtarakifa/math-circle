// src/components/animations/AnimatedContent.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedContentProps {
  children: ReactNode;
  inViewThreshold?: number;
  delay?: number;
  className?: string;
}

export function AnimatedContent({
  children,
  inViewThreshold = 0.2,
  delay = 0,
  className = '',
}: AnimatedContentProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: inViewThreshold }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

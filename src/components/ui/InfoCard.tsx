// src/components/ui/InfoCard.tsx
import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

interface InfoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function InfoCard({ children, className = '', delay = 0 }: InfoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`spotlight-card p-6 cursor-default relative ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-20"
          style={{
            background: `radial-gradient(200px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(0,0,0,0.4), transparent)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

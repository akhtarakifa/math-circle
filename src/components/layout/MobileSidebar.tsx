// src/components/layout/MobileSidebar.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { sidebarItems } from '@/data/sidebarItems';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileSidebar({ isOpen, onClose, activeSection }: MobileSidebarProps) {
  const handleNav = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            className="fixed left-0 top-0 h-full bg-[var(--text-primary)] z-50 flex flex-col lg:hidden w-full max-w-[280px]"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            role="navigation"
            aria-label="Navigasi mobile"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.5" />
                  <circle cx="11" cy="11" r="1.5" fill="white" />
                  <line x1="11" y1="11" x2="11" y2="3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-white font-sans font-bold text-base tracking-tight">MathCircle</span>
              </div>
              <button
                id="mobile-sidebar-close"
                onClick={onClose}
                className="text-[var(--text-muted)] hover:text-white transition-colors p-1"
                aria-label="Tutup menu navigasi"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 px-3 py-4 overflow-y-auto">
              <ul className="space-y-0.5" role="list">
                {sidebarItems.map((item, i) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                    >
                      <button
                        id={`mobile-nav-${item.id}`}
                        className="sidebar-item w-full text-left"
                        onClick={() => handleNav(item.href)}
                        aria-label={`Navigasi ke ${item.label}`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className="relative z-10 text-lg leading-none w-6 text-center shrink-0">
                          {item.icon}
                        </span>
                        <span
                          className={`relative z-10 text-sm transition-colors duration-200 ${
                            isActive ? 'text-white font-semibold' : 'text-[var(--text-sidebar)]'
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

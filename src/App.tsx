// src/App.tsx
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileSidebar } from '@/components/layout/MobileSidebar';
import { Footer } from '@/components/layout/Footer';
import { ProgressBar } from '@/components/layout/ProgressBar';

import { HeroSection } from '@/components/sections/HeroSection';
import { DefinisiSection } from '@/components/sections/DefinisiSection';
import { UnsurSection } from '@/components/sections/UnsurSection';
import { KelilingSection } from '@/components/sections/KelilingSection';
import { LuasSection } from '@/components/sections/LuasSection';
import { BusurJuringSection } from '@/components/sections/BusurJuringSection';
import { ArsirSection } from '@/components/sections/ArsirSection';
import { SudutSection } from '@/components/sections/SudutSection';
import { SudutDalamLuarSection } from '@/components/sections/SudutDalamLuarSection';
import { HubunganSection } from '@/components/sections/HubunganSection';
import { GarisSinggungSection } from '@/components/sections/GarisSinggungSection';
import { PersamaanSection } from '@/components/sections/PersamaanSection';
import { PosisiSection } from '@/components/sections/PosisiSection';
import { KuisSection } from '@/components/sections/KuisSection';

import { useActiveSection } from '@/hooks/useActiveSection';
import { useSidebar } from '@/hooks/useSidebar';
import { sidebarItems } from '@/data/sidebarItems';

const sectionIds = sidebarItems.map((s) => s.id);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, open, close } = useSidebar();
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main App */}
      {!isLoading && (
        <>
          <ProgressBar />
          <div className="flex min-h-screen bg-white">
          {/* Desktop Sidebar */}
          <Sidebar activeSection={activeSection} />

          {/* Mobile Sidebar */}
          <MobileSidebar
            isOpen={isOpen}
            onClose={close}
            activeSection={activeSection}
          />

          {/* Mobile Hamburger */}
          <button
            id="hamburger-menu"
            onClick={open}
            className="fixed top-4 right-4 z-40 lg:hidden bg-[var(--text-primary)] text-white p-2.5 rounded-xl shadow-lg"
            aria-label="Buka menu navigasi"
          >
            <Menu size={20} />
          </button>

          {/* Main Content */}
          <main className="flex-1 lg:ml-[240px] min-w-0" role="main">
            <HeroSection />
            <DefinisiSection />
            <UnsurSection />
            <KelilingSection />
            <LuasSection />
            <BusurJuringSection />
            <ArsirSection />
            <SudutSection />
            <SudutDalamLuarSection />
            <HubunganSection />
            <GarisSinggungSection />
            <PersamaanSection />
            <PosisiSection />
            <KuisSection />
            <Footer />
          </main>
        </div>
        </>
      )}
    </>
  );
}

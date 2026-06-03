// src/App.tsx
import { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { LOADING_DURATION_MS } from '@/constants/config';

import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileSidebar } from '@/components/layout/MobileSidebar';
import { Footer } from '@/components/layout/Footer';
import { ProgressBar } from '@/components/layout/ProgressBar';

// Lazy load sections yang below-the-fold
import { HeroSection } from '@/components/sections/HeroSection';
const DefinisiSection = lazy(() => import('@/components/sections/DefinisiSection').then(m => ({ default: m.DefinisiSection })));
const UnsurSection = lazy(() => import('@/components/sections/UnsurSection').then(m => ({ default: m.UnsurSection })));
const KelilingSection = lazy(() => import('@/components/sections/KelilingSection').then(m => ({ default: m.KelilingSection })));
const LuasSection = lazy(() => import('@/components/sections/LuasSection').then(m => ({ default: m.LuasSection })));
const BusurJuringSection = lazy(() => import('@/components/sections/BusurJuringSection').then(m => ({ default: m.BusurJuringSection })));
const ArsirSection = lazy(() => import('@/components/sections/ArsirSection').then(m => ({ default: m.ArsirSection })));
const SudutSection = lazy(() => import('@/components/sections/SudutSection').then(m => ({ default: m.SudutSection })));
const SudutDalamLuarSection = lazy(() => import('@/components/sections/SudutDalamLuarSection').then(m => ({ default: m.SudutDalamLuarSection })));
const HubunganSection = lazy(() => import('@/components/sections/HubunganSection').then(m => ({ default: m.HubunganSection })));
const GarisSinggungSection = lazy(() => import('@/components/sections/GarisSinggungSection').then(m => ({ default: m.GarisSinggungSection })));
const PersamaanSection = lazy(() => import('@/components/sections/PersamaanSection').then(m => ({ default: m.PersamaanSection })));
const PosisiSection = lazy(() => import('@/components/sections/PosisiSection').then(m => ({ default: m.PosisiSection })));
const KuisSection = lazy(() => import('@/components/sections/KuisSection').then(m => ({ default: m.KuisSection })));

import { useActiveSection } from '@/hooks/useActiveSection';
import { useSidebar } from '@/hooks/useSidebar';
import { sidebarItems } from '@/data/sidebarItems';

// Fallback loading component untuk lazy sections
function SectionLoadingFallback() {
  return <div className="h-screen bg-white" />;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, open, close } = useSidebar();
  
  // Memoize sectionIds agar tidak recreate setiap render
  const sectionIds = useMemo(() => sidebarItems.map((s) => s.id), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADING_DURATION_MS);
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
            <Suspense fallback={<SectionLoadingFallback />}>
              <DefinisiSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <UnsurSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <KelilingSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <LuasSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <BusurJuringSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <ArsirSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <SudutSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <SudutDalamLuarSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <HubunganSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <GarisSinggungSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <PersamaanSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <PosisiSection />
            </Suspense>
            <Suspense fallback={<SectionLoadingFallback />}>
              <KuisSection />
            </Suspense>
            <Footer />
          </main>
        </div>
        </>
      )}
    </>
  );
}

// src/hooks/useActiveSection.ts
import { useState, useEffect } from 'react';

export function useActiveSection(ids: string[]): string {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerMap = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observerMap.set(entry.target.id, entry);
          } else {
            observerMap.delete(entry.target.id);
          }
        });

        // Tentukan active section berdasarkan posisi viewport
        // Prioritas: section yang paling jauh ke atas di viewport
        if (observerMap.size > 0) {
          let topMostSection = '';
          let topMostY = Infinity;

          observerMap.forEach((entry, id) => {
            if (entry.boundingClientRect.top < topMostY) {
              topMostY = entry.boundingClientRect.top;
              topMostSection = id;
            }
          });

          if (topMostSection) {
            setActiveSection(topMostSection);
          }
        }
      },
      { 
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-5% 0px -70% 0px'
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [ids]);

  return activeSection;
}

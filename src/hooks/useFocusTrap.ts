// src/hooks/useFocusTrap.ts
import { useEffect, useRef } from 'react';

/**
 * Hook untuk menangkap focus di dalam element
 * Berguna untuk modal, dialog, dan mobile sidebar
 */
export function useFocusTrap(isActive: boolean) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !ref.current) return;

    const element = ref.current;
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus ke elemen pertama saat trap diaktifkan
    firstElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        // Tab key untuk navigate antara focusable elements
        if (e.shiftKey) {
          // Shift+Tab: backward
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: forward
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }

      // Escape key untuk close
      if (e.key === 'Escape') {
        e.preventDefault();
        const closeButton = element.querySelector('[aria-label*="Tutup"]') as HTMLElement;
        closeButton?.click();
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    return () => element.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  return ref;
}

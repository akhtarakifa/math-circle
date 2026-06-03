// src/utils/navigation.ts

/**
 * Scroll ke section dengan smooth behavior
 * Menggantikan direct DOM manipulation dengan utility function terpusat
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

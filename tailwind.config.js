/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
        mono:  ['"DM Mono"', 'monospace'],
      },
      colors: {
        'bg-primary':    '#FFFFFF',
        'bg-secondary':  '#F7F7F5',
        'bg-sidebar':    '#0A0A0A',
        'text-primary':  '#0A0A0A',
        'text-secondary':'#525252',
        'text-muted':    '#A3A3A3',
        'accent':        '#000000',
        'border-light':  '#E5E5E5',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}

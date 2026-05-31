// src/components/layout/Sidebar.tsx
import { sidebarItems } from '@/data/sidebarItems';

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  const handleNav = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside
      className="fixed left-0 top-0 h-full bg-[var(--accent)] z-40 hidden lg:flex flex-col"
      style={{ width: '240px' }}
      role="navigation"
      aria-label="Navigasi utama"
    >
      {/* Logo */}
      <div className="px-5 py-4 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" />
            <circle cx="16" cy="16" r="2" fill="white" />
            <line x1="16" y1="16" x2="16" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-white font-sans font-bold text-xl tracking-tight">MathCircle</span>
        </div>
      </div>

      {/* Nav items with scroll */}
      <div className="flex-1 relative overflow-hidden">
        <nav className="h-full px-3 py-4 overflow-y-auto pr-2">
          <ul className="space-y-0.5" role="list">
            {sidebarItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    id={`sidebar-nav-${item.id}`}
                    className="sidebar-item w-full text-left"
                    onClick={() => handleNav(item.href)}
                    aria-label={`Navigasi ke ${item.label}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="relative z-10 text-lg leading-none w-6 text-center shrink-0">
                      {item.icon}
                    </span>
                    <span
                      className={`relative z-10 text-sm truncate transition-colors duration-200 ${
                        isActive ? 'text-white font-semibold' : 'text-[var(--text-sidebar)]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

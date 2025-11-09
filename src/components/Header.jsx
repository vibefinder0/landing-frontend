import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';

function Header({ sections, onNavigate, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavigate = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        isScrolled ? 'shadow-lg shadow-slate-900/5' : 'shadow-none'
      }`}
      role="banner"
    >
      <div className="vf-container flex items-center justify-between py-4">
        <button
          type="button"
          className="flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
          onClick={() => handleNavigate('hero')}
          aria-label="Torna all'inizio"
        >
          <Logo className="h-10 w-10" />
          <span className="text-xl font-semibold tracking-tight text-slate-900">
            VibeFinder
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Sezioni principali">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleNavigate(section.id)}
              className={`text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary ${
                activeSection === section.id
                  ? 'text-vf-primary'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <button
            type="button"
            onClick={() => handleNavigate('contatti')}
            className="rounded-full bg-vf-primary px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-vf-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
          >
            Inizia ora
          </button>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="vf-container flex flex-col gap-4 py-6">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleNavigate(section.id)}
                className={`text-base text-left font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary ${
                  activeSection === section.id
                    ? 'text-vf-primary'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {section.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavigate('contatti')}
              className="mt-2 rounded-full bg-vf-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-vf-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
            >
              Inizia ora
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

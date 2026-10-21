import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useTheme, useSaved } from '../lib/store';
import { CommandPalette } from './CommandPalette';

export function Logo() {
  return (
    <svg viewBox="0 0 40 40" width="34" height="34" className="logo-mark" aria-hidden="true">
      <circle cx="20" cy="20" r="18.5" className="logo-plate" />
      <circle cx="20" cy="20" r="13" className="logo-line" />
      <ellipse cx="20" cy="20" rx="5.6" ry="13" className="logo-line" />
      <path d="M7 20h26M9 13.5h22M9 26.5h22" className="logo-line thin" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : 'system';
  const label = theme === 'system' ? 'Theme: system' : theme === 'dark' ? 'Theme: dark' : 'Theme: light';
  return (
    <button type="button" className="icon-btn" onClick={() => setTheme(next)} aria-label={`${label}. Switch to ${next}.`} title={label}>
      {theme === 'dark' ? (
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
          <path d="M15.5 12.5A6.5 6.5 0 0 1 7.5 4.5a6.5 6.5 0 1 0 8 8z" fill="currentColor" />
        </svg>
      ) : theme === 'light' ? (
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="10" cy="10" r="3.6" />
          <path d="M10 1.8v2M10 16.2v2M1.8 10h2M16.2 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
          <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 3a7 7 0 0 1 0 14z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}

export function Layout() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { saved } = useSaved();
  const { pathname } = useLocation();

  // Each page starts at the top; the menu closes on navigation.
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && /INPUT|TEXTAREA/.test(e.target.tagName);
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link to="/" className="brand" aria-label="A World on a Plate, home">
            <Logo />
            <span className="brand-name">
              A World <em>on a</em> Plate
            </span>
          </Link>
          <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
            <NavLink to="/" end>
              Atlas
            </NavLink>
            <NavLink to="/dishes">Dishes</NavLink>
            <NavLink to="/countries">Countries</NavLink>
            <NavLink to="/cookbook">
              Cookbook{saved.length > 0 && <span className="nav-count">{saved.length}</span>}
            </NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
          <div className="header-actions">
            <button type="button" className="search-btn" onClick={() => setPaletteOpen(true)}>
              <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="8.5" cy="8.5" r="5.5" />
                <path d="m13 13 4 4" />
              </svg>
              <span>Search dishes</span>
              <kbd>⌘K</kbd>
            </button>
            <ThemeToggle />
            <button
              type="button"
              className="icon-btn menu-btn"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {menuOpen ? <path d="M5 5l10 10M15 5 5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main id="main" key={pathname} className="page-enter">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <Logo />
            <p>
              A World on a Plate is an atlas of dishes that travelled. Food history is full of good stories and
              thin evidence; where historians disagree, we say so.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <Link to="/dishes">All dishes</Link>
            <Link to="/countries">Countries</Link>
            <Link to="/cookbook">My cookbook</Link>
            <Link to="/about">About & sources</Link>
          </nav>
        </div>
      </footer>

      {paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} />}
    </>
  );
}

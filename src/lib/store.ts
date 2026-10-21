import { useCallback, useSyncExternalStore } from 'react';

// Tiny localStorage-backed stores. Storage can be unavailable (private mode,
// blocked site data), so every access is guarded and the app works without it.

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable: keep the in-memory value only */
  }
}

function createStore<T>(key: string, fallback: T) {
  let value = read(key, fallback);
  const listeners = new Set<() => void>();
  return {
    get: () => value,
    set(next: T) {
      value = next;
      write(key, next);
      listeners.forEach((l) => l());
    },
    subscribe(l: () => void) {
      listeners.add(l);
      return () => listeners.delete(l);
    },
  };
}

/* Saved recipes ("My cookbook"), stored as "familyId/variantId". */
const saved = createStore<string[]>('wop-saved', []);

export function useSaved() {
  const list = useSyncExternalStore(saved.subscribe, saved.get, saved.get);
  const toggle = useCallback((key: string) => {
    const cur = saved.get();
    saved.set(cur.includes(key) ? cur.filter((k) => k !== key) : [key, ...cur]);
  }, []);
  return { saved: list, isSaved: (key: string) => list.includes(key), toggle };
}

/* Theme: 'system' follows the OS; the inline script in index.html applies it before paint. */
export type ThemeChoice = 'system' | 'light' | 'dark';

function readTheme(): ThemeChoice {
  try {
    const t = localStorage.getItem('wop-theme');
    return t === 'light' || t === 'dark' ? t : 'system';
  } catch {
    return 'system';
  }
}

const theme = (() => {
  let value = readTheme();
  const listeners = new Set<() => void>();
  return {
    get: () => value,
    set(next: ThemeChoice) {
      value = next;
      try {
        if (next === 'system') localStorage.removeItem('wop-theme');
        else localStorage.setItem('wop-theme', next);
      } catch {
        /* ignore */
      }
      if (next === 'system') delete document.documentElement.dataset.theme;
      else document.documentElement.dataset.theme = next;
      listeners.forEach((l) => l());
    },
    subscribe(l: () => void) {
      listeners.add(l);
      return () => listeners.delete(l);
    },
  };
})();

export function useTheme() {
  const value = useSyncExternalStore(theme.subscribe, theme.get, theme.get);
  return { theme: value, setTheme: theme.set };
}

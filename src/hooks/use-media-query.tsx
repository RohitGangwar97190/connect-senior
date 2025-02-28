import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(query);
      const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

      mediaQuery.addEventListener('change', handler);
      setMatches(mediaQuery.matches);

      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [query]);

  return matches;
}


import { BRAND } from '../brand';
import { useEffect } from 'react';

/**
 * Custom hook to set document title dynamically.
 * Automatically appends " | Dozan WA" suffix.
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | ${BRAND.name}`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}

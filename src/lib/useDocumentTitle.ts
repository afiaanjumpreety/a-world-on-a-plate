import { useEffect } from 'react';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · A World on a Plate` : 'A World on a Plate';
  }, [title]);
}

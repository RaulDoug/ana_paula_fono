import React, { useEffect } from 'react';
import type { RouteSEO } from '../../data/seoData';
import { applyHead } from '../../lib/seo';

export const SEO: React.FC<{ seo: RouteSEO }> = ({ seo }) => {
  useEffect(() => {
    applyHead(seo);
  }, [seo]);
  return null;
};

import { SITE_NAME, OG_IMAGE } from '../data/siteConfig';
import { canonicalFor, type RouteSEO } from '../data/seoData';

export type HeadTag = { tag: 'meta' | 'link'; attrs: Record<string, string> };

export function buildHeadTags(seo: RouteSEO): HeadTag[] {
  const url = canonicalFor(seo.path);
  const m = (attrs: Record<string, string>): HeadTag => ({ tag: 'meta', attrs });
  const tags: HeadTag[] = [
    m({ name: 'description', content: seo.description }),
    m({ name: 'robots', content: seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' }),
    m({ property: 'og:type', content: 'website' }),
    m({ property: 'og:site_name', content: SITE_NAME }),
    m({ property: 'og:locale', content: 'pt_BR' }),
    m({ property: 'og:title', content: seo.title }),
    m({ property: 'og:description', content: seo.description }),
    m({ property: 'og:url', content: url }),
    m({ property: 'og:image', content: OG_IMAGE.url }),
    m({ property: 'og:image:width', content: String(OG_IMAGE.width) }),
    m({ property: 'og:image:height', content: String(OG_IMAGE.height) }),
    m({ property: 'og:image:alt', content: OG_IMAGE.alt }),
    m({ name: 'twitter:card', content: 'summary_large_image' }),
    m({ name: 'twitter:title', content: seo.title }),
    m({ name: 'twitter:description', content: seo.description }),
    m({ name: 'twitter:image', content: OG_IMAGE.url }),
  ];
  if (!seo.noindex) tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } });
  if (seo.preloadImage) {
    tags.push({ tag: 'link', attrs: { rel: 'preload', as: 'image', href: seo.preloadImage, type: 'image/webp', fetchpriority: 'high' } });
  }
  return tags;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const jsonLdString = (data: object) => JSON.stringify(data).replace(/</g, '\\u003c');

/** Usado pelo prerender (servidor). */
export function renderHeadString(seo: RouteSEO): string {
  const parts = [`<title>${esc(seo.title)}</title>`];
  for (const t of buildHeadTags(seo)) {
    const attrs = Object.entries(t.attrs).map(([k, v]) => `${k}="${esc(v)}"`).join(' ');
    parts.push(`<${t.tag} data-seo ${attrs} />`);
  }
  if (seo.jsonLd) parts.push(`<script data-seo type="application/ld+json">${jsonLdString(seo.jsonLd)}</script>`);
  return parts.join('\n    ');
}

/** Usado no navegador ao navegar entre rotas. */
export function applyHead(seo: RouteSEO): void {
  document.title = seo.title;
  document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
  for (const t of buildHeadTags(seo)) {
    const el = document.createElement(t.tag);
    el.setAttribute('data-seo', '');
    for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v);
    document.head.appendChild(el);
  }
  if (seo.jsonLd) {
    const s = document.createElement('script');
    s.setAttribute('data-seo', '');
    s.type = 'application/ld+json';
    s.textContent = jsonLdString(seo.jsonLd);
    document.head.appendChild(s);
  }
}

import { SITE_URL } from './siteConfig';
import { FAQ_ITEMS } from './faqData';
import {
  websiteSchema,
  clinicSchema,
  personSchema,
  servicesSchema,
  faqSchema,
  breadcrumbSchema,
  graph,
} from './schema';

export interface RouteSEO {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  preloadImage?: string;
  jsonLd?: object;
}

const base = [websiteSchema, clinicSchema, personSchema];

export const ROUTE_SEO = {
  home: {
    path: '/',
    title: 'Fonoaudióloga em Bom Despacho - MG | Azevedo Fonoaudiologia',
    description: 'Fonoaudióloga Ana Paula Azevedo no Centro de Bom Despacho - MG. Teste e adaptação de aparelhos auditivos, fono infantil e atendimento domiciliar. Agende.',
    preloadImage: '/images/foto_ana_paula.webp',
    jsonLd: graph(...base, faqSchema(FAQ_ITEMS.slice(0, 5))),
  },
  servicos: {
    path: '/servicos',
    title: 'Aparelhos Auditivos e Fono Domiciliar | Bom Despacho - MG',
    description: 'Teste e adaptação de aparelhos auditivos, fonoaudiologia domiciliar para idosos (disfagia, pós-AVC) e fono infantil em Bom Despacho - MG. Agende pelo WhatsApp.',
    jsonLd: graph(...base, ...servicesSchema, faqSchema(), breadcrumbSchema('Serviços', '/servicos')),
  },
  sobre: {
    path: '/sobre',
    title: 'Ana Paula Azevedo, Fonoaudióloga | Bom Despacho - MG',
    description: 'Conheça a fonoaudióloga Ana Paula Azevedo (CRFa 6-3588) e o consultório no Centro de Bom Despacho, em frente à VDM. Veja como chegar e agende sua consulta.',
    jsonLd: graph(...base, breadcrumbSchema('Sobre', '/sobre')),
  },
  notFound: {
    path: '/404',
    title: 'Página não encontrada | Azevedo Fonoaudiologia',
    description: 'A página procurada não existe. Acesse o início do site da Azevedo Fonoaudiologia em Bom Despacho - MG.',
    noindex: true,
  },
} satisfies Record<string, RouteSEO>;

export function getRouteSEO(url: string): RouteSEO {
  const path = url.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  return Object.values(ROUTE_SEO).find((r) => r.path === path) ?? ROUTE_SEO.notFound;
}

export const canonicalFor = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

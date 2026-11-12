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
    title: 'Fonoaudióloga em Bom Despacho - MG | Ana Paula Azevedo Ferreira',
    description: 'Fonoaudióloga Ana Paula Azevedo Ferreira (CRFa 6-3588) no Centro de Bom Despacho - MG. Especialista em aparelhos auditivos, fonoaudiologia infantil, disfagia e atendimento domiciliar. Agende: (37) 99943-9900.',
    preloadImage: '/images/foto_ana_paula.webp',
    jsonLd: graph(...base, faqSchema(FAQ_ITEMS.slice(0, 5))),
  },
  servicos: {
    path: '/servicos',
    title: 'Aparelhos Auditivos e Fonoaudiologia em Bom Despacho | Ana Paula Azevedo',
    description: 'Seleção e adaptação de aparelhos auditivos digitais, terapia fonoaudiológica infantil, tratamento de disfagia, voz e motricidade orofacial em Bom Despacho - MG.',
    jsonLd: graph(...base, ...servicesSchema, faqSchema(), breadcrumbSchema('Serviços', '/servicos')),
  },
  sobre: {
    path: '/sobre',
    title: 'Sobre Ana Paula Azevedo Ferreira | Fonoaudióloga em Bom Despacho - MG',
    description: 'Conheça a trajetória clínica da fonoaudióloga Ana Paula Azevedo Ferreira (CRFa 6-3588) e nossa estrutura na Rua do Rosário, 159, Centro de Bom Despacho - MG.',
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

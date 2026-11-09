import { CLINIC_INFO } from './clinicInfo';
import { FAQ_ITEMS } from './faqData';
import { SITE_URL, SITE_NAME, PHOTO_URL, LOGO_URL, OG_IMAGE } from './siteConfig';

const WEBSITE_ID = `${SITE_URL}/#website`;
const CLINIC_ID = `${SITE_URL}/#clinic`;
const PERSON_ID = `${SITE_URL}/#ana-paula`;

const address = {
  '@type': 'PostalAddress',
  streetAddress: CLINIC_INFO.address.street,
  addressLocality: CLINIC_INFO.address.city,
  addressRegion: CLINIC_INFO.address.state,
  postalCode: CLINIC_INFO.address.cep,
  addressCountry: 'BR',
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: ['Azevedo Fono', 'Fono Ana Paula Azevedo'],
  inLanguage: 'pt-BR',
  publisher: { '@id': CLINIC_ID },
};

export const clinicSchema = {
  '@type': 'MedicalClinic',
  '@id': CLINIC_ID,
  name: CLINIC_INFO.name,
  legalName: CLINIC_INFO.legalName,
  taxID: CLINIC_INFO.cnpj,
  url: `${SITE_URL}/`,
  telephone: CLINIC_INFO.phoneSchema,
  email: CLINIC_INFO.email,
  image: [PHOTO_URL, OG_IMAGE.url],
  logo: LOGO_URL,
  address,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CLINIC_INFO.coordinates.lat,
    longitude: CLINIC_INFO.coordinates.lng,
  },
  hasMap: CLINIC_INFO.googleMapsUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Bom Despacho',
    containedInPlace: { '@type': 'State', name: 'Minas Gerais' },
  },
  medicalSpecialty: 'SpeechPathology',
  priceRange: '$$',
  employee: { '@id': PERSON_ID },
  sameAs: [CLINIC_INFO.instagram.url],
};

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: CLINIC_INFO.doctorName,
  jobTitle: 'Fonoaudióloga',
  image: PHOTO_URL,
  worksFor: { '@id': CLINIC_ID },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Registro profissional',
    name: CLINIC_INFO.crfa,
    recognizedBy: { '@type': 'Organization', name: 'Conselho Regional de Fonoaudiologia - 6ª Região' },
  },
  sameAs: [CLINIC_INFO.instagram.url],
};

export const servicesSchema = [
  { name: 'Teste e adaptação de aparelhos auditivos', description: 'Seleção, testes e calibração computadorizada de aparelhos auditivos modernos com Bluetooth.' },
  { name: 'Fonoaudiologia domiciliar para idosos', description: 'Manejo da disfagia, prevenção de engasgos e reabilitação pós-AVC no conforto da residência.' },
  { name: 'Fonoaudiologia infantil e linguagem', description: 'Estimulação precoce, trocas na fala e dificuldades escolares com intervenção lúdica.' },
].map((s) => ({
  '@type': 'Service',
  ...s,
  provider: { '@id': CLINIC_ID },
  areaServed: { '@type': 'City', name: 'Bom Despacho' },
}));

export function faqSchema(items = FAQ_ITEMS) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function breadcrumbSchema(name: string, path: string) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

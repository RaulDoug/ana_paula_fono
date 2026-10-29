import React from 'react';
import { SEO } from '../components/shared/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { CredentialsBar } from '../components/home/CredentialsBar';
import { PillarsSection } from '../components/home/PillarsSection';
import { DysphagiaChecklist } from '../components/home/DysphagiaChecklist';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { BioPreview } from '../components/home/BioPreview';
import { FAQSection } from '../components/home/FAQSection';
import { CTASection } from '../components/home/CTASection';
import { CLINIC_INFO } from '../data/clinicInfo';

export const HomePage: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://azevedofonoaudiologia.com.br/#clinic",
    "name": CLINIC_INFO.name,
    "legalName": CLINIC_INFO.legalName,
    "taxID": CLINIC_INFO.cnpj,
    "telephone": "+55-37-9943-9900",
    "email": CLINIC_INFO.email,
    "url": "https://azevedofonoaudiologia.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CLINIC_INFO.address.street,
      "addressLocality": CLINIC_INFO.address.city,
      "addressRegion": CLINIC_INFO.address.state,
      "postalCode": CLINIC_INFO.address.cep,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.7358,
      "longitude": -45.2536
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "medicalSpecialty": "SpeechPathology",
    "priceRange": "$$",
    "sameAs": [CLINIC_INFO.instagram.url]
  };

  return (
    <>
      <SEO
        title="Azevedo Fonoaudiologia | Aparelhos Auditivos e Atendimento em Bom Despacho - MG"
        description="Clínica de fonoaudiologia no Centro de Bom Despacho - MG. Especialista em testes e adaptação de aparelhos auditivos, fonoaudiologia clínica e home care para idosos."
        canonical="https://azevedofonoaudiologia.com.br/"
        jsonLd={jsonLd}
      />

      <HeroSection />
      <CredentialsBar />
      <PillarsSection />
      <DysphagiaChecklist />
      <ServicesGrid />
      <BioPreview />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default HomePage;


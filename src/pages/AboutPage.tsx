import React from 'react';
import { SEO } from '../components/shared/SEO';
import { AboutHero } from '../components/about/AboutHero';
import { DoctorProfile } from '../components/about/DoctorProfile';
import { ClinicStructure } from '../components/about/ClinicStructure';
import { LocationSection } from '../components/about/LocationSection';
import { CTASection } from '../components/home/CTASection';
import { CLINIC_INFO } from '../data/clinicInfo';

export const AboutPage: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": CLINIC_INFO.name,
    "legalName": CLINIC_INFO.legalName,
    "url": "https://azevedofonoaudiologia.com.br/sobre",
    "telephone": "+55-37-9943-9900",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CLINIC_INFO.address.street,
      "addressLocality": CLINIC_INFO.address.city,
      "addressRegion": CLINIC_INFO.address.state,
      "postalCode": CLINIC_INFO.address.cep,
      "addressCountry": "BR"
    },
    "founder": {
      "@type": "Person",
      "name": CLINIC_INFO.doctorName,
      "jobTitle": "Fonoaudióloga",
      "identifier": CLINIC_INFO.crfa
    }
  };

  return (
    <>
      <SEO
        title="Sobre Ana Paula Azevedo | Fonoaudiologia no Centro de Bom Despacho"
        description="Conheça Ana Paula Azevedo, a infraestrutura do consultório no Centro de Bom Despacho (em frente à VDM) e solicite sua rota GPS ou atendimento domiciliar."
        canonical="https://azevedofonoaudiologia.com.br/sobre"
        jsonLd={jsonLd}
      />

      <AboutHero />
      <DoctorProfile />
      <ClinicStructure />
      <LocationSection />
      <CTASection />
    </>
  );
};

export default AboutPage;


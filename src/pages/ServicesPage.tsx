import React from 'react';
import { SEO } from '../components/shared/SEO';
import { ServicesHero } from '../components/services/ServicesHero';
import { HearingAidsDetail } from '../components/services/HearingAidsDetail';
import { HomeCareDetail } from '../components/services/HomeCareDetail';
import { ClinicalTreatments } from '../components/services/ClinicalTreatments';
import { Accordion } from '../components/ui/Accordion';
import { SectionHeading } from '../components/shared/SectionHeading';
import { CTASection } from '../components/home/CTASection';
import { FAQ_ITEMS } from '../data/faqData';
import { CLINIC_INFO } from '../data/clinicInfo';

export const ServicesPage: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": CLINIC_INFO.name,
    "url": "https://azevedofonoaudiologia.com.br/servicos",
    "telephone": "+55-37-9943-9900",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CLINIC_INFO.address.street,
      "addressLocality": CLINIC_INFO.address.city,
      "addressRegion": CLINIC_INFO.address.state,
      "postalCode": CLINIC_INFO.address.cep,
      "addressCountry": "BR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Fonoaudiologia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Venda e Adaptação de Aparelhos Auditivos",
            "description": "Seleção, testes e calibração computadorizada de próteses auditivas modernas com Bluetooth."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fonoaudiologia Domiciliar para Idosos (Home Care)",
            "description": "Manejo da disfagia, prevenção de engasgos e reabilitação pós-AVC no conforto da residência."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fonoaudiologia Infantil e Linguagem",
            "description": "Estimulação precoce, trocas na fala e dificuldades escolares com intervenção lúdica."
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Serviços Fonoaudiológicos | Aparelhos Auditivos e Home Care em Bom Despacho"
        description="Reabilitação auditiva, adaptação de próteses, tratamento de disfagia em idosos e terapia da fala infantil na Azevedo Fonoaudiologia em Bom Despacho - MG."
        canonical="https://azevedofonoaudiologia.com.br/servicos"
        jsonLd={jsonLd}
      />

      <ServicesHero />
      <HearingAidsDetail />
      <HomeCareDetail />
      <ClinicalTreatments />

      {/* FAQ specific section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Dúvidas dos Pacientes"
          title="Perguntas Frequentes sobre"
          titleHighlight="os Tratamentos"
          subtitle="Tire suas dúvidas sobre avaliações, testes de aparelhos e consultas domiciliares."
          centered
          className="mb-12"
        />
        <Accordion items={FAQ_ITEMS} defaultOpenIndex={0} allowMultiple />
      </section>

      <CTASection />
    </>
  );
};

export default ServicesPage;


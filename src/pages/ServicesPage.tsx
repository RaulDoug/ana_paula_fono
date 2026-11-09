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
import { ROUTE_SEO } from '../data/seoData';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO seo={ROUTE_SEO.servicos} />

      <ServicesHero />
      <HearingAidsDetail />
      <HomeCareDetail />
      <ClinicalTreatments />

      {/* FAQ specific section */}
      <section id="faq" className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
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

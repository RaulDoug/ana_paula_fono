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
import { ROUTE_SEO } from '../data/seoData';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO seo={ROUTE_SEO.home} />

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

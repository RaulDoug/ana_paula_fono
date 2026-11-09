import React from 'react';
import { SEO } from '../components/shared/SEO';
import { AboutHero } from '../components/about/AboutHero';
import { DoctorProfile } from '../components/about/DoctorProfile';
import { ClinicStructure } from '../components/about/ClinicStructure';
import { LocationSection } from '../components/about/LocationSection';
import { CTASection } from '../components/home/CTASection';
import { ROUTE_SEO } from '../data/seoData';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO seo={ROUTE_SEO.sobre} />

      <AboutHero />
      <DoctorProfile />
      <ClinicStructure />
      <LocationSection />
      <CTASection />
    </>
  );
};

export default AboutPage;

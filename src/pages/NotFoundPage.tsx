import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/shared/SEO';
import { ROUTE_SEO } from '../data/seoData';

export const NotFoundPage: React.FC = () => (
  <>
    <SEO seo={ROUTE_SEO.notFound} />
    <section className="py-32 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
      <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A3E39]">Página não encontrada</h1>
      <p className="text-[#596567] text-lg">O endereço acessado não existe ou foi alterado.</p>
      <div className="flex flex-wrap justify-center gap-4 text-[#0A3E39] font-semibold">
        <Link to="/" className="underline underline-offset-4">Início</Link>
        <Link to="/servicos" className="underline underline-offset-4">Serviços</Link>
        <Link to="/sobre" className="underline underline-offset-4">Sobre</Link>
      </div>
    </section>
  </>
);

export default NotFoundPage;

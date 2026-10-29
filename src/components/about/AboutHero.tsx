import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const AboutHero: React.FC = () => {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-[#F4F1EA]/60 border-b border-[#E2DDD5]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#596567] mb-6 font-medium">
          <Link to="/" className="hover:text-[#0A3E39] transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E2DDD5]" />
          <span className="text-[#0A3E39] font-semibold">Sobre a Clínica & Contato</span>
        </nav>

        <div className="max-w-3xl flex flex-col gap-4">
          <Badge variant="sage" icon={<Award className="w-4 h-4 text-[#0A3E39]" />}>
            Trajetória Clínica & Dedicação Humanizada
          </Badge>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A3E39] tracking-tight leading-tight">
            Azevedo Fonoaudiologia: Ciência, Empatia e Dedicação
          </h1>

          <p className="text-base sm:text-lg text-[#596567] leading-relaxed">
            Conheça nossa proposta de cuidado, nossa estrutura física acolhedora no Centro de Bom Despacho (em frente à VDM) e nosso compromisso com a sua saúde.
          </p>
        </div>
      </div>
    </section>
  );
};

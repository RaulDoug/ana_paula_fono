import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Award } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { Badge } from '../ui/Badge';

export const ServicesHero: React.FC = () => {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-[#F4F1EA]/60 border-b border-[#E2DDD5]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#596567] mb-6 font-medium">
          <Link to="/" className="hover:text-[#0A3E39] transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E2DDD5]" />
          <span className="text-[#0A3E39] font-semibold">Serviços Especializados</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <Badge variant="sage" icon={<ShieldCheck className="w-4 h-4 text-[#10B981]" />}>
              Atendimento Clínico & Domiciliar • Bom Despacho - MG
            </Badge>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A3E39] tracking-tight leading-tight">
              Tratamentos e Soluções Fonoaudiológicas
            </h1>

            <p className="text-base sm:text-lg text-[#596567] leading-relaxed max-w-2xl">
              Conheça em detalhes nossos protocolos de adaptação auditiva, atendimento domiciliar especializado para idosos e fonoterapia clínica no Centro de Bom Despacho.
            </p>
          </div>

          <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-[#E2DDD5]/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0A3E39] text-[#10B981] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-[#596567] font-semibold">
                Responsável Técnica
              </span>
              <span className="font-serif text-base font-bold text-[#0A3E39]">
                {CLINIC_INFO.doctorName}
              </span>
              <span className="text-xs text-[#165E57] font-medium">
                {CLINIC_INFO.crfa} • Bom Despacho
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


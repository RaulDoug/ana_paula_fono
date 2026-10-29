import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Smile, Mic, ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { CLINICAL_SERVICES } from '../../data/servicesData';
import { getWhatsAppUrl } from '../../data/clinicInfo';

export const ServicesGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return <Baby className="w-6 h-6 text-[#0A3E39]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#0A3E39]" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-[#0A3E39]" />;
      default:
        return <Smile className="w-6 h-6 text-[#0A3E39]" />;
    }
  };

  return (
    <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        badge="Consultório Especializado"
        title="Tratamentos Clínicos"
        titleHighlight="em Bom Despacho"
        subtitle="Intervenções terapêuticas personalizadas para cada etapa da vida, no Centro de Bom Despacho."
        centered
        className="mb-14"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {CLINICAL_SERVICES.map((service) => (
          <Card key={service.id} className="p-6 sm:p-7 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F1EE] flex items-center justify-center">
                {getIcon(service.icon)}
              </div>

              <h3 className="font-serif text-xl font-bold text-[#0A3E39]">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#596567] leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="pt-2 flex flex-col gap-1.5 border-t border-[#E2DDD5]/60">
                {service.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#1F292B]">
                    <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2DDD5]/60 mt-6 flex items-center justify-between">
              <a
                href={getWhatsAppUrl(service.ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#165E57] hover:text-[#0A3E39] hover:underline flex items-center gap-1"
              >
                <span>Agendar consulta</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/servicos"
                className="text-xs text-[#596567] hover:text-[#0A3E39] font-medium"
              >
                Ver detalhes →
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          variant="sand"
          size="md"
          href="/servicos"
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
        >
          Ver todos os procedimentos e protocolos clínicos
        </Button>
      </div>
    </section>
  );
};


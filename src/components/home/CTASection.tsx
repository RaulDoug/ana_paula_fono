import React from 'react';
import { MessageCircle, PhoneCall, MapPin } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../../data/clinicInfo';
import { Button } from '../ui/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#0A3E39] text-white py-16 sm:py-20 relative overflow-hidden my-12">
      {/* Subtle organic light circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#165E57] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#10B981]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center gap-6">
        <span className="text-xs uppercase tracking-wider text-[#10B981] font-semibold bg-[#165E57]/60 px-4 py-1.5 rounded-full border border-[#10B981]/30">
          Atendimentos em Bom Despacho & Domiciliar
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl leading-tight">
          Pronto para cuidar da sua audição e comunicação?
        </h2>

        <p className="text-sm sm:text-base text-[#E8F1EE]/90 max-w-xl leading-relaxed">
          Entre em contato direto com <strong>Ana Paula Azevedo</strong> e esclareça suas dúvidas sobre consultas, exames, testes de aparelhos auditivos ou visitas domiciliares em Bom Despacho.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
          <Button
            variant="emerald"
            size="lg"
            href={getWhatsAppUrl("Olá, Ana Paula! Acessei seu site e gostaria de agendar uma avaliação fonoaudiológica.")}
            target="_blank"
            rel="noopener noreferrer"
            icon={<MessageCircle className="w-5 h-5" />}
          >
            Falar pelo WhatsApp Agora
          </Button>

          <Button
            variant="outline"
            size="lg"
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            icon={<PhoneCall className="w-4 h-4" />}
            className="border-white/40 text-white hover:bg-white/10"
          >
            Ligar para {CLINIC_INFO.phoneDisplay}
          </Button>
        </div>

        <div className="pt-4 flex items-center gap-2 text-xs text-[#E8F1EE]/70">
          <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Consultório no Centro: {CLINIC_INFO.address.street} ({CLINIC_INFO.address.landmark})</span>
        </div>
      </div>
    </section>
  );
};


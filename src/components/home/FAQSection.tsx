import React from 'react';
import { HelpCircle } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { FAQ_ITEMS } from '../../data/faqData';
import { getWhatsAppUrl } from '../../data/clinicInfo';
import { Button } from '../ui/Button';

export const FAQSection: React.FC = () => {
  const topFaqs = FAQ_ITEMS.slice(0, 5);

  return (
    <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
      <SectionHeading
        badge="Dúvidas Frequentes"
        badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-[#0A3E39]" />}
        title="Perguntas Frequentes sobre"
        titleHighlight="Consultas & Atendimentos"
        subtitle="Reunimos os esclarecimentos mais comuns trazidos por pacientes e familiares em nosso consultório em Bom Despacho."
        centered
        className="mb-12"
      />

      <Accordion items={topFaqs} defaultOpenIndex={0} />

      <div className="mt-10 p-6 rounded-2xl bg-[#E8F1EE]/60 border border-[#0A3E39]/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col text-center sm:text-left">
          <span className="font-semibold text-sm text-[#0A3E39]">
            Ainda ficou com alguma dúvida específica?
          </span>
          <span className="text-xs text-[#596567]">
            Fale diretamente com nossa recepção pelo WhatsApp e receba orientações rápidas.
          </span>
        </div>

        <Button
          variant="primary"
          size="sm"
          href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre os serviços da clínica.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tirar Dúvida no WhatsApp
        </Button>
      </div>
    </section>
  );
};


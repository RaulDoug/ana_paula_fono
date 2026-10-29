import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckSquare, Square, MessageCircle, Send } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { CLINIC_INFO } from '../../data/clinicInfo';

interface SymptomOption {
  id: string;
  label: string;
  detail: string;
}

export const DysphagiaChecklist: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const symptoms: SymptomOption[] = [
    {
      id: "tosse-agua",
      label: "Tosse ou engasgo ao beber água",
      detail: "Pigarro persistente durante ou logo após ingerir líquidos",
    },
    {
      id: "voz-molhada",
      label: "Voz 'molhada' ou rouca após as refeições",
      detail: "Indício de resíduo alimentar próximo às cordas vocais",
    },
    {
      id: "demora-comer",
      label: "Tempo excessivo para comer ou cansaço",
      detail: "Dificuldade na mastigação ou propulsão do alimento",
    },
    {
      id: "remedios",
      label: "Dificuldade para engolir remédios e cápsulas",
      detail: "Sensação frequente de medicamento preso na garganta",
    },
    {
      id: "perda-peso",
      label: "Perda de peso progressiva sem causa aparente",
      detail: "Recusa de alimentos mais secos por receio de engasgar",
    },
    {
      id: "pos-avc",
      label: "Histórico recente de AVC ou quadro neurológico",
      detail: "Necessidade de reabilitação motora e readaptação de consistência",
    },
  ];

  const toggleSymptom = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCustomWhatsAppLink = () => {
    if (selectedIds.length === 0) {
      const msg = "Olá, Dra. Ana Paula! Gostaria de tirar dúvidas sobre o atendimento fonoaudiológico domiciliar para um familiar idoso.";
      return `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
    }

    const selectedLabels = symptoms
      .filter((s) => selectedIds.includes(s.id))
      .map((s) => `- ${s.label}`)
      .join('\n');

    const msg = `Olá, Dra. Ana Paula! Fiz o teste no site e notei que meu familiar apresenta os seguintes sinais:\n${selectedLabels}\n\nGostaria de entender como funciona a avaliação domiciliar em Bom Despacho.`;
    return `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="py-16 bg-[#F4F1EA]/60 border-y border-[#E2DDD5]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Card className="p-6 sm:p-10 border-[#0A3E39]/15 shadow-md">
          <div className="flex flex-col gap-3 text-center items-center mb-8">
            <Badge variant="sage" icon={<AlertTriangle className="w-3.5 h-3.5 text-[#0A3E39]" />}>
              Triagem Rápida para Famílias
            </Badge>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3E39]">
              Seu familiar idoso apresenta algum destes sinais ao se alimentar?
            </h3>

            <p className="text-sm text-[#596567] max-w-xl">
              Engasgos frequentes não são normais do envelhecimento e podem causar pneumonia aspirativa. Selecione os itens que você já observou:
            </p>
          </div>

          {/* Interactive Checkbox Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {symptoms.map((symptom) => {
              const isChecked = selectedIds.includes(symptom.id);
              return (
                <motion.div
                  key={symptom.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 select-none flex items-start gap-3 ${
                    isChecked
                      ? 'bg-[#E8F1EE] border-[#0A3E39] shadow-sm'
                      : 'bg-white border-[#E2DDD5]/80 hover:border-[#0A3E39]/30'
                  }`}
                >
                  <div className="mt-0.5 text-[#0A3E39] shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-[#10B981]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#E2DDD5]" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs sm:text-sm text-[#0A3E39] leading-tight">
                      {symptom.label}
                    </span>
                    <span className="text-[11px] text-[#596567] mt-1 leading-snug">
                      {symptom.detail}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic Action Box */}
          <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#E2DDD5]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#10B981]/15 text-[#059669] flex items-center justify-center shrink-0 hidden sm:flex">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs sm:text-sm text-[#0A3E39]">
                  {selectedIds.length > 0
                    ? `${selectedIds.length} ${selectedIds.length === 1 ? 'sinal selecionado' : 'sinais selecionados'}`
                    : 'Nenhum sinal marcado ainda'}
                </span>
                <span className="text-xs text-[#596567]">
                  {selectedIds.length > 0
                    ? 'Clique abaixo para enviar os sinais direto para a Dra. Ana Paula'
                    : 'Tire dúvidas preventivas diretamente com a especialista'}
                </span>
              </div>
            </div>

            <a
              href={getCustomWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-[0_4px_14px_rgba(16,185,129,0.3)] transition-all active:scale-[0.98]"
            >
              <span>Enviar Avaliação pelo WhatsApp</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};


import React from 'react';
import { Ear, Bluetooth, BatteryCharging, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { getWhatsAppUrl } from '../../data/clinicInfo';

export const HearingAidsDetail: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Avaliação Audiológica e Estudo de Caso",
      desc: "Entendimento minucioso do perfil de perda auditiva através da audiometria recente e das rotinas diárias do paciente (trabalho, família, TV)."
    },
    {
      num: "2",
      title: "Teste Prático com o Dispositivo no Lar",
      desc: "Experimentação do aparelho ajustado em ambiente real de escuta, permitindo sentir a nitidez sonora antes da aquisição definitiva."
    },
    {
      num: "3",
      title: "Adaptação e Acompanhamento Contínuo",
      desc: "Retornos periódicos para refinamento dos canais de frequência, orientações de higiene e garantia de conforto absoluto no Centro de Bom Despacho."
    }
  ];

  return (
    <section id="aparelhos-auditivos" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Badge variant="sage" icon={<Ear className="w-3.5 h-3.5 text-[#0A3E39]" />}>
            Reabilitação da Audição
          </Badge>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A3E39] leading-tight">
            Reabilitação Auditiva e Tecnologia para Ouvir Bem
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#596567] leading-relaxed">
            <p>
              A perda auditiva gradual afeta não apenas a audição, mas também a participação nas conversas em família, o convívio social e a saúde cognitiva. Na <strong>Azevedo Fonoaudiologia</strong>, o processo de indicação de próteses é feito com paciência, testes práticos e calibragem digital exata para o seu grau de necessidade.
            </p>
            <p>
              Trabalhamos com dispositivos modernos e ergonômicos dotados de redução ativa de ruído de fundo, clareza vocal e conexão direta com a televisão e celular via Bluetooth.
            </p>
          </div>

          {/* Stepper / Timeline */}
          <div className="flex flex-col gap-4 pt-2">
            <h3 className="font-serif text-lg font-bold text-[#0A3E39]">
              Etapas do Processo de Adaptação:
            </h3>

            <div className="flex flex-col gap-3">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="p-4 rounded-2xl bg-white border border-[#E2DDD5]/80 flex items-start gap-4 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0A3E39] text-[#10B981] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-[#0A3E39]">
                      {step.title}
                    </span>
                    <span className="text-xs sm:text-sm text-[#596567] mt-0.5 leading-relaxed">
                      {step.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Button
              variant="emerald"
              size="lg"
              href={getWhatsAppUrl("Olá, Dra. Ana Paula! Gostaria de informações sobre o teste e adaptação de aparelhos auditivos.")}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Solicitar teste de aparelho auditivo
            </Button>
          </div>
        </div>

        {/* Right Side: Feature Highlights Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Card className="p-8 bg-[#F4F1EA] border-[#E2DDD5]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0A3E39] text-[#10B981] flex items-center justify-center">
                  <Bluetooth className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A3E39]">
                    Conectividade & Precisão
                  </h4>
                  <span className="text-xs text-[#596567]">Tecnologia moderna e discreta</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E2DDD5]/70">
                  <BatteryCharging className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-[#0A3E39] block">100% Recarregável</span>
                    <span className="text-xs text-[#596567]">Livre de pilhas descartáveis, com estojo carregador portátil.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E2DDD5]/70">
                  <Bluetooth className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-[#0A3E39] block">Conexão Bluetooth Direta</span>
                    <span className="text-xs text-[#596567]">Ouça ligações telefônicas, áudios e sua TV direto no aparelho.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E2DDD5]/70">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-[#0A3E39] block">Ajustes Computadorizados</span>
                    <span className="text-xs text-[#596567]">Regulagem de frequências milimétrica feita no consultório.</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#E8F1EE] p-4 rounded-xl border border-[#0A3E39]/10 text-xs text-[#0A3E39] leading-relaxed">
                <strong>Garantia e Suporte Local:</strong> Você conta com a segurança de ter assistência técnica, revisões e ajustes bem no Centro de Bom Despacho, sem necessidade de deslocamento para outras cidades.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};


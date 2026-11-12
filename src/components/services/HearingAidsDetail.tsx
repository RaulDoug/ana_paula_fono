import React from 'react';
import { Ear, Bluetooth, BatteryCharging, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
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
            Venda e Adaptação de Aparelhos Auditivos Digitais em Bom Despacho
          </h2>

          <div className="space-y-3 text-sm sm:text-base text-[#596567] leading-relaxed">
            <p className="font-semibold text-base sm:text-lg text-[#0A3E39]">
              Reabilitação auditiva completa, personalizada e acolhedora no Centro de Bom Despacho.
            </p>
            <p>
              No consultório da Azevedo Fonoaudiologia, localizado na Rua do Rosário, 159, Centro (em frente à VDM), conduzimos a seleção e adaptação de próteses auditivas digitais de última geração. Analisamos minuciosamente a sua audiometria recente e o seu estilo de vida para prescrever a tecnologia mais indicada, oferecendo também suporte em domicílio em Bom Despacho para pacientes com dificuldade de locomoção.
            </p>
            <p>
              Nossos aparelhos contam com conectividade Bluetooth direta (iOS e Android), baterias recarregáveis de longa duração, microfones direcionais com inteligência artificial e redução automática de ruídos, devolvendo o prazer de conversar em família e assistir TV com clareza sonora.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#E8F1EE]/70 border border-[#0A3E39]/15 flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase text-[#0A3E39]">
              <span>Em parceria com a</span>
              <a
                href="https://www.ouvircommavi.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#165E57] hover:text-[#0A3E39] underline decoration-[#10B981] decoration-2 underline-offset-2 inline-flex items-center gap-1 transition-colors"
              >
                MAVÍ
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-[#596567] leading-relaxed">
              Realizamos avaliações, testes e adaptações com tecnologia avançada e acompanhamento fonoaudiológico individualizado, respeitando as necessidades de cada paciente.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A3E39] bg-[#F4F1EA] px-3.5 py-2 rounded-xl border border-[#E2DDD5] w-fit">
            <Sparkles className="w-4 h-4 text-[#10B981] shrink-0" />
            <span>Experimente os benefícios da tecnologia no seu dia a dia.</span>
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
              href={getWhatsAppUrl("Olá, Ana Paula! Gostaria de informações sobre o teste e adaptação de aparelhos auditivos.")}
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


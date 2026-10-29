import React from 'react';
import { Home, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { getWhatsAppUrl } from '../../data/clinicInfo';

export const HomeCareDetail: React.FC = () => {
  const warningSigns = [
    "Tosse, pigarro persistente ou voz 'molhada' durante ou logo após as refeições",
    "Engasgos frequentes ao beber água ou ingerir alimentos secos",
    "Dificuldade repetida para engolir medicamentos e cápsulas",
    "Tempo excessivo para finalizar um prato ou perda progressiva de peso",
    "Recusa alimentar súbita ou medo manifestado na hora de comer",
  ];

  return (
    <section id="home-care" className="py-16 bg-[#E8F1EE]/40 border-y border-[#E2DDD5]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side: Summary Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6">
            <Card className="p-8 bg-white border-[#0A3E39]/15 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0A3E39] text-[#10B981] flex items-center justify-center">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A3E39]">
                    Fonoaudiologia Domiciliar
                  </h4>
                  <span className="text-xs text-[#596567]">Bom Despacho e região urbana</span>
                </div>
              </div>

              <div className="space-y-3.5 mb-6">
                <span className="text-xs uppercase tracking-wider text-[#0A3E39] font-bold block">
                  Benefícios do Atendimento no Lar:
                </span>

                {[
                  "Avaliação postural durante a refeição real em casa",
                  "Adaptação de consistências (pastosos, espessados, sólidos)",
                  "Treinamento prático para familiares e cuidadores",
                  "Prevenção rigorosa de broncoaspirações pulmonares",
                  "Acompanhamento em quadros de AVC, Parkinson e Alzheimer",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1F292B]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD5] text-xs text-[#596567] leading-relaxed">
                <strong>Sem filas ou cansaço de locomoção:</strong> Levamos todos os instrumentais clínicos e o carinho terapêutico até a residência, promovendo a dignidade do paciente idoso.
              </div>
            </Card>
          </div>

          {/* Right Side: Editorial Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <Badge variant="sage" icon={<Home className="w-3.5 h-3.5 text-[#0A3E39]" />}>
              Gerontologia & Deglutição
            </Badge>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A3E39] leading-tight">
              Atendimento Geriátrico e Tratamento de Disfagia em Domicílio
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#596567] leading-relaxed">
              <p>
                A deglutição segura é fundamental para a manutenção da vida e da dignidade na terceira idade. Condições associadas ao envelhecimento, sequelas de Acidente Vascular Cerebral (AVC) ou distúrbios neurodegenerativos (Doença de Parkinson, Alzheimer) com frequência causam <strong>disfagia</strong> — a perda da capacidade de engolir alimentos, líquidos e até saliva com proteção pulmonar adequada.
              </p>
              <p>
                O atendimento domiciliar em Bom Despacho proporciona avaliação precisa sem o estresse ou cansaço de deslocamento para o idoso e seus familiares. Analisamos a postura na refeição, adequamos a consistência dos alimentos e orientamos cuidadores e familiares sobre medidas protetivas contra broncoaspirações.
              </p>
            </div>

            {/* Warning Signs Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2DDD5]/80 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B91C1C]">
                <AlertCircle className="w-4 h-4 text-[#B91C1C]" />
                <span>Sinais de Alerta para Avaliação Imediata:</span>
              </div>

              <div className="flex flex-col gap-2">
                {warningSigns.map((sign, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1F292B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] mt-2 shrink-0" />
                    <span>{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                href={getWhatsAppUrl("Olá, Ana Paula! Vi que você atende em domicílio e gostaria de saber como funciona a visita para um familiar idoso.")}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Agendar visita domiciliar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { Ear, Home, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { getWhatsAppUrl } from '../../data/clinicInfo';

export const PillarsSection: React.FC = () => {
  return (
    <section id="pilares-principais" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        badge="Diferenciais de Autoridade"
        title="Duas Especialidades de Alto Impacto"
        titleHighlight="na Sua Qualidade de Vida"
        subtitle="Soluções desenvolvidas sob medida para devolver a segurança, a nitidez dos sons e o prazer da convivência familiar."
        centered
        className="mb-14"
      />

      <div className="flex flex-col gap-10">
        {/* Pillar 1: Hearing aids */}
        <Card className="p-6 sm:p-10 border-[#0A3E39]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual / Highlights Side */}
            <div className="lg:col-span-5 bg-[#F4F1EA] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[320px] border border-[#E2DDD5]/70 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#10B981]/10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#0A3E39] text-[#FDFCF9] flex items-center justify-center shadow-sm">
                  <Ear className="w-6 h-6 text-[#10B981]" />
                </div>
                <Badge variant="emerald">Tecnologia Avançada</Badge>
              </div>

              <div className="my-6 z-10">
                <span className="text-xs uppercase tracking-wider text-[#596567] font-semibold">
                  Reabilitação Auditiva
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0A3E39] mt-1">
                  Aparelhos Auditivos Digitais
                </h3>
                <p className="text-xs text-[#596567] mt-2 leading-relaxed">
                  Dispositivos quase imperceptíveis, com redução automática de ruídos, som cristalino e conexão Bluetooth direta para celular e televisão.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-[#E2DDD5]/80 text-xs text-[#0A3E39] font-medium z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>Teste prático no conforto do seu dia a dia</span>
              </div>
            </div>

            {/* Description & Bullets Side */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3E39] leading-tight">
                Venda e Adaptação Assistida de Aparelhos Auditivos
              </h4>

              <p className="text-sm sm:text-base text-[#596567] leading-relaxed">
                Recupere a nitidez das conversas e os sons da vida diária com tecnologia de ponta. Na Azevedo Fonoaudiologia, realizamos testes práticos com dispositivos modernos e ergonômicos, oferecendo calibração computadorizada personalizada conforme a sua audiometria e acompanhamento próximo no Centro de Bom Despacho.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Testagem prática antes da escolha final",
                  "Modelos recarregáveis (sem troca de pilhas)",
                  "Conectividade Bluetooth direta para celular e TV",
                  "Acompanhamento contínuo e suporte local no Centro",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F292B]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="emerald"
                  size="md"
                  href={getWhatsAppUrl("Olá, Ana Paula! Gostaria de informações sobre o teste e adaptação de aparelhos auditivos.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Saiba mais sobre os aparelhos
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Pillar 2: Home Care for seniors */}
        <Card className="p-6 sm:p-10 border-[#0A3E39]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Description & Bullets Side */}
            <div className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1">
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3E39] leading-tight">
                Fonoaudiologia Geriátrica no Conforto do Lar (Home Care)
              </h4>

              <p className="text-sm sm:text-base text-[#596567] leading-relaxed">
                Assistência fonoaudiológica humanizada voltada a idosos no conforto e tranquilidade de sua residência. Realizamos avaliação e reabilitação preventiva de engasgos, tosse recorrente e dificuldades de engolir (disfagia), prevenindo broncoaspirações e garantindo refeições seguras com todo o acolhimento para o idoso e sua família.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Avaliação minuciosa da alimentação e consistências",
                  "Reabilitação pós-AVC e condições neurológicas",
                  "Treinamento e suporte direto para cuidadores e familiares",
                  "Prevenção eficaz de pneumonias aspirativas",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F292B]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href={getWhatsAppUrl("Olá, Ana Paula! Vi que você atende em domicílio e gostaria de saber como funciona a visita para um familiar idoso.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Solicitar visita domiciliar
                </Button>
              </div>
            </div>

            {/* Visual / Highlights Side */}
            <div className="lg:col-span-5 bg-[#E8F1EE] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[320px] border border-[#0A3E39]/10 relative overflow-hidden order-1 lg:order-2">
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#0A3E39]/10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#0A3E39] text-[#FDFCF9] flex items-center justify-center shadow-sm">
                  <Home className="w-6 h-6 text-[#10B981]" />
                </div>
                <Badge variant="teal">Atendimento Domiciliar</Badge>
              </div>

              <div className="my-6 z-10">
                <span className="text-xs uppercase tracking-wider text-[#165E57] font-semibold">
                  Acolhimento Familiar
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0A3E39] mt-1">
                  Home Care em Bom Despacho
                </h3>
                <p className="text-xs text-[#596567] mt-2 leading-relaxed">
                  Avaliação da rotina alimentar real sem o desgaste de locomoção, orientação sobre posturas seguras e acompanhamento próximo.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-[#E2DDD5]/80 text-xs text-[#0A3E39] font-medium z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>Tranquilidade para os filhos e segurança para o idoso</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};


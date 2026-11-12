import React from 'react';
import { Baby, Smile, Brain, CheckCircle2, MessageCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { getWhatsAppUrl } from '../../data/clinicInfo';

export const ClinicalTreatments: React.FC = () => {
  const treatments = [
    {
      id: "infantil",
      title: "Fonoaudiologia Infantil e Tratamento do Atraso de Fala em Bom Despacho",
      badge: "Infantil & Escolar",
      icon: <Baby className="w-6 h-6 text-[#0A3E39]" />,
      desc: "Avaliação diagnóstica e intervenção precoce conduzidas no consultório no Centro de Bom Despacho. Atendemos crianças com atraso no desenvolvimento da fala, trocas fonológicas na alfabetização, dificuldades de linguagem expressiva e gagueira infantil. As sessões utilizam recursos lúdicos e envolventes, estimulando a autoconfiança da criança e fornecendo orientações práticas contínuas para pais e educadores.",
      benefits: [
        "Estimulação precoce para crianças a partir de 18 meses",
        "Correção de trocas de letras e fonemas na fala",
        "Apoio no desenvolvimento da leitura e alfabetização",
        "Mediação na comunicação social e acolhimento no TEA",
      ],
      ctaMessage: "Olá, Ana Paula! Gostaria de agendar uma avaliação infantil para meu filho(a).",
    },
    {
      id: "motricidade",
      title: "Motricidade Orofacial e Reeducação Muscular da Face no Consultório",
      badge: "Musculatura da Face",
      icon: <Smile className="w-6 h-6 text-[#0A3E39]" />,
      desc: "Tratamento clínico presencial na Rua do Rosário, 159, planejado para restaurar a harmonia miofuncional de lábios, língua e bochechas. Indicado para quadros de respiração bucal crônica, mastigação unilateral, deglutição atípica com interposição lingual e suporte multidisciplinar integrado a tratamentos ortodônticos e cirúrgicos bucomaxilofaciais em Bom Despacho.",
      benefits: [
        "Adequação de tônus muscular de lábios, língua e bochechas",
        "Correção da respiração oral crônica (respiração pela boca)",
        "Equilíbrio das funções de mastigação e deglutição",
        "Suporte direto ao tratamento ortodôntico e pós-cirúrgico",
      ],
      ctaMessage: "Olá, Ana Paula! Gostaria de informações sobre o tratamento de motricidade orofacial.",
    },
    {
      id: "parkinson-idosos",
      title: "Reabilitação Fonoaudiológica para Idosos e Doença de Parkinson",
      badge: "Consultório & Domiciliar",
      icon: <Brain className="w-6 h-6 text-[#0A3E39]" />,
      desc: "Programa terapêutico fonoaudiológico voltado para pacientes com Doença de Parkinson e distúrbios neurológicos do envelhecimento. Realizado tanto em nosso consultório no Centro quanto no conforto do lar (atendimento domiciliar em Bom Despacho), com foco na recuperação da intensidade vocal, clareza articulatória e prevenção rigorosa de engasgos e broncoaspirações durante a alimentação.",
      benefits: [
        "Terapia vocal para aumento da intensidade e clareza da voz",
        "Reeducação da deglutição e prevenção de engasgos e aspiração",
        "Atendimento no consultório ou no aconchego do lar",
        "Estímulo à comunicação, autonomia e suporte a cuidadores",
      ],
      ctaMessage: "Olá, Ana Paula! Gostaria de informações sobre o atendimento para idosos e Doença de Parkinson.",
    },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col gap-3 text-center items-center mb-14">
        <Badge variant="sage">Atendimento em Consultório & Domiciliar</Badge>
        <p className="font-serif text-3xl sm:text-4xl font-bold text-[#0A3E39]">
          Especialidades Clínicas em Bom Despacho
        </p>
        <p className="text-sm sm:text-base text-[#596567] max-w-2xl">
          Espaço privativo, climatizado e acolhedor na Rua do Rosário, 159 (em frente à VDM), além de atendimento domiciliar especializado em toda a área urbana de Bom Despacho - MG.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {treatments.map((t, idx) => (
          <Card key={idx} className="p-7 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F1EE] flex items-center justify-center">
                  {t.icon}
                </div>
                <Badge variant="outline">{t.badge}</Badge>
              </div>

              <h2 id={t.id} className="font-serif text-xl sm:text-2xl font-bold text-[#0A3E39] leading-snug">
                {t.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#596567] leading-relaxed">
                {t.desc}
              </p>

              <div className="pt-2 flex flex-col gap-2 border-t border-[#E2DDD5]/70">
                {t.benefits.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-[#1F292B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2DDD5]/70 mt-6">
              <Button
                variant="sand"
                size="sm"
                href={getWhatsAppUrl(t.ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageCircle className="w-4 h-4 text-[#10B981]" />}
                className="w-full text-xs"
              >
                Agendar este procedimento
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};


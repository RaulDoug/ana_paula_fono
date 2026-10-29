import React from 'react';
import { Baby, Smile, Mic, CheckCircle2, MessageCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { getWhatsAppUrl } from '../../data/clinicInfo';

export const ClinicalTreatments: React.FC = () => {
  const treatments = [
    {
      title: "Fonoaudiologia Infantil, Linguagem e Fala",
      badge: "Infantil & Escolar",
      icon: <Baby className="w-6 h-6 text-[#0A3E39]" />,
      desc: "Acompanhamento e intervenção precoce em crianças com atraso na aquisição da fala, trocas fonológicas na pronúncia, dificuldades de compreensão e gagueira. Conduzida por meio de abordagens lúdicas e engajadoras que estimulam a expressão natural e a autoconfiança da criança.",
      benefits: [
        "Estimulação precoce para crianças a partir de 18 meses",
        "Correção de trocas de letras e fonemas na fala",
        "Apoio no desenvolvimento da leitura e alfabetização",
        "Mediação na comunicação social e acolhimento no TEA",
      ],
      ctaMessage: "Olá, Dra. Ana Paula! Gostaria de agendar uma avaliação infantil para meu filho(a).",
    },
    {
      title: "Motricidade Orofacial e Reeducação Muscular",
      badge: "Musculatura da Face",
      icon: <Smile className="w-6 h-6 text-[#0A3E39]" />,
      desc: "Tratamento voltado para restabelecer o tônus e o equilíbrio muscular de lábios, bochechas e língua. Recomendado para pessoas com padrão de respiração oral, deglutição atípica com interposição lingual e apoio integrado a tratamentos ortodônticos.",
      benefits: [
        "Adequação de tônus muscular de lábios, língua e bochechas",
        "Correção da respiração oral crônica (respiração pela boca)",
        "Equilíbrio das funções de mastigação e deglutição",
        "Suporte direto ao tratamento ortodôntico e pós-cirúrgico",
      ],
      ctaMessage: "Olá, Dra. Ana Paula! Gostaria de informações sobre o tratamento de motricidade orofacial.",
    },
    {
      title: "Aperfeiçoamento Vocal e Reabilitação da Voz",
      badge: "Saúde Vocal",
      icon: <Mic className="w-6 h-6 text-[#0A3E39]" />,
      desc: "Conduta terapêutica para pacientes com queixas de rouquidão persistente, cansaço ao falar ou lesões nas pregas vocais (como nódulos e pólipos), além de aprimoramento técnico para profissionais que usam a voz no trabalho.",
      benefits: [
        "Alívio de rouquidão crônica e fadiga laríngea ao falar",
        "Reabilitação de nódulos (calos) e pólipos vocais",
        "Condicionamento vocal para professores, oradores e cantores",
        "Técnicas de respiração diafragmática e projeção sonora",
      ],
      ctaMessage: "Olá, Dra. Ana Paula! Gostaria de agendar uma consulta para cuidados com a voz.",
    },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col gap-3 text-center items-center mb-14">
        <Badge variant="sage">Atendimento em Consultório</Badge>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A3E39]">
          Especialidades em Consultório no Centro
        </h2>
        <p className="text-sm sm:text-base text-[#596567] max-w-2xl">
          Espaço privativo, climatizado e acessível na Rua do Rosário, 159 (em frente à VDM), planejado para conforto de toda a família.
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

              <h3 className="font-serif text-xl font-bold text-[#0A3E39]">
                {t.title}
              </h3>

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


import React from 'react';
import { Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CLINIC_INFO, getWhatsAppUrl } from '../../data/clinicInfo';

export const DoctorProfile: React.FC = () => {
  const credentials = [
    "Registro Profissional no Conselho Regional de Fonoaudiologia (CRFa: 6-3588)",
    "Especialista em Seleção e Adaptação de Próteses e Aparelhos Auditivos Digitais",
    "Ampla experiência no manejo da Disfagia e Fonoaudiologia Domiciliar (Home Care)",
    "Prática clínica humanizada baseada em evidências científicas atualizadas",
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Photo Column */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-2.5 bg-gradient-to-tr from-[#0A3E39]/15 to-[#10B981]/15 rounded-3xl -rotate-1" />
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white border border-[#E2DDD5]/80">
              <picture>
                <source srcSet="/images/foto_ana_paula.webp" type="image/webp" />
                <img
                  src="/images/foto_ana_paula.jpg"
                  alt={CLINIC_INFO.doctorName}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </picture>
              <div className="p-4 bg-white border-t border-[#E2DDD5]/70 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A3E39]">
                    {CLINIC_INFO.doctorName}
                  </h3>
                  <span className="text-xs text-[#596567]">
                    {CLINIC_INFO.crfa} • Responsável Técnica
                  </span>
                </div>
                <Badge variant="emerald">CRFa Ativo</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Biography Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Badge variant="sage" icon={<Award className="w-3.5 h-3.5 text-[#0A3E39]" />}>
            Perfil Profissional
          </Badge>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A3E39] leading-tight">
            Ana Paula Azevedo — Fonoaudióloga
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#596567] leading-relaxed">
            <p>
              <strong>Ana Paula Azevedo</strong> dedica sua prática profissional ao resgate da comunicação humana, da autoestima auditiva e da segurança alimentar de seus pacientes. Com atuação focada nas áreas de audiologia clínica, aparelhos auditivos e fonoaudiologia hospitalar/geriátrica, combina rigor científico atualizado com escuta compassiva.
            </p>
            <p>
              Seu compromisso é entregar um atendimento ético e resolutivo, garantindo que cada paciente — da infância à maturidade — receba a atenção e os recursos ideais para viver com autonomia e qualidade de vida.
            </p>
          </div>

          <Card className="p-5 bg-[#FAF8F5] border-[#E2DDD5]/80">
            <h4 className="font-serif text-sm font-bold text-[#0A3E39] mb-3">
              Credenciais & Áreas de Foco Clínico:
            </h4>
            <div className="flex flex-col gap-2">
              {credentials.map((c, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F292B]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="pt-2">
            <Button
              variant="emerald"
              size="md"
              href={getWhatsAppUrl("Olá, Ana Paula! Acessei a página 'Sobre' do site e gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Falar com Ana Paula
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


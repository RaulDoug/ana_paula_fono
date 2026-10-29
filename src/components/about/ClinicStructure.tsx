import React from 'react';
import { Accessibility, Sparkles, Shield, Heart } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const ClinicStructure: React.FC = () => {
  const pillars = [
    {
      icon: <Accessibility className="w-6 h-6 text-[#0A3E39]" />,
      title: "Acessibilidade Integral",
      desc: "Consultório térreo no Centro, com facilidade total para cadeirantes, idosos e pessoas com dificuldades de locomoção, sem barreiras de escadas na entrada.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#0A3E39]" />,
      title: "Ambiente Acolhedor e Climatizado",
      desc: "Espaço privativo e silencioso, planejado com acústica suave para avaliações fonéticas confortáveis e sem estresse tanto para crianças quanto para idosos.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#0A3E39]" />,
      title: "Tecnologia de Calibração",
      desc: "Equipamentos computadorizados para ajustes exatos de próteses auditivas e arsenal terapêutico para intervenções em fala e deglutição.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#0A3E39]" />,
      title: "Atendimento Humanizado",
      desc: "Consultas com hora marcada, garantindo o tempo integral e a dedicação exclusiva que você e sua família merecem.",
    },
  ];

  return (
    <section id="consultorio" className="py-16 bg-[#F4F1EA]/50 border-y border-[#E2DDD5]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 text-center items-center mb-12">
          <Badge variant="sage">Infraestrutura em Bom Despacho</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A3E39]">
            Ambiente Acolhedor, Seguro e Acessível
          </h2>
          <p className="text-sm sm:text-base text-[#596567] max-w-2xl">
            Projetado para receber cada família com o máximo de bem-estar, nosso consultório está localizado no coração de Bom Despacho.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <Card key={idx} className="p-6 bg-white flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F1EE] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0A3E39]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#596567] leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


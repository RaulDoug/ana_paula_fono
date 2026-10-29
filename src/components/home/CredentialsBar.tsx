import React from 'react';
import { Award, Home, Ear, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';

export const CredentialsBar: React.FC = () => {
  const credentials = [
    {
      icon: <Award className="w-5 h-5 text-[#0A3E39]" />,
      title: CLINIC_INFO.crfa,
      subtitle: "Registro e ética profissional",
    },
    {
      icon: <Home className="w-5 h-5 text-[#0A3E39]" />,
      title: "Atendimento Domiciliar",
      subtitle: "Conforto no lar para idosos",
    },
    {
      icon: <Ear className="w-5 h-5 text-[#0A3E39]" />,
      title: "Testes de Aparelhos",
      subtitle: "Adaptação assistida e sem custo",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#0A3E39]" />,
      title: "Centro de Bom Despacho",
      subtitle: "Rua do Rosário (Em frente à VDM)",
    },
  ];

  return (
    <section className="w-full bg-[#E8F1EE]/50 border-y border-[#E2DDD5]/70 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/70 border border-[#E2DDD5]/60 shadow-[0_2px_8px_rgba(10,62,57,0.02)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E8F1EE] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-[#0A3E39] leading-tight">
                  {item.title}
                </span>
                <span className="text-xs text-[#596567] mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


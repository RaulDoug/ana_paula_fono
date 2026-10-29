import React from 'react';
import { Link } from 'react-router-dom';
import { Award, HeartHandshake, ArrowRight, MapPin } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../../data/clinicInfo';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const BioPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F1EA]/50 border-t border-[#E2DDD5]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2DDD5]/80 shadow-[0_8px_30px_rgba(10,62,57,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Photo Left */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-[#F4F1EA] border border-[#E2DDD5]">
                  <picture>
                    <source srcSet="/images/foto_ana_paula.webp" type="image/webp" />
                    <img
                      src="/images/foto_ana_paula.jpg"
                      alt={CLINIC_INFO.doctorName}
                      width={800}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A3E39]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-serif text-lg font-bold block">
                      {CLINIC_INFO.doctorName}
                    </span>
                    <span className="text-xs text-[#E8F1EE]/90">
                      {CLINIC_INFO.crfa} • Fonoaudióloga Responsável
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Right */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <Badge variant="sage" icon={<Award className="w-3.5 h-3.5 text-[#0A3E39]" />}>
                Dedicação Ética & Rigor Científico
              </Badge>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0A3E39] leading-tight">
                Acolhimento humanizado com base científica em Bom Despacho
              </h2>

              <p className="text-sm sm:text-base text-[#596567] leading-relaxed">
                À frente da clínica está <strong>Ana Paula Azevedo</strong>, fonoaudióloga dedicada a transformar o dia a dia de seus pacientes através do cuidado empático e da técnica refinada. Cada plano terapêutico respeita o ritmo, a história e as reais necessidades de quem nos procura, seja no consultório no Centro ou no aconchego de sua residência.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 w-full">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD5]/70">
                  <div className="w-9 h-9 rounded-lg bg-[#E8F1EE] flex items-center justify-center text-[#0A3E39] shrink-0">
                    <HeartHandshake className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0A3E39]">Escuta Atenta</span>
                    <span className="text-[11px] text-[#596567]">Cuidado com a família inteira</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD5]/70">
                  <div className="w-9 h-9 rounded-lg bg-[#E8F1EE] flex items-center justify-center text-[#0A3E39] shrink-0">
                    <MapPin className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0A3E39]">Localização Central</span>
                    <span className="text-[11px] text-[#596567]">No Centro, em frente à VDM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/sobre">
                  <Button variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                    Conhecer biografia e estrutura da clínica
                  </Button>
                </Link>

                <Button
                  variant="emerald"
                  size="md"
                  href={getWhatsAppUrl("Olá, Ana Paula! Gostaria de conversar sobre um atendimento fonoaudiológico.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


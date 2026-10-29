import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, ArrowDown, MapPin, Award } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../../data/clinicInfo';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import doctorPhoto from '../../assets/images/foto_ana_paula.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background delicate ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8F1EE]/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F4F1EA]/80 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Conversions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-6"
          >
            {/* Trust Pill */}
            <Badge variant="sage" icon={<ShieldCheck className="w-4 h-4 text-[#10B981]" />}>
              Dra. Ana Paula Azevedo • {CLINIC_INFO.crfa} • Bom Despacho - MG
            </Badge>

            {/* H1 Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#0A3E39] font-bold tracking-tight">
              Fonoaudiologia especializada e{' '}
              <span className="italic font-normal text-[#165E57] underline decoration-[#10B981]/50 underline-offset-8">
                aparelhos auditivos
              </span>{' '}
              com precisão técnica e acolhimento.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#596567] leading-relaxed max-w-xl">
              Consultório completo e acessível no Centro de Bom Despacho, além de atendimento fonoaudiológico domiciliar exclusivo para idosos no conforto do seu lar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <Button
                variant="emerald"
                size="lg"
                href={getWhatsAppUrl("Olá, Dra. Ana Paula! Acessei seu site e gostaria de agendar uma avaliação fonoaudiológica.")}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageCircle className="w-5 h-5" />}
              >
                Agendar Consulta no WhatsApp
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="#pilares-principais"
                icon={<ArrowDown className="w-4 h-4" />}
                iconPosition="right"
              >
                Conhecer Nossos Serviços
              </Button>
            </div>

            {/* Mini Trust Metrics */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-[#E2DDD5]/70 w-full text-xs text-[#596567]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#10B981]" />
                <span>Rua do Rosário, 159 (Em frente à VDM)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#10B981]" />
                <span>Práticas Baseadas em Evidências</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Authentic Professional Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Organic background frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0A3E39]/15 to-[#10B981]/15 rounded-[36px] -rotate-2" />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-3 shadow-[0_16px_40px_rgba(10,62,57,0.12)] border border-[#E2DDD5]/80 overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4F1EA]">
                  <img
                    src={doctorPhoto}
                    alt={`${CLINIC_INFO.doctorName} - Fonoaudióloga`}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A3E39]/80 via-transparent to-transparent" />

                  {/* Floating card caption */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-md flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-sm sm:text-base font-bold text-[#0A3E39] leading-tight">
                        {CLINIC_INFO.doctorName}
                      </h3>
                      <p className="text-xs text-[#596567] font-medium">
                        {CLINIC_INFO.crfa} • Bom Despacho - MG
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  </div>
                </div>

                {/* Bottom pill row */}
                <div className="py-2.5 px-3 flex items-center justify-between text-xs text-[#596567]">
                  <span className="font-medium">Atendimento Clínico & Home Care</span>
                  <span className="text-[#0A3E39] font-bold">Seg a Sex • 08h às 18h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


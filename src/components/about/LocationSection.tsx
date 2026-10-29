import React from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, Building, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col gap-3 text-center items-center mb-12">
        <Badge variant="sage" icon={<MapPin className="w-3.5 h-3.5 text-[#0A3E39]" />}>
          Localização Privilegiada
        </Badge>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A3E39]">
          Como Chegar ao Nosso Consultório
        </h2>
        <p className="text-sm sm:text-base text-[#596567] max-w-xl">
          Localizado no Centro de Bom Despacho, com ponto de referência conhecido em frente à VDM para sua comodidade.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Info Left Side */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">
          <Card className="p-7 sm:p-8 flex flex-col gap-6 bg-white h-full">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#596567] font-bold block mb-1">
                Endereço Oficial
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0A3E39]">
                {CLINIC_INFO.address.street}
              </h3>
              <p className="text-xs sm:text-sm text-[#596567] mt-1">
                Centro • Bom Despacho - MG • CEP {CLINIC_INFO.address.cep}
              </p>

              <div className="mt-4 p-3 bg-[#E8F1EE] rounded-xl border border-[#0A3E39]/10 flex items-center gap-2.5">
                <Building className="w-5 h-5 text-[#0A3E39] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#0A3E39]">
                  Ponto de Referência: {CLINIC_INFO.address.landmark}
                </span>
              </div>
            </div>

            <div className="space-y-3.5 pt-4 border-t border-[#E2DDD5]/70 text-xs sm:text-sm text-[#596567]">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>{CLINIC_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-[#0A3E39] font-semibold hover:underline">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD5]/70 flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="md"
                href={CLINIC_INFO.googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Navigation className="w-4 h-4 text-[#10B981]" />}
                className="w-full sm:w-auto"
              >
                Traçar Rota no Google Maps
              </Button>

              <Button
                variant="outline"
                size="md"
                href={CLINIC_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Navigation className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Abrir no Waze
              </Button>
            </div>
          </Card>
        </div>

        {/* Map Visual Right Side */}
        <div className="lg:col-span-6 flex flex-col">
          <Card className="p-0 overflow-hidden bg-[#F4F1EA] h-full min-h-[380px] flex flex-col border-[#E2DDD5]">
            <div className="relative w-full h-full min-h-[340px] flex-1">
              <iframe
                title="Mapa de Localização da Azevedo Fonoaudiologia"
                src={`https://maps.google.com/maps?q=${CLINIC_INFO.coordinates.lat},${CLINIC_INFO.coordinates.lng}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4 bg-white border-t border-[#E2DDD5] flex items-center justify-between text-xs text-[#596567]">
              <span>Rua do Rosário, 159 — Centro</span>
              <span className="font-semibold text-[#0A3E39] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                Em frente à VDM
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};


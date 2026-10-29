import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../../data/clinicInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A3E39] text-[#E8F1EE] border-t border-[#165E57]/60 pt-16 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#165E57]/50">
          {/* Column 1: Brand & Professional data */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0A3E39] flex items-center justify-center font-serif text-xl font-bold shadow-sm">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-white tracking-tight">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#10B981] font-semibold">
                  {CLINIC_INFO.doctorName} • {CLINIC_INFO.crfa}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#E8F1EE]/80 leading-relaxed max-w-sm mt-1">
              Fonoaudiologia especializada, venda e adaptação personalizada de aparelhos auditivos e assistência fonoaudiológica domiciliar humanizada para idosos em Bom Despacho - MG.
            </p>

            <div className="flex flex-col gap-1.5 text-xs text-[#E8F1EE]/70 pt-2 border-t border-[#165E57]/40">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span><strong>Razão Social:</strong> {CLINIC_INFO.legalName}</span>
              </div>
              <div><strong>CNPJ:</strong> {CLINIC_INFO.cnpj}</div>
              <div><strong>Registro Profissional:</strong> {CLINIC_INFO.crfa} (CRFa 6ª Região)</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#E8F1EE]/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Página Inicial</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Aparelhos Auditivos & Tratamentos</span>
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Sobre Ana Paula</span>
                </Link>
              </li>
              <li>
                <Link to="/sobre#consultorio" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Consultório no Centro & Estrutura</span>
                </Link>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre atendimento fonoaudiológico.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#10B981] transition-colors flex items-center gap-1 text-[#10B981] font-semibold"
                >
                  <span>Falar no WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              Localização & Contato
            </h4>

            <div className="flex flex-col gap-3 text-sm text-[#E8F1EE]/80">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 hover:text-white transition-colors cursor-pointer"
                title="Abrir endereço no Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#10B981] group-hover:text-[#34D399] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-white font-medium group-hover:underline flex items-center gap-1.5">
                    {CLINIC_INFO.address.street}
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#10B981] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </span>
                  <span className="block text-xs text-[#10B981] font-semibold">{CLINIC_INFO.address.landmark}</span>
                  <span className="text-xs text-[#E8F1EE]/70 group-hover:text-[#E8F1EE]/90 transition-colors">
                    {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state} • CEP {CLINIC_INFO.address.cep}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="text-xs">{CLINIC_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#10B981] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CLINIC_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#165E57] hover:bg-[#10B981] text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram da clínica"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-[#165E57] hover:bg-[#10B981] text-white px-3 py-2 rounded-full transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Abrir Rota no Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8F1EE]/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.legalName}. Todos os direitos reservados.</p>
          <p className="max-w-md">
            As informações contidas neste site possuem caráter educativo e informativo, não substituindo uma consulta fonoaudiológica individualizada.
          </p>
        </div>
      </div>
    </footer>
  );
};

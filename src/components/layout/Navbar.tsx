import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Clock, Phone, Menu, X, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../../data/clinicInfo';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Serviços Especializados', path: '/servicos' },
    { label: 'Sobre & Consultório', path: '/sobre' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top utility bar */}
      <div className="bg-[#0A3E39] text-[#E8F1EE] text-xs py-2 px-4 border-b border-[#165E57]/40 hidden sm:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
              <span>{CLINIC_INFO.address.street} ({CLINIC_INFO.address.landmark}) — {CLINIC_INFO.address.city}</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 opacity-90">
              <Clock className="w-3.5 h-3.5 text-[#10B981]" />
              <span>{CLINIC_INFO.hours}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#10B981]" />
              <span className="font-semibold">{CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="bg-[#FDFCF9]/90 backdrop-blur-md border-b border-[#E2DDD5]/70 shadow-[0_2px_12px_rgba(10,62,57,0.03)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0A3E39] text-[#E8F1EE] flex items-center justify-center font-serif text-xl font-bold shadow-sm group-hover:bg-[#165E57] transition-colors">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold text-[#0A3E39] tracking-tight group-hover:text-[#165E57] transition-colors">
                {CLINIC_INFO.name}
              </span>
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#596567] font-semibold">
                {CLINIC_INFO.doctorName} • {CLINIC_INFO.crfa}
              </span>
            </div>
          </Link>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center gap-1 bg-[#F4F1EA]/80 p-1.5 rounded-full border border-[#E2DDD5]/80">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-[#0A3E39] text-[#FDFCF9] shadow-sm font-semibold'
                      : 'text-[#1F292B] hover:text-[#0A3E39] hover:bg-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="emerald"
              size="sm"
              href={getWhatsAppUrl("Olá, Ana Paula! Acessei seu site e gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Agendar no WhatsApp
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#0A3E39] hover:bg-[#E8F1EE] focus:outline-none transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E2DDD5]/80 bg-[#FDFCF9] px-4 pt-3 pb-6 flex flex-col gap-3 shadow-lg">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? 'bg-[#0A3E39] text-white font-semibold'
                        : 'text-[#1F292B] hover:bg-[#F4F1EA]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#E2DDD5]/80 flex flex-col gap-3">
              <div className="text-xs text-[#596567] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                <span>{CLINIC_INFO.address.street}</span>
              </div>
              <Button
                variant="emerald"
                size="md"
                href={getWhatsAppUrl("Olá, Ana Paula! Acessei seu site e gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageCircle className="w-4 h-4" />}
                className="w-full"
              >
                Agendar Consulta no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};


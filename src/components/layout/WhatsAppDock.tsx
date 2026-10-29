import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../../data/clinicInfo';

export const WhatsAppDock: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded chat card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-[0_12px_40px_rgba(10,62,57,0.2)] border border-[#E2DDD5] overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-[#0A3E39] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/images/foto_ana_paula_thumb.webp"
                    alt={CLINIC_INFO.doctorName}
                    width={44}
                    height={44}
                    loading="lazy"
                    decoding="async"
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/60 shadow-sm"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#10B981] ring-2 ring-[#0A3E39]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-semibold text-white">
                    {CLINIC_INFO.doctorName}
                  </span>
                  <span className="text-[11px] text-[#E8F1EE]/80">
                    Fonoaudióloga • Bom Despacho
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-[#E8F1EE]/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Card Body */}
            <div className="p-4 bg-[#F4F1EA]/50 flex flex-col gap-3">
              <div className="bg-white p-3 rounded-2xl rounded-tl-sm text-xs text-[#1F292B] leading-relaxed shadow-sm border border-[#E2DDD5]/60">
                Olá! Como posso ajudar você hoje? Tire suas dúvidas sobre <strong>testes de aparelhos auditivos</strong> ou <strong>atendimento domiciliar para idosos</strong>.
              </div>
              <span className="text-[10px] text-[#596567] self-end px-1">
                Resposta rápida no WhatsApp
              </span>
            </div>

            {/* Card Footer Action */}
            <div className="p-3 bg-white border-t border-[#E2DDD5]/60">
              <a
                href={getWhatsAppUrl("Olá, Ana Paula! Acessei seu site e gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors active:scale-[0.98]"
              >
                <span>Iniciar conversa no WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating trigger pill / button */}
      <div className="flex items-center gap-2.5">
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white text-[#0A3E39] font-medium text-xs px-3.5 py-2 rounded-full shadow-[0_4px_16px_rgba(10,62,57,0.12)] border border-[#E2DDD5] hover:shadow-md transition-shadow cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Fale com Ana Paula</span>
          </motion.button>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center shadow-[0_6px_24px_rgba(16,185,129,0.4)] cursor-pointer focus:outline-none transition-colors"
          aria-label="Abrir WhatsApp"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        </motion.button>
      </div>
    </aside>
  );
};


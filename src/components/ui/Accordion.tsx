import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenIndex = 0,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex >= 0 ? [defaultOpenIndex] : []
  );

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={item.id || index}
            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#0A3E39]/30 shadow-sm'
                : 'bg-white/80 border-[#E2DDD5]/80 hover:border-[#0A3E39]/20'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-5 py-4.5 flex items-center justify-between gap-4 select-none focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-base text-[#0A3E39] pr-2">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={`p-1 rounded-full shrink-0 ${
                  isOpen ? 'bg-[#E8F1EE] text-[#0A3E39]' : 'text-[#596567]'
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.25, delay: 0.05 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.15 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 text-sm md:text-[15px] text-[#596567] leading-relaxed border-t border-[#E2DDD5]/40 mt-1">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};


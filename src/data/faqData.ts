export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "aparelhos" | "homecare" | "geral";
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "teste-aparelho",
    category: "aparelhos",
    question: "Como funciona o processo de teste dos aparelhos auditivos em Bom Despacho?",
    answer: "No consultório da fonoaudióloga Ana Paula Azevedo Ferreira (CRFa 6-3588), localizado na Rua do Rosário, 159, Centro (em frente à VDM), analisamos sua audiometria recente e selecionamos modelos adequados de aparelhos auditivos digitais. Você realiza testes práticos com os aparelhos devidamente calibrados, recebe orientações sobre manuseio e conta com acompanhamento contínuo em Bom Despacho - MG para assegurar conforto e nitidez na sua rotina."
  },
  {
    id: "regioes-homecare",
    category: "homecare",
    question: "Quais bairros e regiões de Bom Despacho recebem o atendimento domiciliar?",
    answer: "O atendimento fonoaudiológico domiciliar (home care) realizado pela fonoaudióloga Ana Paula Azevedo Ferreira atende todos os bairros da área urbana de Bom Despacho - MG. O serviço é voltado para idosos com dificuldade de locomoção ou pós-AVC, assegurando avaliação da deglutição, manejo de disfagia e acolhimento familiar no conforto do lar."
  },
  {
    id: "o-que-e-disfagia",
    category: "homecare",
    question: "O que é disfagia e como é tratada em idosos em Bom Despacho?",
    answer: "Disfagia é a dificuldade para engolir alimentos, líquidos ou remédios com segurança. Sem o tratamento adequado por uma fonoaudióloga em Bom Despacho, pode causar desnutrição, desidratação e pneumonia aspirativa. A fonoaudióloga Ana Paula Azevedo Ferreira (CRFa 6-3588) realiza a avaliação funcional e a reabilitação tanto em domicílio quanto no consultório na Rua do Rosário, 159, Centro, readequando consistências e orientando familiares."
  },
  {
    id: "convenios-reembolso",
    category: "geral",
    question: "A clínica atende convênios ou somente particular com recibo de reembolso?",
    answer: "Os atendimentos na Azevedo Fonoaudiologia com a fonoaudióloga Ana Paula Azevedo Ferreira (CRFa 6-3588) são exclusivamente particulares, no consultório na Rua do Rosário, 159, Centro de Bom Despacho - MG. Emitimos recibo oficial e relatório clínico detalhado para que você possa solicitar o reembolso integral ou parcial junto ao seu plano de saúde (como Unimed, Bradesco, Amil, Cassi) ou dedução no Imposto de Renda."
  },
  {
    id: "crianca-fala-pouco",
    category: "geral",
    question: "Qual o momento certo de procurar uma fonoaudióloga em Bom Despacho para crianças?",
    answer: "Recomenda-se buscar a fonoaudióloga Ana Paula Azevedo Ferreira em Bom Despacho se aos 18 meses a criança ainda não balbucia palavras com intenção comunicativa, ou se aos 2 anos não formula frases simples nem atende a comandos. A intervenção precoce em nosso consultório no Centro de Bom Despacho previne impactos no aprendizado e no desenvolvimento social."
  },
  {
    id: "encaminhamento-medico",
    category: "geral",
    question: "Preciso de encaminhamento médico para agendar consulta no consultório em Bom Despacho?",
    answer: "Não é obrigatório ter encaminhamento prévio. Você pode agendar sua avaliação diretamente com a fonoaudióloga Ana Paula Azevedo Ferreira (CRFa 6-3588) em nosso consultório na Rua do Rosário, 159, Centro (em frente à VDM), em Bom Despacho - MG. Caso tenha exames anteriores ou laudos de geriatras, pediatras ou neurologistas, leve-os para complementar o diagnóstico."
  }
];


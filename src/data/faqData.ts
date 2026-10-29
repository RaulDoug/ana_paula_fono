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
    question: "Como funciona o processo de teste dos aparelhos auditivos?",
    answer: "A partir da sua avaliação audiológica ou do seu exame de audiometria recente, selecionamos modelos compatíveis com o seu padrão auditivo. Você realiza testes com o aparelho devidamente regulado, recebe orientações completas sobre o manuseio e conta com acompanhamento próximo para garantir total conforto e adaptação auditiva na sua rotina diária."
  },
  {
    id: "regioes-homecare",
    category: "homecare",
    question: "Quais bairros e regiões recebem o atendimento domiciliar?",
    answer: "O atendimento fonoaudiológico domiciliar (home care) atende toda a área urbana de Bom Despacho - MG, proporcionando atendimento exclusivo e humanizado para idosos no conforto de sua residência, com foco na tranquilidade da família, na comodidade e na segurança alimentar."
  },
  {
    id: "o-que-e-disfagia",
    category: "homecare",
    question: "O que é disfagia e quais os perigos de não tratá-la em idosos?",
    answer: "Disfagia é a perda ou dificuldade da capacidade de engolir com segurança alimentos, líquidos ou remédios. Quando não tratada, restos alimentares ou líquidos podem entrar na traqueia e alcançar os pulmões, gerando infecções graves como a pneumonia aspirativa, além de perda de peso progressiva e desidratação. O diagnóstico precoce e a adequação da consistência alimentar são essenciais."
  },
  {
    id: "convenios-reembolso",
    category: "geral",
    question: "A clínica atende convênios ou somente particular com recibo?",
    answer: "Nossos atendimentos são realizados na modalidade particular, garantindo o tempo integral e a dedicação exclusiva que cada paciente merece. Fornecemos recibo e relatório detalhado com CRFa ativo para que você possa solicitar o reembolso junto ao seu plano de saúde (Unimed, Bradesco, Amil, Cassi, etc.) ou abatimento no Imposto de Renda."
  },
  {
    id: "crianca-fala-pouco",
    category: "geral",
    question: "Qual o momento certo de procurar fonoaudiologia para uma criança?",
    answer: "Recomenda-se uma avaliação fonoaudiológica se aos 18 meses a criança ainda não balbucia palavras com intenção comunicativa, ou se aos 2 anos ela ainda não forma frases simples de duas palavras nem atende prontamente quando chamada. A estimulação precoce previne dificuldades escolares e sociais futuras."
  },
  {
    id: "encaminhamento-medico",
    category: "geral",
    question: "Preciso de encaminhamento médico para agendar uma consulta?",
    answer: "Não é obrigatório ter encaminhamento prévio. Você pode agendar uma avaliação diretamente conosco para o diagnóstico funcional da fala, voz, deglutição ou audição. Caso já possua audiometria recente ou laudos médicos de geriatras, neurologistas ou pediatras, traga-os para enriquecer o plano terapêutico."
  }
];


export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tag: string;
  badge: string;
  summary: string;
  description: string[];
  features: string[];
  steps?: { title: string; desc: string }[];
  targetAudience: string;
  ctaText: string;
  ctaMessage: string;
}

export const MAIN_PILLARS: ServiceItem[] = [
  {
    id: "aparelhos-auditivos",
    slug: "aparelhos-auditivos",
    title: "Venda e Adaptação de Aparelhos Auditivos",
    tag: "Reabilitação Auditiva",
    badge: "Tecnologia Digital & Conectividade",
    summary: "Recupere a nitidez das conversas e os sons da vida diária com tecnologia de ponta, testes no conforto de casa e calibragem computadorizada personalizada.",
    description: [
      "A perda auditiva gradual afeta não apenas a audição, mas também a participação nas conversas em família, o convívio social e a saúde cognitiva. Na Azevedo Fonoaudiologia, o processo de indicação de próteses é feito com paciência, testes práticos e calibragem digital exata para o seu grau de necessidade.",
      "Trabalhamos com dispositivos modernos e ergonômicos dotados de redução ativa de ruído de fundo, clareza vocal e conexão direta com a televisão e celular via Bluetooth."
    ],
    features: [
      "Testagem prática antes da escolha final no conforto de sua rotina",
      "Modelos micro-RIC recarregáveis, discretos e quase imperceptíveis",
      "Calibragem computadorizada personalizada conforme a audiometria",
      "Acompanhamento e suporte de proximidade contínuo no Centro de Bom Despacho"
    ],
    steps: [
      {
        title: "1. Avaliação Audiológica e Estudo de Caso",
        desc: "Entendimento minucioso do perfil de perda auditiva e das rotinas diárias do paciente."
      },
      {
        title: "2. Seleção e Teste Prático com o Dispositivo",
        desc: "Experimentação do aparelho ajustado em ambiente real de escuta, assistindo TV e conversando em família."
      },
      {
        title: "3. Adaptação Acompanhada e Calibração Fina",
        desc: "Retornos periódicos para refinamento dos canais de frequência e garantia de conforto absoluto."
      }
    ],
    targetAudience: "Adultos e idosos que sentem dificuldade para compreender falas em ambientes ruidosos ou ao assistir TV.",
    ctaText: "Quero testar um aparelho auditivo",
    ctaMessage: "Olá, Ana Paula! Gostaria de informações sobre o teste e adaptação de aparelhos auditivos.",
  },
  {
    id: "home-care-idosos",
    slug: "home-care-idosos",
    title: "Atendimento Domiciliar para Idosos (Home Care)",
    tag: "Fonoaudiologia Geriátrica",
    badge: "Conforto no Lar • Bom Despacho",
    summary: "Assistência fonoaudiológica humanizada para idosos com foco em alimentação segura, tratamento de engasgos (disfagia) e reabilitação neurológica pós-AVC.",
    description: [
      "A deglutição segura é fundamental para a manutenção da vida e da dignidade na terceira idade. Condições associadas ao envelhecimento, sequelas de Acidente Vascular Cerebral (AVC) ou distúrbios neurodegenerativos (Doença de Parkinson, Alzheimer) com frequência causam disfagia — a dificuldade para engolir alimentos, líquidos e até medicamentos.",
      "O atendimento domiciliar em Bom Despacho proporciona avaliação precisa sem o estresse ou cansaço de deslocamento para o idoso e seus familiares. Analisamos a postura na refeição, adequamos a consistência dos alimentos e orientamos cuidadores e familiares sobre medidas protetivas contra broncoaspirações."
    ],
    features: [
      "Avaliação minuciosa da alimentação e consistência dos alimentos no lar",
      "Reabilitação pós-AVC, condições neurológicas e paralisias faciais",
      "Treinamento e suporte direto para cuidadores e familiares sobre posturas e manobras",
      "Prevenção eficaz de pneumonias aspirativas e internações recorrentes"
    ],
    targetAudience: "Famílias e cuidadores de idosos que apresentam tosse ao comer, engasgos ou que estão em reabilitação neurológica.",
    ctaText: "Solicitar atendimento domiciliar",
    ctaMessage: "Olá, Ana Paula! Vi que você atende em domicílio e gostaria de saber como funciona a visita para um familiar idoso.",
  }
];

export const CLINICAL_SERVICES = [
  {
    id: "infantil",
    title: "Fonoaudiologia Infantil & Fala",
    shortDescription: "Acompanhamento e intervenção precoce em crianças com atraso na aquisição da fala, trocas fonológicas na pronúncia, dificuldades de compreensão e gagueira com abordagens lúdicas.",
    icon: "Baby",
    highlights: ["Estimulação precoce da fala", "Correção de trocas de sons", "Comunicação social e TEA", "Apoio às dificuldades escolares"],
    ctaMessage: "Olá, Ana Paula! Gostaria de agendar uma avaliação infantil para meu filho(a).",
  },
  {
    id: "motricidade",
    title: "Motricidade Orofacial (MO)",
    shortDescription: "Reeducação e fortalecimento muscular de lábios, bochechas e língua. Indicado para respiração oral crônica, mastigação unilateral, deglutição atípica e apoio ortodôntico.",
    icon: "Smile",
    highlights: ["Adequação da mastigação", "Deglutição atípica (interposição lingual)", "Respiração bucal crônica", "Apoio a tratamentos ortodônticos"],
    ctaMessage: "Olá, Ana Paula! Gostaria de informações sobre o tratamento de motricidade orofacial.",
  },
  {
    id: "parkinson-idosos",
    title: "Idosos & Doença de Parkinson",
    shortDescription: "Reabilitação fonoaudiológica neurológica em consultório ou domicílio. Foco no volume e clareza da fala, expressão facial e segurança na deglutição.",
    icon: "Brain",
    highlights: [
      "Atendimento no consultório e domiciliar",
      "Terapia de voz e fala para Parkinson",
      "Prevenção de engasgos e deglutição segura",
      "Preservação da autonomia e comunicação"
    ],
    ctaMessage: "Olá, Ana Paula! Gostaria de informações sobre o atendimento para idosos e Doença de Parkinson.",
  }
];


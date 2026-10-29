export const CLINIC_INFO = {
  name: "Azevedo Fonoaudiologia",
  legalName: "Azevedo Fonoaudiologia LTDA",
  doctorName: "Dra. Ana Paula Azevedo",
  specialty: "Fonoaudióloga Clínica & Reabilitação Auditiva",
  crfa: "CRFa: 6-3588",
  cnpj: "42.489.925/0001-98",
  phoneDisplay: "(37) 9943-9900",
  phoneRaw: "553799439900",
  email: "fonoanapaulabd@gmail.com",
  address: {
    street: "Rua do Rosário, 159, Centro",
    city: "Bom Despacho",
    state: "MG",
    cep: "35630-000",
    landmark: "Em frente à VDM",
    full: "Rua do Rosário, 159, Centro (Em frente à VDM), Bom Despacho - MG",
  },
  hours: "Segunda a Sexta-feira: 08:00 às 18:00 (Atendimentos com hora marcada)",
  instagram: {
    handle: "@fono_anapaulaazevedo",
    url: "https://www.instagram.com/fono_anapaulaazevedo/",
  },
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+do+Rosario,+159,+Centro,+Bom+Despacho+-+MG",
  wazeUrl: "https://waze.com/ul?q=Rua%20do%20Rosario%20159%20Bom%20Despacho",
} as const;

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Olá, Dra. Ana Paula! Acessei seu site e gostaria de agendar uma avaliação fonoaudiológica.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${text}`;
}


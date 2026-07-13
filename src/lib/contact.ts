export const CONTACT_CONFIG = {
  whatsappNumber: "5561981460728",
  whatsappMessage:
    "Olá! Gostaria de conversar sobre a proposta estratégica apresentada para a Gráfica Certa.",
  instagram: "impulse.assessoria",
  instagramUrl: "https://instagram.com/impulse.assessoria",
  email: "aimpulse.assessoria@gmail.com",
  phoneDisplay: "(61) 98146-0728",
};

export function createWhatsAppUrl(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = createWhatsAppUrl(
  CONTACT_CONFIG.whatsappNumber,
  CONTACT_CONFIG.whatsappMessage,
);

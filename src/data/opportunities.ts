import {
  Search,
  LayoutGrid,
  MessageCircle,
  Building2,
  Repeat,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Opportunity {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
}

export const OPPORTUNITIES: Opportunity[] = [
  {
    icon: Search,
    title: "Ser encontrada no momento da necessidade",
    description:
      "Empresas e consumidores pesquisam no Google por serviços como gráfica rápida, cartões de visita, banners, adesivos, fachadas, impressão, materiais promocionais e comunicação visual. A Gráfica Certa pode aparecer exatamente quando essas pessoas estiverem buscando uma solução.",
  },
  {
    icon: LayoutGrid,
    title: "Apresentar os serviços de forma profissional",
    description:
      "Um site profissional pode reunir os principais serviços, aplicações, materiais, acabamentos, diferenciais, portfólio e canais de atendimento. Isso reduz dúvidas, melhora a percepção de valor e facilita a solicitação de orçamento.",
  },
  {
    icon: MessageCircle,
    title: "Transformar acessos em conversas comerciais",
    description:
      "Campanhas, conteúdos e páginas podem direcionar o público para um atendimento organizado pelo WhatsApp, com informações estruturadas.",
    bullets: [
      "Serviço desejado",
      "Quantidade e prazo",
      "Medidas e material",
      "Necessidade de criação da arte",
      "Cidade ou região",
      "Dados para retorno",
    ],
  },
  {
    icon: Building2,
    title: "Ampliar a atuação no mercado empresarial",
    description: "A estratégia pode alcançar diversos segmentos com demanda recorrente.",
    bullets: [
      "Lojas, restaurantes, clínicas",
      "Escritórios, escolas, igrejas",
      "Eventos e construtoras",
      "Condomínios e agências",
      "Prestadores de serviços",
      "Empresas com demanda recorrente",
    ],
  },
  {
    icon: Repeat,
    title: "Transformar pedidos pontuais em relacionamento",
    description:
      "Clientes empresariais podem precisar frequentemente de novos materiais. A estratégia deve considerar a primeira compra, o pós-venda e a recompra.",
    bullets: [
      "Cartões, panfletos, adesivos",
      "Banners, fachadas, placas",
      "Cardápios e catálogos",
      "Brindes e materiais para eventos",
      "Comunicação interna",
      "Materiais promocionais",
    ],
  },
  {
    icon: Sparkles,
    title: "Fortalecer a percepção de qualidade",
    description:
      "Uma presença digital profissional ajuda a Gráfica Certa a não competir apenas por preço. A comunicação deve transmitir qualidade, organização, agilidade, confiança, capacidade de produção, atendimento profissional e variedade de soluções.",
  },
];

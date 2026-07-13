import {
  Target,
  Globe,
  Palette,
  Image as ImageIcon,
  Share2,
  Users,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  application: string[];
  objective: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Target,
    title: "Gestão de Tráfego Pago",
    description:
      "Planejamento, criação, gerenciamento e otimização de campanhas para posicionar a Gráfica Certa diante de pessoas e empresas com potencial real de compra.",
    application: [
      "Campanhas no Google para buscas por serviços gráficos",
      "Campanhas no Instagram e Facebook",
      "Divulgação de serviços específicos",
      "Campanhas sazonais",
      "Remarketing",
      "Testes de públicos, criativos e mensagens",
      "Otimização por solicitação de orçamento",
    ],
    objective: "Gerar demanda qualificada.",
  },
  {
    icon: Globe,
    title: "Criação de Site e Landing Pages",
    description:
      "Desenvolvimento de uma presença digital profissional para organizar os serviços, apresentar trabalhos e facilitar a solicitação de orçamento.",
    application: [
      "Página inicial",
      "Catálogo de serviços",
      "Portfólio",
      "Páginas para campanhas",
      "Botões de WhatsApp",
      "Formulário de orçamento",
      "Diferenciais e FAQ",
      "Localização e informações de atendimento",
    ],
    objective: "Transformar acessos em oportunidades.",
  },
  {
    icon: Palette,
    title: "Identidade Visual e Posicionamento",
    description:
      "Organização da comunicação visual para aumentar o reconhecimento, a consistência e a percepção profissional da marca.",
    application: [
      "Padronização de cores e tipografia",
      "Direção de imagens",
      "Elementos gráficos",
      "Capas e destaques",
      "Materiais comerciais",
      "Comunicação digital",
      "Direção criativa de campanhas",
    ],
    objective: "Fortalecer a marca e a percepção de valor.",
  },
  {
    icon: ImageIcon,
    title: "Criativos para Campanhas e Redes",
    description:
      "Criação de artes, vídeos, textos e materiais pensados para chamar atenção e apresentar os serviços de maneira clara.",
    application: [
      "Cartões de visita, banners, adesivos",
      "Fachadas, placas, personalizados",
      "Ofertas sazonais",
      "Conteúdos empresariais",
      "Comparações de acabamentos",
      "Demonstrações de aplicações",
      "Antes e depois",
    ],
    objective: "Despertar interesse e gerar ação.",
  },
  {
    icon: Share2,
    title: "Estratégia para Redes Sociais",
    description:
      "Planejamento de uma comunicação que mostre capacidade, qualidade, variedade e bastidores da produção.",
    application: [
      "Portfólio e bastidores",
      "Processos de produção",
      "Entregas realizadas",
      "Materiais disponíveis",
      "Explicações sobre acabamentos",
      "Conteúdos educativos",
      "Campanhas promocionais",
      "Provas sociais reais",
    ],
    objective: "Gerar confiança e autoridade.",
  },
  {
    icon: Users,
    title: "CRM e Organização Comercial",
    description:
      "Estruturação do acompanhamento dos contatos para reduzir perdas e aumentar as possibilidades de fechamento.",
    application: [
      "Registro de contatos",
      "Etapas do atendimento",
      "Orçamentos enviados",
      "Retornos pendentes",
      "Negociações",
      "Clientes fechados e recorrentes",
      "Motivos de perda",
      "Acompanhamento de recompra",
    ],
    objective: "Transformar mais orçamentos em clientes.",
  },
  {
    icon: LineChart,
    title: "Estratégia e Otimização Contínua",
    description:
      "Acompanhamento dos dados para entender quais campanhas, públicos, serviços e abordagens estão gerando melhores oportunidades.",
    application: [
      "Análise das campanhas",
      "Análise dos serviços procurados",
      "Custo por contato",
      "Quantidade de orçamentos",
      "Taxa de resposta e de fechamento",
      "Valor médio dos pedidos",
      "Identificação de gargalos",
      "Ajustes contínuos",
    ],
    objective: "Crescer com decisões orientadas por dados.",
  },
];

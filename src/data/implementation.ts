export interface Phase {
  number: string;
  title: string;
  items: string[];
}

export const PHASES: Phase[] = [
  {
    number: "01",
    title: "Diagnóstico e Planejamento",
    items: [
      "Reunião estratégica",
      "Levantamento dos serviços",
      "Análise da presença digital",
      "Definição dos públicos",
      "Definição das prioridades",
      "Organização dos objetivos",
      "Mapeamento da jornada comercial",
    ],
  },
  {
    number: "02",
    title: "Construção da Estrutura",
    items: [
      "Organização da identidade",
      "Criação dos materiais",
      "Desenvolvimento do site ou landing page",
      "Configuração dos canais de contato",
      "Organização do WhatsApp",
      "Estruturação do acompanhamento comercial",
      "Configuração da mensuração",
    ],
  },
  {
    number: "03",
    title: "Lançamento",
    items: [
      "Publicação das páginas",
      "Lançamento das campanhas",
      "Distribuição dos criativos",
      "Testes de públicos",
      "Testes de mensagens",
      "Acompanhamento inicial dos contatos",
    ],
  },
  {
    number: "04",
    title: "Otimização e Crescimento",
    items: [
      "Análise dos dados",
      "Identificação dos melhores serviços",
      "Ajustes nos anúncios e nas páginas",
      "Melhoria dos criativos",
      "Otimização da qualificação",
      "Interrupção do que não funciona",
      "Expansão do que gera melhores oportunidades",
    ],
  },
];

export const JOURNEY_STEPS = [
  {
    title: "Descoberta",
    description:
      "O potencial cliente encontra a Gráfica Certa no Google, nas redes sociais, por indicação ou por meio de uma campanha.",
  },
  {
    title: "Interesse",
    description: "Ele visualiza um serviço, aplicação ou solução compatível com sua necessidade.",
  },
  {
    title: "Consideração",
    description:
      "Acessa o site, analisa os trabalhos, entende os diferenciais e verifica as possibilidades.",
  },
  { title: "Contato", description: "Solicita um orçamento pelo WhatsApp ou formulário." },
  {
    title: "Qualificação",
    description: "A equipe coleta as informações necessárias para compreender a demanda.",
  },
  { title: "Orçamento", description: "O cliente recebe uma proposta clara e profissional." },
  {
    title: "Acompanhamento",
    description: "Os contatos que ainda não decidiram são acompanhados de maneira organizada.",
  },
  { title: "Fechamento", description: "O orçamento é transformado em pedido." },
  {
    title: "Recorrência",
    description: "Após a entrega, o relacionamento continua para gerar futuras compras.",
  },
];

export const METRICS = [
  "Pessoas alcançadas",
  "Acessos ao site",
  "Cliques no WhatsApp",
  "Novos contatos",
  "Solicitações de orçamento",
  "Custo por contato",
  "Orçamentos enviados",
  "Taxa de resposta",
  "Taxa de fechamento",
  "Serviços mais procurados",
  "Valor médio dos pedidos",
  "Clientes recorrentes",
  "Retorno sobre o investimento",
];

export const DELIVERABLES = [
  "Estratégia personalizada",
  "Posicionamento digital",
  "Planejamento de campanhas",
  "Gestão de tráfego pago",
  "Criação de criativos",
  "Desenvolvimento de páginas",
  "Integração com WhatsApp",
  "Organização da jornada",
  "Orientação comercial",
  "Acompanhamento de indicadores",
  "Relatórios",
  "Reuniões estratégicas",
  "Testes",
  "Otimizações",
  "Suporte da equipe Impulse",
];

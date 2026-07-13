import { ArrowRight, Target, Factory, Handshake, ChevronRight, Check, MessageCircle, Search, LayoutGrid, Users, LineChart, Repeat, Instagram, Building2, Sparkles, Compass, Zap, BarChart3, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { SERVICES } from "@/data/services";
import { OPPORTUNITIES } from "@/data/opportunities";
import { PHASES, JOURNEY_STEPS, METRICS, DELIVERABLES } from "@/data/implementation";
import { WHATSAPP_URL } from "@/lib/contact";
import graficaLogo from "@/assets/grafica-certa-logo.asset.json";
import impulseLogo from "@/assets/impulse-logo.asset.json";

/* ------------ HERO ------------ */
function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full hairline bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Proposta estratégica personalizada
          </div>

          <h1 className="mt-5 text-[38px] leading-[1.05] font-bold tracking-tight md:text-[60px] lg:text-[68px]">
            Uma estrutura de <span className="text-gradient-brand">crescimento</span> criada para a Gráfica Certa
          </h1>

          <p className="mt-5 max-w-xl text-base md:text-lg text-[var(--ink-dim)] leading-relaxed">
            Uma proposta da <strong className="text-white">Impulse Assessoria</strong> para fortalecer a presença digital da Gráfica Certa, gerar novas oportunidades comerciais e transformar buscas, acessos e interações em solicitações de orçamento.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#solucoes" className="btn-primary btn-primary-hover">
              Conhecer a estratégia <ArrowRight size={16} />
            </a>
            <a href="#oportunidades" className="btn-ghost btn-ghost-hover">
              Ver oportunidades identificadas
            </a>
          </div>

          <p className="mt-6 max-w-lg text-sm text-[var(--ink-muted)]">
            Estratégia, posicionamento, tráfego, tecnologia e acompanhamento trabalhando como uma única estrutura.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <img src={impulseLogo.url} alt="Impulse Assessoria" className="h-7 w-auto opacity-90" />
            <span className="text-[var(--ink-muted)]">×</span>
            <div className="rounded-md bg-white px-3 py-1.5">
              <img src={graficaLogo.url} alt="Gráfica Certa" className="h-6 w-auto" />
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

/* ------------ VISÃO GERAL / PONTO DE PARTIDA ------------ */
function StartingPoint() {
  const cards = [
    {
      icon: Factory,
      title: "Produção",
      text: "A estrutura da gráfica transforma ideias em materiais impressos, comunicação visual e soluções personalizadas.",
    },
    {
      icon: Target,
      title: "Demanda",
      text: "A Impulse trabalha para aumentar a quantidade de pessoas e empresas interessadas nos serviços da Gráfica Certa.",
    },
    {
      icon: Handshake,
      title: "Conversão",
      text: "Criamos caminhos para transformar interesse em contato, contato em orçamento e orçamento em cliente.",
    },
  ];
  return (
    <section id="visao-geral" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ponto de partida"
          title={
            <>
              A Gráfica Certa já possui o principal:{" "}
              <span className="text-gradient-brand">capacidade para entregar</span>
            </>
          }
          subtitle="Produtos, estrutura, conhecimento técnico e capacidade de produção são a base do negócio. O próximo passo é garantir que mais pessoas e empresas encontrem a Gráfica Certa, entendam seus diferenciais e tenham um caminho rápido para solicitar um orçamento."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <div key={c.title} className="glass-card rounded-2xl p-6 relative">
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-[var(--accent)]/12 grid place-items-center text-[var(--accent)]">
                  <c.icon size={20} />
                </div>
                <span className="text-xs font-semibold tracking-widest text-[var(--ink-muted)]">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-dim)] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--ink-dim)]">
          <span className="rounded-full hairline px-4 py-2 bg-white/[0.03]">Produção</span>
          <ChevronRight size={16} className="text-[var(--accent)]" />
          <span className="rounded-full hairline px-4 py-2 bg-white/[0.03]">Demanda</span>
          <ChevronRight size={16} className="text-[var(--accent)]" />
          <span className="rounded-full hairline px-4 py-2 bg-white/[0.03]">Conversão</span>
        </div>
      </div>
    </section>
  );
}

/* ------------ OPORTUNIDADES ------------ */
function Opportunities() {
  return (
    <section id="oportunidades" className="py-20 md:py-28 bg-[var(--bg-2)]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Diagnóstico"
          title="Oportunidades que podem ser exploradas pela Gráfica Certa"
          subtitle="Uma visão estratégica das principais frentes que podem fortalecer o posicionamento, a aquisição de clientes e a geração de orçamentos."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {OPPORTUNITIES.map((op, i) => (
            <article
              key={op.title}
              className="glass-card rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--accent)]/10 grid place-items-center text-[var(--accent)] shrink-0">
                  <op.icon size={20} />
                </div>
                <span className="text-[11px] font-semibold tracking-widest text-[var(--ink-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold leading-tight">{op.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-dim)] leading-relaxed">
                {op.description}
              </p>
              {op.bullets && (
                <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm text-[var(--ink-dim)]">
                  {op.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 text-[var(--accent)] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--ink-muted)] max-w-3xl">
          As oportunidades apresentadas serão refinadas com base nos serviços reais, diferenciais, região de atendimento, público e capacidade operacional da Gráfica Certa.
        </p>
      </div>
    </section>
  );
}

/* ------------ SOLUÇÕES / SERVIÇOS ------------ */
function Services() {
  const flow = ["Atrair", "Apresentar", "Convencer", "Qualificar", "Orçar", "Fechar", "Fidelizar"];
  return (
    <section id="solucoes" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Como a Impulse se encaixa"
          title="Uma estrutura completa, não apenas ações isoladas"
          subtitle="Cada serviço da Impulse ocupa uma função específica dentro da jornada de aquisição e conversão de clientes."
        />

        <div className="mt-10 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max py-2">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full hairline bg-white/[0.03] px-3.5 py-1.5 text-sm text-[var(--ink-dim)]">
                  {step}
                </span>
                {i < flow.length - 1 && <ChevronRight size={16} className="text-[var(--accent)]" />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="glass-card rounded-2xl p-6 md:p-7 flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/25 to-[var(--brand)]/40 grid place-items-center text-[var(--accent-soft)]">
                    <s.icon size={22} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-[var(--ink-muted)]">
                    SERVIÇO {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-dim)] leading-relaxed">
                {s.description}
              </p>
              <div className="mt-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--ink-muted)]">
                  Aplicação para a Gráfica Certa
                </p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-[var(--ink-dim)]">
                  {s.application.map((a) => (
                    <li key={a} className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 text-[var(--accent)] shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 px-3 py-1.5 text-xs font-semibold text-[var(--accent-soft)]">
                <Target size={13} /> Objetivo: {s.objective}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------ EXEMPLOS PRÁTICOS ------------ */
function PracticalExamples() {
  const examples = [
    {
      icon: Search,
      tag: "Exemplo 01 — Google",
      title: "Pesquisa: “gráfica rápida perto de mim”",
      steps: [
        "A pessoa encontra um anúncio da Gráfica Certa",
        "Acessa uma página específica",
        "Visualiza serviços e diferenciais",
        "Clica para solicitar orçamento",
        "Envia informações pelo WhatsApp",
        "A equipe realiza o atendimento",
        "O contato entra no acompanhamento comercial",
      ],
    },
    {
      icon: Building2,
      tag: "Exemplo 02 — Empresas",
      title: "Campanha para clientes empresariais",
      steps: [
        "Anúncio: materiais gráficos com qualidade e agilidade",
        "Página empresarial",
        "Solicitação de orçamento",
        "Atendimento",
        "Proposta comercial",
        "Fechamento e recorrência",
      ],
    },
    {
      icon: Instagram,
      tag: "Exemplo 03 — Redes sociais",
      title: "Sequência de conteúdo comercial",
      steps: [
        "Bastidores da produção",
        "Produto finalizado",
        "Explicação do material",
        "Aplicação no estabelecimento",
        "Chamada para orçamento",
      ],
    },
    {
      icon: RefreshCw,
      tag: "Exemplo 04 — Remarketing",
      title: "Retomar contatos que já demonstraram interesse",
      steps: [
        "Quem acessou o site vê novas campanhas",
        "Conteúdos reforçam diferenciais",
        "Aumenta a chance de retomada da conversa",
      ],
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-[var(--bg-2)]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Aplicação prática"
          title="Como essa estrutura funcionaria na prática"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {examples.map((ex) => (
            <article key={ex.title} className="glass-card rounded-2xl p-6 md:p-7">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[var(--accent)]/12 grid place-items-center text-[var(--accent)]">
                  <ex.icon size={18} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                  {ex.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{ex.title}</h3>
              <ol className="mt-4 space-y-2.5">
                {ex.steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-[var(--ink-dim)]">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent)]/15 text-[10px] font-bold text-[var(--accent-soft)]">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--ink-muted)] max-w-3xl">
          Todos os exemplos são demonstrações estratégicas e não representam resultados já alcançados.
        </p>
      </div>
    </section>
  );
}

/* ------------ ESTRUTURA DIGITAL (mockup) ------------ */
function DigitalStructure() {
  const sitemap = ["Início", "Sobre", "Serviços", "Portfólio", "Soluções para empresas", "Solicitação de orçamento", "Perguntas frequentes", "Localização", "Contato", "WhatsApp"];
  const categories = ["Impressos comerciais", "Comunicação visual", "Materiais promocionais", "Adesivos e personalizados", "Fachadas e sinalização", "Materiais para eventos", "Soluções corporativas"];
  return (
    <section id="estrategia" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Presença digital"
          title="Como a presença digital da Gráfica Certa pode ser organizada"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Mockup */}
          <div className="glass-card rounded-2xl p-4 md:p-5">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <div className="ml-3 flex-1 rounded-md bg-white/[0.05] hairline px-3 py-1 text-xs text-[var(--ink-muted)]">
                graficacerta.com.br
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[var(--brand)] via-[#0a2545] to-[var(--bg-2)] p-5">
              <div className="flex items-center justify-between text-[11px] text-white/70">
                <div className="rounded bg-white px-2 py-1">
                  <img src={graficaLogo.url} alt="" className="h-4 w-auto" />
                </div>
                <nav className="hidden sm:flex gap-3">
                  {["Serviços", "Portfólio", "Empresas", "Contato"].map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </nav>
              </div>
              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-widest text-[var(--accent-soft)]">
                  Comunicação impressa
                </p>
                <h4 className="mt-1 text-xl sm:text-2xl font-bold text-white leading-tight">
                  Materiais gráficos com qualidade, agilidade e acabamento profissional
                </h4>
                <div className="mt-4 flex gap-2">
                  <span className="rounded bg-[var(--accent)] px-3 py-1.5 text-[11px] font-bold text-[var(--bg)]">
                    Solicitar orçamento
                  </span>
                  <span className="rounded hairline px-3 py-1.5 text-[11px] text-white">
                    Ver portfólio
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-4 gap-1.5">
                  {categories.slice(0, 4).map((c) => (
                    <div
                      key={c}
                      className="rounded bg-white/[0.06] hairline px-1.5 py-2 text-[9px] sm:text-[10px] text-white/90 text-center"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="glass-card rounded-2xl p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                Estrutura de páginas
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {sitemap.map((s) => (
                  <span
                    key={s}
                    className="rounded-full hairline bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--ink-dim)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                Categorias ilustrativas
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--ink-dim)]">
                {categories.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[var(--accent)] shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[var(--ink-muted)]">
                Serviço a ser definido com base no catálogo real da Gráfica Certa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------ JORNADA DO CLIENTE ------------ */
function Journey() {
  return (
    <section className="py-20 md:py-28 bg-[var(--bg-2)]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Jornada do cliente"
          title="Da primeira impressão ao fechamento"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {JOURNEY_STEPS.map((s, i) => (
            <div key={s.title} className="glass-card rounded-2xl p-5 relative">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--accent)]/12 text-[var(--accent-soft)] text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-[var(--ink-dim)] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 glass-card rounded-2xl p-6 md:p-8 text-center">
          <p className="text-base md:text-lg text-white">
            O marketing gera a oportunidade.{" "}
            <span className="text-[var(--accent-soft)]">
              A organização comercial aumenta a possibilidade de transformar essa oportunidade em receita.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------ IMPLEMENTAÇÃO ------------ */
function Implementation() {
  return (
    <section id="implementacao" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Plano de implementação"
          title="Uma implementação estruturada em etapas"
        />
        <div className="mt-12 relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((p) => (
            <div key={p.number} className="glass-card rounded-2xl p-6 flex flex-col">
              <span className="text-4xl font-bold text-gradient-brand leading-none">
                {p.number}
              </span>
              <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--ink-dim)]">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent)]/[0.06] p-6 md:p-7 text-center">
          <p className="text-base md:text-lg text-white">
            Estratégia sem acompanhamento vira tentativa.{" "}
            <span className="text-[var(--accent-soft)]">
              Nosso trabalho é construir, analisar e melhorar continuamente.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------ INDICADORES ------------ */
function Indicators() {
  return (
    <section id="indicadores" className="py-20 md:py-28 bg-[var(--bg-2)]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Indicadores"
          title="O que pode ser acompanhado"
          subtitle="O objetivo não é medir apenas curtidas ou visualizações. O acompanhamento deve conectar o investimento em marketing às oportunidades comerciais geradas para a Gráfica Certa."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <div
              key={m}
              className="glass-card rounded-xl p-5 hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <BarChart3 size={16} className="text-[var(--accent)]" />
                <span className="text-[10px] font-semibold tracking-widest text-[var(--ink-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold text-white">{m}</p>
              <p className="mt-1 text-xs text-[var(--ink-muted)]">Métrica a ser acompanhada</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------ ENTREGAS ------------ */
function Deliverables() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Possíveis entregas"
          title="Uma parceria voltada para crescimento"
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {DELIVERABLES.map((d) => (
            <div
              key={d}
              className="flex items-center gap-3 rounded-xl hairline bg-white/[0.02] px-4 py-3.5 text-sm text-[var(--ink-dim)]"
            >
              <Check size={16} className="text-[var(--accent)] shrink-0" />
              {d}
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-[var(--ink-muted)] max-w-3xl">
          As entregas definitivas serão definidas no escopo comercial, de acordo com as prioridades e necessidades da Gráfica Certa.
        </p>
      </div>
    </section>
  );
}

/* ------------ POR QUE A IMPULSE ------------ */
function WhyImpulse() {
  const pillars = [
    { icon: Compass, title: "Estratégia", text: "Cada ação parte de um objetivo comercial e de um planejamento." },
    { icon: Zap, title: "Execução", text: "A equipe desenvolve campanhas, páginas, criativos e estruturas necessárias para colocar a estratégia em prática." },
    { icon: BarChart3, title: "Dados", text: "As decisões são tomadas com base no comportamento do público e nas oportunidades geradas." },
    { icon: RefreshCw, title: "Evolução", text: "A estratégia é ajustada continuamente para buscar mais eficiência e melhores resultados." },
  ];
  return (
    <section className="py-20 md:py-28 bg-[var(--bg-2)]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Por que a Impulse"
          title="Mais do que divulgação: uma estrutura conectada ao comercial"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="glass-card rounded-2xl p-6">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[var(--accent)]/25 to-[var(--brand)]/40 grid place-items-center text-[var(--accent-soft)]">
                <p.icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-dim)] leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 glass-card rounded-2xl p-6 md:p-10 text-center max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-[var(--ink-dim)] leading-relaxed">
            A Impulse Assessoria ajuda empresas a fortalecerem sua presença digital, atraírem potenciais clientes e criarem processos mais organizados de aquisição. Unimos estratégia, criatividade, tecnologia e análise para desenvolver estruturas que conectam marketing e vendas.
          </p>
          <p className="mt-6 text-lg md:text-xl font-bold text-gradient-brand">
            Transformar presença digital em oportunidades reais de crescimento.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------ VISÃO DE FUTURO ------------ */
function FutureVision() {
  const nodes = [
    { icon: Search, label: "Pesquisa" },
    { icon: Instagram, label: "Redes sociais" },
    { icon: LayoutGrid, label: "Site" },
    { icon: MessageCircle, label: "WhatsApp" },
    { icon: Users, label: "CRM" },
    { icon: LineChart, label: "Orçamento" },
    { icon: Handshake, label: "Cliente" },
    { icon: Repeat, label: "Recompra" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Visão de futuro"
          title="A Gráfica Certa não precisa depender apenas de indicação ou movimento espontâneo"
          subtitle="Com uma estrutura organizada, a empresa pode ampliar sua presença, alcançar novos públicos, conquistar clientes empresariais, estimular a recorrência e acompanhar com mais clareza a origem das oportunidades."
        />
        <div className="mt-12 glass-card rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nodes.map((n, i) => (
              <div key={n.label} className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--accent)]/12 grid place-items-center text-[var(--accent-soft)] shrink-0">
                  <n.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold tracking-widest text-[var(--ink-muted)]">
                    ETAPA {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm font-semibold text-white truncate">{n.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xl md:text-2xl font-bold text-gradient-brand">
            Transformar capacidade de produção em crescimento comercial.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------ PRÓXIMOS PASSOS ------------ */
function NextSteps() {
  const steps = [
    { title: "Reunião de alinhamento", text: "Uma conversa inicial para entender contexto, prioridades e objetivos." },
    { title: "Definição das prioridades", text: "Identificação das frentes que trazem mais impacto no curto e médio prazo." },
    { title: "Construção do plano personalizado", text: "Escopo detalhado, cronograma e indicadores de acompanhamento." },
  ];
  return (
    <section id="proximos-passos" className="py-20 md:py-28 bg-[var(--bg-2)]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Próximos passos"
          title="O próximo passo é construir essa estratégia junto com a Gráfica Certa"
          subtitle="Esta apresentação representa uma visão inicial de como a Impulse pode contribuir com o posicionamento, a aquisição de clientes e a organização comercial da Gráfica Certa. O escopo final será construído considerando as prioridades, a capacidade de atendimento e os objetivos da empresa."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="glass-card rounded-2xl p-6">
              <span className="text-3xl font-bold text-gradient-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-dim)] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary btn-primary-hover">
            Agendar reunião estratégica <ArrowRight size={16} />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-ghost btn-ghost-hover">
            Falar com a Impulse
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------ CTA FINAL ------------ */
function FinalCta() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 400px at 50% 30%, rgba(56,189,248,0.22), transparent 60%)",
        }}
      />
      <div className="container-page text-center">
        <div className="inline-flex items-center gap-4 mb-8">
          <img src={impulseLogo.url} alt="Impulse Assessoria" className="h-8 w-auto" />
          <span className="text-[var(--ink-muted)]">×</span>
          <div className="rounded-md bg-white px-3 py-1.5">
            <img src={graficaLogo.url} alt="Gráfica Certa" className="h-6 w-auto" />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
          Vamos transformar boas oportunidades em <span className="text-gradient-brand">novos negócios</span> para a Gráfica Certa?
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-[var(--ink-dim)]">
          A Impulse está pronta para construir uma estrutura de marketing, presença digital e aquisição de clientes alinhada ao momento e aos objetivos da empresa.
        </p>
        <div className="mt-8 flex justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary btn-primary-hover">
            <MessageCircle size={16} /> Iniciar conversa
          </a>
        </div>
        <p className="mt-8 text-sm text-[var(--ink-muted)]">
          Estratégia, criatividade, tecnologia e crescimento.
        </p>
      </div>
    </section>
  );
}

import { SystemSection } from "@/components/SystemSection";

export function PresentationPage() {
  return (
    <>
      <Hero />
      <StartingPoint />
      <Opportunities />
      <Services />
      <SystemSection />
      <PracticalExamples />
      <DigitalStructure />
      <Journey />
      <Implementation />
      <Indicators />
      <Deliverables />
      <WhyImpulse />
      <FutureVision />
      <NextSteps />
      <FinalCta />
    </>
  );
}

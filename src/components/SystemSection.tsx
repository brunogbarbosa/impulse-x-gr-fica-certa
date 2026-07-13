import {
  LayoutDashboard,
  ClipboardList,
  Factory,
  FileText,
  Users,
  Wallet,
  Bell,
  Search,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle2,
  Printer,
  Package,
  Sparkles,
  ArrowUpRight,
  MoreHorizontal,
  Filter,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GRAFICA_CERTA_LOGO } from "@/assets/brand";

/* Fake but plausible data — clearly framed as an illustrative mockup */
const KPIS = [
  {
    label: "Orçamentos no mês",
    value: "—",
    hint: "Pipeline",
    delta: "+ acompanhar",
    icon: FileText,
    up: true,
  },
  {
    label: "Pedidos em produção",
    value: "18",
    hint: "Hoje",
    delta: "5 hoje",
    icon: Factory,
    up: true,
  },
  {
    label: "Taxa de fechamento",
    value: "—",
    hint: "Últimos 30 dias",
    delta: "meta",
    icon: TrendingUp,
    up: true,
  },
  {
    label: "Ticket médio",
    value: "—",
    hint: "Ilustrativo",
    delta: "a calibrar",
    icon: Wallet,
    up: false,
  },
];

const KANBAN: {
  title: string;
  color: string;
  cards: { id: string; client: string; product: string; qty: string; due: string }[];
}[] = [
  {
    title: "Arte / Aprovação",
    color: "var(--accent)",
    cards: [
      {
        id: "#4821",
        client: "Padaria São Bento",
        product: "Cardápio A4",
        qty: "50 un",
        due: "hoje",
      },
      {
        id: "#4820",
        client: "Clínica Vitta",
        product: "Cartões de visita",
        qty: "1.000 un",
        due: "2d",
      },
    ],
  },
  {
    title: "Em produção",
    color: "#eab308",
    cards: [
      { id: "#4818", client: "Studio Modena", product: "Adesivos vinil", qty: "300 un", due: "1d" },
      { id: "#4817", client: "Construtora Alvo", product: "Fachada ACM", qty: "1 un", due: "5d" },
      { id: "#4815", client: "Café Aroma", product: "Banner 1x2m", qty: "3 un", due: "amanhã" },
    ],
  },
  {
    title: "Acabamento",
    color: "#a78bfa",
    cards: [
      {
        id: "#4812",
        client: "Escola Nova Era",
        product: "Panfleto A5",
        qty: "5.000 un",
        due: "hoje",
      },
    ],
  },
  {
    title: "Pronto p/ entrega",
    color: "var(--success)",
    cards: [
      {
        id: "#4809",
        client: "Restaurante Prata",
        product: "Cardápio couché",
        qty: "80 un",
        due: "ok",
      },
      {
        id: "#4808",
        client: "Ótica Visão",
        product: "Sacolas personalizadas",
        qty: "500 un",
        due: "ok",
      },
    ],
  },
];

const QUOTES = [
  {
    id: "OR-2381",
    client: "Condomínio Alfa",
    item: "Sinalização interna",
    status: "Aguardando cliente",
    tone: "warn",
  },
  {
    id: "OR-2380",
    client: "Academia Force",
    item: "Banners promocionais",
    status: "Enviado",
    tone: "info",
  },
  {
    id: "OR-2378",
    client: "Igreja Central",
    item: "Panfleto de evento",
    status: "Aprovado",
    tone: "ok",
  },
  {
    id: "OR-2376",
    client: "Loja Bella",
    item: "Cartão fidelidade",
    status: "Em análise",
    tone: "muted",
  },
] as const;

const toneStyles: Record<string, string> = {
  warn: "bg-yellow-400/15 text-yellow-300 border-yellow-400/25",
  info: "bg-[var(--accent)]/15 text-[var(--accent-soft)] border-[var(--accent)]/30",
  ok: "bg-[var(--success)]/15 text-[#86efac] border-[var(--success)]/30",
  muted: "bg-white/[0.06] text-[var(--ink-dim)] border-[var(--border-soft)]",
};

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ClipboardList, label: "Pedidos" },
  { icon: Factory, label: "Produção" },
  { icon: FileText, label: "Orçamentos" },
  { icon: Users, label: "Clientes" },
  { icon: Wallet, label: "Financeiro" },
];

export function SystemSection() {
  return (
    <section id="sistema" className="py-12 md:py-16 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 80% 0%, rgba(56,189,248,0.14), transparent 60%), radial-gradient(700px 400px at 0% 60%, rgba(0,41,89,0.55), transparent 60%)",
        }}
      />

      <div className="container-page">
        <SectionHeading
          eyebrow="Tecnologia proprietária"
          title={
            <>
              Um <span className="text-gradient-brand">sistema de gestão</span> pensado para a
              rotina da gráfica
            </>
          }
          subtitle="Mais do que marketing: a Impulse pode construir uma plataforma para centralizar orçamentos, pedidos, produção, clientes e indicadores em um só lugar — conectada ao WhatsApp e ao site, com dados prontos para decisões comerciais."
        />

        {/* Feature strip */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ClipboardList,
              t: "Pedidos organizados",
              d: "Todo pedido em um lugar, com histórico e status.",
            },
            {
              icon: Factory,
              t: "Produção visível",
              d: "Kanban da arte à entrega, sem planilha perdida.",
            },
            {
              icon: FileText,
              t: "Orçamentos rápidos",
              d: "Modelos prontos e envio direto ao cliente.",
            },
            { icon: Users, t: "CRM integrado", d: "Cada contato do WhatsApp vira oportunidade." },
          ].map((f) => (
            <div key={f.t} className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-lg bg-[var(--accent)]/12 grid place-items-center text-[var(--accent-soft)]">
                  <f.icon size={16} />
                </div>
                <p className="text-sm font-semibold text-white">{f.t}</p>
              </div>
              <p className="mt-2 text-xs text-[var(--ink-muted)] leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="mt-8 relative">
          {/* Ambient glow */}
          <div
            aria-hidden
            className="absolute -inset-4 md:-inset-6 rounded-[2rem] blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(500px 300px at 30% 20%, rgba(56,189,248,0.28), transparent 60%), radial-gradient(400px 300px at 90% 90%, rgba(125,211,252,0.18), transparent 60%)",
            }}
          />

          <div className="relative rounded-2xl md:rounded-3xl border border-[var(--border-strong)] bg-[#050d18] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-soft)] bg-[#040a13]">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <div className="mx-auto rounded-md hairline bg-white/[0.03] px-3 py-1 text-[11px] text-[var(--ink-muted)]">
                app.graficacerta.com.br / dashboard
              </div>
            </div>

            <div className="grid md:grid-cols-[220px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r border-[var(--border-soft)] bg-[#040a13] p-3 md:block md:p-4">
                <div className="hidden md:flex items-center gap-2 px-2 mb-6">
                  <div className="rounded bg-white px-1.5 py-1">
                    <img
                      src={GRAFICA_CERTA_LOGO}
                      alt=""
                      className="h-auto w-[86px] object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest text-[var(--ink-muted)]">
                    GESTÃO
                  </span>
                </div>
                <nav className="space-y-1">
                  {NAV.map((n) => (
                    <div
                      key={n.label}
                      className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs md:text-sm ${
                        n.active
                          ? "bg-[var(--accent)]/12 text-white border border-[var(--accent)]/25"
                          : "text-[var(--ink-muted)]"
                      }`}
                    >
                      <n.icon size={15} className={n.active ? "text-[var(--accent)]" : ""} />
                      <span className="hidden md:inline">{n.label}</span>
                    </div>
                  ))}
                </nav>

                <div className="hidden md:block mt-8 rounded-xl border border-[var(--accent)]/25 bg-gradient-to-br from-[var(--accent)]/12 to-transparent p-3">
                  <Sparkles size={14} className="text-[var(--accent)]" />
                  <p className="mt-1.5 text-[11px] font-semibold text-white leading-tight">
                    Copiloto Impulse
                  </p>
                  <p className="mt-1 text-[10px] text-[var(--ink-muted)] leading-snug">
                    Sugestões de recompra e alertas de gargalo.
                  </p>
                </div>
              </aside>

              {/* Main */}
              <div className="p-4 md:p-6 min-w-0">
                {/* Topbar */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-2 rounded-lg hairline bg-white/[0.03] px-3 py-2 text-xs text-[var(--ink-muted)] min-w-0">
                    <Search size={13} />
                    <span className="truncate">Buscar pedido, cliente ou orçamento…</span>
                  </div>
                  <button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg hairline bg-white/[0.03] px-3 py-2 text-xs text-[var(--ink-dim)]">
                    <Filter size={13} /> Filtros
                  </button>
                  <button className="relative inline-flex items-center justify-center h-9 w-9 rounded-lg hairline bg-white/[0.03] text-[var(--ink-dim)]">
                    <Bell size={14} />
                    <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  </button>
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--brand)] grid place-items-center text-[11px] font-bold text-[var(--bg)]">
                    GC
                  </div>
                </div>

                {/* KPI Row */}
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {KPIS.map((k) => (
                    <div
                      key={k.label}
                      className="rounded-xl border border-[var(--border-soft)] bg-white/[0.02] p-3.5"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)]">
                          {k.label}
                        </p>
                        <k.icon size={13} className="text-[var(--accent)]" />
                      </div>
                      <p className="mt-2 text-2xl font-bold text-white">{k.value}</p>
                      <div className="mt-1 flex items-center gap-1 text-[10px]">
                        {k.up ? (
                          <TrendingUp size={11} className="text-[var(--success)]" />
                        ) : (
                          <TrendingDown size={11} className="text-[var(--ink-muted)]" />
                        )}
                        <span className="text-[var(--ink-muted)]">{k.delta}</span>
                        <span className="ml-auto text-[var(--ink-muted)]">{k.hint}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Kanban */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Factory size={14} className="text-[var(--accent)]" />
                      <h4 className="text-sm font-semibold text-white">Produção — hoje</h4>
                    </div>
                    <button className="text-[11px] text-[var(--ink-muted)] inline-flex items-center gap-1 hover:text-white">
                      Ver todos <ArrowUpRight size={11} />
                    </button>
                  </div>
                  <div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {KANBAN.map((col) => (
                        <div
                          key={col.title}
                          className="rounded-xl border border-[var(--border-soft)] bg-white/[0.02] p-3"
                        >
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="flex items-center gap-2">
                              <span
                                className="h-2 w-2 rounded-full"
                                style={{ background: col.color }}
                              />
                              <p className="text-[11px] font-semibold text-white">{col.title}</p>
                            </div>
                            <span className="text-[10px] text-[var(--ink-muted)]">
                              {col.cards.length}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {col.cards.map((c) => (
                              <div key={c.id} className="rounded-lg hairline bg-[#081627] p-2.5">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-mono text-[var(--ink-muted)]">
                                    {c.id}
                                  </span>
                                  <MoreHorizontal size={12} className="text-[var(--ink-muted)]" />
                                </div>
                                <p className="mt-1 text-[12px] font-semibold text-white leading-tight">
                                  {c.product}
                                </p>
                                <p className="text-[10px] text-[var(--ink-dim)] truncate">
                                  {c.client}
                                </p>
                                <div className="mt-2 flex items-center justify-between text-[10px]">
                                  <span className="inline-flex items-center gap-1 text-[var(--ink-muted)]">
                                    <Package size={10} /> {c.qty}
                                  </span>
                                  <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.05] px-1.5 py-0.5 text-[var(--ink-dim)]">
                                    <Clock size={9} /> {c.due}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quotes + WhatsApp panel */}
                <div className="mt-5 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
                  <div className="rounded-xl border border-[var(--border-soft)] bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FileText size={14} className="text-[var(--accent)]" />
                        <h4 className="text-sm font-semibold text-white">Orçamentos recentes</h4>
                      </div>
                      <button className="text-[11px] text-[var(--ink-muted)] inline-flex items-center gap-1 hover:text-white">
                        Abrir <ArrowUpRight size={11} />
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[12px] min-w-[420px]">
                        <thead>
                          <tr className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)]">
                            <th className="pb-2 font-medium">Nº</th>
                            <th className="pb-2 font-medium">Cliente</th>
                            <th className="pb-2 font-medium">Item</th>
                            <th className="pb-2 font-medium text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--border-soft)]">
                          {QUOTES.map((q) => (
                            <tr key={q.id} className="text-[var(--ink-dim)]">
                              <td className="py-2.5 font-mono text-[11px] text-[var(--ink-muted)]">
                                {q.id}
                              </td>
                              <td className="py-2.5 text-white font-medium">{q.client}</td>
                              <td className="py-2.5">{q.item}</td>
                              <td className="py-2.5 text-right">
                                <span
                                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${toneStyles[q.tone]}`}
                                >
                                  {q.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[var(--border-soft)] bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Printer size={14} className="text-[var(--accent)]" />
                        <h4 className="text-sm font-semibold text-white">Mais procurados</h4>
                      </div>
                      <span className="text-[10px] text-[var(--ink-muted)]">Últimos 30 dias</span>
                    </div>
                    <ul className="space-y-2.5">
                      {[
                        { name: "Cartões de visita", pct: 82 },
                        { name: "Adesivos personalizados", pct: 68 },
                        { name: "Banners e lonas", pct: 54 },
                        { name: "Cardápios", pct: 41 },
                        { name: "Fachadas / ACM", pct: 28 },
                      ].map((it) => (
                        <li key={it.name}>
                          <div className="flex items-center justify-between text-[11px] text-[var(--ink-dim)]">
                            <span>{it.name}</span>
                            <span className="text-[var(--ink-muted)]">{it.pct}%</span>
                          </div>
                          <div className="mt-1 h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[var(--accent-soft)] to-[var(--accent)]"
                              style={{ width: `${it.pct}%` }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-[var(--accent)]/25 bg-[var(--accent)]/[0.06] p-2.5">
                      <CheckCircle2 size={14} className="text-[var(--accent-soft)] shrink-0" />
                      <p className="text-[11px] text-[var(--ink-dim)] leading-snug">
                        <span className="text-white font-semibold">3 clientes</span> podem estar
                        prontos para recompra este mês.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-[var(--ink-muted)] text-center max-w-3xl mx-auto">
          Interface ilustrativa. O sistema final é construído sob medida, considerando o fluxo real
          de produção, atendimento e comercial da Gráfica Certa.
        </p>
      </div>
    </section>
  );
}

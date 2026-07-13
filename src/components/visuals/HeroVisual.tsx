import { Search, MessageCircle, TrendingUp, Sparkles, Printer, Layers } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-[2rem] blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(500px 300px at 70% 30%, rgba(56,189,248,0.25), transparent 60%), radial-gradient(400px 300px at 20% 80%, rgba(0,41,89,0.55), transparent 60%)",
        }}
      />

      <div className="relative grid grid-cols-6 gap-3 md:gap-4">
        {/* Search / Google mock */}
        <div className="col-span-6 glass-card rounded-2xl p-4 md:p-5 animate-fade-up">
          <div className="flex items-center gap-2 rounded-lg bg-white/[0.04] hairline px-3 py-2 text-sm text-[var(--ink-dim)]">
            <Search size={16} className="text-[var(--accent)]" />
            gráfica rápida perto de mim
          </div>
          <div className="mt-3 space-y-2">
            <div className="rounded-lg hairline bg-white/[0.02] p-3">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--accent-soft)]">
                <span className="rounded bg-[var(--accent)]/15 px-1.5 py-0.5 text-[var(--accent)]">
                  Anúncio
                </span>
                graficacerta.com.br
              </div>
              <p className="mt-1.5 text-sm font-semibold text-white">
                Gráfica Certa — Orçamento em minutos
              </p>
              <p className="text-xs text-[var(--ink-muted)]">
                Cartões, banners, adesivos e comunicação visual com qualidade e agilidade.
              </p>
            </div>
          </div>
        </div>

        {/* Site mock */}
        <div className="col-span-6 sm:col-span-3 glass-card rounded-2xl p-4 animate-fade-up">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </div>
          <div className="rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--bg-2)] p-3">
            <p className="text-[10px] uppercase tracking-widest text-[var(--accent-soft)]">
              Gráfica Certa
            </p>
            <p className="mt-1 text-[13px] font-bold leading-tight text-white">
              Comunicação impressa para sua empresa
            </p>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {["Cartões", "Banners", "Adesivos", "Fachadas", "Cardápios", "Placas"].map((t) => (
                <div
                  key={t}
                  className="rounded bg-white/[0.06] px-1.5 py-1 text-[9px] text-white/85 text-center"
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="mt-3 rounded bg-[var(--accent)] px-2 py-1.5 text-[10px] font-bold text-[var(--bg)] text-center">
              Solicitar orçamento
            </div>
          </div>
        </div>

        {/* WhatsApp mock */}
        <div className="col-span-6 sm:col-span-3 glass-card rounded-2xl p-4 animate-fade-up">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-7 w-7 rounded-full bg-[#22c55e]/20 grid place-items-center">
              <MessageCircle size={14} className="text-[#22c55e]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Novo contato</p>
              <p className="text-[10px] text-[var(--ink-muted)]">via WhatsApp</p>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-[var(--ink-dim)]">
              Oi! Preciso de 500 cartões de visita.
            </div>
            <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-[#22c55e]/15 px-2.5 py-1.5 text-[11px] text-white">
              Claro! Prefere verniz ou laminação?
            </div>
            <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-[var(--ink-dim)]">
              Laminação fosca, pode enviar o orçamento?
            </div>
          </div>
        </div>

        {/* Metric cards */}
        <div className="col-span-3 sm:col-span-2 glass-card rounded-2xl p-4 animate-fade-up">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)]">
              Solicitações
            </p>
            <TrendingUp size={14} className="text-[var(--accent)]" />
          </div>
          <p className="mt-2 text-2xl font-bold text-white">—</p>
          <p className="text-[10px] text-[var(--ink-muted)]">Métrica a acompanhar</p>
          <div className="mt-3 flex items-end gap-1 h-10">
            {[30, 45, 38, 60, 55, 78, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[var(--accent)]/30 to-[var(--accent)]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="col-span-3 sm:col-span-2 glass-card rounded-2xl p-4 animate-fade-up">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)]">
              Campanhas
            </p>
            <Sparkles size={14} className="text-[var(--accent)]" />
          </div>
          <p className="mt-2 text-2xl font-bold text-white">Ativas</p>
          <ul className="mt-2 space-y-1 text-[11px] text-[var(--ink-dim)]">
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> Google — busca
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" /> Instagram
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-soft)]" /> Remarketing
            </li>
          </ul>
        </div>

        <div className="col-span-6 sm:col-span-2 glass-card rounded-2xl p-4 animate-fade-up">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)]">
              Serviços
            </p>
            <Layers size={14} className="text-[var(--accent)]" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            {[
              { icon: Printer, label: "Impressos" },
              { icon: Layers, label: "Adesivos" },
              { icon: Sparkles, label: "Personalizados" },
              { icon: Search, label: "Sinalização" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-md hairline bg-white/[0.02] px-2 py-1.5"
              >
                <Icon size={12} className="text-[var(--accent-soft)]" />
                <span className="text-[10px] text-[var(--ink-dim)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

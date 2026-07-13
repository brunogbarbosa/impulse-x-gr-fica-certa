import { Instagram, Mail, MessageCircle } from "lucide-react";
import impulseLogo from "@/assets/impulse-logo.asset.json";
import { CONTACT_CONFIG, WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--bg-2)]">
      <div className="container-page py-14 grid gap-10 md:grid-cols-3">
        <div>
          <img src={impulseLogo.url} alt="Impulse Assessoria" className="h-8 w-auto mb-4" />
          <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
            Apresentação estratégica desenvolvida exclusivamente para a Gráfica Certa.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)] mb-4">
            Contato
          </p>
          <ul className="space-y-3 text-sm text-[var(--ink-dim)]">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <MessageCircle size={16} className="text-[var(--accent)]" />
                {CONTACT_CONFIG.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Instagram size={16} className="text-[var(--accent)]" />
                @{CONTACT_CONFIG.instagram}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Mail size={16} className="text-[var(--accent)]" />
                {CONTACT_CONFIG.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)] mb-4">
            Proposta
          </p>
          <p className="text-sm text-[var(--ink-dim)] leading-relaxed">
            Estratégia, criatividade, tecnologia e crescimento — construídos junto com a Gráfica Certa.
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--border-soft)]">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--ink-muted)]">
          <p>© {new Date().getFullYear()} Impulse Assessoria. Todos os direitos reservados.</p>
          <p>Impulse Assessoria × Gráfica Certa</p>
        </div>
      </div>
    </footer>
  );
}

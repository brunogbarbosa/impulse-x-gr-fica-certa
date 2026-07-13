import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "@/data/nav";
import { WHATSAPP_URL } from "@/lib/contact";
import { IMPULSE_LOGO } from "@/assets/brand";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(6,17,31,0.85)] border-b border-[var(--border-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-3 shrink-0" aria-label="Impulse Assessoria">
          <img
            src={IMPULSE_LOGO}
            alt="Impulse Assessoria"
            className="h-auto w-[118px] object-contain md:w-[142px]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-[var(--ink-dim)] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-primary btn-primary-hover !py-2.5 !px-4 !text-[0.85rem]"
          >
            <MessageCircle size={16} /> Falar sobre o projeto
          </a>
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hairline text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--border-soft)] bg-[var(--bg)]">
          <nav className="container-page py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-[var(--ink-dim)] hover:text-white border-b border-[var(--border-soft)] last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary btn-primary-hover mt-3 justify-center"
            >
              <MessageCircle size={16} /> Falar sobre o projeto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

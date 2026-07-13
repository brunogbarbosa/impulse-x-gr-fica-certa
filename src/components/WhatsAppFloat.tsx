import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Impulse no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-3 text-sm font-semibold text-[#06111f] shadow-[0_12px_40px_-10px_rgba(34,197,94,0.6)] transition-transform hover:-translate-y-0.5 md:bottom-6 md:right-6"
    >
      <MessageCircle size={20} strokeWidth={2.4} />
      <span className="hidden md:inline">Falar com a Impulse</span>
    </a>
  );
}

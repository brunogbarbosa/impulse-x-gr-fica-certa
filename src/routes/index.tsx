import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PresentationPage } from "@/components/PresentationPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Impulse Assessoria × Gráfica Certa" },
      {
        name: "description",
        content:
          "Proposta estratégica da Impulse Assessoria para a Gráfica Certa: presença digital, aquisição de clientes e geração de orçamentos.",
      },
      { property: "og:title", content: "Impulse Assessoria × Gráfica Certa" },
      {
        property: "og:description",
        content:
          "Uma proposta estratégica de marketing, presença digital e aquisição de clientes para a Gráfica Certa.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white">
      <Header />
      <main>
        <PresentationPage />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

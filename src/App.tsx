import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PresentationPage } from "@/components/PresentationPage";

export function App() {
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

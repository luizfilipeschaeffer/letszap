import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HelpCenterHero from '@/components/help/HelpCenterHero';
import FAQSection from '@/components/help/FAQSection';
import InstructionsSection from '@/components/help/InstructionsSection';
import ContactSupport from '@/components/help/ContactSupport';

export const metadata = {
  title: 'Central de Ajuda - LetsZap',
  description: 'Encontre respostas para suas dúvidas e aprenda a usar a plataforma LetsZap',
};

export default function AjudaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HelpCenterHero />
        <FAQSection />
        <InstructionsSection />
        <ContactSupport />
      </main>
      <Footer />
    </div>
  );
}

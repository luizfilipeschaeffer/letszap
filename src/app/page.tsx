import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PricingSection from '@/components/PricingSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BenefitsSection />
        <FeaturesSection />
        <WhyChooseSection />
        <PricingSection />
        <GuaranteeSection />
      </main>
      <Footer />
    </div>
  );
}

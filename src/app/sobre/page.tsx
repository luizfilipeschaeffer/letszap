import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutStats from '@/components/about/AboutStats';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'Sobre a LetsZap - Nossa História e Missão',
  description: 'Conheça a LetsZap, nossa missão, valores e como estamos transformando o atendimento digital no Brasil',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutStats />
        <AboutTeam />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/sections/Hero';
import PainPoints from './components/sections/PainPoints';
import Methodology from './components/sections/Methodology';
import Roadmap from './components/sections/Roadmap';
import Founder from './components/sections/Founder';
import SocialProof from './components/sections/SocialProof';
import CtaSection from './components/sections/CtaSection';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-neon-dark text-slate-200 selection:bg-neon-blue selection:text-black overflow-hidden">
      {/* Background & Animations */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <BackgroundEffects />
      </div>

      {/* Content Stack */}
      <div className="relative z-10 flex flex-col gap-0">
        <Hero />
        <PainPoints />
        <Methodology />
        <Founder />
        <Roadmap />
        <SocialProof />
        <CtaSection />
        <Faq />
        <Footer />
      </div>

      <FloatingWhatsApp />
    </main>
  );
};

export default App;
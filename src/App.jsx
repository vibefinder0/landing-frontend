import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import ForUsers from './components/ForUsers.jsx';
import ForPros from './components/ForPros.jsx';
import Pricing from './components/Pricing.jsx';
import Tech from './components/Tech.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import faqData from './data/faq.js';

const SECTIONS = [
  { id: 'cosa-facciamo', label: 'Cosa facciamo' },
  { id: 'come-funziona', label: 'Come funziona' },
  { id: 'per-utenti', label: 'Per utenti' },
  { id: 'per-professionisti', label: 'Per professionisti' },
  { id: 'prezzi', label: 'Prezzi' },
  { id: 'tecnologia', label: 'Tecnologia' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contatti', label: 'Contatti' }
];

function App() {
  const sectionMap = useMemo(() => SECTIONS, []);
  const [activeSection, setActiveSection] = useState(sectionMap[0].id);

  const handleScrollTo = useCallback((targetId) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const headerOffset = 96;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition >= 0 ? offsetPosition : 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      let currentSection = sectionMap[0].id;

      for (const section of sectionMap) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionMap]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        sections={sectionMap}
        onNavigate={handleScrollTo}
        activeSection={activeSection}
      />
      <main className="flex flex-col gap-24 pb-24">
        <Hero
          onPrimaryClick={() => handleScrollTo('contatti')}
          onSecondaryClick={() => handleScrollTo('come-funziona')}
        />
        <Features id="cosa-facciamo" />
        <HowItWorks id="come-funziona" />
        <ForUsers id="per-utenti" />
        <ForPros id="per-professionisti" onCtaClick={() => handleScrollTo('contatti')} />
        <Pricing id="prezzi" />
        <Tech id="tecnologia" />
        <FAQ id="faq" items={faqData} />
        <Contact id="contatti" />
      </main>
      <Footer sections={sectionMap} onNavigate={handleScrollTo} />
    </div>
  );
}

export default App;

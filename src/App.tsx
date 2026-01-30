import { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { useServiceWorker } from './hooks/useServiceWorker';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import KeyFigures from './components/KeyFigures';
import EventsSection from './components/EventsSection';
import BlogSection from './components/BlogSection';
import TeamSection from './components/TeamSection';
import PartnersSection, { type PartnersSectionRef } from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InstallPrompt from './components/InstallPrompt';
import IOSInstallGuide from './components/IOSInstallGuide';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const partnersSectionRef = useRef<PartnersSectionRef>(null);

  // Register service worker
  useServiceWorker();

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero />
            <KeyFigures />
          </>
        );
      case 'events':
        return <EventsSection />;
      case 'blog':
        return <BlogSection />;
      case 'team':
        return <TeamSection />;
      case 'partners':
        return <PartnersSection ref={partnersSectionRef} />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <Hero />
            <KeyFigures />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen text-white transition-colors duration-300">

        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="pt-16">
          {renderContent()}
        </main>

        <Footer setActiveTab={setActiveTab} />

        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-citadingue-blue/30 dark:bg-blue-500/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-citadingue-mint/10 dark:bg-teal-500/10 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-citadingue-dark/50 dark:bg-gray-800/50 rounded-full blur-3xl"></div>
        </div>

        {/* PWA Install Prompt */}
        <InstallPrompt />

        {/* iOS Install Guide */}
        <IOSInstallGuide />
      </div>
    </ThemeProvider>
  );
}

export default App;

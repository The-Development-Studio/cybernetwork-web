import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Training } from './components/pages/Training';
import { Services } from './components/pages/Services';
import { Portfolio } from './components/pages/Portfolio';
import { Contact } from './components/pages/Contact';
import { HireOurTeam } from './components/pages/HireOurTeam';
import { WebAppPentesting } from './components/pages/services/WebAppPentesting';
import { MobileAppPentesting } from './components/pages/services/MobileAppPentesting';
import { NetworkPentesting } from './components/pages/services/NetworkPentesting';
import { SOC } from './components/pages/services/SOC';
import { QATesting } from './components/pages/services/QATesting';
import { NetworkDesign } from './components/pages/services/NetworkDesign';
import { FirewallSetup } from './components/pages/services/FirewallSetup';
import { NetworkTroubleshooting } from './components/pages/services/NetworkTroubleshooting';
import { HireWebPentester } from './components/pages/hire/HireWebPentester';
import { HireMobilePentester } from './components/pages/hire/HireMobilePentester';
import { HireNetworkPentester } from './components/pages/hire/HireNetworkPentester';
import { HireSOCAnalyst } from './components/pages/hire/HireSOCAnalyst';
import { HireQAEngineer } from './components/pages/hire/HireQAEngineer';
import { HireNetworkEngineer } from './components/pages/hire/HireNetworkEngineer';
import { CCNATraining } from './components/pages/training/CCNATraining';
import { CEHTraining } from './components/pages/training/CEHTraining';
import { LinuxTraining } from './components/pages/training/LinuxTraining';
import { PythonTraining } from './components/pages/training/PythonTraining';
import { PaloAltoTraining } from './components/pages/training/PaloAltoTraining';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize path from URL on mount
  useEffect(() => {
    const path = window.location.pathname || '/';
    setCurrentPath(path);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    // Normalize path
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    // Update browser history
    window.history.pushState({}, '', normalizedPath);
    
    // Update state
    setCurrentPath(normalizedPath);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route mapping
  const renderPage = () => {
    // Normalize current path for comparison
    const path = currentPath === '' ? '/' : currentPath;

    // Main pages
    if (path === '/' || path === '/home') {
      return <Home onNavigate={handleNavigate} />;
    }
    if (path === '/about') {
      return <About />;
    }
    if (path === '/portfolio') {
      return <Portfolio />;
    }
    if (path === '/contact') {
      return <Contact />;
    }
    
    // Services parent page
    if (path === '/services') {
      return <Services onNavigate={handleNavigate} />;
    }
    
    // Services child pages
    if (path === '/services/web-app-pentesting') {
      return <WebAppPentesting onNavigate={handleNavigate} />;
    }
    if (path === '/services/mobile-app-pentesting') {
      return <MobileAppPentesting onNavigate={handleNavigate} />;
    }
    if (path === '/services/network-pentesting') {
      return <NetworkPentesting onNavigate={handleNavigate} />;
    }
    if (path === '/services/soc-services') {
      return <SOC onNavigate={handleNavigate} />;
    }
    if (path === '/services/qa-testing') {
      return <QATesting onNavigate={handleNavigate} />;
    }
    if (path === '/services/network-design') {
      return <NetworkDesign onNavigate={handleNavigate} />;
    }
    if (path === '/services/firewall-setup') {
      return <FirewallSetup onNavigate={handleNavigate} />;
    }
    if (path === '/services/network-troubleshooting') {
      return <NetworkTroubleshooting onNavigate={handleNavigate} />;
    }
    
    // Training parent page
    if (path === '/training') {
      return <Training onNavigate={handleNavigate} />;
    }
    
    // Training child pages
    if (path === '/training/ccna') {
      return <CCNATraining onNavigate={handleNavigate} />;
    }
    if (path === '/training/ceh') {
      return <CEHTraining onNavigate={handleNavigate} />;
    }
    if (path === '/training/linux') {
      return <LinuxTraining onNavigate={handleNavigate} />;
    }
    if (path === '/training/python-for-security') {
      return <PythonTraining onNavigate={handleNavigate} />;
    }
    if (path === '/training/palo-alto') {
      return <PaloAltoTraining onNavigate={handleNavigate} />;
    }
    
    // Training sections with hash (corporate/college)
    if (path === '/training/corporate') {
      // Navigate to training page and scroll to corporate section
      setTimeout(() => {
        const element = document.getElementById('corporate');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return <Training onNavigate={handleNavigate} />;
    }
    if (path === '/training/college') {
      // Navigate to training page and scroll to college section
      setTimeout(() => {
        const element = document.getElementById('college');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return <Training onNavigate={handleNavigate} />;
    }
    
    // Hire Our Team parent page
    if (path === '/hire-our-team') {
      return <HireOurTeam onNavigate={handleNavigate} />;
    }
    
    // Hire Our Team child pages
    if (path === '/hire-our-team/web-pentester') {
      return <HireWebPentester onNavigate={handleNavigate} />;
    }
    if (path === '/hire-our-team/mobile-pentester') {
      return <HireMobilePentester onNavigate={handleNavigate} />;
    }
    if (path === '/hire-our-team/network-pentester') {
      return <HireNetworkPentester onNavigate={handleNavigate} />;
    }
    if (path === '/hire-our-team/soc-analyst') {
      return <HireSOCAnalyst onNavigate={handleNavigate} />;
    }
    if (path === '/hire-our-team/qa-engineer') {
      return <HireQAEngineer onNavigate={handleNavigate} />;
    }
    if (path === '/hire-our-team/network-engineer') {
      return <HireNetworkEngineer onNavigate={handleNavigate} />;
    }

    // 404 - default to home
    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-400">
          <Header currentPath={currentPath} onNavigate={handleNavigate} />
          
          <main className="relative">
            {renderPage()}
          </main>

          <Footer onNavigate={handleNavigate} />
        </div>
      )}
    </>
  );
}

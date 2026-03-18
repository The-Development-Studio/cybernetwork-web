import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown, Globe, Smartphone, Network, Shield, CheckSquare, Layout, Lock, Activity, Terminal, Code, Building2, GraduationCap, Eye, CheckCircle2, Server } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import logo from '../assets/d7a599fcfb87b82a71dc34bbcc0ffaf40eb5b590.svg';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [hireDropdownOpen, setHireDropdownOpen] = useState(false);
  
  const { scrollY } = useScroll();
  
  // Parallax effect - moves background slightly on scroll
  const parallaxY = useTransform(scrollY, [0, 300], [0, -50]);
  
  // Header shrink and blur effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const servicesItems = [
    { name: 'Web App Pentesting', path: '/services/web-app-pentesting', icon: Globe },
    { name: 'Mobile App Pentesting', path: '/services/mobile-app-pentesting', icon: Smartphone },
    { name: 'Network Pentesting', path: '/services/network-pentesting', icon: Network },
    { name: 'SOC Services', path: '/services/soc-services', icon: Shield },
    { name: 'QA Testing', path: '/services/qa-testing', icon: CheckSquare },
    { name: 'Network Design', path: '/services/network-design', icon: Layout },
    { name: 'Firewall Setup', path: '/services/firewall-setup', icon: Lock },
    { name: 'Network Troubleshooting', path: '/services/network-troubleshooting', icon: Activity },
  ];

  const trainingItems = [
    { name: 'CCNA Training', path: '/training/ccna', icon: Network },
    { name: 'CEH Training', path: '/training/ceh', icon: Shield },
    { name: 'Linux Administration', path: '/training/linux', icon: Terminal },
    { name: 'Python for Security', path: '/training/python-for-security', icon: Code },
    { name: 'Palo Alto Training', path: '/training/palo-alto', icon: Lock },
    { name: 'Corporate Training', path: '/training/corporate', icon: Building2 },
    { name: 'College Training', path: '/training/college', icon: GraduationCap },
  ];

  const hireTeamItems = [
    { name: 'Hire a Web Pentester', path: '/hire-our-team/web-pentester', icon: Globe },
    { name: 'Hire a Mobile Pentester', path: '/hire-our-team/mobile-pentester', icon: Smartphone },
    { name: 'Hire a Network Pentester', path: '/hire-our-team/network-pentester', icon: Network },
    { name: 'Hire a SOC Analyst', path: '/hire-our-team/soc-analyst', icon: Eye },
    { name: 'Hire a QA Engineer', path: '/hire-our-team/qa-engineer', icon: CheckCircle2 },
    { name: 'Hire a Network Engineer', path: '/hire-our-team/network-engineer', icon: Server },
  ];

  // Helper to check if current path is active
  const isPathActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/' || currentPath === '/home';
    }
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        isScrolled 
          ? 'backdrop-blur-2xl bg-black/40 dark:bg-black/60 shadow-lg border-b border-[#00B871]/30' 
          : 'backdrop-blur-md bg-black/20 dark:bg-black/40 border-b border-[#00B871]/10'
      }`}
      style={{
        transition: 'all 0.4s ease-in-out',
      }}
    >
      {/* Parallax Background Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: parallaxY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B871]/5 via-transparent to-[#00D67E]/5 dark:from-[#00B871]/10 dark:via-transparent dark:to-[#00D67E]/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B871]/10 dark:bg-[#00B871]/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00D67E]/10 dark:bg-[#00D67E]/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Glassmorphic Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className={`flex justify-between items-center transition-all duration-400 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
          animate={{ height: isScrolled ? '4rem' : '5rem' }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer z-10 relative" 
            onClick={() => onNavigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              src={logo}
              alt="Cyber Network"
              className={`w-auto object-contain transition-all duration-400 ${
                isScrolled ? 'h-10 sm:h-11' : 'h-12 sm:h-14'
              }`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 z-10 flex-1 justify-center px-6">
            {navItems.slice(0, 2).map((item) => (
              <motion.button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`relative transition-all duration-400 px-2.5 py-1.5 text-sm whitespace-nowrap ${
                  isPathActive(item.path)
                    ? 'text-[#00B871] dark:text-[#00D67E]'
                    : 'text-gray-700 dark:text-white/90 hover:text-[#00B871] dark:hover:text-[#00D67E]'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {item.name}
                {isPathActive(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00B871] to-[#00D67E]"
                    layoutId="activeNav"
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </motion.button>
            ))}

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="flex items-center">
                <motion.button
                  onClick={() => onNavigate('/services')}
                  className={`relative transition-all duration-400 px-2.5 py-1.5 text-sm whitespace-nowrap ${
                    isPathActive('/services')
                      ? 'text-[#00B871] dark:text-[#00D67E]'
                      : 'text-gray-700 dark:text-white/90 hover:text-[#00B871] dark:hover:text-[#00D67E]'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  Services
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                  }}
                  className={`p-1 transition-all duration-400 ${
                    isPathActive('/services')
                      ? 'text-[#00B871] dark:text-[#00D67E]'
                      : 'text-gray-700 dark:text-white/90 hover:text-[#00B871] dark:hover:text-[#00D67E]'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>
              </div>

              {servicesDropdownOpen && (
                <motion.div
                  className="absolute top-full right-0 pt-2 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-72 bg-gradient-to-b from-[#04110B] to-black border border-[#00B871]/30 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden"
                    style={{
                      boxShadow: '0 0 40px rgba(0, 184, 113, 0.2), 0 20px 60px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    <div className="p-2">
                      {servicesItems.map((item, index) => (
                        <motion.button
                          key={item.path}
                          onClick={() => {
                            onNavigate(item.path);
                            setServicesDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all duration-300 group ${
                            currentPath === item.path
                              ? 'bg-[#00B871]/20 text-[#00D67E]'
                              : 'text-white hover:text-[#00B871] hover:bg-[#00B871]/10'
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 4 }}
                        >
                          <item.icon className={`w-5 h-5 transition-colors ${
                            currentPath === item.path
                              ? 'text-[#00D67E]'
                              : 'text-[#00B871] group-hover:text-[#00D67E]'
                          }`} />
                          <span className="flex-1">{item.name}</span>
                          <div className={`w-0.5 h-4 bg-[#00B871] transition-opacity duration-300 ${
                            currentPath === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`} />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Training Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setTrainingDropdownOpen(true)}
              onMouseLeave={() => setTrainingDropdownOpen(false)}
            >
              <div className="flex items-center">
                <motion.button
                  onClick={() => onNavigate('/training')}
                  className={`relative transition-all duration-400 px-2.5 py-1.5 text-sm whitespace-nowrap ${
                    isPathActive('/training')
                      ? 'text-[#00B871] dark:text-[#00D67E]'
                      : 'text-gray-700 dark:text-white/90 hover:text-[#00B871] dark:hover:text-[#00D67E]'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  Training
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setTrainingDropdownOpen(!trainingDropdownOpen);
                  }}
                  className={`p-1 transition-all duration-400 ${
                    isPathActive('/training')
                      ? 'text-[#00B871] dark:text-[#00D67E]'
                      : 'text-gray-700 dark:text-white/90 hover:text-[#00B871] dark:hover:text-[#00D67E]'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${trainingDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>
              </div>

              {trainingDropdownOpen && (
                <motion.div
                  className="absolute top-full right-0 pt-2 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-72 bg-gradient-to-b from-[#04110B] to-black border border-[#00B871]/30 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden"
                    style={{
                      boxShadow: '0 0 40px rgba(0, 184, 113, 0.2), 0 20px 60px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    <div className="p-2">
                      {trainingItems.map((item, index) => (
                        <motion.button
                          key={item.path}
                          onClick={() => {
                            onNavigate(item.path);
                            setTrainingDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all duration-300 group ${
                            currentPath === item.path
                              ? 'bg-[#00B871]/20 text-[#00D67E]'
                              : 'text-white hover:text-[#00B871] hover:bg-[#00B871]/10'
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 4 }}
                        >
                          <item.icon className={`w-5 h-5 transition-colors ${
                            currentPath === item.path
                              ? 'text-[#00D67E]'
                              : 'text-[#00B871] group-hover:text-[#00D67E]'
                          }`} />
                          <span className="flex-1">{item.name}</span>
                          <div className={`w-0.5 h-4 bg-[#00B871] transition-opacity duration-300 ${
                            currentPath === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`} />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Hire Our Team Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setHireDropdownOpen(true)}
              onMouseLeave={() => setHireDropdownOpen(false)}
            >
              <div className="flex items-center">
                <motion.button
                  onClick={() => onNavigate('/hire-our-team')}
                  className={`relative transition-all duration-400 px-2.5 py-1.5 text-sm whitespace-nowrap ${
                    isPathActive('/hire-our-team')
                      ? 'text-[#00B871] dark:text-[#00D67E]'
                      : 'text-gray-700 dark:text-white/90 hover:text-[#00B871] dark:hover:text-[#00D67E]'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  Hire Our Team
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setHireDropdownOpen(!hireDropdownOpen);
                  }}
                  className={`p-1 transition-all duration-400 ${
                    isPathActive('/hire-our-team')
                      ? 'text-[#00B871] dark:text-[#00D67E]'
                      : 'text-gray-700 dark:text-white/90 hover:text-[#00B871] dark:hover:text-[#00D67E]'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hireDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>
              </div>

              {hireDropdownOpen && (
                <motion.div
                  className="absolute top-full right-0 pt-2 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-72 bg-gradient-to-b from-[#04110B] to-black border border-[#00B871]/30 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden"
                    style={{
                      boxShadow: '0 0 40px rgba(0, 184, 113, 0.2), 0 20px 60px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    <div className="p-2">
                      {hireTeamItems.map((item, index) => (
                        <motion.button
                          key={item.path}
                          onClick={() => {
                            onNavigate(item.path);
                            setHireDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all duration-300 group ${
                            currentPath === item.path
                              ? 'bg-[#00B871]/20 text-[#00D67E]'
                              : 'text-white hover:text-[#00B871] hover:bg-[#00B871]/10'
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 4 }}
                        >
                          <item.icon className={`w-5 h-5 transition-colors ${
                            currentPath === item.path
                              ? 'text-[#00D67E]'
                              : 'text-[#00B871] group-hover:text-[#00D67E]'
                          }`} />
                          <span className="flex-1">{item.name}</span>
                          <div className={`w-0.5 h-4 bg-[#00B871] transition-opacity duration-300 ${
                            currentPath === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`} />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {navItems.slice(2).map((item) => (
              <motion.button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`relative transition-all duration-400 px-2.5 py-1.5 text-sm whitespace-nowrap ${
                  isPathActive(item.path)
                    ? 'text-[#00B871] dark:text-[#00D67E]'
                    : 'text-gray-700 dark:text-white/90 hover:text-[#00B871] dark:hover:text-[#00D67E]'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {item.name}
                {isPathActive(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00B871] to-[#00D67E]"
                    layoutId="activeNav"
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3 z-10">
            {/* Learn More Button (Secondary) */}
            <motion.button
              onClick={() => onNavigate('/about')}
              className="px-3 xl:px-4 py-1.5 text-sm whitespace-nowrap rounded-lg border-2 border-[#00B871] text-[#00B871] dark:border-[#00D67E] dark:text-[#00D67E] hover:bg-[#00B871]/10 dark:hover:bg-[#00D67E]/10 transition-all duration-400 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 20px rgba(0, 214, 126, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              Learn More
            </motion.button>

            {/* Get Started Button (Primary) */}
            <motion.button
              onClick={() => onNavigate('/contact')}
              className="px-3 xl:px-4 py-1.5 text-sm whitespace-nowrap rounded-lg bg-gradient-to-r from-[#00B871] to-[#00D67E] text-white shadow-lg hover:shadow-[#00B871]/50 transition-all duration-400"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 184, 113, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              Get Started
            </motion.button>

            {/* Light/Dark Mode Toggle */}
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-[#00B871]/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-400"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-[#00D67E]" />
              ) : (
                <Moon className="w-5 h-5 text-[#00B871]" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-3 z-10">
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-[#00B871]/20"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-[#00D67E]" />
              ) : (
                <Moon className="w-5 h-5 text-[#00B871]" />
              )}
            </motion.button>

            <motion.button
              className="text-gray-700 dark:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav 
            className="md:hidden py-4 border-t border-[#00B871]/20 backdrop-blur-xl bg-white/95 dark:bg-black/95 max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.slice(0, 2).map((item, index) => (
              <motion.button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 transition-all duration-400 ${
                  isPathActive(item.path)
                    ? 'text-[#00B871] dark:text-[#00D67E] bg-[#00B871]/10 dark:bg-[#00D67E]/10'
                    : 'text-gray-700 dark:text-white hover:text-[#00B871] dark:hover:text-[#00D67E] hover:bg-[#00B871]/5 dark:hover:bg-[#1A1A1A]'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Mobile Services Section */}
            <div className="mt-2 pt-2 border-t border-[#00B871]/20">
              <button
                onClick={() => {
                  onNavigate('/services');
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2 text-sm font-medium text-left transition-all ${
                  isPathActive('/services')
                    ? 'text-[#00D67E]'
                    : 'text-gray-500 dark:text-gray-400 hover:text-[#00B871]'
                }`}
              >
                Services
              </button>
              {servicesItems.map((item, index) => (
                <motion.button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 text-left py-3 px-4 transition-all duration-400 ${
                    currentPath === item.path
                      ? 'text-[#00D67E] bg-[#00B871]/10'
                      : 'text-gray-700 dark:text-white hover:text-[#00B871] dark:hover:text-[#00D67E] hover:bg-[#00B871]/5 dark:hover:bg-[#1A1A1A]'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className={`w-5 h-5 ${
                    currentPath === item.path ? 'text-[#00D67E]' : 'text-[#00B871]'
                  }`} />
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Training Section */}
            <div className="mt-2 pt-2 border-t border-[#00B871]/20">
              <button
                onClick={() => {
                  onNavigate('/training');
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2 text-sm font-medium text-left transition-all ${
                  isPathActive('/training')
                    ? 'text-[#00D67E]'
                    : 'text-gray-500 dark:text-gray-400 hover:text-[#00B871]'
                }`}
              >
                Training
              </button>
              {trainingItems.map((item, index) => (
                <motion.button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 text-left py-3 px-4 transition-all duration-400 ${
                    currentPath === item.path
                      ? 'text-[#00D67E] bg-[#00B871]/10'
                      : 'text-gray-700 dark:text-white hover:text-[#00B871] dark:hover:text-[#00D67E] hover:bg-[#00B871]/5 dark:hover:bg-[#1A1A1A]'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (10 + index) * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className={`w-5 h-5 ${
                    currentPath === item.path ? 'text-[#00D67E]' : 'text-[#00B871]'
                  }`} />
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Hire Our Team Section */}
            <div className="mt-2 pt-2 border-t border-[#00B871]/20">
              <button
                onClick={() => {
                  onNavigate('/hire-our-team');
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2 text-sm font-medium text-left transition-all ${
                  isPathActive('/hire-our-team')
                    ? 'text-[#00D67E]'
                    : 'text-gray-500 dark:text-gray-400 hover:text-[#00B871]'
                }`}
              >
                Hire Our Team
              </button>
              {hireTeamItems.map((item, index) => (
                <motion.button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 text-left py-3 px-4 transition-all duration-400 ${
                    currentPath === item.path
                      ? 'text-[#00D67E] bg-[#00B871]/10'
                      : 'text-gray-700 dark:text-white hover:text-[#00B871] dark:hover:text-[#00D67E] hover:bg-[#00B871]/5 dark:hover:bg-[#1A1A1A]'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (17 + index) * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className={`w-5 h-5 ${
                    currentPath === item.path ? 'text-[#00D67E]' : 'text-[#00B871]'
                  }`} />
                  {item.name}
                </motion.button>
              ))}
            </div>

            {navItems.slice(2).map((item, index) => (
              <motion.button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 transition-all duration-400 border-t border-[#00B871]/20 ${
                  isPathActive(item.path)
                    ? 'text-[#00B871] dark:text-[#00D67E] bg-[#00B871]/10 dark:bg-[#00D67E]/10'
                    : 'text-gray-700 dark:text-white hover:text-[#00B871] dark:hover:text-[#00D67E] hover:bg-[#00B871]/5 dark:hover:bg-[#1A1A1A]'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (24 + index) * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 px-4 mt-4 pt-4 border-t border-[#00B871]/20">
              <motion.button
                onClick={() => {
                  onNavigate('/about');
                  setMobileMenuOpen(false);
                }}
                className="w-full px-6 py-3 rounded-lg border-2 border-[#00B871] text-[#00B871] dark:border-[#00D67E] dark:text-[#00D67E] hover:bg-[#00B871]/10 dark:hover:bg-[#00D67E]/10 transition-all duration-400"
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
              
              <motion.button
                onClick={() => {
                  onNavigate('/contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#00B871] to-[#00D67E] text-white shadow-lg transition-all duration-400"
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

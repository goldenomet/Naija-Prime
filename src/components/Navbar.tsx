import React, { useState, useEffect } from 'react';
import { Landmark, Heart, MessageSquare, Calculator, Compass, ShieldCheck, Phone, Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import { Currency } from '../types';
import { AGENT_PROFILE } from '../data/properties';
import { generateWhatsAppLink } from '../utils/formatters';
import { gsapNavigateToSection, gsapElasticScroll } from '../utils/gsapScroll';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenCalculator: () => void;
  onOpenInspectionModal: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  setCurrency,
  favoritesCount,
  onOpenFavorites,
  onOpenCalculator,
  onOpenInspectionModal,
  activeSection,
  setActiveSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPausedTicker, setIsPausedTicker] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waMsg = `Hello Babatunde, I am visiting the Naija Prime Realty website and would like to make an inquiry about luxury properties in Lagos.`;
  const whatsappUrl = generateWhatsAppLink(AGENT_PROFILE.whatsapp, waMsg);

  const handleNavClick = (section: string) => {
    setMobileMenuOpen(false);
    gsapNavigateToSection(section, activeSection, setActiveSection);
  };

  return (
    <header className="sticky top-0 z-40 transition-all duration-300 shadow-md">
      
      {/* Main Navbar Bar */}
      <div className={`bg-[#FFD600] border-b border-[#0A0A0A] text-[#0A0A0A] transition-all duration-300 ${isScrolled ? 'py-2 shadow-xl' : 'py-3 sm:py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4 relative overflow-hidden">
          
          {/* Liquid Background Accents */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none animate-liquid-blob" />
          <div className="absolute -bottom-10 right-1/4 w-36 h-36 bg-[#0A0A0A]/5 rounded-full blur-xl pointer-events-none animate-liquid-blob-slow" />

          {/* Brand Logo & Name */}
          <button 
            onClick={() => {
              if (activeSection !== 'listings') {
                setActiveSection('listings');
                setTimeout(() => gsapElasticScroll(0, { duration: 0.9, ease: 'power4.out' }), 50);
              } else {
                gsapElasticScroll(0, { duration: 0.9, ease: 'power4.out' });
              }
            }}
            className="flex items-center gap-3 group text-left focus:outline-none shrink-0"
          >
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="flex items-center justify-center text-red-600 p-0 bg-transparent border-none shadow-none"
            >
              <Landmark className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
            <div>
              <span className="block text-lg sm:text-xl font-sans font-black uppercase tracking-tighter text-[#0A0A0A] group-hover:text-black transition-colors leading-tight">
                NAIJA PRIME <span className="text-[#0A0A0A]">REALTY</span>
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-[0.2em] text-gray-800 uppercase font-sans font-bold">
                Lagos • Ikoyi • Lekki
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Animated Underline */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-gray-800">
            <button
              onClick={() => handleNavClick('listings')}
              className={`transition-all hover:text-[#0A0A0A] relative py-1 ${activeSection === 'listings' ? 'text-[#0A0A0A] font-black' : ''}`}
            >
              Home
              {activeSection === 'listings' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A0A0A]" />
              )}
            </button>
            <button
              onClick={() => handleNavClick('neighborhoods')}
              className={`transition-all hover:text-[#0A0A0A] flex items-center gap-1.5 relative py-1 ${activeSection === 'neighborhoods' ? 'text-[#0A0A0A] font-black' : ''}`}
            >
              <Compass className="w-3.5 h-3.5 text-[#0A0A0A]" />
              Areas
              {activeSection === 'neighborhoods' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A0A0A]" />
              )}
            </button>
            <button
              onClick={() => handleNavClick('agent')}
              className={`transition-all hover:text-[#0A0A0A] flex items-center gap-1.5 relative py-1 ${activeSection === 'agent' ? 'text-[#0A0A0A] font-black' : ''}`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#0A0A0A]" />
              Advisory
              {activeSection === 'agent' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A0A0A]" />
              )}
            </button>
          </nav>

          {/* Right Controls: Currency Toggle, Wishlist, Phone, WhatsApp & Inspection CTA */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            
            {/* Live Agent Online Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-white border border-[#0A0A0A] text-[10px] font-bold uppercase tracking-wider text-[#0A0A0A]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>ONLINE: {AGENT_PROFILE.phone}</span>
            </div>

            {/* Currency Selector */}
            <div className="hidden sm:flex items-center bg-white border border-[#0A0A0A] p-0.5">
              {(['NGN', 'USD', 'GBP'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-1 text-[10px] font-bold uppercase transition-all ${
                    currency === curr
                      ? 'bg-[#0A0A0A] text-[#FFD600]'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Wishlist Favorites Counter */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenFavorites}
              className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white text-gray-800 hover:text-[#0A0A0A] border border-[#0A0A0A]"
              title="Saved Favorites"
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-red-600 text-red-600' : ''}`} />
              {favoritesCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-1.5 bg-red-600 text-white font-bold text-[10px] w-5 h-5 flex items-center justify-center border border-[#141414]"
                >
                  {favoritesCount}
                </motion.span>
              )}
            </motion.button>

            {/* Book Inspection CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenInspectionModal}
              className="hidden sm:block px-4 py-2.5 bg-[#0A0A0A] text-[#FFD600] text-xs font-black uppercase tracking-widest border border-[#0A0A0A]"
            >
              Book Inspection
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-white text-[#0A0A0A] border border-[#0A0A0A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* RUNNING INFINITE STATEMENT TICKER BAR: "designed by ReliabilityIQ Ventures" */}
      <div 
        onMouseEnter={() => setIsPausedTicker(true)}
        onMouseLeave={() => setIsPausedTicker(false)}
        className="bg-[#0A0A0A] text-[#FFD600] border-b border-[#0A0A0A] overflow-hidden py-1.5 text-[11px] font-sans font-bold uppercase tracking-wider relative select-none"
      >
        <motion.div 
          className="flex whitespace-nowrap gap-8 items-center"
          animate={{ x: isPausedTicker ? 0 : ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="text-gray-400 font-normal">designed by</span>
                <a
                  href="https://reliabilityiq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFD600] underline decoration-[#FFD600] font-black transition-colors inline-flex items-center gap-1"
                >
                  <span>ReliabilityIQ Ventures</span>
                  <ExternalLink className="w-3 h-3 text-[#FFD600]" />
                </a>
              </span>
              <span className="text-[#FFD600]/50">•</span>
              <span className="text-white font-black">NAIJA PRIME REALTY & LUXURY ADVISORY</span>
              <span className="text-[#FFD600]/50">•</span>
              <span>VERIFIED LAGOS TITLE GUARANTEE</span>
              <span className="text-[#FFD600]/50">•</span>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>DIRECT WHATSAPP: {AGENT_PROFILE.phone}</span>
              </a>
              <span className="text-[#FFD600]/50">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FFD600] border-b-2 border-[#0A0A0A] p-4 text-xs uppercase tracking-widest font-black text-[#0A0A0A] space-y-3"
          >
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('listings')}
                className={`p-2.5 text-left border border-[#0A0A0A] bg-white ${activeSection === 'listings' ? 'bg-[#0A0A0A] text-[#FFD600]' : ''}`}
              >
                Home Properties
              </button>
              <button
                onClick={() => handleNavClick('neighborhoods')}
                className={`p-2.5 text-left border border-[#0A0A0A] bg-white ${activeSection === 'neighborhoods' ? 'bg-[#0A0A0A] text-[#FFD600]' : ''}`}
              >
                Prime Enclaves & Areas
              </button>
              <button
                onClick={() => handleNavClick('agent')}
                className={`p-2.5 text-left border border-[#0A0A0A] bg-white ${activeSection === 'agent' ? 'bg-[#0A0A0A] text-[#FFD600]' : ''}`}
              >
                Realty Advisory & Title Audit
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenCalculator(); }}
                className="p-2.5 text-left border border-[#0A0A0A] bg-white flex items-center justify-between"
              >
                <span>Yield & Loan Calculator</span>
                <Calculator className="w-4 h-4" />
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenInspectionModal(); }}
                className="p-2.5 text-center bg-[#0A0A0A] text-[#FFD600] border border-[#0A0A0A] font-black"
              >
                Book Private Inspection
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};



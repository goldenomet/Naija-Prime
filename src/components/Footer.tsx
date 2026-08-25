import React, { useState, useEffect } from 'react';
import { Landmark, MapPin, Phone, Mail, ShieldCheck, MessageSquare, ArrowUp, Clock, Check, Send, Globe } from 'lucide-react';
import { AGENT_PROFILE } from '../data/properties';
import { generateWhatsAppLink } from '../utils/formatters';
import { gsapElasticScroll } from '../utils/gsapScroll';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const [lagosTime, setLagosTime] = useState<string>('');
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Lagos is West Africa Time (WAT) UTC+1
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLagosTime(now.toLocaleTimeString('en-US', options));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  const whatsappUrl = generateWhatsAppLink(
    AGENT_PROFILE.whatsapp,
    "Hello Babatunde, I am interested in real estate investment options in Lagos State."
  );

  return (
    <footer className="bg-[#FFD600] text-[#0A0A0A] border-t-2 border-[#0A0A0A] pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Interactive Banner: Real-Time Lagos Time & Scroll-to-Top */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#0A0A0A]">
          <div className="flex items-center gap-3 bg-white px-4 py-2 border border-[#0A0A0A] text-xs font-mono">
            <Clock className="w-4 h-4 text-red-600 animate-pulse" />
            <span className="font-bold text-[#0A0A0A]">LAGOS OFFICE TIME:</span>
            <span className="font-black text-[#0A0A0A] tracking-wider">{lagosTime || '12:00:00 PM'} WAT (GMT+1)</span>
          </div>

          <motion.button
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => gsapElasticScroll(0, { duration: 1.0, ease: 'power4.out' })}
            className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] text-[#FFD600] text-xs font-black uppercase tracking-widest border border-[#0A0A0A]"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 text-[#FFD600]" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#0A0A0A]">
          
          {/* Brand Col & Live Interactive Advisory Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="flex items-center justify-center text-red-600 p-2 bg-white border border-[#0A0A0A]"
              >
                <Landmark className="w-7 h-7" />
              </motion.div>
              <span className="text-xl font-sans font-black uppercase tracking-tighter text-[#0A0A0A]">
                NAIJA PRIME <span className="text-[#0A0A0A]">REALTY</span>
              </span>
            </div>

            <p className="text-xs text-gray-800 font-normal max-w-sm leading-relaxed">
              Lagos State’s premier minimalist real estate agency & advisory firm. Delivering unencumbered title luxury properties in Ikoyi, Banana Island, Victoria Island, Eko Atlantic, and Lekki Phase 1.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <span className="block text-[10px] font-black uppercase tracking-widest text-gray-700 mb-2">
                Subscribe to Lagos Land Registry Reports & Off-Market Alerts
              </span>
              
              {subscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-2.5 bg-emerald-600 text-white text-xs font-bold flex items-center gap-2 border border-[#0A0A0A]"
                >
                  <Check className="w-4 h-4" />
                  <span>Subscribed! Weekly Lagos Title Report will be sent to your inbox.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#0A0A0A] text-xs text-[#0A0A0A] placeholder-gray-500 focus:outline-none font-sans"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#0A0A0A] hover:bg-[#262626] text-[#FFD600] text-xs font-black uppercase tracking-wider border-y border-r border-[#0A0A0A] flex items-center gap-1.5 shrink-0 transition-colors"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            <div className="inline-flex items-center gap-2 p-2.5 bg-white border border-[#0A0A0A] text-xs text-gray-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>REDAN Licensed Member • Reg No: RED/LGS/2021/884</span>
            </div>
          </div>

          {/* Quick Enclaves */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0A0A] mb-3">
              Prime Enclaves
            </h4>
            <ul className="space-y-2 text-xs font-bold">
              <li>
                <a href="#listings" className="hover:text-black hover:underline transition-all flex items-center gap-1">
                  <span>Banana Island, Ikoyi</span>
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-black hover:underline transition-all flex items-center gap-1">
                  <span>Old Ikoyi Mansions</span>
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-black hover:underline transition-all flex items-center gap-1">
                  <span>Eko Atlantic Oceanfront</span>
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-black hover:underline transition-all flex items-center gap-1">
                  <span>Lekki Phase 1 Smart Homes</span>
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-black hover:underline transition-all flex items-center gap-1">
                  <span>Ikeja GRA Luxury Lots</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Titles */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0A0A] mb-3">
              Title Verifications
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-800">
              <li><span>• Governor's Consent</span></li>
              <li><span>• Certificate of Occupancy (C of O)</span></li>
              <li><span>• Gazette & Federal C of O</span></li>
              <li><span>• Deed of Assignment</span></li>
              <li><span>• Lagos State Lands Registry Audit</span></li>
            </ul>
          </div>

          {/* Contact Office */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0A0A] mb-3">
              Advisory Office
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-900 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0A0A0A] flex-shrink-0 mt-0.5" />
                <span>Level 5, Capital Towers, Ahmadu Bello Way, VI, Lagos</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0A0A0A] flex-shrink-0" />
                <a href={`tel:${AGENT_PROFILE.phone}`} className="font-bold hover:underline">
                  {AGENT_PROFILE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0A0A0A] flex-shrink-0" />
                <a href={`mailto:${AGENT_PROFILE.email}`} className="font-bold hover:underline">
                  {AGENT_PROFILE.email}
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] text-[#FFD600] border border-[#0A0A0A] text-xs font-black uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>WhatsApp Advisory</span>
              </motion.a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Credit Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-800 font-bold gap-4">
          <p>© {new Date().getFullYear()} Naija Prime Realty Ltd. All rights reserved. Registered in Nigeria.</p>
          <p className="text-xs font-bold text-[#0A0A0A]">
            Designed by{' '}
            <a
              href="https://reliabilityiq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0A0A] font-black underline hover:text-red-700 transition-colors inline-flex items-center gap-1"
            >
              <span>ReliabilityIQ Ventures</span>
              <Globe className="w-3.5 h-3.5 text-[#0A0A0A]" />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};


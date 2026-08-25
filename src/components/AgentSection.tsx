import React from 'react';
import { motion } from 'motion/react';
import { AGENT_PROFILE, TESTIMONIALS } from '../data/properties';
import { generateWhatsAppLink } from '../utils/formatters';
import { Phone, Mail, MapPin, Award, ShieldCheck, MessageSquare, Star, CheckCircle, ExternalLink, Trophy, Sparkles, BadgeCheck, CheckCircle2 } from 'lucide-react';

export const AgentSection: React.FC = () => {
  const whatsappUrl = generateWhatsAppLink(
    AGENT_PROFILE.whatsapp,
    "Hello Babatunde, I am seeking personalized real estate advisory services in Lagos State."
  );

  return (
    <section className="relative py-16 sm:py-24 bg-[#FFD600] text-[#0A0A0A] border-t border-[#0A0A0A] overflow-hidden">
      {/* Minimalist Adire-inspired Pattern Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="adire-agent" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0,30 L30,0 L60,30 L30,60 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="30" cy="30" r="5" fill="currentColor" />
            <path d="M15,15 L45,45 M45,15 L15,45" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#adire-agent)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Slide Down & Blur Reveal */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2 overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-xs uppercase font-bold text-[#0A0A0A] tracking-widest block mb-2"
          >
            Trusted Lagos Advisory
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="text-3xl sm:text-4xl font-sans font-black uppercase tracking-tighter text-[#0A0A0A]"
          >
            Meet the Principal Partner
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 18, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mt-3 text-gray-500 text-sm font-normal"
          >
            Over a decade of advisory excellence connecting discerning Nigerian HNWIs and diaspora buyers to verified high-yield luxury real estate in Lagos.
          </motion.p>
        </div>

        {/* Profile Card Grid with Zoom Rotate & Blur Reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="gsap-agent-card bg-white border border-[#0A0A0A] rounded-none p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-none mb-16 relative overflow-hidden"
        >
          {/* SCATTERED GRAPHIC VECTOR DESIGN ARTWORK (Positioned safely in the background behind texts and photos) */}
          
          {/* 1. Top-Left: Concentric Colorful Rings & Target Arc with Pixel Steps (behind picture area) */}
          <div className="absolute -top-12 -left-12 sm:-top-8 sm:-left-8 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none z-0 opacity-25 select-none overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(30, 30)">
                {/* Outer Orange Ring */}
                <path d="M 120 120 A 100 100 0 1 1 20 120" fill="none" stroke="#FF5722" strokeWidth="20" strokeLinecap="square" />
                {/* Lavender Ring */}
                <path d="M 120 120 A 76 76 0 1 1 44 120" fill="none" stroke="#A5B4FC" strokeWidth="20" strokeLinecap="square" />
                {/* Royal Blue Ring */}
                <path d="M 120 120 A 52 52 0 1 1 68 120" fill="none" stroke="#2563EB" strokeWidth="20" strokeLinecap="square" />
                {/* Inner Emerald Center */}
                <circle cx="120" cy="120" r="24" fill="#00E676" />

                {/* Pixel Checkerboard Steps */}
                <rect x="20" y="110" width="12" height="12" fill="#F500A0" />
                <rect x="32" y="110" width="12" height="12" fill="#FF5722" />
                <rect x="44" y="110" width="12" height="12" fill="#A5B4FC" />
                <rect x="20" y="122" width="12" height="12" fill="#0A0A0A" />
                <rect x="32" y="122" width="12" height="12" fill="#00E676" />
                <rect x="44" y="122" width="12" height="12" fill="#F500A0" />

                {/* Circular Sweep Green Arrow Line */}
                <path d="M 120 0 A 120 120 0 1 1 0 120" fill="none" stroke="#00E676" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M -15 105 L 0 120 L 15 105" fill="none" stroke="#00E676" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>

          {/* 2. Top-Right: Magenta/Fuchsia Arch Cutout & Peach Coral Tint Glow (behind bio header) */}
          <div className="absolute -top-6 right-6 sm:right-16 w-56 h-56 pointer-events-none z-0 opacity-25 select-none overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="120" cy="60" r="90" fill="#FFC5B8" fillOpacity="0.4" />
              <g transform="translate(40, 20)">
                {/* Magenta Notch Arch Shape */}
                <path d="M 0 0 H 90 V 40 H 75 A 35 35 0 0 0 75 110 H 90 V 160 H 0 Z" fill="#F500A0" />
              </g>
            </svg>
          </div>

          {/* 3. Center-Right: Black Square with Organic White Floral Line-Art */}
          <div className="absolute top-1/3 -right-4 sm:right-6 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none z-0 opacity-20 select-none">
            <svg className="w-full h-full" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="80" fill="#0A0A0A" rx="4" />
              <path d="M 40 16 C 45 30 64 30 64 40 C 64 50 45 50 40 64 C 35 50 16 50 16 40 C 16 30 35 30 40 16 Z" fill="none" stroke="#FFFFFF" strokeWidth="3.5" />
              <path d="M 24 24 C 34 34 34 52 24 56 C 34 52 52 52 56 56 C 52 46 52 28 56 24 C 46 28 28 28 24 24 Z" fill="none" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.85" />
            </svg>
          </div>

          {/* 4. Bottom-Left: Cobalt Blue Card with Electric Green Dot Matrix Grid (behind photo/bottom gap) */}
          <div className="absolute -bottom-8 left-12 sm:left-24 w-36 h-48 pointer-events-none z-0 opacity-20 select-none overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="160" fill="#2563EB" rx="2" />
              {/* Dot Grid */}
              <circle cx="30" cy="30" r="10" fill="#00E676" />
              <circle cx="60" cy="30" r="10" fill="#00E676" />
              <circle cx="90" cy="30" r="10" fill="#00E676" />

              <circle cx="30" cy="70" r="10" fill="#00E676" />
              <circle cx="60" cy="70" r="10" fill="#00E676" />
              <circle cx="90" cy="70" r="10" fill="#00E676" />

              <circle cx="30" cy="110" r="10" fill="#00E676" />
              <circle cx="60" cy="110" r="10" fill="#00E676" />
              <circle cx="90" cy="110" r="10" fill="#00E676" />

              <circle cx="30" cy="150" r="10" fill="#00E676" />
              <circle cx="60" cy="150" r="10" fill="#00E676" />
              <circle cx="90" cy="150" r="10" fill="#00E676" />
            </svg>
          </div>

          {/* 5. Bottom-Right: Secondary Ring Arc Accent (behind certification area) */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 pointer-events-none z-0 opacity-20 select-none overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="150" r="120" fill="none" stroke="#FF5722" strokeWidth="16" />
              <circle cx="150" cy="150" r="90" fill="none" stroke="#A5B4FC" strokeWidth="16" />
              <circle cx="150" cy="150" r="60" fill="none" stroke="#2563EB" strokeWidth="16" />
              <circle cx="150" cy="150" r="30" fill="#00E676" />
            </svg>
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] z-0" />
          
          {/* Agent Photo with Zoom & Tilt Reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="lg:col-span-5 relative z-10"
          >
            <div className="aspect-[4/5] rounded-none overflow-hidden border border-[#0A0A0A] bg-[#FFD600] shadow-none relative">
              <img
                src={AGENT_PROFILE.avatar}
                alt={AGENT_PROFILE.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-sm border border-[#0A0A0A]">
                <span className="block text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">
                  {AGENT_PROFILE.license}
                </span>
                <span className="block text-[11px] text-gray-700 mt-0.5">
                  Verified with Real Estate Developers Association of Nigeria (REDAN)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bio & Track Record */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div>
              <span className="px-3 py-1 rounded-none bg-white border border-[#0A0A0A] text-[#0A0A0A] text-xs font-semibold uppercase tracking-wider">
                {AGENT_PROFILE.title}
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tighter text-[#0A0A0A] mt-2">
                {AGENT_PROFILE.name}
              </h3>
              <p className="text-xs text-[#0A0A0A]/90 font-mono mt-1">
                {AGENT_PROFILE.company}
              </p>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              {AGENT_PROFILE.bio}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#0A0A0A]">
              <div>
                <span className="block text-2xl font-sans font-black uppercase tracking-tighter text-[#0A0A0A]">
                  {AGENT_PROFILE.salesVolumeNgn}
                </span>
                <span className="text-[11px] text-gray-500">Closed Volume</span>
              </div>
              <div>
                <span className="block text-2xl font-sans font-black uppercase tracking-tighter text-[#0A0A0A]">
                  {AGENT_PROFILE.experienceYears}+ Years
                </span>
                <span className="text-[11px] text-gray-500">Lagos Market Advisory</span>
              </div>
              <div>
                <span className="block text-2xl font-sans font-black uppercase tracking-tighter text-[#0A0A0A]">
                  100%
                </span>
                <span className="text-[11px] text-gray-500">Title Guarantee</span>
              </div>
            </div>

            {/* Official Accreditations & Award Certificates Seals - Graphic Geometric Style */}
            <div className="pt-3 border-t border-[#0A0A0A]/40 space-y-2">
              <span className="block text-[10px] font-black uppercase tracking-widest text-[#0A0A0A]">
                Official Certifications & Industry Accreditations
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Certificate 1: REDAN Official Member (Target/Floral motif) */}
                <div className="relative overflow-hidden p-3 bg-white border-2 border-[#0A0A0A] shadow-[3px_3px_0px_0px_#0A0A0A] group hover:-translate-y-0.5 transition-all">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#FF5722]/10 rounded-bl-full pointer-events-none" />
                  <div className="flex items-center gap-2.5 relative z-10">
                    {/* Flower line art in black box */}
                    <div className="w-8 h-8 bg-[#0A0A0A] text-[#00E676] flex items-center justify-center shrink-0 border border-[#0A0A0A]">
                      <ShieldCheck className="w-4 h-4 text-[#00E676]" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-tight text-[#0A0A0A]">REDAN Certified</span>
                      <span className="block text-[8px] font-mono text-gray-700 leading-tight">Reg: RED/LGS/2021</span>
                    </div>
                  </div>
                </div>

                {/* Certificate 2: Luxury Advisory Award (Magenta Arch motif) */}
                <div className="relative overflow-hidden p-3 bg-white border-2 border-[#0A0A0A] shadow-[3px_3px_0px_0px_#0A0A0A] group hover:-translate-y-0.5 transition-all">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#F500A0] rounded-bl-xl opacity-90 pointer-events-none" />
                  <div className="flex items-center gap-2.5 relative z-10">
                    <div className="w-8 h-8 bg-[#F500A0] text-white flex items-center justify-center shrink-0 border border-[#0A0A0A]">
                      <Trophy className="w-4 h-4 text-[#FFD600]" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-tight text-[#0A0A0A]">Nigeria Property Award</span>
                      <span className="block text-[8px] font-mono text-gray-700 leading-tight">Best Luxury Advisory '24</span>
                    </div>
                  </div>
                </div>

                {/* Certificate 3: LASRERA License (Cobalt & Green Dot Grid motif) */}
                <div className="relative overflow-hidden p-3 bg-[#2563EB] text-white border-2 border-[#0A0A0A] shadow-[3px_3px_0px_0px_#0A0A0A] group hover:-translate-y-0.5 transition-all">
                  {/* Neon Green Dot Matrix Background Accent */}
                  <div className="absolute right-1 top-1 bottom-1 flex gap-1 items-center opacity-40 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-[#00E676]" />
                    <div className="w-2 h-2 rounded-full bg-[#00E676]" />
                    <div className="w-2 h-2 rounded-full bg-[#00E676]" />
                  </div>
                  <div className="flex items-center gap-2.5 relative z-10">
                    <div className="w-8 h-8 bg-[#00E676] text-[#0A0A0A] flex items-center justify-center shrink-0 border border-[#0A0A0A]">
                      <BadgeCheck className="w-4 h-4 text-[#0A0A0A]" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-tight text-white">LASRERA Licensed</span>
                      <span className="block text-[8px] font-mono text-blue-100 leading-tight">Lagos State Authority</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="space-y-2 text-xs text-gray-700 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0A0A0A] flex-shrink-0" />
                <span>{AGENT_PROFILE.office}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0A0A0A] flex-shrink-0" />
                <span>{AGENT_PROFILE.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0A0A0A] flex-shrink-0" />
                <span>{AGENT_PROFILE.phone}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-sm bg-[#0A0A0A] hover:bg-[#333333] text-[#FFD600] text-xs font-semibold flex items-center gap-2 transition-all shadow-none"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Consultation</span>
              </a>

              <a
                href={`tel:${AGENT_PROFILE.phone}`}
                className="px-4 py-2.5 rounded-sm bg-white hover:bg-gray-100 text-gray-800 border border-[#0A0A0A] text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#0A0A0A]" />
                <span>Call Office</span>
              </a>
            </div>

          </div>

        </motion.div>

        {/* Testimonials with Delayed Staggered Zoom & Blur Reveal */}
        <div className="gsap-testimonials-container">
          <motion.h3 
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-xl font-sans font-black uppercase tracking-tighter text-[#0A0A0A] mb-8 text-center"
          >
            Client Experiences & Diaspora Feedback
          </motion.h3>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                  delayChildren: 0.55
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((test) => (
              <motion.div 
                key={test.id} 
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9, filter: 'blur(8px)' },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    filter: 'blur(0px)',
                    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className="gsap-testimonial-card bg-white border border-[#0A0A0A] rounded-sm p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#0A0A0A] mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#5A5A40]" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 italic font-normal leading-relaxed mb-4">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#0A0A0A]/80">
                  <span className="block text-xs font-bold text-[#0A0A0A]">{test.clientName}</span>
                  <span className="block text-[10px] text-[#0A0A0A]/90">{test.role}</span>
                  <span className="block text-[10px] text-gray-500">{test.location}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

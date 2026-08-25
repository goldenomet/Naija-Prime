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
          {/* AUTHENTIC LAGOS GRAFFITI STREET ART BACKGROUND (Positioned safely in background behind text & photos) */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
            {/* Lagos Graffiti Background Overlay SVG */}
            <svg className="w-full h-full opacity-25" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Spray Paint Drip Pattern Filter / Gradients */}
                <linearGradient id="grafYellowRed" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD600" />
                  <stop offset="50%" stopColor="#FF3B30" />
                  <stop offset="100%" stopColor="#E60000" />
                </linearGradient>

                <linearGradient id="grafCyanGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E676" />
                  <stop offset="100%" stopColor="#007AFF" />
                </linearGradient>
                
                <pattern id="sprayTexture" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="5" cy="8" r="1.5" fill="#0A0A0A" opacity="0.4" />
                  <circle cx="18" cy="22" r="1" fill="#FFD600" opacity="0.5" />
                  <circle cx="32" cy="12" r="2" fill="#FF3B30" opacity="0.3" />
                  <circle cx="12" cy="35" r="1.2" fill="#0A0A0A" opacity="0.3" />
                  <circle cx="28" cy="29" r="0.8" fill="#00E676" opacity="0.6" />
                </pattern>
              </defs>

              {/* Texture Spray Noise Overlay */}
              <rect width="1000" height="600" fill="url(#sprayTexture)" opacity="0.4" />

              {/* LEKKI-IKOYI LINK BRIDGE STENCIL SILHOUETTE (Center Background) */}
              <g transform="translate(320, 180)" opacity="0.4">
                {/* Cable Bridge Pylon Tower */}
                <path d="M 180 200 L 195 40 L 205 40 L 220 200 Z" fill="#0A0A0A" />
                <path d="M 188 180 L 198 70 L 202 70 L 212 180 Z" fill="#FFD600" />
                {/* Cable Suspension Lines */}
                <line x1="200" y1="50" x2="60" y2="200" stroke="#0A0A0A" strokeWidth="2.5" strokeDasharray="4 2" />
                <line x1="200" y1="70" x2="90" y2="200" stroke="#0A0A0A" strokeWidth="2" />
                <line x1="200" y1="90" x2="120" y2="200" stroke="#0A0A0A" strokeWidth="2" />
                <line x1="200" y1="110" x2="150" y2="200" stroke="#0A0A0A" strokeWidth="1.5" />
                
                <line x1="200" y1="50" x2="340" y2="200" stroke="#0A0A0A" strokeWidth="2.5" strokeDasharray="4 2" />
                <line x1="200" y1="70" x2="310" y2="200" stroke="#0A0A0A" strokeWidth="2" />
                <line x1="200" y1="90" x2="280" y2="200" stroke="#0A0A0A" strokeWidth="2" />
                <line x1="200" y1="110" x2="250" y2="200" stroke="#0A0A0A" strokeWidth="1.5" />
                {/* Bridge Deck Base */}
                <rect x="20" y="195" width="360" height="12" fill="#0A0A0A" />
              </g>

              {/* 1. TOP RIGHT: Crown Stencil & Spray Splatters */}
              <g transform="translate(620, -15) rotate(4)">
                {/* Spray Paint Splatter Circles */}
                <circle cx="200" cy="90" r="110" fill="url(#grafYellowRed)" opacity="0.18" />
                
                {/* Underline Spray Tag & Paint Drips */}
                <path d="M 10 115 C 100 135, 220 105, 340 125" stroke="#FF3B30" strokeWidth="7" strokeLinecap="round" />
                {/* Paint Drips */}
                <path d="M 35 120 V 155 C 35 162, 42 162, 42 155 V 120" fill="#FF3B30" />
                <path d="M 140 123 V 170 C 140 178, 147 178, 147 170 V 123" fill="#FF3B30" />
                <path d="M 260 122 V 148 C 260 154, 266 154, 266 148 V 122" fill="#FF3B30" />

                {/* Stencil Crown Icon */}
                <path d="M 290 25 L 310 60 L 335 30 L 360 60 L 380 25 L 370 75 H 300 Z" fill="#FFD600" stroke="#0A0A0A" strokeWidth="2" />
              </g>

              {/* 2. TOP LEFT: Iconic Yellow Danfo Bus Graffiti Stencil (Moved upward, dots removed) */}
              <g transform="translate(-40, -45) rotate(-4)">
                {/* Yellow Spray Circle */}
                <circle cx="160" cy="120" r="110" fill="#FFD600" opacity="0.25" />
                
                {/* Danfo Bus Silhouette Stencil */}
                <g transform="translate(40, 40) scale(0.9)">
                  {/* Bus Body */}
                  <path d="M 20 60 H 180 C 190 60, 200 70, 200 85 V 120 H 20 V 60 Z" fill="#FFD600" stroke="#0A0A0A" strokeWidth="4" />
                  {/* Black Twin Stripes (Classic Danfo Accent) */}
                  <rect x="20" y="85" width="180" height="10" fill="#0A0A0A" />
                  <rect x="20" y="100" width="180" height="10" fill="#0A0A0A" />
                  {/* Windows */}
                  <rect x="35" y="66" width="30" height="14" fill="#0A0A0A" />
                  <rect x="75" y="66" width="35" height="14" fill="#0A0A0A" />
                  <rect x="120" y="66" width="35" height="14" fill="#0A0A0A" />
                  {/* Wheels */}
                  <circle cx="55" cy="120" r="16" fill="#0A0A0A" stroke="#FFD600" strokeWidth="3" />
                  <circle cx="155" cy="120" r="16" fill="#0A0A0A" stroke="#FFD600" strokeWidth="3" />
                </g>
              </g>

              {/* 3. CENTER RIGHT: Eyo Masquerade Hat Stencil Art */}
              <g transform="translate(810, 220) rotate(-6)">
                {/* Eyo Masquerade Traditional Hat Stencil Outline */}
                <path d="M 40 120 L 70 20 H 130 L 160 120 Z" fill="none" stroke="#0A0A0A" strokeWidth="5" strokeLinejoin="miter" />
                <path d="M 30 120 H 170 V 135 H 30 Z" fill="#0A0A0A" />
                {/* Hat Ribbon Stencil */}
                <rect x="62" y="90" width="66" height="16" fill="#FF3B30" />
                {/* Spray Drips from Hat */}
                <circle cx="100" cy="160" r="5" fill="#FF3B30" />
                <circle cx="100" cy="178" r="3.5" fill="#FF3B30" />
              </g>

              {/* 4. BOTTOM LEFT: Stencil Arrow (Green sphere and vertical drip lines removed) */}
              <g transform="translate(20, 500) rotate(1)">
                {/* Geometric Stencil Arrow */}
                <path d="M 280 30 L 310 30 L 310 18 L 335 38 L 310 58 L 310 46 L 280 46 Z" fill="#0A0A0A" />
              </g>

              {/* 5. BOTTOM RIGHT: Starburst Graffiti Badge */}
              <g transform="translate(760, 440)">
                {/* Starburst Graffiti Shape */}
                <polygon points="100,10 120,50 160,30 140,70 190,90 140,110 160,150 120,130 100,170 80,130 40,150 60,110 10,90 60,70 40,30 80,50" fill="#FFD600" opacity="0.3" stroke="#0A0A0A" strokeWidth="2.5" />

                {/* Splatter Dots */}
                <circle cx="15" cy="35" r="7" fill="#007AFF" />
                <circle cx="28" cy="22" r="4" fill="#007AFF" />
                <circle cx="185" cy="135" r="7" fill="#FF3B30" />
                <circle cx="198" cy="148" r="4" fill="#FF3B30" />
              </g>
            </svg>
          </div>

          {/* Subtly textured background grid */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:20px_20px] z-0" />
          
          {/* Agent Photo with Zoom & Tilt Reveal (Enlarged column size) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="lg:col-span-6 relative z-10"
          >
            <div className="aspect-[4/4.6] rounded-none overflow-hidden border border-[#0A0A0A] bg-[#FFD600] shadow-none relative">
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

          {/* Bio & Track Record (Refined column width and text sizes) */}
          <div className="lg:col-span-6 space-y-5 relative z-10 bg-white/70 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none p-2 sm:p-0 rounded-sm">
            <div>
              <span className="px-2.5 py-0.5 rounded-none bg-[#0A0A0A] text-[#FFD600] border border-[#0A0A0A] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                {AGENT_PROFILE.title}
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold uppercase tracking-tight text-[#0A0A0A] mt-2">
                {AGENT_PROFILE.name}
              </h3>
              <p className="text-[11px] text-[#0A0A0A] font-mono font-semibold mt-1 bg-[#FFD600]/30 inline-block px-1.5 py-0.5 border border-[#0A0A0A]/30">
                {AGENT_PROFILE.company}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#0A0A0A] leading-relaxed font-normal bg-white/80 p-3 border-l-2 border-[#0A0A0A] shadow-xs">
              {AGENT_PROFILE.bio}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-3 py-3 border-y border-[#0A0A0A] bg-white/60 p-2">
              <div>
                <span className="block text-xl sm:text-2xl font-sans font-extrabold uppercase tracking-tight text-[#0A0A0A]">
                  {AGENT_PROFILE.salesVolumeNgn}
                </span>
                <span className="text-[11px] font-medium text-gray-700">Closed Volume</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-sans font-extrabold uppercase tracking-tight text-[#0A0A0A]">
                  {AGENT_PROFILE.experienceYears}+ Years
                </span>
                <span className="text-[11px] font-medium text-gray-700">Lagos Advisory</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-sans font-extrabold uppercase tracking-tight text-[#0A0A0A]">
                  100%
                </span>
                <span className="text-[11px] font-medium text-gray-700">Title Guarantee</span>
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

import React, { useState } from 'react';
import { Property, Currency } from '../types';
import { formatPrice, formatFullNaira, generateWhatsAppLink } from '../utils/formatters';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, MapPin, Bed, Bath, Maximize2, Car, ShieldCheck, 
  MessageSquare, Phone, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Share2, Copy
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property;
  currency: Currency;
  onClose: () => void;
  onBookInspection: (property: Property) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  currency,
  onClose,
  onBookInspection
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const formattedPrice = formatPrice(property.priceNgn, currency);
  const fullNairaPrice = formatFullNaira(property.priceNgn);

  const whatsappMessage = `Hello Babatunde, I would like to inquire about "${property.title}" listed for ${fullNairaPrice} in ${property.location}. Could we schedule a physical or live video inspection?`;
  const whatsappUrl = generateWhatsAppLink(property.agentPhone, whatsappMessage);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-hidden bg-[#0A0A0A]/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6"
    >
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white border border-[#0A0A0A] rounded-none w-full max-w-5xl overflow-hidden shadow-2xl text-[#0A0A0A] flex flex-col h-[90vh] sm:h-[88vh] max-h-[92vh]"
      >
        
        {/* Top Header Bar */}
        <div className="p-4 sm:px-6 bg-[#FFD600] border-b border-[#0A0A0A] flex items-center justify-between flex-shrink-0 z-20">
          <div className="min-w-0 flex-1 mr-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#0A0A0A] block truncate">
              {property.location} • {property.propertyType}
            </span>
            <h2 className="text-base sm:text-lg font-sans font-black uppercase tracking-tighter text-[#0A0A0A] truncate">
              {property.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-sm bg-white hover:bg-[#0A0A0A] hover:text-[#FFD600] text-gray-700 transition-colors text-xs flex items-center gap-1 border border-[#0A0A0A]"
              title="Share Listing"
            >
              {copiedLink ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-sm bg-white hover:bg-[#0A0A0A] hover:text-[#FFD600] text-gray-700 transition-colors border border-[#0A0A0A]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="overflow-y-auto flex-1 min-h-0 p-4 sm:p-6 space-y-6 overscroll-contain">
          
          {/* Main Gallery View */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden bg-neutral-900 border border-[#0A0A0A]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={property.images[activeImageIndex] || property.mainImage}
                  alt={property.title}
                  initial={{ opacity: 0.4, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.4 }}
                  transition={{ duration: 0.2 }}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('unsplash.com')) {
                      target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-none bg-[#FFD600] hover:bg-[#0A0A0A] hover:text-[#FFD600] text-[#0A0A0A] border border-[#0A0A0A] transition-all hover:scale-105 z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-none bg-[#FFD600] hover:bg-[#0A0A0A] hover:text-[#FFD600] text-[#0A0A0A] border border-[#0A0A0A] transition-all hover:scale-105 z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 bg-[#FFD600] px-3 py-1 rounded-sm text-xs font-mono border border-[#0A0A0A] text-[#0A0A0A] font-bold z-10">
                {activeImageIndex + 1} / {property.images.length}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {property.images.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-sm overflow-hidden border-2 flex-shrink-0 transition-all bg-neutral-900 ${
                      activeImageIndex === idx ? 'border-[#0A0A0A] ring-2 ring-[#0A0A0A] scale-105 opacity-100 z-10' : 'border-[#0A0A0A]/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${idx + 1}`} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('unsplash.com')) {
                          target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80';
                        }
                      }}
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Overview & Price Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 bg-[#FFD600]/30 rounded-none border border-[#0A0A0A]">
            <div className="md:col-span-2 space-y-2 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#0A0A0A] text-[#FFD600] text-xs font-bold uppercase tracking-wider">
                  {property.status}
                </span>
                <span className="px-2.5 py-1 rounded bg-white text-[#0A0A0A] border border-[#0A0A0A] text-xs font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0A0A0A] flex-shrink-0" />
                  <span>Title: {property.titleDocument}</span>
                </span>
              </div>
              
              <h1 className="text-xl sm:text-2xl font-sans font-black uppercase tracking-tighter text-[#0A0A0A] break-words">
                {property.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-700 flex items-center gap-1.5 font-medium break-words">
                <MapPin className="w-4 h-4 text-[#0A0A0A] flex-shrink-0" />
                <span>{property.address}</span>
              </p>
            </div>

            {/* Price Box */}
            <div className="bg-white p-4 rounded-sm border border-[#0A0A0A] flex flex-col justify-center shadow-sm min-w-0">
              <span className="text-xs uppercase text-gray-500 font-bold tracking-wider">Guide Price</span>
              <span className="text-2xl font-sans font-black uppercase tracking-tighter text-[#0A0A0A] break-words">
                {formattedPrice}
              </span>
              <span className="text-[11px] font-mono text-gray-600 mt-0.5 break-words">
                Full Naira: {fullNairaPrice}
              </span>
              {property.serviceChargeNgn ? (
                <span className="text-[11px] text-gray-600 mt-1 font-medium break-words">
                  Est. Service Charge: ₦{(property.serviceChargeNgn / 1000000).toFixed(1)}M/yr
                </span>
              ) : null}
            </div>
          </div>

          {/* Property Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#FFD600]/20 rounded-sm border border-[#0A0A0A] text-center">
            <div className="min-w-0">
              <Bed className="w-5 h-5 mx-auto text-[#0A0A0A] mb-1" />
              <span className="block text-xs text-gray-500 uppercase font-medium truncate">Bedrooms</span>
              <span className="text-sm font-bold text-[#0A0A0A] truncate block">{property.bedrooms} En-suite</span>
            </div>
            <div className="min-w-0">
              <Bath className="w-5 h-5 mx-auto text-[#0A0A0A] mb-1" />
              <span className="block text-xs text-gray-500 uppercase font-medium truncate">Bathrooms</span>
              <span className="text-sm font-bold text-[#0A0A0A] truncate block">{property.bathrooms} Baths</span>
            </div>
            <div className="min-w-0">
              <Maximize2 className="w-5 h-5 mx-auto text-[#0A0A0A] mb-1" />
              <span className="block text-xs text-gray-500 uppercase font-medium truncate">Floor Area</span>
              <span className="text-sm font-bold text-[#0A0A0A] truncate block">{property.sizeSqm} sqm</span>
            </div>
            <div className="min-w-0">
              <Car className="w-5 h-5 mx-auto text-[#0A0A0A] mb-1" />
              <span className="block text-xs text-gray-500 uppercase font-medium truncate">Parking</span>
              <span className="text-sm font-bold text-[#0A0A0A] truncate block">{property.parkingSpaces} Vehicles</span>
            </div>
          </div>

          {/* Description */}
          <div className="min-w-0">
            <h3 className="text-sm uppercase font-bold text-gray-800 tracking-wider mb-2">
              Property Description & Overview
            </h3>
            <p className="text-sm text-gray-800 leading-relaxed font-normal whitespace-pre-line break-words">
              {property.description}
            </p>
          </div>

          {/* Features & Amenities Grid */}
          <div className="min-w-0">
            <h3 className="text-sm uppercase font-bold text-gray-800 tracking-wider mb-3">
              Features & Luxury Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-sm bg-[#FFD600]/20 border border-[#0A0A0A] text-xs text-gray-800 font-medium min-w-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] flex-shrink-0" />
                  <span className="break-words">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Land Title Banner */}
          <div className="p-4 bg-[#FFD600]/30 border border-[#0A0A0A] rounded-sm flex items-start gap-3 min-w-0">
            <ShieldCheck className="w-6 h-6 text-[#0A0A0A] flex-shrink-0 mt-0.5" />
            <div className="min-w-0">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A0A0A] break-words">
                Lagos State Verified Title: {property.titleDocument}
              </h4>
              <p className="text-xs text-gray-700 mt-1 font-normal break-words">
                All legal title documents for this listing have been audited and verified with the Lagos State Ministry of Physical Planning and Urban Development / Lands Bureau. Clean unencumbered title guarantee.
              </p>
            </div>
          </div>

        </div>

        {/* Action Footer */}
        <div className="p-4 sm:px-6 bg-[#FFD600] border-t border-[#0A0A0A] flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0 z-20">
          <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
            <img
              src={property.agentAvatar}
              alt={property.agentName}
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-none object-cover border border-[#0A0A0A] flex-shrink-0"
            />
            <div className="min-w-0">
              <span className="block text-xs font-bold text-[#0A0A0A] truncate">{property.agentName}</span>
              <span className="block text-[10px] text-gray-700 font-medium truncate">Lead Advisory • Naija Prime Realty</span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`tel:${property.agentPhone}`}
              className="p-2.5 rounded-sm bg-white hover:bg-[#0A0A0A] hover:text-[#FFD600] text-gray-800 border border-[#0A0A0A] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-sm bg-[#0A0A0A] hover:bg-[#262626] text-[#FFD600] text-xs font-bold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Agent</span>
            </a>

            <button
              onClick={() => onBookInspection(property)}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-sm bg-[#0A0A0A] hover:bg-[#262626] text-[#FFD600] text-xs font-bold transition-transform hover:scale-[1.02] shadow-sm flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Inspection</span>
            </button>
          </div>
        </div>

      </motion.div>

    </motion.div>
  );
};


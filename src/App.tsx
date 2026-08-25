import React, { useState, useMemo, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Property, FilterState, Currency, LocationArea } from './types';
import { PROPERTIES } from './data/properties';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PropertyFilter } from './components/PropertyFilter';
import { PropertyCard } from './components/PropertyCard';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { AgentSection } from './components/AgentSection';
import { AdvisoryPage } from './components/AdvisoryPage';
import { NeighborhoodGuide } from './components/NeighborhoodGuide';
import { MortgageCalculatorModal } from './components/MortgageCalculatorModal';
import { InspectionModal } from './components/InspectionModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { AiChatbot } from './components/AiChatbot';
import { Footer } from './components/Footer';
import { Building2, Sparkles, PhoneCall, ShieldCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useGsapScroll } from './hooks/useGsapScroll';
import { gsapElasticScroll, gsapNavigateToSection } from './utils/gsapScroll';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('NGN');
  const [activeSection, setActiveSection] = useState<'listings' | 'neighborhoods' | 'agent'>('listings');

  // Mount GSAP ScrollTrigger effects
  useGsapScroll();

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    location: 'All Locations',
    status: 'All Statuses',
    propertyType: 'All Types',
    minPrice: 0,
    maxPrice: 3000000000,
    minBedrooms: 0,
    titleDocument: 'All Titles',
    sortBy: 'featured'
  });

  // Favorites (persisted in localStorage)
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('naija_prime_favorites');
      return saved ? JSON.parse(saved) : ['prop-1', 'prop-2'];
    } catch (e) {
      return ['prop-1', 'prop-2'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('naija_prime_favorites', JSON.stringify(favoriteIds));
    } catch (e) {
      // ignore
    }
  }, [favoriteIds]);

  // Modal states
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inspectionProperty, setInspectionProperty] = useState<Property | null>(null);
  const [isInspectionOpen, setIsInspectionOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filtered & Sorted Properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      // Search query
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesTagline = p.tagline.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesLoc = p.location.toLowerCase().includes(query);
        if (!matchesTitle && !matchesTagline && !matchesDesc && !matchesLoc) {
          return false;
        }
      }

      // Location
      if (filters.location !== 'All Locations' && p.location !== filters.location) {
        return false;
      }

      // Status
      if (filters.status !== 'All Statuses' && p.status !== filters.status) {
        return false;
      }

      // Property Type
      if (filters.propertyType !== 'All Types' && p.propertyType !== filters.propertyType) {
        return false;
      }

      // Bedrooms
      if (filters.minBedrooms > 0 && p.bedrooms < filters.minBedrooms) {
        return false;
      }

      // Title Document
      if (filters.titleDocument !== 'All Titles' && p.titleDocument !== filters.titleDocument) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.priceNgn - b.priceNgn;
      if (filters.sortBy === 'price-desc') return b.priceNgn - a.priceNgn;
      if (filters.sortBy === 'newest') return (b.yearBuilt || 2024) - (a.yearBuilt || 2024);
      // Default: featured first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [filters]);

  const favoriteProperties = useMemo(() => {
    return PROPERTIES.filter((p) => favoriteIds.includes(p.id));
  }, [favoriteIds]);

  const handleSelectArea = (location: LocationArea) => {
    setFilters((prev) => ({ ...prev, location }));
    if (activeSection !== 'listings') {
      setActiveSection('listings');
      setTimeout(() => {
        gsapElasticScroll('#listings-container', { duration: 1.1, offset: -80, ease: 'power4.out' });
      }, 100);
    } else {
      gsapElasticScroll('#listings-container', { duration: 1.1, offset: -80, ease: 'power4.out' });
    }
  };

  const handleOpenInspectionForProperty = (p: Property) => {
    setInspectionProperty(p);
    setIsInspectionOpen(true);
  };

  // Dynamic SEO Head Metadata via React Helmet
  const seoData = useMemo(() => {
    if (selectedProperty) {
      return {
        title: `${selectedProperty.title} (${selectedProperty.location}) | Naija Prime Realty`,
        description: `${selectedProperty.tagline} - ${selectedProperty.bedrooms} Bed, ${selectedProperty.bathrooms} Bath luxury property with verified ${selectedProperty.titleDocument} in ${selectedProperty.location}, Lagos.`,
        keywords: `${selectedProperty.title}, ${selectedProperty.location} real estate, Lagos luxury homes, ${selectedProperty.titleDocument}, Naija Prime Realty`,
        ogType: 'article',
        ogImage: selectedProperty.mainImage,
      };
    }

    switch (activeSection) {
      case 'neighborhoods':
        return {
          title: 'Lagos Prime Neighborhood Guide | Banana Island, Ikoyi, Victoria Island & Lekki',
          description: 'Comprehensive investment intelligence, security profiles, infrastructure milestones, and luxury property insights for Banana Island, Ikoyi, Eko Atlantic, and Lekki Phase 1 in Lagos, Nigeria.',
          keywords: 'Banana Island real estate, Ikoyi luxury properties, Eko Atlantic apartments, Lekki Phase 1 homes, Lagos neighborhood guide, Nigerian property investment',
          ogType: 'website',
          ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        };
      case 'agent':
        return {
          title: 'Institutional Advisory & Title Due Diligence | Babatunde Adeleke | Naija Prime Realty',
          description: 'Over 15 years of institutional real estate advisory, title verification, Governor\'s Consent facilitation, diaspora buyer representation, and capital preservation in Lagos luxury markets.',
          keywords: 'Babatunde Adeleke, Lagos property lawyer, real estate due diligence Nigeria, Governor Consent verification, Certificate of Occupancy, diaspora property investment Lagos',
          ogType: 'profile',
          ogImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
        };
      case 'listings':
      default:
        return {
          title: 'Naija Prime Realty | Verified Luxury Homes & Prime Real Estate in Lagos, Nigeria',
          description: 'Browse verified luxury mansions, oceanfront penthouses, and high-yield developments with authentic Governor\'s Consent and C of O titles in Banana Island, Ikoyi, Eko Atlantic, and Lekki Phase 1.',
          keywords: 'Lagos luxury real estate, Banana Island mansions, Ikoyi apartments for sale, Eko Atlantic penthouses, Lekki Phase 1 houses, Governor Consent Lagos, verified Nigerian real estate',
          ogType: 'website',
          ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        };
    }
  }, [activeSection, selectedProperty]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#FFD600] text-[#0A0A0A] font-sans selection:bg-[#0A0A0A] selection:text-[#FFD600]">
        {/* Dynamic SEO Head Management */}
        <Helmet>
          <title>{seoData.title}</title>
          <meta name="description" content={seoData.description} />
          <meta name="keywords" content={seoData.keywords} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:site_name" content="Naija Prime Realty" />
          <meta property="og:title" content={seoData.title} />
          <meta property="og:description" content={seoData.description} />
          <meta property="og:type" content={seoData.ogType} />
          <meta property="og:image" content={seoData.ogImage} />
          <meta property="og:locale" content="en_NG" />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoData.title} />
          <meta name="twitter:description" content={seoData.description} />
          <meta name="twitter:image" content={seoData.ogImage} />

          {/* Additional Meta */}
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Babatunde Adeleke - Naija Prime Realty" />
        </Helmet>
      {/* GSAP Scroll Progress Indicator */}
      <div
        id="gsap-scroll-progress"
        className="fixed top-0 left-0 right-0 h-1 bg-[#0A0A0A] z-50 origin-left scale-x-0 transition-transform pointer-events-none"
      />
      
      {/* Sticky Navigation Bar */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        favoritesCount={favoriteIds.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenInspectionModal={() => {
          setInspectionProperty(null);
          setIsInspectionOpen(true);
        }}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section (Listings View Only) */}
        {activeSection === 'listings' && (
          <HeroSection
            filters={filters}
            setFilters={setFilters}
            currency={currency}
            onSelectProperty={(p) => setSelectedProperty(p)}
            onBookInspection={handleOpenInspectionForProperty}
            onSearch={() => {
              setActiveSection('listings');
              gsapElasticScroll('#listings-container', { duration: 1.0, offset: -80, ease: 'power4.out' });
            }}
            totalListingsCount={PROPERTIES.length}
          />
        )}

        {/* Section View Switcher with Elastic Fade & Rise Transition */}
        <AnimatePresence mode="wait">
          {activeSection === 'listings' && (
            <motion.div
              key="listings-view"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <section id="listings-container" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Liquid Fluid Ambient Backdrops */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/25 rounded-full blur-3xl pointer-events-none animate-liquid-blob" />
                <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#0A0A0A]/5 rounded-full blur-3xl pointer-events-none animate-liquid-blob-slow" />
                <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-white/20 rounded-full blur-2xl pointer-events-none animate-liquid-blob" />
                
                {/* Filter Toolbar */}
                <PropertyFilter
                  filters={filters}
                  setFilters={setFilters}
                  totalResults={filteredProperties.length}
                />

                {/* Property Cards Grid */}
                {filteredProperties.length === 0 ? (
                  <div className="text-center py-20 bg-white/50 rounded-none border border-[#0A0A0A] p-8 space-y-4">
                    <Building2 className="w-12 h-12 text-gray-500 mx-auto" />
                    <h3 className="text-xl font-sans font-black uppercase tracking-tighter text-gray-800">
                      No listings match your filter criteria
                    </h3>
                    <p className="text-xs text-gray-500 max-w-md mx-auto font-normal">
                      Try adjusting your area filter or price range. We also have private off-market listings in Banana Island and Ikoyi available upon direct request.
                    </p>
                    <button
                      onClick={() => setFilters({
                        searchQuery: '',
                        location: 'All Locations',
                        status: 'All Statuses',
                        propertyType: 'All Types',
                        minPrice: 0,
                        maxPrice: 3000000000,
                        minBedrooms: 0,
                        titleDocument: 'All Titles',
                        sortBy: 'featured'
                      })}
                      className="px-4 py-2 bg-[#0A0A0A] text-[#FFD600] font-bold text-xs rounded-sm hover:bg-[#333333] transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                ) : (
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.16,
                          delayChildren: 0.35
                        }
                      }
                    }}
                  >
                    {filteredProperties.map((prop) => (
                      <PropertyCard
                        key={prop.id}
                        property={prop}
                        currency={currency}
                        isFavorite={favoriteIds.includes(prop.id)}
                        onToggleFavorite={toggleFavorite}
                        onSelectProperty={(p) => setSelectedProperty(p)}
                        onBookInspection={handleOpenInspectionForProperty}
                      />
                    ))}
                  </motion.div>
                )}

              </section>

              {/* Show Agent below listings on home view */}
              <AgentSection />
            </motion.div>
          )}

          {/* Neighborhoods View */}
          {activeSection === 'neighborhoods' && (
            <motion.div
              key="neighborhoods-view"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <NeighborhoodGuide onSelectArea={handleSelectArea} />
            </motion.div>
          )}

          {/* Advisory Full Page View */}
          {activeSection === 'agent' && (
            <motion.div
              key="advisory-view"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <AdvisoryPage
                onOpenInspectionModal={() => {
                  setInspectionProperty(null);
                  setIsInspectionOpen(true);
                }}
                onExploreListings={() => {
                  gsapNavigateToSection('listings', activeSection, setActiveSection);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers with AnimatePresence */}
      <AnimatePresence>
        {/* Property Detail Modal */}
        {selectedProperty && (
          <PropertyDetailModal
            key="property-detail-modal"
            property={selectedProperty}
            currency={currency}
            onClose={() => setSelectedProperty(null)}
            onBookInspection={(p) => {
              setSelectedProperty(null);
              handleOpenInspectionForProperty(p);
            }}
          />
        )}

        {/* Mortgage & Rates Calculator Modal */}
        {isCalculatorOpen && (
          <MortgageCalculatorModal
            key="mortgage-calc-modal"
            currency={currency}
            onClose={() => setIsCalculatorOpen(false)}
          />
        )}

        {/* Inspection Modal */}
        {isInspectionOpen && (
          <InspectionModal
            key="inspection-modal"
            property={inspectionProperty || undefined}
            onClose={() => {
              setIsInspectionOpen(false);
              setInspectionProperty(null);
            }}
          />
        )}

        {/* Saved Favorites Wishlist Drawer */}
        {isFavoritesOpen && (
          <FavoritesDrawer
            key="favorites-drawer"
            favorites={favoriteProperties}
            currency={currency}
            onClose={() => setIsFavoritesOpen(false)}
            onRemoveFavorite={toggleFavorite}
            onSelectProperty={(p) => setSelectedProperty(p)}
          />
        )}
      </AnimatePresence>

      {/* AI Luxury Real Estate Chatbot */}
      <AiChatbot onOpenInspectionModal={() => setIsInspectionOpen(true)} />

    </div>
    </HelmetProvider>
  );
}

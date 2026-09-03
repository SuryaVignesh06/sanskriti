import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { CULTURAL_EXPERIENCES, CULTURAL_AMBASSADORS, INDIAN_STATES } from '@/lib/sanskritiData';
import { Search, MapPin, Filter, ShieldCheck, ArrowRight, X } from 'lucide-react';

export default function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialLocation = searchParams.get('location') || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [selectedType, setSelectedType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = ['All', 'Festivals', 'Food', 'Crafts', 'Music & Dance', 'Traditions', 'Local Life', 'Heritage'];
  const locations = ['All', 'Jaipur', 'Kochi', 'Varanasi', 'Vijayawada', 'Amritsar'];

  const filteredExperiences = useMemo(() => {
    return CULTURAL_EXPERIENCES.filter((exp) => {
      const matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            exp.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            exp.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || exp.category === selectedCategory;
      const matchesLocation = selectedLocation === 'All' || exp.location.includes(selectedLocation);
      const matchesType = selectedType === 'All' || exp.type === selectedType;
      const matchesPrice = exp.priceINR <= maxPrice;

      return matchesSearch && matchesCategory && matchesLocation && matchesType && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceINR - b.priceINR;
      if (sortBy === 'price-desc') return b.priceINR - a.priceINR;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, selectedLocation, selectedType, maxPrice, sortBy]);

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">DISCOVER LIVING CULTURE</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-foreground">WHAT DO YOU WANT TO EXPERIENCE?</h1>
          <p className="font-paragraph text-muted text-base">
            Discover authentic local cultural experiences hosted by verified Ambassadors across India.
          </p>
        </div>

        {/* Search & Filter Bar Container */}
        <div className="bg-surface border border-secondary p-6 rounded-xl space-y-6 shadow-sm">
          {/* Main Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search experiences by title, city, or specialty..."
              className="w-full pl-12 pr-4 py-3.5 bg-background border border-secondary rounded-lg font-paragraph text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Contextual Filter Bar */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Category Dropdown */}
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">CATEGORY</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2.5 bg-background border border-secondary rounded-lg text-xs font-paragraph text-foreground focus:outline-none focus:border-accent"
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Location Dropdown */}
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">LOCATION</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2.5 bg-background border border-secondary rounded-lg text-xs font-paragraph text-foreground focus:outline-none focus:border-accent"
              >
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">MAX PRICE: ₹{maxPrice}</label>
              <input
                type="range"
                min="1000"
                max="5000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-accent cursor-pointer"
              />
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">SORT BY</label>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full p-2.5 bg-background border border-secondary rounded-lg text-xs font-paragraph text-foreground focus:outline-none focus:border-accent"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between border-b border-secondary pb-4">
          <p className="font-paragraph text-xs font-bold text-muted uppercase tracking-wider">
            SHOWING {filteredExperiences.length} CULTURAL EXPERIENCES
          </p>
          {(selectedCategory !== 'All' || selectedLocation !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedLocation('All');
                setSearchQuery('');
                setMaxPrice(5000);
              }}
              className="text-xs text-accent-dark font-bold hover:underline"
            >
              CLEAR FILTERS
            </button>
          )}
        </div>

        {/* Experience Cards Grid */}
        {filteredExperiences.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredExperiences.map((exp) => {
              const host = CULTURAL_AMBASSADORS.find(a => a.id === exp.hostId);
              return (
                <div key={exp.id} className="bg-surface border border-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-60">
                    <SafeImage src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
                      {exp.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs text-muted">
                        <MapPin className="w-3.5 h-3.5 text-accent-dark" />
                        <span>{exp.location}</span>
                      </div>
                      <h3 className="font-heading text-xl text-foreground">
                        <Link to={`/experience/${exp.id}`} className="hover:text-accent-dark transition-colors">
                          {exp.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-muted line-clamp-2">{exp.subtitle}</p>
                    </div>

                    {host && (
                      <div className="pt-4 border-t border-secondary flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <SafeImage src={host.avatar} alt={host.name} className="w-8 h-8 rounded-full object-cover" />
                          <div>
                            <p className="text-xs font-semibold text-foreground">{host.name}</p>
                            <p className="text-[10px] text-muted flex items-center">
                              <ShieldCheck className="w-3 h-3 text-accent-dark mr-0.5" /> Verified Host
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-heading text-lg text-foreground">₹{exp.priceINR}</p>
                          <p className="text-[10px] text-muted">per guest</p>
                        </div>
                      </div>
                    )}

                    <Link
                      to={`/experience/${exp.id}`}
                      className="w-full py-2.5 bg-foreground hover:bg-foreground/90 text-background font-paragraph text-xs font-bold tracking-wider rounded-lg text-center transition-all block"
                    >
                      VIEW EXPERIENCE DETAILS
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4 bg-surface border border-secondary rounded-xl">
            <Filter className="w-12 h-12 text-muted mx-auto" />
            <h3 className="font-heading text-2xl text-foreground">NO EXPERIENCES MATCH YOUR CRITERIA</h3>
            <p className="font-paragraph text-sm text-muted">Try resetting your category or location filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

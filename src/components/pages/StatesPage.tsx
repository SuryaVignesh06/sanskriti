import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { INDIAN_STATES, IndianState } from '@/lib/sanskritiData';
import { Search, MapPin, ArrowRight, Sparkles, X } from 'lucide-react';

export default function StatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'North', 'South', 'East', 'West', 'Central', 'North East', 'UT'];

  const filteredStates = useMemo(() => {
    return INDIAN_STATES.filter((st) => {
      const matchesSearch = st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            st.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            st.danceForms.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesRegion = selectedRegion === 'All' || st.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const featuredState = INDIAN_STATES.find(s => s.key === 'andhra-pradesh') || INDIAN_STATES[0];

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">EXPLORE ALL 28 STATES & UNION TERRITORIES</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-foreground">EXPLORE INDIA'S CULTURAL MAP</h1>
          <p className="font-paragraph text-muted text-base">
            Every state of India carries centuries of distinct classical art, temple traditions, regional cuisines, and living local heritage.
          </p>
        </div>

        {/* Featured State Spotlight - Andhra Pradesh */}
        <div className="bg-surface border border-secondary rounded-2xl overflow-hidden shadow-sm grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent/20 text-accent-dark rounded-full text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RECOMMENDED STARTING POINT</span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground">{featuredState.name.toUpperCase()}</h2>
              <p className="font-paragraph text-sm text-muted leading-relaxed">{featuredState.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {featuredState.danceForms.slice(0, 3).map(d => (
                  <span key={d} className="px-3 py-1 bg-background border border-secondary rounded-full text-xs text-foreground font-medium">
                    {d}
                  </span>
                ))}
                {featuredState.cuisines.slice(0, 2).map(c => (
                  <span key={c} className="px-3 py-1 bg-background border border-secondary rounded-full text-xs text-foreground font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                to={`/state/${featuredState.key}`}
                className="inline-flex items-center px-6 py-3.5 bg-foreground hover:bg-foreground/90 text-background font-paragraph text-xs font-bold tracking-wider rounded-lg transition-all"
              >
                <span>EXPLORE {featuredState.name.toUpperCase()} CULTURE</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 min-h-[350px] relative">
            <SafeImage src={featuredState.image} alt={featuredState.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Region Tabs */}
            <div className="flex overflow-x-auto pb-2 gap-2 justify-start no-scrollbar">
              {regions.map(r => (
                <button
                  key={r}
                  onClick={() => setSelectedRegion(r)}
                  className={`px-4 py-2 rounded-lg font-heading text-base tracking-wider transition-all border shrink-0 ${
                    selectedRegion === r
                      ? 'bg-accent border-accent text-foreground font-bold shadow-sm'
                      : 'bg-surface border-secondary text-muted hover:border-foreground'
                  }`}
                >
                  {r.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search state or dance..."
                className="w-full pl-10 pr-4 py-2 bg-surface border border-secondary rounded-lg font-paragraph text-xs text-foreground focus:outline-none focus:border-accent"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-secondary pb-3">
            <span className="font-paragraph text-xs font-bold text-muted uppercase tracking-wider">
              SHOWING {filteredStates.length} STATES & TERRITORIES
            </span>
          </div>

          {/* All 28 States & UTs Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredStates.map((st) => (
              <Link
                key={st.key}
                to={`/state/${st.key}`}
                className="group bg-surface border border-secondary rounded-xl overflow-hidden hover:border-foreground shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <SafeImage
                    src={st.image}
                    alt={st.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-foreground/80 backdrop-blur-sm text-background px-2.5 py-0.5 rounded text-[10px] font-bold uppercase">
                    {st.region}
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-2xl text-foreground group-hover:text-accent-dark transition-colors">
                      {st.name}
                    </h3>
                    <p className="text-xs text-muted flex items-center">
                      <MapPin className="w-3 h-3 text-accent-dark mr-1" />
                      Capital: {st.capital}
                    </p>
                    <p className="text-xs text-muted line-clamp-2 mt-1 leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-secondary flex items-center justify-between text-xs font-bold text-foreground">
                    <span>EXPLORE CULTURE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
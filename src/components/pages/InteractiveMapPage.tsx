import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { INDIAN_STATES, IndianState, DESTINATIONS } from '@/lib/sanskritiData';
import { Search, MapPin, ArrowRight, ExternalLink, Sparkles, X, Grid, Compass, Info, Map as MapIcon, ChevronRight } from 'lucide-react';

// Map coordinate nodes for 28 States & 8 UTs for interactive map representation
interface StateMapNode {
  key: string;
  cx: number; // percentage X on map canvas (0 to 100)
  cy: number; // percentage Y on map canvas (0 to 100)
  label: string;
}

const STATE_MAP_NODES: StateMapNode[] = [
  // North
  { key: 'jammu-kashmir', cx: 32, cy: 12, label: 'J&K' },
  { key: 'ladakh', cx: 45, cy: 10, label: 'Ladakh' },
  { key: 'himachal-pradesh', cx: 37, cy: 19, label: 'Himachal' },
  { key: 'punjab', cx: 30, cy: 22, label: 'Punjab' },
  { key: 'chandigarh', cx: 34, cy: 23, label: 'Chandigarh' },
  { key: 'uttarakhand', cx: 42, cy: 24, label: 'Uttarakhand' },
  { key: 'haryana', cx: 33, cy: 27, label: 'Haryana' },
  { key: 'delhi', cx: 36, cy: 29, label: 'Delhi' },
  { key: 'rajasthan', cx: 25, cy: 38, label: 'Rajasthan' },
  { key: 'uttar-pradesh', cx: 46, cy: 35, label: 'Uttar Pradesh' },

  // West & Central
  { key: 'gujarat', cx: 16, cy: 48, label: 'Gujarat' },
  { key: 'dadra-nagar-haveli', cx: 18, cy: 56, label: 'Daman & Diu' },
  { key: 'madhya-pradesh', cx: 39, cy: 48, label: 'Madhya Pradesh' },
  { key: 'maharashtra', cx: 30, cy: 62, label: 'Maharashtra' },
  { key: 'chhattisgarh', cx: 50, cy: 53, label: 'Chhattisgarh' },
  { key: 'goa', cx: 26, cy: 72, label: 'Goa' },

  // East & North East
  { key: 'bihar', cx: 58, cy: 39, label: 'Bihar' },
  { key: 'jharkhand', cx: 58, cy: 47, label: 'Jharkhand' },
  { key: 'west-bengal', cx: 64, cy: 49, label: 'West Bengal' },
  { key: 'odisha', cx: 56, cy: 58, label: 'Odisha' },
  { key: 'sikkim', cx: 66, cy: 32, label: 'Sikkim' },
  { key: 'assam', cx: 80, cy: 34, label: 'Assam' },
  { key: 'meghalaya', cx: 78, cy: 38, label: 'Meghalaya' },
  { key: 'arunachal-pradesh', cx: 88, cy: 28, label: 'Arunachal' },
  { key: 'nagaland', cx: 88, cy: 35, label: 'Nagaland' },
  { key: 'manipur', cx: 87, cy: 40, label: 'Manipur' },
  { key: 'mizoram', cx: 85, cy: 46, label: 'Mizoram' },
  { key: 'tripura', cx: 80, cy: 44, label: 'Tripura' },

  // South & Islands
  { key: 'andhra-pradesh', cx: 42, cy: 72, label: 'Andhra Pradesh' },
  { key: 'telangana', cx: 40, cy: 64, label: 'Telangana' },
  { key: 'karnataka', cx: 32, cy: 75, label: 'Karnataka' },
  { key: 'puducherry', cx: 44, cy: 83, label: 'Puducherry' },
  { key: 'tamil-nadu', cx: 38, cy: 85, label: 'Tamil Nadu' },
  { key: 'kerala', cx: 32, cy: 88, label: 'Kerala' },
  { key: 'lakshadweep', cx: 20, cy: 85, label: 'Lakshadweep' },
  { key: 'andaman-nicobar', cx: 78, cy: 80, label: 'Andaman & Nicobar' }
];

export default function InteractiveMapPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeStateKey, setActiveStateKey] = useState<string>('rajasthan');
  const [hoveredStateKey, setHoveredStateKey] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'grid'>('map');
  const [exploredStates] = useState<Set<string>>(new Set(['kerala'])); // Mock explored state

  const regions = ['All', 'North', 'South', 'East', 'West', 'Central', 'North East', 'UT'];

  // Filtered states list
  const filteredStates = useMemo(() => {
    return INDIAN_STATES.filter((st) => {
      const matchesSearch =
        st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.danceForms?.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())) ||
        st.cuisines?.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesRegion = selectedRegion === 'All' || st.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const activeState: IndianState = useMemo(() => {
    return INDIAN_STATES.find((s) => s.key === activeStateKey) || INDIAN_STATES[0];
  }, [activeStateKey]);

  const activeStateDestinations = useMemo(() => {
    return DESTINATIONS ? DESTINATIONS.filter(d => d.stateKey === activeStateKey) : [];
  }, [activeStateKey]);

  // Google Maps link generator
  const getGoogleMapsUrl = (query: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ', India')}`;
  };

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-secondary pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center space-x-2 px-3 py-1 bg-accent/20 text-accent-dark rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Compass className="w-3.5 h-3.5" />
              <span>INTERACTIVE CULTURAL ATLAS OF INDIA</span>
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground">
              EXPLORE 28 STATES & 8 UTs
            </h1>
            <p className="font-paragraph text-muted text-sm sm:text-base leading-relaxed">
              Click any state node on the cultural map or browse by region to discover centuries of classical dance, sacred shrines, traditional crafts, and local cuisines.
            </p>
          </div>

          {/* View Switcher */}
          <div className="flex items-center space-x-2 bg-surface p-1 border border-secondary rounded-xl self-start md:self-auto shadow-sm">
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-heading text-sm transition-all ${
                viewMode === 'map' ? 'bg-accent text-foreground shadow-sm font-bold' : 'text-muted hover:text-foreground'
              }`}
            >
              <MapIcon className="w-4 h-4" />
              <span>MAP VIEW</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-heading text-sm transition-all ${
                viewMode === 'grid' ? 'bg-accent text-foreground shadow-sm font-bold' : 'text-muted hover:text-foreground'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>GRID VIEW</span>
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Region Tabs */}
          <div className="flex overflow-x-auto pb-2 gap-2 justify-start no-scrollbar">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-4 py-2 rounded-xl font-heading text-xs sm:text-sm tracking-wider transition-all border shrink-0 shadow-sm ${
                  selectedRegion === r
                    ? 'bg-accent border-accent text-foreground font-bold'
                    : 'bg-surface border-secondary text-muted hover:border-foreground hover:bg-background'
                }`}
              >
                {r.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search state, dish, or dance..."
              className="w-full pl-10 pr-8 py-2.5 bg-surface border border-secondary rounded-xl font-paragraph text-xs text-foreground focus:outline-none focus:border-accent shadow-sm"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        {viewMode === 'map' ? (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Map Visual (SVG Canvas) */}
            <div className="lg:col-span-7 bg-surface border border-secondary rounded-[32px] p-6 sm:p-8 relative min-h-[560px] flex flex-col justify-between overflow-hidden shadow-sm">
              {/* Background Map Graphic Accent */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#F4B93A_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-dark" />
                  INTERACTIVE MAP ({filteredStates.length} AVAILABLE)
                </span>
                <span className="text-[11px] font-bold text-foreground bg-accent/20 px-3 py-1 rounded-full border border-accent/30">
                  {exploredStates.size} EXPLORED
                </span>
              </div>

              {/* Map View Canvas */}
              <div className="relative w-full h-[480px] my-4 flex items-center justify-center">
                {/* Stylized India Outline SVG */}
                <svg
                  viewBox="0 0 500 550"
                  className="w-full h-full max-h-[480px] drop-shadow-sm pointer-events-none opacity-40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Decorative India Coastal/Border Silhouette Outline */}
                  <path
                    d="M 160 80 Q 200 40 240 60 Q 280 80 270 120 L 310 130 Q 360 130 400 150 Q 450 170 440 200 Q 420 220 400 240 L 390 270 Q 340 270 300 290 Q 280 340 250 380 Q 220 430 190 470 Q 180 440 170 390 Q 150 350 130 310 Q 90 280 80 240 Q 90 200 120 180 Z"
                    fill="currentColor"
                    className="text-accent"
                  />
                  {/* Regional Connection Lines */}
                  <line x1="160" y1="210" x2="350" y2="240" stroke="currentColor" className="text-secondary" strokeWidth="1" />
                  <line x1="250" y1="120" x2="250" y2="400" stroke="currentColor" className="text-secondary" strokeWidth="1" />
                </svg>

                {/* State Pins overlayed dynamically */}
                {STATE_MAP_NODES.map((node) => {
                  const isFiltered = filteredStates.some((s) => s.key === node.key);
                  const isActive = activeStateKey === node.key;
                  const isHovered = hoveredStateKey === node.key;
                  const isExplored = exploredStates.has(node.key);

                  if (!isFiltered) return null;

                  return (
                    <button
                      key={node.key}
                      onClick={() => setActiveStateKey(node.key)}
                      onMouseEnter={() => setHoveredStateKey(node.key)}
                      onMouseLeave={() => setHoveredStateKey(null)}
                      style={{ left: `${node.cx}%`, top: `${node.cy}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-20 ${
                        isActive ? 'scale-125 z-40' : isHovered ? 'scale-110 z-30' : ''
                      }`}
                    >
                      <div className="relative flex flex-col items-center">
                        {/* Pin Dot */}
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition-all shadow-md ${
                            isActive
                              ? 'bg-accent border-foreground ring-4 ring-accent/30'
                              : isHovered
                              ? 'bg-accent border-foreground'
                              : isExplored
                              ? 'bg-[#1A1A17] border-accent text-background'
                              : 'bg-surface border-secondary hover:border-accent'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-foreground' : isExplored ? 'bg-accent' : 'bg-secondary'}`} />
                        </div>

                        {/* Label Badge */}
                        <span
                          className={`mt-1 px-1.5 py-0.5 rounded text-[10px] font-heading tracking-wider whitespace-nowrap shadow-sm border transition-all ${
                            isActive || isHovered
                              ? 'bg-foreground text-background border-foreground font-bold'
                              : isExplored
                              ? 'bg-accent text-foreground border-accent font-bold'
                              : 'bg-surface/90 text-muted border-secondary'
                          }`}
                        >
                          {node.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick State Selector Bar */}
              <div className="pt-4 border-t border-secondary flex items-center justify-between overflow-x-auto gap-2 no-scrollbar z-10">
                <span className="text-[11px] font-bold text-muted uppercase shrink-0">QUICK JUMP:</span>
                <div className="flex items-center space-x-1.5">
                  {filteredStates.slice(0, 8).map((st) => (
                    <button
                      key={st.key}
                      onClick={() => setActiveStateKey(st.key)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-heading transition-all border ${
                        activeStateKey === st.key
                          ? 'bg-accent border-accent text-foreground font-bold'
                          : 'bg-background border-secondary text-muted hover:border-foreground'
                      }`}
                    >
                      {st.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active State Culture Spotlight Drawer/Card */}
            <div className="lg:col-span-5 bg-surface border border-secondary rounded-[32px] overflow-hidden shadow-sm flex flex-col justify-between space-y-6">
              <div className="relative h-64 overflow-hidden">
                <SafeImage src={activeState.image} alt={activeState.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {activeState.region} REGION
                  </span>
                  {exploredStates.has(activeState.key) && (
                    <span className="bg-foreground text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> EXPLORED
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="font-heading text-4xl text-foreground drop-shadow-sm">{activeState.name}</h2>
                  <p className="text-xs text-muted flex items-center mt-1">
                    <MapPin className="w-3.5 h-3.5 text-accent-dark mr-1" />
                    Capital: <strong className="text-foreground ml-1">{activeState.capital}</strong>
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 space-y-6 flex-1">
                {/* Description */}
                <p className="font-paragraph text-sm text-muted leading-relaxed line-clamp-3">
                  {activeState.description}
                </p>

                {/* Destinations Preview */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading text-xs text-accent-dark tracking-widest uppercase">TOP DESTINATIONS</h4>
                    <span className="text-[10px] bg-background border border-secondary px-2 py-0.5 rounded text-muted">{activeStateDestinations.length} Places</span>
                  </div>
                  {activeStateDestinations.length > 0 ? (
                    <div className="space-y-2">
                      {activeStateDestinations.slice(0, 2).map(dest => (
                        <div key={dest.slug} className="flex items-center justify-between p-2.5 bg-background border border-secondary rounded-xl">
                          <span className="font-semibold text-xs text-foreground truncate max-w-[150px]">{dest.name}</span>
                          <span className="text-[10px] text-muted border border-secondary px-1.5 py-0.5 rounded">{dest.category}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-muted italic">Destinations being mapped...</p>
                  )}
                </div>

                {/* Cultural DNA Pills (Summary) */}
                <div className="space-y-3 pt-2 border-t border-secondary">
                  <h4 className="font-heading text-xs text-accent-dark tracking-widest uppercase">CULTURAL DNA</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeState.danceForms?.slice(0,2).map((d) => (
                      <span key={d} className="px-2 py-1 bg-surface border border-secondary rounded text-[10px] font-bold text-foreground">
                        {d}
                      </span>
                    ))}
                    {activeState.cuisines?.slice(0,2).map((c) => (
                      <span key={c} className="px-2 py-1 bg-surface border border-secondary rounded text-[10px] font-bold text-foreground">
                        {c}
                      </span>
                    ))}
                    <span className="px-2 py-1 bg-background text-muted rounded text-[10px] font-bold">
                      +{activeState.festivals?.length || 0} More
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/state/${activeState.key}`}
                  className="flex-1 inline-flex items-center justify-center px-5 py-3.5 bg-accent hover:bg-accent-hover text-foreground font-heading text-sm font-bold tracking-wider rounded-xl transition-all shadow-sm"
                >
                  <span>DIVE DEEPER</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>

                <a
                  href={getGoogleMapsUrl(activeState.capital + ', ' + activeState.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-background border border-secondary hover:border-foreground text-foreground font-paragraph text-xs font-bold rounded-xl transition-all shadow-sm"
                  title="Open capital in Google Maps"
                >
                  <MapPin className="w-4 h-4 text-accent-dark sm:mr-1.5" />
                  <span className="hidden sm:inline">MAPS</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View for all filtered states */
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredStates.map((st) => (
              <div
                key={st.key}
                className="group bg-surface border border-secondary rounded-[32px] overflow-hidden hover:border-foreground shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <SafeImage src={st.image} alt={st.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <div className="bg-surface/90 backdrop-blur-sm text-foreground px-2.5 border border-secondary py-0.5 rounded text-[10px] font-bold uppercase shadow-sm">
                      {st.region}
                    </div>
                    {exploredStates.has(st.key) && (
                      <div className="bg-foreground text-accent px-2 border border-foreground py-0.5 rounded text-[10px] font-bold uppercase shadow-sm flex items-center">
                        <ShieldCheck className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-2xl text-foreground group-hover:text-accent-dark transition-colors">
                      {st.name}
                    </h3>
                    <p className="text-xs text-muted flex items-center">
                      <MapPin className="w-3 h-3 text-accent-dark mr-1" />
                      {st.capital}
                    </p>
                    <p className="text-xs text-muted line-clamp-2 mt-1 leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-secondary flex items-center justify-between">
                    <Link
                      to={`/state/${st.key}`}
                      className="text-xs font-bold text-foreground flex items-center group-hover:text-accent-dark bg-background px-3 py-1.5 rounded-lg border border-secondary group-hover:border-accent"
                    >
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={getGoogleMapsUrl(st.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted hover:text-foreground rounded-md hover:bg-background transition-colors border border-transparent hover:border-secondary"
                      title="Open in Google Maps"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

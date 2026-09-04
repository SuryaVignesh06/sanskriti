import { useParams, Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { DESTINATIONS, INDIAN_STATES } from '@/lib/sanskritiData';
import { MapPin, ArrowLeft, ArrowRight, Sun, Calendar, Info, Clock, Route } from 'lucide-react';

export default function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const destination = DESTINATIONS ? DESTINATIONS.find(d => d.slug === slug) : null;
  const stateData = destination ? INDIAN_STATES.find(s => s.key === destination.stateKey) : null;

  if (!destination || !stateData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-center p-6">
        <div>
          <h2 className="font-heading text-3xl text-foreground mb-2">Destination Not Found</h2>
          <p className="text-muted mb-6">The place you are looking for does not exist or has been moved.</p>
          <Link to="/states" className="px-6 py-2.5 bg-accent text-foreground font-bold rounded-xl">
            BROWSE ALL STATES
          </Link>
        </div>
      </div>
    );
  }

  const getGoogleMapsUrl = (query: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ', India')}`;
  };

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen pb-24">
      {/* Top Breadcrumb Nav */}
      <div className="bg-surface border-b border-secondary py-4 sticky top-16 z-30 shadow-sm backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between text-xs text-muted">
          <div className="flex items-center space-x-2">
            <Link to={`/state/${stateData.key}`} className="hover:text-foreground flex items-center uppercase font-bold text-accent-dark">
              <ArrowLeft className="w-3.5 h-3.5 mr-1" /> {stateData.name}
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold uppercase">{destination.name}</span>
          </div>

          <a
            href={getGoogleMapsUrl(destination.location)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-foreground font-medium text-accent-dark"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Map</span>
          </a>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 sm:pt-12 space-y-12">
        
        {/* Header & Hero */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-accent/20 border border-accent/40 text-accent-dark text-xs font-bold uppercase rounded-full">
              {destination.type} Destination
            </span>
            <span className="px-3 py-1 bg-surface text-foreground text-xs font-bold uppercase rounded-full border border-secondary">
              {destination.category}
            </span>
          </div>
          
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-foreground tracking-tight">
            {destination.name.toUpperCase()}
          </h1>

          <div className="h-[40vh] sm:h-[60vh] relative rounded-[32px] overflow-hidden border border-secondary shadow-sm">
            <SafeImage src={destination.illustration} alt={destination.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <p className="text-white text-sm flex items-center font-bold">
                  <MapPin className="w-4 h-4 text-accent mr-1.5" />
                  {destination.location}
                </p>
                <p className="text-white/80 text-xs flex items-center">
                  <Calendar className="w-4 h-4 text-accent mr-1.5" />
                  Best Season: {destination.bestSeason}
                </p>
              </div>
              <button className="px-6 py-3 bg-accent text-foreground text-xs font-bold rounded-xl shadow-lg hover:bg-accent-hover transition-colors inline-flex justify-center items-center">
                <Route className="w-4 h-4 mr-2" />
                ADD TO JOURNEY
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl">The Experience</h2>
              <p className="text-lg leading-relaxed text-foreground/90 font-medium">
                {destination.culturalSummary}
              </p>
              <p className="text-muted leading-relaxed">
                {destination.whyItMatters}
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-secondary">
              <h2 className="font-heading text-3xl">What To See</h2>
              <ul className="space-y-4">
                {destination.whatToSee.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-accent text-foreground flex items-center justify-center font-bold text-xs mt-0.5 mr-3 shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item}</h4>
                      <p className="text-xs text-muted mt-1">Make sure to dedicate time to explore this specific site.</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-surface border border-secondary p-6 rounded-[24px] space-y-6 shadow-sm">
              <h3 className="font-heading text-xl uppercase tracking-widest text-accent-dark">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Sun className="w-5 h-5 text-muted mr-3 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-foreground">Ideal Time</h5>
                    <p className="text-xs text-muted mt-0.5">{destination.bestSeason}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-muted mr-3 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-foreground">Suggested Duration</h5>
                    <p className="text-xs text-muted mt-0.5">2 - 3 Days</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-muted mr-3 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-foreground">Category</h5>
                    <p className="text-xs text-muted mt-0.5">{destination.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {destination.guideAvailability && (
              <div className="bg-accent/10 border border-accent/30 p-6 rounded-[24px] space-y-4 text-center">
                <h3 className="font-heading text-xl">Hire a Local Guide</h3>
                <p className="text-xs text-muted">A Cultural Ambassador can elevate your experience.</p>
                <Link to={`/state/${stateData.key}`} className="w-full py-2.5 bg-accent text-foreground text-xs font-bold rounded-xl hover:bg-accent-hover transition-colors inline-block">
                  VIEW HOSTS IN {stateData.name.toUpperCase()}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

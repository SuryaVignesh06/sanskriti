import { useParams, Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { GUIDE_PROFILES, INDIAN_STATES, CULTURAL_EXPERIENCES, GuideProfile } from '@/lib/sanskritiData';
import { MapPin, ArrowLeft, ShieldCheck, Star, MessageCircle, Calendar, Languages, Map, Sparkles } from 'lucide-react';

export default function GuideProfilePage() {
  const { slug } = useParams<{ slug: string }>();
  
  const guide = GUIDE_PROFILES ? GUIDE_PROFILES.find((g: GuideProfile) => g.slug === slug) : null;
  const stateData = guide ? INDIAN_STATES.find(s => s.key === guide.stateKey) : null;
  
  if (!guide || !stateData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-center p-6">
        <div>
          <h2 className="font-heading text-3xl text-foreground mb-2">Guide Not Found</h2>
          <p className="text-muted mb-6">The ambassador you are looking for does not exist.</p>
          <Link to="/states" className="px-6 py-2.5 bg-accent text-foreground font-bold rounded-xl">
            BROWSE STATES
          </Link>
        </div>
      </div>
    );
  }

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
            <span className="text-foreground font-semibold uppercase">{guide.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-12 space-y-12">
        
        {/* Profile Header */}
        <div className="bg-surface border border-secondary rounded-[32px] p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
          <div className="relative shrink-0">
            <SafeImage src={guide.avatar} alt={guide.name} className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-accent shadow-lg" />
            {guide.verified && (
              <div className="absolute bottom-2 right-2 bg-accent text-background p-1.5 rounded-full border-2 border-background shadow-sm" title="Verified Ambassador">
                <ShieldCheck className="w-6 h-6" />
              </div>
            )}
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-accent-dark tracking-widest uppercase">{guide.type}</span>
              <h1 className="font-heading text-4xl sm:text-5xl text-foreground flex items-center justify-center md:justify-start gap-2">
                {guide.name}
              </h1>
              <p className="text-muted flex items-center justify-center md:justify-start gap-1">
                <MapPin className="w-4 h-4 text-accent-dark" />
                {guide.city}, {stateData.name}
              </p>
            </div>
            
            <p className="text-sm font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
              "{guide.about}"
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <div className="flex items-center bg-background border border-secondary px-3 py-1.5 rounded-lg text-xs font-bold">
                <Star className="w-4 h-4 text-accent-dark mr-1.5" />
                {guide.rating} ({guide.reviewsCount} Reviews)
              </div>
              <div className="flex items-center bg-background border border-secondary px-3 py-1.5 rounded-lg text-xs font-bold">
                <Map className="w-4 h-4 text-muted mr-1.5" />
                {guide.experienceCount} Tours Led
              </div>
            </div>
          </div>
          
          <div className="shrink-0 space-y-3 w-full md:w-auto">
            <button className="w-full px-8 py-3 bg-foreground hover:bg-black text-background text-sm font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center">
              <Calendar className="w-4 h-4 mr-2" />
              BOOK A SESSION
            </button>
            <button className="w-full px-8 py-3 bg-surface border-2 border-secondary hover:border-foreground text-foreground text-sm font-bold rounded-xl transition-colors flex items-center justify-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              MESSAGE
            </button>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-surface border border-secondary rounded-[24px] p-6 space-y-6 shadow-sm">
              <h3 className="font-heading text-xl uppercase tracking-widest text-accent-dark">About Me</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-muted flex items-center mb-2">
                    <Languages className="w-4 h-4 mr-1.5" /> Fluent In
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.languages.map((l: string) => (
                      <span key={l} className="bg-background border border-secondary px-2 py-1 rounded text-xs">{l}</span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-secondary">
                  <h4 className="text-xs font-bold text-muted flex items-center mb-2">
                    <Sparkles className="w-4 h-4 mr-1.5" /> Specialties
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.specialties.map((s: string) => (
                      <span key={s} className="bg-accent/10 border border-accent/30 text-accent-dark px-2 py-1 rounded text-xs">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-heading text-3xl">Experiences Hosted by {guide.name.split(' ')[0]}</h3>
            <div className="p-8 bg-surface border border-secondary rounded-[24px] text-center">
              <p className="text-muted mb-4">No public experiences listed currently. You can request a custom itinerary.</p>
              <button className="px-6 py-2 bg-background border border-secondary text-xs font-bold rounded-lg hover:border-foreground transition-colors">
                REQUEST CUSTOM ITINERARY
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

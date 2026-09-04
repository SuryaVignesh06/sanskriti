import { useParams, Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { INDIAN_STATES, CULTURAL_EXPERIENCES, CULTURAL_AMBASSADORS, DESTINATIONS, GUIDE_PROFILES, getQuizForState } from '@/lib/sanskritiData';
import { MapPin, ArrowLeft, ShieldCheck, ArrowRight, Award, Sparkles, ExternalLink, Utensils, Music, Compass, Palette, LandPlot, BookOpen, ScrollText, Users, HandHeart } from 'lucide-react';

export default function StateCulturePage() {
  const { stateKey } = useParams<{ stateKey: string }>();

  const stateData = INDIAN_STATES.find(s => s.key === stateKey) || INDIAN_STATES[0];
  const stateExperiences = CULTURAL_EXPERIENCES.filter(e => e.stateKey === stateData.key);
  const stateDestinations = DESTINATIONS ? DESTINATIONS.filter(d => d.stateKey === stateData.key) : [];
  const iconicDestinations = stateDestinations.filter(d => d.type === 'Iconic');
  const hiddenDestinations = stateDestinations.filter(d => d.type === 'Hidden');
  const stateGuides = GUIDE_PROFILES ? GUIDE_PROFILES.filter(g => g.stateKey === stateData.key) : [];
  const stateQuiz = getQuizForState(stateData.key);

  const getGoogleMapsUrl = (query: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ', ' + stateData.name + ', India')}`;
  };

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen pb-24">
      {/* Top Breadcrumb Nav */}
      <div className="bg-surface border-b border-secondary py-4 sticky top-16 z-30 shadow-sm backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between text-xs text-muted">
          <div className="flex items-center space-x-2">
            <Link to="/states" className="hover:text-foreground flex items-center">
              <ArrowLeft className="w-3.5 h-3.5 mr-1" /> India
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold uppercase">{stateData.name}</span>
          </div>

          <a
            href={getGoogleMapsUrl(stateData.capital)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-foreground font-medium text-accent-dark"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Open Capital ({stateData.capital}) in Maps</span>
            <span className="sm:hidden">Maps</span>
          </a>
        </div>
      </div>

      {/* 6. STATE HERO */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden bg-accent text-foreground">
        <SafeImage
          src={stateData.bannerImage || stateData.image}
          alt={stateData.name}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pb-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent text-foreground text-xs font-bold uppercase rounded-full shadow-sm">
                {stateData.region} REGION
              </span>
              <span className="px-3 py-1 bg-surface text-foreground text-xs font-bold uppercase rounded-full border border-secondary">
                CAPITAL: {stateData.capital}
              </span>
              {stateData.language && (
                <span className="px-3 py-1 bg-surface text-foreground text-xs font-bold uppercase rounded-full border border-secondary">
                  LANGUAGES: {stateData.language}
                </span>
              )}
            </div>
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl text-foreground tracking-tight drop-shadow-md">
              {stateData.name.toUpperCase()}
            </h1>
            <p className="font-paragraph text-foreground/90 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-sm">
              {stateData.description}
            </p>
          </div>

          <div className="shrink-0 flex gap-3 pb-2">
            <button className="px-8 py-4 bg-accent hover:bg-accent-hover text-foreground font-heading text-sm font-bold rounded-full transition-all shadow-lg flex items-center space-x-2">
              <Compass className="w-5 h-5" />
              <span>BUILD A JOURNEY</span>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 space-y-24">
        
        {/* 7. CULTURAL IDENTITY & 8. CULTURAL DNA UI */}
        <section className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl sm:text-5xl text-foreground">UNDERSTAND THE CULTURE</h2>
            <p className="text-muted mt-2 text-sm">Discover the deeply rooted traditions that define {stateData.name}.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Architecture */}
            <div className="bg-surface border border-secondary p-8 rounded-[32px] space-y-4 hover:border-accent transition-colors shadow-sm">
              <LandPlot className="w-8 h-8 text-accent-dark" />
              <h3 className="font-heading text-2xl">Architecture</h3>
              <p className="text-sm text-muted line-clamp-3">
                {stateData.architecture?.join(', ') || 'Distinctive regional architectural styles and historical monuments.'}
              </p>
              <button className="text-xs font-bold text-accent-dark hover:text-foreground flex items-center pt-2">
                EXPLORE <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>

            {/* Food */}
            <div className="bg-surface border border-secondary p-8 rounded-[32px] space-y-4 hover:border-accent transition-colors shadow-sm">
              <Utensils className="w-8 h-8 text-accent-dark" />
              <h3 className="font-heading text-2xl">Regional Food</h3>
              <p className="text-sm text-muted line-clamp-3">
                Signature dishes including {stateData.cuisines?.join(', ')}.
              </p>
              <button className="text-xs font-bold text-accent-dark hover:text-foreground flex items-center pt-2">
                EXPLORE <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>

            {/* Performing Arts */}
            <div className="bg-surface border border-secondary p-8 rounded-[32px] space-y-4 hover:border-accent transition-colors shadow-sm">
              <Music className="w-8 h-8 text-accent-dark" />
              <h3 className="font-heading text-2xl">Dance & Music</h3>
              <p className="text-sm text-muted line-clamp-3">
                Classical and folk traditions like {stateData.danceForms?.join(', ')}.
              </p>
              <button className="text-xs font-bold text-accent-dark hover:text-foreground flex items-center pt-2">
                EXPLORE <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>

            {/* Festivals */}
            <div className="bg-surface border border-secondary p-8 rounded-[32px] space-y-4 hover:border-accent transition-colors shadow-sm">
              <Sparkles className="w-8 h-8 text-accent-dark" />
              <h3 className="font-heading text-2xl">Festivals</h3>
              <p className="text-sm text-muted line-clamp-3">
                Vibrant celebrations including {stateData.festivals?.join(', ')}.
              </p>
              <button className="text-xs font-bold text-accent-dark hover:text-foreground flex items-center pt-2">
                EXPLORE <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>

            {/* Crafts & Textiles */}
            <div className="bg-surface border border-secondary p-8 rounded-[32px] space-y-4 hover:border-accent transition-colors shadow-sm">
              <Palette className="w-8 h-8 text-accent-dark" />
              <h3 className="font-heading text-2xl">Crafts & Textiles</h3>
              <p className="text-sm text-muted line-clamp-3">
                {stateData.crafts?.join(', ')}. {stateData.textiles?.join(', ')}.
              </p>
              <button className="text-xs font-bold text-accent-dark hover:text-foreground flex items-center pt-2">
                EXPLORE <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>

            {/* Literature & Traditions */}
            <div className="bg-surface border border-secondary p-8 rounded-[32px] space-y-4 hover:border-accent transition-colors shadow-sm">
              <ScrollText className="w-8 h-8 text-accent-dark" />
              <h3 className="font-heading text-2xl">Literature & Traditions</h3>
              <p className="text-sm text-muted line-clamp-3">
                {stateData.literature || 'Rich literary heritage and oral storytelling traditions.'} {stateData.traditions?.join(', ')}
              </p>
              <button className="text-xs font-bold text-accent-dark hover:text-foreground flex items-center pt-2">
                EXPLORE <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* 10. STATE MAP (Visual Placeholder for now) */}
        <section className="bg-surface border border-secondary rounded-[32px] overflow-hidden p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl">MAP OF {stateData.name.toUpperCase()}</h2>
            <p className="text-muted text-sm">Explore interactive cultural zones and major destinations.</p>
            <div className="flex gap-2 flex-wrap pt-4">
              {iconicDestinations.map(d => (
                <span key={d.slug} className="px-3 py-1.5 bg-background border border-secondary rounded-lg text-xs font-bold">{d.name}</span>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full h-[300px] bg-background border border-secondary rounded-2xl flex items-center justify-center opacity-70">
            <div className="text-center">
              <MapPin className="w-10 h-10 mx-auto text-muted mb-2" />
              <span className="text-xs font-bold tracking-widest text-muted">INTERACTIVE STATE MAP COMING SOON</span>
            </div>
          </div>
        </section>

        {/* 11. DESTINATION DISCOVERY */}
        <section className="space-y-10">
          <div className="flex items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground">PLACES WORTH EXPERIENCING</h2>
            </div>
          </div>

          {stateDestinations.length > 0 ? (
            <div className="space-y-12">
              {/* Iconic */}
              {iconicDestinations.length > 0 && (
                <div className="space-y-6">
                  <h3 className="font-heading text-xl text-accent-dark uppercase tracking-widest">Iconic Destinations</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {iconicDestinations.map(dest => (
                      <DestinationCard key={dest.slug} dest={dest} />
                    ))}
                  </div>
                </div>
              )}
              {/* Hidden */}
              {hiddenDestinations.length > 0 && (
                <div className="space-y-6">
                  <h3 className="font-heading text-xl text-accent-dark uppercase tracking-widest">Hidden & Lesser-Known</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hiddenDestinations.map(dest => (
                      <DestinationCard key={dest.slug} dest={dest} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 bg-surface border border-secondary rounded-[24px] text-center">
              <p className="text-muted">Destination data for {stateData.name} is being curated.</p>
            </div>
          )}
        </section>

        {/* 16. GUIDE DISCOVERY */}
        <section className="space-y-8">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl text-foreground">MEET YOUR LOCAL GUIDE</h2>
            <p className="text-muted mt-2 text-sm">Discover {stateData.name} through the eyes of Tourist Guides and Cultural Ambassadors.</p>
          </div>

          {stateGuides.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateGuides.map(guide => (
                <div key={guide.slug} className="bg-surface border border-secondary p-6 rounded-[24px] flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
                  <div className="relative">
                    <SafeImage src={guide.avatar} alt={guide.name} className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-sm" />
                    {guide.verified && (
                      <div className="absolute bottom-0 right-0 bg-accent text-background p-1 rounded-full border-2 border-background">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-heading text-2xl text-foreground">{guide.name}</h4>
                    <p className="text-[11px] font-bold text-accent-dark uppercase tracking-wider mt-0.5">{guide.type}</p>
                    <p className="text-xs text-muted mt-1">{guide.city}, {stateData.name}</p>
                  </div>
                  <div className="flex gap-2 justify-center flex-wrap">
                    {guide.specialties.slice(0,2).map(s => (
                      <span key={s} className="text-[10px] bg-background border border-secondary px-2 py-1 rounded text-muted">{s}</span>
                    ))}
                  </div>
                  <Link to={`/guides/${guide.slug}`} className="w-full mt-2 py-3 bg-foreground hover:bg-black text-background font-paragraph text-xs font-bold rounded-xl transition-all">
                    VIEW PROFILE
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 bg-surface border border-secondary rounded-[24px] text-center">
              <p className="text-muted">Guides for {stateData.name} are being onboarded.</p>
            </div>
          )}
        </section>

        {/* 24. STATE QUIZ & 31. CULTURAL LEARNING */}
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="bg-accent/10 border border-accent/30 p-8 rounded-[32px] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <Award className="w-10 h-10 text-accent-dark" />
              <h3 className="font-heading text-3xl">Take the {stateData.name} Quiz</h3>
              <p className="text-sm text-foreground/80">Test your knowledge on regional culture, festivals, and history to earn +50 Karma and unlock the "{stateQuiz.badgeAwarded}" badge.</p>
            </div>
            <Link to={`/quiz/${stateQuiz.id}`} className="w-full py-4 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-sm font-bold text-center rounded-xl shadow-sm transition-all">
              START QUIZ
            </Link>
          </div>
          
          <div className="bg-surface border border-secondary p-8 rounded-[32px] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <BookOpen className="w-10 h-10 text-muted" />
              <h3 className="font-heading text-3xl">Learn This Culture</h3>
              <p className="text-sm text-muted">Bite-sized modules to prepare you for your journey.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-background border border-secondary rounded-xl">
                  <span className="text-xs font-bold">12 MIN · FOOD</span>
                  <button className="text-xs text-accent-dark font-bold hover:underline">START</button>
                </div>
                <div className="flex items-center justify-between p-3 bg-background border border-secondary rounded-xl">
                  <span className="text-xs font-bold">10 MIN · DANCE</span>
                  <button className="text-xs text-accent-dark font-bold hover:underline">START</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 29. COMMUNITY */}
        <section className="bg-surface border border-secondary p-8 sm:p-12 rounded-[32px] text-center space-y-6">
          <Users className="w-12 h-12 text-accent-dark mx-auto" />
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground">{stateData.name.toUpperCase()} COMMUNITY</h2>
            <p className="text-muted text-sm">Join discussions, ask for local tips, and read stories from travelers and locals.</p>
          </div>
          <button className="px-8 py-3 bg-background border-2 border-accent text-foreground font-bold text-sm rounded-full hover:bg-accent transition-colors shadow-sm inline-flex items-center space-x-2">
            <HandHeart className="w-4 h-4" />
            <span>JOIN THE CIRCLE</span>
          </button>
        </section>
      </div>
    </div>
  );
}

// Subcomponent for Destination Cards
function DestinationCard({ dest }: { dest: any }) {
  return (
    <div className="bg-surface border border-secondary rounded-[24px] overflow-hidden hover:border-foreground hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      <div className="relative h-48 overflow-hidden">
        <SafeImage src={dest.illustration} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3 bg-surface/90 text-foreground px-2.5 py-0.5 rounded text-[10px] font-bold uppercase shadow-sm">
          {dest.category}
        </div>
        <div className="absolute bottom-3 left-4 right-4">
          <h4 className="font-heading text-2xl text-white">{dest.name}</h4>
          <span className="text-[10px] text-white/80 font-bold tracking-wider">{dest.location}</span>
        </div>
      </div>
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        <p className="text-xs text-muted line-clamp-2 leading-relaxed">{dest.culturalSummary}</p>
        <div className="pt-4 border-t border-secondary flex justify-between items-center">
          <Link to={`/destinations/${dest.slug}`} className="text-xs font-bold text-foreground hover:text-accent-dark flex items-center">
            <span>VIEW PLACE</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
          <span className="text-[10px] text-muted border border-secondary px-2 py-1 rounded">
            {dest.bestSeason}
          </span>
        </div>
      </div>
    </div>
  );
}
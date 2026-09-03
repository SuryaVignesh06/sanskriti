import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SafeImage } from '@/components/ui/SafeImage';
import {
  CULTURAL_EXPERIENCES,
  CULTURAL_AMBASSADORS,
  FESTIVALS_LIST,
  ONLINE_CLASSES,
  STORY_ARTICLES
} from '@/lib/sanskritiData';
import {
  ArrowRight,
  ShieldCheck,
  Heart,
  Users,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  Play,
  CheckCircle2
} from 'lucide-react';

export default function HomePage() {
  const [selectedFestivalIndex, setSelectedFestivalIndex] = useState(0);

  const categories = [
    { name: 'Festivals', count: '12 Annual Celebrations', image: 'https://images.unsplash.com/photo-1576487248805-acf45f51623a?q=80&w=800&auto=format&fit=crop', large: true },
    { name: 'Food & Cooking', count: '18 Family Kitchens', image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop' },
    { name: 'Crafts & Silk', count: '14 Artisan Workshops', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop' },
    { name: 'Music & Dance', count: '8 Classical Styles', image: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=800&auto=format&fit=crop' },
    { name: 'Traditions', count: '24 Sacred Customs', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop' },
    { name: 'Local Life', count: '15 Village Gatherings', image: 'https://images.unsplash.com/photo-1609946727702-86103328e188?q=80&w=800&auto=format&fit=crop' }
  ];

  const currentFestival = FESTIVALS_LIST[selectedFestivalIndex] || FESTIVALS_LIST[0];

  return (
    <div className="bg-background text-foreground font-paragraph">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0 opacity-40">
          <SafeImage
            src="https://images.unsplash.com/photo-1576487248805-acf45f51623a?q=80&w=1920&auto=format&fit=crop"
            alt="Living Indian Culture"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent text-foreground rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Authentic Cultural Experiences</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-background leading-[0.95]">
                DON'T JUST VISIT INDIA.<br />
                <span className="text-accent">LIVE IT.</span>
              </h1>
              <p className="font-paragraph text-lg sm:text-xl text-background/80 max-w-xl leading-relaxed">
                Discover India's living culture through verified local Cultural Ambassadors, authentic traditions, festivals, and human experiences you won't find in a typical guidebook.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/explore"
                className="px-8 py-4 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-sm font-bold tracking-wider rounded-lg text-center transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>EXPLORE EXPERIENCES</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-background/30 hover:border-background text-background font-paragraph text-sm font-semibold rounded-lg text-center transition-all"
              >
                DISCOVER HOW IT WORKS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CULTURAL DISCOVERY ("FIND YOUR INDIA") */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">DISCOVER BY CATEGORY</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-foreground mt-1">FIND YOUR INDIA</h2>
            <p className="font-paragraph text-muted text-base max-w-lg mt-2">
              Discover culture through the authentic moments that make Indian heritage come alive.
            </p>
          </div>
          <Link to="/explore" className="inline-flex items-center text-sm font-bold text-foreground hover:text-accent-dark transition-colors">
            <span>BROWSE ALL CATEGORIES</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Editorial Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={cat.name}
              to={`/explore?category=${encodeURIComponent(cat.name)}`}
              className={`group relative overflow-hidden rounded-xl bg-surface border border-secondary shadow-sm hover:shadow-xl transition-all duration-300 ${
                cat.large ? 'md:col-span-2 md:row-span-2 min-h-[420px]' : 'min-h-[220px]'
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-paragraph font-medium text-accent tracking-wider uppercase mb-1">
                  {cat.count}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl text-background tracking-wide group-hover:text-accent transition-colors">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: FEATURED EXPERIENCES */}
      <section className="py-24 bg-surface border-y border-secondary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">REAL LOCAL PARTICIPATION</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground mt-1">EXPERIENCES HAPPENING NOW</h2>
            </div>
            <Link to="/explore" className="inline-flex items-center text-sm font-bold text-foreground hover:text-accent-dark transition-colors">
              <span>VIEW ALL EXPERIENCES</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CULTURAL_EXPERIENCES.slice(0, 3).map((exp) => {
              const host = CULTURAL_AMBASSADORS.find(a => a.id === exp.hostId);
              return (
                <div key={exp.id} className="bg-background border border-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="relative h-60 overflow-hidden">
                    <SafeImage src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
                      {exp.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs text-muted">
                        <MapPin className="w-3.5 h-3.5 text-accent-dark" />
                        <span>{exp.location}</span>
                      </div>
                      <h3 className="font-heading text-xl text-foreground leading-snug">
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FESTIVAL CALENDAR */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">LIVING CULTURAL TIMELINE</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground">FOLLOW THE RHYTHM OF INDIA</h2>
          <p className="font-paragraph text-muted text-base">
            Plan your journey around the vibrant celebrations that bring local Indian communities together.
          </p>
        </div>

        {/* Festival Selection Bar */}
        <div className="flex overflow-x-auto pb-4 gap-3 mb-12 justify-start md:justify-center no-scrollbar">
          {FESTIVALS_LIST.map((fest, idx) => (
            <button
              key={fest.id}
              onClick={() => setSelectedFestivalIndex(idx)}
              className={`px-6 py-3 rounded-lg font-heading text-lg tracking-wider transition-all border shrink-0 ${
                selectedFestivalIndex === idx
                  ? 'bg-accent border-accent text-foreground font-bold shadow-md'
                  : 'bg-surface border-secondary text-muted hover:border-foreground'
              }`}
            >
              {fest.month.substring(0, 3).toUpperCase()} --- {fest.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Active Festival Spotlight */}
        <div className="bg-surface border border-secondary rounded-2xl overflow-hidden shadow-sm grid lg:grid-cols-12">
          <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-accent/20 text-accent-dark rounded-full text-xs font-bold uppercase">
                  {currentFestival.month} · {currentFestival.season}
                </span>
                <span className="text-xs text-muted">Locations: {currentFestival.locations.join(' · ')}</span>
              </div>
              <h3 className="font-heading text-4xl lg:text-5xl text-foreground">{currentFestival.name.toUpperCase()}</h3>
              <p className="font-paragraph text-sm font-semibold text-accent-dark">{currentFestival.tagline}</p>
              <p className="font-paragraph text-sm text-muted leading-relaxed">{currentFestival.description}</p>
            </div>

            <div className="pt-6 border-t border-secondary space-y-4">
              <h5 className="font-heading text-sm text-foreground">HOW LOCALS CELEBRATE:</h5>
              <p className="font-paragraph text-xs text-muted leading-relaxed">{currentFestival.howLocalsCelebrate}</p>

              <div className="pt-2">
                <Link
                  to={`/festival/${currentFestival.id}`}
                  className="inline-flex items-center px-6 py-3 bg-foreground hover:bg-foreground/90 text-background font-paragraph text-xs font-bold tracking-wider rounded-lg transition-all"
                >
                  <span>EXPLORE {currentFestival.name.toUpperCase()} JOURNEYS</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 min-h-[350px] relative">
            <SafeImage src={currentFestival.image} alt={currentFestival.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 5: CULTURAL AMBASSADORS */}
      <section className="py-24 bg-surface border-y border-secondary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">VERIFIED LOCAL HOSTS</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-foreground">MEET THE PEOPLE WHO MAKE INDIA FEEL REAL</h2>
            <p className="font-paragraph text-muted text-base">
              Connect directly with verified local practitioners, artisans, and families who open their homes and heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CULTURAL_AMBASSADORS.slice(0, 3).map((ambassador) => (
              <div key={ambassador.id} className="bg-background border border-secondary rounded-xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <SafeImage src={ambassador.avatar} alt={ambassador.name} className="w-16 h-16 rounded-full object-cover border-2 border-accent" />
                    <div>
                      <h3 className="font-heading text-2xl text-foreground">{ambassador.name}</h3>
                      <p className="text-xs text-muted flex items-center">
                        <MapPin className="w-3 h-3 text-accent-dark mr-1" />
                        {ambassador.location}
                      </p>
                      <span className="inline-flex items-center px-2 py-0.5 bg-accent/10 text-accent-dark text-[10px] font-bold rounded mt-1">
                        <ShieldCheck className="w-3 h-3 mr-1" /> Verified Ambassador
                      </span>
                    </div>
                  </div>

                  <p className="font-paragraph text-xs font-medium text-foreground italic border-l-2 border-accent pl-3">
                    "{ambassador.quote}"
                  </p>

                  <p className="font-paragraph text-xs text-muted leading-relaxed line-clamp-3">
                    {ambassador.bio}
                  </p>
                </div>

                <Link
                  to={`/ambassador/${ambassador.id}`}
                  className="w-full py-3 border border-foreground hover:bg-foreground hover:text-background font-paragraph text-xs font-bold tracking-wider rounded-lg text-center transition-all"
                >
                  MEET {ambassador.name.toUpperCase().split(' ')[0]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY SANSKRITI */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">THE SANSKRITI DIFFERENCE</span>
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground">REAL LEARNING, NOT SIGHTSEEING</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-surface border border-secondary p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-accent/20 border border-accent rounded-lg flex items-center justify-center text-accent-dark font-heading text-2xl font-bold">
              01
            </div>
            <h4 className="font-heading text-xl text-foreground">REAL LEARNING NOT SIGHTSEEING</h4>
            <p className="font-paragraph text-xs text-muted leading-relaxed">
              Learn directly from people who live the culture every day, rather than observing from a tourist bus.
            </p>
          </div>

          <div className="bg-surface border border-secondary p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-accent/20 border border-accent rounded-lg flex items-center justify-center text-accent-dark font-heading text-2xl font-bold">
              02
            </div>
            <h4 className="font-heading text-xl text-foreground">TRUSTED PEOPLE REAL CONNECTION</h4>
            <p className="font-paragraph text-xs text-muted leading-relaxed">
              Verified Cultural Ambassadors make unfamiliar traditions easy to explore with confidence and warmth.
            </p>
          </div>

          <div className="bg-surface border border-secondary p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-accent/20 border border-accent rounded-lg flex items-center justify-center text-accent-dark font-heading text-2xl font-bold">
              03
            </div>
            <h4 className="font-heading text-xl text-foreground">STORIES WORTH TAKING HOME</h4>
            <p className="font-paragraph text-xs text-muted leading-relaxed">
              Create genuine human memories and relationships that stay with you long after your journey ends.
            </p>
          </div>

          <div className="bg-surface border border-secondary p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-accent/20 border border-accent rounded-lg flex items-center justify-center text-accent-dark font-heading text-2xl font-bold">
              04
            </div>
            <h4 className="font-heading text-xl text-foreground">CULTURE THAT GIVES BACK</h4>
            <p className="font-paragraph text-xs text-muted leading-relaxed">
              Direct platform commission empowers local artisans, traditional families, and regional cultural keepers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: ONLINE LEARNING */}
      <section className="py-24 bg-surface border-y border-secondary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">VIRTUAL PARTICIPATION</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground mt-1">YOU DON'T HAVE TO BE IN INDIA TO BEGIN</h2>
              <p className="font-paragraph text-muted text-base max-w-lg mt-2">
                Learn from verified Cultural Ambassadors online, then travel deeper when you are ready.
              </p>
            </div>
            <Link to="/learn-online" className="inline-flex items-center text-sm font-bold text-foreground hover:text-accent-dark transition-colors">
              <span>EXPLORE VIRTUAL CLASSES</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ONLINE_CLASSES.map((cls) => (
              <div key={cls.id} className="bg-background border border-secondary rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="relative h-48">
                  <SafeImage src={cls.image} alt={cls.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-foreground text-background px-3 py-1 rounded text-xs font-bold">
                    LIVE ONLINE
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-accent-dark">{cls.liveDate}</span>
                    <h3 className="font-heading text-xl text-foreground">{cls.title}</h3>
                    <p className="text-xs text-muted line-clamp-2">{cls.overview}</p>
                  </div>

                  <div className="pt-4 border-t border-secondary flex items-center justify-between">
                    <span className="font-heading text-lg text-foreground">₹{cls.priceINR}</span>
                    <Link
                      to="/learn-online"
                      className="px-4 py-2 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-xs font-bold rounded transition-all"
                    >
                      JOIN LIVE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TRAVELER STORIES */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">CULTURAL MAGAZINE</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-foreground mt-1">THE STORIES STAY WITH YOU</h2>
          </div>
          <Link to="/stories" className="inline-flex items-center text-sm font-bold text-foreground hover:text-accent-dark transition-colors">
            <span>READ ALL STORIES</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {STORY_ARTICLES.slice(0, 2).map((story) => (
            <div key={story.id} className="space-y-4">
              <div className="h-72 rounded-xl overflow-hidden border border-secondary">
                <SafeImage src={story.image} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-accent-dark uppercase tracking-wider">{story.category} · {story.readTime}</span>
                <h3 className="font-heading text-3xl text-foreground">
                  <Link to="/stories" className="hover:text-accent-dark transition-colors">
                    {story.title}
                  </Link>
                </h3>
                <p className="text-xs text-muted leading-relaxed line-clamp-3">{story.excerpt}</p>
                <div className="pt-2 flex items-center space-x-3">
                  <SafeImage src={story.authorAvatar} alt={story.author} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">{story.author}</p>
                    <p className="text-[10px] text-muted">{story.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="relative py-28 bg-foreground text-background overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center relative z-10 space-y-8">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-tight text-background max-w-4xl mx-auto leading-none">
            INDIA IS NOT A DESTINATION.<br />
            <span className="text-accent">IT'S A THOUSAND STORIES WAITING TO BE LIVED.</span>
          </h2>

          <p className="font-paragraph text-lg text-background/80 max-w-xl mx-auto leading-relaxed">
            Begin your journey with verified Cultural Ambassadors across India's 28 states and living festivals.
          </p>

          <div className="pt-4">
            <Link
              to="/explore"
              className="inline-flex items-center px-10 py-5 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-sm font-bold tracking-wider rounded-lg transition-all shadow-xl"
            >
              <span>START EXPLORING EXPERIENCES</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
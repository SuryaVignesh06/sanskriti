import { useParams, Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { FESTIVALS_LIST, CULTURAL_EXPERIENCES, CULTURAL_AMBASSADORS } from '@/lib/sanskritiData';

import { MapPin, Calendar, ArrowLeft, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function FestivalDetailPage() {
  const { id } = useParams<{ id: string }>();
  const festival = FESTIVALS_LIST.find(f => f.id === id) || FESTIVALS_LIST[0];

  const relatedExperiences = CULTURAL_EXPERIENCES.filter(e => festival.experienceIds.includes(e.id));

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen pb-24">
      {/* Top Breadcrumb Nav */}
      <div className="bg-surface border-b border-secondary py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center space-x-2 text-xs text-muted">
          <Link to="/festivals" className="hover:text-foreground flex items-center">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> All Festivals
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{festival.name}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[48vh] min-h-[350px] flex items-end overflow-hidden bg-accent text-foreground">
        <SafeImage
          src={festival.image}
          alt={festival.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pb-12 w-full space-y-3">
          <span className="px-3 py-1 bg-accent text-foreground text-xs font-bold uppercase rounded-full">
            {festival.month} · {festival.season}
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-background tracking-tight">
            {festival.name.toUpperCase()}
          </h1>
          <p className="font-paragraph text-accent text-lg sm:text-xl font-semibold max-w-2xl">
            {festival.tagline}
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 space-y-16">
        {/* Section 1: Cultural Overview */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-surface border border-secondary rounded-[28px] space-y-4">
            <h3 className="font-heading text-3xl text-foreground">WHAT IS THIS FESTIVAL?</h3>
            <p className="font-paragraph text-sm text-muted leading-relaxed">{festival.description}</p>
          </div>

          <div className="p-8 bg-surface border border-secondary rounded-[28px] space-y-4">
            <h3 className="font-heading text-3xl text-foreground">WHY IT MATTERS</h3>
            <p className="font-paragraph text-sm text-muted leading-relaxed">{festival.significance}</p>
          </div>
        </div>

        {/* Section 2: How Locals Celebrate */}
        <div className="p-8 bg-surface border border-secondary rounded-[28px] space-y-4">
          <div className="flex items-center space-x-2 text-accent-dark font-heading text-sm uppercase">
            <Sparkles className="w-4 h-4" />
            <span>AUTHENTIC CELEBRATION CUSTOMS</span>
          </div>
          <h3 className="font-heading text-4xl text-foreground">HOW LOCALS CELEBRATE</h3>
          <p className="font-paragraph text-sm text-foreground leading-relaxed">
            {festival.howLocalsCelebrate}
          </p>
        </div>

        {/* Section 3: Locations */}
        <div className="space-y-4">
          <h3 className="font-heading text-3xl text-foreground">WHERE TO EXPERIENCE {festival.name.toUpperCase()}</h3>
          <div className="flex flex-wrap gap-3">
            {festival.locations.map((loc) => (
              <a
                key={loc}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc + ', India')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-5 py-3 bg-surface border border-secondary hover:border-foreground rounded-[20px] font-paragraph text-sm font-semibold text-foreground transition-all group"
              >
                <MapPin className="w-4 h-4 text-accent-dark" />
                <span>{loc}</span>
                <span className="text-xs text-muted group-hover:text-foreground">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Section 4: Bookable Festival Experiences */}
        <div className="space-y-6 pt-8 border-t border-secondary">
          <h3 className="font-heading text-4xl text-foreground">BOOKABLE {festival.name.toUpperCase()} EXPERIENCES</h3>

          {relatedExperiences.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedExperiences.map((exp) => (
                <div key={exp.id} className="bg-surface border border-secondary rounded-[20px] overflow-hidden shadow-sm flex flex-col justify-between">
                  <div className="h-52 relative">
                    <SafeImage src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
                      {exp.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading text-xl text-foreground">{exp.title}</h4>
                      <p className="text-xs text-muted mt-1">{exp.location} · {exp.duration}</p>
                    </div>
                    <div className="pt-3 border-t border-secondary flex justify-between items-center">
                      <span className="font-heading text-lg text-foreground">₹{exp.priceINR}</span>
                      <Link
                        to={`/experience/${exp.id}`}
                        className="px-4 py-2 bg-accent text-foreground font-paragraph text-xs font-bold rounded"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 bg-surface border border-secondary rounded-[20px] text-center space-y-3">
              <p className="font-paragraph text-sm text-muted">
                Explore local Ambassador experiences hosted during {festival.name}.
              </p>
              <Link to="/explore" className="inline-block px-5 py-2.5 bg-accent text-foreground text-xs font-bold rounded">
                EXPLORE ALL MARKETPLACE EXPERIENCES
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

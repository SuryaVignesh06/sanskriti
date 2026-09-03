import { useParams, Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { INDIAN_STATES, CULTURAL_EXPERIENCES, CULTURAL_AMBASSADORS, CULTURAL_QUIZZES } from '@/lib/sanskritiData';

import { MapPin, ArrowLeft, ShieldCheck, ArrowRight, Award, Sparkles, BookOpen } from 'lucide-react';

export default function StateCulturePage() {
  const { stateKey } = useParams<{ stateKey: string }>();

  const stateData = INDIAN_STATES.find(s => s.key === stateKey) || INDIAN_STATES[0];
  const stateExperiences = CULTURAL_EXPERIENCES.filter(e => e.stateKey === stateData.key);
  const stateAmbassadors = CULTURAL_AMBASSADORS.filter(a => a.stateKey === stateData.key);
  const stateQuiz = CULTURAL_QUIZZES.find(q => q.stateKey === stateData.key) || CULTURAL_QUIZZES[0];

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen pb-24">
      {/* Top Breadcrumb Nav */}
      <div className="bg-surface border-b border-secondary py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center space-x-2 text-xs text-muted">
          <Link to="/states" className="hover:text-foreground flex items-center">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> All States
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{stateData.name}</span>
        </div>
      </div>

      {/* State Hero Banner */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden bg-foreground text-background">
        <SafeImage
          src={stateData.bannerImage || stateData.image}
          alt={stateData.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pb-12 w-full space-y-3">
          <span className="px-3 py-1 bg-accent text-foreground text-xs font-bold uppercase rounded-full">
            {stateData.region} REGION · CAPITAL: {stateData.capital.toUpperCase()}
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-background tracking-tight">
            {stateData.name.toUpperCase()} CULTURAL HERITAGE
          </h1>
          <p className="font-paragraph text-background/80 text-base max-w-2xl">
            {stateData.description}
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 space-y-16">
        {/* Section: Historical Heritage Highlight */}
        <div className="p-8 bg-surface border border-secondary rounded-2xl space-y-3">
          <div className="flex items-center space-x-2 text-accent-dark font-heading text-sm uppercase">
            <Sparkles className="w-4 h-4" />
            <span>HISTORICAL LEGACY</span>
          </div>
          <p className="font-paragraph text-sm text-foreground leading-relaxed">
            {stateData.historyHighlight}
          </p>
        </div>

        {/* Section: Dance Forms & Sacred Shrines */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Dance Forms */}
          <div className="bg-surface border border-secondary p-8 rounded-2xl space-y-6">
            <h3 className="font-heading text-3xl text-foreground">DANCE FORMS & DRAMA</h3>
            <div className="grid grid-cols-2 gap-3">
              {stateData.danceForms.map((dance) => (
                <div key={dance} className="p-4 bg-background border border-secondary rounded-xl text-center">
                  <p className="font-heading text-lg text-foreground">{dance}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sacred Deities & Shrines */}
          <div className="bg-surface border border-secondary p-8 rounded-2xl space-y-6">
            <h3 className="font-heading text-3xl text-foreground">SACRED SHRINES & DEITIES</h3>
            <div className="space-y-3">
              {stateData.deities.map((deity) => (
                <div key={deity} className="flex items-center space-x-3 p-3.5 bg-background border border-secondary rounded-xl">
                  <MapPin className="w-4 h-4 text-accent-dark shrink-0" />
                  <span className="font-paragraph text-sm font-semibold text-foreground">{deity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Culinary Traditions & Artisan Crafts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cuisines */}
          <div className="bg-surface border border-secondary p-8 rounded-2xl space-y-6">
            <h3 className="font-heading text-3xl text-foreground">REGIONAL CUISINE & FLAVORS</h3>
            <div className="flex flex-wrap gap-2">
              {stateData.cuisines.map((food) => (
                <span key={food} className="px-4 py-2 bg-background border border-secondary rounded-full font-paragraph text-xs font-semibold text-foreground">
                  {food}
                </span>
              ))}
            </div>
          </div>

          {/* Master Crafts */}
          <div className="bg-surface border border-secondary p-8 rounded-2xl space-y-6">
            <h3 className="font-heading text-3xl text-foreground">ARTISAN CRAFTS & TEXTILES</h3>
            <div className="flex flex-wrap gap-2">
              {stateData.crafts.map((craft) => (
                <span key={craft} className="px-4 py-2 bg-accent/10 border border-accent/40 rounded-full font-paragraph text-xs font-semibold text-foreground">
                  {craft}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Bookable Experiences in this State */}
        <div className="space-y-8 pt-8 border-t border-secondary">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">AUTHENTIC PARTICIPATION</span>
              <h3 className="font-heading text-4xl text-foreground mt-1">EXPERIENCES IN {stateData.name.toUpperCase()}</h3>
            </div>
            <Link to="/explore" className="text-xs font-bold text-foreground hover:text-accent-dark flex items-center">
              <span>EXPLORE ALL EXPERIENCES</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {stateExperiences.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateExperiences.map((exp) => (
                <div key={exp.id} className="bg-surface border border-secondary rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
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
                        className="px-4 py-2 bg-foreground text-background font-paragraph text-xs font-bold rounded"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 bg-surface border border-secondary rounded-xl text-center space-y-3">
              <p className="font-paragraph text-sm text-muted">
                Cultural Ambassador experiences for {stateData.name} are being added weekly.
              </p>
              <Link to="/explore" className="inline-block px-5 py-2 bg-accent text-foreground text-xs font-bold rounded">
                BROWSE OTHER STATE EXPERIENCES
              </Link>
            </div>
          )}
        </div>

        {/* Section: State Knowledge Quiz Challenge */}
        <div className="bg-foreground text-background p-8 lg:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-accent font-heading text-xs uppercase tracking-widest">
              <Award className="w-4 h-4 text-accent" />
              <span>TEST YOUR KNOWLEDGE</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl text-background">
              READY FOR A {stateData.name.toUpperCase()} CULTURAL QUIZ?
            </h3>
            <p className="font-paragraph text-xs sm:text-sm text-background/80 max-w-xl">
              Earn your "{stateQuiz.badgeAwarded}" badge by answering questions about classical dance, heritage, and history!
            </p>
          </div>
          <Link
            to={`/quiz/${stateQuiz.id}`}
            className="px-8 py-4 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-xs font-bold tracking-wider rounded-lg shrink-0"
          >
            START QUIZ NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
import { useParams, Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { CULTURAL_AMBASSADORS, CULTURAL_EXPERIENCES, ONLINE_CLASSES } from '@/lib/sanskritiData';

import { ShieldCheck, MapPin, Star, ArrowLeft, ArrowRight, MessageSquare, Award } from 'lucide-react';

export default function AmbassadorProfilePage() {
  const { id } = useParams<{ id: string }>();
  const ambassador = CULTURAL_AMBASSADORS.find(a => a.id === id) || CULTURAL_AMBASSADORS[0];

  const hostedExperiences = CULTURAL_EXPERIENCES.filter(e => e.hostId === ambassador.id);
  const hostedClasses = ONLINE_CLASSES.filter(c => c.hostName === ambassador.name);

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen pb-24">
      {/* Top Breadcrumb Nav */}
      <div className="bg-surface border-b border-secondary py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center space-x-2 text-xs text-muted">
          <Link to="/explore" className="hover:text-foreground flex items-center">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Ambassadors
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{ambassador.name}</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-12 space-y-16">
        {/* Ambassador Profile Hero Card */}
        <div className="p-8 lg:p-12 bg-surface border border-secondary rounded-[28px] grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              <SafeImage
                src={ambassador.avatar}
                alt={ambassador.name}
                className="w-44 h-44 lg:w-52 lg:h-52 rounded-full object-cover border-4 border-accent shadow-md"
              />
              <div className="absolute bottom-2 right-2 bg-accent text-foreground p-2 rounded-full shadow">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="space-y-1">
              <span className="px-3 py-1 bg-accent/20 text-accent-dark text-xs font-bold uppercase rounded-full inline-block">
                VERIFIED CULTURAL AMBASSADOR
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl text-foreground">{ambassador.name.toUpperCase()}</h1>
              <p className="text-xs text-muted flex items-center font-medium">
                <MapPin className="w-3.5 h-3.5 text-accent-dark mr-1" />
                {ambassador.location} · Joined {ambassador.joinedYear}
              </p>
            </div>

            <p className="font-paragraph text-sm font-semibold text-foreground italic border-l-2 border-accent pl-3">
              "{ambassador.quote}"
            </p>

            <p className="font-paragraph text-xs text-muted leading-relaxed">
              {ambassador.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs">
              <div className="bg-background px-3.5 py-2 border border-secondary rounded-lg">
                <span className="text-muted block text-[10px]">CULTURAL SPECIALTY</span>
                <span className="font-bold text-foreground">{ambassador.specialty}</span>
              </div>
              <div className="bg-background px-3.5 py-2 border border-secondary rounded-lg">
                <span className="text-muted block text-[10px]">RATING</span>
                <span className="font-bold text-foreground flex items-center">
                  <Star className="w-3.5 h-3.5 text-accent fill-accent mr-1" />
                  {ambassador.rating} ({ambassador.reviewsCount} reviews)
                </span>
              </div>
              <div className="bg-background px-3.5 py-2 border border-secondary rounded-lg">
                <span className="text-muted block text-[10px]">LANGUAGES</span>
                <span className="font-bold text-foreground">{ambassador.languages.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Hosted Physical Experiences */}
        <div className="space-y-6">
          <h3 className="font-heading text-3xl text-foreground">EXPERIENCES HOSTED BY {ambassador.name.toUpperCase().split(' ')[0]}</h3>

          {hostedExperiences.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hostedExperiences.map((exp) => (
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
            <div className="p-8 bg-surface border border-secondary rounded-[20px] text-center space-y-2">
              <p className="text-xs text-muted">Upcoming physical experiences are currently being scheduled for this Ambassador.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

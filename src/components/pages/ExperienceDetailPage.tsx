import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { CULTURAL_EXPERIENCES, CULTURAL_AMBASSADORS } from '@/lib/sanskritiData';
import { BookingModal } from '@/components/ui/BookingModal';
import { MapPin, Calendar, Clock, Users, ShieldCheck, CheckCircle2, Info, Star, ArrowLeft } from 'lucide-react';

export default function ExperienceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const experience = CULTURAL_EXPERIENCES.find(e => e.id === id) || CULTURAL_EXPERIENCES[0];
  const host = CULTURAL_AMBASSADORS.find(a => a.id === experience.hostId);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(experience.upcomingDates[0] || 'March 15, 2026');

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen pb-24">
      {/* Top Breadcrumb Nav */}
      <div className="bg-surface border-b border-secondary py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center space-x-2 text-xs text-muted">
          <Link to="/explore" className="hover:text-foreground flex items-center">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> All Experiences
          </Link>
          <span>/</span>
          <span>{experience.location}</span>
          <span>/</span>
          <span className="text-foreground font-semibold line-clamp-1">{experience.title}</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-10 space-y-12">
        {/* Title Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-accent text-foreground text-xs font-bold uppercase rounded-full">
              {experience.category}
            </span>
            <span className="text-xs text-muted font-medium flex items-center">
              <MapPin className="w-3.5 h-3.5 text-accent-dark mr-1" /> {experience.location}
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
            {experience.title.toUpperCase()}
          </h1>
          <p className="font-paragraph text-muted text-base sm:text-lg">{experience.subtitle}</p>
        </div>

        {/* Gallery Hero */}
        <div className="grid md:grid-cols-12 gap-4 h-[420px] rounded-2xl overflow-hidden border border-secondary">
          <div className="md:col-span-8 h-full">
            <SafeImage src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-4 h-full">
            {experience.gallery.slice(1, 3).map((img, i) => (
              <SafeImage key={i} src={img} alt="Gallery" className="w-full h-full object-cover" />
            ))}
          </div>
        </div>

        {/* Main Content Layout with Sticky Booking Panel */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story & Sections */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section: Overview */}
            <div className="space-y-4">
              <h3 className="font-heading text-3xl text-foreground">WHAT YOU'LL EXPERIENCE</h3>
              <p className="font-paragraph text-muted text-base leading-relaxed">{experience.description}</p>
            </div>

            {/* Section: Your Day Timeline */}
            <div className="space-y-6 pt-6 border-t border-secondary">
              <h3 className="font-heading text-3xl text-foreground">YOUR DAY ITINERARY</h3>
              <div className="space-y-4">
                {experience.itinerary.map((item, idx) => (
                  <div key={idx} className="flex space-x-4 p-4 bg-surface border border-secondary rounded-xl">
                    <div className="px-3 py-1 bg-accent/20 text-accent-dark font-heading text-sm rounded-md self-start shrink-0">
                      {item.time}
                    </div>
                    <div>
                      <p className="font-paragraph text-sm font-semibold text-foreground">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Host Profile */}
            {host && (
              <div className="p-8 bg-surface border border-secondary rounded-2xl space-y-6">
                <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">MEET YOUR CULTURAL AMBASSADOR</span>
                <div className="flex items-start space-x-4">
                  <SafeImage src={host.avatar} alt={host.name} className="w-20 h-20 rounded-full object-cover border-2 border-accent shrink-0" />
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-heading text-2xl text-foreground">{host.name}</h4>
                      <span className="px-2 py-0.5 bg-accent/10 text-accent-dark text-[10px] font-bold rounded">
                        Verified Host
                      </span>
                    </div>
                    <p className="text-xs text-muted font-medium">{host.specialty} · {host.location}</p>
                    <p className="text-xs text-muted italic">"{host.quote}"</p>
                    <p className="text-xs text-muted leading-relaxed">{host.bio}</p>
                    <Link
                      to={`/ambassador/${host.id}`}
                      className="inline-block pt-2 text-xs font-bold text-foreground hover:text-accent-dark underline"
                    >
                      VIEW FULL PROFILE & OTHER EXPERIENCES
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Section: Inclusions & Guidelines */}
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-secondary">
              <div className="space-y-3">
                <h4 className="font-heading text-xl text-foreground">WHAT'S INCLUDED</h4>
                <ul className="space-y-2 text-xs text-muted font-paragraph">
                  {experience.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-accent-dark mr-2 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-heading text-xl text-foreground">WHAT TO KNOW & ETIQUETTE</h4>
                <ul className="space-y-2 text-xs text-muted font-paragraph">
                  {experience.guidelines.map((g, i) => (
                    <li key={i} className="flex items-center">
                      <Info className="w-4 h-4 text-muted mr-2 shrink-0" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Desktop Booking Module */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-surface border border-secondary rounded-2xl p-6 shadow-md space-y-6">
              <div className="flex items-baseline justify-between border-b border-secondary pb-4">
                <div>
                  <span className="font-heading text-3xl text-foreground">₹{experience.priceINR}</span>
                  <span className="text-xs text-muted"> / guest</span>
                </div>
                <div className="flex items-center text-xs font-bold text-foreground">
                  <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                  <span>{experience.rating}</span>
                  <span className="text-muted font-normal ml-1">({experience.reviewsCount})</span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-paragraph">
                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">SELECT DATE</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 bg-background border border-secondary rounded-lg text-xs font-paragraph text-foreground focus:outline-none focus:border-accent"
                  >
                    {experience.upcomingDates.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <div className="space-y-2 text-muted">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-foreground font-semibold">{experience.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Group Size:</span>
                    <span className="text-foreground font-semibold">{experience.groupSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="text-foreground font-semibold">{experience.type}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full py-4 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-xs font-bold tracking-wider rounded-lg transition-all shadow-md uppercase"
              >
                BOOK THIS EXPERIENCE
              </button>

              <p className="text-[10px] text-center text-muted">
                You won't be charged yet. Instant confirmation & host messaging unlocked upon booking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Booking Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-background border-t border-secondary p-4 flex items-center justify-between shadow-2xl">
        <div>
          <span className="font-heading text-xl text-foreground">₹{experience.priceINR}</span>
          <span className="text-[10px] text-muted block">per guest</span>
        </div>
        <button
          onClick={() => setBookingModalOpen(true)}
          className="px-6 py-3 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-xs font-bold tracking-wider rounded-lg shadow-md"
        >
          BOOK NOW
        </button>
      </div>

      {/* Interactive Booking Modal */}
      <BookingModal
        experience={experience}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}

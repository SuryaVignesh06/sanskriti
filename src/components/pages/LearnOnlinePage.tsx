import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { ONLINE_CLASSES } from '@/lib/sanskritiData';
import { ArrowRight, Video, Calendar, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function LearnOnlinePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Food', 'Dance', 'Traditions', 'Language', 'Craft'];

  const filteredClasses = selectedCategory === 'All'
    ? ONLINE_CLASSES
    : ONLINE_CLASSES.filter(c => c.category === selectedCategory);

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">LIVE VIRTUAL LEARNING</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-foreground">BRING INDIA INTO YOUR HOME</h1>
          <p className="font-paragraph text-muted text-base">
            Participate in live interactive sessions with verified Cultural Ambassadors before traveling, or learn Indian heritage from anywhere in the world.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-5 py-2.5 rounded-lg font-heading text-base tracking-wider transition-all border shrink-0 ${
                selectedCategory === c
                  ? 'bg-accent border-accent text-foreground font-bold shadow-sm'
                  : 'bg-surface border-secondary text-muted hover:border-foreground'
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Live Classes Catalog */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredClasses.map((cls) => (
            <div key={cls.id} className="bg-surface border border-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="h-52 relative">
                <SafeImage src={cls.image} alt={cls.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {cls.category}
                </div>
                <div className="absolute top-3 right-3 bg-foreground text-background px-2.5 py-0.5 rounded text-[10px] font-bold uppercase flex items-center">
                  <Video className="w-3 h-3 mr-1" /> LIVE VIRTUAL
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-accent-dark block">{cls.liveDate}</span>
                  <h3 className="font-heading text-2xl text-foreground leading-snug">{cls.title}</h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-3">{cls.overview}</p>
                </div>

                <div className="pt-4 border-t border-secondary space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <div className="flex items-center space-x-2">
                      <SafeImage src={cls.hostAvatar} alt={cls.hostName} className="w-6 h-6 rounded-full object-cover" />
                      <span>Host: {cls.hostName}</span>
                    </div>
                    <span>{cls.duration}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="font-heading text-2xl text-foreground">₹{cls.priceINR}</span>
                      <span className="text-[10px] text-muted block">per household connection</span>
                    </div>
                    <button
                      onClick={() => alert(`Enrolled in ${cls.title}! Virtual link will be sent to your email.`)}
                      className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-xs font-bold rounded-lg transition-all shadow-sm"
                    >
                      JOIN LIVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Journey Progression Section */}
        <div className="p-8 lg:p-12 bg-surface border border-secondary rounded-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">STRATEGIC PRODUCT LOOP</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-foreground">LEARN TODAY. TRAVEL DEEPER TOMORROW.</h2>
            <p className="font-paragraph text-xs sm:text-sm text-muted">
              Online learning builds interest, trust, and connection before you ever step onto a plane.
            </p>
          </div>

          <div className="grid sm:grid-cols-5 gap-4 text-center">
            <div className="p-4 bg-background border border-secondary rounded-xl space-y-2">
              <span className="font-heading text-2xl text-accent-dark">01</span>
              <h4 className="font-heading text-lg text-foreground">DISCOVER</h4>
              <p className="text-[10px] text-muted">Explore living culture online</p>
            </div>
            <div className="p-4 bg-background border border-secondary rounded-xl space-y-2">
              <span className="font-heading text-2xl text-accent-dark">02</span>
              <h4 className="font-heading text-lg text-foreground">LEARN</h4>
              <p className="text-[10px] text-muted">Join live virtual classes</p>
            </div>
            <div className="p-4 bg-background border border-secondary rounded-xl space-y-2">
              <span className="font-heading text-2xl text-accent-dark">03</span>
              <h4 className="font-heading text-lg text-foreground">CONNECT</h4>
              <p className="text-[10px] text-muted">Meet Ambassadors virtually</p>
            </div>
            <div className="p-4 bg-background border border-secondary rounded-xl space-y-2">
              <span className="font-heading text-2xl text-accent-dark">04</span>
              <h4 className="font-heading text-lg text-foreground">TRAVEL</h4>
              <p className="text-[10px] text-muted">Book in-person experiences</p>
            </div>
            <div className="p-4 bg-background border border-secondary rounded-xl space-y-2">
              <span className="font-heading text-2xl text-accent-dark">05</span>
              <h4 className="font-heading text-lg text-foreground">EXPERIENCE</h4>
              <p className="text-[10px] text-muted">Participate in real culture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

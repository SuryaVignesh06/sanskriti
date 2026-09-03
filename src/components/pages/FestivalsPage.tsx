import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { FESTIVALS_LIST } from '@/lib/sanskritiData';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function FestivalsPage() {
  const [selectedSeason, setSelectedSeason] = useState('All');
  const seasons = ['All', 'Spring', 'Winter', 'Autumn', 'Monsoon Harvest'];

  const filteredFestivals = selectedSeason === 'All'
    ? FESTIVALS_LIST
    : FESTIVALS_LIST.filter(f => f.season.toLowerCase().includes(selectedSeason.toLowerCase()));

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">LIVING FESTIVAL CALENDAR</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-foreground">FOLLOW THE RHYTHM OF INDIA</h1>
          <p className="font-paragraph text-muted text-base">
            Plan your travel journey around the celebrations, sacred traditions, and seasonal harvests that bring local communities together.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar">
          {seasons.map(s => (
            <button
              key={s}
              onClick={() => setSelectedSeason(s)}
              className={`px-5 py-2.5 rounded-lg font-heading text-base tracking-wider transition-all border shrink-0 ${
                selectedSeason === s
                  ? 'bg-accent border-accent text-foreground font-bold shadow-sm'
                  : 'bg-surface border-secondary text-muted hover:border-foreground'
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Festival Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFestivals.map((fest) => (
            <div key={fest.id} className="bg-surface border border-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="h-56 relative">
                <SafeImage src={fest.image} alt={fest.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {fest.month}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent-dark" />
                    <span>{fest.locations.join(' · ')}</span>
                  </div>
                  <h3 className="font-heading text-3xl text-foreground">{fest.name.toUpperCase()}</h3>
                  <p className="text-xs font-semibold text-accent-dark">{fest.tagline}</p>
                  <p className="text-xs text-muted line-clamp-3 leading-relaxed">{fest.description}</p>
                </div>

                <div className="pt-4 border-t border-secondary">
                  <Link
                    to={`/festival/${fest.id}`}
                    className="w-full py-3 bg-foreground hover:bg-foreground/90 text-background font-paragraph text-xs font-bold tracking-wider rounded-lg text-center transition-all block"
                  >
                    EXPLORE {fest.name.toUpperCase()} JOURNEY
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

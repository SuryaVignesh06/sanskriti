import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { ShieldCheck, Map, MapPin, Sparkles, BookOpen, Clock, Heart, Award } from 'lucide-react';

export default function MyIndiaPage() {
  // Mock Data
  const exploredStates = 4;
  const karmaPoints = 1250;
  const rank = "Explorer";

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen pb-24">
      {/* Top Breadcrumb Nav */}
      <div className="bg-surface border-b border-secondary py-4 sticky top-16 z-30 shadow-sm backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between text-xs text-muted">
          <div className="flex items-center space-x-2">
            <Link to="/" className="hover:text-foreground flex items-center font-bold">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold uppercase">My India (Virtual Passport)</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-12 space-y-12">
        
        {/* Header Dashboard */}
        <div className="bg-foreground text-background border border-secondary rounded-[32px] p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="font-heading text-4xl sm:text-5xl text-background flex items-center justify-center md:justify-start gap-2">
              Virtual Cultural Passport
            </h1>
            <p className="text-background/80">Track your learning, journeys, and cultural immersion.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-background/10 backdrop-blur-sm border border-background/20 p-4 rounded-2xl min-w-[120px] text-center">
              <span className="text-[10px] font-bold text-background/60 uppercase tracking-widest">STATES VISITED</span>
              <p className="font-heading text-4xl text-accent">{exploredStates}<span className="text-lg text-background/60">/36</span></p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm border border-background/20 p-4 rounded-2xl min-w-[120px] text-center">
              <span className="text-[10px] font-bold text-background/60 uppercase tracking-widest">KARMA POINTS</span>
              <p className="font-heading text-4xl text-accent flex justify-center items-center gap-1">
                <Sparkles className="w-5 h-5" /> {karmaPoints}
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm border border-background/20 p-4 rounded-2xl min-w-[120px] text-center">
              <span className="text-[10px] font-bold text-background/60 uppercase tracking-widest">RANK</span>
              <p className="font-heading text-3xl text-accent mt-1">{rank}</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Planned Journeys */}
            <div className="space-y-4">
              <h2 className="font-heading text-3xl">Upcoming Journeys</h2>
              <div className="bg-surface border border-secondary p-8 rounded-[24px] text-center space-y-4 shadow-sm">
                <Map className="w-12 h-12 text-muted mx-auto" />
                <div>
                  <h4 className="font-bold text-foreground">No upcoming trips planned.</h4>
                  <p className="text-sm text-muted">Use the State Pages to build your itinerary and book experiences.</p>
                </div>
                <Link to="/interactive-map" className="inline-flex items-center justify-center px-6 py-2.5 bg-accent text-foreground text-xs font-bold rounded-xl hover:bg-accent-hover transition-colors">
                  EXPLORE THE MAP
                </Link>
              </div>
            </div>

            {/* Badges */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-3xl">Earned Badges</h2>
                <Link to="/quizzes" className="text-xs font-bold text-accent-dark hover:underline">TAKE QUIZZES</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-surface border border-secondary p-4 rounded-2xl flex flex-col items-center text-center shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-accent text-foreground flex items-center justify-center mb-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold">KERALA MASTER</span>
                </div>
                <div className="bg-background border border-secondary border-dashed p-4 rounded-2xl flex flex-col items-center text-center opacity-50">
                   <div className="w-12 h-12 rounded-full bg-secondary text-muted flex items-center justify-center mb-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-muted">LOCKED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-surface border border-secondary p-6 rounded-[24px] shadow-sm">
              <h3 className="font-heading text-xl uppercase tracking-widest text-accent-dark mb-4">Saved Places</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background border border-secondary rounded-xl">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-accent-dark mr-2" />
                    <div>
                      <p className="text-xs font-bold">Jaipur Old City</p>
                      <p className="text-[10px] text-muted">Rajasthan</p>
                    </div>
                  </div>
                  <Heart className="w-4 h-4 text-accent fill-accent" />
                </div>
                <div className="flex items-center justify-between p-3 bg-background border border-secondary rounded-xl">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-accent-dark mr-2" />
                    <div>
                      <p className="text-xs font-bold">Fort Kochi</p>
                      <p className="text-[10px] text-muted">Kerala</p>
                    </div>
                  </div>
                  <Heart className="w-4 h-4 text-accent fill-accent" />
                </div>
              </div>
            </div>
            
            <div className="bg-surface border border-secondary p-6 rounded-[24px] shadow-sm">
              <h3 className="font-heading text-xl uppercase tracking-widest text-accent-dark mb-4">Learning Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold flex items-center"><BookOpen className="w-3.5 h-3.5 mr-1" /> Intro to Kathakali</span>
                    <span className="text-muted">60%</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[60%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> History of Spices</span>
                    <span className="text-muted">10%</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[10%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

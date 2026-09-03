import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Globe, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-20">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">OUR FOUNDATIONAL IDEA</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-foreground">ABOUT SANSKRITI</h1>
          <p className="font-paragraph text-muted text-base leading-relaxed">
            SANSKRITI helps Indian and international travelers experience real Indian culture through authentic experiences hosted by verified local Cultural Ambassadors.
          </p>
        </div>

        {/* Mission Manifesto Block */}
        <div className="p-8 lg:p-12 bg-surface border border-secondary rounded-2xl space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground">WHAT MAKES SANSKRITI DIFFERENT</h2>
          <div className="grid md:grid-cols-3 gap-8 pt-4">
            <div className="space-y-2">
              <h4 className="font-heading text-xl text-foreground">NOT A SIGHTSEEING PLATFORM</h4>
              <p className="text-xs text-muted leading-relaxed">
                We don't focus on monument photos or tourist bus routes. We focus on real human connection inside local homes, studios, and courtyards.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-heading text-xl text-foreground">NOT A HOTEL BOOKING PLATFORM</h4>
              <p className="text-xs text-muted leading-relaxed">
                We are a platform for discovering and participating in living Indian culture—dance, food, festivals, crafts, and sacred customs.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-heading text-xl text-foreground">HUMAN-CENTERED MARKETPLACE</h4>
              <p className="text-xs text-muted leading-relaxed">
                Verified Cultural Ambassadors receive fair earnings that preserve traditional arts and empower local communities directly.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-foreground text-background p-10 rounded-2xl text-center space-y-6">
          <h2 className="font-heading text-4xl text-background">JOIN THE CULTURAL MOVEMENT</h2>
          <p className="font-paragraph text-xs sm:text-sm text-background/80 max-w-xl mx-auto">
            Whether you want to explore experiences, learn live online, or become an Ambassador, SANSKRITI is your doorway to living culture.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link to="/explore" className="px-6 py-3 bg-accent text-foreground font-paragraph text-xs font-bold rounded-lg">
              EXPLORE EXPERIENCES
            </Link>
            <Link to="/become-ambassador" className="px-6 py-3 border border-background/30 text-background font-paragraph text-xs font-bold rounded-lg">
              BECOME AN AMBASSADOR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
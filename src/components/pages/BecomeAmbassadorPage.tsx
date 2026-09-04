import { useState } from 'react';
import { Sparkles, ShieldCheck, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BecomeAmbassadorPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">JOIN OUR VERIFIED NETWORK</span>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-foreground">SHARE YOUR CULTURE WITH THE WORLD</h1>
          <p className="font-paragraph text-muted text-base">
            Are you a local artisan, traditional cook, dancer, musician, or family keeper of regional heritage? Welcome travelers into authentic Indian living culture.
          </p>
        </div>

        {/* 4-Step Onboarding Sequence */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">SIMPLE ONBOARDING PROCESS</span>
            <h2 className="font-heading text-4xl text-foreground">HOW TO BECOME AN AMBASSADOR</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface border border-secondary p-8 rounded-[20px] space-y-4 relative">
              <span className="font-heading text-6xl text-accent-dark opacity-30 block">01</span>
              <h3 className="font-heading text-2xl text-foreground">APPLY ONLINE</h3>
              <p className="font-paragraph text-xs text-muted leading-relaxed">
                Submit your cultural background, specialty (food, craft, music, festival), and local city location.
              </p>
            </div>

            <div className="bg-surface border border-secondary p-8 rounded-[20px] space-y-4 relative">
              <span className="font-heading text-6xl text-accent-dark opacity-30 block">02</span>
              <h3 className="font-heading text-2xl text-foreground">GET VERIFIED</h3>
              <p className="font-paragraph text-xs text-muted leading-relaxed">
                Complete a brief video interview and safety verification with our SANSKRITI curation team.
              </p>
            </div>

            <div className="bg-surface border border-secondary p-8 rounded-[20px] space-y-4 relative">
              <span className="font-heading text-6xl text-accent-dark opacity-30 block">03</span>
              <h3 className="font-heading text-2xl text-foreground">CREATE EXPERIENCE</h3>
              <p className="font-paragraph text-xs text-muted leading-relaxed">
                Set your group size, schedule dates, pricing, and itinerary guidance with our design team.
              </p>
            </div>

            <div className="bg-surface border border-secondary p-8 rounded-[20px] space-y-4 relative">
              <span className="font-heading text-6xl text-accent-dark opacity-30 block">04</span>
              <h3 className="font-heading text-2xl text-foreground">WELCOME TRAVELERS</h3>
              <p className="font-paragraph text-xs text-muted leading-relaxed">
                Host global travelers in your courtyard or studio, share stories, and earn meaningful income.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto bg-surface border border-secondary p-8 lg:p-12 rounded-[28px] shadow-sm space-y-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 font-paragraph">
              <div className="space-y-2 text-center border-b border-secondary pb-4">
                <h3 className="font-heading text-3xl text-foreground">APPLY TO BECOME A CULTURAL AMBASSADOR</h3>
                <p className="text-xs text-muted">Fill out the quick form below to start your verification application.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sunita Devi"
                    className="w-full p-3.5 bg-background border border-secondary rounded-lg text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">CITY & STATE IN INDIA</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Udaipur, Rajasthan"
                    className="w-full p-3.5 bg-background border border-secondary rounded-lg text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">CULTURAL SPECIALTY</label>
                  <input
                    type="text"
                    required
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    placeholder="e.g. Traditional Rajasthani Puppetry & Miniature Painting"
                    className="w-full p-3.5 bg-background border border-secondary rounded-lg text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-xs font-bold tracking-wider rounded-lg transition-all shadow-md uppercase"
              >
                SUBMIT AMBASSADOR APPLICATION
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 border border-accent rounded-full flex items-center justify-center mx-auto text-accent-dark">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-3xl text-foreground">APPLICATION RECEIVED!</h3>
              <p className="text-sm text-muted">
                Thank you <strong>{name}</strong>! Our SANSKRITI curation team will review your application for <strong>{city}</strong> within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

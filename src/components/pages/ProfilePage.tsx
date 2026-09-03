import { useState } from 'react';
import { useMember } from '@/integrations';
import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { User, Calendar, Bookmark, Video, Award, MessageSquare, Settings, ShieldCheck, MapPin } from 'lucide-react';
import { CULTURAL_EXPERIENCES, CULTURAL_QUIZZES, ONLINE_CLASSES } from '@/lib/sanskritiData';

export default function ProfilePage() {
  const { member, actions } = useMember();
  const [activeTab, setActiveTab] = useState<'trips' | 'saved' | 'classes' | 'badges' | 'messages' | 'settings'>('trips');

  const sampleTrips = [
    {
      id: 'trip-1',
      experience: CULTURAL_EXPERIENCES[0],
      date: 'March 14, 2026',
      guests: 2,
      status: 'Confirmed',
      refCode: 'SAN-883920'
    }
  ];

  const earnedBadges = [
    { name: 'Natyashastra Scholar', date: 'Earned March 2, 2026', category: 'Dance & Art' },
    { name: 'Festival Explorer', date: 'Earned Feb 24, 2026', category: 'Festivals' }
  ];

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Profile User Header */}
        <div className="bg-surface border border-secondary p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-accent text-foreground rounded-full flex items-center justify-center font-heading text-2xl font-bold">
              {member?.profile?.nickname ? member.profile.nickname[0].toUpperCase() : 'C'}
            </div>
            <div>
              <h1 className="font-heading text-3xl text-foreground">
                {member?.profile?.nickname || member?.contact?.firstName || 'Cultural Explorer'}
              </h1>
              <p className="text-xs text-muted">Member ID: {(member as any)?.id || 'MEM-2026-X8'}</p>
              <span className="inline-flex items-center px-2 py-0.5 bg-accent/20 text-accent-dark text-[10px] font-bold rounded mt-1">
                Verified Cultural Explorer
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={actions.logout}
              className="px-4 py-2 border border-secondary text-xs font-semibold rounded-lg hover:bg-secondary"
            >
              SIGN OUT
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-2 border-b border-secondary gap-4 no-scrollbar">
          <button
            onClick={() => setActiveTab('trips')}
            className={`pb-3 font-heading text-lg tracking-wider transition-all border-b-2 shrink-0 flex items-center space-x-2 ${
              activeTab === 'trips' ? 'border-accent text-foreground font-bold' : 'border-transparent text-muted'
            }`}
          >
            <Calendar className="w-4 h-4 text-accent-dark" />
            <span>MY TRIPS ({sampleTrips.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('badges')}
            className={`pb-3 font-heading text-lg tracking-wider transition-all border-b-2 shrink-0 flex items-center space-x-2 ${
              activeTab === 'badges' ? 'border-accent text-foreground font-bold' : 'border-transparent text-muted'
            }`}
          >
            <Award className="w-4 h-4 text-accent-dark" />
            <span>QUIZ BADGES ({earnedBadges.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`pb-3 font-heading text-lg tracking-wider transition-all border-b-2 shrink-0 flex items-center space-x-2 ${
              activeTab === 'saved' ? 'border-accent text-foreground font-bold' : 'border-transparent text-muted'
            }`}
          >
            <Bookmark className="w-4 h-4 text-accent-dark" />
            <span>SAVED</span>
          </button>

          <button
            onClick={() => setActiveTab('classes')}
            className={`pb-3 font-heading text-lg tracking-wider transition-all border-b-2 shrink-0 flex items-center space-x-2 ${
              activeTab === 'classes' ? 'border-accent text-foreground font-bold' : 'border-transparent text-muted'
            }`}
          >
            <Video className="w-4 h-4 text-accent-dark" />
            <span>LIVE CLASSES</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`pb-3 font-heading text-lg tracking-wider transition-all border-b-2 shrink-0 flex items-center space-x-2 ${
              activeTab === 'messages' ? 'border-accent text-foreground font-bold' : 'border-transparent text-muted'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-accent-dark" />
            <span>MESSAGES</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-3 font-heading text-lg tracking-wider transition-all border-b-2 shrink-0 flex items-center space-x-2 ${
              activeTab === 'settings' ? 'border-accent text-foreground font-bold' : 'border-transparent text-muted'
            }`}
          >
            <Settings className="w-4 h-4 text-accent-dark" />
            <span>SETTINGS</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'trips' && (
            <div className="space-y-4">
              {sampleTrips.map((trip) => (
                <div key={trip.id} className="bg-surface border border-secondary rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center space-x-4">
                    <SafeImage src={trip.experience.image} alt={trip.experience.title} className="w-24 h-20 rounded-lg object-cover" />
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded uppercase">
                        {trip.status}
                      </span>
                      <h4 className="font-heading text-xl text-foreground mt-1">{trip.experience.title}</h4>
                      <p className="text-xs text-muted">{trip.experience.location} · Date: {trip.date}</p>
                      <p className="text-[10px] text-muted">Booking Reference: {trip.refCode}</p>
                    </div>
                  </div>
                  <Link
                    to={`/experience/${trip.experience.id}`}
                    className="px-5 py-2.5 bg-foreground text-background text-xs font-bold rounded-lg shrink-0"
                  >
                    VIEW EXPERIENCE DETAILS
                  </Link>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'badges' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {earnedBadges.map((badge, idx) => (
                <div key={idx} className="bg-surface border border-secondary rounded-xl p-6 text-center space-y-3">
                  <div className="w-16 h-16 bg-accent/20 text-accent-dark rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-xl text-foreground">{badge.name}</h4>
                  <p className="text-xs text-muted">{badge.category} · {badge.date}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="p-8 bg-surface border border-secondary rounded-xl text-center space-y-3">
              <p className="text-xs text-muted">No saved experiences yet. Browse experiences and click save to keep them here.</p>
              <Link to="/explore" className="inline-block px-5 py-2.5 bg-accent text-foreground text-xs font-bold rounded">
                EXPLORE EXPERIENCES
              </Link>
            </div>
          )}

          {activeTab === 'classes' && (
            <div className="p-8 bg-surface border border-secondary rounded-xl text-center space-y-3">
              <p className="text-xs text-muted">No live virtual classes registered yet.</p>
              <Link to="/learn-online" className="inline-block px-5 py-2.5 bg-accent text-foreground text-xs font-bold rounded">
                EXPLORE LIVE VIRTUAL CLASSES
              </Link>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="p-8 bg-surface border border-secondary rounded-xl text-center space-y-3">
              <p className="text-xs text-muted">Your host messages will appear here once an experience is booked.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="p-8 bg-surface border border-secondary rounded-xl space-y-4 max-w-md">
              <h4 className="font-heading text-xl text-foreground">ACCOUNT PREFERENCES</h4>
              <div className="space-y-3 text-xs font-paragraph">
                <div>
                  <label className="block text-muted mb-1 font-bold">DISPLAY NICKNAME</label>
                  <input
                    type="text"
                    defaultValue={member?.profile?.nickname || 'Cultural Explorer'}
                    className="w-full p-2.5 bg-background border border-secondary rounded text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-muted mb-1 font-bold">EMAIL NOTIFICATIONS</label>
                  <select className="w-full p-2.5 bg-background border border-secondary rounded text-foreground">
                    <option>All booking & message alerts</option>
                    <option>Important booking updates only</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
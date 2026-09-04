import { useState, useEffect } from 'react';
import { useMember } from '@/integrations';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, LogOut, Menu, X, Sparkles, ArrowRight, Instagram, Youtube, Twitter, Award, Compass, MessageSquare, MapPin } from 'lucide-react';
import { SearchModal } from '@/components/ui/SearchModal';
import { getKarmaPoints, getUserBadge } from '@/lib/karmaSystem';

export default function Layout() {
  const { member, isAuthenticated, isLoading, actions } = useMember();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [karmaPoints, setKarmaPoints] = useState(getKarmaPoints());

  useEffect(() => {
    const handleKarmaUpdate = (e: any) => {
      if (e.detail && typeof e.detail.points === 'number') {
        setKarmaPoints(e.detail.points);
      }
    };
    window.addEventListener('karmaUpdated', handleKarmaUpdate);
    return () => window.removeEventListener('karmaUpdated', handleKarmaUpdate);
  }, []);

  // Exact 5 Navigation Pages from the Reference Image
  const mainNavigation = [
    { name: 'Explore', href: '/explore' },
    { name: 'Festivals', href: '/festivals' },
    { name: 'Learn Online', href: '/learn-online' },
    { name: 'Stories', href: '/stories' },
    { name: 'About', href: '/about' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-background font-paragraph text-foreground flex flex-col selection:bg-accent selection:text-foreground">
      <ScrollToTop />
      
      {/* Floating Glassmorphism Header */}
      <div className="sticky top-3 z-50 px-4 sm:px-6 lg:px-12 w-full max-w-[1440px] mx-auto pointer-events-none">
        <header className="pointer-events-auto bg-background/85 backdrop-blur-xl border border-secondary/80 rounded-full shadow-lg transition-all duration-300 px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with Custom Logo Image */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="Sanskriti Logo" 
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200" 
              />
              <div className="flex flex-col">
                <span className="font-samarkan text-2xl sm:text-3xl tracking-wider text-foreground leading-none">
                  Sanskriti
                </span>
                <span className="font-paragraph text-[8px] sm:text-[9px] tracking-widest text-muted-dark uppercase font-semibold mt-0.5">
                  EXPERIENCE A DEEPER INDIA
                </span>
              </div>
            </Link>

            {/* Desktop Center Navigation - Exactly 5 Pages from Reference */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-paragraph text-sm font-medium transition-all duration-200 py-1 relative ${
                    isActivePath(item.href)
                      ? 'text-foreground font-bold'
                      : 'text-secondary-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {isActivePath(item.href) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center space-x-3">
              {/* Karma Points Badge */}
              <Link
                to="/profile"
                className="hidden sm:inline-flex items-center space-x-1 px-3 py-1.5 bg-accent/20 hover:bg-accent/30 border border-accent/40 rounded-full text-xs font-bold text-foreground transition-all shadow-2xs"
                title={`Sanskriti Karma: ${karmaPoints} pts (${getUserBadge(karmaPoints).name})`}
              >
                <span>{getUserBadge(karmaPoints).icon}</span>
                <span className="font-heading tracking-wider">{karmaPoints} KARMA</span>
              </Link>

              {/* Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-foreground hover:bg-surface border border-secondary rounded-full transition-colors"
                title="Search experiences, festivals..."
              >
                <Search className="w-4 h-4 text-foreground" />
              </button>

              {/* Become a Host Button */}
              <Link
                to="/become-ambassador"
                className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 bg-surface hover:bg-secondary border border-secondary rounded-full font-paragraph text-xs font-semibold text-foreground transition-all duration-200"
              >
                <span>Become a Host</span>
              </Link>

              {/* Sign In Button (Gold Pill Button) */}
              {isLoading && <LoadingSpinner />}

              {!isAuthenticated && !isLoading && (
                <Button
                  onClick={actions.login}
                  size="sm"
                  className="bg-accent hover:bg-accent-dark text-foreground font-heading text-xs font-bold tracking-wider px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  Sign In
                </Button>
              )}

              {isAuthenticated && (
                <div className="hidden sm:flex items-center space-x-2">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-3 py-1.5 border border-secondary hover:border-accent rounded-full font-paragraph text-xs font-semibold text-foreground transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-accent-dark" />
                    <span>{member?.profile?.nickname || 'Profile'}</span>
                  </Link>
                  <button
                    onClick={actions.logout}
                    className="p-2 text-muted hover:text-foreground border border-secondary rounded-full"
                    title="Sign Out"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-foreground border border-secondary rounded-full"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed top-20 left-4 right-4 z-40 bg-background/95 backdrop-blur-2xl border border-secondary rounded-3xl shadow-2xl p-6 space-y-4"
          >
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-3 py-3 font-heading text-lg border-b border-secondary/50 ${
                  isActivePath(item.href) ? 'text-foreground font-bold' : 'text-muted-dark'
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}

            <Link
              to="/become-ambassador"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2 py-3 font-heading text-base text-foreground font-medium"
            >
              <Sparkles className="w-4 h-4 text-accent-dark" />
              <span>Become a Host</span>
            </Link>

            {isAuthenticated ? (
              <div className="pt-2 space-y-3">
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 py-2 font-paragraph text-base font-semibold text-foreground"
                >
                  <User className="w-5 h-5 text-accent-dark" />
                  <span>{member?.profile?.nickname || 'My Profile'}</span>
                </Link>
                <button
                  onClick={() => {
                    actions.logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 border border-secondary text-foreground font-paragraph text-xs font-semibold rounded-full"
                >
                  SIGN OUT
                </button>
              </div>
            ) : (
              <div className="pt-2">
                <Button
                  onClick={() => {
                    actions.login();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 bg-accent text-foreground font-heading text-xs font-bold rounded-full"
                >
                  SIGN IN
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer with Yellow Wave Decorations */}
      <footer className="relative text-[#1A1A17] pb-12 overflow-hidden bg-gradient-to-b from-[#FFFDF7] to-[#FDF4D4] mt-16">
        
        {/* Decorative Top Wave - Smooth transition from white to yellow */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none z-0">
          <svg 
            viewBox="0 0 1440 120" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full block text-background"
            preserveAspectRatio="none"
            style={{ height: '120px' }}
          >
            <path 
              d="M0,0 C240,100 480,120 720,60 C960,0 1200,20 1440,100 L1440,0 L0,0 Z" 
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Decorative Golden Accent Waves */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none z-0 opacity-40">
          <svg 
            viewBox="0 0 1440 220" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: '220px' }}
          >
            <path 
              d="M0,40 C320,140 640,-20 960,60 C1280,140 1360,80 1440,40 L1440,0 L0,0 Z" 
              fill="none"
              stroke="#F9D874"
              strokeWidth="2"
            />
            <path 
              d="M0,80 C400,180 800,0 1200,80 C1320,100 1400,60 1440,50 L1440,0 L0,0 Z" 
              fill="none"
              stroke="#F4B93A"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </svg>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0">
          <svg 
            viewBox="0 0 1440 200" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: '200px' }}
          >
            <path 
              d="M0,100 C480,200 960,0 1440,100 L1440,200 L0,200 Z" 
              fill="#F9D874" 
              fillOpacity="0.4"
            />
            <path 
              d="M0,150 C300,50 800,250 1440,120 L1440,200 L0,200 Z" 
              fill="#F4B93A" 
              fillOpacity="0.2"
            />
          </svg>
        </div>

        {/* India Skyline Silhouette at Bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[140px] pointer-events-none opacity-15 z-[1]"
          style={{
            backgroundImage: `url(`\${import.meta.env.BASE_URL}images/ill_india_skyline.jpg')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'repeat-x',
          }}
        />

        {/* Spacer for the top waves */}
        <div className="h-[100px]" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#E2B73A]/40">
            
            {/* Brand Info Column */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="Sanskriti Logo" className="w-10 h-10 object-contain" />
                <div className="flex flex-col">
                  <span className="font-samarkan text-2xl sm:text-3xl tracking-wider text-[#1A1A17] leading-none">
                    Sanskriti
                  </span>
                  <span className="font-paragraph text-[9px] tracking-widest uppercase font-semibold text-[#5A4305]">
                    EXPERIENCE A DEEPER INDIA
                  </span>
                </div>
              </div>

              <p className="font-paragraph text-sm text-[#4A3B0F] max-w-sm leading-relaxed font-medium">
                Connecting travelers with real people, authentic culture, and unforgettable experiences across India.
              </p>
            </div>

            {/* Links Column 1: Explore */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-[#1A1A17]">
                Explore
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-[#4A3B0F] font-paragraph">
                <li><Link to="/explore" className="hover:text-black transition-colors">Destinations</Link></li>
                <li><Link to="/explore" className="hover:text-black transition-colors">Experiences</Link></li>
                <li><Link to="/festivals" className="hover:text-black transition-colors">Festivals</Link></li>
                <li><Link to="/learn-online" className="hover:text-black transition-colors">Learn Online</Link></li>
              </ul>
            </div>

            {/* Links Column 2: About */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-[#1A1A17]">
                About
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-[#4A3B0F] font-paragraph">
                <li><Link to="/about" className="hover:text-black transition-colors">Our Story</Link></li>
                <li><Link to="/become-ambassador" className="hover:text-black transition-colors">Become a Host</Link></li>
                <li><Link to="/about" className="hover:text-black transition-colors">Contact</Link></li>
                <li><Link to="/about" className="hover:text-black transition-colors">FAQs</Link></li>
              </ul>
            </div>

            {/* Newsletter Column: Stay in the Loop */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-[#1A1A17]">
                Stay in the loop
              </h4>
              <p className="font-paragraph text-xs text-[#4A3B0F] font-medium leading-relaxed">
                Get updates on new experiences and festivals.
              </p>

              <form onSubmit={handleSubscribe} className="relative mt-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 pr-12 rounded-full bg-white text-foreground text-xs font-paragraph border border-[#E2B73A] focus:outline-none focus:ring-2 focus:ring-[#1A1A17]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-8 h-8 rounded-full bg-[#111111] text-white hover:bg-[#D98C22] transition-colors flex items-center justify-center shadow-sm"
                  title="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <div className="text-[11px] text-emerald-800 font-semibold font-paragraph pt-1">
                  Thank you for subscribing!
                </div>
              )}
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between font-paragraph text-xs text-[#5A4305] gap-4">
            <div>
              © 2025 Sanskriti. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/about" className="hover:text-black transition-colors">Privacy</Link>
              <Link to="/about" className="hover:text-black transition-colors">Terms</Link>
              <Link to="/about" className="hover:text-black transition-colors">Sitemap</Link>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-black transition-colors p-1" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-black transition-colors p-1" title="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-black transition-colors p-1" title="Twitter/X">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />

      {/* Floating Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-3 left-4 right-4 z-40 bg-surface/95 backdrop-blur-xl border border-secondary rounded-full shadow-lg px-4 py-2 flex items-center justify-around">
        <Link to="/explore" className={`flex flex-col items-center text-[10px] font-bold ${isActivePath('/explore') ? 'text-accent-dark font-extrabold' : 'text-muted'}`}>
          <Compass className="w-4 h-4 mb-0.5" />
          <span>Explore</span>
        </Link>
        <Link to="/explore-india" className={`flex flex-col items-center text-[10px] font-bold ${isActivePath('/explore-india') ? 'text-accent-dark font-extrabold' : 'text-muted'}`}>
          <MapPin className="w-4 h-4 mb-0.5" />
          <span>Map</span>
        </Link>
        <Link to="/festivals" className={`flex flex-col items-center text-[10px] font-bold ${isActivePath('/festivals') ? 'text-accent-dark font-extrabold' : 'text-muted'}`}>
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span>Festivals</span>
        </Link>
        <Link to="/community" className={`flex flex-col items-center text-[10px] font-bold ${isActivePath('/community') ? 'text-accent-dark font-extrabold' : 'text-muted'}`}>
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>Circle</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center text-[10px] font-bold ${isActivePath('/profile') ? 'text-accent-dark font-extrabold' : 'text-muted'}`}>
          <User className="w-4 h-4 mb-0.5" />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
}
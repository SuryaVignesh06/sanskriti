import { useState } from 'react';
import { useMember } from '@/integrations';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, LogOut, Menu, X, Heart, Mail, Sparkles, MapPin, Award, Compass, Calendar, BookOpen, Layers } from 'lucide-react';
import { SearchModal } from '@/components/ui/SearchModal';

export default function Layout() {
  const { member, isAuthenticated, isLoading, actions } = useMember();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const mainNavigation = [
    { name: 'Explore', href: '/explore', icon: Compass },
    { name: 'States', href: '/states', icon: MapPin },
    { name: 'Festivals', href: '/festivals', icon: Calendar },
    { name: 'Learn Online', href: '/learn-online', icon: BookOpen },
    { name: 'Quizzes', href: '/quizzes', icon: Award },
    { name: 'Stories', href: '/stories', icon: Layers },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-background font-paragraph text-foreground flex flex-col selection:bg-accent selection:text-foreground">
      <ScrollToTop />
      
      {/* Global Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-secondary transition-all">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-heading text-2xl font-bold text-foreground group-hover:scale-105 transition-transform duration-200 shadow-sm">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl tracking-wider text-foreground leading-none">
                  SANSKRITI
                </span>
                <span className="font-paragraph text-[10px] tracking-widest text-muted uppercase font-medium mt-1">
                  Living Culture & Heritage
                </span>
              </div>
            </Link>

            {/* Desktop Center Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-paragraph text-sm font-medium transition-all duration-200 py-1 relative ${
                    isActivePath(item.href)
                      ? 'text-foreground font-semibold'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {isActivePath(item.href) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Trigger Button */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2.5 text-foreground hover:bg-surface border border-secondary rounded-lg transition-colors flex items-center space-x-2"
                title="Search experiences, states, festivals..."
              >
                <Search className="w-4 h-4 text-foreground" />
                <span className="hidden xl:inline font-paragraph text-xs text-muted">Search culture...</span>
              </button>

              {/* Become an Ambassador */}
              <Link
                to="/become-ambassador"
                className="hidden md:inline-flex items-center space-x-1.5 px-4 py-2 border border-secondary hover:border-foreground rounded-lg font-paragraph text-xs font-semibold text-foreground transition-all duration-200"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-dark" />
                <span>Become an Ambassador</span>
              </Link>

              {/* User Authentication / Profile */}
              {isLoading && <LoadingSpinner />}

              {!isAuthenticated && !isLoading && (
                <Button
                  onClick={actions.login}
                  size="sm"
                  className="bg-accent hover:bg-accent-hover text-foreground font-paragraph text-xs font-bold tracking-wider px-5 py-2.5 rounded-lg transition-all shadow-sm"
                >
                  SIGN IN
                </Button>
              )}

              {isAuthenticated && (
                <div className="hidden md:flex items-center space-x-3">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-3 py-1.5 border border-secondary hover:border-accent rounded-lg font-paragraph text-xs font-semibold text-foreground transition-colors"
                  >
                    <User className="w-4 h-4 text-accent-dark" />
                    <span>{member?.profile?.nickname || 'My Profile'}</span>
                  </Link>
                  <button
                    onClick={actions.logout}
                    className="p-2 text-muted hover:text-foreground border border-secondary rounded-lg"
                    title="Sign Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-foreground border border-secondary rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-secondary bg-background overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 py-2.5 font-paragraph text-base border-b border-secondary/50 ${
                      isActivePath(item.href) ? 'text-foreground font-bold' : 'text-muted'
                    }`}
                  >
                    <item.icon className="w-5 h-5 text-accent-dark" />
                    <span>{item.name}</span>
                  </Link>
                ))}

                <Link
                  to="/become-ambassador"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 py-2.5 font-paragraph text-base text-foreground font-medium"
                >
                  <Sparkles className="w-5 h-5 text-accent-dark" />
                  <span>Become an Ambassador</span>
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
                      className="w-full py-2.5 border border-secondary text-foreground font-paragraph text-xs font-semibold rounded-lg"
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
                      className="w-full py-3 bg-accent text-foreground font-paragraph text-xs font-bold rounded-lg"
                    >
                      SIGN IN
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer className="bg-foreground text-background border-t border-secondary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent text-foreground rounded-md flex items-center justify-center font-heading text-xl font-bold">
                  S
                </div>
                <span className="font-heading text-2xl tracking-wider text-background">SANSKRITI</span>
              </div>
              <p className="font-paragraph text-sm text-background/70 leading-relaxed">
                Helping Indian and international travelers experience real Indian culture through authentic experiences hosted by verified local Cultural Ambassadors.
              </p>
            </div>

            {/* Discover */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg tracking-wider text-accent">DISCOVER CULTURE</h4>
              <ul className="space-y-2.5 text-sm text-background/80 font-paragraph">
                <li><Link to="/explore" className="hover:text-accent transition-colors">Physical Experiences</Link></li>
                <li><Link to="/states" className="hover:text-accent transition-colors">All 28 Indian States & UTs</Link></li>
                <li><Link to="/festivals" className="hover:text-accent transition-colors">Living Festival Calendar</Link></li>
                <li><Link to="/learn-online" className="hover:text-accent transition-colors">Live Online Virtual Classes</Link></li>
                <li><Link to="/quizzes" className="hover:text-accent transition-colors">Cultural Knowledge Quizzes</Link></li>
              </ul>
            </div>

            {/* Ambassadors & Community */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg tracking-wider text-accent">COMMUNITY</h4>
              <ul className="space-y-2.5 text-sm text-background/80 font-paragraph">
                <li><Link to="/become-ambassador" className="hover:text-accent transition-colors">Become a Cultural Ambassador</Link></li>
                <li><Link to="/stories" className="hover:text-accent transition-colors">Traveler & Host Stories</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">Our Cultural Preservation Mission</Link></li>
                <li><Link to="/profile" className="hover:text-accent transition-colors">Member Account & Badges</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg tracking-wider text-accent">CONNECT</h4>
              <p className="font-paragraph text-xs text-background/70 leading-relaxed">
                Have questions or need assistance booking an authentic cultural host?
              </p>
              <div className="flex items-center space-x-2 text-sm text-background/90">
                <Mail className="w-4 h-4 text-accent" />
                <span>concierge@sanskriti.culture</span>
              </div>
            </div>
          </div>

          <div className="border-t border-background/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between font-paragraph text-xs text-background/60">
            <p>© 2026 SANSKRITI Culture Platform. All rights reserved.</p>
            <div className="flex items-center space-x-1 mt-4 sm:mt-0">
              <span>Preserving Indian cultural heritage with</span>
              <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
              <span>for global human connection.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </div>
  );
}
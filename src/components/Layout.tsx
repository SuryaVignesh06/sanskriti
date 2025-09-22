import { useMember } from '@/integrations';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { motion } from 'framer-motion';
import { User, LogOut, Menu, X, Home, Map, BookOpen, Award, Users, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const { member, isAuthenticated, isLoading, actions } = useMember();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Explore States', href: '/states', icon: Map },
    { name: 'About', href: '/about', icon: BookOpen },
  ];

  const userNavigation = [
    { name: 'Profile', href: '/profile', icon: User },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-heading text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-heading text-xl text-primary">SANSKRITI</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-paragraph text-sm transition-colors duration-200 flex items-center space-x-2 ${
                    isActivePath(item.href)
                      ? 'text-primary font-semibold'
                      : 'text-primary/70 hover:text-primary'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {isLoading && <LoadingSpinner />}
              
              {!isAuthenticated && !isLoading && (
                <Button 
                  onClick={actions.login}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Sign In
                </Button>
              )}

              {isAuthenticated && (
                <div className="hidden md:flex items-center space-x-4">
                  {userNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`font-paragraph text-sm transition-colors duration-200 flex items-center space-x-2 ${
                        isActivePath(item.href)
                          ? 'text-primary font-semibold'
                          : 'text-primary/70 hover:text-primary'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{member?.profile?.nickname || 'Profile'}</span>
                    </Link>
                  ))}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={actions.logout}
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              )}

              {/* Mobile menu button */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden border-primary text-primary hover:bg-primary/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-secondary bg-background"
          >
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 py-2 font-paragraph transition-colors duration-200 ${
                    isActivePath(item.href)
                      ? 'text-primary font-semibold'
                      : 'text-primary/70'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}

              {isAuthenticated && (
                <>
                  <div className="border-t border-secondary pt-4">
                    {userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 py-2 font-paragraph transition-colors duration-200 ${
                          isActivePath(item.href)
                            ? 'text-primary font-semibold'
                            : 'text-primary/70'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{member?.profile?.nickname || 'Profile'}</span>
                      </Link>
                    ))}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        actions.logout();
                        setMobileMenuOpen(false);
                      }}
                      className="mt-4 w-full border-primary text-primary hover:bg-primary/10"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </>
              )}

              {!isAuthenticated && !isLoading && (
                <div className="border-t border-secondary pt-4">
                  <Button 
                    onClick={() => {
                      actions.login();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Sign In
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <span className="font-heading text-primary font-bold text-sm">S</span>
                </div>
                <span className="font-heading text-xl">SANSKRITI</span>
              </div>
              <p className="font-paragraph text-primary-foreground/80 leading-relaxed">
                Preserving and sharing India's magnificent cultural heritage 
                through innovative digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/states" className="font-paragraph text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    All States
                  </Link>
                </li>
                <li>
                  <Link to="/state/andhra-pradesh" className="font-paragraph text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Andhra Pradesh
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="font-paragraph text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg">Features</h3>
              <ul className="space-y-2">
                <li className="font-paragraph text-primary-foreground/80">Classical Dances</li>
                <li className="font-paragraph text-primary-foreground/80">Sacred Deities</li>
                <li className="font-paragraph text-primary-foreground/80">Cultural Elements</li>
                <li className="font-paragraph text-primary-foreground/80">AI Voice Reader</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg">Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" />
                  <span className="font-paragraph text-primary-foreground/80">hello@sanskriti.app</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4" />
                  <span className="font-paragraph text-primary-foreground/80">Join Community</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="font-paragraph text-primary-foreground/80">
              © 2024 Sanskriti. Made with ❤️ for preserving Indian cultural heritage.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
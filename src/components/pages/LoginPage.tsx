import { useState, useEffect } from 'react';
import { useMember } from '@/integrations';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Users, Globe } from 'lucide-react';

export default function LoginPage() {
  const { member, isAuthenticated, isLoading, actions } = useMember();
  const [isSigningIn, setIsSigningIn] = useState(false);

  // Redirect if already authenticated
  if (isAuthenticated && member) {
    return <Navigate to="/states" replace />;
  }

  const handleLogin = async () => {
    setIsSigningIn(true);
    try {
      await actions.login();
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected. We never sell your information."
    },
    {
      icon: Globe,
      title: "Free Forever",
      description: "Complete access to India's cultural heritage at no cost."
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with fellow cultural enthusiasts worldwide."
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Image
          src="https://static.wixstatic.com/media/4faed4_fe8bd997d0c345ca910bec4f00f1325b~mv2.png?originWidth=1920&originHeight=1024"
          alt="Cultural background"
          className="w-full h-full object-cover opacity-20"
          width={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Floating Mandala Animation */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 opacity-10"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Sparkles className="w-full h-full text-primary" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 opacity-10"
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Sparkles className="w-full h-full text-primary" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Branding & Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h1 
                  className="font-heading text-6xl lg:text-7xl text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  SANSKRITI
                </motion.h1>
                <motion.p 
                  className="font-paragraph text-2xl text-primary/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  From Novice to Cultural Hero
                </motion.p>
                <motion.p 
                  className="font-paragraph text-lg text-primary/70 max-w-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Embark on an immersive journey through India's vibrant heritage. 
                  Discover classical dances, divine traditions, regional festivals, 
                  and the stories that shaped our culture.
                </motion.p>
              </div>

              {/* Features */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {features.map((feature, index) => (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-primary">
                        {feature.title}
                      </h3>
                      <p className="font-paragraph text-primary/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Login Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <Card className="w-full max-w-md p-8 bg-background border-secondary shadow-xl">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="font-heading text-3xl text-primary">
                      Welcome
                    </h2>
                    <p className="font-paragraph text-primary/70">
                      Begin your cultural journey today
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      onClick={handleLogin}
                      disabled={isSigningIn}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
                      size="lg"
                    >
                      {isSigningIn ? (
                        <div className="flex items-center space-x-2">
                          <LoadingSpinner />
                          <span>Signing In...</span>
                        </div>
                      ) : (
                        'Sign In / Sign Up'
                      )}
                    </Button>

                    <div className="text-center">
                      <p className="font-paragraph text-sm text-primary/60">
                        Secure login with email or Google
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-secondary pt-6">
                    <div className="text-center space-y-2">
                      <p className="font-paragraph text-sm text-primary/70">
                        Join thousands of cultural enthusiasts
                      </p>
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Sparkles key={i} className="w-4 h-4 text-primary/40" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </div>
  );
}
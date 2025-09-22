import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMember } from '@/integrations';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import { Play, BookOpen, Map, Users, Award, Globe } from 'lucide-react';

export default function HomePage() {
  const { member, isAuthenticated, actions } = useMember();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Discover India's Rich Cultural Heritage",
      subtitle: "From ancient traditions to vibrant festivals",
      description: "Embark on an immersive journey through India's diverse cultural landscape, exploring the stories, traditions, and artforms that define our heritage.",
      image: "https://static.wixstatic.com/media/4faed4_bf13181b340a4c5e853d1c2f799d024f~mv2.png?originWidth=1920&originHeight=1024",
      cta: "Begin Your Journey"
    },
    {
      title: "Master Classical Dance Forms",
      subtitle: "Learn mudras, adavus, and expressions",
      description: "Dive deep into the intricate world of Indian classical dances, understanding every gesture, movement, and expression that tells timeless stories.",
      image: "https://static.wixstatic.com/media/4faed4_b839f24d385f4a3aa12b520594c2fdb2~mv2.png?originWidth=1920&originHeight=1024",
      cta: "Explore Dances"
    },
    {
      title: "Connect with Divine Traditions",
      subtitle: "Discover deities and their significance",
      description: "Explore the spiritual dimensions of Indian culture through the stories and significance of regional deities and their cultural impact.",
      image: "https://static.wixstatic.com/media/4faed4_f6c82d241fd042ce91cc6513fc02bc82~mv2.png?originWidth=1920&originHeight=1024",
      cta: "Meet the Deities"
    }
  ];

  const features = [
    {
      icon: Map,
      title: "State-wise Exploration",
      description: "Navigate through all 28 states, starting with Andhra Pradesh's rich Kuchipudi traditions and Tirupati heritage."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Learning",
      description: "Access detailed histories, timelines, and curated content with AI-powered text-to-speech in multiple languages."
    },
    {
      icon: Play,
      title: "Interactive Media",
      description: "Watch curated YouTube videos from official channels like IGNCA and experience AR try-on features for costumes."
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Join a vibrant community of cultural enthusiasts, share experiences, and participate in challenges."
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Earn badges and track your progress as you journey from novice to cultural hero."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Experience content in multiple languages with authentic regional accents and pronunciations."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Inspired by editorial layout */}
      <section className="relative w-full max-w-[120rem] mx-auto min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
              width={1920}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>

        {/* Editorial-style content positioning */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
              {/* Left column - Text content */}
              <div className="lg:col-span-6 space-y-8">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <h1 className="font-heading text-6xl lg:text-7xl text-primary leading-tight">
                      SANSKRITI
                    </h1>
                    <p className="font-paragraph text-xl text-primary/80 max-w-md">
                      {heroSlides[currentSlide].subtitle}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h2 className="font-heading text-3xl lg:text-4xl text-primary">
                      {heroSlides[currentSlide].title}
                    </h2>
                    <p className="font-paragraph text-lg text-primary/70 max-w-lg leading-relaxed">
                      {heroSlides[currentSlide].description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {isAuthenticated ? (
                      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link to="/states">{heroSlides[currentSlide].cta}</Link>
                      </Button>
                    ) : (
                      <Button 
                        onClick={actions.login} 
                        size="lg" 
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {heroSlides[currentSlide].cta}
                      </Button>
                    )}
                    <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                      <Link to="/about">Learn More</Link>
                    </Button>
                  </div>
                </motion.div>

                {/* Slide indicators */}
                <div className="flex space-x-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-primary' : 'bg-primary/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right column - Reserved for image (handled by background) */}
              <div className="lg:col-span-6" />
            </div>
          </div>
        </div>

        {/* Welcome message for authenticated users */}
        {isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-secondary"
          >
            <p className="font-paragraph text-primary">
              Welcome back, {member?.profile?.nickname || member?.contact?.firstName || 'Cultural Explorer'}!
            </p>
          </motion.div>
        )}
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl text-primary mb-6">
              Your Cultural Journey Awaits
            </h2>
            <p className="font-paragraph text-xl text-primary/70 max-w-3xl mx-auto">
              Immerse yourself in India's diverse heritage through interactive learning, 
              authentic content, and a supportive community of cultural enthusiasts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-background border-secondary hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl text-primary">
                      {feature.title}
                    </h3>
                    <p className="font-paragraph text-primary/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
          <h2 className="font-heading text-4xl lg:text-5xl mb-6">
            Begin Your Cultural Adventure
          </h2>
          <p className="font-paragraph text-xl mb-8 opacity-90">
            Join thousands of learners exploring India's magnificent heritage. 
            Start with Andhra Pradesh and discover the beauty of Kuchipudi dance, 
            the grandeur of Tirupati, and much more.
          </p>
          {isAuthenticated ? (
            <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/states">Explore States</Link>
            </Button>
          ) : (
            <Button 
              onClick={actions.login} 
              size="lg" 
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Sign Up Free
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
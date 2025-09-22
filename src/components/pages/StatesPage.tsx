import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { States } from '@/entities/states';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { motion } from 'framer-motion';
import { MapPin, Play, Star, ArrowRight } from 'lucide-react';

export default function StatesPage() {
  const [states, setStates] = useState<States[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const { items } = await BaseCrudService.getAll<States>('states');
        // Sort states with Andhra Pradesh first
        const sortedStates = items.sort((a, b) => {
          if (a.stateName === 'Andhra Pradesh') return -1;
          if (b.stateName === 'Andhra Pradesh') return 1;
          return (a.stateName || '').localeCompare(b.stateName || '');
        });
        setStates(sortedStates);
      } catch (error) {
        console.error('Error fetching states:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="font-heading text-5xl lg:text-6xl text-primary">
              Explore India's States
            </h1>
            <p className="font-paragraph text-xl text-primary/70 max-w-3xl mx-auto">
              Discover the unique cultural heritage of each state. Start your journey 
              with Andhra Pradesh and explore the magnificent traditions that define India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured State - Andhra Pradesh */}
      {states.length > 0 && states[0].stateName === 'Andhra Pradesh' && (
        <section className="py-16 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-primary" />
                <span className="font-paragraph text-lg text-primary font-semibold">
                  Featured State
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl text-primary">
                Start with Andhra Pradesh
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="overflow-hidden bg-background border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={states[0].stateImage || "https://static.wixstatic.com/media/4faed4_b1370c7b76e141fc82c5a9d6160e5d35~mv2.png?originWidth=576&originHeight=384"}
                      alt="Andhra Pradesh"
                      className="w-full h-full object-cover"
                      width={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-paragraph">
                        Recommended Start
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-2xl lg:text-3xl text-primary mb-3">
                          Andhra Pradesh
                        </h3>
                        <p className="font-paragraph text-primary/70 leading-relaxed">
                          {states[0].description || "Discover the birthplace of Kuchipudi dance, the spiritual grandeur of Tirupati, and the rich cultural traditions that have flourished for centuries in this magnificent state."}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <span className="bg-secondary/50 text-primary px-3 py-1 rounded-full text-sm font-paragraph">
                          Kuchipudi Dance
                        </span>
                        <span className="bg-secondary/50 text-primary px-3 py-1 rounded-full text-sm font-paragraph">
                          Tirupati Temple
                        </span>
                        <span className="bg-secondary/50 text-primary px-3 py-1 rounded-full text-sm font-paragraph">
                          Godavari Cuisine
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <Link to={`/state/${states[0].stateKey || 'andhra-pradesh'}`}>
                            Explore Culture
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        {states[0].youtubeLink && (
                          <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
                            <a href={states[0].youtubeLink} target="_blank" rel="noopener noreferrer">
                              <Play className="w-4 h-4 mr-2" />
                              Watch Video
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* All States Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl lg:text-4xl text-primary mb-4">
              All States & Union Territories
            </h2>
            <p className="font-paragraph text-lg text-primary/70">
              Choose any state to explore its unique cultural heritage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {states.map((state, index) => (
              <motion.div
                key={state._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onHoverStart={() => setSelectedState(state._id)}
                onHoverEnd={() => setSelectedState(null)}
              >
                <Card className={`overflow-hidden bg-background border-secondary hover:border-primary/50 transition-all duration-300 h-full ${
                  selectedState === state._id ? 'shadow-lg scale-105' : 'hover:shadow-md'
                }`}>
                  <div className="relative h-48">
                    <Image
                      src={state.stateImage || "https://static.wixstatic.com/media/4faed4_076e74d8c83642d5964a5d29b02c3d0b~mv2.png?originWidth=384&originHeight=320"}
                      alt={state.stateName || 'State'}
                      className="w-full h-full object-cover"
                      width={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-heading text-lg text-white">
                        {state.stateName}
                      </h3>
                    </div>
                    {state.highlighted && (
                      <div className="absolute top-3 right-3">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <p className="font-paragraph text-sm text-primary/70 line-clamp-2">
                      {state.description || "Explore the rich cultural heritage and traditions of this beautiful state."}
                    </p>
                    
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link to={`/state/${state.stateKey || state.stateName?.toLowerCase().replace(/\s+/g, '-')}`}>
                          <MapPin className="w-4 h-4 mr-1" />
                          Explore
                        </Link>
                      </Button>
                      {state.youtubeLink && (
                        <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                          <a href={state.youtubeLink} target="_blank" rel="noopener noreferrer">
                            <Play className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl lg:text-4xl text-primary">
              Interactive Cultural Map
            </h2>
            <p className="font-paragraph text-lg text-primary/70">
              Coming soon: Navigate through India with our interactive SVG map, 
              highlighting cultural hotspots and regional specialties.
            </p>
            <div className="bg-background/50 rounded-lg p-12 border border-secondary">
              <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-16 h-16 text-primary/50" />
              </div>
              <p className="font-paragraph text-primary/60 mt-4">
                Interactive map feature in development
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
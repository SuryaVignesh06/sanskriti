import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { States } from '@/entities/states';
import { CulturalElements } from '@/entities/culturalelements';
import { Deities } from '@/entities/deities';
import { IndianDanceForms } from '@/entities/indiandanceforms';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Play, Volume2, BookOpen, Sparkles, ArrowLeft, ExternalLink, Crown } from 'lucide-react';

export default function StateCulturePage() {
  const { stateKey } = useParams<{ stateKey: string }>();
  const [state, setState] = useState<States | null>(null);
  const [culturalElements, setCulturalElements] = useState<CulturalElements[]>([]);
  const [deities, setDeities] = useState<Deities[]>([]);
  const [dances, setDances] = useState<IndianDanceForms[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [speakingElement, setSpeakingElement] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!stateKey) return;
      
      try {
        // Fetch state info
        const { items: stateItems } = await BaseCrudService.getAll<States>('states');
        const currentState = stateItems.find(s => 
          s.stateKey === stateKey || 
          s.stateName?.toLowerCase().replace(/\s+/g, '-') === stateKey
        );
        setState(currentState || null);

        // Fetch cultural elements
        const { items: culturalItems } = await BaseCrudService.getAll<CulturalElements>('culturalelements');
        setCulturalElements(culturalItems);

        // Fetch deities for this state
        const { items: deityItems } = await BaseCrudService.getAll<Deities>('deities');
        const stateDeities = deityItems.filter(deity => 
          deity.stateName?.toLowerCase() === currentState?.stateName?.toLowerCase()
        );
        setDeities(stateDeities);

        // Fetch dance forms
        const { items: danceItems } = await BaseCrudService.getAll<IndianDanceForms>('indiandanceforms');
        setDances(danceItems);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [stateKey]);

  const speakText = (text: string, elementId: string) => {
    if ('speechSynthesis' in window) {
      // Stop any ongoing speech
      window.speechSynthesis.cancel();
      
      if (speakingElement === elementId) {
        setSpeakingElement(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => setSpeakingElement(elementId);
      utterance.onend = () => setSpeakingElement(null);
      utterance.onerror = () => setSpeakingElement(null);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const categories = [
    { id: 'all', name: 'All Elements', count: culturalElements.length },
    { id: 'dance', name: 'Dance Forms', count: dances.length },
    { id: 'festival', name: 'Festivals', count: culturalElements.filter(e => e.elementType === 'festival').length },
    { id: 'cuisine', name: 'Cuisine', count: culturalElements.filter(e => e.elementType === 'cuisine').length },
    { id: 'craft', name: 'Crafts', count: culturalElements.filter(e => e.elementType === 'craft').length },
    { id: 'deities', name: 'Deities', count: deities.length }
  ];

  const getFilteredElements = () => {
    if (selectedCategory === 'all') {
      return culturalElements;
    }
    if (selectedCategory === 'dance') {
      return [];
    }
    if (selectedCategory === 'deities') {
      return [];
    }
    return culturalElements.filter(element => element.elementType === selectedCategory);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!state) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-heading text-2xl text-primary">State Not Found</h1>
          <Button asChild>
            <Link to="/states">Back to States</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={state.stateImage || "https://static.wixstatic.com/media/4faed4_c202d1e86de64ddf9fd1d2aa32a9ecdc~mv2.png?originWidth=1920&originHeight=1024"}
            alt={state.stateName || 'State'}
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <Link to="/states">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to States
              </Link>
            </Button>

            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-6xl text-primary">
                {state.stateName}
              </h1>
              <p className="font-paragraph text-xl text-primary/70 max-w-3xl">
                {state.description || "Explore the rich cultural heritage and traditions of this magnificent state."}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {state.youtubeLink && (
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={state.youtubeLink} target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Introduction
                  </a>
                </Button>
              )}
              <Button 
                variant="outline" 
                onClick={() => speakText(state.description || '', 'state-description')}
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Volume2 className={`w-4 h-4 mr-2 ${speakingElement === 'state-description' ? 'animate-pulse' : ''}`} />
                {speakingElement === 'state-description' ? 'Stop Reading' : 'Listen'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "border-primary text-primary hover:bg-primary/10"
                }
              >
                {category.name}
                <span className="ml-2 text-xs bg-primary-foreground/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Deities Section */}
      {(selectedCategory === 'all' || selectedCategory === 'deities') && deities.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Crown className="w-8 h-8 text-primary" />
                <h2 className="font-heading text-3xl lg:text-4xl text-primary">
                  Sacred Deities
                </h2>
              </div>
              <p className="font-paragraph text-lg text-primary/70">
                Discover the divine traditions and spiritual heritage of {state.stateName}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deities.map((deity, index) => (
                <motion.div
                  key={deity._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-background border-secondary hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative h-48">
                      <Image
                        src={deity.deityImage || "https://static.wixstatic.com/media/4faed4_3394b1755635465bb9ac55269f2652ad~mv2.png?originWidth=384&originHeight=448"}
                        alt={deity.deityName || 'Deity'}
                        className="w-full h-full object-cover"
                        width={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="font-heading text-lg text-white">
                          {deity.deityName}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="history" className="border-secondary">
                          <AccordionTrigger className="font-heading text-primary hover:text-primary/80">
                            <div className="flex items-center space-x-2">
                              <BookOpen className="w-4 h-4" />
                              <span>History & Significance</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            {deity.history && (
                              <div>
                                <h4 className="font-heading text-sm text-primary mb-2">History</h4>
                                <p className="font-paragraph text-sm text-primary/70">
                                  {deity.history}
                                </p>
                              </div>
                            )}
                            {deity.culturalSignificance && (
                              <div>
                                <h4 className="font-heading text-sm text-primary mb-2">Cultural Significance</h4>
                                <p className="font-paragraph text-sm text-primary/70">
                                  {deity.culturalSignificance}
                                </p>
                              </div>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => speakText(
                            `${deity.deityName}. ${deity.history} ${deity.culturalSignificance}`, 
                            `deity-${deity._id}`
                          )}
                          className="border-primary text-primary hover:bg-primary/10"
                        >
                          <Volume2 className={`w-4 h-4 mr-1 ${speakingElement === `deity-${deity._id}` ? 'animate-pulse' : ''}`} />
                          {speakingElement === `deity-${deity._id}` ? 'Stop' : 'Listen'}
                        </Button>
                        {deity.youtubeUrl && (
                          <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                            <a href={deity.youtubeUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Video
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
      )}

      {/* Dance Forms Section */}
      {(selectedCategory === 'all' || selectedCategory === 'dance') && dances.length > 0 && (
        <section className="py-16 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
                <h2 className="font-heading text-3xl lg:text-4xl text-primary">
                  Classical Dance Forms
                </h2>
              </div>
              <p className="font-paragraph text-lg text-primary/70">
                Explore the graceful movements and expressions of traditional dances
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dances.map((dance, index) => (
                <motion.div
                  key={dance._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-background border-secondary hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative h-48">
                      <Image
                        src={dance.costumeImage || "https://static.wixstatic.com/media/4faed4_6421d1b9fcef4247a73fa5d61de5c726~mv2.png?originWidth=384&originHeight=448"}
                        alt={dance.danceName || 'Dance'}
                        className="w-full h-full object-cover"
                        width={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="font-heading text-lg text-white">
                          {dance.danceName}
                        </h3>
                      </div>
                      {dance.arTryOnAvailable && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-paragraph">
                            AR Try-On
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex gap-2">
                        <Button asChild size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                          <Link to={`/dance/${dance._id}`}>
                            Explore Details
                          </Link>
                        </Button>
                        {dance.youtubeLink && (
                          <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                            <a href={dance.youtubeLink} target="_blank" rel="noopener noreferrer">
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
      )}

      {/* Cultural Elements A-Z Grid */}
      {(selectedCategory === 'all' || !['dance', 'deities'].includes(selectedCategory)) && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-primary mb-4">
                Cultural Heritage A-Z
              </h2>
              <p className="font-paragraph text-lg text-primary/70">
                Discover the diverse cultural elements that define {state.stateName}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredElements().map((element, index) => (
                <motion.div
                  key={element._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-background border-secondary hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative h-48">
                      <Image
                        src={element.elementImage || "https://static.wixstatic.com/media/4faed4_98a424b7d950446c9c9b5128ff6bead9~mv2.png?originWidth=384&originHeight=448"}
                        alt={element.elementName || 'Cultural Element'}
                        className="w-full h-full object-cover"
                        width={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="font-heading text-lg text-white">
                          {element.elementName}
                        </h3>
                      </div>
                      {element.elementType && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary/80 text-primary-foreground px-2 py-1 rounded-full text-xs font-paragraph capitalize">
                            {element.elementType}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <p className="font-paragraph text-sm text-primary/70">
                        {element.shortDescription}
                      </p>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="details" className="border-secondary">
                          <AccordionTrigger className="font-heading text-primary hover:text-primary/80">
                            <div className="flex items-center space-x-2">
                              <BookOpen className="w-4 h-4" />
                              <span>Detailed Information</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="font-paragraph text-sm text-primary/70">
                              {element.detailedDescription}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => speakText(
                            `${element.elementName}. ${element.shortDescription} ${element.detailedDescription}`, 
                            `element-${element._id}`
                          )}
                          className="border-primary text-primary hover:bg-primary/10"
                        >
                          <Volume2 className={`w-4 h-4 mr-1 ${speakingElement === `element-${element._id}` ? 'animate-pulse' : ''}`} />
                          {speakingElement === `element-${element._id}` ? 'Stop' : 'Listen'}
                        </Button>
                        {element.youtubeLink && (
                          <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                            <a href={element.youtubeLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Video
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
      )}
    </div>
  );
}
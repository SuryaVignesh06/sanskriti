import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { IndianDanceForms } from '@/entities/indiandanceforms';
import { Mudras } from '@/entities/mudras';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Volume2, ExternalLink, Sparkles, Hand, Music, Palette, BookOpen } from 'lucide-react';

export default function DanceDetailsPage() {
  const { danceId } = useParams<{ danceId: string }>();
  const [dance, setDance] = useState<IndianDanceForms | null>(null);
  const [mudras, setMudras] = useState<Mudras[]>([]);
  const [loading, setLoading] = useState(true);
  const [speakingSection, setSpeakingSection] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!danceId) return;
      
      try {
        // Fetch dance details
        const danceData = await BaseCrudService.getById<IndianDanceForms>('indiandanceforms', danceId);
        setDance(danceData);

        // Fetch related mudras
        const { items: mudraItems } = await BaseCrudService.getAll<Mudras>('mudras');
        const relatedMudras = mudraItems.filter(mudra => 
          mudra.danceStyle?.toLowerCase().includes(danceData?.danceName?.toLowerCase() || '')
        );
        setMudras(relatedMudras);

      } catch (error) {
        console.error('Error fetching dance data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [danceId]);

  const speakText = (text: string, sectionId: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      if (speakingSection === sectionId) {
        setSpeakingSection(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => setSpeakingSection(sectionId);
      utterance.onend = () => setSpeakingSection(null);
      utterance.onerror = () => setSpeakingSection(null);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!dance) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-heading text-2xl text-primary">Dance Not Found</h1>
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
            src={dance.costumeImage || "https://static.wixstatic.com/media/4faed4_3c87384e8cd945cdb98328ef94a3f106~mv2.png?originWidth=1920&originHeight=1024"}
            alt={dance.danceName || 'Dance'}
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
                Back to Culture
              </Link>
            </Button>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-primary" />
                <h1 className="font-heading text-5xl lg:text-6xl text-primary">
                  {dance.danceName}
                </h1>
              </div>
              <p className="font-paragraph text-xl text-primary/70 max-w-3xl">
                Explore the intricate world of {dance.danceName} - its movements, expressions, and cultural significance
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {dance.youtubeLink && (
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={dance.youtubeLink} target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Performance
                  </a>
                </Button>
              )}
              {dance.arTryOnAvailable && dance.arTryOnUrl && (
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <a href={dance.arTryOnUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    AR Try-On
                  </a>
                </Button>
              )}
              <Button 
                variant="outline" 
                onClick={() => speakText(dance.aiReaderText || dance.history || '', 'dance-intro')}
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Volume2 className={`w-4 h-4 mr-2 ${speakingSection === 'dance-intro' ? 'animate-pulse' : ''}`} />
                {speakingSection === 'dance-intro' ? 'Stop Reading' : 'Listen'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-secondary/20">
              <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BookOpen className="w-4 h-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="mudras" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Hand className="w-4 h-4 mr-2" />
                Mudras
              </TabsTrigger>
              <TabsTrigger value="adavus" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Sparkles className="w-4 h-4 mr-2" />
                Adavus
              </TabsTrigger>
              <TabsTrigger value="talas" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Music className="w-4 h-4 mr-2" />
                Talas
              </TabsTrigger>
              <TabsTrigger value="costume" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Palette className="w-4 h-4 mr-2" />
                Costume
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 bg-background border-secondary">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading text-3xl text-primary">History & Origins</h2>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => speakText(dance.history || '', 'history')}
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        <Volume2 className={`w-4 h-4 mr-2 ${speakingSection === 'history' ? 'animate-pulse' : ''}`} />
                        {speakingSection === 'history' ? 'Stop' : 'Listen'}
                      </Button>
                    </div>
                    <p className="font-paragraph text-lg text-primary/70 leading-relaxed">
                      {dance.history || "Discover the rich history and cultural significance of this classical dance form."}
                    </p>
                  </div>
                </Card>
              </motion.div>

              {dance.mudrasOverview && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="p-8 bg-secondary/10 border-secondary">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="font-heading text-3xl text-primary">Mudras Overview</h2>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => speakText(dance.mudrasOverview || '', 'mudras-overview')}
                          className="border-primary text-primary hover:bg-primary/10"
                        >
                          <Volume2 className={`w-4 h-4 mr-2 ${speakingSection === 'mudras-overview' ? 'animate-pulse' : ''}`} />
                          {speakingSection === 'mudras-overview' ? 'Stop' : 'Listen'}
                        </Button>
                      </div>
                      <p className="font-paragraph text-lg text-primary/70 leading-relaxed">
                        {dance.mudrasOverview}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}
            </TabsContent>

            {/* Mudras Tab */}
            <TabsContent value="mudras" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-4"
              >
                <h2 className="font-heading text-3xl text-primary">Hand Gestures (Mudras)</h2>
                <p className="font-paragraph text-lg text-primary/70">
                  Master the symbolic hand gestures that convey meaning and emotion
                </p>
              </motion.div>

              {mudras.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mudras.map((mudra, index) => (
                    <motion.div
                      key={mudra._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden bg-background border-secondary hover:shadow-lg transition-all duration-300">
                        <div className="relative h-48">
                          <Image
                            src={mudra.mudraImage || "https://static.wixstatic.com/media/4faed4_c3cf5896bae34f0cbddb5b9e64601b47~mv2.png?originWidth=384&originHeight=448"}
                            alt={mudra.mudraName || 'Mudra'}
                            className="w-full h-full object-cover"
                            width={400}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="font-heading text-lg text-white">
                              {mudra.mudraName}
                            </h3>
                          </div>
                        </div>
                        
                        <div className="p-6 space-y-4">
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-heading text-sm text-primary mb-1">Meaning</h4>
                              <p className="font-paragraph text-sm text-primary/70">
                                {mudra.meaning}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-heading text-sm text-primary mb-1">Usage</h4>
                              <p className="font-paragraph text-sm text-primary/70">
                                {mudra.usage}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => speakText(
                                `${mudra.mudraName}. Meaning: ${mudra.meaning}. Usage: ${mudra.usage}`, 
                                `mudra-${mudra._id}`
                              )}
                              className="border-primary text-primary hover:bg-primary/10"
                            >
                              <Volume2 className={`w-4 h-4 mr-1 ${speakingSection === `mudra-${mudra._id}` ? 'animate-pulse' : ''}`} />
                              {speakingSection === `mudra-${mudra._id}` ? 'Stop' : 'Listen'}
                            </Button>
                            {mudra.youtubeLink && (
                              <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                                <a href={mudra.youtubeLink} target="_blank" rel="noopener noreferrer">
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
              ) : (
                <Card className="p-12 text-center bg-secondary/10 border-secondary">
                  <Hand className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                  <h3 className="font-heading text-xl text-primary mb-2">Mudras Coming Soon</h3>
                  <p className="font-paragraph text-primary/70">
                    Detailed mudra information for {dance.danceName} will be available soon.
                  </p>
                </Card>
              )}
            </TabsContent>

            {/* Adavus Tab */}
            <TabsContent value="adavus" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 bg-background border-secondary">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading text-3xl text-primary">Adavus (Basic Steps)</h2>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => speakText(dance.adavusDescription || '', 'adavus')}
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        <Volume2 className={`w-4 h-4 mr-2 ${speakingSection === 'adavus' ? 'animate-pulse' : ''}`} />
                        {speakingSection === 'adavus' ? 'Stop' : 'Listen'}
                      </Button>
                    </div>
                    <p className="font-paragraph text-lg text-primary/70 leading-relaxed">
                      {dance.adavusDescription || "Learn the fundamental steps and movements that form the foundation of this classical dance."}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Talas Tab */}
            <TabsContent value="talas" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 bg-background border-secondary">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading text-3xl text-primary">Talas (Rhythmic Patterns)</h2>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => speakText(dance.talasDescription || '', 'talas')}
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        <Volume2 className={`w-4 h-4 mr-2 ${speakingSection === 'talas' ? 'animate-pulse' : ''}`} />
                        {speakingSection === 'talas' ? 'Stop' : 'Listen'}
                      </Button>
                    </div>
                    <p className="font-paragraph text-lg text-primary/70 leading-relaxed">
                      {dance.talasDescription || "Understand the rhythmic patterns and musical structures that guide the dance movements."}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Costume Tab */}
            <TabsContent value="costume" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                <Card className="p-8 bg-background border-secondary">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading text-3xl text-primary">Traditional Costume</h2>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => speakText(dance.costumeDescription || '', 'costume')}
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        <Volume2 className={`w-4 h-4 mr-2 ${speakingSection === 'costume' ? 'animate-pulse' : ''}`} />
                        {speakingSection === 'costume' ? 'Stop' : 'Listen'}
                      </Button>
                    </div>
                    <p className="font-paragraph text-lg text-primary/70 leading-relaxed">
                      {dance.costumeDescription || "Discover the intricate details and cultural significance of the traditional costume worn in this dance form."}
                    </p>
                    {dance.arTryOnAvailable && dance.arTryOnUrl && (
                      <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <a href={dance.arTryOnUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Try On with AR
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>

                {dance.costumeImage && (
                  <Card className="overflow-hidden bg-background border-secondary">
                    <Image
                      src={dance.costumeImage}
                      alt={`${dance.danceName} costume`}
                      className="w-full h-full object-cover"
                      width={600}
                    />
                  </Card>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
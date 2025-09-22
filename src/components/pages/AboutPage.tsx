import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';
import { Heart, Globe, Users, BookOpen, Award, Sparkles, Mail, Phone, MapPin } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: Globe,
      title: "28 States Coverage",
      description: "Comprehensive exploration of all Indian states and union territories with authentic cultural content."
    },
    {
      icon: BookOpen,
      title: "Rich Educational Content",
      description: "Detailed histories, timelines, and curated information from trusted sources like IGNCA."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with fellow cultural enthusiasts and share your learning journey."
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Earn badges and track progress as you advance from novice to cultural hero."
    },
    {
      icon: Sparkles,
      title: "Interactive Learning",
      description: "AI-powered text-to-speech, AR try-on features, and immersive multimedia experiences."
    },
    {
      icon: Heart,
      title: "Free Forever",
      description: "Complete access to India's cultural heritage at no cost, with privacy protection guaranteed."
    }
  ];

  const team = [
    {
      name: "Cultural Heritage Team",
      role: "Content Curation & Research",
      description: "Dedicated researchers ensuring authentic and accurate cultural representation."
    },
    {
      name: "Technology Team",
      role: "Platform Development",
      description: "Building accessible, engaging, and innovative learning experiences."
    },
    {
      name: "Community Team",
      role: "User Experience & Support",
      description: "Fostering a welcoming environment for cultural exploration and learning."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/4faed4_50196d22b86b42bf8665b55f48d7944c~mv2.png?originWidth=1920&originHeight=1024"
            alt="Indian cultural heritage"
            className="w-full h-full object-cover opacity-20"
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-6">
              <h1 className="font-heading text-5xl lg:text-6xl text-primary">
                About Sanskriti
              </h1>
              <p className="font-paragraph text-xl text-primary/70 max-w-4xl mx-auto leading-relaxed">
                A free educational platform dedicated to preserving, sharing, and celebrating 
                India's magnificent cultural heritage. From ancient traditions to vibrant festivals, 
                we guide learners on an immersive journey through the diverse tapestry of Indian culture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/states">Start Exploring</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <a href="#mission">Our Mission</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-heading text-4xl text-primary">
                Our Mission
              </h2>
              <div className="space-y-4">
                <p className="font-paragraph text-lg text-primary/70 leading-relaxed">
                  To make India's rich cultural heritage accessible to everyone, everywhere. 
                  We believe that understanding our traditions, arts, and spiritual practices 
                  creates deeper connections to our roots and fosters cultural pride.
                </p>
                <p className="font-paragraph text-lg text-primary/70 leading-relaxed">
                  Through innovative technology, authentic content, and community engagement, 
                  we're building bridges between ancient wisdom and modern learning, 
                  ensuring that our cultural treasures are preserved for future generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8 bg-background border-secondary shadow-lg">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl text-primary mb-2">
                      Cultural Pride
                    </h3>
                    <p className="font-paragraph text-primary/70">
                      Fostering appreciation and understanding of India's diverse heritage
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="font-heading text-2xl text-primary">28</p>
                      <p className="font-paragraph text-sm text-primary/70">States Covered</p>
                    </div>
                    <div>
                      <p className="font-heading text-2xl text-primary">100+</p>
                      <p className="font-paragraph text-sm text-primary/70">Cultural Elements</p>
                    </div>
                    <div>
                      <p className="font-heading text-2xl text-primary">Free</p>
                      <p className="font-paragraph text-sm text-primary/70">Always</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl text-primary mb-6">
              Why Choose Sanskriti?
            </h2>
            <p className="font-paragraph text-xl text-primary/70 max-w-3xl mx-auto">
              Discover what makes our platform the premier destination for cultural learning
            </p>
          </motion.div>

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

      {/* Team Section */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl text-primary mb-6">
              Our Dedicated Teams
            </h2>
            <p className="font-paragraph text-xl text-primary/70 max-w-3xl mx-auto">
              Passionate experts working together to bring you authentic cultural experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center bg-background border-secondary hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-primary mb-2">
                        {member.name}
                      </h3>
                      <p className="font-paragraph text-primary/80 font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="font-paragraph text-primary/70">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-6">
              <h2 className="font-heading text-4xl text-primary">
                Get in Touch
              </h2>
              <p className="font-paragraph text-xl text-primary/70">
                Have questions, suggestions, or want to contribute? We'd love to hear from you.
              </p>
            </div>

            <Card className="p-8 bg-background border-secondary">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-primary">Email Us</h3>
                    <p className="font-paragraph text-primary/70">hello@sanskriti.app</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-primary">Community</h3>
                    <p className="font-paragraph text-primary/70">Join our cultural community</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-primary">Contribute</h3>
                    <p className="font-paragraph text-primary/70">Share your cultural knowledge</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <p className="font-paragraph text-primary/70">
                Sanskriti is committed to preserving and sharing India's cultural heritage 
                with respect, authenticity, and accessibility for all.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/states">Begin Your Cultural Journey</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
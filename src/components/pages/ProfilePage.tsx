import { useState, useEffect } from 'react';
import { useMember } from '@/integrations';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, Award, BookOpen, MapPin, Settings, Crown, Star } from 'lucide-react';

export default function ProfilePage() {
  const { member } = useMember();
  const [achievements] = useState([
    { id: 1, name: "Cultural Explorer", description: "Visited 5 states", icon: MapPin, earned: true },
    { id: 2, name: "Dance Enthusiast", description: "Learned 3 dance forms", icon: Star, earned: true },
    { id: 3, name: "Mudra Master", description: "Mastered 10 mudras", icon: Award, earned: false },
    { id: 4, name: "Heritage Hero", description: "Completed all states", icon: Crown, earned: false }
  ]);

  const [learningProgress] = useState([
    { state: "Andhra Pradesh", progress: 85, completed: 12, total: 15 },
    { state: "Tamil Nadu", progress: 60, completed: 8, total: 14 },
    { state: "Kerala", progress: 30, completed: 4, total: 12 },
    { state: "Karnataka", progress: 15, completed: 2, total: 13 }
  ]);

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Not available';
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Profile Header */}
      <section className="relative py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-secondary border-4 border-primary/20">
                {member?.profile?.photo?.url ? (
                  <Image
                    src={member.profile.photo.url}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    width={128}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10">
                    <User className="w-16 h-16 text-primary/50" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                <Crown className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="font-heading text-4xl text-primary">
                {member?.profile?.nickname || 
                 `${member?.contact?.firstName || ''} ${member?.contact?.lastName || ''}`.trim() || 
                 'Cultural Explorer'}
              </h1>
              <p className="font-paragraph text-lg text-primary/70">
                {member?.profile?.title || 'Heritage Enthusiast'}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-full">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-paragraph text-primary/70">
                  {member?.loginEmail || 'No email provided'}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-paragraph text-primary/70">
                  Joined {formatDate(member?._createdDate)}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 bg-secondary/20">
              <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <User className="w-4 h-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="progress" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BookOpen className="w-4 h-4 mr-2" />
                Learning Progress
              </TabsTrigger>
              <TabsTrigger value="achievements" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Award className="w-4 h-4 mr-2" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="p-6 bg-background border-secondary">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg text-primary">States Explored</h3>
                          <p className="font-paragraph text-2xl font-bold text-primary">4</p>
                        </div>
                      </div>
                      <p className="font-paragraph text-sm text-primary/70">
                        Continue exploring to unlock more cultural treasures
                      </p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="p-6 bg-background border-secondary">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Star className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg text-primary">Dance Forms</h3>
                          <p className="font-paragraph text-2xl font-bold text-primary">3</p>
                        </div>
                      </div>
                      <p className="font-paragraph text-sm text-primary/70">
                        Kuchipudi, Bharatanatyam, Kathak learned
                      </p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="p-6 bg-background border-secondary">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg text-primary">Achievements</h3>
                          <p className="font-paragraph text-2xl font-bold text-primary">2</p>
                        </div>
                      </div>
                      <p className="font-paragraph text-sm text-primary/70">
                        Cultural Explorer, Dance Enthusiast earned
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="p-8 bg-secondary/10 border-secondary">
                  <div className="space-y-6">
                    <h2 className="font-heading text-2xl text-primary">Recent Activity</h2>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="flex-1">
                          <p className="font-paragraph text-primary">Completed Kuchipudi mudras section</p>
                          <p className="font-paragraph text-sm text-primary/60">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
                        <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
                        <div className="flex-1">
                          <p className="font-paragraph text-primary">Explored Andhra Pradesh deities</p>
                          <p className="font-paragraph text-sm text-primary/60">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
                        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                        <div className="flex-1">
                          <p className="font-paragraph text-primary">Started Tamil Nadu cultural journey</p>
                          <p className="font-paragraph text-sm text-primary/60">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Learning Progress Tab */}
            <TabsContent value="progress" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl text-primary">Learning Progress</h2>
                
                {learningProgress.map((state, index) => (
                  <Card key={state.state} className="p-6 bg-background border-secondary">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-xl text-primary">{state.state}</h3>
                        <span className="font-paragraph text-sm text-primary/70">
                          {state.completed}/{state.total} completed
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-paragraph text-primary/70">Progress</span>
                          <span className="font-paragraph text-primary font-semibold">{state.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary/30 rounded-full h-2">
                          <motion.div
                            className="bg-primary h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${state.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl text-primary">Achievements & Badges</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className={`p-6 border-secondary transition-all duration-300 ${
                        achievement.earned 
                          ? 'bg-primary/5 border-primary/30 shadow-lg' 
                          : 'bg-background opacity-60'
                      }`}>
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            achievement.earned 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-secondary/30 text-primary/40'
                          }`}>
                            <achievement.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-heading text-lg text-primary">
                                {achievement.name}
                              </h3>
                              {achievement.earned && (
                                <Badge className="bg-primary text-primary-foreground">
                                  Earned
                                </Badge>
                              )}
                            </div>
                            <p className="font-paragraph text-sm text-primary/70">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl text-primary">Account Settings</h2>
                
                <Card className="p-8 bg-background border-secondary">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-heading text-xl text-primary">Profile Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="font-paragraph text-sm text-primary/70 block mb-2">
                            Display Name
                          </label>
                          <p className="font-paragraph text-primary p-3 bg-secondary/20 rounded-lg">
                            {member?.profile?.nickname || 'Not set'}
                          </p>
                        </div>
                        <div>
                          <label className="font-paragraph text-sm text-primary/70 block mb-2">
                            Email
                          </label>
                          <p className="font-paragraph text-primary p-3 bg-secondary/20 rounded-lg">
                            {member?.loginEmail || 'Not available'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-secondary pt-6">
                      <h3 className="font-heading text-xl text-primary mb-4">Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                          <div>
                            <h4 className="font-heading text-primary">AI Voice Reader</h4>
                            <p className="font-paragraph text-sm text-primary/70">
                              Enable text-to-speech for cultural content
                            </p>
                          </div>
                          <Badge variant="outline" className="border-primary text-primary">
                            Enabled
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                          <div>
                            <h4 className="font-heading text-primary">Progress Notifications</h4>
                            <p className="font-paragraph text-sm text-primary/70">
                              Get notified about learning milestones
                            </p>
                          </div>
                          <Badge variant="outline" className="border-primary text-primary">
                            Enabled
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-secondary pt-6">
                      <h3 className="font-heading text-xl text-primary mb-4">Account Status</h3>
                      <div className="space-y-2">
                        <p className="font-paragraph text-primary/70">
                          <strong>Member since:</strong> {formatDate(member?._createdDate)}
                        </p>
                        <p className="font-paragraph text-primary/70">
                          <strong>Last login:</strong> {formatDate(member?.lastLoginDate)}
                        </p>
                        <p className="font-paragraph text-primary/70">
                          <strong>Email verified:</strong> {member?.loginEmailVerified ? 'Yes' : 'No'}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
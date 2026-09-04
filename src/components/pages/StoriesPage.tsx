import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { STORY_ARTICLES } from '@/lib/sanskritiData';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function StoriesPage() {
  const featuredStory = STORY_ARTICLES.find(s => s.featured) || STORY_ARTICLES[0];
  const otherStories = STORY_ARTICLES.filter(s => s.id !== featuredStory.id);

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">CULTURAL EDITORIAL & JOURNALISM</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-foreground">STORIES FROM INSIDE INDIA</h1>
          <p className="font-paragraph text-muted text-base">
            First-person narratives, artisan spotlights, culinary journeys, and cultural wisdom from across Indian communities.
          </p>
        </div>

        {/* Lead Featured Story */}
        <div className="bg-surface border border-secondary rounded-[28px] overflow-hidden shadow-sm grid lg:grid-cols-12">
          <div className="lg:col-span-7 min-h-[380px]">
            <SafeImage src={featuredStory.image} alt={featuredStory.title} className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-accent text-foreground text-xs font-bold uppercase rounded-full">
                {featuredStory.category} · {featuredStory.readTime}
              </span>
              <h2 className="font-heading text-4xl text-foreground leading-snug">{featuredStory.title}</h2>
              <p className="font-paragraph text-xs font-semibold text-accent-dark">{featuredStory.subtitle}</p>
              <p className="font-paragraph text-xs text-muted leading-relaxed line-clamp-4">{featuredStory.excerpt}</p>
            </div>

            <div className="pt-4 border-t border-secondary flex items-center space-x-3">
              <SafeImage src={featuredStory.authorAvatar} alt={featuredStory.author} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-xs font-semibold text-foreground">{featuredStory.author}</p>
                <p className="text-[10px] text-muted">{featuredStory.authorRole} · {featuredStory.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Story Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherStories.map((story) => (
            <div key={story.id} className="bg-surface border border-secondary rounded-[20px] overflow-hidden shadow-sm p-6 space-y-4 flex flex-col justify-between">
              <div className="h-60 rounded-lg overflow-hidden">
                <SafeImage src={story.image} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-accent-dark uppercase tracking-wider">{story.category} · {story.readTime}</span>
                <h3 className="font-heading text-2xl text-foreground">{story.title}</h3>
                <p className="text-xs text-muted leading-relaxed line-clamp-3">{story.excerpt}</p>
              </div>
              <div className="pt-4 border-t border-secondary flex items-center space-x-3">
                <SafeImage src={story.authorAvatar} alt={story.author} className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-semibold text-foreground">{story.author}</p>
                  <p className="text-[10px] text-muted">{story.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

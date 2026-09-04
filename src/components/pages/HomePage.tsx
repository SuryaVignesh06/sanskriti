import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { HeroSection } from '@/components/HeroSection';
import {
  STORY_ARTICLES
} from '@/lib/sanskritiData';
import {
  ArrowRight,
  MapPin,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const [selectedMonth, setSelectedMonth] = useState('MAR');

  // Exactly 5 Category Cards from Reference Image - horizontal scroll row
  const categories = [
    { name: 'Festivals', subtitle: 'Live the celebrations', icon: '🎉', image: '/images/ill_category_festivals.jpg' },
    { name: 'Food', subtitle: 'Cook. Learn. Taste.', icon: '🍛', image: '/images/ill_category_food.jpg' },
    { name: 'Culture & Traditions', subtitle: 'Stories that live on.', icon: '🪔', image: '/images/ill_category_traditions.jpg' },
    { name: 'Art & Craft', subtitle: 'Meet the artisans', icon: '🎨', image: '/images/ill_category_crafts.jpg' },
    { name: 'Heritage', subtitle: 'Walk through history', icon: '🏛️', image: '/images/ill_category_locallife.jpg' },
  ];

  // 5 Destination Cards from Reference Image - horizontal row
  const destinations = [
    { name: 'Jaipur', tag: 'Royal Heritage', state: 'Rajasthan', image: '/images/ill_hero_home.jpg' },
    { name: 'Varanasi', tag: 'Spiritual Soul', state: 'Uttar Pradesh', image: '/images/ill_category_traditions.jpg' },
    { name: 'Rishikesh', tag: 'Nature & Wellness', state: 'Uttarakhand', image: '/images/ill_category_music.jpg' },
    { name: 'Agra', tag: 'Timeless Love', state: 'Uttar Pradesh', image: '/images/ill_category_locallife.jpg' },
    { name: 'Kerala', tag: 'Backwaters & Beyond', state: 'Kerala', image: '/images/ill_category_crafts.jpg' },
  ];

  // Festival Calendar months from reference image
  const festivalMonths = [
    { code: 'JAN', name: 'Pongal' },
    { code: 'MAR', name: 'Holi' },
    { code: 'APR', name: 'Baisakhi' },
    { code: 'AUG', name: 'Onam' },
    { code: 'OCT', name: 'Navratri' },
    { code: 'NOV', name: 'Diwali' },
  ];

  return (
    <div className="bg-background text-foreground font-paragraph">

      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: EXPERIENCES THAT STAY WITH YOU */}
      {/* Layout: Left text panel + Right 5-card horizontal scrollable row */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10">

          {/* Left Text Panel */}
          <div className="lg:w-80 shrink-0 space-y-5">
            <span className="font-heading text-xs text-[#D98C22] tracking-[0.28em] uppercase font-bold block">
              EXPLORE
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-foreground font-bold leading-[1.05]">
              EXPERIENCES<br />THAT STAY<br />WITH YOU
            </h2>
            <p className="font-paragraph text-sm text-muted-dark leading-relaxed max-w-xs">
              From vibrant festivals to timeless traditions, discover a more authentic India with local Cultural Ambassadors.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center px-6 py-3.5 bg-[#F4B93A] hover:bg-[#D98C22] text-[#111111] font-heading text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all space-x-2 group"
            >
              <span>Explore Experiences</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: 5 Category Cards in a horizontal scrollable row */}
          <div className="flex-1 overflow-x-auto pb-2">
            <div className="flex gap-5 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={`/explore?category=${encodeURIComponent(cat.name)}`}
                  className="group flex-shrink-0 w-[170px] lg:w-auto bg-white border border-[#E7E5DF] rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 flex flex-col"
                >
                  {/* Square image */}
                  <div className="h-[140px] w-full overflow-hidden bg-[#F5F4F0] relative">
                    <SafeImage
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                  </div>
                  {/* Text Panel */}
                  <div className="p-3.5 space-y-1 flex-1 flex flex-col justify-between">
                    <h3 className="font-heading text-base font-bold text-foreground leading-tight group-hover:text-[#D98C22] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="font-paragraph text-[10px] text-muted-dark leading-snug">
                      {cat.subtitle}
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#E7E5DF] text-muted-dark group-hover:bg-[#F4B93A] group-hover:border-[#F4B93A] group-hover:text-white transition-all">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: ICONIC PLACES REAL STORIES */}
      {/* Layout: Left text panel + Right 5-card horizontal scrollable destination row */}
      <section className="py-20 bg-[#F5F4F0] border-y border-[#E7E5DF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10">

            {/* Left Text Panel */}
            <div className="lg:w-80 shrink-0 space-y-5">
              <span className="font-heading text-xs text-[#D98C22] tracking-[0.28em] uppercase font-bold block">
                POPULAR DESTINATIONS
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground font-bold leading-[1.05]">
                ICONIC PLACES<br />REAL STORIES
              </h2>
              <p className="font-paragraph text-sm text-muted-dark leading-relaxed max-w-xs">
                Explore India's most loved destinations through authentic local experiences.
              </p>
              <Link
                to="/explore"
                className="inline-flex items-center px-6 py-3.5 bg-[#111111] hover:bg-[#F4B93A] text-white hover:text-[#111111] font-heading text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all space-x-2 group"
              >
                <span>View All Destinations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: 5 Destination Cards */}
            <div className="flex-1 overflow-x-auto pb-2">
              <div className="flex gap-5 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5">
                {destinations.map((dest) => (
                  <Link
                    key={dest.name}
                    to="/explore"
                    className="group flex-shrink-0 w-[170px] lg:w-auto bg-white border border-[#E7E5DF] rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 flex flex-col"
                  >
                    {/* Image */}
                    <div className="h-[140px] w-full overflow-hidden relative">
                      <SafeImage
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center space-x-1 border border-[#E7E5DF] shadow-sm">
                        <MapPin className="w-2.5 h-2.5 text-[#F4B93A]" />
                        <span className="text-foreground">{dest.state}</span>
                      </div>
                    </div>
                    {/* Text Panel */}
                    <div className="p-3.5 space-y-1 flex-1">
                      <h3 className="font-samarkan text-2xl text-foreground font-normal tracking-wide leading-tight group-hover:text-[#D98C22] transition-colors">
                        {dest.name}
                      </h3>
                      <p className="font-paragraph text-[10px] text-muted-dark">
                        {dest.tag}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: FESTIVAL FEATURE BANNER - HOLI IN JAIPUR + PLAN AROUND INDIA'S FESTIVALS */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-7 items-stretch">

          {/* LEFT: NEXT FESTIVAL - HOLI IN JAIPUR (Warm Yellow Card with Dhol Player Illustration) */}
          <div className="bg-[#F9D874] border border-[#E2B73A] rounded-[32px] p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between min-h-[440px] shadow-md">

            {/* Dhol Player PNG Illustration – right side overlay */}
            <img
              src="/images/ill_holi_dhol.png"
              alt="Holi Dhol Player"
              className="absolute right-0 bottom-0 h-full w-auto max-w-[55%] object-contain object-right-bottom pointer-events-none select-none"
            />

            {/* Text Content */}
            <div className="space-y-4 relative z-10 max-w-[55%]">
              <span className="font-heading text-[10px] text-[#5A4305] tracking-[0.3em] uppercase font-bold block">
                NEXT FESTIVAL
              </span>
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-[#111111] font-bold leading-[0.9]">
                HOLI<br />IN JAIPUR
              </h2>
              <p className="font-paragraph text-sm text-[#4A3B0F] leading-relaxed font-medium">
                Colors, culture, and community. Celebrate Holi with local families in the royal city.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <Link
                to="/festivals"
                className="inline-flex items-center px-7 py-3.5 bg-[#111111] hover:bg-black text-white font-heading text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md space-x-2 group"
              >
                <span>View Experiences</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT: FESTIVAL CALENDAR - PLAN AROUND INDIA'S FESTIVALS */}
          <div className="bg-white border border-[#E7E5DF] rounded-[32px] p-8 lg:p-12 flex flex-col justify-between min-h-[440px] shadow-md relative overflow-hidden">

            {/* Faint Taj Mahal Illustration */}
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 w-[45%] h-[70%] opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url('${import.meta.env.BASE_URL}images/ill_india_skyline.jpg')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center right',
                backgroundRepeat: 'no-repeat',
              }}
            />

            <div className="space-y-3 relative z-10">
              <span className="font-heading text-[10px] text-[#D98C22] tracking-[0.3em] uppercase font-bold block">
                FESTIVAL CALENDAR
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold leading-tight">
                PLAN AROUND<br />INDIA'S FESTIVALS
              </h2>
              <p className="font-paragraph text-sm text-muted-dark leading-relaxed">
                Discover unique experiences all year round.
              </p>
            </div>

            {/* Month Pills */}
            <div className="grid grid-cols-6 gap-2 relative z-10 py-4">
              {festivalMonths.map((m) => (
                <button
                  key={m.code}
                  onClick={() => setSelectedMonth(m.code)}
                  className={`py-3 px-1 rounded-2xl flex flex-col items-center justify-center transition-all border text-center ${
                    selectedMonth === m.code
                      ? 'bg-[#F4B93A] border-[#F4B93A] text-[#111111] font-bold shadow-sm scale-105'
                      : 'bg-[#F5F4F0] border-[#E7E5DF] text-muted-dark hover:border-foreground'
                  }`}
                >
                  <span className="font-heading text-xs font-bold tracking-wide">{m.code}</span>
                  <span className="font-paragraph text-[9px] opacity-85 mt-0.5 leading-tight">{m.name}</span>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E7E5DF] relative z-10">
              <Link
                to="/festivals"
                className="inline-flex items-center text-xs font-bold font-heading uppercase tracking-wider text-foreground hover:text-[#D98C22] transition-colors space-x-2 group"
              >
                <span>View Full Calendar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: INDIA THROUGH REAL PEOPLE - Stories */}
      {/* Layout: Left text + Right 3 story cards in a row */}
      <section className="py-20 bg-[#F5F4F0]/50 border-t border-[#E7E5DF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10">

            {/* Left Text Panel */}
            <div className="lg:w-72 shrink-0 space-y-5">
              <span className="font-heading text-xs text-[#D98C22] tracking-[0.28em] uppercase font-bold block">
                STORIES
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground font-bold leading-[1.05]">
                INDIA THROUGH<br />REAL PEOPLE
              </h2>
              <p className="font-paragraph text-sm text-muted-dark leading-relaxed max-w-xs">
                Travel stories, cultural insights, and the people keeping traditions alive.
              </p>
              <Link
                to="/stories"
                className="inline-flex items-center px-6 py-3.5 bg-white hover:bg-[#F5F4F0] border border-[#E7E5DF] text-foreground font-heading text-xs font-bold uppercase tracking-wider rounded-full transition-all space-x-2 group shadow-sm"
              >
                <span>Read Stories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: 3 Story Cards */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {STORY_ARTICLES.slice(0, 3).map((story) => (
                  <div
                    key={story.id}
                    className="bg-white border border-[#E7E5DF] rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
                  >
                    {/* Image */}
                    <div className="h-48 w-full overflow-hidden border-b border-[#E7E5DF]/60 relative">
                      <SafeImage
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#F4B93A] text-[#111111] px-2.5 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider shadow-sm">
                        {story.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <span className="font-paragraph text-[10px] font-bold text-muted-dark uppercase tracking-wider">
                          {story.readTime}
                        </span>
                        <h3 className="font-heading text-lg font-bold text-foreground leading-tight">
                          <Link to="/stories" className="hover:text-[#D98C22] transition-colors">
                            {story.title}
                          </Link>
                        </h3>
                        <p className="font-paragraph text-[11px] text-muted-dark leading-relaxed line-clamp-2">
                          {story.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E7E5DF]/60">
                        <Link
                          to="/stories"
                          className="inline-flex items-center text-xs font-bold font-heading uppercase tracking-wider text-foreground hover:text-[#D98C22] transition-colors space-x-1.5 group"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
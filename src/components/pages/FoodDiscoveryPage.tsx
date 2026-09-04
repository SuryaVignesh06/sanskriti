import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { INDIAN_STATES } from '@/lib/sanskritiData';
import { Search, MapPin, ExternalLink, Utensils, Sparkles, Filter, X } from 'lucide-react';

interface IndianDish {
  id: string;
  name: string;
  stateKey: string;
  stateName: string;
  category: 'Vegetarian' | 'Street Food' | 'Royal Feast' | 'Desserts & Sweets' | 'Seafood';
  description: string;
  culturalStory: string;
  bestCityToTry: string;
  image: string;
}

const INDIAN_DISHES: IndianDish[] = [
  {
    id: 'dal-baati-churma',
    name: 'Dal Baati Churma',
    stateKey: 'rajasthan',
    stateName: 'Rajasthan',
    category: 'Royal Feast',
    description: 'Baked wheat balls soaked in pure ghee, served with Panchmel spicy lentil curry and sweet crushed wheat churma.',
    culturalStory: 'Originating as battlefield rations for Rajput soldiers that could stay fresh in the Thar desert heat for days.',
    bestCityToTry: 'Jaipur & Jodhpur',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'hyderabadi-biryani',
    name: 'Hyderabadi Dum Biryani',
    stateKey: 'telangana',
    stateName: 'Telangana',
    category: 'Royal Feast',
    description: 'Fragrant basmati rice cooked on slow dum steam with rich spices, saffron, and tender marinated meats.',
    culturalStory: 'Perfected in the royal kitchens of the Nizams of Hyderabad, blending Mughal and Andhra culinary traditions.',
    bestCityToTry: 'Hyderabad Old City',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'kerala-sadya',
    name: 'Kerala Sadya',
    stateKey: 'kerala',
    stateName: 'Kerala',
    category: 'Vegetarian',
    description: 'Grand vegetarian feast of 24–28 dishes served on a fresh plantain leaf during Onam and celebrations.',
    culturalStory: 'Reflects Ayurvedic principles of balancing six tastes (Shadrasa) for health and community harmony.',
    bestCityToTry: 'Thrissur & Kochi',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'litti-chokha',
    name: 'Litti Chokha',
    stateKey: 'bihar',
    stateName: 'Bihar',
    category: 'Street Food',
    description: 'Whole wheat dough balls stuffed with spiced roasted sattu (gram flour), roasted over cow-dung fire and dipped in ghee.',
    culturalStory: 'Ancient staple of Magadha empire farmers and warriors, nourishing generations with high protein.',
    bestCityToTry: 'Patna & Gaya',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'vada-pav',
    name: 'Mumbai Vada Pav',
    stateKey: 'maharashtra',
    stateName: 'Maharashtra',
    category: 'Street Food',
    description: 'Deep-fried spiced potato dumpling inside a sliced soft bun with spicy garlic & green chutneys.',
    culturalStory: 'Invented in 1966 outside Dadar railway station as affordable nourishment for textile mill workers.',
    bestCityToTry: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rasgulla',
    name: 'Bengal Rasgulla & Sandesh',
    stateKey: 'west-bengal',
    stateName: 'West Bengal',
    category: 'Desserts & Sweets',
    description: 'Spongy cottage cheese spheres simmered in light sugar syrup, along with melt-in-mouth Nolen Gur Sandesh.',
    culturalStory: 'Perfected in 1868 by Nobin Chandra Das in Kolkata, becoming an icon of Bengali festive hospitality.',
    bestCityToTry: 'Kolkata',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'goan-fish-curry',
    name: 'Goan Fish Curry Rice',
    stateKey: 'goa',
    stateName: 'Goa',
    category: 'Seafood',
    description: 'Fresh kingfish cooked in a tangy coconut, kokum, and red chili gravy served with steamed rice.',
    culturalStory: 'A daily ritual in every Konkani home, reflecting centuries of coastal maritime living.',
    bestCityToTry: 'Panaji & Margao',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'amritsari-kulcha',
    name: 'Amritsari Stuffed Kulcha',
    stateKey: 'punjab',
    stateName: 'Punjab',
    category: 'Street Food',
    description: 'Crispy clay-oven tandoor bread stuffed with spiced mashed potatoes, served with tangy chole & butter.',
    culturalStory: 'Baked in traditional tandoors using heirloom dough techniques passed down through generations of Punjabi chefs.',
    bestCityToTry: 'Amritsar',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop'
  }
];

export default function FoodDiscoveryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Vegetarian', 'Street Food', 'Royal Feast', 'Desserts & Sweets', 'Seafood'];

  const filteredDishes = useMemo(() => {
    return INDIAN_DISHES.filter((d) => {
      const matchesSearch =
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.stateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.bestCityToTry.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = selectedCategory === 'All' || d.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="inline-flex items-center space-x-2 px-3 py-1 bg-accent/20 text-accent-dark rounded-full text-xs font-bold uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5" />
            <span>CUISINE ATLAS OF INDIA</span>
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl text-foreground">FLAVORS OF THE SUB-CONTINENT</h1>
          <p className="font-paragraph text-muted text-base">
            From royal feast recipes preserved in fort kitchens to vibrant street stalls — explore India's regional food heritage and where to taste them.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-surface border border-secondary p-6 rounded-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-2 gap-2 justify-start no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl font-heading text-xs sm:text-sm tracking-wider transition-all border shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-accent border-accent text-foreground font-bold shadow-sm'
                    : 'bg-background border-secondary text-muted hover:border-foreground'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dish or city..."
              className="w-full pl-10 pr-8 py-2.5 bg-background border border-secondary rounded-xl font-paragraph text-xs text-foreground focus:outline-none focus:border-accent"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="bg-surface border border-secondary rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-56">
                <SafeImage src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {dish.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-md text-[11px] font-bold">
                  {dish.stateName}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl text-foreground">{dish.name}</h3>
                  <p className="text-xs text-muted leading-relaxed">{dish.description}</p>
                </div>

                {/* Cultural Story Accent */}
                <div className="p-3.5 bg-background border border-secondary rounded-xl space-y-1">
                  <span className="text-[10px] font-bold text-accent-dark uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> CULTURAL ORIGIN
                  </span>
                  <p className="text-xs text-muted italic leading-relaxed">"{dish.culturalStory}"</p>
                </div>

                {/* Footer with Google Maps Action */}
                <div className="pt-4 border-t border-secondary flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent-dark mr-1" />
                    <span>Best in: <strong className="text-foreground">{dish.bestCityToTry}</strong></span>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dish.name + ' in ' + dish.bestCityToTry + ', India')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-accent hover:bg-accent-hover text-foreground font-heading text-xs font-bold rounded-lg transition-all inline-flex items-center space-x-1"
                    title={`Find best ${dish.name} spots on Google Maps`}
                  >
                    <span>FIND SPOTS</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

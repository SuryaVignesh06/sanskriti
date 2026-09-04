import { useParams, Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { INDIAN_STATES, CULTURAL_EXPERIENCES, FESTIVALS_LIST } from '@/lib/sanskritiData';
import { MapPin, ArrowLeft, ArrowRight, Sparkles, Compass, Utensils, Music, ExternalLink } from 'lucide-react';

interface RegionMeta {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  bannerImage: string;
  statesIncluded: string[];
  keyHighlights: string[];
}

const REGION_DATA: Record<string, RegionMeta> = {
  north: {
    name: 'North India',
    slug: 'north',
    tagline: 'Land of High Himalayas, Holy Rivers & Royal Palaces',
    description: 'Home to the Golden Temple of Amritsar, Braj Holi of Vrindavan, Kathak classical dance, Awadhi biryani, and the majestic forts of Rajasthan.',
    bannerImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop',
    statesIncluded: ['Rajasthan', 'Uttar Pradesh', 'Punjab', 'Himachal Pradesh', 'Uttarakhand', 'Haryana'],
    keyHighlights: ['Bhakti Movement Shrines', 'Mughal & Rajput Fort Architecture', 'Kathak Classical Dance', 'High Mountain Monasteries']
  },
  south: {
    name: 'South India',
    slug: 'south',
    tagline: 'Cradle of Dravidian Temples, Classical Arts & Tropical Spice',
    description: 'Famed for monumental stone gopurams of Tamil Nadu, Kathakali and backwaters of Kerala, Mysore silk, Carnatic ragas, and coconut-infused culinary masterpieces.',
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop',
    statesIncluded: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'],
    keyHighlights: ['Dravidian Temple Architecture', 'Bharatanatyam & Kuchipudi', 'Carnatic Music Tradition', 'Banana Leaf Sadya Feasts']
  },
  east: {
    name: 'East India',
    slug: 'east',
    tagline: 'Realm of Literary Greats, Sacred Ghats & Silk Weavers',
    description: 'Celebrated for Kolkata Durga Puja, Puri Ratha Yatra, Odissi classical dance, Madhubani folk art, and the spiritual roots of Buddhism & Jainism.',
    bannerImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1600&auto=format&fit=crop',
    statesIncluded: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand'],
    keyHighlights: ['Durga Puja Art Pandals', 'Odissi Classical Dance', 'Madhubani & Pattachitra Art', 'Sweetmaking Culinary Mastery']
  },
  west: {
    name: 'West India',
    slug: 'west',
    tagline: 'Vibrant Colors of Garba, Maratha Forts & Coastal Sunshine',
    description: 'Encompassing the Maratha warrior legacy of Maharashtra, 9-night Navratri Garba of Gujarat, Shigmo of Goa, and Warli indigenous art.',
    bannerImage: 'https://images.unsplash.com/photo-1609946727702-86103328e188?q=80&w=1600&auto=format&fit=crop',
    statesIncluded: ['Maharashtra', 'Gujarat', 'Goa'],
    keyHighlights: ['Navratri Garba & Dandiya Raas', 'Ganesh Chaturthi Celebrations', 'Ajanta & Ellora Cave Sculptures', 'Konkani Coastal Cuisine']
  },
  central: {
    name: 'Central India',
    slug: 'central',
    tagline: 'Heart of India — Ancient Cave Murals & Tribal Bell-Metal Art',
    description: 'The ancient heartland featuring Sanchi Stupas, Khajuraho stone carvings, Ujjain Kumbh Mela, Gond tribal paintings, and 75-day Bastar Dussehra.',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010e620a8ca?q=80&w=1600&auto=format&fit=crop',
    statesIncluded: ['Madhya Pradesh', 'Chhattisgarh'],
    keyHighlights: ['Bhimbetka Prehistoric Cave Art', 'Khajuraho UNESCO Sculpture', 'Bastar Dhokra Metalwork', 'Poha & Dal Bafla Flavors']
  },
  'north-east': {
    name: 'North East India',
    slug: 'north-east',
    tagline: 'Seven Sisters & Sikkim — Living Root Bridges & Hornbill Rhythms',
    description: 'Pristine mountain realm of Bihu dance, Naga tribal warriors, Manipuri Raas Leela, golden Muga silk, and living root bridges of Meghalaya.',
    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    statesIncluded: ['Assam', 'Meghalaya', 'Nagaland', 'Manipur', 'Mizoram', 'Tripura', 'Arunachal Pradesh', 'Sikkim'],
    keyHighlights: ['Hornbill Festival Rhythms', 'Bihu & Sattriya Classical Dance', 'Indigenous Tribal Weaving', 'Living Root Bridges']
  }
};

export default function RegionPage() {
  const { slug } = useParams<{ slug: string }>();
  const regionKey = (slug || 'north').toLowerCase();
  const region = REGION_DATA[regionKey] || REGION_DATA['north'];

  // Filter states by region
  const regionStates = INDIAN_STATES.filter((s) =>
    region.statesIncluded.some((name) => name.toLowerCase() === s.name.toLowerCase()) ||
    s.region.toLowerCase().replace(/\s+/g, '-') === regionKey
  );

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen pb-24">
      {/* Top Breadcrumb */}
      <div className="bg-surface border-b border-secondary py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center space-x-2 text-xs text-muted">
          <Link to="/states" className="hover:text-foreground flex items-center">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> All Regions
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{region.name}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden bg-accent text-foreground">
        <SafeImage src={region.bannerImage} alt={region.name} className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pb-12 w-full space-y-3">
          <span className="px-3 py-1 bg-accent text-foreground text-xs font-bold uppercase rounded-full">
            CULTURAL REGION · {regionStates.length} STATES & UTs
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-background tracking-tight">
            {region.name.toUpperCase()}
          </h1>
          <p className="font-paragraph text-accent text-lg sm:text-xl font-semibold max-w-2xl">
            {region.tagline}
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 space-y-16">
        {/* Overview */}
        <div className="p-8 bg-surface border border-secondary rounded-[28px] space-y-4">
          <div className="flex items-center space-x-2 text-accent-dark font-heading text-sm uppercase">
            <Sparkles className="w-4 h-4" />
            <span>REGIONAL CULTURAL IDENTITY</span>
          </div>
          <p className="font-paragraph text-base text-foreground leading-relaxed">
            {region.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {region.keyHighlights.map((hl) => (
              <span key={hl} className="px-3.5 py-1.5 bg-background border border-secondary rounded-full text-xs font-semibold text-foreground">
                ✨ {hl}
              </span>
            ))}
          </div>
        </div>

        {/* States in this region */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">MEMBER STATES</span>
              <h2 className="font-heading text-4xl text-foreground">STATES OF {region.name.toUpperCase()}</h2>
            </div>
            <Link to="/explore-india" className="text-xs font-bold text-foreground hover:text-accent-dark flex items-center">
              <span>VIEW INTERACTIVE MAP</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {regionStates.map((st) => (
              <Link
                key={st.key}
                to={`/state/${st.key}`}
                className="group bg-surface border border-secondary rounded-[24px] overflow-hidden hover:border-foreground shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <SafeImage src={st.image} alt={st.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-foreground px-2.5 py-0.5 rounded text-[10px] font-bold uppercase">
                    CAPITAL: {st.capital}
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-2xl text-foreground group-hover:text-accent-dark transition-colors">
                      {st.name}
                    </h3>
                    <p className="text-xs text-muted line-clamp-2 leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-secondary flex items-center justify-between text-xs font-bold text-foreground">
                    <span>EXPLORE CULTURE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

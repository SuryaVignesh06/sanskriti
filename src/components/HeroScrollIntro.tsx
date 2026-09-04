import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { SafeImage } from '@/components/ui/SafeImage';

export function HeroScrollIntro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Buttery smooth spring inertia for scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    restDelta: 0.001
  });

  // Scale of the "INDIA" text mask: 1 to 45 (zooming through the text mask)
  const indiaScale = useTransform(smoothProgress, [0, 0.45], [1, 45]);
  
  // Opacity of initial UI annotations: Fades out smoothly early as scroll begins
  const initialElementsOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  
  // Opacity of "INDIA" text mask: Fades out smoothly as zoom completes
  const textMaskOpacity = useTransform(smoothProgress, [0.25, 0.45], [1, 0]);
  
  // Opacity of the background image full reveal: 0 -> 1
  const bgImageOpacity = useTransform(smoothProgress, [0.2, 0.48], [0, 1]);
  
  // Scale of the hero image container
  const bgImageScale = useTransform(smoothProgress, [0.25, 0.65], [1.15, 1]);
  
  // Border radius of the hero image card
  const bgCardRadius = useTransform(smoothProgress, [0.35, 0.58], ['0px', '36px']);

  // Matter & Content animations (3-4 lines reveal on scroll)
  const contentY = useTransform(smoothProgress, [0.42, 0.72], [80, 0]);
  const contentOpacity = useTransform(smoothProgress, [0.42, 0.68], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[270vh] bg-background">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Layer 1: Initial State Matching Reference Image Exactly */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between items-center pointer-events-none select-none p-6 md:p-12 bg-background">
          
          {/* Top Subtitle */}
          <motion.div 
            style={{ opacity: initialElementsOpacity }}
            className="pt-16 font-heading text-sm md:text-base tracking-[0.45em] uppercase text-muted-dark font-semibold text-center"
          >
            DISCOVER THE REAL
          </motion.div>

          {/* Center Component: Giant "INDIA" Text Mask with Image Fill */}
          <div className="relative w-full max-w-[1440px] my-auto flex items-center justify-center">
            
            {/* Left side annotation */}
            <motion.div 
              style={{ opacity: initialElementsOpacity }}
              className="hidden lg:flex items-center space-x-3 absolute left-4 text-left"
            >
              <div className="w-0.5 h-12 bg-accent" />
              <div className="font-heading text-xs uppercase tracking-widest leading-snug text-muted-dark max-w-[110px]">
                NOT JUST A PLACE, A FEELING
              </div>
            </motion.div>

            {/* Main "INDIA" Giant Text */}
            <motion.div 
              style={{ opacity: textMaskOpacity, scale: indiaScale }}
              className="w-full flex justify-center items-center transform-gpu"
            >
              <div 
                className="font-heading text-[20vw] sm:text-[24vw] lg:text-[26vw] font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text text-center select-none"
                style={{
                  backgroundImage: `url(`\${import.meta.env.BASE_URL}images/ill_hero_home.jpg')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.12))'
                }}
              >
                INDIA
              </div>
            </motion.div>

            {/* Right side vertical list */}
            <motion.div 
              style={{ opacity: initialElementsOpacity }}
              className="hidden lg:flex flex-col space-y-2 absolute right-4 text-right font-heading text-xs tracking-widest text-muted-dark font-semibold uppercase"
            >
              <span>PEOPLE</span>
              <span>CULTURE</span>
              <span>FESTIVALS</span>
              <span>STORIES</span>
              <span>BEYOND TRAVEL</span>
            </motion.div>

          </div>

          {/* Bottom Center Tagline & CTA Pill + Scroll Indicator */}
          <motion.div 
            style={{ opacity: initialElementsOpacity }}
            className="w-full max-w-6xl pb-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          >
            <div className="hidden md:block w-32" />
            
            <div className="flex flex-col items-center space-y-3">
              <span className="font-paragraph text-sm md:text-base text-muted-dark font-medium">
                Authentic experiences. Real people. A deeper journey.
              </span>
              <Link
                to="/explore"
                className="pointer-events-auto px-8 py-3.5 bg-accent hover:bg-accent-dark text-foreground font-heading text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all flex items-center space-x-2 group"
              >
                <span>Start Exploring</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center space-x-2 text-muted-dark font-heading text-xs tracking-widest uppercase">
              <div className="w-5 h-8 border-2 border-muted-dark/40 rounded-full flex justify-center p-1">
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  className="w-1 h-2 bg-accent-dark rounded-full"
                />
              </div>
              <span className="hidden sm:inline">SCROLL TO EXPLORE</span>
            </div>
          </motion.div>

        </div>

        {/* Layer 2: Fully Revealed Hero Section (3-4 lines of matter revealed on scroll) */}
        <motion.div 
          style={{ opacity: bgImageOpacity }}
          className="absolute inset-0 z-10 w-full h-full flex items-center justify-center p-4 sm:p-8 lg:p-12"
        >
          {/* Main Hero Card Layout */}
          <div className="max-w-[1440px] w-full h-full max-h-[85vh] grid lg:grid-cols-12 gap-8 items-center relative rounded-[36px] overflow-hidden border border-secondary bg-surface/95 backdrop-blur-md shadow-xl p-6 sm:p-10 lg:p-14">
            
            {/* Left Content Side: Matter Revealed On Scroll */}
            <motion.div 
              style={{ y: contentY, opacity: contentOpacity }}
              className="lg:col-span-7 space-y-6 z-20"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-accent/25 text-foreground rounded-full text-xs font-heading font-bold uppercase tracking-widest border border-accent/40">
                <Sparkles className="w-4 h-4 text-accent-dark" />
                <span>Authentic Cultural Operating System</span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground leading-[0.92]">
                DISCOVER THE<br />
                LIVING HERITAGE OF<br />
                <span className="text-accent-dark underline decoration-accent/40 underline-offset-8">INDIA</span>
              </h1>

              {/* 3 to 4 lines of matter / description */}
              <p className="font-paragraph text-base sm:text-lg lg:text-xl text-secondary-foreground leading-relaxed max-w-xl">
                Step beyond ordinary travel into authentic, living cultural experiences. Connect directly with master artisans, local storytellers, and ancient traditions preserved across generations in 28 vibrant states.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/explore"
                  className="px-8 py-4 bg-foreground hover:bg-accent text-background hover:text-foreground font-heading text-sm font-bold tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center space-x-2 group"
                >
                  <span>EXPLORE EXPERIENCES</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/about"
                  className="px-8 py-4 border-2 border-foreground/20 hover:border-foreground text-foreground font-heading text-sm font-bold tracking-wider rounded-xl transition-all flex items-center space-x-2"
                >
                  <Compass className="w-4 h-4 text-accent-dark" />
                  <span>HOW IT WORKS</span>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-dark border-t border-secondary/60">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-accent-dark" />
                  <span>100% Local Verified Custodians</span>
                </div>
                <span>•</span>
                <div>28 States & UTs</div>
                <span>•</span>
                <div>Direct Artisan Support</div>
              </div>
            </motion.div>

            {/* Right Side: Editorial Image Card */}
            <motion.div 
              style={{ scale: bgImageScale, borderRadius: bgCardRadius }}
              className="lg:col-span-5 h-[300px] lg:h-full w-full relative overflow-hidden shadow-lg border border-secondary"
            >
              <SafeImage
                src="/images/ill_hero_home.jpg"
                alt="Indian Cultural Heritage"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-4 rounded-2xl border border-secondary/80 flex items-center justify-between">
                <div>
                  <div className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">Living Traditions</div>
                  <div className="font-paragraph text-xs text-muted-dark">Handcrafted by Master Artisans</div>
                </div>
                <div className="px-3 py-1 bg-accent text-foreground text-xs font-heading font-bold rounded-lg uppercase">
                  Explore
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

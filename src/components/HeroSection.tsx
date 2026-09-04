import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Smooth auto-scroll marquee animation using requestAnimationFrame
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let pos = 0;
    let animId: number;
    const speed = 0.6; // px per frame

    const tick = () => {
      pos += speed;
      // Reset when first child (half the content) has scrolled through
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(-${pos}px)`;
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative bg-background overflow-hidden pt-10 pb-0 lg:pt-16">

      {/* Full-bleed Background Cultural Line Art Illustration covering the Hero Section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-20 z-0 flex items-center justify-center [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_88%,transparent_100%)]">
        <img
          src="/images/ill_india_line_art.png"
          alt="India Cultural Line Art Illustration"
          className="w-full h-full object-cover scale-105 min-h-[450px]"
        />
      </div>

      {/* Top Gradient Fade to make Floating Navbar stand out cleanly */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background via-background/80 to-transparent z-1 pointer-events-none" />

      {/* Bottom Gradient Fade to transition smoothly into the Marquee Ticker */}
      <div className="absolute bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent z-1 pointer-events-none" />

      {/* === TOP EYEBROW LABEL === */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-4">
        <span className="font-heading text-[10px] sm:text-xs tracking-[0.55em] uppercase text-muted-dark font-semibold">
          DISCOVER THE REAL
        </span>
      </div>

      {/* === GIANT "India" CENTERPIECE WITH THREE-COLOR TIRANGA GRADIENT + HERO ILLUSTRATION BACKGROUND === */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-center overflow-visible py-4">

        {/* Left annotation */}
        <div className="hidden lg:flex items-center space-x-3 absolute left-8 top-1/2 -translate-y-1/2 z-20">
          <div className="w-px h-14 bg-[#F4B93A]" />
          <div className="font-heading text-[10px] uppercase tracking-[0.22em] leading-snug text-muted-dark max-w-[120px]">
            NOT JUST A PLACE, A FEELING
          </div>
        </div>

        {/* Giant "India" text — pure 3-color animated Tiranga gradient inside */}
        <div className="w-full flex justify-center items-center select-none py-0 overflow-visible z-10">
          <h1 className="india-hero-text font-samarkan font-normal text-center leading-none py-6 overflow-visible">
            India
          </h1>
        </div>

        {/* Right vertical keywords */}
        <div className="hidden lg:flex flex-col space-y-2 absolute right-8 top-1/2 -translate-y-1/2 text-right font-heading text-[10px] tracking-[0.25em] text-muted-dark font-bold uppercase z-20">
          <span>PEOPLE</span>
          <span>CULTURE</span>
          <span>FESTIVALS</span>
          <span>STORIES</span>
          <span>BEYOND TRAVEL</span>
        </div>
      </div>

      {/* === BOTTOM: Tagline + CTA button === */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 mt-4 mb-8 flex flex-col items-center justify-center text-center space-y-4">
        <p className="font-paragraph text-sm sm:text-base text-muted-dark font-medium max-w-md">
          Authentic experiences. Real people. A deeper journey into India.
        </p>
        <Link
          to="/explore"
          className="px-9 py-4 bg-[#F4B93A] hover:bg-[#D98C22] text-[#111111] font-heading text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all flex items-center space-x-2 group"
        >
          <span>Start Exploring</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* === MARQUEE TICKER: SANSKRITI ✦ INDIA ✦ CULTURE === */}
      <div className="w-full overflow-hidden border-t border-[#E7E5DF] bg-background py-4">
        <div className="flex whitespace-nowrap" ref={marqueeRef} style={{ willChange: 'transform' }}>
          {/* Duplicate text for seamless loop */}
          {[0, 1].map((i) => (
            <span key={i} className="flex items-center shrink-0">
              {[
                'SANSKRITI', '✦', 'INDIA', '✦', 'CULTURE', '✦',
                'FESTIVALS', '✦', 'HERITAGE', '✦', 'TRADITIONS', '✦',
                'AUTHENTIC TRAVEL', '✦', 'REAL PEOPLE', '✦',
              ].map((word, j) => (
                <span
                  key={j}
                  className={`font-heading font-bold uppercase tracking-[0.18em] mx-3 ${
                    word === '✦'
                      ? 'text-[#F4B93A] text-sm'
                      : 'text-[#111111] text-sm'
                  }`}
                >
                  {word}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}

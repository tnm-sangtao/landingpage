import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { TechTag, AmbientGlow, BentoCard, ScrollReveal, Button, OrbitBloom } from "@/components/shared";
import { RippleSurface } from "@/components/lazy-ui/ripple-surface";
import { motion } from "framer-motion";


function Counter({ end, duration = 2000, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

const features = [
  {
    id: 0,
    tag: "Growth Booster",
    title: "Acquire more guests — no agency needed.",
    desc: "Automate 5-star Google review collection and optimize search visibility on Google Maps to drive a 30% increase in organic guests.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <path d="M16 8l2.5 5h5.5l-4.5 3.5 1.5 5.5L16 19l-5 3 1.5-5.5L8 13h5.5L16 8z" fill="currentColor" opacity="0.8" />
      </svg>
    ),
    gradient: "from-emerald-400/30 to-emerald-600/10",
    accentColor: "text-emerald-400",
    glowColor: "emerald" as const,
    activeBg: "bg-emerald-500/[0.03]",
    activeBorder: "border-emerald-500/20",
    image: "/images/features-growth.png?v=2",
  },
  {
    id: 1,
    tag: "Seamless Experience",
    title: "Digital Menu & QR Reservations.",
    desc: "Guests scan QR to order instantly or reserve tables smoothly, reducing staff workload and increasing table turnover by up to 25%.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="20" y="20" width="2" height="2" fill="currentColor" />
        <rect x="24" y="20" width="2" height="2" fill="currentColor" />
        <rect x="20" y="24" width="2" height="2" fill="currentColor" />
        <rect x="24" y="24" width="2" height="2" fill="currentColor" />
      </svg>
    ),
    gradient: "from-sky-400/30 to-blue-600/10",
    accentColor: "text-sky-400",
    glowColor: "sky" as const,
    activeBg: "bg-sky-500/[0.03]",
    activeBorder: "border-sky-500/20",
    image: "/images/features-qr-menu.png?v=2",
  },
  {
    id: 2,
    tag: "Operational Ease",
    title: "Say goodbye to scheduling chats.",
    desc: "Automated shift planning and lightning-fast facial recognition clock-ins, eliminating manual reminders and saving 4+ hours per day.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="20" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 4V6M21 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 13h12M10 17h8M10 21h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-violet-400/30 to-purple-600/10",
    accentColor: "text-violet-400",
    glowColor: "purple" as const,
    activeBg: "bg-violet-500/[0.03]",
    activeBorder: "border-violet-500/20",
    image: "/images/features-schedule.jpg?v=2",
  },
  {
    id: 3,
    tag: "AI Smart Assistant",
    title: "AI-Optimized Menus & Allergen Detection.",
    desc: "Auto-detect food allergens, translate menus into multiple languages instantly, and suggest combos to boost average order value by 18%.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 14c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="22" r="1" fill="currentColor" />
      </svg>
    ),
    gradient: "from-orange-400/30 to-amber-600/10",
    accentColor: "text-orange-400",
    glowColor: "orange" as const,
    activeBg: "bg-orange-500/[0.03]",
    activeBorder: "border-orange-500/20",
    image: "/images/features-ai-menu.png?v=2",
  },
];

const testimonials = [
  {
    id: 0,
    name: "Minh Tuan",
    role: "Owner of Pho Viet Chain (3 branches)",
    quote: "I used to spend 2 hours every morning planning shifts. Now the system handles it, and I just check my phone.",
    image: "/images/testimonial-1.png?v=2",
    brand: "Pho Viet Chain",
    shortBrand: "PV",
  },
  {
    id: 1,
    name: "Lan Phuong",
    role: "Owner of Café Ambrosia",
    quote: "Our Google reviews jumped from 47 to 203 in just 2 months. We are seeing a massive influx of new organic guests.",
    image: "/images/testimonial-2.png?v=2",
    brand: "Café Ambrosia",
    shortBrand: "CA",
  },
  {
    id: 2,
    name: "Duc Khoa",
    role: "F&B Manager, The Rooftop Bar",
    quote: "AI Menu translates instantly for our international tourists. No more awkward pointing at phones anymore.",
    image: "/images/testimonial-3.png?v=2",
    brand: "The Rooftop Bar",
    shortBrand: "RB",
  },
  {
    id: 3,
    name: "Thanh Dat",
    role: "Founder of Bep Nha Toi",
    quote: "Facial clock-in eliminated buddy punching entirely. Shift reports are instantly generated at the end of the month.",
    image: "/images/testimonial-4.png?v=2",
    brand: "Bep Nha Toi",
    shortBrand: "BNT",
  },
];

const cardVariants: any = {
  active: {
    y: [15, -140, 0],
    x: 0,
    scale: 1,
    rotate: 0,
    zIndex: 30,
    opacity: 1,
    transition: {
      duration: 0.75,
      times: [0, 0.4, 1],
      ease: [0.25, 1, 0.5, 1] as any
    }
  },
  inactive: (id: number) => {
    const stackStyles = [
      { rotate: -6, x: -28, y: -12 },
      { rotate: 4, x: 24, y: 16 },
      { rotate: -3, x: -20, y: 10 },
      { rotate: 5, x: 28, y: -14 }
    ];
    const style = stackStyles[id % stackStyles.length];
    return {
      y: style.y,
      x: style.x,
      rotate: style.rotate,
      scale: 0.95,
      zIndex: 10 + id,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    };
  }
};

const BRAND_LOGOS = [
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="h-10 w-auto text-emerald-500/70 hover:text-emerald-500 transition-colors duration-300" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <text x="28" y="16" fill="currentColor" fontSize="12" fontWeight="bold" letterSpacing="0.08em">aroma</text>
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="h-10 w-auto text-rose-500/70 hover:text-rose-500 transition-colors duration-300" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 12h14M11 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="28" y="16" fill="currentColor" fontSize="12" fontWeight="bold" letterSpacing="0.08em">bistro</text>
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="h-10 w-auto text-amber-500/70 hover:text-amber-500 transition-colors duration-300" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="6" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M10 6v12M4 12h12" stroke="currentColor" strokeWidth="1.5" />
      <text x="26" y="16" fill="currentColor" fontSize="12" fontWeight="bold" letterSpacing="0.08em">cheflog</text>
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="h-10 w-auto text-indigo-500/70 hover:text-indigo-500 transition-colors duration-300" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 18c3-3 5-9 8-9s5 6 8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="7" r="2" fill="currentColor" />
      <text x="28" y="16" fill="currentColor" fontSize="12" fontWeight="bold" letterSpacing="0.08em">dineflow</text>
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="h-10 w-auto text-orange-500/70 hover:text-orange-500 transition-colors duration-300" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 4l7 4v8l-7 4-7-4V8l7-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <text x="28" y="16" fill="currentColor" fontSize="12" fontWeight="bold" letterSpacing="0.08em">eatsy</text>
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="h-10 w-auto text-violet-500/70 hover:text-violet-500 transition-colors duration-300" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <text x="28" y="16" fill="currentColor" fontSize="12" fontWeight="bold" letterSpacing="0.08em">gusto</text>
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="h-10 w-auto text-blue-500/70 hover:text-blue-500 transition-colors duration-300" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="5" width="6" height="14" rx="1.5" fill="currentColor" />
      <rect x="15" y="5" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="15" y="13" width="6" height="6" rx="1.5" fill="currentColor" />
      <text x="28" y="16" fill="currentColor" fontSize="12" fontWeight="bold" letterSpacing="0.08em">hubdine</text>
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="h-10 w-auto text-teal-500/70 hover:text-teal-500 transition-colors duration-300" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="28" y="16" fill="currentColor" fontSize="12" fontWeight="bold" letterSpacing="0.08em">zenith</text>
    </svg>
  )
];

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const activeGlowColor = features.find(f => f.id === activeFeature)?.glowColor || "emerald";
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const [quoteVisible, setQuoteVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuoteVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full text-foreground bg-background">
      {/* 1. Hero Section — Option 4B: Split-layout grid, dot grid + glows */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden hero-dot-bg bg-gradient-to-br from-[#ebf2ed] via-background to-background">
        <AmbientGlow color="emerald" className="top-10 left-10 opacity-20 scale-120 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content Column */}
            <div className="text-left lg:col-span-5">
              <ScrollReveal className="text-left">
                <h1 className="font-extrabold tracking-[-0.03em] text-zinc-900 text-[clamp(2.85rem,5.2vw,4.7rem)] leading-[1.05] max-w-xl">
                  Run your restaurant<br />
                  with zero <span className="text-primary">waste.</span>
                </h1>

                <p className="mt-5 text-[1.05rem] text-zinc-600 max-w-xl leading-relaxed">
                  GastroHub integrates your entire workflow: guest acquisition, automated staff scheduling, and AI menu optimization into one clean control grid.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 justify-start items-center">
                  <Link href="/lien-he">
                    <Button variant="solid" className="px-7 py-3.5 text-[0.95rem] hover:scale-[1.02] active:scale-[0.98] transition-all" data-testid="button-hero-primary">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/tinh-nang">
                    <button
                      className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-zinc-600 hover:text-primary transition-colors duration-200 group"
                      data-testid="button-hero-demo"
                    >
                      Watch Demo
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                    </button>
                  </Link>
                </div>

                {/* Stats row */}
                <div className="mt-12 flex flex-wrap justify-start gap-10">
                  <div data-testid="stat-restaurants">
                    <div className="text-[2rem] font-extrabold text-zinc-900 tracking-tight leading-none">
                      <Counter end={1200} suffix="+" />
                    </div>
                    <div className="text-sm text-zinc-500 mt-1.5">trusted restaurants</div>
                  </div>
                  <div data-testid="stat-growth">
                    <div className="text-[2rem] font-extrabold text-zinc-900 tracking-tight leading-none">
                      <Counter end={32} prefix="+" suffix="%" />
                    </div>
                    <div className="text-sm text-zinc-500 mt-1.5">organic guest growth</div>
                  </div>
                  <div data-testid="stat-time">
                    <div className="text-[2rem] font-extrabold text-zinc-900 tracking-tight leading-none">
                      <Counter end={4} suffix=" hours" />
                    </div>
                    <div className="text-sm text-zinc-500 mt-1.5">saved daily</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image Column */}
            <div className="relative flex justify-center items-center w-full lg:col-span-7">
              <ScrollReveal className="text-center flex justify-center w-full">
                <div className="relative w-full max-w-[640px] lg:max-w-[850px] xl:max-w-[950px] mx-auto z-10 aspect-[4/3] overflow-hidden">
                  {/* Hero Video — native <video> với poster, không flash đen */}
                  <video
                    ref={(el) => {
                      if (el) {
                        el.muted = true;
                        el.loop = true;
                        el.play().catch(() => {});
                      }
                    }}
                    src="https://res.cloudinary.com/doyiwqspw/video/upload/vuongvideo_isibyq.mp4"
                    poster="/images/hero-illustration.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Logo ticker placed outside the grid to span full-width below content */}
          <ScrollReveal className="mt-20 overflow-hidden" data-testid="logo-ticker">
            <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 mb-6 font-bold text-center">
              Trusted by leading culinary brands
            </div>
            <div className="ticker-track mx-auto justify-center">
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((LogoComponent, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  <LogoComponent className="h-10 w-auto" />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Pain-point Section */}
      <section className="bg-zinc-950 text-white pt-16 pb-0 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="object-left">
              <TechTag color="orange">The Challenge</TechTag>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-white">
                Tired of fragmented restaurant tools?
              </h2>
              <p className="mt-4 text-lg text-zinc-400 leading-relaxed max-w-md">
                Broken Excel sheets, buried Zalo chats, and fragmented ordering apps are eating up 4 hours of your day.
              </p>
              {/* Cloudinary Embedded Premium Video Player — borderless, no container */}
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=doyiwqspw&public_id=video12_i7myqq&autoplay=true&loop=true&muted=true&controls=false"
                style={{ aspectRatio: "1 / 1", width: "80%", marginTop: "1.5rem", display: "block" }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                className="opacity-100"
              />
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  id: "01",
                  title: "Lost shifts on Zalo, late staff",
                  desc: "Scheduling updates get lost in hundreds of daily group chat messages.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <circle cx="12" cy="16" r="2" />
                    </svg>
                  )
                },
                {
                  id: "02",
                  title: "Chaotic payroll Excel sheets",
                  desc: "End-of-month reconciliation takes hours and is prone to costly mistakes.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  )
                },
                {
                  id: "03",
                  title: "Missed guest orders",
                  desc: "Paper menus cause bottlenecks during rush hours, leaving guests waiting.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  )
                },
                {
                  id: "04",
                  title: "Untracked revenue insights",
                  desc: "No clear visibility on which dishes sell best or which tables are most profitable.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 6l-9.5 9.5-5-5L1 18" />
                      <path d="M17 6h6v6" />
                    </svg>
                  )
                }
              ].map((card) => (
                <div key={card.id} className="relative bg-gradient-to-r from-violet-950/30 to-transparent p-6 rounded-3xl border border-zinc-800/80 transition-all duration-300 shadow-xl overflow-hidden group hover:from-violet-900/40 hover:to-transparent">
                  {/* Border stroke animation line */}
                  <div 
                    className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-transparent via-violet-500/60 to-transparent bg-[length:200%_100%] bg-[position:150%_0] transition-all duration-1000 ease-out group-hover:bg-[position:-50%_0] pointer-events-none" 
                    style={{ 
                       WebkitMaskImage: 'linear-gradient(#fff, #fff)', 
                       WebkitMaskClip: 'content-box', 
                       maskImage: 'linear-gradient(#fff, #fff)', 
                       maskClip: 'content-box', 
                       padding: '1px' 
                    }} 
                  />
                  {/* Big floating number — solid */}
                  <div className="absolute top-4 left-6 text-[7.5rem] font-black font-mono select-none text-violet-500/25 transition-all duration-300 leading-none group-hover:text-violet-500/45">
                    {card.id}
                  </div>
                  <div className="relative z-10 mt-12">
                    <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 3. Features/Solution Section — Interactive Sticky Illustration */}
      <section className="py-16 bg-background overflow-hidden relative border-t border-zinc-200/60">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <ScrollReveal className="mb-10">
            <TechTag color="orange">The Solution</TechTag>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight max-w-2xl text-zinc-900">
              Four pillars of growth
            </h2>
            <p className="mt-4 text-zinc-600 text-lg max-w-xl">
              Everything your restaurant needs — in one integrated platform.
            </p>
          </ScrollReveal>

          {/* Sticky 2-col layout */}
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">

            {/* Left: Feature List */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              {features.map((f, idx) => {
                const isActive = activeFeature === f.id;
                return (
                  <div
                    key={f.id}
                    onMouseEnter={() => setActiveFeature(f.id)}
                    onClick={() => setActiveFeature(f.id)}
                    className={`
                      group relative p-4 md:py-5 md:px-6 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] rounded-2xl border
                      ${isActive
                        ? `bg-primary/5 border-primary/20 shadow-[0_12px_30px_rgba(0,0,0,0.02)] scale-[1.01]`
                        : "border-transparent opacity-60 hover:opacity-100 hover:bg-zinc-100/50"
                      }
                    `}
                  >
                    {/* Tag + Icon row */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`transition-colors duration-300 ${isActive ? "text-primary" : "text-zinc-500 group-hover:text-zinc-900"}`}>
                        {f.icon}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? "text-primary" : "text-zinc-500"}`}>
                        {f.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-base font-bold leading-snug transition-colors duration-300 ${isActive ? "text-zinc-900" : "text-zinc-700 group-hover:text-zinc-900"}`}>
                      {f.title}
                    </h3>

                    {/* Description — expands smoothly on active */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] ${isActive ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                        }`}
                    >
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Sticky Illustration Panel */}
            <div className="lg:col-span-7 lg:sticky lg:top-24 flex items-center justify-center">
              <div className="relative aspect-[1.4] w-full max-w-[90%] mx-auto flex items-center justify-center">
                {/* Dynamic Ambient Glow behind the image - changes color dynamically according to active tab */}
                <AmbientGlow color={activeGlowColor} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 opacity-40 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.3,1)]" />

                {/* Illustration placeholders — one per feature, cross-fade on active */}
                {features.map((f) => {
                  const isActive = activeFeature === f.id;
                  return (
                    <motion.div
                      key={f.id}
                      custom={f.id}
                      variants={cardVariants}
                      animate={isActive ? "active" : "inactive"}
                      className="absolute inset-0"
                    >
                      {f.image ? (
                        /* Frameless Actual Image with subtle dynamic color shadow and gradient border glow wrapper */
                        <div className="w-full h-full flex items-center justify-center p-4">
                          <div className="relative w-full h-full rounded-3xl overflow-hidden group border border-zinc-200/50 shadow-2xl bg-white p-4">
                            <img
                              src={f.image}
                              alt={f.title}
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          </div>
                        </div>
                      ) : (
                        /* Beautifully framed placeholder card */
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-200/60 bg-white shadow-xl">
                          {/* Gradient background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-20`} />

                          {/* Placeholder content */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-12">
                            {/* Icon badge */}
                            <div className={`w-20 h-20 rounded-2xl bg-white border border-zinc-200/60 flex items-center justify-center shadow-lg ${f.accentColor}`}>
                              {f.icon}
                            </div>
                            {/* Label */}
                            <div className="text-center">
                              <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${f.accentColor}`}>
                                {f.tag}
                              </div>
                              <div className="text-sm text-zinc-600 max-w-[240px] leading-relaxed">
                                Illustration placeholder — replace with your image
                              </div>
                            </div>
                            {/* Decorative dots grid */}
                            <div className="absolute bottom-6 right-6 grid grid-cols-4 gap-1.5 opacity-20">
                              {Array.from({ length: 16 }).map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}

              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Singular Moment */}
      <section className="py-40 bg-background flex justify-center text-center border-t border-zinc-200/60 relative overflow-hidden">
        {/* 2LazyUI Grid Background with fade effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.07)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.07)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <ScrollReveal className="text-center w-full">
            <blockquote
              ref={quoteRef}
              className="text-[clamp(2rem,4.5vw,4.5rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-zinc-900 flex flex-wrap justify-center gap-x-[0.3em] gap-y-2"
            >
              {'"Every great dish begins with a frictionless operations workflow."'.split(" ").map((word, index) => (
                <span key={index} className="inline-block overflow-hidden pb-1">
                  <span
                    className={`inline-block transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${quoteVisible ? "translate-y-0" : "translate-y-[110%]"
                      }`}
                    style={{ transitionDelay: `${index * 55}ms` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Testimonials Section — Premium Accordion Hover Cards */}
      <section className="py-32 bg-zinc-100/50 relative overflow-hidden border-t border-zinc-200/60">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="mt-6 text-[clamp(1.2rem,4vw,3.2rem)] md:text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-tight tracking-tight text-zinc-900 whitespace-nowrap">
              Loved by restaurant leaders.
            </h2>
            <p className="mt-4 text-zinc-600 text-lg">
              See how GastroHub is empowering next-gen culinary businesses.
            </p>
          </ScrollReveal>

          {/* Accordion Layout Container */}
          <ScrollReveal className="flex flex-col lg:flex-row gap-4 w-full min-h-[520px] items-stretch justify-center">
            {testimonials.map((t) => {
              const isActive = activeTestimonial === t.id;
              return (
                <div
                  key={t.id}
                  onMouseEnter={() => setActiveTestimonial(t.id)}
                  onClick={() => setActiveTestimonial(t.id)}
                  className={`
                    relative overflow-hidden rounded-3xl cursor-pointer transition-[flex,max-width,height] duration-[1000ms] ease-[cubic-bezier(0.25,1,0.3,1)] will-change-[flex,max-width,height] group
                    ${isActive
                      ? "flex-[4] h-[380px] lg:h-auto"
                      : "flex-1 h-[90px] lg:h-auto lg:max-w-[120px]"
                    }
                    border border-zinc-200/60 shadow-lg bg-zinc-950
                  `}
                >
                  {/* Background Image - with zoom effect on hover */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={t.image}
                      alt={t.name}
                      className={`
                        w-full h-full object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.3,1)] will-change-transform
                        ${isActive ? "scale-100 opacity-90" : "scale-110 opacity-30 group-hover:opacity-40 group-hover:scale-105"}
                      `}
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div
                      className={`
                        absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-[2000ms] ease-[cubic-bezier(0.25,1,0.3,1)]
                        ${isActive ? "opacity-100" : "opacity-60"}
                      `}
                    />
                  </div>

                  {/* Collapsed view: Vertical rotated brand text (Desktop only) */}
                  <div
                    className={`
                      absolute inset-0 hidden lg:flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none
                      ${isActive ? "opacity-0 invisible z-0" : "opacity-100 visible z-10"}
                    `}
                  >

                    <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/50 -rotate-90 whitespace-nowrap origin-center mt-8">
                      {t.brand}
                    </span>
                  </div>

                  {/* Collapsed view: Horizontal brand text (Mobile only) */}
                  <div
                    className={`
                      absolute inset-0 lg:hidden flex items-center justify-between px-6 transition-opacity duration-300 pointer-events-none
                      ${isActive ? "opacity-0 invisible z-0" : "opacity-100 visible z-10"}
                    `}
                  >
                    <span className="text-base font-bold text-white">
                      {t.brand}
                    </span>

                  </div>

                  {/* Expanded view content */}
                  <div
                    className={`
                      absolute inset-0 flex flex-col justify-between p-6 md:p-8 transition-opacity duration-500 pointer-events-none z-20
                      ${isActive ? "opacity-100 visible" : "opacity-0 invisible"}
                    `}
                  >
                    {/* Top row: Brand & Logo info */}
                    <div className="flex justify-between items-center animate-in fade-in slide-in-from-top duration-500">
                      <div className="flex items-center gap-3">

                      </div>

                    </div>

                    {/* Bottom row: Quote + Author info + Navigation icon */}
                    <div className="flex items-end justify-between gap-6">
                      <div className="space-y-4 max-w-xl animate-in fade-in slide-in-from-bottom duration-500 delay-75 pointer-events-auto">
                        {/* Quote mark icon */}
                        <svg className="w-8 h-8 text-primary opacity-80" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.765 2.627-5.766 5.445.855.172 2.075.686 2.075 2.064 0 1.9-1.633 3.566-3.6 3.566-3.21 0-4.683-2.52-4.683-5.283 0-5.69 4.887-10.96 10.96-10.96H24v2.521c0 5.689-4.887 10.96-10.96 10.96h-1.023zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-4.782 2.627-5.783 5.445.855.172 2.075.686 2.075 2.064 0 1.9-1.633 3.566-3.6 3.566-3.21 0-4.684-2.52-4.684-5.283 0-5.69 4.887-10.96 10.96-10.96H10v2.521c0 5.689-4.887 10.96-10.96 10.96H0z" />
                        </svg>

                        {/* Quote text */}
                        <p className="text-lg md:text-xl font-medium leading-relaxed text-white">
                          "{t.quote}"
                        </p>

                        {/* Author */}
                        <div className="pt-2">
                          <div className="text-base font-bold text-white">{t.name}</div>
                          <div className="text-xs text-white/60 font-medium mt-0.5">{t.role}</div>
                        </div>
                      </div>

                      {/* Floating circular arrow icon */}
                      <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-lg animate-pulse lg:flex hidden">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>
      {/* 6. Final CTA Section */}
      <section className="relative overflow-hidden border-t border-zinc-200/60">
        <RippleSurface
          palette="graphite"
          effect="drift"
          rings={4}
          sharpness={0.3}
          depth={1.25}
          speed={1.6}
          lightAngle={130}
          centerGlow={0.62}
          vignette={0.3}
          className="py-40 text-white w-full h-full"
        >
          <AmbientGlow color="emerald" className="-top-20 -right-20 opacity-30 scale-125 pointer-events-none" />
          <AmbientGlow color="sky" className="top-1/2 -left-40 opacity-20 pointer-events-none" />

          <ScrollReveal className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight">
              When you are ready to accelerate.
            </h2>
            <p className="mt-6 text-xl text-zinc-300">
              Start your free 14-day trial. No credit card required. Cancel anytime.
            </p>
            <div className="mt-12 flex flex-col items-center gap-4">
              <Link href="/lien-he">
                <Button variant="solid" className="px-10 py-5 text-xl w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98] transition-all">Start Free Trial</Button>
              </Link>
              <p className="text-sm text-zinc-400">Already trusted by 1,200+ restaurants</p>
            </div>
          </ScrollReveal>
        </RippleSurface>
      </section>
    </div>
  );
}

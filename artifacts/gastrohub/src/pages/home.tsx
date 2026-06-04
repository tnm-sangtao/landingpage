import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { TechTag, AmbientGlow, BentoCard, ScrollReveal, Button } from "@/components/shared";


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
    <div className="flex flex-col w-full">
      {/* 1. Hero Section — Option 4B: Split-layout grid, dot grid + glows */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden hero-dot-bg" style={{ backgroundColor: "#ffffffff" }}>


        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content Column */}
            <div className="text-left lg:col-span-5">
              <ScrollReveal className="text-left">
                <h1 className="font-extrabold tracking-[-0.03em] text-foreground text-[clamp(2.85rem,5.2vw,4.7rem)] leading-[1.05] max-w-xl">
                  Run your restaurant<br />
                  with zero <span className="text-primary">waste.</span>
                </h1>

                <p className="mt-5 text-[1.05rem] text-muted-foreground max-w-xl leading-relaxed">
                  GastroHub integrates your entire workflow: guest acquisition, automated staff scheduling, and AI menu optimization into one clean control grid.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 justify-start items-center">
                  <Link href="/lien-he">
                    <Button variant="solid" className="px-7 py-3.5 text-[0.95rem]" data-testid="button-hero-primary">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/tinh-nang">
                    <button
                      className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-foreground/60 hover:text-primary transition-colors duration-200 group"
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
                    <div className="text-[2rem] font-extrabold text-foreground tracking-tight leading-none">
                      <Counter end={1200} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground mt-1.5">trusted restaurants</div>
                  </div>
                  <div data-testid="stat-growth">
                    <div className="text-[2rem] font-extrabold text-foreground tracking-tight leading-none">
                      <Counter end={32} prefix="+" suffix="%" />
                    </div>
                    <div className="text-sm text-muted-foreground mt-1.5">organic guest growth</div>
                  </div>
                  <div data-testid="stat-time">
                    <div className="text-[2rem] font-extrabold text-foreground tracking-tight leading-none">
                      <Counter end={4} suffix=" hours" />
                    </div>
                    <div className="text-sm text-muted-foreground mt-1.5">saved daily</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image Column */}
            <div className="relative flex justify-center items-center w-full lg:col-span-7">
              <ScrollReveal className="text-center flex justify-center w-full">
                <div className="relative w-full max-w-[640px] lg:max-w-[850px] xl:max-w-[950px] mx-auto z-10">


                  {/* Embedded Hero Video Player */}
                  <div className="w-full max-w-[650px] mx-auto rounded-2xl overflow-hidden aspect-square relative">
                    <iframe
                      src="https://player.cloudinary.com/embed/?cloud_name=doyiwqspw&public_id=vuongvideo_isibyq&autoplay=true&loop=true&muted=true&controls=false"
                      style={{ height: "100%", width: "100%" }}
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                      className="w-full h-full mix-blend-darken"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Logo ticker placed outside the grid to span full-width below content */}
          <ScrollReveal className="mt-20 overflow-hidden" data-testid="logo-ticker">
            <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40 mb-4 font-bold text-center">
              Trusted by
            </div>
            <div className="ticker-track mx-auto justify-center">
              {[
                "Phở Việt", "Café Ambrosia", "The Rooftop Bar", "Bếp Nhà Tôi",
                "Sushi Hà Nội", "Pizza Garden", "Dim Sum House", "Urban Grill",
                "Phở Việt", "Café Ambrosia", "The Rooftop Bar", "Bếp Nhà Tôi",
                "Sushi Hà Nội", "Pizza Garden", "Dim Sum House", "Urban Grill",
              ].map((name, i) => (
                <span key={i} className="text-xl md:text-2xl font-bold tracking-tight text-muted-foreground/40 hover:text-primary transition-colors duration-300 whitespace-nowrap">
                  {name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* 2. Pain-point Section */}
      <section className="bg-dark-green-gradient text-white pt-20 pb-0">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="object-left">
              <TechTag color="orange">The Challenge</TechTag>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight">
                Tired of fragmented restaurant tools?
              </h2>
              <p className="mt-6 text-xl text-muted-foreground/80 leading-relaxed max-w-md">
                Broken Excel sheets, buried Zalo chats, and fragmented ordering apps are eating up 4 hours of your day.
              </p>
              {/* Cloudinary Embedded Premium Video Player — centered below columns, borderless, mix-blend-lighten */}
              <div className="mt-0 max-w-[85%] mx-auto rounded-2xl overflow-hidden aspect-square relative object-left">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=doyiwqspw&public_id=video12_i7myqq&autoplay=true&loop=true&muted=true&controls=false"

                  style={{ height: "auto", width: "100%", aspectRatio: "1 / 1" }}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture; "
                  allowFullScreen
                  frameBorder="0"
                  className="w-full h-full mix-blend-lighten opacity-80"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  id: "01",
                  title: "Lost shifts on Zalo, late staff",
                  desc: "Scheduling updates get lost in hundreds of daily group chat messages."
                },
                {
                  id: "02",
                  title: "Chaotic payroll Excel sheets",
                  desc: "End-of-month reconciliation takes hours and is prone to costly mistakes."
                },
                {
                  id: "03",
                  title: "Missed guest orders",
                  desc: "Paper menus cause bottlenecks during rush hours, leaving guests waiting."
                },
                {
                  id: "04",
                  title: "Untracked revenue insights",
                  desc: "No clear visibility on which dishes sell best or which tables are most profitable."
                }
              ].map((card) => (
                <div key={card.id} className="bg-dark-green-card p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
                  <div className="text-primary font-mono font-bold mb-4">{card.id}</div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground/70">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 3. Features/Solution Section — Interactive Sticky Illustration */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <ScrollReveal className="mb-16">
            <TechTag>The Solution</TechTag>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight max-w-2xl">
              Four pillars of growth
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              Everything your restaurant needs — in one integrated platform.
            </p>
          </ScrollReveal>

          {/* Sticky 2-col layout */}
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* Left: Feature List */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {features.map((f, idx) => {
                const isActive = activeFeature === f.id;
                return (
                  <div
                    key={f.id}
                    onMouseEnter={() => setActiveFeature(f.id)}
                    onClick={() => setActiveFeature(f.id)}
                    className={`
                      group relative p-6 md:p-8 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] rounded-2xl border
                      ${isActive
                        ? `${f.activeBg} ${f.activeBorder} shadow-[0_12px_30px_rgba(0,0,0,0.03)] scale-[1.02]`
                        : "border-transparent opacity-60 hover:opacity-100 hover:bg-muted/30"
                      }
                    `}
                  >
                    {/* Tag + Icon row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`transition-colors duration-300 ${isActive ? f.accentColor : "text-muted-foreground group-hover:text-foreground"}`}>
                        {f.icon}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? f.accentColor : "text-muted-foreground"}`}>
                        {f.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold leading-snug transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"}`}>
                      {f.title}
                    </h3>

                    {/* Description — expands smoothly on active */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] ${isActive ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                        }`}
                    >
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Sticky Illustration Panel */}
            <div className="lg:col-span-7 lg:sticky lg:top-24">
              <div className="relative aspect-[4/3] w-full flex items-center justify-center">
                {/* Dynamic Ambient Glow behind the image - changes color dynamically according to active tab */}
                <AmbientGlow color={activeGlowColor} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 opacity-70 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.3,1)]" />

                {/* Illustration placeholders — one per feature, cross-fade on active */}
                {features.map((f) => {
                  const isActive = activeFeature === f.id;
                  return (
                    <div
                      key={f.id}
                      className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] ${isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95"
                        }`}
                    >
                      {f.image ? (
                        /* Frameless Actual Image with subtle dynamic color shadow and gradient border glow wrapper */
                        <div className="w-full h-full flex items-center justify-center p-4">
                          <div className="relative w-full h-full flex items-center justify-center rounded-2xl overflow-hidden group">
                            {/* Inner border wrapper representing a premium photo frame */}
                            <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-20" />
                            <img
                              src={f.image}
                              alt={f.title}
                              className="w-full h-auto object-contain rounded-2xl animate-float"
                            />
                          </div>
                        </div>
                      ) : (
                        /* Beautifully framed placeholder card */
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
                          {/* Gradient background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-60`} />

                          {/* Placeholder content */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-12">
                            {/* Icon badge */}
                            <div className={`w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg ${f.accentColor}`}>
                              {f.icon}
                            </div>
                            {/* Label */}
                            <div className="text-center">
                              <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${f.accentColor}`}>
                                {f.tag}
                              </div>
                              <div className="text-sm text-muted-foreground max-w-[240px] leading-relaxed">
                                Illustration placeholder — replace with your image
                              </div>
                            </div>
                            {/* Decorative dots grid */}
                            <div className="absolute bottom-6 right-6 grid grid-cols-4 gap-1.5 opacity-20">
                              {Array.from({ length: 16 }).map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground" />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* 4. Singular Moment */}
      <section className="py-40 bg-background flex justify-center text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal className="text-center w-full">
            <TechTag>Our Philosophy</TechTag>
            <blockquote
              ref={quoteRef}
              className="mt-12 text-[clamp(2rem,4.5vw,4.5rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-foreground flex flex-wrap justify-center gap-x-[0.3em] gap-y-2"
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
      <section className="py-32 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="mt-6 text-[clamp(1.2rem,4vw,3.2rem)] md:text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-tight tracking-tight text-foreground whitespace-nowrap">
              Loved by restaurant leaders.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
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
                    border border-border/40 shadow-lg bg-card
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
      <section className="bg-dark-green-gradient text-white py-40 relative overflow-hidden">
        <AmbientGlow color="purple" className="-top-20 -right-20" />
        <AmbientGlow color="orange" className="top-1/2 -left-40" />

        <ScrollReveal className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight">
            When you are ready to accelerate.
          </h2>
          <p className="mt-6 text-xl text-muted-foreground/80">
            Start your free 14-day trial. No credit card required. Cancel anytime.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4">
            <Link href="/lien-he">
              <Button variant="solid" className="px-10 py-5 text-xl w-full sm:w-auto">Start Free Trial</Button>
            </Link>
            <p className="text-sm text-muted-foreground/60">Already trusted by 1,200+ restaurants</p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Smartphone, Users, TrendingUp, Star, Heart, 
  ArrowRight, Shield, Wifi, Printer, QrCode, CheckCircle2, ChevronRight,
  Bot, Clock, Layers, Award
} from "lucide-react";
import { TechTag, Button, AmbientGlow, ScrollReveal, WordReveal } from "@/components/shared";
import { RippleSurface } from "@/components/lazy-ui/ripple-surface";

// 1. Types & Mockups Data
interface FeatureModule {
  id: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  color: "orange" | "purple" | "emerald" | "blue";
  icon: any;
  accentClass: string;
  bgGlow: string;
}

export default function Features() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const modules: FeatureModule[] = [
    {
      id: "marketing",
      tag: "Marketing & Growth",
      title: "Reach new guests automatically",
      desc: "Automate marketing campaigns, optimize Google Maps, and manage loyalty programs. Increase organic guest traffic by 30% in just 2 months.",
      bullets: [
        "Google Maps SEO booster to rank #1 locally",
        "Automate 5-star review collection via WhatsApp/SMS",
        "Integrated digital loyalty & points program"
      ],
      color: "orange",
      icon: TrendingUp,
      accentClass: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      bgGlow: "orange"
    },
    {
      id: "guest",
      tag: "Guest Experience",
      title: "Frictionless digital ordering",
      desc: "Eliminate wait times with premium QR digital menus and real-time online reservations. Instant AI menu translations ensure perfect service for international tourists.",
      bullets: [
        "Lightning-fast digital QR menu & instant table order",
        "Seamless reservation portal with auto SMS confirmation",
        "Real-time AI translation for 12+ international languages"
      ],
      color: "purple",
      icon: Smartphone,
      accentClass: "text-purple-500 bg-purple-500/10 border-purple-500/20",
      bgGlow: "purple"
    },
    {
      id: "hr",
      tag: "Operations & HR",
      title: "Automated staff operations",
      desc: "Free managers from manual work. Schedule smart shifts based on historical peak traffic, authorize secure biometric face clock-ins, and automate payroll instantly.",
      bullets: [
        "Smart shift scheduling backed by predictive traffic analytics",
        "Secure face-recognition clock-ins on tablet devices",
        "Instant hourly/monthly payroll & tips compensation calculation"
      ],
      color: "blue",
      icon: Users,
      accentClass: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      bgGlow: "blue"
    },
    {
      id: "ai",
      tag: "AI Menu Intelligence",
      title: "AI-Powered menu performance",
      desc: "Let AI analyze sales matrix data to automatically suggest high-margin menu combos, detect potential food allergens, and implement dynamic pricing.",
      bullets: [
        "Auto allergen detection & interactive ingredient lists",
        "High-margin menu combo recommendation engine",
        "Dynamic peak pricing models to maximize restaurant yield"
      ],
      color: "emerald",
      icon: Sparkles,
      accentClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      bgGlow: "emerald"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % modules.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <div className="flex flex-col w-full text-zinc-900 bg-background overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center hero-dot-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal className="text-center">
            <TechTag color="purple">Feature Suite</TechTag>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-zinc-900 mt-6 hero-title tracking-tight leading-[1.1]">
              <WordReveal text="Every tool you need, in one single place." />
            </h1>
            <p className="mt-6 text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Discover the power of the most comprehensive restaurant operating system. 
              Built for high-volume venues, street foods, and modern F&B groups.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Interactive Feature Hub */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Interactive Tab Menu (4 cols) */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-400 mb-6 font-bold">
                Click to explore core features
              </div>
              <div className="space-y-4">
                {modules.map((mod, idx) => {
                  const Icon = mod.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-500 flex gap-5 relative group outline-none ${
                        isActive 
                          ? "bg-white border-zinc-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] pb-6" 
                          : "bg-transparent border-transparent hover:bg-zinc-50/50 hover:border-zinc-200/30"
                      }`}
                    >
                      {/* Active Indicator Slide */}
                      {isActive && (
                        <motion.div 
                          layoutId="active-indicator"
                          className="absolute inset-0 rounded-[2rem] border border-zinc-200 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] pointer-events-none"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}

                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500 ${
                        isActive ? mod.accentClass : "text-zinc-400 bg-zinc-100/80 border-zinc-200/40"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="space-y-1.5 z-10 flex-1">
                        <div className={`text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${
                          isActive ? "text-primary" : "text-zinc-400"
                        }`}>
                          {mod.tag}
                        </div>
                        <h3 className={`text-lg font-bold transition-colors duration-500 ${
                          isActive ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-700"
                        }`}>
                          {mod.title}
                        </h3>
                        <p className={`text-sm leading-relaxed transition-all duration-500 ${
                          isActive ? "text-zinc-500 max-h-24 opacity-100" : "text-zinc-400/80 max-h-0 opacity-0 overflow-hidden"
                        }`}>
                          {mod.desc}
                        </p>
                        
                        {/* Progress Bar under text block */}
                        {isActive && (
                          <div className="h-1 bg-zinc-100 rounded-full overflow-hidden w-full mt-3">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 8, ease: "linear" }}
                              key={activeTab}
                              className={`h-full rounded-full ${
                                mod.color === "orange" ? "bg-orange-500" :
                                mod.color === "purple" ? "bg-purple-500" :
                                mod.color === "blue" ? "bg-blue-500" :
                                "bg-emerald-500"
                              }`}
                            />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive Graphic Viewport (7 cols) */}
            <div className="lg:col-span-7 w-full relative min-h-[480px]">
              <div className="absolute inset-0 rounded-[3rem] bg-white border border-zinc-200/40 p-8 overflow-hidden flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_8px_30px_rgba(0,0,0,0.02)]">
                {/* 2LazyUI Grid Background with fade effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.07)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.07)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
                
                <AmbientGlow color={modules[activeTab].bgGlow as any} className="opacity-10 scale-125 transition-all duration-1000" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full flex items-center justify-center z-10"
                  >
                    {/* Render specific graphic content according to active tab */}
                    {activeTab === 0 && <MarketingGraphic />}
                    {activeTab === 1 && <GuestExperienceGraphic />}
                    {activeTab === 2 && <OperationsHRGraphic />}
                    {activeTab === 3 && <AIMenuGraphic />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Micro-features Bento Grid (Visual Diversity) */}
      <section className="py-24 border-t border-zinc-100 bg-zinc-50/40 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <TechTag color="purple">Extra Capabilities</TechTag>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-4 tracking-tight">
              Powerful features, built for production.
            </h2>
            <p className="mt-4 text-zinc-500 text-lg">
              Engineered to cover every corner of your restaurant’s daily workflow.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Cell 1: Multi-location (Double width) */}
            <div className="md:col-span-2 relative group bg-white border border-zinc-200/80 rounded-[2.5rem] p-8 overflow-hidden shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between h-[320px]">
              <div className="absolute top-0 right-0 p-8 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                <Layers className="w-40 h-40 text-primary" strokeWidth={1} />
              </div>
              <div className="space-y-3 max-w-sm z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Multi-location Hub</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Manage menus, inventory, and staff permissions across 10+ restaurant branches from a centralized administrative control center.
                </p>
              </div>
              {/* Branch Pill Mockup */}
              <div className="flex gap-3 z-10 mt-6 overflow-x-auto pb-2 scrollbar-none">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Hanoi Headquarters
                </div>
                <div className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-zinc-400" /> Da Nang Beachside
                </div>
                <div className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-zinc-400" /> Saigon Hub
                </div>
              </div>
            </div>

            {/* Cell 2: Offline Mode Protection */}
            <div className="relative group bg-white border border-zinc-200/80 rounded-[2.5rem] p-8 overflow-hidden shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between h-[320px]">
              <div className="space-y-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                  <Wifi className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Offline Resilience</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Lost internet connection? GastroHub keeps working offline, storing orders locally and syncing seamlessly when back online.
                </p>
              </div>
              <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-bold text-orange-800">Internet Offline</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider bg-emerald-500/10 text-emerald-700 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">App Protected</span>
              </div>
            </div>

            {/* Cell 3: Cloud Printing Sync */}
            <div className="relative group bg-white border border-zinc-200/80 rounded-[2.5rem] p-8 overflow-hidden shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between h-[320px]">
              <div className="space-y-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                  <Printer className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Cloud Printing Sync</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Auto-route orders directly to kitchen and beverage prep stations instantly, compatible with Epson, Star, and Sunmi thermal printers.
                </p>
              </div>
              <div className="bg-zinc-50 border border-zinc-200/50 rounded-2xl p-3 flex items-center justify-between z-10 text-xs text-zinc-600 font-semibold">
                <div className="flex items-center gap-2">
                  <Printer className="w-4 h-4 text-zinc-400" />
                  <span>Kitchen Printer 01</span>
                </div>
                <span className="text-emerald-600 font-bold">Ready</span>
              </div>
            </div>

            {/* Cell 4: Express QR Checkout (Double width) */}
            <div className="md:col-span-2 relative group bg-white border border-zinc-200/80 rounded-[2.5rem] p-8 overflow-hidden shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between h-[320px]">
              <div className="absolute top-0 right-0 p-8 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                <QrCode className="w-40 h-40 text-purple-500" strokeWidth={1} />
              </div>
              <div className="space-y-3 max-w-sm z-10">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
                  <QrCode className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Express QR Checkout</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Support dynamic QR generation for checkout, automatically split bills among dining partners, and support Apple Pay, card networks, and MoMo.
                </p>
              </div>
              <div className="flex gap-3 z-10 mt-6">
                <div className="bg-purple-50/50 border border-purple-100 rounded-2xl px-5 py-2.5 flex items-center gap-3 text-xs font-bold text-purple-800">
                  <CheckCircle2 className="w-4.5 h-4.5 text-purple-600" /> Bill Split: 4 ways
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-zinc-200/60">
        <RippleSurface
          palette="graphite"
          effect="drift"
          rings={4}
          sharpness={0.3}
          depth={1.25}
          speed={3.8}
          lightAngle={130}
          centerGlow={0.62}
          vignette={0.3}
          className="py-36 text-white w-full h-full"
        >
          <AmbientGlow color="emerald" className="-bottom-20 -left-20 opacity-40 scale-125 pointer-events-none" />
          <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
            <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-tight tracking-tight text-white">
              Ready to transform your operations?
            </h2>
            <p className="mt-6 text-lg text-zinc-300">
              Start your free 14-day trial today. No credit card required.
            </p>
            <div className="mt-10">
              <Link href="/lien-he">
                <Button variant="solid" className="px-10 py-5 text-xl hover:scale-[1.02] active:scale-[0.98] transition-all">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        </RippleSurface>
      </section>

    </div>
  );
}

// ==========================================
// 2. Interactive Mockup Component Graphics
// ==========================================

// --- A. Marketing Graphic ---
function MarketingGraphic() {
  const reviews = [
    { name: "Minh Thu", rating: 5, text: "Phở gà thơm ngon, gọi món qua QR siêu tốc...", time: "2m ago" },
    { name: "Johnathan D.", rating: 5, text: "Excellent dynamic translation on QR menu!", time: "10m ago" },
    { name: "Alex Mercer", rating: 5, text: "Best dynamic pricing combo during lunch hour.", time: "1h ago" }
  ];

  return (
    <div className="w-full max-w-sm space-y-4">
      {/* Google SEO Rating widget */}
      <div className="bg-white/85 backdrop-blur border border-zinc-200/50 p-5 rounded-3xl flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Google Maps Rating</div>
          <div className="text-2xl font-black text-zinc-900 mt-1">4.9 / 5.0</div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      {/* Scrolling Review Feeds */}
      <div className="space-y-3">
        {reviews.map((rev, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="bg-white/85 backdrop-blur border border-zinc-200/50 p-4 rounded-2xl flex items-start gap-3.5 shadow-sm"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
              {rev.name[0]}
            </div>
            <div className="space-y-1 w-full">
              <div className="flex justify-between items-center w-full">
                <span className="text-xs font-bold text-zinc-800">{rev.name}</span>
                <span className="text-[10px] text-zinc-400 font-medium">{rev.time}</span>
              </div>
              <p className="text-xs text-zinc-500 font-medium line-clamp-1">{rev.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// --- B. Guest Experience Graphic ---
function GuestExperienceGraphic() {
  const [langIdx, setLangIdx] = useState(0);
  const languages = [
    { title: "Phở Bò Đặc Biệt", price: "85.000đ" },
    { title: "Signature Beef Pho", price: "$3.50" },
    { title: "特製牛肉フォー", price: "¥520" },
    { title: "스페셜 소고기 쌀국수", price: "₩4,800" }
  ];

  useEffect(() => {
    const langTimer = setInterval(() => {
      setLangIdx((prev) => (prev + 1) % languages.length);
    }, 2500);
    return () => clearInterval(langTimer);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Mobile Device Mockup */}
      <div className="w-[240px] h-[400px] border-4 border-zinc-800 rounded-[2.5rem] bg-zinc-950 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4">
        
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-zinc-800 rounded-full z-20" />
        
        {/* App Content */}
        <div className="bg-white rounded-[1.8rem] flex-1 flex flex-col justify-between p-4 relative overflow-hidden border border-zinc-200/50 mt-2.5">
          <AmbientGlow color="purple" className="opacity-10 scale-120" />
          
          <div className="space-y-3 z-10 w-full">
            {/* Top QR header */}
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Scan Table 04</span>
              <QrCode className="w-4 h-4 text-purple-600 animate-pulse" />
            </div>

            {/* Menu Item Graphic */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-100">
              <img 
                src="https://picsum.photos/seed/noodle/300/200" 
                alt="Pho" 
                className="object-cover w-full h-full"
              />
            </div>

            {/* AI Language Switcher */}
            <div className="bg-zinc-50 border border-zinc-200/40 rounded-xl p-3 space-y-1">
              <div className="text-[8px] font-bold text-purple-500 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> AI Real-time Translate
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={langIdx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-xs font-bold text-zinc-800 line-clamp-1">{languages[langIdx].title}</div>
                  <div className="text-[10px] font-black text-emerald-600 mt-0.5">{languages[langIdx].price}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-2 z-10">
            <button className="w-full bg-purple-600 text-white text-[10px] py-2.5 rounded-xl uppercase tracking-wider font-bold shadow-lg shadow-purple-600/20 cursor-pointer">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- C. Operations & HR Graphic ---
function OperationsHRGraphic() {
  const staff = ["Anh Tuan", "Hoang Nam", "Thu Huong"];
  const shifts = [
    { day: "Mon", time: "08:00 - 16:00", active: true },
    { day: "Tue", time: "16:00 - 23:00", active: true },
    { day: "Wed", time: "Off Day", active: false }
  ];

  return (
    <div className="w-full max-w-sm space-y-4">
      {/* FaceID Clock-in simulator */}
      <div className="bg-white/85 backdrop-blur border border-zinc-200/50 p-4 rounded-3xl flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-emerald-500 border-dashed flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-800">Attendance Clock-in</div>
            <div className="text-[9px] text-zinc-400 font-semibold">FaceID Authorized</div>
          </div>
        </div>
        <CheckCircle2 className="w-6 h-6 text-emerald-500 animate-bounce" />
      </div>

      {/* Staff schedules mockup */}
      <div className="bg-white/85 backdrop-blur border border-zinc-200/50 p-4 rounded-3xl shadow-sm space-y-3">
        <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 pb-2">Shift Schedules</div>
        <div className="space-y-2">
          {shifts.map((shift, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs">
              <span className="font-bold text-zinc-700">{shift.day}</span>
              <span className={`px-2.5 py-1 rounded-lg border font-bold text-[10px] ${
                shift.active 
                  ? "bg-blue-50 border-blue-100 text-blue-700" 
                  : "bg-zinc-50 border-zinc-200 text-zinc-400"
              }`}>
                {shift.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- D. AI Menu Graphic ---
function AIMenuGraphic() {
  return (
    <div className="w-full max-w-sm space-y-4">
      {/* AI recommendation popup */}
      <div className="bg-white/85 backdrop-blur border border-zinc-200/50 p-5 rounded-3xl shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
            <Sparkles className="w-4.5 h-4.5" />
          </div>
          <div className="space-y-1.5 w-full">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/20">AI Suggestion</span>
              <span className="text-[9px] text-zinc-400 font-bold">98% Accuracy</span>
            </div>
            <h4 className="text-xs font-bold text-zinc-900 mt-1">Combine "Pho Noodle" + "Iced Tea"</h4>
            <p className="text-[10px] text-zinc-500 leading-relaxed font-semibold">
              Customers ordering Pho Noodle have a 82% higher chance of purchasing Iced Tea when offered as a Combo.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Yield Curve simulation */}
      <div className="bg-white/85 backdrop-blur border border-zinc-200/50 p-4 rounded-3xl shadow-sm space-y-2">
        <div className="flex justify-between items-center border-b border-zinc-100 pb-2">
          <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Peak hour dynamic yield</span>
          <span className="text-emerald-600 font-black text-xs">+18.5% revenue</span>
        </div>
        <div className="h-16 flex items-end gap-2 px-2 pt-4">
          <div className="flex-1 bg-zinc-100 rounded-t h-[30%]" />
          <div className="flex-1 bg-zinc-100 rounded-t h-[45%]" />
          <div className="flex-1 bg-zinc-100 rounded-t h-[40%]" />
          <div className="flex-1 bg-emerald-500/40 rounded-t h-[75%] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-emerald-600">Peak</div>
          </div>
          <div className="flex-1 bg-emerald-500 rounded-t h-[95%]" />
          <div className="flex-1 bg-zinc-100 rounded-t h-[50%]" />
        </div>
      </div>
    </div>
  );
}

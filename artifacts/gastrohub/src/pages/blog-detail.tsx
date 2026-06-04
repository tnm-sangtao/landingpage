import { useParams, Link } from "wouter";
import { TechTag, AmbientGlow } from "@/components/shared";
import { motion, useScroll } from "framer-motion";

const BLOG_POSTS: Record<string, {
  title: string;
  cat: string;
  date: string;
  readTime: string;
  image: string;
  author: { name: string; role: string; avatarText: string };
  content: React.ReactNode;
}> = {
  "5-chien-luoc-google-maps": {
    title: "5 Google Maps Optimization Strategies to Boost New Guest Influx by 40%",
    cat: "Marketing",
    date: "05/14/2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&h=600&q=80",
    author: { name: "Minh Hoang", role: "Growth Lead", avatarText: "MH" },
    content: (
      <>
        <p>In the modern F&B industry, the battle takes place not only on physical streets but also on digital platforms. Among them, Google Maps is the most valuable real estate that you don't have to pay rent for. Today's customers rarely "stroll around to find a restaurant"; they search on Google Maps before making a decision.</p>
        
        <h2>1. Update your Google Business Profile to 100% completeness</h2>
        <p>The most basic step, yet many restaurants overlook it. Ensure your information is accurate down to the smallest detail: operating hours, phone number, address, and website. It is particularly crucial to update holiday hours to prevent a bad guest experience.</p>
        
        <h2>2. High-quality photos are a silent salesperson</h2>
        <p>Diners eat with their eyes first. Publish professional photos showcasing your signature dishes, interior ambiance, storefront (to help guests locate you), and the bustling vibe when the restaurant is full. Avoid generic stock photos.</p>
        
        <h2>3. Automate review requests</h2>
        <p>Don't wait for guests to remember to leave a review. With GastroHub, you can set up a system to automatically send a Google Maps review request 1 hour after the guest completes their payment. Subtle reminders with direct links can boost your review rate up to 5x.</p>
        
        <h2>4. Respond to all reviews (including 1-star reviews)</h2>
        <p>How you respond to a negative review speaks louder about your service than 10 positive reviews. Reply promptly, professionally, and offer clear solutions.</p>
        
        <h2>5. Update posts regularly</h2>
        <p>Google Maps is not just a directory; it is a mini social network. Posting weekly offers, new menu arrivals, and events keeps your profile active in the eyes of Google's algorithms.</p>
      </>
    )
  },
  "70-phan-tram-nha-hang-that-bai": {
    title: "Why 70% of Vietnamese Restaurants Fail in the First 3 Years",
    cat: "Business",
    date: "05/12/2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&h=600&q=80",
    author: { name: "Anh Tuan", role: "Business Analyst", avatarText: "AT" },
    content: (
      <>
        <p>Vietnamese F&B industry is booming, but the reality is harsh: 70% of new restaurants shut down within their first 3 years of operations. Understanding the underlying reasons is critical for any aspiring restaurateur.</p>
        
        <h2>1. Poor Cash Flow Management</h2>
        <p>Many restaurant owners calculate their starting capital but forget to keep a cash reserve for the first 6 dry months. Once initial reserves dry out, they collapse.</p>
        
        <h2>2. Inconsistent Food Quality & Service</h2>
        <p>F&B operates on repeat customers. If your noodle broth tastes different on Monday than it does on Saturday, or if service degrades when the house is full, customers won't return.</p>
        
        <h2>3. Toxic Staff Management & High Turnover</h2>
        <p>Operations collapse when kitchen staffs or waiters walk out unexpectedly. Having automated scheduling and fair tip compensation systems is key to keeping staff happy.</p>
      </>
    )
  },
  "ai-menu-tuong-lai": {
    title: "AI Menu: Future of the F&B Industry or Just a Passing Trend",
    cat: "Technology",
    date: "05/08/2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=600&q=80",
    author: { name: "Minh Hoang", role: "Growth Lead", avatarText: "MH" },
    content: (
      <>
        <p>AI is entering the F&B scene with predictive recommendations and smart menus. But is it just a hype or does it bring real value to restaurant owners?</p>
        
        <h2>1. Intelligent Menu Suggestion Engine</h2>
        <p>AI doesn't just display food; it knows what to suggest based on weather, peak hours, and past orders. A customer ordering steak is dynamically suggested the highest-margin wine option.</p>
        
        <h2>2. Dynamic Peak Pricing</h2>
        <p>Just like Uber, AI menus can automatically implement micro dynamic pricing during peak lunch hours, boosting yields by up to 15% with zero friction.</p>
        
        <h2>3. Dynamic Multi-language translations</h2>
        <p>Instant translation allows global travelers to browse local delicacies in their native tongue, drastically increasing tourism ordering volume.</p>
      </>
    )
  },
  "doi-nhom-khong-zalo": {
    title: "How to Build an F&B Team That Doesn't Rely on Zalo",
    cat: "Operations",
    date: "05/01/2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=600&q=80",
    author: { name: "Thu Huong", role: "Operations Specialist", avatarText: "TH" },
    content: (
      <>
        <p>Zalo chats are buried, shift handovers are missed, and task accountability is zero. It's time to build a structured operating channel that doesn't rely on chaotic chat groups.</p>
        
        <h2>1. Centralized Shift Handover</h2>
        <p>Keep a clear record of daily cash flow, kitchen inventory warnings, and broken equipment logs in a single operational dashboard instead of unstructured chats.</p>
        
        <h2>2. Automated Shift Scheduling</h2>
        <p>Let staff request shift swaps through a portal, allowing managers to approve and publish schedules directly to their calendar instantly.</p>
      </>
    )
  },
  "case-study-pho-viet": {
    title: "Case Study: Pho Viet Doubles Revenue with GastroHub",
    cat: "Case Study",
    date: "04/28/2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&h=600&q=80",
    author: { name: "Minh Hoang", role: "Growth Lead", avatarText: "MH" },
    content: (
      <>
        <p>Discover how Pho Viet, a traditional restaurant group in Hanoi, implemented GastroHub to double their delivery and dine-in revenue within 6 months.</p>
        
        <h2>1. The Challenge</h2>
        <p>Pho Viet was struggling with slow checkout times, menu translation errors for foreign tourists, and high staff turnover.</p>
        
        <h2>2. The Solution</h2>
        <p>GastroHub introduced QR checkout, AI translation, and centralized multi-location inventory sync.</p>
      </>
    )
  },
  "checklist-mo-nha-hang": {
    title: "Restaurant Opening Checklist: 47 Crucial Things You Cannot Miss",
    cat: "Guide",
    date: "04/20/2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&h=600&q=80",
    author: { name: "Anh Tuan", role: "Business Analyst", avatarText: "AT" },
    content: (
      <>
        <p>Opening a restaurant is a complex machinery. From legal licensing to kitchen equipment optimization, here is our ultimate checklist.</p>
        
        <h2>1. Legal Licenses</h2>
        <p>Food safety certification, fire prevention permits, and business licenses must be fully approved before opening day.</p>
        
        <h2>2. Kitchen Layout Optimization</h2>
        <p>Plan kitchen pathways to separate raw ingredients from cooked food, reducing safety hazards and accelerating prep speed.</p>
      </>
    )
  },
  "thanh-toan-khong-tien-mat": {
    title: "Cashless Payments: Opportunity or Challenge for F&B?",
    cat: "Finance",
    date: "04/15/2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=600&q=80",
    author: { name: "Thu Huong", role: "Operations Specialist", avatarText: "TH" },
    content: (
      <>
        <p>QR codes and bank transfers are taking over. How can F&B venues leverage cashless payments without getting buried under processing fees?</p>
        
        <h2>1. Accelerated Table Turnover</h2>
        <p>Allowing guests to scan-and-pay directly from their table cuts waiting times by 10 minutes, accelerating table turnovers during peak lunch hours.</p>
        
        <h2>2. Safe Cash Reconciliation</h2>
        <p>Minimize physical cash counting errors at the end of the day by routing transactions directly to unified business bank accounts.</p>
      </>
    )
  }
};

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { scrollYProgress } = useScroll();

  const post = BLOG_POSTS[slug || ""] || BLOG_POSTS["5-chien-luoc-google-maps"];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen text-zinc-900 relative overflow-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-16 left-0 h-1 bg-primary z-50 origin-left w-full"
        style={{ scaleX: scrollYProgress }}
      />
      <AmbientGlow color="emerald" className="top-10 right-10 opacity-15 scale-150" />

      <article className="pt-24 pb-32 container mx-auto px-6 flex flex-col items-center relative z-10">
        <div className="w-full max-w-4xl mb-8 flex justify-start">
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-primary transition-colors cursor-pointer group">
              <span className="group-hover:-translate-x-1 transition-transform duration-200">&larr;</span> Back to Blog
            </span>
          </Link>
        </div>
        <header className="max-w-3xl text-center mb-16">
          <TechTag color={post.cat === "Technology" ? "purple" : "orange"}>{post.cat}</TechTag>
          <h1 className="mt-6 text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight text-zinc-900">
            {post.title}
          </h1>
          <div className="mt-8 flex justify-center items-center gap-4 text-zinc-500">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200/50 flex items-center justify-center font-bold text-primary shadow-sm">
                {post.author.avatarText}
              </div>
              <div className="text-left">
                <div className="font-bold text-zinc-900 text-sm">{post.author.name}</div>
                <div className="text-xs text-zinc-500">{post.author.role}</div>
              </div>
            </div>
            <div className="h-4 w-px bg-zinc-200 mx-2" />
            <div className="text-sm">{post.date} • {post.readTime}</div>
          </div>
        </header>

        <div className="w-full max-w-4xl aspect-[21/9] rounded-3xl mb-16 border border-zinc-200/60 relative overflow-hidden shadow-sm">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <AmbientGlow color="emerald" className="opacity-10 scale-110 pointer-events-none" />
        </div>

        <div className="w-full max-w-[680px] prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-headings:text-zinc-900 text-zinc-700">
          {post.content}
  
          <div className="mt-12 p-8 bg-zinc-50 rounded-3xl border border-zinc-200/60 shadow-sm">
            <h3 className="text-xl font-bold mt-0 text-zinc-900">Start automating today</h3>
            <p className="mb-6 text-base text-zinc-600">GastroHub helps you collect 5-star reviews automatically from satisfied customers and resolve complaints before they ever reach Google Maps.</p>
            <Link href="/lien-he">
              <span className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl bg-primary text-white hover:brightness-110 active:scale-98 transition-all cursor-pointer">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

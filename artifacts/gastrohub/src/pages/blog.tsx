import { Link } from "wouter";
import { TechTag, AmbientGlow, ScrollReveal, WordReveal } from "@/components/shared";

export default function Blog() {
  const posts = [
    { 
      slug: "70-phan-tram-nha-hang-that-bai", 
      title: "Why 70% of Vietnamese Restaurants Fail in the First 3 Years", 
      cat: "Business", 
      date: "05/12/2024",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
      slug: "ai-menu-tuong-lai", 
      title: "AI Menu: Future of the F&B Industry or Just a Passing Trend", 
      cat: "Technology", 
      date: "05/08/2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
      slug: "doi-nhom-khong-zalo", 
      title: "How to Build an F&B Team That Doesn't Rely on Zalo", 
      cat: "Operations", 
      date: "05/01/2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
      slug: "case-study-pho-viet", 
      title: "Case Study: Pho Viet Doubles Revenue with GastroHub", 
      cat: "Case Study", 
      date: "04/28/2024",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
      slug: "checklist-mo-nha-hang", 
      title: "Restaurant Opening Checklist: 47 Crucial Things You Cannot Miss", 
      cat: "Guide", 
      date: "04/20/2024",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&h=400&q=80"
    },
    { 
      slug: "thanh-toan-khong-tien-mat", 
      title: "Cashless Payments: Opportunity or Challenge for F&B?", 
      cat: "Finance", 
      date: "04/15/2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400&q=80"
    },
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen text-zinc-900 relative overflow-hidden">
      <AmbientGlow color="emerald" className="top-10 right-10 opacity-15 scale-150" />
      
      <section className="pt-32 pb-16 hero-dot-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-black text-zinc-900 mb-12 hero-title">
              <WordReveal text="Insights & Guides" />
            </h1>
          </ScrollReveal>
          
          <Link href="/blog/5-chien-luoc-google-maps">
            <div className="group relative w-full h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-zinc-200/60 hover:border-primary/30 transition-all duration-500 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&h=600&q=80" 
                alt="5 Google Maps Optimization Strategies"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
                <TechTag color="orange">Marketing</TechTag>
                <h2 className="mt-4 text-[clamp(2rem,3.5vw,3.5rem)] font-extrabold text-white leading-tight group-hover:text-primary transition-colors duration-300 max-w-4xl">
                  5 Google Maps Optimization Strategies to Boost New Guest Influx by 40%
                </h2>
                <div className="mt-6 flex gap-4 text-sm text-zinc-300 font-medium">
                  <span>05/14/2024</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group cursor-pointer flex flex-col h-full border border-zinc-200/60 bg-white hover:bg-zinc-50/50 p-6 rounded-3xl transition-all duration-300 hover:border-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                  <div className="w-full aspect-[16/10] bg-zinc-100 rounded-2xl mb-6 overflow-hidden border border-zinc-200/50 relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="self-start">
                    <TechTag color={post.cat === 'Technology' ? 'purple' : 'orange'}>{post.cat}</TechTag>
                  </div>
                  <h3 className="mt-4 text-xl font-bold leading-tight text-zinc-900 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="mt-auto pt-6 text-sm text-zinc-500 font-medium flex justify-between">
                    <span>{post.date}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center text-primary transform translate-x-1 group-hover:translate-x-0">Read more &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

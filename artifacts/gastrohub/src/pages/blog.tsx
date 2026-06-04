import { Link } from "wouter";
import { TechTag } from "@/components/shared";

export default function Blog() {
  const posts = [
    { slug: "70-phan-tram-nha-hang-that-bai", title: "Why 70% of Vietnamese Restaurants Fail in the First 3 Years", cat: "Business", date: "05/12/2024" },
    { slug: "ai-menu-tuong-lai", title: "AI Menu: Future of the F&B Industry or Just a Passing Trend", cat: "Technology", date: "05/08/2024" },
    { slug: "doi-nhom-khong-zalo", title: "How to Build an F&B Team That Doesn't Rely on Zalo", cat: "Operations", date: "05/01/2024" },
    { slug: "case-study-pho-viet", title: "Case Study: Pho Viet Doubles Revenue with GastroHub", cat: "Case Study", date: "04/28/2024" },
    { slug: "checklist-mo-nha-hang", title: "Restaurant Opening Checklist: 47 Crucial Things You Cannot Miss", cat: "Guide", date: "04/20/2024" },
    { slug: "thanh-toan-khong-tien-mat", title: "Cashless Payments: Opportunity or Challenge for F&B?", cat: "Finance", date: "04/15/2024" },
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-extrabold leading-tight tracking-tight mb-12">
            Insights & Guides
          </h1>
          
          <Link href="/blog/5-chien-luoc-google-maps">
            <div className="group relative w-full h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-border">
              <div className="absolute inset-0 bg-muted/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <TechTag color="orange">Marketing</TechTag>
                <h2 className="mt-4 text-[clamp(2rem,3.5vw,3.5rem)] font-extrabold text-foreground leading-tight group-hover:text-primary transition-colors duration-300 max-w-4xl">
                  5 Google Maps Optimization Strategies to Boost New Guest Influx by 40%
                </h2>
                <div className="mt-6 flex gap-4 text-sm text-muted-foreground font-medium">
                  <span>05/14/2024</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group cursor-pointer flex flex-col h-full border border-transparent hover:border-border p-4 -m-4 rounded-2xl transition-colors">
                  <div className="w-full aspect-[16/10] bg-muted rounded-xl mb-6 overflow-hidden">
                     {/* Placeholder for post image */}
                     <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <TechTag color={post.cat === 'Technology' ? 'purple' : 'orange'}>{post.cat}</TechTag>
                  <h3 className="mt-4 text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-auto pt-6 text-sm text-muted-foreground font-medium flex justify-between">
                    <span>{post.date}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-primary">Read more &rarr;</span>
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

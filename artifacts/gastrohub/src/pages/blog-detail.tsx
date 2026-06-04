import { useEffect, useState } from "react";
import { Link } from "wouter";
import { TechTag } from "@/components/shared";

export default function BlogDetail() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full bg-background min-h-screen relative">
      {/* Progress Bar */}
      <div 
        className="fixed top-16 left-0 h-1 bg-primary z-50 transition-all duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <article className="pt-24 pb-32 container mx-auto px-6 flex flex-col items-center">
        <header className="max-w-3xl text-center mb-16">
          <TechTag>Marketing</TechTag>
          <h1 className="mt-6 text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight text-foreground">
            5 Google Maps Optimization Strategies to Boost New Guest Influx by 40%
          </h1>
          <div className="mt-8 flex justify-center items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-muted border border-border" />
              <div className="text-left">
                <div className="font-bold text-foreground text-sm">Minh Hoang</div>
                <div className="text-xs">Growth Lead</div>
              </div>
            </div>
            <div className="h-4 w-px bg-border mx-2" />
            <div className="text-sm">05/14/2024 • 6 min read</div>
          </div>
        </header>

        <div className="w-full max-w-4xl aspect-[21/9] bg-muted rounded-2xl mb-16 border border-border" />

        <div className="w-full max-w-[680px] prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
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

          <div className="mt-12 p-8 bg-muted/50 rounded-xl border border-border">
            <h3 className="text-xl font-bold mt-0">Start automating today</h3>
            <p className="mb-6 text-base">GastroHub helps you collect 5-star reviews automatically from satisfied customers and resolve complaints before they ever reach Google Maps.</p>
            <Link href="/lien-he">
              <span className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg bg-primary text-white hover:bg-primary/95 transition-colors cursor-pointer">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button, TechTag, AmbientGlow, ScrollReveal, WordReveal, BentoCard } from "@/components/shared";
import { Link } from "wouter";
import { Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen text-zinc-900 relative overflow-hidden">
      <AmbientGlow color="emerald" className="top-10 right-10 opacity-15 scale-150" />
      <AmbientGlow color="sky" className="bottom-10 left-10 opacity-10 scale-125" />

      <section className="pt-32 pb-20 text-center px-6 hero-dot-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal className="text-center">
            <TechTag color="orange">Pricing Plans</TechTag>
            <h1 className="mt-6 text-[clamp(2.5rem,4vw,4.5rem)] font-black text-zinc-900 hero-title">
              <WordReveal text="Simple, transparent, no hidden fees." />
            </h1>
            <p className="mt-6 text-xl text-zinc-500 max-w-2xl mx-auto">
              Choose the perfect plan for your restaurant's scale. Upgrade or cancel anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <BentoCard className="bg-white border border-zinc-200/60 p-8 rounded-3xl flex flex-col h-full hover:border-primary/20 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <h3 className="text-xl font-bold text-zinc-900">Starter</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-900">$19</span>
                <span className="text-zinc-500">/mo</span>
              </div>
              <p className="mt-4 text-sm text-zinc-500">For small cafes & diners, 1 branch</p>
              
              <ul className="mt-8 space-y-4 mb-8 flex-1">
                {["Digital Menu + QR", "Google Reviews automation", "Basic reports & analytics", "Business hours support"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full border-zinc-200 text-zinc-800 hover:border-primary hover:text-primary bg-white z-10">Get Started</Button>
            </BentoCard>

            {/* Pro */}
            <div className="relative flex flex-col h-full md:-translate-y-4 md:scale-[1.03] transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                <span className="inline-flex items-center gap-1 px-4 py-1.5 text-[10px] uppercase font-bold tracking-[0.18em] rounded-full bg-primary text-white shadow-[0_4px_16px_rgba(16,185,129,0.3)] border border-primary/20">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-200 animate-pulse" />
                  Most Popular
                </span>
              </div>
              <BentoCard className="bg-gradient-to-b from-primary/[0.04] via-white to-white border-2 border-primary p-8 rounded-3xl shadow-[0_20px_50px_rgba(16,185,129,0.12)] flex flex-col h-full relative overflow-hidden">
                {/* Premium Inner Ambient Glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="text-xl font-bold text-zinc-900 relative z-10">Pro</h3>
                <div className="mt-4 flex items-baseline gap-1 relative z-10">
                  <span className="text-4xl font-extrabold text-primary">$39</span>
                  <span className="text-zinc-500">/mo</span>
                </div>
                <p className="mt-4 text-sm text-zinc-500 relative z-10">For medium restaurants, up to 3 branches</p>
                
                <ul className="mt-8 space-y-4 mb-8 flex-1 relative z-10">
                  {["All Starter features", "Automated shift scheduling", "AI Menu (Multi-language)", "Online reservations", "Advanced analytics & insights"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-zinc-800">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <Link href="/lien-he" className="w-full z-10 relative mt-auto">
                  <Button variant="solid" className="w-full py-4 shadow-md shadow-primary/15 hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all">Try Free for 14 Days</Button>
                </Link>
              </BentoCard>
            </div>

            {/* Enterprise */}
            <BentoCard className="bg-white border border-zinc-200/60 p-8 rounded-3xl flex flex-col h-full hover:border-primary/20 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <h3 className="text-xl font-bold text-zinc-900">Enterprise</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-900">Contact</span>
              </div>
              <p className="mt-4 text-sm text-zinc-500">For large F&B chains & franchises</p>
              
              <ul className="mt-8 space-y-4 mb-8 flex-1">
                {["Unlimited branches", "Dedicated account manager", "Custom integrations (POS, ERP)", "SLA 99.9%", "24/7 Priority support"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full border-zinc-200 text-zinc-800 hover:border-primary hover:text-primary bg-white z-10">Get Quote</Button>
            </BentoCard>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-zinc-900">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full border-t border-zinc-200">
            <AccordionItem value="item-1" className="border-b border-zinc-200">
              <AccordionTrigger className="text-left font-bold text-zinc-900 hover:text-primary transition-colors py-4">Is GastroHub suitable for small cafes or restaurants?</AccordionTrigger>
              <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-4">
                Absolutely. Our Starter plan is specifically designed for small cafes and diners, offering essential features to digitize operations without bloating costs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-zinc-200">
              <AccordionTrigger className="text-left font-bold text-zinc-900 hover:text-primary transition-colors py-4">Can I try the platform before purchasing?</AccordionTrigger>
              <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-4">
                Yes. We offer a 14-day free trial with full access to our Pro plan. No credit card is required to get started.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-zinc-200">
              <AccordionTrigger className="text-left font-bold text-zinc-900 hover:text-primary transition-colors py-4">Is my restaurant's data secure?</AccordionTrigger>
              <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-4">
                Your data is encrypted and securely stored on world-class cloud infrastructure. We commit to never sharing your business data with third parties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-zinc-200">
              <AccordionTrigger className="text-left font-bold text-zinc-900 hover:text-primary transition-colors py-4">Can I export reports to Excel?</AccordionTrigger>
              <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-4">
                Yes. All revenue, payroll, and inventory reports can be exported to Excel (.xlsx) or CSV files with a single click.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-zinc-200">
              <AccordionTrigger className="text-left font-bold text-zinc-900 hover:text-primary transition-colors py-4">Does the software work offline?</AccordionTrigger>
              <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-4">
                GastroHub is a cloud-based SaaS platform and requires internet access. However, our internal POS features support a temporary offline mode and will sync data once online.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b border-zinc-200">
              <AccordionTrigger className="text-left font-bold text-zinc-900 hover:text-primary transition-colors py-4">Can I cancel my subscription anytime?</AccordionTrigger>
              <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-4">
                Yes. You can freely upgrade, downgrade, or cancel your plan at any time directly from your account settings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

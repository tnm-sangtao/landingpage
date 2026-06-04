import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button, TechTag, AmbientGlow } from "@/components/shared";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="pt-32 pb-20 text-center px-6">
        <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-extrabold leading-tight tracking-tight">
          Simple, transparent, no hidden fees.
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your restaurant's scale. Upgrade or cancel anytime.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-6xl relative">
          <AmbientGlow color="orange" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-40" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10 items-center">
            {/* Starter */}
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h3 className="text-xl font-bold">Starter</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">$19</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">For small cafes & diners, 1 branch</p>
              
              <ul className="mt-8 space-y-4 mb-8">
                {["Digital Menu + QR", "Google Reviews automation", "Basic reports & analytics", "Business hours support"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg className="w-4 h-4 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">Get Started</Button>
            </div>

            {/* Pro */}
            <div className="bg-card border-2 border-primary p-8 rounded-2xl shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap z-25">
                <span className="inline-flex items-center px-4 py-1 text-[10px] uppercase font-bold tracking-[0.15em] rounded-full bg-primary text-primary-foreground shadow-md border border-white/10">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold">Pro</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-primary">$39</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">For medium restaurants, up to 3 branches</p>
              
              <ul className="mt-8 space-y-4 mb-8">
                {["All Starter features", "Automated shift scheduling", "AI Menu (Multi-language)", "Online reservations", "Advanced analytics & insights"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Link href="/lien-he">
                <Button variant="solid" className="w-full">Try Free for 14 Days</Button>
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">Contact</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">For large F&B chains & franchises</p>
              
              <ul className="mt-8 space-y-4 mb-8">
                {["Unlimited branches", "Dedicated account manager", "Custom integrations (POS, ERP)", "SLA 99.9%", "24/7 Priority support"].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg className="w-4 h-4 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">Get Quote</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold">Is GastroHub suitable for small cafes or restaurants?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Absolutely. Our Starter plan is specifically designed for small cafes and diners, offering essential features to digitize operations without bloating costs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold">Can I try the platform before purchasing?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. We offer a 14-day free trial with full access to our Pro plan. No credit card is required to get started.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold">Is my restaurant's data secure?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Your data is encrypted and securely stored on world-class cloud infrastructure. We commit to never sharing your business data with third parties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold">Can I export reports to Excel?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. All revenue, payroll, and inventory reports can be exported to Excel (.xlsx) or CSV files with a single click.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold">Does the software work offline?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                GastroHub is a cloud-based SaaS platform and requires internet access. However, our internal POS features support a temporary offline mode and will sync data once online.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-bold">Can I cancel my subscription anytime?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes. You can freely upgrade, downgrade, or cancel your plan at any time directly from your account settings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

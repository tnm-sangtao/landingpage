import { Link } from "wouter";
import { TechTag, Button, AmbientGlow } from "@/components/shared";

export default function Features() {
  const modules = [
    {
      id: "marketing",
      tag: "Marketing & Growth",
      title: "Reach new guests automatically",
      desc: "Automate marketing campaigns, optimize Google Maps, and manage loyalty programs. Increase organic guest traffic by 30% in just 2 months.",
      bullets: ["Google Maps search optimization", "Automate 5-star review collection", "Integrated loyalty programs"],
      color: "orange",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center bg-card rounded-2xl border border-border p-8">
          <div className="space-y-4 w-full max-w-sm">
            <div className="h-12 bg-muted rounded flex items-center px-4 justify-between">
              <div className="flex gap-2 items-center"><div className="w-6 h-6 bg-primary/20 rounded-full" /><div className="h-2 w-24 bg-border rounded" /></div>
              <div className="text-primary text-xs font-bold">+45 Reviews</div>
            </div>
            <div className="h-12 bg-muted rounded flex items-center px-4 justify-between">
              <div className="flex gap-2 items-center"><div className="w-6 h-6 bg-primary/20 rounded-full" /><div className="h-2 w-32 bg-border rounded" /></div>
              <div className="text-primary text-xs font-bold">+120 Points</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "guest",
      tag: "Guest Experience",
      title: "Frictionless guest experience",
      desc: "Eliminate wait times with QR digital menus and online table reservations. Instant AI menu translations ensure a smooth experience for international tourists.",
      bullets: ["Lightning-fast QR digital menus", "Instant online reservations", "AI-powered menu translations"],
      color: "purple",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center bg-card rounded-2xl border border-border p-8">
          <div className="w-48 h-64 border-4 border-foreground rounded-[2rem] bg-background shadow-xl flex flex-col items-center p-4">
            <div className="w-16 h-2 bg-muted rounded-full mb-4" />
            <div className="w-32 h-32 bg-muted rounded-xl border border-border flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-foreground border-dashed" />
            </div>
            <div className="mt-4 w-full h-8 bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold rounded-lg uppercase tracking-wider">Order Now</div>
          </div>
        </div>
      )
    },
    {
      id: "hr",
      tag: "Operations & HR",
      title: "Automated staff operations",
      desc: "Free managers from manual work. Smart shift scheduling based on historic data, secure face-recognition clock-ins, and automated payroll.",
      bullets: ["Smart shift scheduling", "Secure face-recognition clock-ins", "Automated payroll & compensation"],
      color: "orange",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center bg-card rounded-2xl border border-border p-8">
          <div className="grid grid-cols-7 gap-2 w-full max-w-sm">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className={`aspect-square rounded-md flex items-center justify-center text-[10px] ${i % 3 === 0 ? 'bg-primary text-white font-bold' : 'bg-muted'}`}>
                {i % 3 === 0 ? 'Shift 1' : ''}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "ai",
      tag: "AI Menu Intelligence",
      title: "AI-Powered intelligent menus",
      desc: "AI analyzes sales data to suggest high-converting combos, detect food allergens, and automate dynamic pricing for peak hours.",
      bullets: ["Automated food allergen detection", "High-margin combo suggestions", "Comprehensive menu performance analytics"],
      color: "purple",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center bg-card rounded-2xl border border-border p-8 overflow-hidden">
          <AmbientGlow color="purple" className="opacity-50" />
          <div className="z-10 w-full max-w-sm space-y-3">
            <div className="flex justify-between items-end border-b border-border pb-2">
              <div className="w-32 h-4 bg-muted rounded" />
              <div className="w-16 h-4 bg-purple-500/20 rounded" />
            </div>
            <div className="flex justify-between items-end border-b border-border pb-2">
              <div className="w-40 h-4 bg-muted rounded" />
              <div className="w-20 h-4 bg-purple-500/20 rounded" />
            </div>
            <div className="flex justify-between items-end border-b border-border pb-2">
              <div className="w-24 h-4 bg-muted rounded" />
              <div className="w-16 h-4 bg-purple-500/20 rounded" />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight">
            Every tool you need, in one single place.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Discover the power of the most comprehensive F&B operating system.
          </p>
        </div>
      </section>

      {/* Modules */}
      <div className="bg-background pb-32">
        {modules.map((mod, index) => (
          <section key={mod.id} className="py-24 border-t border-border/50">
            <div className="container mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-tight tracking-tight">
                    {mod.title}
                  </h2>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    {mod.desc}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {mod.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium">
                        <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`h-[400px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {mod.graphic}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-dark-green-gradient text-white py-32">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight">
            Ready to transform your operations?
          </h2>
          <div className="mt-10">
            <Link href="/lien-he">
              <Button variant="solid" className="px-10 py-5 text-xl">Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

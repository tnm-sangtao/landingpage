import { TechTag, AmbientGlow, ScrollReveal, WordReveal } from "@/components/shared";

export default function Showcase() {
  const cards = [
    { id: 1, name: "The Rooftop Bar", type: "Bar & Lounge", loc: "District 1, HCMC", height: "h-[400px]", img: "/rooftop_bar.png" },
    { id: 2, name: "Pho Viet", type: "Restaurant Chain", loc: "Hanoi", height: "h-[300px]", img: "/pho_viet.png" },
    { id: 3, name: "Café Ambrosia", type: "Café", loc: "Da Nang", height: "h-[450px]", img: "/cafe_ambrosia.png" },
    { id: 4, name: "Nam Omakase", type: "Fine Dining", loc: "District 3, HCMC", height: "h-[350px]", img: "/nam_omakase.png" },
    { id: 5, name: "Com Tam Ba 7", type: "Street Food", loc: "District 10, HCMC", height: "h-[400px]", img: "/com_tam.png" },
    { id: 6, name: "Tokyo Kissaten", type: "Specialty Coffee", loc: "District 1, HCMC", height: "h-[300px]", img: "/tokyo_kissaten.png" },
    { id: 7, name: "La Brasserie", type: "Bistro", loc: "Da Lat", height: "h-[350px]", img: "/la_brasserie.png" },
    { id: 8, name: "Hem Beer", type: "Craft Beer", loc: "Hai Phong", height: "h-[400px]", img: "/hem_beer.png" },
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen text-zinc-900 relative overflow-hidden">
      <AmbientGlow color="emerald" className="top-10 right-10 opacity-15 scale-150" />
      <AmbientGlow color="sky" className="bottom-10 left-10 opacity-10 scale-120" />

      <section className="pt-32 pb-20 text-center hero-dot-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal className="text-center">
            <TechTag color="orange">Success Stories</TechTag>
            <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-black text-zinc-900 hero-title">
              <WordReveal text="Spaces from restaurants trusting GastroHub." />
            </h1>
            <p className="mt-4 text-xl text-zinc-500 max-w-2xl mx-auto">
              See how world-class culinary businesses scale their workflow and elevate guest experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {cards.map((card) => (
              <div 
                key={card.id} 
                className={`relative w-full ${card.height} rounded-3xl overflow-hidden group cursor-pointer break-inside-avoid border border-zinc-200/60 hover:border-primary/30 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.03)]`}
              >
                {/* Image background */}
                <img 
                  src={card.img} 
                  alt={card.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient - slightly darker for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:from-black/85" />
                
                {/* Decorative glowing light dot */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-primary/45 shadow-[0_0_8px_rgba(16,185,129,0.5)] opacity-60 group-hover:opacity-100 transition-opacity z-20" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white flex flex-col justify-end z-20">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">{card.type}</div>
                      <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">{card.name}</h3>
                    </div>
                    <div className="text-xs font-semibold bg-black/40 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-zinc-300 shadow-sm">
                      {card.loc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { TechTag } from "@/components/shared";

export default function Showcase() {
  const cards = [
    { id: 1, name: "The Rooftop Bar", type: "Bar & Lounge", loc: "District 1, HCMC", height: "h-[400px]", gradient: "from-blue-900 to-slate-800" },
    { id: 2, name: "Pho Viet", type: "Restaurant Chain", loc: "Hanoi", height: "h-[300px]", gradient: "from-orange-800 to-red-900" },
    { id: 3, name: "Café Ambrosia", type: "Café", loc: "Da Nang", height: "h-[450px]", gradient: "from-emerald-800 to-teal-900" },
    { id: 4, name: "Nam Omakase", type: "Fine Dining", loc: "District 3, HCMC", height: "h-[350px]", gradient: "from-purple-900 to-slate-900" },
    { id: 5, name: "Com Tam Ba 7", type: "Street Food", loc: "District 10, HCMC", height: "h-[400px]", gradient: "from-amber-700 to-orange-900" },
    { id: 6, name: "Tokyo Kissaten", type: "Specialty Coffee", loc: "District 1, HCMC", height: "h-[300px]", gradient: "from-stone-700 to-neutral-900" },
    { id: 7, name: "La Brasserie", type: "Bistro", loc: "Da Lat", height: "h-[350px]", gradient: "from-rose-800 to-pink-900" },
    { id: 8, name: "Hem Beer", type: "Craft Beer", loc: "Hai Phong", height: "h-[400px]", gradient: "from-indigo-900 to-blue-900" },
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <TechTag>Success Stories</TechTag>
          <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight">
            Spaces from restaurants trusting GastroHub.
          </h1>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {cards.map((card) => (
              <div 
                key={card.id} 
                className={`relative w-full ${card.height} rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid`}
              >
                {/* Abstract gradient background simulating interior vibe */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">{card.type}</div>
                      <h3 className="text-2xl font-bold">{card.name}</h3>
                    </div>
                    <div className="text-sm bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
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

import React, { useEffect, useRef } from "react";

export function TechTag({ children, color = "orange" }: { children: React.ReactNode; color?: "orange" | "purple" }) {
  const isOrange = color === "orange";
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-[10px] uppercase font-bold tracking-[0.15em] rounded-full border ${
        isOrange
          ? "border-primary/20 bg-primary/5 text-primary"
          : "border-purple-500/20 bg-purple-500/5 text-purple-600"
      }`}
    >
      {children}
    </span>
  );
}

export function AmbientGlow({ color = "orange", className = "" }: { color?: "orange" | "purple"; className?: string }) {
  return <div className={`radial-glow-${color} ${className}`} />;
}

export function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={cardRef} className={`bento-card ${className}`}>
      {children}
    </div>
  );
}

export function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Button({ 
  children, 
  variant = "solid", 
  className = "",
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" }) {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-150 active:scale-96";
  const variants = {
    solid: "bg-primary text-primary-foreground hover:bg-[#E04700]",
    outline: "border-2 border-border bg-transparent text-foreground hover:border-primary hover:text-primary"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

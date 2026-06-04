import { Link, useRoute } from "wouter";
import { Button } from "./shared";
import { useState } from "react";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [isActive] = useRoute(href);
  return (
    <Link href={href}>
      <div className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${isActive ? "text-primary" : "text-muted-foreground"}`}>
        {children}
      </div>
    </Link>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="text-xl font-extrabold text-primary tracking-tight cursor-pointer">
            GastroHub
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/tinh-nang">Features</NavLink>
          <NavLink href="/showcase">Showcase</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/bang-gia">Pricing</NavLink>
          <NavLink href="/lien-he">Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/lien-he">
            <Button variant="solid" className="text-sm px-4 py-2">Start Free Trial</Button>
          </Link>
        </div>

        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={isOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border flex flex-col p-4 gap-4 shadow-lg">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/tinh-nang">Features</NavLink>
          <NavLink href="/showcase">Showcase</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/bang-gia">Pricing</NavLink>
          <NavLink href="/lien-he">Contact</NavLink>
          <Link href="/lien-he">
            <Button variant="solid" className="w-full mt-2">Start Free Trial</Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="text-xl font-extrabold text-primary tracking-tight mb-4">GastroHub</div>
          <p className="text-muted-foreground max-w-sm mb-6">
            Next-generation F&B operating system. Integrate your entire restaurant workflow into a clean, fast control grid.
          </p>
          <p className="text-sm text-muted-foreground/60">
            &copy; {new Date().getFullYear()} GastroHub. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-3">
          <Link href="/"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Home</span></Link>
          <Link href="/tinh-nang"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Features</span></Link>
          <Link href="/showcase"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Showcase</span></Link>
          <Link href="/blog"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Blog</span></Link>
          <Link href="/bang-gia"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Pricing</span></Link>
          <Link href="/lien-he"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Contact</span></Link>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

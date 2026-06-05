import { Link, useRoute } from "wouter";
import { Button } from "./shared";
import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

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

        <div className="hidden md:flex items-center gap-3">
          <Link href="/showcase">
            <Button variant="outline" className="text-sm px-4 py-2">Watch Demo</Button>
          </Link>
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
          <Link href="/showcase">
            <Button variant="outline" className="w-full mt-2">Watch Demo</Button>
          </Link>
          <Link href="/lien-he">
            <Button variant="solid" className="w-full">Start Free Trial</Button>
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
        <div className="flex gap-3.5 md:justify-end items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 flex items-center justify-center border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm">
            <Facebook className="w-4.5 h-4.5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 flex items-center justify-center border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm">
            <Twitter className="w-4.5 h-4.5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 flex items-center justify-center border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm">
            <Instagram className="w-4.5 h-4.5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 flex items-center justify-center border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm">
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 flex items-center justify-center border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm">
            <Github className="w-4.5 h-4.5" />
          </a>
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

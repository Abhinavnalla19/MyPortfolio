'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = ({ isMobile = false }) => (
    <nav
      className={`flex items-center gap-1 ${isMobile ? 'flex-col space-y-4 pt-8' : 'gap-6'}`}
    >
      {navLinks.map(({ href, label }) => (
        <Button
          key={href}
          variant="link"
          asChild
          className="text-muted-foreground transition-colors hover:text-primary hover:no-underline"
          onClick={() => isMobile && setOpen(false)}
        >
          <a href={href}>{label}</a>
        </Button>
      ))}
    </nav>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-lg transition-colors duration-300 ${
        isScrolled ? 'border-border bg-background/80' : 'border-transparent bg-background/50'
      }`}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold transition-colors hover:text-primary">
          <Code className="h-6 w-6 text-primary" />
          <span>Abhinav Kumar Nalla</span>
        </a>

        <div className="hidden md:flex">
          <NavContent />
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col items-center">
                <NavContent isMobile={true} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

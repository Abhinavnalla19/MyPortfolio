'use client';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';

const GridPattern = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div 
        className="absolute inset-0 bg-repeat"
        style={{
          '--grid-size': '32px',
          '--grid-color': 'rgba(255, 255, 255, 0.05)',
          backgroundImage: 'linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)',
          backgroundSize: 'var(--grid-size) var(--grid-size)',
          animation: 'keyframes-grid 20s linear infinite',
        } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlightStyle, setSpotlightStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setSpotlightStyle({
          background: `radial-gradient(circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 40%)`,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative w-full h-[80svh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <GridPattern />
        <div className="absolute inset-0" style={spotlightStyle}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/70">
          Abhinav Nalla
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-primary md:text-xl font-headline">
          Software Developer & AI Enthusiast
        </p>
        <p className="mx-auto mt-4 max-w-[600px] text-base text-muted-foreground">
          With a strong foundation in Data Structures &amp; Algorithms, I am passionate about crafting efficient, scalable code and leveraging Machine Learning to build impactful, real-world applications.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}

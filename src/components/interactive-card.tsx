'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Card, CardProps } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface InteractiveCardProps extends CardProps {
  children: React.ReactNode;
}

const InteractiveCard = React.forwardRef<HTMLDivElement, InteractiveCardProps>(
  ({ className, children, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const cardRef = (ref || internalRef) as React.RefObject<HTMLDivElement>;
    const [glowStyle, setGlowStyle] = useState({});
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setGlowStyle({
            left: `${x - 200}px`,
            top: `${y - 200}px`,
          });
        }
      };
      if (isHovered) {
        window.addEventListener('mousemove', handleMouseMove);
      }
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, [isHovered, cardRef]);

    return (
      <Card
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn("group relative overflow-hidden transition-all duration-300 hover:bg-secondary/50 hover:shadow-2xl hover:shadow-primary/10", className)}
        {...props}
      >
        <div
          className={`glow-effect ${isHovered ? 'glow-effect-active' : ''}`}
          style={{ ...glowStyle, width: '400px', height: '400px' }}
        ></div>
        <div className="relative z-10 flex h-full flex-col">
          {children}
        </div>
      </Card>
    );
  }
);
InteractiveCard.displayName = 'InteractiveCard';
export { InteractiveCard };

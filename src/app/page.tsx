import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import ExperienceSection from '@/components/sections/experience';
import ContactSection from '@/components/sections/contact';
import { AnimatedSection } from '@/components/animated-section';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <div className="space-y-24 md:space-y-32">
          <AnimatedSection>
            <AboutSection />
          </AnimatedSection>
          <AnimatedSection>
            <ProjectsSection />
          </AnimatedSection>
          <AnimatedSection>
            <SkillsSection />
          </AnimatedSection>
          <AnimatedSection>
            <ExperienceSection />
          </AnimatedSection>
          <AnimatedSection>
            <ContactSection />
          </AnimatedSection>
        </div>
      </main>
      <footer className="w-full bg-background py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abhinav Kumar Nalla. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

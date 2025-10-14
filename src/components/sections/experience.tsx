import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, Award } from 'lucide-react';
import { InteractiveCard } from '../interactive-card';

const experiences = [
  {
    role: 'AI Developer',
    company: 'VISWAM.AI',
    period: 'Part-time',
    description: 'Contributed over 100 multimodal Telugu cultural data samples across 6+ categories to enhance a regional large language model.',
  }
];

const certifications = [
  {
    title: 'Deloitte Australia Data Analytics Job Simulation',
    issuer: 'Forage',
    date: 'May 2024',
  },
  {
    title: 'Smart Interviews DSA Training Program',
    issuer: 'Smart Interviews',
    description: '50+ hours of structured instruction in Data Structures and Algorithms.',
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience &amp; Certifications
            </h2>
             <p className="mt-4 text-muted-foreground">My professional journey and qualifications.</p>
        </div>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-semibold">
              <Briefcase className="h-7 w-7 text-primary" />
              Experience
            </h3>
            <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:h-full before:w-0.5 before:bg-border">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[2.1rem] top-[0.4rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                  <p className="font-semibold">{exp.role}</p>
                  <p className="text-sm font-medium text-muted-foreground">{exp.company} - <span className="italic">{exp.period}</span></p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-semibold">
              <Award className="h-7 w-7 text-primary" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <InteractiveCard key={index} className="bg-secondary/30">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>
                      {cert.issuer} {cert.date && `• ${cert.date}`}
                    </CardDescription>
                  </CardHeader>
                   {cert.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </CardContent>
                  )}
                </InteractiveCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

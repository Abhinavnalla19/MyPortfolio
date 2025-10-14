'use client';
import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import React from 'react';
import { InteractiveCard } from '../interactive-card';

const projects = [
  {
    featured: true,
    title: 'SMS Spam Detector',
    description: "An ML-based classifier built with Natural Language Processing (NLP) and a Support Vector Classifier (SVC) to achieve 95% detection accuracy. Features an interactive console-style interface for real-time classification.",
    stack: ['Python', 'scikit-learn', 'Flask', 'TF-IDF'],
    link: 'https://spam-detector-jrdf.onrender.com/',
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <InteractiveCard className="bg-secondary/30">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-2xl">{project.title}</CardTitle>
            {project.featured && <Badge variant="outline" className="border-primary text-primary">Featured</Badge>}
          </div>
          <CardDescription className="pt-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold mr-2">Tech Stack:</span>
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-code">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full md:w-auto" variant="outline">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Link
            </a>
          </Button>
        </CardFooter>
    </InteractiveCard>
  );
};


export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
            <p className="mt-4 text-muted-foreground">
              A selection of projects where I've applied my skills to build practical solutions.
            </p>
        </div>

        <div className="mt-12 grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

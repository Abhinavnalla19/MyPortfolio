import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
            </p>
        </div>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <a href="mailto:abhinavnalla10@gmail.com" className="group flex items-center gap-4 transition-colors hover:text-primary">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-secondary/50 transition-colors group-hover:border-primary group-hover:bg-accent">
                   <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">abhinavnalla10@gmail.com</p>
                </div>
              </a>
              <div className="group flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-secondary/50">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">+91 9494890250</p>
                </div>
              </div>
              <div className="group flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-secondary/50">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 pt-4">
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/Abhinavnalla19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://www.linkedin.com/in/nallaabhinav" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

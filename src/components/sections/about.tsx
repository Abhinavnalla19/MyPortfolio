import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { GraduationCap, Trophy } from 'lucide-react';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { InteractiveCard } from '@/components/interactive-card';

export default function AboutSection() {
  const profileImage = placeholderImages.profile;
  return (
    <section id="about" className="w-full py-20 md:py-28">
      <div className="container mx-auto grid max-w-7xl items-start gap-12 px-4 md:grid-cols-3 md:gap-16">
        <div className="relative mx-auto w-full max-w-xs">
          <div className="group aspect-square">
            <Image
              src={profileImage.src}
              width={profileImage.width}
              height={profileImage.height}
              alt={profileImage.alt}
              className="rounded-lg object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={profileImage.hint}
            />
          </div>
        </div>
        <div className="space-y-8 md:col-span-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="text-muted-foreground">
              I am a dedicated Computer Science Engineering student with a strong passion for
              problem-solving and AI development. My journey in tech is driven by a desire to
              continuously learn and enhance my technical expertise.
            </p>
            <p className="mt-4 text-muted-foreground">
              Beyond my curriculum, I have served as a mathematics mentor, which has sharpened my
              analytical and communication skills. I am keen on applying my knowledge in real-world
              scenarios and contributing to advancements in artificial intelligence.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <InteractiveCard className="bg-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">B.Tech in Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground">
                    Sreenidhi Institute of Science and Technology
                  </p>
                </div>
                <div>
                  <p className="font-semibold">CGPA: 8.1 / 10.0</p>
                  <p className="text-sm text-muted-foreground">Graduation expected in 2025</p>
                </div>
              </CardContent>
            </InteractiveCard>
             <InteractiveCard className="bg-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Trophy className="h-6 w-6 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Solved 700+ DSA problems on LeetCode</li>
                  <li>Mathematics Mentor</li>
                </ul>
              </CardContent>
            </InteractiveCard>
          </div>
        </div>
      </div>
    </section>
  );
}

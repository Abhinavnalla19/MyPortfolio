import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, BrainCircuit, Component, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["C", "C++", "Python"],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="h-8 w-8 text-primary" />,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "ML & AI",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    skills: ["scikit-learn", "NumPy", "Pandas", "Matplotlib", "CNN", "RNN", "LSTM", "Transformers"],
  },
  {
    title: "Tools & Platforms",
    icon: <Component className="h-8 w-8 text-primary" />,
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab"],
  },
  {
    title: "Core CS",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "DBMS"],
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-muted-foreground">
            My technical toolkit, constantly being refined and expanded.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-secondary/30 transition-all hover:bg-secondary/50 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-secondary px-3 py-1 text-sm font-code text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

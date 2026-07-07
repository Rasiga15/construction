import { useMemo, useState } from 'react';
import { useSeo } from '@/hooks/useSeo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectFilter from '@/components/projects/ProjectFilter';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';
import { ProjectCategory } from '@/types';

export default function Projects() {
  useSeo(
    'Our Projects | Eezhaa Constructions',
    'Browse residential, commercial, interior and renovation projects delivered by Eezhaa Constructions across Tamil Nadu.'
  );

  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <section className="relative flex h-[42vh] min-h-[320px] items-end overflow-hidden bg-steel-950 pb-14 pt-32">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt="Completed construction projects"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/70 to-steel-950/40" />
        <div className="container-page relative">
          <span className="eyebrow text-rebar-400">
            <span className="h-px w-8 bg-rebar-500" /> Portfolio
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Our Projects</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Filter by Type"
              title="Every Project, Sorted the Way You Build"
              align="center"
            />
          </AnimatedSection>

          <div className="mt-10">
            <ProjectFilter active={filter} onChange={setFilter} />
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={(i % 3) * 100}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-14 text-center font-body text-concrete-500">No projects found in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}

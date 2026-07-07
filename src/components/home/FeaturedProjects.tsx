import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Recent Work"
              title="Projects We're Proud to Have Built"
            />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <Link to="/projects" className="btn-outline-dark shrink-0">
              View All Projects <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 100}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

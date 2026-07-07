import { useState } from 'react';
import { ArrowUpRight, MapPin, X, Calendar, Ruler } from 'lucide-react';
import { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group relative overflow-hidden rounded-sm border border-concrete-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-950/80 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-sm bg-rebar-500 px-3 py-1 font-display text-xs uppercase tracking-wider text-steel-900">
            {project.category}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-concrete-400">
            <MapPin size={12} /> {project.location}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-steel-900">{project.title}</h3>
          <p className="mt-2 font-body text-sm normal-case tracking-normal text-concrete-500">
            {project.description}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-5 inline-flex items-center gap-1.5 font-display text-xs uppercase tracking-wider text-steel-700 transition-colors hover:text-rebar-600"
          >
            View Details <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-steel-950/80 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-sm bg-white animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={project.image} alt={project.title} className="h-72 w-full object-cover" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close details"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-steel-900 shadow-md"
            >
              <X size={18} />
            </button>
            <div className="p-8">
              <span className="rounded-sm bg-steel-800 px-3 py-1 font-display text-xs uppercase tracking-wider text-rebar-400">
                {project.category}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-steel-900">{project.title}</h3>
              <div className="mt-3 flex flex-wrap gap-5 font-mono text-xs uppercase tracking-wider text-concrete-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} /> {project.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {project.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <Ruler size={14} /> {project.area}
                </span>
              </div>
              <p className="mt-5 font-body text-sm normal-case tracking-normal leading-relaxed text-concrete-600">
                {project.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

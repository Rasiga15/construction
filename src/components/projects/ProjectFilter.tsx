import { ProjectCategory } from '@/types';

const CATEGORIES: Array<ProjectCategory | 'All'> = ['All', 'Residential', 'Commercial', 'Interior', 'Renovation'];

interface ProjectFilterProps {
  active: ProjectCategory | 'All';
  onChange: (category: ProjectCategory | 'All') => void;
}

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-sm px-5 py-2.5 font-display text-xs uppercase tracking-wider transition-all duration-200 ${
            active === cat
              ? 'bg-steel-800 text-rebar-500 shadow-md'
              : 'border border-concrete-300 text-concrete-500 hover:border-steel-700 hover:text-steel-800'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

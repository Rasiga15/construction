import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const STATS = [
  { value: '12+', label: 'Years Building' },
  { value: '180+', label: 'Projects Delivered' },
  { value: '95%', label: 'On-Time Handover' },
  { value: '40+', label: 'Site Engineers' },
];

export default function Intro() {
  return (
    <section className="bg-white py-24">
      <div className="container-page grid gap-16 lg:grid-cols-2 lg:items-center">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Who We Are"
            title="A Construction Partner That Builds Like It's Their Own Home"
            description="Eezhaa Constructions has spent over a decade turning plots into homes and shells into workplaces across Tamil Nadu. We plan every beam, slab and finish with the same reinforcement standards the industry trusts — and a site team that answers your calls."
          />
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-steel-700 transition-colors hover:text-rebar-600"
          >
            More About Us <ArrowRight size={16} />
          </Link>
        </AnimatedSection>

        <AnimatedSection variant="zoom" delay={120}>
          <div className="grid grid-cols-2 gap-5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-concrete-200 bg-concrete-50 p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="font-display text-3xl text-steel-800">{stat.value}</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-concrete-500">
                  {stat.label}
                </div>
                <div className="mt-4 h-1 w-10 rounded-full bg-rebar-gradient bg-[length:200%_100%]" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

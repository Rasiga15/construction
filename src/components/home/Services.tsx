import { Home, Building2, Sofa, Hammer, Ruler, ClipboardCheck, LucideIcon } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/data/services';

const ICONS: Record<string, LucideIcon> = {
  home: Home,
  'building-2': Building2,
  sofa: Sofa,
  hammer: Hammer,
  ruler: Ruler,
  'clipboard-check': ClipboardCheck,
};

export default function Services() {
  return (
    <section className="bg-concrete-50 py-24">
      <div className="container-page">
        <AnimatedSection>
          <SectionHeading
            eyebrow="What We Do"
            title="Services Built Around Your Project"
            align="center"
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Home;
            return (
              <AnimatedSection key={service.id} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-sm border border-concrete-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-steel-700 hover:shadow-xl">
                  <div className="absolute left-0 top-0 h-1 w-0 bg-rebar-500 transition-all duration-300 group-hover:w-full" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-steel-800 text-rebar-500 transition-colors duration-300 group-hover:bg-rebar-500 group-hover:text-steel-900">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-steel-900">{service.title}</h3>
                  <p className="mt-3 font-body text-sm normal-case tracking-normal text-concrete-500">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

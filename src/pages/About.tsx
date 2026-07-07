import { Target, Eye, HeartHandshake, Award, Users2, Building } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const VALUES = [
  { icon: Award, title: 'Quality First', text: 'Certified materials and third-party testing on every structural pour.' },
  { icon: HeartHandshake, title: 'Honest Estimates', text: 'Line-itemised quotes with no hidden variations mid-build.' },
  { icon: Users2, title: 'People Who Answer', text: 'A named project manager reachable throughout construction.' },
  { icon: Building, title: 'Built to Last', text: 'Structural planning that accounts for decades, not just handover day.' },
];

const HIGHLIGHTS = [
  { value: '2013', label: 'Founded' },
  { value: '180+', label: 'Projects Delivered' },
  { value: '40+', label: 'In-House Engineers & Site Staff' },
  { value: '12+', label: 'Districts Served Across TN' },
];

export default function About() {
  useSeo(
    'About Us | Eezhaa Constructions',
    'Learn about Eezhaa Constructions — our story, vision, mission and the values behind every project we deliver.'
  );

  return (
    <>
      <section className="relative flex h-[52vh] min-h-[380px] items-end overflow-hidden bg-steel-950 pb-16 pt-32">
        <img
          src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?auto=format&fit=crop&w=1800&q=80"
          alt="Eezhaa Constructions site team"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/70 to-steel-950/40" />
        <div className="container-page relative">
          <span className="eyebrow text-rebar-400">
            <span className="h-px w-8 bg-rebar-500" /> About Eezhaa Constructions
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Built on Twelve Years of Keeping Our Word
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Story"
              title="From a Two-Person Site Office to a Full-Service Builder"
              description="Eezhaa Constructions started in 2013 with a single residential contract in Coimbatore. Word-of-mouth from that first family carried us into commercial fit-outs, then full interior design, then renovation work for properties others had given up on. Today our in-house team covers structural planning, site execution, interiors and project management — all under one roof, one contract, one point of accountability."
            />
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-steel-700 transition-colors hover:text-rebar-600">
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </AnimatedSection>

          <AnimatedSection variant="zoom" delay={100}>
            <div className="grid grid-cols-2 gap-5">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="rounded-sm border border-concrete-200 bg-concrete-50 p-7">
                  <div className="font-display text-3xl text-steel-800">{h.value}</div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-wider text-concrete-500">{h.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-concrete-50 py-24">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <AnimatedSection>
            <div className="h-full rounded-sm border-t-4 border-rebar-500 bg-white p-10 shadow-sm">
              <Eye className="text-rebar-500" size={32} />
              <h3 className="mt-5 text-2xl font-semibold text-steel-900">Our Vision</h3>
              <p className="mt-4 font-body text-base normal-case tracking-normal text-concrete-500">
                To be the construction partner Tamil Nadu families and businesses trust first — known as much
                for keeping our word as for the quality of what we build.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="h-full rounded-sm border-t-4 border-steel-700 bg-white p-10 shadow-sm">
              <Target className="text-steel-700" size={32} />
              <h3 className="mt-5 text-2xl font-semibold text-steel-900">Our Mission</h3>
              <p className="mt-4 font-body text-base normal-case tracking-normal text-concrete-500">
                Deliver every residential, commercial and interior project on schedule and on budget, using
                certified materials and a project team that treats each site like it's their own.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page">
          <AnimatedSection>
            <SectionHeading eyebrow="What We Stand For" title="Our Values" align="center" />
          </AnimatedSection>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 90}>
                <div className="group flex h-full flex-col items-center gap-4 rounded-sm border border-concrete-200 p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-steel-700 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-steel-800 text-rebar-500 transition-colors duration-300 group-hover:bg-rebar-500 group-hover:text-steel-900">
                    <v.icon size={24} />
                  </div>
                  <h3 className="font-display text-base text-steel-900">{v.title}</h3>
                  <p className="font-body text-sm normal-case tracking-normal text-concrete-500">{v.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

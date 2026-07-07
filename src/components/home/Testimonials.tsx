import { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section className="bg-concrete-50 py-24">
      <div className="container-page">
        <AnimatedSection>
          <SectionHeading eyebrow="Client Voices" title="What Homeowners & Businesses Say" align="center" />
        </AnimatedSection>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto mb-4 text-rebar-500" size={36} />
          <div className="min-h-[180px] text-center transition-opacity duration-500">
            <p className="font-body text-lg normal-case tracking-normal text-steel-800 sm:text-xl">
              “{t.quote}”
            </p>
            <div className="mt-6 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < t.rating ? 'fill-rebar-500 text-rebar-500' : 'text-concrete-300'}
                />
              ))}
            </div>
            <div className="mt-4 font-display text-sm uppercase tracking-wider text-steel-900">{t.name}</div>
            <div className="font-mono text-xs uppercase tracking-wider text-concrete-500">{t.role}</div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-concrete-300 text-steel-700 transition-colors hover:border-rebar-500 hover:text-rebar-600"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-rebar-500' : 'w-2 bg-concrete-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-concrete-300 text-steel-700 transition-colors hover:border-rebar-500 hover:text-rebar-600"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

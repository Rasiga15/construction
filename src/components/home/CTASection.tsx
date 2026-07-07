import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { SITE } from '@/data/site';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-steel-800 py-20">
      <div className="absolute inset-0 bg-blueprint opacity-20" />
      <div className="rebar-divider absolute inset-x-0 top-0" />
      <div className="container-page relative flex flex-col items-center gap-7 text-center">
        <AnimatedSection variant="zoom">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to Start Building Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base normal-case tracking-normal text-steel-100/80">
            Tell us your plot size, budget and timeline — we'll get back with a clear estimate within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Request a Free Quote <ArrowRight size={16} />
            </Link>
            <a href={`tel:+${SITE.phoneRaw}`} className="btn-outline">
              <Phone size={16} /> {SITE.phoneDisplay}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

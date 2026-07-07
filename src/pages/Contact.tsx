import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import EnquiryForm from '@/components/contact/EnquiryForm';
import { SITE } from '@/data/site';

export default function Contact() {
  useSeo(
    'Contact & Enquiry | Eezhaa Constructions',
    'Get in touch with Eezhaa Constructions for a free quote. Send an enquiry directly via WhatsApp or email.'
  );

  return (
    <>
      <section className="relative flex h-[42vh] min-h-[320px] items-end overflow-hidden bg-steel-950 pb-14 pt-32">
        <img
          src="https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=1800&q=80"
          alt="Contact Eezhaa Constructions"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/70 to-steel-950/40" />
        <div className="container-page relative">
          <span className="eyebrow text-rebar-400">
            <span className="h-px w-8 bg-rebar-500" /> Let's Talk
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Contact &amp; Enquiry</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-14 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-2">
            <SectionHeading
              eyebrow="Reach Us"
              title="Have a Plot Ready? Let's Talk Numbers."
              description="Share a few details below and we'll respond with a clear estimate within 24 hours — no obligation, no pushy follow-up calls."
            />

            <ul className="mt-9 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-steel-800 text-rebar-500">
                  <Phone size={19} />
                </span>
                <div>
                  <div className="font-display text-xs uppercase tracking-wider text-concrete-400">Call Us</div>
                  <a href={`tel:+${SITE.phoneRaw}`} className="font-body text-base text-steel-900">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-steel-800 text-rebar-500">
                  <Mail size={19} />
                </span>
                <div>
                  <div className="font-display text-xs uppercase tracking-wider text-concrete-400">Email Us</div>
                  <a href={`mailto:${SITE.email}`} className="font-body text-base text-steel-900">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-steel-800 text-rebar-500">
                  <MapPin size={19} />
                </span>
                <div>
                  <div className="font-display text-xs uppercase tracking-wider text-concrete-400">Visit Us</div>
                  <p className="font-body text-base text-steel-900">{SITE.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-steel-800 text-rebar-500">
                  <Clock size={19} />
                </span>
                <div>
                  <div className="font-display text-xs uppercase tracking-wider text-concrete-400">Working Hours</div>
                  <p className="font-body text-base text-steel-900">Mon – Sat, 9:00 AM – 6:30 PM</p>
                </div>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection variant="zoom" delay={100} className="lg:col-span-3">
            <div className="rounded-sm border border-concrete-200 bg-concrete-50 p-8 shadow-sm sm:p-10">
              <EnquiryForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-concrete-200">
        <iframe
          title="Eezhaa Constructions location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapEmbedQuery)}&output=embed`}
          className="h-96 w-full grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

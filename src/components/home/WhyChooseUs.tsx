import { ShieldCheck, Clock, Wallet, Users } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Certified Reinforcement',
    text: 'Every structural project uses TATA TISCON-grade rebar with third-party lab testing on request.',
  },
  {
    icon: Clock,
    title: 'Schedules We Keep',
    text: '95% of our projects in the last 3 years were handed over on or before the committed date.',
  },
  {
    icon: Wallet,
    title: 'Transparent Costing',
    text: 'A line-itemised estimate before we break ground — no surprise variations mid-project.',
  },
  {
    icon: Users,
    title: 'One Team, Start to Finish',
    text: 'The same project manager stays with you from soil test to handover keys.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-steel-900 py-24">
      <div className="absolute inset-0 bg-blueprint opacity-40" />
      <div className="container-page relative">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why Eezhaa"
            title="Reasons Owners Come Back to Us for Their Next Project"
            light
            align="center"
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <AnimatedSection key={reason.title} variant="zoom" delay={i * 100}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-sm border border-steel-700/60 p-8 text-center transition-all duration-300 hover:border-rebar-500 hover:bg-steel-800/60">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-rebar-500 text-rebar-400 transition-transform duration-300 group-hover:scale-110">
                  <reason.icon size={28} />
                </div>
                <h3 className="font-display text-base text-white">{reason.title}</h3>
                <p className="font-body text-sm normal-case tracking-normal text-steel-200/80">
                  {reason.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

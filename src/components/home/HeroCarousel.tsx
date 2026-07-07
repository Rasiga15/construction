import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80',
    eyebrow: 'Est. Coimbatore',
    title: 'We Build the Frame, You Build the Memories',
    subtitle: 'Residential & commercial construction engineered with TATA TISCON-grade steel.',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
    eyebrow: 'On Schedule, Every Time',
    title: 'From Blueprint to Handover — On One Timeline',
    subtitle: 'A single point of contact tracks your budget, quality and schedule daily.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80',
    eyebrow: 'Interiors That Finish the Story',
    title: 'A Finished Shell Deserves a Finished Home',
    subtitle: 'Space planning, modular fit-outs and finishes built to match your mood board.',
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-steel-950">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
              i === index ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/60 to-steel-950/30" />
          <div className="absolute inset-0 bg-blueprint opacity-30 mix-blend-overlay" />
        </div>
      ))}

      <div className="container-page relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-2xl">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i === index ? 'relative opacity-100 translate-y-0' : 'absolute opacity-0 translate-y-6'
              }`}
            >
              <span className="eyebrow text-rebar-400">
                <span className="h-px w-8 bg-rebar-500" />
                {slide.eyebrow}
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-lg font-body text-base normal-case tracking-normal text-steel-100/85 sm:text-lg">
                {slide.subtitle}
              </p>
            </div>
          ))}

          <div className="mt-6 h-1.5 w-28 rounded-full bg-rebar-gradient bg-[length:200%_100%]" />

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn-outline">
              <Play size={14} /> View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 sm:flex">
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-rebar-500 hover:text-rebar-500"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-rebar-500 hover:text-rebar-500"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:left-auto sm:translate-x-0 sm:right-8 sm:bottom-24">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-rebar-500' : 'w-3 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

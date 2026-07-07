import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { gallery } from '@/data/gallery';

export default function Gallery() {
  useSeo(
    'Gallery | Eezhaa Constructions',
    'A visual look at Eezhaa Constructions sites, completed homes, offices and interiors across Tamil Nadu.'
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length));
  const showPrev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));

  return (
    <>
      <section className="relative flex h-[42vh] min-h-[320px] items-end overflow-hidden bg-steel-950 pb-14 pt-32">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
          alt="Eezhaa Constructions gallery"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/70 to-steel-950/40" />
        <div className="container-page relative">
          <span className="eyebrow text-rebar-400">
            <span className="h-px w-8 bg-rebar-500" /> Visual Diary
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Gallery</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <AnimatedSection>
            <SectionHeading eyebrow="Sites & Spaces" title="A Look at the Work Behind the Handover" align="center" />
          </AnimatedSection>

          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {gallery.map((item, i) => (
              <AnimatedSection key={item.id} delay={(i % 3) * 90}>
                <button
                  onClick={() => setActiveIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-sm"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-steel-950/85 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-display text-sm uppercase tracking-wider text-white">{item.caption}</p>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-steel-950/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft size={22} />
          </button>
          <img
            src={gallery[activeIndex].image}
            alt={gallery[activeIndex].caption}
            className="max-h-[80vh] max-w-4xl rounded-sm object-contain animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8"
          >
            <ChevronRight size={22} />
          </button>
          <p className="absolute bottom-8 font-display text-sm uppercase tracking-wider text-white">
            {gallery[activeIndex].caption}
          </p>
        </div>
      )}
    </>
  );
}

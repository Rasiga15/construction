import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { blogPosts } from '@/data/blog';

export default function Blog() {
  useSeo(
    'Blog | Eezhaa Constructions',
    'Practical construction guides, material advice and site stories from the Eezhaa Constructions team.'
  );

  return (
    <>
      <section className="relative flex h-[42vh] min-h-[320px] items-end overflow-hidden bg-steel-950 pb-14 pt-32">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1800&q=80"
          alt="Eezhaa Constructions blog"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/70 to-steel-950/40" />
        <div className="container-page relative">
          <span className="eyebrow text-rebar-400">
            <span className="h-px w-8 bg-rebar-500" /> Notes From the Site
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Blog</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <AnimatedSection>
            <SectionHeading eyebrow="Guides & Insights" title="Practical Reading for Anyone Planning to Build" align="center" />
          </AnimatedSection>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.id} delay={(i % 2) * 100}>
                <article className="group flex flex-col overflow-hidden rounded-sm border border-concrete-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:flex-row">
                  <div className="h-52 overflow-hidden sm:h-auto sm:w-48 sm:shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <span className="w-fit rounded-sm bg-steel-800 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-rebar-400">
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-steel-900">{post.title}</h3>
                    <p className="mt-2 font-body text-sm normal-case tracking-normal text-concrete-500">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 font-mono text-xs uppercase tracking-wider text-concrete-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex w-fit items-center gap-1.5 font-display text-xs uppercase tracking-wider text-steel-700 transition-colors group-hover:text-rebar-600">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

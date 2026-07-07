import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { SITE } from '@/data/site';

const QUICK_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const SERVICE_LINKS = ['Residential Construction', 'Commercial Construction', 'Interior Design', 'Renovation'];

export default function Footer() {
  return (
    <footer className="relative bg-steel-950 text-steel-100">
      <div className="rebar-divider" />
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-rebar-500 bg-white/5">
              <span className="font-display text-lg font-bold text-rebar-500">E</span>
            </span>
            <span className="font-display text-lg tracking-wide text-white">
              EEZHAA <span className="text-rebar-500">CONSTRUCTIONS</span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-steel-300">
            Residential, commercial and interior construction across Tamil Nadu — engineered with TATA
            TISCON-grade reinforcement and delivered on schedule.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Facebook, href: SITE.social.facebook },
              { Icon: Instagram, href: SITE.social.instagram },
              { Icon: Youtube, href: SITE.social.youtube },
              { Icon: Linkedin, href: SITE.social.linkedin },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-steel-700 text-steel-300 transition-colors duration-200 hover:border-rebar-500 hover:text-rebar-500"
                aria-label="Social media link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-white">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-steel-300 transition-colors hover:text-rebar-500">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-white">Services</h4>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((s) => (
              <li key={s} className="text-sm text-steel-300">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-white">Contact</h4>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3 text-sm text-steel-300">
              <MapPin size={18} className="mt-0.5 shrink-0 text-rebar-500" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-3 text-sm text-steel-300">
              <Phone size={18} className="shrink-0 text-rebar-500" />
              <a href={`tel:+${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-steel-300">
              <Mail size={18} className="shrink-0 text-rebar-500" />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel-800 py-6">
        <p className="container-page text-center text-xs text-steel-400">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

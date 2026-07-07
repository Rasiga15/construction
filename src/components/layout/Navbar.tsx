import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { SITE } from '@/data/site';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-display text-sm uppercase tracking-wider transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-rebar-500 after:transition-all after:duration-300 ${
      isActive ? 'text-rebar-500 after:w-full' : `${scrolled ? 'text-steel-800' : 'text-white'} after:w-0 hover:after:w-full hover:text-rebar-500`
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5">
          <span className={`flex h-10 w-10 items-center justify-center rounded-sm ${scrolled ? 'bg-steel-800' : 'bg-white/15'} border-2 border-rebar-500`}>
            <span className="font-display text-lg font-bold text-rebar-500">E</span>
          </span>
          <span className={`font-display text-lg tracking-wide ${scrolled ? 'text-steel-900' : 'text-white'}`}>
            EEZHAA <span className="text-rebar-500">CONSTRUCTIONS</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:+${SITE.phoneRaw}`}
            className={`flex items-center gap-2 font-display text-sm tracking-wide ${scrolled ? 'text-steel-800' : 'text-white'}`}
          >
            <Phone size={16} className="text-rebar-500" />
            {SITE.phoneDisplay}
          </a>
          <NavLink to="/contact" className="btn-primary !px-5 !py-2.5 !text-xs">
            Get a Quote
          </NavLink>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? 'text-steel-900' : 'text-white'}`}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-steel-900 transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-sm px-3 py-3 font-display text-sm uppercase tracking-wider ${
                  isActive ? 'bg-steel-800 text-rebar-500' : 'text-steel-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn-primary mt-2 w-full">
            Get a Quote
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

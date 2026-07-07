import { Link } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';

export default function NotFound() {
  useSeo('Page Not Found | Eezhaa Constructions');

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-concrete-50 px-6 pt-24 text-center">
      <span className="font-display text-7xl text-steel-800">404</span>
      <h1 className="text-2xl font-semibold text-steel-900">This page hasn't been built yet</h1>
      <p className="max-w-md font-body text-concrete-500">
        The page you're looking for doesn't exist or may have moved. Let's get you back to solid ground.
      </p>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </section>
  );
}

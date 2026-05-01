import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Page not found</p>
        <h1 className="text-5xl font-bold">Oops! This page does not exist.</h1>
        <p className="max-w-xl text-lg text-slate-300">
          The route you followed may have been removed or renamed. Use the link below to return home and continue exploring.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

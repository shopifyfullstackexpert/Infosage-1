import { ArrowRight, Globe, Smartphone, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoSlider from '../components/Logoslider';

const highlights = [
  {
    icon: Globe,
    title: 'Modern Web Experiences',
    description: 'Responsive, accessible web apps built for growth and performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Strategy',
    description: 'Native-quality mobile products that maximize engagement and conversions.',
  },
  {
    icon: Target,
    title: 'Business-Driven Results',
    description: 'Technology solutions built to move your business forward.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,29,37,0.18),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(8,45,74,0.25),_transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Trusted IT Solutions for Growing Businesses
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Build a technology experience that scales with your ambition.
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                InfoSage Technologies combines strategy, design, and engineering to deliver high-performance digital products that customers love.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:scale-[1.01] transition-transform"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-accent hover:text-accent transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
              <div className="space-y-6">
                <div className="text-sm uppercase tracking-[0.3em] text-accent">Client-first delivery</div>
                <p className="text-slate-300">
                  We deliver polished digital products with clear project milestones, active collaboration, and continuous improvement.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <item.icon className="mb-3 h-6 w-6 text-accent" />
                      <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                      <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Built for growing teams and modern brands</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Our team helps organizations launch distinctive digital products with strong strategy, polished design, and resilient engineering.
          </p>
        </div>
      </section>

      <LogoSlider />
    </main>
  );
}

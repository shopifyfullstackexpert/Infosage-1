import { Users } from 'lucide-react';
import AboutSection from '../components/AboutSection';
import SectionHeader from '../components/ui/SectionHeader';

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="About InfoSage"
            title="A team that delivers technology with purpose"
            description="We combine engineering excellence, creative thinking, and business expertise to help organizations launch products, improve operations, and win in digital markets."
            icon={Users}
            colorClass="text-primary"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
              <p className="text-slate-600 leading-relaxed">
                We start with discovery, build a clear product roadmap, and ship value quickly with an agile delivery cadence.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Why choose us</h3>
              <p className="text-slate-600 leading-relaxed">
                You get a single technology partner that focuses on strong communication, transparent estimates, and measurable outcomes.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Our promise</h3>
              <p className="text-slate-600 leading-relaxed">
                Reliable delivery, modern architecture, and ongoing support so your digital products stay competitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
    </main>
  );
}

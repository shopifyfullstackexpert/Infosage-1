import { Zap } from 'lucide-react';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import SectionHeader from '../components/ui/SectionHeader';

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen pt-24">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Services"
            title="Technology services that move your business forward"
            description="From product development to cloud strategy, our services are designed to deliver measurable growth, efficiency, and digital differentiation."
            icon={Zap}
            colorClass="text-accent"
          />
        </div>
      </section>

      <ServicesSection />
      <SolutionsSection />
    </main>
  );
}

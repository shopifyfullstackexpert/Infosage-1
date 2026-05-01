import { Mail } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import SectionHeader from '../components/ui/SectionHeader';

export default function ContactPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Contact Us"
            title="Let's build something impactful together"
            description="Whether you are launching a new product or modernizing existing systems, we're ready to help you move faster with confidence."
            icon={Mail}
            colorClass="text-primary"
          />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

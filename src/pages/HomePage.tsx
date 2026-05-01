import { ArrowRight, Globe, Smartphone, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollDrivenBanner from '../components/ScrollDrivenBanner';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import SolutionsSection from '../components/SolutionsSection';
import ContactSection from '../components/ContactSection';
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
    <main className="bg-slate-950 text-white">
      <ScrollDrivenBanner />

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Built for growing teams and modern brands</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Our team helps organizations launch distinctive digital products with strong strategy, polished design, and resilient engineering.
          </p>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <SolutionsSection />
      <ContactSection />

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LogoSlider />
        </div>
      </section>
    </main>
  );
}

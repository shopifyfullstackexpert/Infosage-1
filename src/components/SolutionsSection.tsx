import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle, Layers, Rocket, Target, Zap } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: 'Enterprise Software Development',
    description: 'Custom enterprise solutions designed to streamline operations, improve efficiency, and drive growth.',
    features: ['ERP Systems', 'CRM Solutions', 'Custom Dashboards', 'API Integration'],
    icon: Layers,
    gradient: 'from-primary to-primary-dark',
    featureBg: 'bg-primary/10',
    featureIcon: 'text-primary',
    textColor: 'text-primary',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to modernize your IT environment and reduce costs.',
    features: ['Cloud Migration', 'Cloud Architecture', 'DevOps Services', '24/7 Monitoring'],
    icon: Zap,
    gradient: 'from-accent to-accent-dark',
    featureBg: 'bg-accent/10',
    featureIcon: 'text-accent',
    textColor: 'text-accent',
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics solutions.',
    features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Custom Reports'],
    icon: Target,
    gradient: 'from-primary to-primary-dark',
    featureBg: 'bg-primary/10',
    featureIcon: 'text-primary',
    textColor: 'text-primary',
  },
];

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.solution-title',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.solution-card',
        { y: 80, opacity: 0, rotateX: -20 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Solutions"
          title="Detailed Services & Solutions"
          description="End-to-end technology solutions tailored to your business requirements."
          icon={Rocket}
          colorClass="text-primary"
          className="solution-title"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="solution-card group bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h4>
              <p className="text-gray-600 mb-4">{solution.description}</p>

              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className={`w-5 h-5 rounded-full ${solution.featureBg} flex items-center justify-center`}>
                      <CheckCircle className={`w-3 h-3 ${solution.featureIcon}`} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`${solution.textColor} font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`}>
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

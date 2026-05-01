import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Code, Star, Users } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, value: 250, suffix: '+', label: 'Happy Clients', gradient: 'from-primary/20 to-primary-dark/20', textColor: 'text-white' },
  { icon: Code, value: 35, suffix: '+', label: 'Expert Developers', gradient: 'from-accent/20 to-accent-dark/20', textColor: 'text-white' },
  { icon: Star, value: 99, suffix: '%', label: 'Satisfaction Rate', gradient: 'from-primary/20 to-primary-dark/20', textColor: 'text-white' },
  { icon: Award, value: 9, suffix: '+', label: 'Years Experience', gradient: 'from-accent/20 to-accent-dark/20', textColor: 'text-white' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        statsRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
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
        '.stat-card',
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      const statValues = statsRef.current?.querySelectorAll('.stat-number');
      statValues?.forEach((stat, index) => {
        const target = stats[index].value;
        gsap.to(stat, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        });
      });

      gsap.to('.stat-card', {
        boxShadow: '0 0 40px rgba(8, 45, 74, 0.3)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Why Choose Us"
          title="Numbers That Speak 22"
          description="Our track record speaks for itself - delivering exceptional results for clients worldwide."
          icon={Users}
          colorClass="text-accent"
        />

        <div ref={statsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-white/5 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-10 h-10 ${stat.textColor}`} />
              </div>
              <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <span className="stat-number">0</span>
                <span>{stat.suffix}</span>
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award, Brain, CheckCircle, Globe, Smartphone, TrendingUp } from 'lucide-react';
import Button from './ui/Button';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: CheckCircle, text: 'Expert Team', textColor: 'text-primary' },
  { icon: CheckCircle, text: 'Quality Assured', textColor: 'text-accent' },
  { icon: CheckCircle, text: '24/7 Support', textColor: 'text-primary' },
  { icon: CheckCircle, text: 'Agile Process', textColor: 'text-accent' },
];

const skillCards = [
  { icon: Brain, label: 'AI/ML', sublabel: 'Solutions', gradient: 'from-primary to-primary-dark' },
  { icon: Globe, label: 'Web', sublabel: 'Development', gradient: 'from-accent to-accent-dark' },
  { icon: Smartphone, label: 'Mobile', sublabel: 'Apps', gradient: 'from-primary to-primary-dark' },
  { icon: TrendingUp, label: 'Digital', sublabel: 'Marketing', gradient: 'from-accent to-accent-dark' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { rotationX: 30, rotationY: -15, opacity: 0, scale: 0.8 },
        {
          rotationX: 0,
          rotationY: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      gsap.fromTo(
        '.about-text-line',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      gsap.to('.skill-card', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 about-text-line">
              <span className="w-2 h-2 rounded-full bg-accent" /> About Company
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 about-text-line">
              Empowering Businesses Through Innovation
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-4 about-text-line">
              InfoSage Technologies is a leading IT solutions provider dedicated to helping businesses transform their operations through innovative technology solutions. With years of expertise and a passion for excellence, we deliver tailored solutions that drive growth and efficiency.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 about-text-line">
              Our vision is to be the trusted technology partner for businesses worldwide, delivering solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-2 about-text-line">
                  <item.icon className={`w-5 h-5 ${item.textColor}`} />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" trailingIcon={ArrowRight} className="about-text-line">
              Learn More About Us
            </Button>
          </div>

          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {skillCards.map((item, index) => (
                    <div
                      key={index}
                      className="skill-card bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-2`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white font-bold">{item.label}</span>
                      <span className="text-white/60 text-sm">{item.sublabel}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">9+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

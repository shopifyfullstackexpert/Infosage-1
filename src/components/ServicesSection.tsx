import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Smartphone, TrendingUp, Brain } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    gradient: 'from-primary to-primary-dark',
    hoverGlow: 'from-primary/10 to-accent/10',
    features: ['React/Next.js', 'E-commerce', 'CMS', 'PWA'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that engage users and drive business growth.',
    gradient: 'from-accent to-accent-dark',
    hoverGlow: 'from-accent/10 to-primary/10',
    features: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and generate qualified leads.',
    gradient: 'from-primary to-primary-dark',
    hoverGlow: 'from-primary/10 to-accent/10',
    features: ['SEO', 'PPC', 'Social Media', 'Content'],
  },
  {
    icon: Brain,
    title: 'AI/ML Solutions',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning to automate and innovate.',
    gradient: 'from-accent to-accent-dark',
    hoverGlow: 'from-accent/10 to-primary/10',
    features: ['NLP', 'Computer Vision', 'Predictive AI', 'Chatbots'],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.service-title') || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        '.service-card-3d',
        {
          rotateX: -15,
          rotateY: 15,
          opacity: 0,
          scale: 0.8,
          z: -100,
        },
        {
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          scale: 1,
          z: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      const cards = document.querySelectorAll('.service-card-3d');
      cards.forEach((card) => {
        const handleMouseMove = (e: MouseEvent) => {
          const target = card as HTMLElement;
          const rect = target.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;

          gsap.to(target, {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive IT Solutions"
          description="We offer a wide range of technology services tailored to meet your unique business needs and drive digital transformation."
          icon={Globe}
          colorClass="text-primary"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card-3d bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl cursor-pointer preserve-3d perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 service-title">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.hoverGlow} opacity-0 hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

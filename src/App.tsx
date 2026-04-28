import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollDrivenBanner from './ScrollDrivenBanner';
import logo from './assets/logo.svg';
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Brain, 
  Users, 
  Code, 
  Award, 
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Star,
  Mail,
  Phone,
  MapPin,
  Layers,
  Zap,
  Target,
  Rocket
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Navbar with blur and slide effect
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Navbar slide down animation on load
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#stats' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-primary/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img 
                src={logo} 
                alt="InfoSage Technologies" 
                className={`h-12 w-auto transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`} 
              />
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all hover:text-accent group ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="ml-4 bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-2 p-4 shadow-2xl border border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-600 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// About Section with advanced scroll animations
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image 3D perspective reveal
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

      // Text lines stagger in from left
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

      // Skill cards float animation
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
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
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
              {[
                { icon: CheckCircle, text: 'Expert Team', textColor: 'text-primary' },
                { icon: CheckCircle, text: 'Quality Assured', textColor: 'text-accent' },
                { icon: CheckCircle, text: '24/7 Support', textColor: 'text-primary' },
                { icon: CheckCircle, text: 'Agile Process', textColor: 'text-accent' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 about-text-line">
                  <item.icon className={`w-5 h-5 ${item.textColor}`} />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:scale-105 about-text-line">
              <span className="flex items-center gap-2">
                Learn More About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="aspect-square relative">
              {/* Main card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {[
                    { icon: Brain, label: 'AI/ML', sublabel: 'Solutions', gradient: 'from-primary to-primary-dark' },
                    { icon: Globe, label: 'Web', sublabel: 'Development', gradient: 'from-accent to-accent-dark' },
                    { icon: Smartphone, label: 'Mobile', sublabel: 'Apps', gradient: 'from-primary to-primary-dark' },
                    { icon: TrendingUp, label: 'Digital', sublabel: 'Marketing', gradient: 'from-accent to-accent-dark' },
                  ].map((item, index) => (
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
              
              {/* Floating badge */}
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
};

// Services Section with 3D card effects
const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    color: 'primary',
    gradient: 'from-primary to-primary-dark',
    hoverGlow: 'from-primary/10 to-accent/10',
    features: ['React/Next.js', 'E-commerce', 'CMS', 'PWA'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that engage users and drive business growth.',
    color: 'accent',
    gradient: 'from-accent to-accent-dark',
    hoverGlow: 'from-accent/10 to-primary/10',
    features: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and generate qualified leads.',
    color: 'primary',
    gradient: 'from-primary to-primary-dark',
    hoverGlow: 'from-primary/10 to-accent/10',
    features: ['SEO', 'PPC', 'Social Media', 'Content'],
  },
  {
    icon: Brain,
    title: 'AI/ML Solutions',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning to automate and innovate.',
    color: 'accent',
    gradient: 'from-accent to-accent-dark',
    hoverGlow: 'from-accent/10 to-primary/10',
    features: ['NLP', 'Computer Vision', 'Predictive AI', 'Chatbots'],
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current?.children || [],
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

      // Service cards 3D flip animation
      gsap.fromTo(
        '.service-card-3d',
        { 
          rotateX: -15, 
          rotateY: 15, 
          opacity: 0, 
          scale: 0.8,
          z: -100 
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

      // Hover 3D tilt effect
      const cards = document.querySelectorAll('.service-card-3d');
      cards.forEach((card) => {
        card.addEventListener('mousemove', (e: Event) => {
          const target = card as HTMLElement;
          const rect = target.getBoundingClientRect();
          const x = (e as MouseEvent).clientX - rect.left;
          const y = (e as MouseEvent).clientY - rect.top;
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
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Zap className="w-4 h-4" /> Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a wide range of technology services tailored to meet your unique business needs and drive digital transformation.
          </p>
        </div>

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
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.hoverGlow} opacity-0 hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section with advanced count-up and glow
const stats = [
  { icon: Users, value: 250, suffix: '+', label: 'Happy Clients', color: 'primary', gradient: 'from-primary/20 to-primary-dark/20', textColor: 'text-white' },
  { icon: Code, value: 35, suffix: '+', label: 'Expert Developers', color: 'accent', gradient: 'from-accent/20 to-accent-dark/20', textColor: 'text-white' },
  { icon: Star, value: 99, suffix: '%', label: 'Satisfaction Rate', color: 'primary', gradient: 'from-primary/20 to-primary-dark/20', textColor: 'text-white' },
  { icon: Award, value: 9, suffix: '+', label: 'Years Experience', color: 'accent', gradient: 'from-accent/20 to-accent-dark/20', textColor: 'text-white' },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats container animation
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

      // Individual stat cards with stagger
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

      // Count up animation
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

      // Continuous glow pulse
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
    <section
      id="stats"
      ref={sectionRef}
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-sm font-medium mb-4">
            <Target className="w-4 h-4" /> Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Numbers That Speak
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself - delivering exceptional results for clients worldwide
          </p>
        </div>

        <div
          ref={statsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-white/5 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-10 h-10 ${stat.textColor}`} />
              </div>
              <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center">
                <span className="stat-number">0</span>
                <span>{stat.suffix}</span>
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Solutions Section with accordion-style reveal
const solutions = [
  {
    title: 'Enterprise Software Development',
    description: 'Custom enterprise solutions designed to streamline operations, improve efficiency, and drive growth.',
    features: ['ERP Systems', 'CRM Solutions', 'Custom Dashboards', 'API Integration'],
    icon: Layers,
    color: 'primary',
    gradient: 'from-primary to-primary-dark',
    featureBg: 'bg-primary/10',
    featureIcon: 'text-primary',
    textColor: 'text-primary'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to modernize your IT environment and reduce costs.',
    features: ['Cloud Migration', 'Cloud Architecture', 'DevOps Services', '24/7 Monitoring'],
    icon: Zap,
    color: 'accent',
    gradient: 'from-accent to-accent-dark',
    featureBg: 'bg-accent/10',
    featureIcon: 'text-accent',
    textColor: 'text-accent'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics solutions.',
    features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Custom Reports'],
    icon: Target,
    color: 'primary',
    gradient: 'from-primary to-primary-dark',
    featureBg: 'bg-primary/10',
    featureIcon: 'text-primary',
    textColor: 'text-primary'
  },
];

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Solution cards slide up with rotation
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
    <section
      id="solutions"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 solution-title">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" /> Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Detailed Services & Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            End-to-end technology solutions tailored to your business requirements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="solution-card group bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h4>
              <p className="text-gray-600 mb-4">
                {solution.description}
              </p>
              
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
};

// Contact Section with form animations
const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side animation
      gsap.fromTo(
        '.contact-info',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Form slide in from right
      gsap.fromTo(
        formRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Form inputs stagger
      gsap.fromTo(
        '.form-input',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="contact-info">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Mail className="w-4 h-4" /> Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Let's Start Your Project
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Ready to transform your business with cutting-edge technology? Contact us today for a free consultation.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'info@infosagetechnologies.com', gradient: 'from-primary to-primary-dark' },
                { icon: Phone, label: 'Phone', value: '+91 (555) 123-4567', gradient: 'from-accent to-accent-dark' },
                { icon: MapPin, label: 'Address', value: '123 Tech Street, Silicon Valley, CA', gradient: 'from-primary to-primary-dark' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-semibold text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={formRef} className="bg-white rounded-3xl p-8 shadow-2xl">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="form-input">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="form-input">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="form-input">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-input">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  rows={4}
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/20 transition-all hover:scale-[1.02] form-input"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer with social links
const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-slate-900 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="footer-item">
            <a href="#home" className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="InfoSage Technologies" 
                className="h-12 w-auto brightness-0 invert" 
              />
            </a>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Transforming businesses through innovative IT solutions. Your trusted technology partner for digital transformation.
            </p>
            <div className="flex gap-3 mt-6">
              {['T', 'L', 'F', 'I'].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-item">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'Digital Marketing', 'AI/ML Solutions'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-gray-400 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for latest updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-white font-medium hover:shadow-lg transition-all">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} InfoSage Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollDrivenBanner />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <SolutionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

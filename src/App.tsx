import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollDrivenBanner from './ScrollDrivenBanner';
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Brain, 
  Users, 
  Code, 
  Award, 
  Clock,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Star,
  Mail,
  Phone,
  MapPin,
  Play,
  ChevronDown,
  Layers,
  Zap,
  Shield,
  Target,
  Rocket
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Enhanced Particle Background with multiple layers
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; alpha: number }[] = [];
    let lines: { x1: number; y1: number; x2: number; y2: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      lines = [];
      const particleCount = 80;
      const colors = ['#2563eb', '#06b6d4', '#8b5cf6', '#ec4899'];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.3)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle glow
        const glow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3);
        glow.addColorStop(0, particle.color);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Draw connections
        particles.slice(index + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - distance / 180)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw floating geometric shapes
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.3 + i * 2) * 0.5 + 0.5) * canvas.height;
        const size = 20 + Math.sin(time + i) * 10;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particles-canvas" className="absolute inset-0 z-0" />;
};

// Animated gradient orbs for hero background
const AnimatedOrbs = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    // Create floating orbs
    for (let i = 0; i < 5; i++) {
      const div = document.createElement('div');
      div.className = 'absolute rounded-full blur-3xl';
      div.style.width = `${200 + Math.random() * 300}px`;
      div.style.height = div.style.width;
      div.style.left = `${Math.random() * 100}%`;
      div.style.top = `${Math.random() * 100}%`;
      div.style.background = i % 2 === 0 
        ? 'rgba(37, 99, 235, 0.3)' 
        : 'rgba(6, 182, 212, 0.2)';
      div.style.animation = `float${i} ${8 + Math.random() * 4}s ease-in-out infinite`;
      div.style.animationDelay = `${Math.random() * 2}s`;
      orb.appendChild(div);
    }

    // Add keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float0 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(30px, -30px) scale(1.1); } }
      @keyframes float1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-40px, 20px) scale(0.9); } }
      @keyframes float2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(20px, 40px) scale(1.05); } }
      @keyframes float3 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-30px, -20px) scale(1.1); } }
      @keyframes float4 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(40px, 30px) scale(0.95); } }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div ref={orbRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
};

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
        isScrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
              <span className="text-blue-500">InfoSage</span>
              <span className="text-cyan-400">Technologies</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all hover:text-blue-400 group ${
                  isScrolled ? 'text-gray-300' : 'text-white/80'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button className="ml-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-white' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-white' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl rounded-2xl mt-2 p-4 shadow-2xl border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-300 hover:text-blue-400 transition-colors"
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

// Hero Section with advanced animations
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    // Split title into words and animate
    if (titleRef.current) {
      const text = titleRef.current.textContent || '';
      titleRef.current.innerHTML = '';
      
      const words = text.split(' ');
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block mr-3';
        
        word.split('').forEach((char, charIndex) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.className = 'inline-block opacity-0 transform translate-y-16 -translate-x-4';
          span.style.display = 'inline-block';
          wordSpan.appendChild(span);
        });
        
        titleRef.current?.appendChild(wordSpan);
        
        // Animate each character
        const chars = wordSpan.querySelectorAll('span');
        chars.forEach((char, charIndex) => {
          tl.to(char, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            ease: 'power3.out',
          }, 0.1 + wordIndex * 0.15 + charIndex * 0.02);
        });
      });
    }

    // Subtitle fade and slide up
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      1.5
    );

    // CTA buttons with stagger
    tl.fromTo(
      ctaRef.current?.children || [],
      { opacity: 0, y: 20, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.5, 
        stagger: 0.15,
        ease: 'back.out(1.7)' 
      },
      1.8
    );

    // Parallax effect on scroll
    gsap.to(contentRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 150,
      opacity: 0.5,
    });

    // Floating shapes animation
    gsap.to('.hero-shape', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3,
    });

  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900"
    >
      <ParticleBackground />
      <AnimatedOrbs />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900" />
      
      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm text-gray-300">Transforming Businesses Since 2015</span>
        </div>
        
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Transforming Businesses with Future-Ready IT Solutions
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          We deliver cutting-edge technology solutions that empower businesses to thrive in the digital age. From web development to AI-powered innovations.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="group px-8 py-4 border-2 border-white/30 text-white rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2">
            <Play className="w-5 h-5" /> Watch Demo
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="hero-shape absolute top-1/4 left-10 w-20 h-20 border border-blue-500/20 rounded-lg rotate-12" />
      <div className="hero-shape absolute bottom-1/4 right-10 w-16 h-16 border border-cyan-500/20 rounded-full" />
      <div className="hero-shape absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg rotate-45" />
    </section>
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4 about-text-line">
              <span className="w-2 h-2 rounded-full bg-blue-600" /> About Company
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
                { icon: CheckCircle, text: 'Expert Team', color: 'blue' },
                { icon: CheckCircle, text: 'Quality Assured', color: 'cyan' },
                { icon: CheckCircle, text: '24/7 Support', color: 'blue' },
                { icon: CheckCircle, text: 'Agile Process', color: 'cyan' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 about-text-line">
                  <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 about-text-line">
              <span className="flex items-center gap-2">
                Learn More About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="aspect-square relative">
              {/* Main card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {[
                    { icon: Brain, label: 'AI/ML', sublabel: 'Solutions', color: 'blue' },
                    { icon: Globe, label: 'Web', sublabel: 'Development', color: 'cyan' },
                    { icon: Smartphone, label: 'Mobile', sublabel: 'Apps', color: 'blue' },
                    { icon: TrendingUp, label: 'Digital', sublabel: 'Marketing', color: 'cyan' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="skill-card bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center mb-2`}>
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
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
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
    color: 'blue',
    features: ['React/Next.js', 'E-commerce', 'CMS', 'PWA'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that engage users and drive business growth.',
    color: 'cyan',
    features: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and generate qualified leads.',
    color: 'blue',
    features: ['SEO', 'PPC', 'Social Media', 'Content'],
  },
  {
    icon: Brain,
    title: 'AI/ML Solutions',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning to automate and innovate.',
    color: 'cyan',
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
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center mb-4 shadow-lg`}>
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
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${service.color}-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section with advanced count-up and glow
const stats = [
  { icon: Users, value: 250, suffix: '+', label: 'Happy Clients', color: 'blue' },
  { icon: Code, value: 35, suffix: '+', label: 'Expert Developers', color: 'cyan' },
  { icon: Star, value: 99, suffix: '%', label: 'Satisfaction Rate', color: 'blue' },
  { icon: Award, value: 9, suffix: '+', label: 'Years Experience', color: 'cyan' },
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
      const statValues = statsRef.current?.querySelectorAll('.stat-value');
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
        boxShadow: '0 0 40px rgba(37, 99, 235, 0.3)',
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-400 text-sm font-medium mb-4">
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
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-10 h-10 text-${stat.color}-400`} />
              </div>
              <div className="text-5xl font-bold text-white mb-2 stat-value">
                0
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
    color: 'blue',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to modernize your IT environment and reduce costs.',
    features: ['Cloud Migration', 'Cloud Architecture', 'DevOps Services', '24/7 Monitoring'],
    icon: Zap,
    color: 'cyan',
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics solutions.',
    features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Custom Reports'],
    icon: Target,
    color: 'blue',
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${solution.color}-500 to-${solution.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
                    <div className={`w-5 h-5 rounded-full bg-${solution.color}-100 flex items-center justify-center`}>
                      <CheckCircle className={`w-3 h-3 text-${solution.color}-600`} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`text-${solution.color}-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`}>
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="contact-info">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
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
                { icon: Mail, label: 'Email', value: 'info@infosage.com', color: 'blue' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: 'cyan' },
                { icon: MapPin, label: 'Address', value: '123 Tech Street, Silicon Valley, CA', color: 'blue' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="form-input">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-input">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  rows={4}
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:scale-[1.02] form-input"
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="footer-item">
            <span className="text-2xl font-bold text-white">
              <span className="text-blue-500">InfoSage</span>
              <span className="text-cyan-400">Technologies</span>
            </span>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Transforming businesses through innovative IT solutions. Your trusted technology partner for digital transformation.
            </p>
            <div className="flex gap-3 mt-6">
              {['T', 'L', 'F', 'I'].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
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
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
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
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
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
                className="flex-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg transition-all">
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
      <HeroSection />
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

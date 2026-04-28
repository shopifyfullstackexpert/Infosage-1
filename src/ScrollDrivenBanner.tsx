import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Zap, Globe, Smartphone, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const videoBg = new URL('./assets/0ne8ttbt_Emergent 2 Hero Vid.mp4', import.meta.url).href;

interface Phase {
  icon?: any;
  title: string;
  subtitle: string;
  button?: boolean;
}

const ScrollDrivenBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const phase1ContentRef = useRef<HTMLDivElement>(null);
  const phase2ContentRef = useRef<HTMLDivElement>(null);
  const phase3BlocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const video = videoRef.current;
      
      // ===== VIDEO SCRUBBING =====
      if (video) {
        video.addEventListener('loadedmetadata', () => {
          const videoDuration = video.duration;
          
          // Control video playback based on scroll
          gsap.to(video, {
            currentTime: videoDuration,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.5,
              onUpdate: (self) => {
                video.currentTime = videoDuration * self.progress;
              },
            },
          });
        }, { once: true });
      }

      // ===== PHASE 1: Left side content =====
      gsap.fromTo(
        phase1ContentRef.current,
        { opacity: 0, x: -80, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 30%',
            end: 'top 10%',
            scrub: 1,
            once: false,
          },
        }
      );

      // Phase 1 content exit
      gsap.to(phase1ContentRef.current, {
        opacity: 0,
        x: -100,
        scale: 0.8,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center 20%',
          end: 'center -20%',
          scrub: 1,
        },
      });

      // ===== PHASE 2: Right side content =====
      gsap.fromTo(
        phase2ContentRef.current,
        { opacity: 0, x: 80, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'center 30%',
            end: 'center 10%',
            scrub: 1,
          },
        }
      );

      // Phase 2 content exit
      gsap.to(phase2ContentRef.current, {
        opacity: 0,
        x: 100,
        scale: 0.8,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 30%',
          end: 'bottom 0%',
          scrub: 1,
        },
      });

      // ===== PHASE 3: 3-column blocks =====
      const blocks = phase3BlocksRef.current?.querySelectorAll('.phase3-block') as NodeListOf<HTMLElement>;
      if (blocks && blocks.length > 0) {
        // Blocks fade in with stagger
        gsap.fromTo(
          blocks,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: phase3BlocksRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );

        // Blocks converge to center
        Array.from(blocks).forEach((block, index) => {
          const isLeft = index === 0;
          const isRight = index === 2;
          
          gsap.to(block, {
            x: 0,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: phase3BlocksRef.current,
              start: 'center 60%',
              end: 'center 20%',
              scrub: 1,
            },
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const phase3Items: Phase[] = [
    {
      icon: Globe,
      title: 'Global Reach',
      subtitle: 'Connect with users worldwide seamlessly',
      button: true,
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      subtitle: 'Optimized performance at scale',
      button: true,
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      subtitle: 'Perfect experience on all devices',
      button: true,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[400vh] bg-slate-900 overflow-hidden"
    >
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          preload="auto"
          muted
          playsInline
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* PHASE 1: Left Side Content */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div
                ref={phase1ContentRef}
                className="text-white opacity-0"
              >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Experience Premium Design
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                  Explore More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div />
            </div>
          </div>
        </div>

        {/* PHASE 2: Right Side Content */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div />
              <div
                ref={phase2ContentRef}
                className="text-white opacity-0"
              >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Interactive Excellence
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PHASE 3: 3-Column Grid */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={phase3BlocksRef}
              className="grid md:grid-cols-3 gap-6"
            >
              {phase3Items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="phase3-block bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 opacity-0"
                    style={{
                      transform: index === 0 ? 'translateX(-40px)' : index === 2 ? 'translateX(40px)' : 'translateX(0)',
                    }}
                  >
                    {Icon && (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {item.subtitle}
                    </p>
                    {item.button && (
                      <button className="text-cyan-400 font-semibold flex items-center gap-2 group hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Spacer for scroll height */}
        <div className="h-screen" />
      </div>
    </div>
  );
};

export default ScrollDrivenBanner;

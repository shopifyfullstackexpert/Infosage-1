import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Globe, Smartphone, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const videoBg = new URL('./assets/0ne8ttbt_Emergent 2 Hero Vid.mp4', import.meta.url).href;

const ScrollDrivenBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const phase1ContentRef = useRef<HTMLDivElement>(null);
  const phase2ContentRef = useRef<HTMLDivElement>(null);
  const phase3LeftRef = useRef<HTMLDivElement>(null);
  const phase3RightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const video = videoRef.current;
      
      // ===== VIDEO SCRUBBING =====
      if (video) {
        // Wait for metadata to know the duration
        video.addEventListener('loadedmetadata', () => {
          const videoDuration = video.duration || 10; // fallback
          
          gsap.to(video, {
            currentTime: videoDuration,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.5,
              onUpdate: (self) => {
                // Ensure video plays forward/backward smoothly with scroll
                if (video.duration) {
                   video.currentTime = video.duration * self.progress;
                }
              },
            },
          });
        }, { once: true });
        
        // Force load for Safari/mobile
        video.load();
      }

      // ===== MAIN TIMELINE FOR CONTENT =====
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });

      // --- Phase 1: Left content moves to center and fades out ---
      // Initial state is visible (opacity 1, x 0)
      tl.to(phase1ContentRef.current, {
        x: '30vw', // move towards center
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power1.inOut'
      }, 0);

      // --- Phase 2: Right content appears from right, then moves to center & fades out ---
      // Start off-screen right
      tl.fromTo(phase2ContentRef.current,
        { x: 100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
        0.5 // overlap slightly with phase 1 end
      );

      // Moves to center (leftwards) and fades out
      tl.to(phase2ContentRef.current, {
        x: '-30vw',
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power1.inOut'
      }, 2);

      // --- Phase 3: Left & Right blocks appear ---
      tl.fromTo(phase3LeftRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        3
      );
      tl.fromTo(phase3RightRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        3
      );

      // --- Phase 3: Both move towards center but don't overlap ---
      tl.to(phase3LeftRef.current, {
        x: '8vw', // move right towards center
        duration: 1,
        ease: 'power1.inOut'
      }, 4.5);
      tl.to(phase3RightRef.current, {
        x: '-8vw', // move left towards center
        duration: 1,
        ease: 'power1.inOut'
      }, 4.5);

      // Small pause at the end so it's readable before scrolling past the section
      tl.to({}, { duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[500vh] bg-slate-900"
    >
      {/* 
        Sticky Video Background 
        Using sticky top-0 keeps it fixed within this container, 
        but allows it to scroll away normally when we pass the container.
      */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
          muted
          playsInline
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/60" />
        
        {/* Gradient overlay to blend with next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />

        {/* --- PHASE 1 CONTENT --- */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 pointer-events-auto" ref={phase1ContentRef}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-white">Innovation Starts Here</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight">
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Evolution</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>

        {/* --- PHASE 2 CONTENT --- */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full md:w-1/2 ml-auto pl-0 md:pl-8 opacity-0 pointer-events-auto" ref={phase2ContentRef}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Play className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-white">Seamless Experience</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white leading-tight tracking-tight">
                Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Growth</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 group">
                Discover More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* --- PHASE 3 CONTENT --- */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
              
              {/* Left 33% Block */}
              <div className="w-full md:w-1/3 opacity-0 pointer-events-auto" ref={phase3LeftRef}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-2xl shadow-black/50">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Mobile First
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <button className="text-cyan-400 font-semibold flex items-center gap-2 group hover:text-cyan-300 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Center Gap (approx 33%) - intentionally left empty so they don't overlap when moving to center */}

              {/* Right 33% Block */}
              <div className="w-full md:w-1/3 opacity-0 pointer-events-auto" ref={phase3RightRef}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-2xl shadow-black/50">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Global Scale
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                  <button className="text-blue-400 font-semibold flex items-center gap-2 group hover:text-blue-300 transition-colors">
                    Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ScrollDrivenBanner;

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const logoImages = [
  new URL('../assets/logos/image-1.png', import.meta.url).href,
  new URL('../assets/logos/image-2.png', import.meta.url).href,
  new URL('../assets/logos/image-3.png', import.meta.url).href,
  new URL('../assets/logos/image-4.png', import.meta.url).href,
  new URL('../assets/logos/image-5.png', import.meta.url).href,
  new URL('../assets/logos/image-6.png', import.meta.url).href,
];

const LogoSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const container = containerRef.current;

    // Calculate total width of one set of logos
    const logoWidth = 120; // 96px (w-24) + 24px (mx-3 * 2)
    const totalWidth = logoImages.length * logoWidth;

    // Create infinite scroll animation
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(track, {
      x: -totalWidth,
      duration: 20,
      ease: 'none',
    });

    // Pause on hover
    const handleMouseEnter = () => {
      tl.pause();
    };

    const handleMouseLeave = () => {
      tl.resume();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tl.kill();
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Trusted Partners
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Companies That Trust Us
          </h2>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Join hundreds of companies that rely on our technology solutions
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100"
        >
          <div
            ref={trackRef}
            className="flex items-center py-8 px-4"
          >
            {/* First set of logos */}
            {logoImages.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-6 group cursor-pointer"
              >
                <div className="w-24 h-12 flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logoImages.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 group cursor-pointer"
              >
                <div className="w-24 h-12 flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;

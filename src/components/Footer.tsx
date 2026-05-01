import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Mail, MapPin, Phone, Users } from 'lucide-react';
import Logo from './ui/Logo';

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Web Development', to: '/services' },
  { label: 'Mobile Apps', to: '/services' },
  { label: 'Digital Marketing', to: '/services' },
  { label: 'AI/ML Solutions', to: '/services' },
];

export default function Footer() {
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
    <footer ref={footerRef} className="bg-slate-900 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="footer-item">
            <Link to="/" className="flex items-center mb-6">
              <Logo className="h-12 w-auto brightness-0 invert" />
            </Link>
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
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-400 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-400 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
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
          <p className="text-gray-400">© {new Date().getFullYear()} InfoSage Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

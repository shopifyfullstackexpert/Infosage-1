import { useState } from 'react';
import { ArrowLeft, ArrowRight, Briefcase, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    brand: '10M Email',
    project: 'Email Launch Experience',
    website: '10m.email',
    tagline: 'A high-conversion email platform built for modern marketing teams.',
    mobileScreens: [
      { title: 'Dashboard', subtitle: 'Campaign performance snapshots and quick actions.', color: 'bg-slate-800/80' },
      { title: 'Composer', subtitle: 'Drag-and-drop email editor with scheduling.', color: 'bg-slate-700/80' },
      { title: 'Analytics', subtitle: 'Real-time opens, clicks and revenue insights.', color: 'bg-slate-800/80' },
    ],
    desktopHighlights: [
      { title: 'Campaign Flow', detail: 'A streamlined experience for creating, previewing and launching campaigns.' },
      { title: 'Audience Builder', detail: 'Smart segmentation with instant preview results.' },
    ],
  },
  {
    brand: 'PM Digital Design',
    project: 'Creative Studio Showcase',
    website: 'pmdigitaldesign.com',
    tagline: 'A polished portfolio platform for premium digital product experiences.',
    mobileScreens: [
      { title: 'Projects', subtitle: 'Curated case study cards with strong visuals.', color: 'bg-slate-800/80' },
      { title: 'Studio', subtitle: 'Story-first brand narrative and process details.', color: 'bg-slate-700/80' },
      { title: 'Contact', subtitle: 'Fast client inquiry form with appointment booking.', color: 'bg-slate-800/80' },
    ],
    desktopHighlights: [
      { title: 'Brand Story', detail: 'A visual identity-driven homepage with layered content.' },
      { title: 'UX Portfolio', detail: 'Interactive project previews that highlight craftsmanship.' },
    ],
  },
  {
    brand: 'InfoSage Technologies',
    project: 'Corporate Services',
    website: 'infosagetechnologies.com',
    tagline: 'A technology partner site built to convert enterprise and SMB clients.',
    mobileScreens: [
      { title: 'Services', subtitle: 'Clear service categories with results-focused copy.', color: 'bg-slate-800/80' },
      { title: 'Solutions', subtitle: 'Problem-solution layouts with trust signals.', color: 'bg-slate-700/80' },
      { title: 'Contact', subtitle: 'Lead capture with a strong call to action.', color: 'bg-slate-800/80' },
    ],
    desktopHighlights: [
      { title: 'Sales-ready Pages', detail: 'Designed to communicate value with clarity and confidence.' },
      { title: 'Growth Story', detail: 'Modular content blocks that adapt to different customer journeys.' },
    ],
  },
  {
    brand: 'Fifth Effect',
    project: 'Creative Studio',
    website: 'fiftheffect.com',
    tagline: 'A motion-rich brand site for creative experiences and campaigns.',
    mobileScreens: [
      { title: 'Intro', subtitle: 'A bold hero with animations and brand positioning.', color: 'bg-slate-800/80' },
      { title: 'Offerings', subtitle: 'Services and industries presented with strong visuals.', color: 'bg-slate-700/80' },
      { title: 'Inquire', subtitle: 'A quick contact funnel for new creative briefs.', color: 'bg-slate-800/80' },
    ],
    desktopHighlights: [
      { title: 'Visual Motion', detail: 'Dynamic layout that blends rich imagery with messaging.' },
      { title: 'Service Focus', detail: 'Content designed to support premium positioning and conversion.' },
    ],
  },
  {
    brand: 'ChaliceUS',
    project: 'Nonprofit Impact',
    website: 'chaliceus.org',
    tagline: 'A mission-driven website for community, events and giving.',
    mobileScreens: [
      { title: 'Mission', subtitle: 'Stories that communicate impact clearly and warmly.', color: 'bg-slate-800/80' },
      { title: 'Events', subtitle: 'Upcoming programs and volunteer signup points.', color: 'bg-slate-700/80' },
      { title: 'Support', subtitle: 'Donation paths and supporter options with trust signals.', color: 'bg-slate-800/80' },
    ],
    desktopHighlights: [
      { title: 'Impact Design', detail: 'Mission-focused pages with community storytelling.' },
      { title: 'Support Journey', detail: 'Clear donation and volunteer pathways with guiding content.' },
    ],
  },
];

export default function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStudy = caseStudies[activeIndex];

  const handlePrev = () => setActiveIndex((current) => (current - 1 + caseStudies.length) % caseStudies.length);
  const handleNext = () => setActiveIndex((current) => (current + 1) % caseStudies.length);

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-accent">
              <Briefcase className="w-4 h-4" />
              Case Study
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Real site work for real digital brands.
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Five case studies showcasing email platforms, creative studios, enterprise websites and nonprofit storytelling.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.3fr] items-start group">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/40 transition duration-500 hover:-translate-y-1 hover:border-white/20">
            <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Brand</div>
                <div className="text-lg font-semibold">{activeStudy.brand}</div>
              </div>
              <div className="rounded-full bg-primary/10 px-3 py-1 text-primary">{activeStudy.project}</div>
            </div>

            <div className="relative mx-auto w-full max-w-[540px] rounded-[3rem] border border-white/10 bg-slate-950 p-5 shadow-xl shadow-black/30">
              <div className="absolute left-1/2 top-3 h-2 w-24 -translate-x-1/2 rounded-full bg-slate-700" />
              <div className="mt-8 rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-inner shadow-white/5">
                <div className="mb-4 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
                  <span>Mobile preview</span>
                  <span>{activeStudy.website}</span>
                </div>

                <div className="h-[560px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950">
                  <div className="h-full overflow-hidden p-4">
                    <div className="space-y-4 transition-transform duration-700 ease-out group-hover:-translate-y-32">
                      {activeStudy.mobileScreens.map((screen) => (
                        <div key={screen.title} className={`rounded-[1.5rem] p-5 ${screen.color}`}>
                          <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
                            <span>{screen.title}</span>
                            <span>Live</span>
                          </div>
                          <div className="mb-2 text-lg font-semibold text-white">{screen.title}</div>
                          <p className="text-sm leading-6 text-slate-300">{screen.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-900 p-6 text-slate-300 shadow-lg shadow-black/10">
              <p className="text-sm text-slate-400">{activeStudy.tagline}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {activeStudy.desktopHighlights.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-slate-950 p-4">
                    <div className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:scale-[1.01]"
            >
              View Full case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/40 transition duration-500 hover:-translate-y-1 hover:border-white/20">
            <div className="mb-8 flex items-center justify-between gap-4 rounded-3xl bg-white/5 px-5 py-4 text-sm text-white">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Desktop Layout</div>
                <div className="text-xl font-semibold">Website overview</div>
              </div>
              <MonitorSmartphone className="h-8 w-8 text-primary" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {activeStudy.desktopHighlights.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                  <div className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">{item.title}</div>
                  <p className="text-slate-300 leading-7">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400">Hover shows the mobile preview scroll effect while desktop details stay crisp.</p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10"
                  aria-label="Previous case study"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10"
                  aria-label="Next case study"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

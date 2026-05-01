import Navbar from './components/Navbar';
import ScrollDrivenBanner from './ScrollDrivenBanner';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import SolutionsSection from './components/SolutionsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <Navbar />
      <ScrollDrivenBanner />
      <main>
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import BeforeAfter from '../components/BeforeAfter';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <BeforeAfter />
      <Gallery />
      <Contact />
    </main>
  );
}

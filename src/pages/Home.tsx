import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import BeforeAfter from '../components/BeforeAfter';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import PageSEO from '../components/PageSEO';

export default function Home() {
  return (
    <main>
      <PageSEO
        title="C&E Seamless Gutters | Seamless Gutter Installation in Iowa, LA"
        description="Louisiana's #1 rated seamless gutter installation, gutter guard, gutter repair, siding, and window contractor. Serving Iowa, Lake Charles, Sulphur & Calcasieu Parish. Call (337) 384-4417 for a free quote."
        path="/"
      />
      <Hero />
      <Services />
      <WhyUs />
      <BeforeAfter />
      <Gallery />
      <Contact />
    </main>
  );
}

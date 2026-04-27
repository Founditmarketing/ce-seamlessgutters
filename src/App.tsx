/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Home from './pages/Home';
import WhyUsPage from './pages/WhyUsPage';
import ReviewsPage from './pages/ReviewsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import GutterServicesPage from './pages/GutterServicesPage';
import HomeImprovementPage from './pages/HomeImprovementPage';
import WindowInstallationPage from './pages/WindowInstallationPage';
// New Entity Pages
import SeamlessGutterInstallationPage from './pages/SeamlessGutterInstallationPage';
import GutterRepairPage from './pages/GutterRepairPage';
import GutterGuardInstallationPage from './pages/GutterGuardInstallationPage';
import GutterCleaningPage from './pages/GutterCleaningPage';
import StormDamageRestorationPage from './pages/StormDamageRestorationPage';
import VinylSidingInstallationPage from './pages/VinylSidingInstallationPage';
import FasciaBoardReplacementPage from './pages/FasciaBoardReplacementPage';
import WindowReplacementPage from './pages/WindowReplacementPage';
import LakeCharlesServiceAreaPage from './pages/LakeCharlesServiceAreaPage';
import DownspoutInstallationRepairPage from './pages/DownspoutInstallationRepairPage';
import { Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  const { pathname } = useLocation();
  const isContactPage = pathname === '/contact';

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Legacy Service Category Pages */}
        <Route path="/services/gutters" element={<GutterServicesPage />} />
        <Route path="/services/home-improvement" element={<HomeImprovementPage />} />
        <Route path="/services/windows" element={<WindowInstallationPage />} />

        {/* New Entity Pages — Gutter Services */}
        <Route path="/services/seamless-gutter-installation" element={<SeamlessGutterInstallationPage />} />
        <Route path="/services/gutter-repair" element={<GutterRepairPage />} />
        <Route path="/services/gutter-guard-installation" element={<GutterGuardInstallationPage />} />
        <Route path="/services/gutter-cleaning" element={<GutterCleaningPage />} />
        <Route path="/services/downspout-installation-repair" element={<DownspoutInstallationRepairPage />} />

        {/* New Entity Pages — Exterior Services */}
        <Route path="/services/storm-damage-restoration" element={<StormDamageRestorationPage />} />
        <Route path="/services/vinyl-siding-installation" element={<VinylSidingInstallationPage />} />
        <Route path="/services/fascia-board-replacement" element={<FasciaBoardReplacementPage />} />
        <Route path="/services/window-replacement" element={<WindowReplacementPage />} />

        {/* Geo / Service Area Pages */}
        <Route path="/service-area/lake-charles-la" element={<LakeCharlesServiceAreaPage />} />
      </Routes>
      
      {!isContactPage && <Reviews />}
      {!isContactPage && <Footer />}
      
      {/* Floating Action Pill */}
        <motion.a 
          href="tel:3373844417" 
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex items-center h-14 md:h-16 rounded-full bg-brand-yellow text-brand-dark z-50 group overflow-hidden transition-all duration-500 ease-out w-14 md:w-16 hover:w-[150px] md:hover:w-[180px] shadow-xl hover:shadow-2xl"
          aria-label="Call Now"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        >
          {/* Core Icon Anchor */}
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0 transition-colors duration-500 z-10 rounded-full bg-brand-yellow group-hover:bg-brand-dark">
            <Phone className="w-5 h-5 md:w-6 md:h-6 text-white fill-white transition-colors duration-500" />
          </div>
          
          {/* Hidden Typographic Reveal */}
          <span className="whitespace-nowrap font-black tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-3 text-brand-dark text-sm md:text-base">
            CALL NOW
          </span>
        </motion.a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}

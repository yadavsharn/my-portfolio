import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import CertificatesPage from "@/pages/CertificatesPage";
import AchievementsPage from "@/pages/AchievementsPage";
import PatentPage from "@/pages/PatentPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";

import IntroOverlay from "@/components/IntroOverlay";
import ParallaxBackground from "@/components/ParallaxBackground";
import ResumeModal from "@/components/ResumeModal";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import resumeFile from "@/assets/Shantanu_Yadav_resume.pdf";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/certificates" element={<PageTransition><CertificatesPage /></PageTransition>} />
        <Route path="/achievements" element={<PageTransition><AchievementsPage /></PageTransition>} />
        <Route path="/patent" element={<PageTransition><PatentPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showResume, setShowResume] = useState(false);

  return (
    <BrowserRouter>
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      <ParallaxBackground />
      <CustomCursor />
      <ScrollProgress />
      <ResumeModal
        isOpen={showResume}
        onClose={() => setShowResume(false)}
        resumeUrl={resumeFile}
      />

      <div className="min-h-screen bg-transparent font-inter flex flex-col relative z-10">
        <Navbar />
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        <Footer />

        {/* Floating Resume Button */}
        <motion.button
          onClick={() => setShowResume(true)}
          className="fixed z-50 top-24 right-4 md:top-6 md:right-20 px-4 py-2 rounded-xl gradient-text bg-white/10 backdrop-blur-lg shadow-lg cursor-pointer border border-white/20 font-medium hover:bg-white/20 transition-colors"
          animate={{
            x: ["0%", "5%", "0%"], // subtle horizontal roaming
            y: ["0%", "10%", "0%"], // subtle vertical roaming
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          View Resume
        </motion.button>
      </div>
    </BrowserRouter>
  );
};

export default App;

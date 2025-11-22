import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
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

import { useState } from "react";
import IntroOverlay from "@/components/IntroOverlay";
import ParallaxBackground from "@/components/ParallaxBackground";
import ParticleBackground from "@/components/ParticleBackground";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <BrowserRouter>
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      <ParallaxBackground />
      {/* <ParticleBackground /> */}
      <div className="min-h-screen bg-transparent font-inter flex flex-col relative z-10">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/patent" element={<PatentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />

        {/* Floating Resume Button */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          className="fixed z-50 top-24 right-4 md:top-6 md:right-20 px-4 py-2 rounded-xl gradient-text bg-white/10 backdrop-blur-lg shadow-lg cursor-pointer border border-white/20"
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
        </motion.a>
      </div>
    </BrowserRouter>
  );
};

export default App;

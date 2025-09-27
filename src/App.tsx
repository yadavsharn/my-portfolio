import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Patent from "@/components/Patent"; 
import About  from "./components/About";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Achievements />
      <Patent /> 
      <Contact />
      <Footer />

      {/* Floating Resume Button */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        className="fixed z-50 px-4 py-2 rounded-xl gradient-text bg-white/10 backdrop-blur-lg shadow-lg cursor-pointer"
        animate={{
          x: ["0%", "80%", "0%"], // horizontal roaming
          y: ["0%", "30%", "0%"], // vertical roaming
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        View Resume
      </motion.a>
    </div>
  );
};

export default Index;

<<<<<<< HEAD
import Navbar from "@/components/Navbar";
=======
>>>>>>> d5d26dd (Create portfolio website)
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Patent from "@/components/Patent";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
<<<<<<< HEAD
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <div id="projects">
        <Projects />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="patent">
        <Patent />
      </div>
      <div id="contact">
        <Contact />
      </div>
=======
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Achievements />
      <Patent />
      <Contact />
>>>>>>> d5d26dd (Create portfolio website)
      <Footer />
    </div>
  );
};

export default Index;

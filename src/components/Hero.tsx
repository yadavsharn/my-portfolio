import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "@/assets/shantanu-profile.jpg";
import resume from "@/assets/Shantanu_Yadav_resume.pdf";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState("");
  const fullText = "MCA Scholar & AI Developer. Passionate about building intelligent systems using Deep Learning, Computer Vision, and IoT.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30); // Typing speed

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate rotation based on cursor position relative to center
      const xPos = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPos = (clientY / innerHeight - 0.5) * 2; // -1 to 1

      gsap.to(avatarRef.current, {
        rotateY: xPos * 20, // Rotate Y based on X position
        rotateX: -yPos * 20, // Rotate X based on Y position
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
        transformOrigin: "center center"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="section-padding min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--portfolio-bg)" }}
    >
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Shantanu Yadav</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-inter leading-relaxed h-[60px] md:h-auto">
                {text}
                <span className="animate-pulse text-primary">|</span>
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-medium">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">
                  AI & Data Science
                </span>
                <span className="px-4 py-2 bg-accent-soft text-accent rounded-full">
                  Full Stack Developer
                </span>
                <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full">
                  Patent Holder
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              {/* First Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="btn-hero font-inter text-lg px-8 py-6 rounded-2xl"
                >
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="btn-outline-hero font-inter text-lg px-8 py-6 rounded-2xl"
                >
                  <Link to="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Second Row - Resume button */}
              <a href={resume} download className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="btn-resume font-inter text-lg px-8 py-6 rounded-2xl w-full sm:w-auto"
                >
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end perspective-1000">
            <div ref={avatarRef} className="relative transform-style-3d will-change-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse-glow -z-10"></div>
              <motion.img
                src={profileImage}
                alt="Shantanu Yadav - Tech Innovator"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white dark:border-white/10"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

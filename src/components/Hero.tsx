import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/shantanu-profile.jpg";
<<<<<<< HEAD
import resume from "@/assets/Shantanu_Yadav_resume.pdf";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-padding min-h-screen flex items-center"
      style={{ background: "var(--portfolio-bg)" }}
    >
=======

const Hero = () => {
  return (
    <section className="section-padding min-h-screen flex items-center" style={{ background: 'var(--portfolio-bg)' }}>
>>>>>>> d5d26dd (Create portfolio website)
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Shantanu Yadav</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-inter leading-relaxed">
<<<<<<< HEAD
                A passionate tech innovator and problem solver. I love building
                impactful solutions that blend creativity with technology.
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-medium">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">
                  Innovator
                </span>
                <span className="px-4 py-2 bg-accent-soft text-accent rounded-full">
                  Developer
                </span>
                {/* <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full">
                  Hackathon Winner
                </span> */}
              </div>
            </div>

            {/* CTA Buttons */}
<div className="flex flex-col gap-4">
  {/* First Row */}
  <div className="flex flex-col sm:flex-row gap-4">
    <Button
      size="lg"
      className="btn-hero font-inter text-lg px-8 py-6 rounded-2xl"
      onClick={() =>
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      View My Work
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>

    <Button
      size="lg"
      variant="outline"
      className="btn-outline-hero font-inter text-lg px-8 py-6 rounded-2xl"
      onClick={() =>
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Contact Me
      <ArrowRight className="ml-2 h-5 w-5" />
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

          {/* Profisle Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
=======
                A passionate tech innovator and problem solver. I love building impactful solutions that blend creativity with technology.
              </p>
              <div className="flex flex-wrap gap-2 text-lg font-medium">
                <span className="px-4 py-2 bg-accent-soft text-accent rounded-full">Innovator</span>
                <span className="px-4 py-2 bg-warm-soft text-warm rounded-full">Developer</span>
                <span className="px-4 py-2 bg-success-soft text-success rounded-full">Hackathon Winner</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-hero font-inter text-lg px-8 py-6 rounded-2xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline-hero font-inter text-lg px-8 py-6 rounded-2xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
>>>>>>> d5d26dd (Create portfolio website)
              <img
                src={profileImage}
                alt="Shantanu Yadav - Tech Innovator"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl animate-float border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Hero;
=======
export default Hero;
>>>>>>> d5d26dd (Create portfolio website)

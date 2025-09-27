const About = () => {
  return (
    <section id="about" className="section-padding bg-portfolio-dark">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/10 card-hover">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-inter">
              I am currently pursuing MCA, with a strong background in web development, data science, IoT, and emerging technologies. 
              I have experience building real-world projects, winning hackathons, and even securing a patent. 
              My journey has always been about learning, experimenting, and creating solutions that matter.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Hackathons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">1</div>
                <div className="text-sm text-muted-foreground">Patent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">2+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

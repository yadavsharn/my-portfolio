import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, Store, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "RetailEdge",
<<<<<<< HEAD
      description:
        "A supermarket self-checkout and inventory management system revolutionizing retail operations.",
      icon: ShoppingCart,
      // Luxury gradient: Gold → Royal Purple
      gradient: "bg-gradient-to-br from-primary to-accent",
      features: [
        "Self-checkout system",
        "Inventory management",
        "Real-time analytics",
        "Customer insights",
      ],
      demoLink: "https://retailedge.vercel.app",
      githubLink: "https://github.com/yadavsharn/RetailEdge",
=======
      description: "A supermarket self-checkout and inventory management system revolutionizing retail operations.",
      icon: ShoppingCart,
      gradient: "bg-gradient-to-br from-primary to-accent",
      features: ["Self-checkout system", "Inventory management", "Real-time analytics", "Customer insights"],
      demoLink: "#",
      githubLink: "#"
>>>>>>> d5d26dd (Create portfolio website)
    },
    {
      id: 2,
      name: "Pejonx",
<<<<<<< HEAD
      description:
        "An e-commerce solution empowering local shopkeepers with digital transformation tools.",
      icon: Store,
      // Luxury gradient: Royal Purple → Gold
      gradient: "bg-gradient-to-br from-accent to-primary",
      features: [
        "E-commerce platform",
        "Local shopkeeper tools",
        "Digital payments",
        "Order management",
      ],
      demoLink: "#",
      githubLink: "#",
=======
      description: "An e-commerce solution empowering local shopkeepers with digital transformation tools.",
      icon: Store,
      gradient: "bg-gradient-to-br from-warm to-orange-400",
      features: ["E-commerce platform", "Local shopkeeper tools", "Digital payments", "Order management"],
      demoLink: "#",
      githubLink: "#"
>>>>>>> d5d26dd (Create portfolio website)
    },
    {
      id: 3,
      name: "Prism",
<<<<<<< HEAD
      description:
        "An all-in-one organization management tool streamlining business operations and team collaboration.",
      icon: Users,
      // Luxury gradient: Gold → Deep Black accent
      gradient: "bg-gradient-to-br from-primary to-secondary",
      features: [
        "Team collaboration",
        "Project management",
        "Resource planning",
        "Performance tracking",
      ],
      demoLink: "#",
      githubLink: "#",
    },
=======
      description: "An all-in-one organization management tool streamlining business operations and team collaboration.",
      icon: Users,
      gradient: "bg-gradient-to-br from-success to-emerald-400",
      features: ["Team collaboration", "Project management", "Resource planning", "Performance tracking"],
      demoLink: "#",
      githubLink: "#"
    }
>>>>>>> d5d26dd (Create portfolio website)
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
<<<<<<< HEAD
            Here are some of my recent projects that showcase my skills in
            building innovative solutions.
=======
            Here are some of my recent projects that showcase my skills in building innovative solutions.
>>>>>>> d5d26dd (Create portfolio website)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card rounded-3xl p-6 shadow-lg card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Icon */}
<<<<<<< HEAD
              <div
                className={`${project.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
              >
                <project.icon className="h-8 w-8 text-white" />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-playfair font-semibold">
                  {project.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-center"
                      >
=======
              <div className={`${project.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <project.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-playfair font-semibold">{project.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
>>>>>>> d5d26dd (Create portfolio website)
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button asChild size="sm" className="flex-1 rounded-xl btn-hero">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-xl btn-outline-hero"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
=======
                
                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="flex-1 rounded-xl">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 rounded-xl">
                    <Github className="h-4 w-4 mr-2" />
                    Code
>>>>>>> d5d26dd (Create portfolio website)
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Projects;
=======
export default Projects;
>>>>>>> d5d26dd (Create portfolio website)

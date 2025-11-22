import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Store, Users, Sprout, Activity, Gamepad2, Briefcase, ScanFace, HeartPulse, LayoutDashboard, MessageSquare, Camera } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Pejonx – Local Seller Platform",
      description:
        "A hybrid e-commerce + marketing startup helping 10+ local vendors digitize inventory and sell on Amazon. Features a custom e-commerce platform and optimized Google Ads campaigns.",
      icon: Store,
      gradient: "bg-gradient-to-br from-orange-400 to-pink-500",
      features: [
        "Hybrid E-commerce",
        "Vendor Management",
        "Amazon Integration",
        "Google Ads Optimization",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      name: "Employee Management System",
      description:
        "A robust backend system for organizations to manage employees, roles, and attendance using Node.js and MongoDB. Includes JWT security and structured error handling.",
      icon: Users,
      gradient: "bg-gradient-to-br from-blue-400 to-indigo-500",
      features: [
        "Node.js & Mongoose",
        "Role-based Auth",
        "JWT Security",
        "Attendance Logs",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      name: "Green Bharat",
      description:
        "A large-scale environmental tech ecosystem for tracking massive tree plantations. Uses AI to detect plant health and a mobile app for volunteer coordination.",
      icon: Sprout,
      gradient: "bg-gradient-to-br from-green-400 to-emerald-600",
      features: [
        "District-wise Nursery Model",
        "AI Disease Detection",
        "Tree Lifecycle Tracking",
        "Mobile App",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      name: "Personal Nutrition App",
      description:
        "A health tracking app with a home-screen widget for quick food logging. Analyzes eating patterns and provides personalized insights to prevent overeating.",
      icon: Activity,
      gradient: "bg-gradient-to-br from-red-400 to-rose-500",
      features: [
        "Home-screen Widget",
        "Calorie Tracking",
        "Pattern Analysis",
        "Automated Insights",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      name: "Game Application",
      description:
        "A complete gaming application demonstrating complex game logic, smooth animations, and state management. Showcases interactive UI and event handling skills.",
      icon: Gamepad2,
      gradient: "bg-gradient-to-br from-purple-400 to-violet-600",
      features: [
        "Complex Game Logic",
        "Event Handling",
        "State Management",
        "Interactive UI",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      name: "Career Buddy – AI Assistant",
      description:
        "An AI-driven career development toolkit offering mock interviews, ATS resume analysis, and skill-gap recommendations for students and professionals.",
      icon: Briefcase,
      gradient: "bg-gradient-to-br from-cyan-400 to-blue-600",
      features: [
        "AI Mock Interviews",
        "Resume Analyzer (ATS)",
        "Skill-gap Analysis",
        "Career Recommendations",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 7,
      name: "Data Center Person Recognition",
      description:
        "Smart security system for data centers using face recognition and person tracking to identify unauthorized presence and detect tailgating.",
      icon: ScanFace,
      gradient: "bg-gradient-to-br from-slate-400 to-slate-600",
      features: [
        "Face Recognition",
        "Person Tracking",
        "Tailgating Detection",
        "Digital Audit Trail",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 8,
      name: "Army Emotion Detection",
      description:
        "Mental health monitoring system for soldiers using facial emotion detection to evaluate stress, fatigue, and depression indicators for preventive support.",
      icon: HeartPulse,
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-600",
      features: [
        "Facial Emotion Detection",
        "Stress & Fatigue Analysis",
        "AI Reports",
        "Preventive Health",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 9,
      name: "PRISM – Enterprise Suite",
      description:
        "A comprehensive platform combining ERP, HRMS, Project Management, and Sentiment Analysis into one ecosystem for team productivity.",
      icon: LayoutDashboard,
      gradient: "bg-gradient-to-br from-indigo-400 to-purple-600",
      features: [
        "ERP & HR Module",
        "Project Management",
        "Embedded Chat",
        "Sentiment Analysis",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 10,
      name: "Adaptive Conversational Chatbot",
      description:
        "An AI chatbot that learns and adapts its personality, humor, and tone based on user behavior, becoming more personalized over time.",
      icon: MessageSquare,
      gradient: "bg-gradient-to-br from-teal-400 to-teal-600",
      features: [
        "Adaptive Learning",
        "Tone Analysis",
        "Personalized Interaction",
        "Emotional Intelligence",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 11,
      name: "Supermarket AI Surveillance",
      description:
        "Computer vision security system using YOLOv11 to detect shoplifting, hidden items, and suspicious behavior in real-time.",
      icon: Camera,
      gradient: "bg-gradient-to-br from-red-500 to-red-700",
      features: [
        "YOLOv11 & OpenCV",
        "Shoplifting Detection",
        "Real-time Alerts",
        "Customer Flow Tracking",
      ],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            building innovative solutions.
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
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

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

export default Projects;

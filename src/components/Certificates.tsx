import { Award, Code, Database, Shield, Cpu, Globe } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
<<<<<<< HEAD
      name: "AWS Academy Graduate",
      issuer: "AWS Academy",
      icon: Globe,
      color: "bg-sky-500",
      link: "https://www.credly.com/go/JUes3neM",
      description:
        "Completed AWS Academy Cloud Foundations covering core cloud concepts.",
      skills: ["Cloud Computing", "AWS Services", "Virtualization", "Scalability"],
    },
    {
      id: 2,
      name: "Python Essentials 1 & 2 (Advanced)",
      issuer: "Cisco NetAcad",
      icon: Code,
      color: "bg-indigo-500",
      link: "#",
      description:
        "Comprehensive Python training with advanced concepts and problem-solving.",
      skills: ["Python Basics", "OOP", "Data Structures", "Problem Solving"],
    },
    {
      id: 3,
      name: "Introduction to Cybersecurity",
      issuer: "Cisco NetAcad",
      icon: Shield,
      color: "bg-primary",
      link: "#",
      description: "Learned fundamentals of cybersecurity and digital protection.",
      skills: ["Cybersecurity", "Threat Analysis", "Networking", "Ethical Hacking Basics"],
    },
    {
      id: 4,
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco NetAcad",
      icon: Cpu,
      color: "bg-success",
      link: "#",
      description: "In-depth knowledge of networking, routing, and switching.",
      skills: ["Networking", "Routing & Switching", "IPv4/IPv6", "Troubleshooting"],
    },
    {
      id: 5,
      name: "Blockchain: Beyond the Basics",
      issuer: "LinkedIn Learning",
      icon: Database,
      color: "bg-accent",
      link: "#",
      description:
        "Explored blockchain technology and its applications beyond cryptocurrency.",
      skills: ["Blockchain", "Smart Contracts", "Distributed Ledger", "Decentralization"],
    },
    {
      id: 6,
      name: "Linux Essentials Certificate",
      issuer: "Linux Professional Institute",
      icon: Award,
      color: "bg-rose-500",
      link: "#",
      description:
        "Covered Linux fundamentals, command line, and system administration basics.",
      skills: ["Linux Basics", "Shell Commands", "File Systems", "User Management"],
    },
  ];

  return (
    <section id="certificates" className="section-padding bg-portfolio-dark">
      <div className="container-wide">
        {/* Heading */}
=======
      name: "Blockchain Development",
      issuer: "Tech Institute",
      icon: Shield,
      color: "bg-primary"
    },
    {
      id: 2,
      name: "Data Science Mastery",
      issuer: "Data Academy",
      icon: Database,
      color: "bg-accent"
    },
    {
      id: 3,
      name: "Full Stack Web Development",
      issuer: "Code Institute",
      icon: Code,
      color: "bg-warm"
    },
    {
      id: 4,
      name: "IoT Systems Design",
      issuer: "Tech University",
      icon: Cpu,
      color: "bg-success"
    },
    {
      id: 5,
      name: "Cloud Computing",
      issuer: "Cloud Academy",
      icon: Globe,
      color: "bg-purple-500"
    },
    {
      id: 6,
      name: "Machine Learning",
      issuer: "AI Institute",
      icon: Award,
      color: "bg-rose-500"
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-secondary">
      <div className="container-wide">
>>>>>>> d5d26dd (Create portfolio website)
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            Certificates & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is key to staying ahead in technology. Here are some of my certifications.
          </p>
        </div>

<<<<<<< HEAD
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flip-container"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flip-card">
                {/* Front */}
                <div className="flip-front bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10 flex items-start space-x-4">
                  <div
                    className={`${cert.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <cert.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-lg leading-tight text-foreground">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    <div className="pt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Certified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="flip-back bg-card rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col justify-center items-center text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Custom Flip CSS */}
      <style>{`
        .flip-container {
          perspective: 1000px;
          display: block;
        }
        .flip-card {
          position: relative;
          width: 100%;
          height: 280px;
          transform: scale(0.95); /* smaller by default */
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .flip-container:hover .flip-card {
          transform: rotateY(180deg) scale(1.1); /* flip + enlarge on hover */
          z-index: 10;
        }
        .flip-front,
        .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-card rounded-2xl p-6 shadow-lg card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`${cert.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <cert.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg leading-tight">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <div className="pt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
>>>>>>> d5d26dd (Create portfolio website)
    </section>
  );
};

<<<<<<< HEAD
export default Certificates;
=======
export default Certificates;
>>>>>>> d5d26dd (Create portfolio website)

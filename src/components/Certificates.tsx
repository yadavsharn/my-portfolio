import { Award, Code, Database, Shield, Cpu, Globe } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      icon: Globe,
      color: "bg-sky-500",
      link: "#",
      description:
        "Foundational knowledge of cloud concepts, AWS core services, security, and architecture.",
      skills: ["Cloud Computing", "AWS", "Security", "Architecture"],
    },
    {
      id: 2,
      name: "Deep Learning Specialization",
      issuer: "Coursera",
      icon: Cpu,
      color: "bg-indigo-500",
      link: "#",
      description:
        "Mastered Deep Learning foundations, CNNs, RNNs, and sequence models.",
      skills: ["Deep Learning", "Neural Networks", "CNN", "RNN"],
    },

    {
      id: 4,
      name: "Python Essentials",
      issuer: "Cisco Networking Academy",
      icon: Code,
      color: "bg-success",
      link: "#",
      description: "Comprehensive Python programming skills including data structures and libraries.",
      skills: ["Python", "Data Structures", "Programming"],
    },
    {
      id: 5,
      name: "Blockchain: Beyond the Basics",
      issuer: "LinkedIn Learning",
      icon: Database,
      color: "bg-orange-500",
      link: "#",
      description: "Foundational & advanced blockchain concepts. Includes 2.80 CPE credits.",
      skills: ["Blockchain", "Cryptography", "Distributed Ledger"],
    },
    {
      id: 6,
      name: "Building an Ethereum Blockchain App",
      issuer: "LinkedIn Learning",
      icon: Code,
      color: "bg-purple-500",
      link: "#",
      description: "Covers Ethereum basics, smart contracts, and blockchain components.",
      skills: ["Ethereum", "Smart Contracts", "DApps"],
    },
    {
      id: 7,
      name: "Introduction to Artificial Intelligence (2023)",
      issuer: "LinkedIn Learning",
      icon: Cpu,
      color: "bg-blue-500",
      link: "#",
      description: "Focus on AI fundamentals, business applications, and AI concepts. 3.20 CPE credits.",
      skills: ["AI Fundamentals", "Business AI", "Concepts"],
    },
    {
      id: 8,
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      icon: Shield,
      color: "bg-red-500",
      link: "#",
      description: "Certification in cybersecurity fundamentals & cyber awareness.",
      skills: ["Cybersecurity", "Network Security", "Cyber Awareness"],
    },
    {
      id: 9,
      name: "Linear Regression with Python",
      issuer: "Coursera Project Network",
      icon: Code,
      color: "bg-yellow-500",
      link: "#",
      description: "Practical hands-on project on building linear regression models using Python.",
      skills: ["Python", "Linear Regression", "Data Science"],
    },
    {
      id: 10,
      name: "Introduction to Machine Learning",
      issuer: "IIT Kharagpur (NPTEL)",
      icon: Cpu,
      color: "bg-teal-500",
      link: "#",
      description: "Comprehensive course on machine learning algorithms and applications.",
      skills: ["Machine Learning", "Algorithms", "Data Analysis"],
    },
  ];

  return (
    <section id="certificates" className="section-padding bg-portfolio-dark">
      <div className="container-wide">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            Certificates & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is key to staying ahead in technology. Here are some of my certifications.
          </p>
        </div>

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
    </section>
  );
};

export default Certificates;

<<<<<<< HEAD
import { Trophy, Medal, FileText } from "lucide-react";
=======
import { Trophy, Medal, FileText, Target } from "lucide-react";
>>>>>>> d5d26dd (Create portfolio website)

const Achievements = () => {
  const achievements = [
    {
      id: 1,
<<<<<<< HEAD
      title: "Patent Holder",
      description:
        "Granted a patent for an innovative technology solution demonstrating originality and practical application.",
      icon: FileText,
      gradient: "bg-gradient-to-br from-primary to-teal-400",
      stats: "1 Patent",
    },
    {
      id: 2,
      title: "Hackathon Wins",
      description:
        "Participated and won multiple hackathons including IMS Ghaziabad and MANIT Bhopal, recognized for building scalable and impactful solutions.",
      icon: Trophy,
      gradient: "bg-gradient-to-br from-accent to-orange-600",
      stats: "5+ Wins",
=======
      title: "Hackathon Champion",
      description: "Winner of multiple hackathons across India, recognized for innovative and scalable tech solutions.",
      icon: Trophy,
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
      stats: "10+ Wins"
    },
    {
      id: 2,
      title: "Patent Holder",
      description: "Secured a patent for a unique innovation in technology solutions.",
      icon: FileText,
      gradient: "bg-gradient-to-br from-primary to-accent",
      stats: "1 Patent"
>>>>>>> d5d26dd (Create portfolio website)
    },
    {
      id: 3,
      title: "Innovation Recognition",
<<<<<<< HEAD
      description:
        "Acknowledged for solving real-world problems with creativity and technical expertise, receiving multiple awards.",
      icon: Medal,
      gradient: "bg-gradient-to-br from-success to-emerald-400",
      stats: "Multiple Awards",
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container-wide">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-premium-black">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition for innovation, technical excellence, and problem-solving
            capabilities.
          </p>
        </div>

        {/* Achievements Grid */}
=======
      description: "Recognized for creating impactful solutions that address real-world problems.",
      icon: Medal,
      gradient: "bg-gradient-to-br from-success to-emerald-500",
      stats: "Multiple Awards"
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for innovation, technical excellence, and problem-solving capabilities.
          </p>
        </div>

>>>>>>> d5d26dd (Create portfolio website)
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
<<<<<<< HEAD
              className="flip-container cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flip-card">
                {/* Front */}
                <div className="flip-front bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200 flex flex-col items-center justify-center space-y-4">
                  <div
                    className={`${achievement.gradient} w-20 h-20 rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <achievement.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 text-center">
                    {achievement.title}
                  </h3>
                </div>

                {/* Back */}
                <div className="flip-back bg-gray-50 rounded-3xl p-6 shadow-xl border border-gray-200 flex flex-col justify-center items-center text-center">
                  <p className="text-gray-700 mb-3">{achievement.description}</p>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                    {achievement.stats}
                  </span>
=======
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg card-hover text-center space-y-6">
                {/* Icon */}
                <div className="relative mx-auto">
                  <div className={`${achievement.gradient} w-20 h-20 rounded-full flex items-center justify-center mx-auto animate-pulse-glow`}>
                    <achievement.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-playfair font-semibold">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  
                  {/* Stats */}
                  <div className="pt-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                      {achievement.stats}
                    </span>
                  </div>
>>>>>>> d5d26dd (Create portfolio website)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
<<<<<<< HEAD

      {/* Flip CSS */}
      <style>{`
        .flip-container {
          perspective: 1000px;
          display: block;
        }
        .flip-card {
          position: relative;
          width: 100%;
          height: 280px;
          transform: scale(0.95); /* slightly smaller by default */
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .flip-container:hover .flip-card {
          transform: rotateY(180deg) scale(1.05); /* flip + enlarge */
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
>>>>>>> d5d26dd (Create portfolio website)
    </section>
  );
};

<<<<<<< HEAD
export default Achievements;
=======
export default Achievements;
>>>>>>> d5d26dd (Create portfolio website)

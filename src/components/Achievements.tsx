import { Trophy, Medal, FileText } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Patent Published",
      description:
        "Indian Patent Application No. 202511074908. Designed an IoT shopping cart with CNN-based theft detection.",
      icon: FileText,
      gradient: "bg-gradient-to-br from-primary to-teal-400",
      stats: "2025",
    },
    {
      id: 2,
      title: "Winner - HACK-A-THON 25",
      description:
        "Secured 1st place at IMS Ghaziabad by developing an IoT cart with CNN-based theft detection.",
      icon: Trophy,
      gradient: "bg-gradient-to-br from-accent to-orange-600",
      stats: "Winner",
    },
    {
      id: 3,
      title: "Winner - Innovate 2025",
      description:
        "Won at MANIT Bhopal for designing an AI-based smart city monitoring platform.",
      icon: Medal,
      gradient: "bg-gradient-to-br from-success to-emerald-400",
      stats: "Winner",
    },
    {
      id: 4,
      title: "Spark Tank - Innovation Award",
      description:
        "Awarded Best Business Model for the self-checkout project model (May 2025).",
      icon: Trophy,
      gradient: "bg-gradient-to-br from-yellow-400 to-amber-600",
      stats: "May 2025",
    },
    {
      id: 5,
      title: "Innotech 2025 - 2nd Position",
      description:
        "Secured 2nd position at Innotech 2025 for technical innovation.",
      icon: Medal,
      gradient: "bg-gradient-to-br from-blue-400 to-indigo-600",
      stats: "Runner-up",
    },
    {
      id: 6,
      title: "ASB Int. Conference 2025",
      description:
        "Presented research paper on 'Supermarket Seamless Checkout Process'.",
      icon: FileText,
      gradient: "bg-gradient-to-br from-purple-400 to-violet-600",
      stats: "Presenter",
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="container-wide">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for innovation, technical excellence, and problem-solving
            capabilities.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="flip-container cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flip-card">
                {/* Front */}
                <div className="flip-front bg-card rounded-3xl p-8 shadow-xl border border-border flex flex-col items-center justify-center space-y-4">
                  <div
                    className={`${achievement.gradient} w-20 h-20 rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <achievement.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground text-center">
                    {achievement.title}
                  </h3>
                </div>

                {/* Back */}
                <div className="flip-back bg-card rounded-3xl p-6 shadow-xl border border-border flex flex-col justify-center items-center text-center">
                  <p className="text-muted-foreground mb-3">{achievement.description}</p>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                    {achievement.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
    </section>
  );
};

export default Achievements;

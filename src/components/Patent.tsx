import { FileText, Calendar, Lightbulb } from "lucide-react";

const Patent = () => {
  return (
    <section id="patent" className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold">
              Patent <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
<<<<<<< HEAD
              Officially patented technology demonstrating originality and impact.
=======
              Secured intellectual property for groundbreaking technology solutions.
>>>>>>> d5d26dd (Create portfolio website)
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Patent Icon */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-primary to-accent w-32 h-32 rounded-full flex items-center justify-center animate-float">
                    <FileText className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>

              {/* Patent Details */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-playfair font-bold">
<<<<<<< HEAD
                    {/* 🔹 Replace with your patent title */}
                    Smart Cart System for Automated Billing & Theft Prevention
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {/* 🔹 Replace with your description */}
                    A patented IoT-based system integrating RFID, camera scanning, ultrasonic and 
                    weight sensors with ESP32 to automate supermarket billing, prevent theft, and 
                    enable seamless self-checkout.
=======
                    Innovative Technology Solution Patent
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Secured a patent for a unique innovation that addresses critical challenges in technology implementation, 
                    demonstrating originality and potential for significant impact in the industry.
>>>>>>> d5d26dd (Create portfolio website)
                  </p>
                </div>

                {/* Patent Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-warm/10 p-3 rounded-xl">
                      <Calendar className="h-5 w-5 text-warm" />
                    </div>
                    <div>
                      <div className="font-semibold">Patent Year</div>
<<<<<<< HEAD
                      <div className="text-muted-foreground">2025</div> {/* 🔹 Update year */}
=======
                      <div className="text-muted-foreground">2024</div>
>>>>>>> d5d26dd (Create portfolio website)
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-success/10 p-3 rounded-xl">
                      <Lightbulb className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <div className="font-semibold">Innovation Type</div>
<<<<<<< HEAD
                      <div className="text-muted-foreground">IoT & Retail Technology</div> {/* 🔹 Update type */}
=======
                      <div className="text-muted-foreground">Technology Solution</div>
>>>>>>> d5d26dd (Create portfolio website)
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground italic">
<<<<<<< HEAD
                    This patent showcases my dedication to solving real-world retail challenges 
                    with cutting-edge IoT technology and innovation.
=======
                    This patent represents my commitment to innovation and my ability to create novel solutions that can make a real difference.
>>>>>>> d5d26dd (Create portfolio website)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Patent;
=======
export default Patent;
>>>>>>> d5d26dd (Create portfolio website)

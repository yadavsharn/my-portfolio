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
              Officially patented technology demonstrating originality and impact.
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
                    IoT Shopping Cart with CNN Theft Detection
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong>Application No. 202511074908</strong><br />
                    Designed an IoT shopping cart integrating CNN models, RFID sensors, and cloud APIs for automated checkout and theft prevention.
                  </p>
                </div>

                {/* Patent Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-warm/10 p-3 rounded-xl">
                      <Calendar className="h-5 w-5 text-warm" />
                    </div>
                    <div>
                      <div className="font-semibold">Published</div>
                      <div className="text-muted-foreground">2025</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-success/10 p-3 rounded-xl">
                      <Lightbulb className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <div className="font-semibold">Domain</div>
                      <div className="text-muted-foreground">IoT & AI Retail</div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground italic">
                    This patent showcases my dedication to solving real-world retail challenges
                    with cutting-edge IoT technology and innovation.
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

export default Patent;

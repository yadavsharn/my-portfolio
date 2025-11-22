import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-wide">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-card-foreground">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="rounded-xl border-border/50 focus:border-primary transition-colors bg-background text-foreground"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-xl border-border/50 focus:border-primary transition-colors bg-background text-foreground"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="rounded-xl border-border/50 focus:border-primary transition-colors resize-none bg-background text-foreground"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full btn-hero rounded-xl text-lg py-6"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-card-foreground">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Email</div>
                    <div className="text-muted-foreground">shantanu.2426mca700@kiet.edu</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-warm/10 p-3 rounded-xl">
                    <Phone className="h-5 w-5 text-warm" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Phone</div>
                    <div className="text-muted-foreground">+91 7372929485</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-success/10 p-3 rounded-xl">
                    <MapPin className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Location</div>
                    <div className="text-muted-foreground">Delhi-NCR, Ghaziabad</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-card-foreground">
                Follow Me
              </h3>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/yadavsharn"
                  className="bg-primary/10 hover:bg-primary hover:text-white p-3 rounded-xl transition-all duration-300 card-hover cursor-pointer"

                >
                  <Github className="h-6 w-6 text-foreground hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yadavsharn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent/10 hover:bg-accent hover:text-white p-3 rounded-xl transition-all duration-300 card-hover cursor-pointer"
                >
                  <Linkedin className="h-6 w-6 text-foreground hover:text-white" />
                </a>
                <a
                  href="https://x.com/yadav_sharn"
                  className="bg-warm/10 hover:bg-warm hover:text-white p-3 rounded-xl transition-all duration-300 card-hover cursor-pointer"
                >
                  <Twitter className="h-6 w-6 text-foreground hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
<<<<<<< HEAD
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-wide">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-premium-black">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
=======
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
>>>>>>> d5d26dd (Create portfolio website)
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
<<<<<<< HEAD
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-premium-black">
              Send a Message
            </h3>

=======
          <div className="bg-card rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-playfair font-semibold mb-6">Send a Message</h3>
            
>>>>>>> d5d26dd (Create portfolio website)
            <form className="space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="rounded-xl border-border/50 focus:border-primary transition-colors"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-xl border-border/50 focus:border-primary transition-colors"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="rounded-xl border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>
<<<<<<< HEAD

              <Button
                type="submit"
                size="lg"
=======
              
              <Button 
                type="submit" 
                size="lg" 
>>>>>>> d5d26dd (Create portfolio website)
                className="w-full btn-hero rounded-xl text-lg py-6"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
<<<<<<< HEAD
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-premium-black">
                Get in Touch
              </h3>

=======
            <div className="bg-card rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-playfair font-semibold mb-6">Get in Touch</h3>
              
>>>>>>> d5d26dd (Create portfolio website)
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
<<<<<<< HEAD
                    <div className="font-semibold text-premium-black">Email</div>
                    <div className="text-gray-600">shantanuyadav117@gmail.com</div>
                  </div>
                </div>

=======
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">shantanu@example.com</div>
                  </div>
                </div>
                
>>>>>>> d5d26dd (Create portfolio website)
                <div className="flex items-center space-x-4">
                  <div className="bg-warm/10 p-3 rounded-xl">
                    <Phone className="h-5 w-5 text-warm" />
                  </div>
                  <div>
<<<<<<< HEAD
                    <div className="font-semibold text-premium-black">Phone</div>
                    <div className="text-gray-600">+91 7372929485</div>
                  </div>
                </div>

=======
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+91 12345 67890</div>
                  </div>
                </div>
                
>>>>>>> d5d26dd (Create portfolio website)
                <div className="flex items-center space-x-4">
                  <div className="bg-success/10 p-3 rounded-xl">
                    <MapPin className="h-5 w-5 text-success" />
                  </div>
                  <div>
<<<<<<< HEAD
                    <div className="font-semibold text-premium-black">Jhansi</div>
                    <div className="text-gray-600">India</div>
=======
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">India</div>
>>>>>>> d5d26dd (Create portfolio website)
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-premium-black">
                Follow Me
              </h3>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/yadavsharn"
                  className="bg-primary/10 hover:bg-primary hover:text-white p-3 rounded-xl transition-all duration-300 card-hover cursor-pointer"

                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yadavsharn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent/10 hover:bg-accent hover:text-white p-3 rounded-xl transition-all duration-300 card-hover cursor-pointer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/yadav_sharn"
                  className="bg-warm/10 hover:bg-warm hover:text-white p-3 rounded-xl transition-all duration-300 card-hover cursor-pointer"
=======
            
            {/* Social Links */}
            <div className="bg-card rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-playfair font-semibold mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-primary/10 hover:bg-primary hover:text-white p-3 rounded-xl transition-all duration-300 card-hover"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/10 hover:bg-accent hover:text-white p-3 rounded-xl transition-all duration-300 card-hover"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-warm/10 hover:bg-warm hover:text-white p-3 rounded-xl transition-all duration-300 card-hover"
>>>>>>> d5d26dd (Create portfolio website)
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> d5d26dd (Create portfolio website)

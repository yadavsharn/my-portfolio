import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Input
                    {...register("name")}
                    placeholder="Your Name"
                    className={`rounded-xl border-border/50 focus:border-primary transition-colors bg-background text-foreground ${errors.name ? "border-red-500 focus:border-red-500" : ""
                      }`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Your Email"
                    className={`rounded-xl border-border/50 focus:border-primary transition-colors bg-background text-foreground ${errors.email ? "border-red-500 focus:border-red-500" : ""
                      }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Textarea
                    {...register("message")}
                    placeholder="Your Message"
                    rows={5}
                    className={`rounded-xl border-border/50 focus:border-primary transition-colors resize-none bg-background text-foreground ${errors.message ? "border-red-500 focus:border-red-500" : ""
                      }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full btn-hero rounded-xl text-lg py-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
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

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="container-wide">
        <div className="text-center space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <h3
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-playfair font-bold cursor-pointer hover:text-primary transition-colors duration-300"
            >
              Shantanu Yadav
            </h3>

            <p className="text-muted-foreground">
              Tech Innovator • Developer • Problem Solver
            </p>
          </div>

          {/* Bottom line */}
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Shantanu Yadav. All rights reserved. Built with passion and
              creativity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

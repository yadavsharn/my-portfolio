const Footer = () => {
  return (
    <footer className="bg-gray-50 text-premium-black py-12 border-t border-gray-200">
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

            <p className="text-gray-600">
              Tech Innovator • Developer • Problem Solver
            </p>
          </div>
          
          {/* Bottom line */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-500">
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

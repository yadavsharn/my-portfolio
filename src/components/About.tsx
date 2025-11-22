const About = () => {
  return (
    <section id="about" className="section-padding bg-portfolio-dark">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/10 card-hover">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-inter">
              I am an <strong>MCA (AI & Data Science)</strong> student at KIET Group of Institutions with a strong foundation in <strong>Machine Learning, Deep Learning, and Computer Vision</strong>.
              I have experience building real-world projects, winning hackathons, and securing a patent.
              Currently working as an <strong>AI & Web Developer Intern</strong> at TAC Services.
            </p>

            {/* Education & Internship */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-playfair font-bold gradient-text">Education</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold text-lg">MCA (AI & Data Science)</h4>
                    <p className="text-muted-foreground">KIET Group of Institutions (2024 - Present)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">BCA</h4>
                    <p className="text-muted-foreground">Bundelkhand University</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-playfair font-bold gradient-text">Experience</h3>
                <div>
                  <h4 className="font-semibold text-lg">AI & Web Developer Intern</h4>
                  <p className="text-primary font-medium">TAC Services, Ghaziabad</p>
                  <p className="text-sm text-muted-foreground">Aug 2024 – Present</p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 text-sm space-y-1">
                    <li>Integrated FastAPI and TensorFlow Lite for model deployment.</li>
                    <li>Improved model latency by 25% through optimization.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-12 text-left space-y-6">
              <h3 className="text-2xl font-playfair font-bold gradient-text text-center">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Languages & Web</h4>
                  <p className="text-muted-foreground text-sm">Python, Java, JavaScript, React.js, FastAPI, Django, REST APIs</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Machine Learning & DL</h4>
                  <p className="text-muted-foreground text-sm">TensorFlow, PyTorch, Keras, Scikit-learn, XGBoost, CNN, RNN, Transformers</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Computer Vision & NLP</h4>
                  <p className="text-muted-foreground text-sm">OpenCV, YOLO, BERT, GPT, LangChain, Image Segmentation</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Tools & Cloud</h4>
                  <p className="text-muted-foreground text-sm">AWS (SageMaker, EC2), Docker, Git, GitHub, VS Code, Postman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

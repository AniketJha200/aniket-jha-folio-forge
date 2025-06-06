
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-tech-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
          
          <div className="glass-card p-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-tech-teal-400">
                  Electronics & Communication Engineer
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  I'm Aniket Jha, an Electronics and Communication Engineering student at VIT Vellore 
                  with a strong passion for embedded systems, hardware design, and intelligent sensing. 
                  I work at the intersection of hardware and software—building systems that integrate 
                  sensors, data analysis, and real-world applications.
                </p>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  My projects include a smart fruit freshness detection system using acoustic, gas, and 
                  moisture sensors; PCB design using KiCad for industrial applications; and FPGA-based 
                  RF front-end development. I'm also gaining experience with cloud platforms like AWS 
                  and building AI-powered solutions using Python and deep learning frameworks.
                </p>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  I'm driven by a goal to create reliable, scalable hardware systems that solve real-world 
                  problems. If you're working on cutting-edge embedded tech or hardware-software integration, 
                  I'd love to collaborate.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['Hardware Design', 'FPGA Development', 'PCB Design', 'Embedded Systems', 'RF Engineering'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-tech-teal-600/20 text-tech-teal-400 rounded-full text-sm border border-tech-teal-600/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/da34956c-a7cb-48fb-a8e8-744d6d1ba1c0.png"
                    alt="Aniket Jha - Electronics & Communication Engineer"
                    className="w-full h-full object-cover"
                  />
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

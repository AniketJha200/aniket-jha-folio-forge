
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
                  I'm a passionate Electronics and Communication Engineering student at VIT Vellore, 
                  with a strong foundation in hardware design, embedded systems, and RF technologies. 
                  My expertise spans from PCB design using KiCad to FPGA-based development and 
                  innovative projects like FreshCheck.
                </p>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  I thrive on solving complex engineering challenges and turning theoretical concepts 
                  into practical solutions. My goal is to contribute to the advancement of communication 
                  technologies and embedded systems through innovative design and development.
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
                <div className="w-full h-80 bg-gradient-to-br from-tech-blue-600/20 to-tech-teal-600/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-tech-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-tech-orange-400">AJ</span>
                    </div>
                    <p className="text-foreground/60">Professional Photo</p>
                  </div>
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

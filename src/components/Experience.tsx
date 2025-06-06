
const Experience = () => {
  const experiences = [
    {
      title: "Electronics Engineering Intern",
      company: "Tech Solutions Pvt. Ltd.",
      period: "Jun 2024 - Aug 2024",
      description: "Worked on FPGA-based RF frontend development and PCB optimization projects. Collaborated with senior engineers to implement digital signal processing algorithms.",
      technologies: ["FPGA", "Verilog", "RF Design", "PCB Design"]
    },
    {
      title: "Research Assistant",
      company: "VIT Electronics Lab",
      period: "Jan 2024 - Present",
      description: "Assisted in research projects focused on embedded systems and IoT applications. Developed prototypes using Arduino and Raspberry Pi platforms.",
      technologies: ["Arduino", "Raspberry Pi", "IoT", "Sensors"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background to-tech-orange-950/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card p-6 animate-fade-in hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-tech-teal-400 mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-tech-orange-400 mb-2">{exp.company}</h4>
                  </div>
                  <span className="text-tech-blue-400 font-medium">{exp.period}</span>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-tech-blue-600/20 text-tech-blue-400 rounded-full text-sm border border-tech-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

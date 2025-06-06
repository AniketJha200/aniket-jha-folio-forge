
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "Verilog", level: 80 },
        { name: "MATLAB", level: 75 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Hardware & Tools",
      skills: [
        { name: "KiCad", level: 85 },
        { name: "FPGA Development", level: 80 },
        { name: "Arduino/ESP32", level: 90 },
        { name: "Oscilloscope", level: 75 },
        { name: "Multimeter", level: 85 }
      ]
    },
    {
      title: "Technologies",
      skills: [
        { name: "PCB Design", level: 85 },
        { name: "Embedded Systems", level: 80 },
        { name: "IoT", level: 75 },
        { name: "Signal Processing", level: 70 },
        { name: "RF Design", level: 65 }
      ]
    }
  ];

  const certifications = [
    "FPGA Design Professional Certificate",
    "PCB Design Fundamentals",
    "Embedded Systems Programming",
    "Digital Signal Processing Course"
  ];

  const languages = [
    { language: "English", level: "Fluent" },
    { language: "Hindi", level: "Native" },
    { language: "Bengali", level: "Native" }
  ];

  const hobbies = [
    "Electronics Prototyping",
    "Technology Blogging",
    "Open Source Contributing",
    "Circuit Photography",
    "Tech Meetups"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-tech-teal-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Skills & Expertise</h2>
          
          {/* Skills */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card p-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-tech-teal-400 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground/80">{skill.name}</span>
                        <span className="text-tech-blue-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-tech-teal-500 to-tech-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Certifications */}
            <div className="glass-card p-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-tech-orange-400 mb-6">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-foreground/80">
                    <span className="w-2 h-2 bg-tech-orange-400 rounded-full mr-3"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Languages */}
            <div className="glass-card p-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-tech-blue-400 mb-6">Languages</h3>
              <ul className="space-y-3">
                {languages.map((lang, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-foreground/80">{lang.language}</span>
                    <span className="text-tech-blue-400 text-sm">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Hobbies */}
            <div className="glass-card p-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-tech-teal-400 mb-6">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-tech-teal-600/20 text-tech-teal-400 rounded-full text-sm border border-tech-teal-600/30"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

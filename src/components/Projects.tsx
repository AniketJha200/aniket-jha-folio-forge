
import { Button } from '@/components/ui/button';
import { Code, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "FreshCheck",
      description: "An innovative IoT-based food freshness monitoring system using sensors and machine learning algorithms to detect food spoilage in real-time.",
      technologies: ["IoT", "Machine Learning", "Sensors", "Arduino", "Python"],
      features: ["Real-time monitoring", "Mobile alerts", "Data analytics", "Cost-effective solution"],
      status: "Featured Project"
    },
    {
      title: "FPGA-based RF Frontend",
      description: "Developed a software-defined radio frontend using FPGA for signal processing and RF communication applications.",
      technologies: ["FPGA", "Verilog", "RF Design", "Signal Processing", "Xilinx"],
      features: ["High-frequency processing", "Modular design", "Low latency", "Configurable parameters"],
      status: "In Development"
    },
    {
      title: "PCB Design Portfolio",
      description: "Collection of PCB designs created using KiCad for various electronic projects including microcontroller boards and sensor modules.",
      technologies: ["KiCad", "PCB Design", "Electronics", "Schematic Design"],
      features: ["Multi-layer designs", "Component optimization", "DRC compliant", "Manufacturing ready"],
      status: "Ongoing"
    },
    {
      title: "Smart Home Automation",
      description: "Complete home automation system with voice control, mobile app integration, and energy monitoring capabilities.",
      technologies: ["ESP32", "Mobile App", "Voice Recognition", "Cloud Integration"],
      features: ["Voice control", "Remote monitoring", "Energy optimization", "Security features"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-card p-6 animate-fade-in hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-tech-teal-400 group-hover:text-tech-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.status === "Featured Project" && (
                    <Star className="w-5 h-5 text-tech-orange-400 fill-current" />
                  )}
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-tech-blue-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-tech-teal-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-tech-orange-600/20 text-tech-orange-400 rounded text-xs border border-tech-orange-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-tech-blue-400 font-medium">{project.status}</span>
                  <Button size="sm" variant="outline" className="border-tech-teal-600 text-tech-teal-400 hover:bg-tech-teal-600 hover:text-white">
                    <Code className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Education</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-tech-teal-600"></div>
            
            {/* B.Tech ECE */}
            <div className="relative flex items-center mb-12 animate-slide-in-left">
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-tech-teal-600 rounded-full transform -translate-x-1/2"></div>
              
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-tech-orange-400 mb-2">
                    Bachelor of Technology
                  </h3>
                  <h4 className="text-lg font-medium text-tech-teal-400 mb-2">
                    Electronics and Communication Engineering
                  </h4>
                  <p className="text-foreground/80 mb-2">
                    Vellore Institute of Technology (VIT), Vellore
                  </p>
                  <p className="text-tech-blue-400 font-medium mb-3">
                    2022 - 2026 (Expected)
                  </p>
                  <p className="text-foreground/70 text-sm">
                    Relevant Coursework: Digital Signal Processing, VLSI Design, 
                    Microprocessors & Microcontrollers, Communication Systems, 
                    Embedded Systems, Analog & Digital Electronics
                  </p>
                </div>
              </div>
            </div>

            {/* Higher Secondary (PCM) */}
            <div className="relative flex items-center mb-12 animate-slide-in-right">
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-tech-teal-600 rounded-full transform -translate-x-1/2"></div>
              
              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-tech-orange-400 mb-2">
                    Higher Secondary Education
                  </h3>
                  <h4 className="text-lg font-medium text-tech-teal-400 mb-2">
                    Physics, Chemistry, Mathematics (PCM)
                  </h4>
                  <p className="text-foreground/80 mb-2">
                    Velammal Bodhi Campus, Ponneri
                  </p>
                  <p className="text-tech-blue-400 font-medium mb-3">
                    2022
                  </p>
                  <p className="text-foreground/70 text-sm">
                    Specialized in Science stream with focus on Physics, Chemistry, and Mathematics
                  </p>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="relative flex items-center mb-8 animate-slide-in-left">
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-tech-teal-600 rounded-full transform -translate-x-1/2"></div>
              
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-tech-orange-400 mb-2">
                    High School Education
                  </h3>
                  <p className="text-foreground/80 mb-2">
                    TVIS Velammal Vidyalaya
                  </p>
                  <p className="text-tech-blue-400 font-medium mb-3">
                    2020
                  </p>
                  <p className="text-foreground/70 text-sm">
                    Completed secondary education with strong foundation in core subjects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

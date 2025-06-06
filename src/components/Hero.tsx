
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 tech-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-tech-teal-500/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-tech-orange-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-tech-blue-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Aniket Jha</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-4">
          Electronics & Communication Engineering Student
        </p>
        
        <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
          VIT Vellore • Passionate about FPGA Development, PCB Design, and Embedded Systems
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-tech-teal-600 hover:bg-tech-teal-700 text-white px-8 py-3"
          >
            View My Work
          </Button>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="lg"
            className="border-tech-orange-600 text-tech-orange-600 hover:bg-tech-orange-600 hover:text-white px-8 py-3"
          >
            Contact Me
          </Button>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-foreground/60" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

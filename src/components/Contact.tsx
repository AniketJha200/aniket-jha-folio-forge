
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { label: "LinkedIn", href: "#", color: "text-tech-blue-400" },
    { label: "GitHub", href: "#", color: "text-tech-teal-400" },
    { label: "Email", href: "mailto:aniket@example.com", color: "text-tech-orange-400" },
    { label: "Portfolio", href: "#", color: "text-tech-blue-400" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 animate-fade-in">
              <h3 className="text-2xl font-semibold text-tech-teal-400 mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 focus:border-tech-teal-400"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 focus:border-tech-teal-400"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 focus:border-tech-teal-400"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-white/5 border-white/20 focus:border-tech-teal-400 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-tech-teal-600 hover:bg-tech-teal-700 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="animate-fade-in">
              <div className="glass-card p-8 mb-8">
                <h3 className="text-2xl font-semibold text-tech-orange-400 mb-6">Let's Connect</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  I'm always interested in discussing new opportunities, 
                  collaborative projects, or just having a conversation about 
                  electronics and technology. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-tech-blue-400 font-medium w-20">Email:</span>
                    <span className="text-foreground/80">aniket.jha@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-tech-blue-400 font-medium w-20">Location:</span>
                    <span className="text-foreground/80">Vellore, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-tech-blue-400 font-medium w-20">Status:</span>
                    <span className="text-tech-teal-400">Available for opportunities</span>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="glass-card p-8">
                <h4 className="text-lg font-semibold text-tech-teal-400 mb-4">Find me online</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={`${link.color} hover:scale-105 transition-transform duration-200 text-center py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

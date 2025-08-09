import { ArrowRight, Shield, Cpu, Network, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-server-room.jpg';

const HeroSection = () => {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const floatingIcons = [
    { Icon: Shield, position: 'top-20 left-20', delay: '0s' },
    { Icon: Cpu, position: 'top-32 right-32', delay: '1s' },
    { Icon: Network, position: 'bottom-32 left-32', delay: '2s' },
    { Icon: Award, position: 'bottom-20 right-20', delay: '3s' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, position, delay }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-20 z-10 float-animation`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-12 h-12 text-primary" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge - Responsive margin to avoid navbar overlap */}
          <div className="inline-flex items-center glass-card px-6 py-3 rounded-full mb-8 mt-24 sm:mt-12 md:mt-0">
            <Award className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium whitespace-pre-line text-center">Established 2000 • Best IT Solutions in Anand</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient glow-text">25 Years</span>
            <br />
            <span className="text-foreground">of Trusted</span>
            <br />
            <span className="text-gradient">IT Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            From CCTV security and networking to smart automation and server solutions. 
            We transform businesses with cutting-edge technology in Anand, Gujarat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="#contact" className="btn-hero flex items-center space-x-2 group">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#solutions" className="btn-glass flex items-center space-x-2">
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
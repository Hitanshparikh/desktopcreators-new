
import { ArrowRight, Shield, Cpu, Network, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

const HeroSection = () => {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Client Satisfaction' },
  ];



  return (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden select-none">
      {/* Futuristic 3D Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* 3D moving stars background */}
        <Canvas style={{ position: 'absolute', inset: 0, zIndex: 0 }} camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.7} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
  <div className="absolute inset-0 bg-background/10 pointer-events-none" style={{zIndex: 1}}></div>
      </div>



      {/* Main Content */}
  <div className="relative z-20 container mx-auto px-4 text-center select-none">
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
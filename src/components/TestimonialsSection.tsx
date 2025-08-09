import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, GraduationCap, Hospital } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Patel',
      position: 'IT Manager',
      company: 'Anand Industries Ltd.',
      industry: 'Manufacturing',
      icon: Building2,
      rating: 5,
      text: 'Desktop Creators transformed our entire network infrastructure. Their CCTV system with AI detection has significantly improved our security protocols. The team is highly professional and provides excellent ongoing support.',
      project: 'Complete IT Infrastructure Setup',
      duration: '2 months'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Principal',
      company: 'Vidyanagar International School',
      industry: 'Education',
      icon: GraduationCap,
      rating: 5,
      text: 'The smart classroom solutions provided by Desktop Creators have revolutionized our teaching methodology. Students are more engaged, and teachers find the technology intuitive and reliable.',
      project: 'Smart Classroom Implementation',
      duration: '3 months'
    },
    {
      name: 'Dr. Amit Shah',
      position: 'Hospital Administrator',
      company: 'Anand Medical Center',
      industry: 'Healthcare',
      icon: Hospital,
      rating: 5,
      text: 'Their server solutions and networking infrastructure have streamlined our patient management system. The security features ensure complete data protection, which is crucial for healthcare.',
      project: 'Hospital Management System',
      duration: '1.5 months'
    },
    {
      name: 'Kiran Modi',
      position: 'General Manager',
      company: 'Hotel Grand Anand',
      industry: 'Hospitality',
      icon: Building2,
      rating: 5,
      text: 'From guest WiFi to property management systems, Desktop Creators delivered beyond expectations. Our operational efficiency has improved dramatically, and guests appreciate the seamless connectivity.',
      project: 'Hotel Technology Upgrade',
      duration: '6 weeks'
    },
    {
      name: 'Suresh Kumar',
      position: 'Factory Owner',
      company: 'Gujarat Textiles Pvt. Ltd.',
      industry: 'Textile',
      icon: Building2,
      rating: 5,
      text: 'The industrial automation and surveillance system they installed has significantly reduced our operational costs and improved security. Their AMC service ensures everything runs smoothly.',
      project: 'Industrial Automation',
      duration: '4 months'
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '500+', label: 'Projects Completed' },
    { number: '25', label: 'Years Experience' },
    { number: '100%', label: 'On-Time Delivery' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];
  const IconComponent = currentData.icon;

  return (
  <section id="testimonials" className="py-20 relative" style={{background: 'linear-gradient(135deg, hsl(220, 15%, 6%), hsl(220, 15%, 8%))'}}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Client Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            across Gujarat have to say about our services.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="glass-card p-8 md:p-12 rounded-3xl relative">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/30" />
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-4">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">{currentData.name}</h4>
                <p className="text-primary font-medium mb-1">{currentData.position}</p>
                <p className="text-muted-foreground text-sm mb-3">{currentData.company}</p>
                
                {/* Rating */}
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Project Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-center md:justify-start">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {currentData.industry}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Project:</strong> {currentData.project}
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Duration:</strong> {currentData.duration}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="md:col-span-2">
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  "{currentData.text}"
                </blockquote>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="hover:bg-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Pagination Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="hover:bg-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Client Logos / Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => {
            const TestimonialIcon = testimonial.icon;
            return (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <TestimonialIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.text.slice(0, 120)}..."
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join Our Satisfied Clients
            </h3>
            <p className="text-muted-foreground mb-6">
              Ready to experience the Desktop Creators difference? 
              Let's discuss how we can transform your business.
            </p>
            <a href="#contact" className="btn-hero">
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
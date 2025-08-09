import { Calendar, Users, Award, Target, Lightbulb, Heart } from 'lucide-react';

const AboutSection = () => {
  const milestones = [
    { year: '2000', event: 'Desktop Creators established in Anand', icon: Calendar },
    { year: '2005', event: 'Expanded to networking solutions', icon: Target },
    { year: '2010', event: 'Launched CCTV & surveillance division', icon: Award },
    { year: '2015', event: 'Smart automation solutions introduced', icon: Lightbulb },
    { year: '2020', event: 'Digital transformation services', icon: Users },
    { year: '2025', event: 'Leading IT solutions provider in Gujarat', icon: Heart },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: '25 years of delivering premium IT solutions with unwavering quality standards.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your success is our priority. We build lasting partnerships, not just transactions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying ahead with latest technologies to give you competitive advantages.'
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Reliability and transparency in every project, big or small.'
    }
  ];

  const teamStats = [
    { number: '15+', label: 'Expert Engineers' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Delivered' },
    { number: '25', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">About Desktop Creators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2000, we've been Anand's trusted technology partner, 
            transforming businesses with innovative IT solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story & Mission */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What started as a small computer peripheral business in 2000 has evolved into 
                Gujarat's leading IT solutions provider. We've witnessed and driven the digital 
                transformation of countless businesses across Anand and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From simple hardware sales to complex enterprise solutions, our expertise spans 
                security systems, networking infrastructure, smart automation, and digital transformation. 
                Every project strengthens our commitment to excellence.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses and institutions with cutting-edge technology solutions 
                that drive growth, enhance security, and improve operational efficiency. 
                We believe technology should be an enabler, not a barrier.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">25 Years of Innovation</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div key={index} className="relative flex items-start space-x-6 pb-8">
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="glass-card p-4 rounded-xl flex-1 mt-2">
                      <div className="text-primary font-bold text-lg">{milestone.year}</div>
                      <div className="text-foreground">{milestone.event}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                  <div className="service-icon mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Stats */}
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Desktop Creators?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {teamStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team combines technical expertise with deep understanding of 
              local business needs to deliver solutions that truly make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
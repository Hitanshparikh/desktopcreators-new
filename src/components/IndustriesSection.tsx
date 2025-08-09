import { 
  Building2, 
  GraduationCap, 
  Hotel, 
  Factory, 
  Hospital, 
  Landmark,
  ShoppingBag,
  Home
} from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Corporate Buildings',
      description: 'Complete IT infrastructure for modern office complexes',
      solutions: ['Network Infrastructure', 'Security Systems', 'Access Control', 'Server Rooms'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Smart classrooms and campus-wide technology solutions',
      solutions: ['Smart Boards', 'Campus WiFi', 'Student Management', 'Digital Libraries'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      description: 'Secure and reliable IT systems for medical facilities',
      solutions: ['Patient Management', 'Medical Networks', 'Data Security', 'Telemedicine'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Guest experience enhancement through technology',
      solutions: ['Guest WiFi', 'Property Management', 'Security Surveillance', 'Digital Signage'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial automation and process optimization',
      solutions: ['Industrial Networks', 'Process Control', 'Quality Monitoring', 'Inventory Management'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Landmark,
      title: 'Government',
      description: 'Secure and efficient public sector technology',
      solutions: ['E-Governance', 'Citizen Services', 'Data Centers', 'Cybersecurity'],
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Modern retail technology for enhanced customer experience',
      solutions: ['POS Systems', 'Inventory Tracking', 'Customer Analytics', 'Security Systems'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'Smart home solutions for modern living',
      solutions: ['Home Automation', 'Security Systems', 'Entertainment Networks', 'Smart Controls'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const caseStudies = [
    {
      title: 'Major Educational Campus',
      description: 'Deployed comprehensive smart classroom solution across 50+ rooms',
      results: ['100% Digital Learning', '50% Efficiency Increase', '500+ Students Benefited'],
      industry: 'Education'
    },
    {
      title: 'Corporate Headquarters',
      description: 'Complete network infrastructure and security overhaul',
      results: ['Zero Downtime', '99.9% Uptime', '200+ Employees Connected'],
      industry: 'Corporate'
    },
    {
      title: 'Healthcare Facility',
      description: 'Secure patient data management and surveillance system',
      results: ['HIPAA Compliant', '24/7 Monitoring', '100% Data Security'],
      industry: 'Healthcare'
    }
  ];

  return (
    <section id="industries" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Industries We Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From schools to hospitals, offices to factories - we deliver specialized 
            IT solutions for every sector across Gujarat.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="group glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Industry Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20 rounded-xl blur-xl`}></div>
                  <div className="relative service-icon group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Industry Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Solutions List */}
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {solution}
                    </li>
                  ))}
                </ul>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-10 rounded-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-4">
                  {study.industry}
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{study.title}</h4>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's discuss how our industry-specific solutions can drive your business forward. 
              Every sector has unique needs, and we have the expertise to address them all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-hero">
                Schedule Consultation
              </a>
              <a href="tel:18008894305" className="btn-glass">
                Call: 1800 8894 305
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
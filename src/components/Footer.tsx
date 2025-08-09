import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const services = [
    'CCTV & Surveillance',
    'Networking Solutions',
    'Server Solutions',
    'Smart Premises',
    'Digital Conferencing',
    'IT AMC Services'
  ];

  const industries = [
    'Corporate Buildings',
    'Educational Institutions',
    'Healthcare Facilities',
    'Hospitality',
    'Manufacturing',
    'Government'
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-white">DC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Desktop Creators</h3>
                <p className="text-sm text-muted-foreground">Since 2000</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Gujarat's leading IT solutions provider with 25 years of experience 
              in transforming businesses through technology.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  G-1, Vaibhav Towers, Nr. Smart Bazar, Anand – Vidyanagar Rd, Anand
                </span>
              </div>
              {/* Google Maps Embed */}
              <div className="my-4 rounded-xl overflow-hidden border border-primary/20 shadow-lg">
                <iframe
                  title="Desktop Creators Location Map"
                  src="https://www.google.com/maps?q=G-1,+Vaibhav+Towers,+Nr.+Smart+Bazar,+Anand+%E2%80%93+Vidyanagar+Rd,+Anand&output=embed"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:18008894305" className="text-sm text-muted-foreground hover:text-primary">
                  1800 8894 305
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:admin@desktopcreators.com" className="text-sm text-muted-foreground hover:text-primary">
                  admin@desktopcreators.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Mon-Sat: 10:00 AM - 07:30 PM
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#solutions" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Industries</h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a 
                    href="#industries" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h5 className="font-semibold text-foreground mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:space-y-0 space-y-4">
            <div className="w-full md:w-auto text-center md:text-left break-words">
              <p className="text-muted-foreground text-sm whitespace-pre-line">
                © 2025 Desktop Creators. All rights reserved. | Established 2000 | Best IT Solutions in Anand
              </p>
            </div>
            <div className="flex flex-col xs:flex-row items-center space-y-2 xs:space-y-0 xs:space-x-6">
              <div className="text-center">
                <div className="text-primary font-bold text-lg">25+</div>
                <div className="text-muted-foreground text-xs">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bold text-lg">1000+</div>
                <div className="text-muted-foreground text-xs">Happy Clients</div>
              </div>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </footer>
  );
};

export default Footer;
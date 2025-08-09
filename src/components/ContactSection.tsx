import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      content: 'G-1, Vaibhav Towers, Nr. Smart Bazar, Anand – Vidyanagar Rd, Anand, Gujarat',
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '1800 8894 305',
      action: 'tel:18008894305'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Monday - Saturday: 10:00 AM - 07:30 PM',
      action: null
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'admin@desktopcreators.com',
      action: 'mailto:admin@desktopcreators.com'
    }
  ];

  const services = [
    'CCTV & Surveillance',
    'Networking Solutions', 
    'Server Solutions',
    'Smart Premises',
    'Digital Conferencing',
    'Educational Tech',
    'IT AMC Services',
    'CCTV AMC',
    'Custom Solution'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge IT solutions? 
            Let's discuss your project requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="service-icon w-12 h-12 p-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{info.content}</p>
                        {info.action && info.action.startsWith('http') && (
                          <a 
                            href={info.action} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary text-sm hover:underline mt-1 inline-block"
                          >
                            Get Directions
                          </a>
                        )}
                        {info.action && (info.action.startsWith('tel:') || info.action.startsWith('mailto:')) && (
                          <a 
                            href={info.action}
                            className="text-primary text-sm hover:underline mt-1 inline-block"
                          >
                            {info.action.startsWith('tel:') ? 'Call Now' : 'Send Email'}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Map */}
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-4">Our Location</h4>
              <div className="w-full h-48 rounded-xl overflow-hidden border border-primary/20 shadow-lg">
                  <iframe
                    title="Desktop Creators Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341.2425507361737!2d72.94281449009002!3d22.55291260123209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e7f0717bf01%3A0xdb57346bafa62ef9!2sDesktop%20Creators!5e1!3m2!1sen!2sus!4v1754739043671!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="glass-card border-white/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="glass-card border-white/10"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="glass-card border-white/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company/Organization
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter company name"
                      className="glass-card border-white/10"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 glass-card border border-white/10 rounded-lg text-foreground bg-background"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Description *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    required
                    className="glass-card border-white/10"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Attach Documents (Optional)
                  </label>
                  <div className="glass-card border border-dashed border-white/20 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PDF, DOC, or image files (Max 10MB)
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card p-6 rounded-2xl text-center">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold text-foreground mb-2">Emergency Support</h4>
            <p className="text-sm text-muted-foreground mb-4">24/7 support for critical issues</p>
            <a href="tel:18008894305" className="btn-glass w-full">Call Now</a>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold text-foreground mb-2">Quick Quote</h4>
            <p className="text-sm text-muted-foreground mb-4">Get instant pricing estimates</p>
            <a href="mailto:admin@desktopcreators.com" className="btn-glass w-full">Email Us</a>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold text-foreground mb-2">Visit Our Office</h4>
            <p className="text-sm text-muted-foreground mb-4">See our solutions in action</p>
            <a href="#" className="btn-glass w-full">Get Directions</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
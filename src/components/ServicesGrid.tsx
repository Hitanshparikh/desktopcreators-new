import { 
  Shield, 
  Network, 
  Server, 
  Monitor, 
  Home, 
  GraduationCap, 
  Settings, 
  Camera 
} from 'lucide-react';
import cctvImage from '@/assets/cctv-ai-camera.jpg';
import networkImage from '@/assets/networking-equipment.jpg';
import classroomImage from '@/assets/smart-classroom.jpg';
import smartpremises from '@/assets/smart.jpeg';
import conference from '@/assets/conference.jpg';
import amc from '@/assets/amc.png';

import React, { useRef, useState } from 'react';
import cctvmain from '@/assets/cctv-main.jpg';
import serverRoomImage from '@/assets/hero-server-room.jpg';

const ServicesGrid = () => {
  const services = [
    {
      icon: Shield,
      title: 'CCTV & Surveillance',
      description: 'AI-powered detection, remote monitoring, and comprehensive AMC services',
      features: ['Face Recognition', 'Helmet Detection', 'Fire/Smoke Detection', 'Remote Access'],
      image: cctvImage,
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Network,
      title: 'Networking Solutions',
      description: 'Professional LAN, WAN, Wi-Fi, and cloud-managed network infrastructure',
      features: ['Cloud-Managed Switches', 'VPN Setup', 'Network Security', 'Cable Management'],
      image: networkImage,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Server Solutions',
      description: 'Comprehensive server setup, virtualization, and cloud management',
      features: ['Virtual Servers', 'Windows Server', 'NAS & SAN', 'Cloud Migration'],
      image: serverRoomImage,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Home,
      title: 'Smart Premises',
      description: 'Gate automation, access control, and intelligent building systems',
      features: ['Face Recognition Entry', 'Automated Gates', 'Smart Alarms', 'IoT Integration'],
      image: smartpremises,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Monitor,
      title: 'Digital Conferencing',
      description: 'Smart boards, video conferencing, and collaborative technology',
      features: ['Interactive Smart Boards', 'Video Conferencing', 'Digital Whiteboards', 'Collaboration Tools'],
      image: conference,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: GraduationCap,
      title: 'Educational Tech',
      description: 'Complete technology solutions for schools and educational institutions',
      features: ['Smart Classrooms', 'Student Management', 'Digital Learning', 'Campus Security'],
      image: classroomImage,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Settings,
      title: 'IT AMC Services',
      description: 'Comprehensive maintenance contracts for all your IT infrastructure',
      features: ['24/7 Support', 'Preventive Maintenance', 'Hardware Replacement', 'Software Updates'],
      image: amc,
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Camera,
      title: 'CCTV AMC',
      description: 'Specialized maintenance for surveillance systems and security equipment',
      features: ['Regular Inspections', 'Lens Cleaning', 'System Updates', 'Emergency Repairs'],
      image: cctvmain ,
      color: 'from-rose-500 to-red-500'
    }
  ];

  // Helper for magnetic effect
  function useMagnet3D() {
    const [style, setStyle] = useState({});
    const [showOverlay, setShowOverlay] = useState(true);
    const ref = useRef(null);
    function onMouseMove(e: React.MouseEvent) {
      const el = ref.current as HTMLDivElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = ((x - centerX) / centerX) * 16; // max 16px
      const moveY = ((y - centerY) / centerY) * 12; // max 12px
      const rotateY = ((x - centerX) / centerX) * 10; // max 10deg
      const rotateX = -((y - centerY) / centerY) * 8; // max 8deg
      setStyle({
        transform: `scale(1.13) translate(${moveX}px, ${moveY}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
        transition: 'transform 0.18s cubic-bezier(.25,.46,.45,.94)',
      });
      setShowOverlay(false);
    }
    function onMouseLeave() {
      setStyle({
        transform: 'scale(1) translate(0,0) rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.4s cubic-bezier(.25,.46,.45,.94)',
      });
      setShowOverlay(true);
    }
    return { ref, style, onMouseMove, onMouseLeave, showOverlay };
  }

  return (
  <section id="solutions" className="py-20 relative" style={{background: 'linear-gradient(135deg, hsl(220, 15%, 6%), hsl(220, 15%, 8%))'}}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT services tailored for businesses, educational institutions, 
            and government organizations across Gujarat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            // Magnetic 3D effect for each card
            const magnet = useMagnet3D();
            return (
              <div
                key={index}
                className="group glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s`, perspective: '900px' }}
              >
                {/* Service Image with magnetic 3D effect */}
                {service.image && (
                  <div
                    className="relative mb-6 rounded-xl overflow-hidden"
                    ref={magnet.ref}
                    onMouseMove={magnet.onMouseMove}
                    onMouseLeave={magnet.onMouseLeave}
                    style={{ perspective: '900px' }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-32 object-cover transition-transform duration-300 will-change-transform"
                      style={{ ...magnet.style, transformStyle: 'preserve-3d' }}
                    />
                    {magnet.showOverlay && (
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
                    )}
                  </div>
                )}

                {/* Service Icon */}
                <div className="service-icon group-hover:scale-110 transition-all duration-300 mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experts will design a tailored IT solution that perfectly fits your business requirements.
            </p>
            <a href="#contact" className="btn-hero">
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
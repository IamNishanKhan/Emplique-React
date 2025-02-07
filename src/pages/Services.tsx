import React from 'react';
import { Smartphone, Cloud, Brain, Cog, Shield } from 'lucide-react';
import empliqueIcon from '../assets/icons/icon.png';

const services = [
  {
    icon: Smartphone,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Integration'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    features: ['AWS', 'Azure', 'Google Cloud', 'Cloud Migration'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by advanced AI algorithms.',
    features: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Cog,
    title: 'DevOps Services',
    description: 'Streamlined development and deployment processes.',
    features: ['CI/CD', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring'],
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions for your digital assets.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-16 bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src={empliqueIcon}
            alt="Emplique Icon"
            className="h-20 w-20 mx-auto mb-8 rounded-lg object-cover animate-float-icon"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-500">
            Our Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative bg-glass rounded-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                  <service.icon className="absolute bottom-4 right-4 h-8 w-8 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">{service.title}</h3>
                  <p className="text-white mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-blue-200 flex items-center">
                        <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
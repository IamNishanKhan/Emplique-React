import React from 'react';
import { Code2, Smartphone, Cloud, Brain, Cog, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS', 'Azure', 'Google Cloud', 'Cloud Migration']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced AI algorithms.',
      features: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cog,
      title: 'DevOps Services',
      description: 'Streamlined development and deployment processes.',
      features: ['CI/CD', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training']
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className="bg-gray-800 rounded-lg p-8 transform hover:scale-105 transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
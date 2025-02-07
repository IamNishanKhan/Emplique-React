import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Star, Clock, Phone as Python, Subscript as Javascript, Database, Cloud, Terminal, Server, Cpu, Globe } from 'lucide-react';
import ProjectCarousel from '../components/ProjectCarousel';
import ReviewCarousel from '../components/ReviewCarousel';
import TechStack from '../components/TechStack';
import empliqueIcon from '../assets/icons/icon.png';


const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, value: '25+', label: 'Projects Completed' },
    { icon: Star, value: '98%', label: 'Client Satisfaction' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
    { icon: Terminal, value: '24/7', label: 'Support Available' },
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced AI algorithms.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'DevOps Services',
      description: 'Streamlined development and deployment processes.',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your digital assets.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-90" />
        <div className="relative z-10 text-center px-4">
          <img
            src={empliqueIcon}
            alt="Emplique Icon"
            className="h-20 w-20 mx-auto mb-8 rounded-lg object-cover animate-float-icon"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Emplique
          </h1>
          <p className="text-xl md:text-2xl text-gradient-modern mb-8 max-w-2xl mx-auto">
            Transforming ideas into digital reality with cutting-edge technology solutions
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-glass text-gradient-cool rounded-full hover:bg-blue-500/20 transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card relative overflow-hidden rounded-lg bg-glass p-6 group"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{service.title}</h3>
                <p className="text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-black/50 backdrop-blur-lg transform hover:scale-105 transition-transform"
              >
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-blue-500" />
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Technologies We Use
          </h2>
          <TechStack />
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="py-20 bg-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Our Projects
          </h2>
          <ProjectCarousel />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Client Reviews
          </h2>
          <ReviewCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gradient">
            Ready to Start Your Project?
          </h2>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
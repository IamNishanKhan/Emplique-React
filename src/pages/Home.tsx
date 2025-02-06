import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Users, Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Code2, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '98%', label: 'Client Satisfaction' },
    { icon: Star, value: '15+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
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

  const tools = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Django',
    'TensorFlow', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'MongoDB',
  ];

  const reviews = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content: 'Emplique delivered exceptional results for our project. Their team\'s expertise and professionalism exceeded our expectations.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    },
    // Add more reviews as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 opacity-90" />
        <div className="relative z-10 text-center px-4">
          <Code2 className="h-20 w-20 mx-auto mb-8 text-blue-500" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Emplique
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforming ideas into digital reality with cutting-edge technology solutions
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-700 transform hover:scale-105 transition-transform"
              >
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-blue-500" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gray-800 p-6 hover:bg-gray-700 transition-colors"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="p-4 bg-gray-700 rounded-lg text-center transform hover:scale-105 transition-transform"
              >
                <span className="text-white">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full">
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full">
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
            {/* Add your carousel content here */}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Client Reviews
          </h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full">
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full">
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
            {/* Add your reviews carousel content here */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
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
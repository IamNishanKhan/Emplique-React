import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      description: 'A full-featured e-commerce platform with real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'AI-Powered Analytics',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      description: 'Advanced analytics platform using machine learning algorithms.',
      technologies: ['Python', 'TensorFlow', 'AWS']
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800',
      description: 'Secure mobile banking application with biometric authentication.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Cloud Migration',
      category: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      description: 'Large-scale cloud migration project for enterprise client.',
      technologies: ['AWS', 'Docker', 'Kubernetes']
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our best work and successful projects
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-500 mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
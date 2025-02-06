import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    title: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    description: 'Next-gen shopping experience with AI-powered recommendations',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://demo-ecommerce.emplique.com',
    stats: {
      users: '10K+',
      sales: '$2M+',
      products: '50K+'
    }
  },
  {
    title: 'AI Analytics Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Real-time data insights with predictive analytics',
    technologies: ['Python', 'TensorFlow', 'React'],
    demoUrl: 'https://demo-analytics.emplique.com',
    stats: {
      accuracy: '99.9%',
      dataPoints: '1M+',
      predictions: '500K+'
    }
  },
  {
    title: 'Mobile Banking App',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800',
    description: 'Secure financial solutions with blockchain integration',
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://demo-banking.emplique.com',
    stats: {
      transactions: '1M+',
      users: '100K+',
      security: '100%'
    }
  },
  {
    title: 'Cloud Infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    description: 'Scalable cloud architecture with auto-scaling',
    technologies: ['AWS', 'Docker', 'Kubernetes'],
    demoUrl: 'https://demo-cloud.emplique.com',
    stats: {
      uptime: '99.99%',
      scalability: '∞',
      performance: '100%'
    }
  }
];

const ProjectCarousel = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
      className="w-full py-12"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="w-[300px] sm:w-[400px]">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-gray-800 rounded-lg">
                      <div className="text-sm text-purple-400">{key}</div>
                      <div className="text-white font-bold">{value}</div>
                    </div>
                  ))}
                </div>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;
import React from 'react';
import {
  Database, Cloud, Terminal, Server, Cpu, Globe, Shield, Smartphone, Laptop, Layers
} from 'lucide-react';

const technologies = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'from-blue-500 to-yellow-500'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Django',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    color: 'from-green-600 to-green-700'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    color: 'from-blue-400 to-cyan-400'
  }
];

const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className="tech-card group relative"
          style={{ '--delay': index } as React.CSSProperties}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-rotate-3">
            <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}></div>
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="h-12 w-12 mb-4 group-hover:animate-float"
            />
            <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
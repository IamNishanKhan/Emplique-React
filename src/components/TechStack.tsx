import React from 'react';
import {
  Code2, Database, Cloud, Terminal, Server, Cpu, Globe, Shield, Smartphone, Laptop, 
  Layers, GitBranch, Box, Workflow, Zap, Network, Binary, Boxes
} from 'lucide-react';

const technologies = [
  // Programming Languages
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
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Go',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    color: 'from-blue-400 to-blue-500'
  },
  
  // Frontend Frameworks
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    color: 'from-gray-600 to-gray-700'
  },

  // Backend & Runtime
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Django',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    color: 'from-green-600 to-green-700'
  },
  {
    name: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    color: 'from-teal-500 to-teal-600'
  },
  {
    name: 'Spring Boot',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    color: 'from-green-400 to-green-500'
  },

  // Databases
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Redis',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Elasticsearch',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
    color: 'from-yellow-500 to-yellow-600'
  },

  // Cloud & DevOps
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
    name: 'Kubernetes',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: 'from-gray-600 to-gray-700'
  },

  // AI & ML Tools
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'PyTorch',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Scikit-learn',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'from-blue-500 to-orange-500'
  },
  {
    name: 'Keras',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    color: 'from-red-600 to-red-700'
  },

  // Mobile Development
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    name: 'React Native',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Swift',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Kotlin',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    color: 'from-purple-500 to-purple-600'
  },

  // Testing & Monitoring
  {
    name: 'Jest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    color: 'from-red-600 to-red-700'
  },
  {
    name: 'Grafana',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Jenkins',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Prometheus',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
    color: 'from-orange-600 to-red-500'
  }
];

const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className="tech-card group relative"
          style={{ '--delay': index } as React.CSSProperties}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-glass p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-rotate-3">
            <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}></div>
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="h-12 w-12 mb-4 group-hover:animate-float"
            />
            <h3 className="text-sm font-semibold text-blue-400 text-center">{tech.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
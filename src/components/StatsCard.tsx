import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatsCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  delay: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, value, label, delay }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const countTo = parseInt(value.replace(/\D/g, ''));
  const duration = 2000;
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (inView) {
      const animate = (timestamp: number) => {
        if (!startTime.current) startTime.current = timestamp;
        const progress = timestamp - startTime.current;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(countTo * percentage));

        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, countTo]);

  return (
    <div
      ref={ref}
      className="relative group"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="bg-glass rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:rotate-2">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-gray-900 p-6 rounded-lg">
            <Icon className="h-12 w-12 text-purple-500 mb-4 animate-float" />
            <div className="text-4xl font-bold mb-2 text-gradient animate-counter">
              {count}{value.includes('+') ? '+' : '%'}
            </div>
            <div className="text-gray-400">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
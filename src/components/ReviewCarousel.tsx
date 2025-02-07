import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const reviews = [
  {
    name: 'John Smith',
    role: 'CEO, TechCorp',
    company: 'TechCorp Solutions',
    content: 'Emplique transformed our e-commerce platform, resulting in a 200% increase in sales and 45% improvement in user engagement. Their expertise in AI-driven recommendations was game-changing.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    rating: 5,
    project: 'E-commerce Platform',
    metrics: {
      'Sales Increase': '200%',
      'User Engagement': '+45%',
      'Load Time': '-60%'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'InnovateTech Inc',
    content: 'The AI Analytics Dashboard developed by Emplique has revolutionized our decision-making process. The predictive analytics feature has helped us save over $1M in operational costs.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    rating: 5,
    project: 'AI Analytics Dashboard',
    metrics: {
      'Cost Savings': '$1M+',
      'Accuracy': '99.9%',
      'Efficiency': '+75%'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'DataFlow Systems',
    content: 'Emplique\'s cloud infrastructure solution has provided us with unmatched scalability and reliability. Our system performance improved by 300% while reducing costs by 40%.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    rating: 5,
    project: 'Cloud Infrastructure',
    metrics: {
      'Performance': '+300%',
      'Cost Reduction': '40%',
      'Uptime': '99.99%'
    }
  }
];

const ReviewCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full py-12"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="relative group mx-auto max-w-3xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{review.name}</h3>
                  <p className="text-purple-400">{review.role}</p>
                  <p className="text-gray-400">{review.company}</p>
                </div>
                <div className="ml-auto flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm text-purple-400 mb-2">Project: {review.project}</div>
                <p className="text-gray-300 text-lg italic">"{review.content}"</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(review.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-800 p-3 rounded-lg text-center">
                    <div className="text-sm text-gray-400">{key}</div>
                    <div className="text-lg font-bold text-purple-400">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCarousel;
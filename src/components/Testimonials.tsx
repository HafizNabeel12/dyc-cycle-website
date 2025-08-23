'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Computer Science Student',
      university: 'MIT',
      rating: 5,
      comment: 'This e-bike has completely transformed my campus experience! I can get to classes across campus in just minutes, and it folds perfectly to fit in my dorm room. The battery lasts all week with my daily usage.',
      avatar: '/* Replace with actual avatar */',
      verified: true,
      bikeModel: 'DYU King'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Engineering Student',
      university: 'Stanford',
      rating: 5,
      comment: 'Amazing quality for the price! I\'ve been using my DYU for 8 months now, and it still runs like new. The customer service is exceptional - they helped me with a minor issue within hours.',
      avatar: '/* Replace with actual avatar */',
      verified: true,
      bikeModel: 'DYU A1F'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      role: 'Business Student',
      university: 'UCLA',
      rating: 5,
      comment: 'Perfect for city commuting! I live off-campus and this bike has saved me so much money on gas and parking. Plus, it\'s environmentally friendly. Highly recommend to all students!',
      avatar: '/* Replace with actual avatar */',
      verified: true,
      bikeModel: 'DYU D3F'
    },
    {
      id: '4',
      name: 'David Kim',
      role: 'Graduate Student',
      university: 'Harvard',
      rating: 5,
      comment: 'The build quality is impressive. I\'ve put over 1000 miles on mine and it\'s still going strong. The foldable design is genius - I can take it on the subway and store it in my apartment easily.',
      avatar: '/* Replace with actual avatar */',
      verified: true,
      bikeModel: 'DYU C6'
    },
    {
      id: '5',
      name: 'Jessica Taylor',
      role: 'Medical Student',
      university: 'Johns Hopkins',
      rating: 5,
      comment: 'As someone who needs to be at the hospital early, this e-bike is a lifesaver. It\'s reliable, fast, and the battery life is excellent. Assembly was super easy too!',
      avatar: '/* Replace with actual avatar */',
      verified: true,
      bikeModel: 'DYU S2'
    },
    {
      id: '6',
      name: 'Alex Thompson',
      role: 'Art Student',
      university: 'RISD',
      rating: 5,
      comment: 'Love the sleek design and how smooth the ride is. It\'s become part of my daily routine, and I\'ve gotten so many compliments on campus. Worth every penny!',
      avatar: '/* Replace with actual avatar */',
      verified: true,
      bikeModel: 'DYU T1'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Students' },
    { number: '4.9★', label: 'Average Rating' },
    { number: '98%', label: 'Would Recommend' },
    { number: '500+', label: 'Universities' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            Student Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Students
            <span className="block text-yellow-500">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from thousands of students who have made DYU their campus companion.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-12 mx-4 border border-gray-200">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Testimonial Content */}
                      <div className="flex-1">
                        {/* Quote Icon */}
                        <div className="mb-6">
                          <Quote className="w-12 h-12 text-yellow-500 opacity-50" />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>

                        {/* Comment */}
                        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                          "{testimonial.comment}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                          {/* Avatar */}
                          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-black">{testimonial.name}</h4>
                              {testimonial.verified && (
                                <CheckCircle className="w-5 h-5 text-yellow-500" />
                              )}
                            </div>
                            <p className="text-gray-600">{testimonial.role}</p>
                            <p className="text-sm text-black font-medium">{testimonial.university}</p>
                          </div>
                        </div>
                      </div>

                      {/* Product Badge */}
                      <div className="bg-black text-white p-6 rounded-2xl text-center min-w-[200px]">
                        <div className="text-sm text-gray-400 mb-2">Riding</div>
                        <div className="text-lg font-bold text-yellow-500 mb-4">{testimonial.bikeModel}</div>
                        <div className="bg-gray-800 rounded-full px-4 py-2">
                          <span className="text-sm">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 z-10 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 z-10 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index
                  ? 'bg-yellow-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-black rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join These Happy Students?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Get your DYU e-bike today and experience the freedom of effortless campus commuting.
            </p>
            <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
              Shop E-Bikes Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
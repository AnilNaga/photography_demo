import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Jessica & David Miller',
      service: 'Wedding Photography',
      rating: 5,
      text: 'LensStory captured our wedding day perfectly! Every emotion, every moment, every detail was beautifully preserved. We couldn\'t be happier with our photos.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Amanda Rodriguez',
      service: 'Family Portrait',
      rating: 5,
      text: 'Working with Sarah was an absolute pleasure. She made our family feel comfortable and natural, resulting in stunning portraits that we\'ll treasure forever.',
      image: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Robert Thompson',
      service: 'Corporate Headshots',
      rating: 5,
      text: 'Professional, efficient, and incredibly talented. The headshots exceeded my expectations and have been instrumental in advancing my career.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Lisa & John Parker',
      service: 'Pre-Wedding Shoot',
      rating: 5,
      text: 'Our engagement session was magical! The team knew exactly how to capture our love story in the most beautiful and authentic way.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Client Love Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nothing makes us happier than seeing the joy our photography brings to our clients. 
            Here's what they have to say about their experience with LensStory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.service}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-400/20" />
                <p className="text-gray-700 leading-relaxed italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-yellow-400 inline-block p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-4">Ready to Create Your Story?</h3>
            <a
              href="#contact"
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-block"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
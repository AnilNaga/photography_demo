import React from 'react';
import { Award, Users, Camera, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Camera, number: '2000+', label: 'Sessions Completed' },
    { icon: Heart, number: '500+', label: 'Happy Couples' },
    { icon: Award, number: '10+', label: 'Years Experience' },
    { icon: Users, number: '50+', label: 'Awards Won' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
              About LensStory
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Founded with a passion for capturing life's most precious moments, LensStory has been 
              creating timeless memories for over a decade. Our artistic approach combines technical 
              excellence with emotional storytelling.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We believe that every photograph should tell a story, evoke emotion, and stand the test 
              of time. Our team of experienced photographers brings creativity, professionalism, and 
              a keen eye for detail to every session.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Photography Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-yellow-400 text-black p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">Since 2014</div>
              <div className="text-sm">Crafting Visual Stories</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="font-serif text-3xl font-light text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Lead Photographer',
                image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              },
              {
                name: 'Michael Chen',
                role: 'Wedding Specialist',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              },
              {
                name: 'Emma Williams',
                role: 'Portrait Artist',
                image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
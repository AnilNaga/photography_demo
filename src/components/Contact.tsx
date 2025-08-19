import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Let's Create Magic Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to capture your special moments? Get in touch with us to discuss your photography needs 
            and let's create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Studio Address</p>
                  <p className="text-gray-300">123 Photography Lane, Creative District, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">hello@lensstory.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Studio Hours</p>
                  <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat - Sun: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Book a Consultation</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="prewedding">Pre-Wedding Shoot</option>
                    <option value="child">Child Photography</option>
                    <option value="family">Family Portrait</option>
                    <option value="studio">Studio Session</option>
                    <option value="corporate">Corporate Headshots</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="date" className="block text-sm font-medium mb-2">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  placeholder="Tell us about your vision and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-800 p-4 rounded-2xl">
            <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Interactive Map (Google Maps integration would go here)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
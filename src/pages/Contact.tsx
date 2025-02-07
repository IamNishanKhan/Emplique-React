import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import empliqueIcon from '../assets/icons/icon.png';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src={empliqueIcon}
            alt="Emplique Icon"
            className="h-20 w-20 mx-auto mb-8 rounded-lg object-cover animate-float-icon"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-500">
            Contact Us
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Get in touch with us to discuss your next project
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-glass rounded-lg p-8">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-black/50 border border-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-black/50 border border-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-black/50 border border-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-glass rounded-lg p-8">
                <h2 className="text-2xl font-bold text-blue-500 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-blue-300">Email</h3>
                      <p className="text-white">info@emplique.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-blue-300">Phone</h3>
                      <p className="text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-blue-300">Address</h3>
                      <p className="text-white">123 Tech Street<br />Silicon Valley, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-glass rounded-lg p-8">
                <h2 className="text-2xl font-bold text-blue-500 mb-6">Office Hours</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-blue-300">Weekdays</h3>
                    <p className="text-white">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-300">Weekends</h3>
                    <p className="text-white">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
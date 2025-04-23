import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/myyqjvqj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: 'caugjohnson@gmail.com'
        }),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.');
      console.error('Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <Link to="/" className="inline-block mb-12 opacity-0 animate-fade-in-up-1">
          <span className="text-white hover:text-purple-400 transition-colors duration-300">← Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up-1">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Get in Touch
              </span>
            </h1>
            <p className="text-gray-300">I'd love to hear from you! Send me a message and I'll get back to you as soon as possible.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 opacity-0 animate-fade-in-up-2">
              <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <a 
                  href="https://www.linkedin.com/in/connor-johnson-8b5b07251" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>

                <div className="flex items-center space-x-3 text-gray-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>caugjohnson@gmail.com</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>(519) 590-0163</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 opacity-0 animate-fade-in-up-3">
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium !text-white mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium !text-white mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium !text-white mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}; 
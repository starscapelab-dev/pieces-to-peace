'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.div
          className="flex min-h-[50vh] bg-[url('/images/Hero-bg.webp')] bg-cover bg-center items-center justify-center text-white flex-col px-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="font-medium text-4xl md:text-6xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            We'd love to hear from you
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="flex flex-col md:flex-row md:px-20 px-10 py-20 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl mb-6">Connect With Us</h2>
            <p className="text-lg leading-relaxed mb-8">
              Whether you have questions about our fabrics, would like to discuss a custom order, or simply want to learn more about our process, we're here to help.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Email</h3>
                <p className="text-lg">hello@piecestopeace.com</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-lg hover:text-amber-800 transition-colors">Instagram</a>
                  <a href="#" className="text-lg hover:text-amber-800 transition-colors">Facebook</a>
                  <a href="#" className="text-lg hover:text-amber-800 transition-colors">LinkedIn</a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Business Hours</h3>
                <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-lg">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-800 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-800 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-800 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-800 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-amber-800 text-white hover:bg-amber-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    { icon: '📧', label: 'Email', value: 'arpan@example.com', link: 'mailto:arpan@example.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/arpan', link: 'https://www.linkedin.com/in/kalsariya-arpan-a474a8379/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/arpan', link: 'https://github.com/kalsariyaarpan' },
  ];

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-cyber relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-cyber-pink/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="w-full md:max-w-5xl md:mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyber-cyan uppercase tracking-widest text-sm mb-2 font-bold">📞 Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-glow bg-clip-text text-transparent mb-4">
            Let's Collaborate
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together. Reach out and let's discuss your ideas.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>

            {contactMethods.map((method, idx) => (
              <motion.a
                key={method.label}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ x: 10 }}
                className="card group flex items-start gap-4 p-5 border border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all duration-300 rounded-xl cursor-pointer bg-card-bg/60 backdrop-blur-sm hover:bg-card-bg/80"
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-gradient-glow flex items-center justify-center flex-shrink-0 text-2xl group-hover:shadow-lg group-hover:shadow-cyber-cyan/50 transition-all duration-300"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {method.icon}
                </motion.div>
                <div className="flex-1">
                  <p className="text-white font-bold text-lg group-hover:text-cyber-cyan transition-colors duration-300">
                    {method.label}
                  </p>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
                <motion.div
                  className="text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 5, opacity: 1 }}
                >
                  →
                </motion.div>
              </motion.a>
            ))}

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-card-bg/60 backdrop-blur-sm border border-cyber-cyan/20 rounded-lg p-4 text-center hover:border-cyber-cyan/60 transition-all duration-300">
                <p className="text-2xl font-bold bg-gradient-glow bg-clip-text text-transparent">24/7</p>
                <p className="text-gray-300 text-xs mt-1">Availability</p>
              </div>
              <div className="bg-card-bg/60 backdrop-blur-sm border border-cyber-pink/20 rounded-lg p-4 text-center hover:border-cyber-pink/60 transition-all duration-300">
                <p className="text-2xl font-bold text-cyber-pink">✓ Fast</p>
                <p className="text-gray-300 text-xs mt-1">Response Time</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 bg-gradient-to-r from-cyber-cyan/20 to-cyber-green/20 border border-cyber-cyan/40 rounded-lg flex items-center gap-3"
              >
                <span className="text-2xl">✓</span>
                <div>
                  <p className="text-cyber-cyan font-bold">Message Sent!</p>
                  <p className="text-gray-300 text-sm">I'll get back to you soon.</p>
                </div>
              </motion.div>
            )}

            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <label htmlFor="name" className="block text-white font-bold mb-3 text-sm uppercase tracking-wide">
                Your Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                variants={inputVariants}
                whileFocus="focus"
                className="w-full px-5 py-3 bg-card-bg border border-cyber-cyan/30 rounded-xl text-white placeholder-gray-500 focus:border-cyber-cyan focus:outline-none transition-all duration-300 font-medium"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-white font-bold mb-3 text-sm uppercase tracking-wide">
                Your Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                variants={inputVariants}
                whileFocus="focus"
                className="w-full px-5 py-3 bg-card-bg border border-cyber-cyan/30 rounded-xl text-white placeholder-gray-500 focus:border-cyber-cyan focus:outline-none transition-all duration-300 font-medium"
              />
            </motion.div>

            {/* Message Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <label htmlFor="message" className="block text-white font-bold mb-3 text-sm uppercase tracking-wide">
                Your Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                variants={inputVariants}
                whileFocus="focus"
                className="w-full px-5 py-3 bg-card-bg border border-cyber-cyan/30 rounded-xl text-white placeholder-gray-500 focus:border-cyber-cyan focus:outline-none transition-all duration-300 font-medium resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-gradient-glow text-black py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group mt-2"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                ✨ Send Message
              </span>
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kalsariyaarpan',
      icon: '🐙',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kalsariya-arpan-a474a8379/',
      icon: '💼',
      color: 'hover:text-cyan-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/arpan',
      icon: '🐦',
      color: 'hover:text-cyan-300'
    },
    {
      name: 'Email',
      url: 'mailto:arpankalsariya@gmail.com',
      icon: '📧',
      color: 'hover:text-red-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/arpann_01?igsh=MTJ2Zjdld3RqbGY2aA==',
      icon: '📸',
      color: 'hover:text-cyber-pink'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@arpan',
      icon: '📺',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="social" className="py-20 px-4 bg-dark-bg">
      <div className="w-full md:max-w-4xl md:mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-cyber-purple mb-12"
        >
          Connect With Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg mb-12"
        >
          Let's build something amazing together. Reach out on any of these platforms!
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-darker-bg p-4 md:p-6 rounded-lg border border-gray-700 hover:border-cyber-purple transition-all duration-300 flex flex-col items-center justify-center group card ${social.color}`}
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce">{social.icon}</div>
              <div className="text-white font-medium group-hover:text-cyber-purple transition-colors">
                {social.name}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 p-6 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 rounded-lg border border-cyber-cyan/20"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Let's Collaborate</h3>
          <p className="text-gray-300 mb-4">
            I'm always excited to work on new projects, whether it's a small website or a complex web application.
            If you have an idea or need help with your project, don't hesitate to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>🚀 Available for freelance</span>
            <span>💡 Open to collaborations</span>
            <span>⚡ Passionate about innovation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;

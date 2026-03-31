import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Web Development', icon: '💻', items: ['HTML/CSS/JS', 'React/Next.js', 'Responsive UI'] },
  { title: 'Application Design', icon: '🎨', items: ['UI/UX Strategy', 'Interactive Prototyping', 'Design Systems'] },
  { title: 'Brand Identity', icon: '✨', items: ['Logo/Graphics', 'Visual Identity', 'Product Styling'] },
  { title: 'Digital Marketing', icon: '📊', items: ['SEO', 'Social Ads', 'Analytics'] },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-cyber">
      <div className="w-full md:max-w-6xl md:mx-auto">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyber-cyan uppercase tracking-widest text-sm mb-2 font-bold">🚀 Services</p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-glow bg-clip-text text-transparent">What I Do</h2>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card group cursor-pointer relative overflow-hidden p-4 md:p-6"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-10"
                whileHover={{ opacity: 0.15 }}
              />
              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-cyan transition-all duration-300">{service.title}</h3>
                <ul className="text-gray-300 space-y-2">
                  {service.items.map((item, idx) => (
                    <motion.li 
                      key={item} 
                      className="flex items-start gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.span 
                        className="text-cyber-cyan font-bold min-w-fit"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      >
                        ▸
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

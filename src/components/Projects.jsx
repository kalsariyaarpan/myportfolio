import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-cyber">
      <div className="w-full md:max-w-6xl md:mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-center mb-3 text-cyber-cyan uppercase tracking-widest text-sm font-bold">✨ Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-glow bg-clip-text text-transparent mb-4">Featured Works</h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">High-impact UI/UX design solutions, 3D product demos, and modern web systems delivered with cinematic polish.</p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -20, scale: 1.02 }}
              className="card group overflow-hidden relative border border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all duration-300 bg-card-bg/80 backdrop-blur-sm"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              <motion.div 
                className="h-56 bg-gradient-to-br from-cyber-cyan via-cyber-purple to-cyber-pink flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.08 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 to-cyber-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div 
                  className="text-7xl drop-shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🚀
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shine effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />
              </motion.div>
              
              <div className="p-6 relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-cyan transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <motion.span 
                      key={tech} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 217, 255, 0.2)' }}
                      transition={{ delay: idx * 0.08 }}
                      className="bg-cyber-cyan/10 bg-clip-text text-transparent px-3 py-1.5 rounded-full text-xs font-semibold border border-cyber-cyan/40 backdrop-blur-sm hover:border-cyber-cyan/80 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.div 
                  className="flex gap-4 pt-4 border-t border-cyber-cyan/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-cyber-cyan hover:text-cyber-pink transition-colors font-semibold text-sm">🔗 Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyber-cyan hover:text-cyber-pink transition-colors font-semibold text-sm">⭐ GitHub</a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

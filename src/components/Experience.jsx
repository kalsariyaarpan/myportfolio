import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      period: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development of scalable web applications, mentoring junior developers, and implementing best practices.',
      achievements: ['Increased app performance by 40%', 'Led team of 5 developers', 'Implemented CI/CD pipeline'],
      icon: '🎯'
    },
    {
      period: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed responsive web applications using React and modern JavaScript frameworks.',
      achievements: ['Built 10+ client projects', 'Reduced load times by 30%', 'Introduced design system'],
      icon: '⚡'
    },
    {
      period: '2020 - 2021',
      title: 'Junior Developer',
      company: 'StartupXYZ',
      description: 'Contributed to full-stack development projects, learned agile methodologies, and collaborated with cross-functional teams.',
      achievements: ['Completed 3 major features', 'Learned 5 new technologies', 'Received Employee of the Month'],
      icon: '🚀'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-24 px-4 bg-gradient-cyber relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full md:max-w-6xl md:mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyber-cyan uppercase tracking-widest text-sm font-bold mb-3">💼 Career Path</p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-glow bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Showcasing my journey and accomplishments across different roles and companies</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Timeline connector line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-1 bg-gradient-to-b from-cyber-cyan to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              )}

              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 top-4 w-12 h-12 rounded-full bg-gradient-glow flex items-center justify-center text-xl shadow-lg shadow-cyber-cyan/50"
                whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(0, 217, 255, 0.8)' }}
                transition={{ duration: 0.3 }}
              >
                {exp.icon}
              </motion.div>

              {/* Card */}
              <motion.div
                className="ml-16 md:ml-20 bg-card-bg/60 backdrop-blur-sm border border-cyber-cyan/20 p-4 md:p-6 lg:p-8 rounded-2xl hover:border-cyber-cyan/60 group-hover:bg-card-bg/80 transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0, 217, 255, 0.2)' }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-1 group-hover:text-cyber-cyan transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                        {exp.company}
                      </h4>
                    </div>
                    <motion.span 
                      className="px-4 py-2 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan font-semibold text-sm whitespace-nowrap"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-5 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {exp.achievements.map((achievement, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 217, 255, 0.25)' }}
                        transition={{ delay: i * 0.08 }}
                        className="bg-cyber-purple/20 text-cyber-purple px-3 py-1.5 rounded-full text-sm font-medium border border-cyber-purple/30 hover:border-cyber-purple/60 transition-all duration-300 cursor-default"
                      >
                        ✓ {achievement}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[
            { value: '50+', label: 'Projects Completed', icon: '📦', color: 'cyber-cyan' },
            { value: '3+', label: 'Years Experience', icon: '⏰', color: 'cyber-purple' },
            { value: '100%', label: 'Client Satisfaction', icon: '⭐', color: 'cyber-pink' },
            { value: '∞', label: 'Always Learning', icon: '🎓', color: 'cyber-gold' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`p-6 rounded-2xl bg-card-bg/60 backdrop-blur-sm border border-${stat.color}/20 hover:border-${stat.color}/60 transition-all duration-300 text-center group relative overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <motion.div
                className="text-4xl mb-3 relative z-10"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className={`text-3xl md:text-4xl font-bold bg-gradient-glow bg-clip-text text-transparent mb-2 relative z-10`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1, type: 'spring', stiffness: 100 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-300 text-sm font-medium relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

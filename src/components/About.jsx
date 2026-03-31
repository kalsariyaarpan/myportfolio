import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ end, label, emoji }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const increment = end / 100;
    const interval = setInterval(() => {
      setCount(prev => Math.min(prev + increment, end));
    }, 30);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card-interactive p-6 text-center group cursor-default relative"
      whileHover={{ y: -10, scale: 1.05 }}
    >
      <motion.p 
        className="text-5xl mb-3 block"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        {emoji}
      </motion.p>
      <h3 className="text-4xl font-bold bg-gradient-glow bg-clip-text text-transparent mb-1">
        {Math.floor(count)}+
      </h3>
      <p className="text-gray-300 text-sm font-medium">{label}</p>
    </motion.div>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-24 px-4 bg-gradient-cyber relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full md:max-w-6xl md:mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cyber-cyan uppercase tracking-widest text-sm mb-2 font-bold">👤 About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-glow bg-clip-text text-transparent mb-4">
            Who Am I?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A passionate developer transforming ideas into digital experiences with a blend of creativity and technical expertise.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed font-light"
              variants={itemVariants}
            >
              I'm a passionate developer with a journey that started from curiosity and evolved into expertise. 
              From building my first "Hello World" to creating complex web applications, I've always been driven by the thrill of solving problems and bringing ideas to life through code.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed font-light"
              variants={itemVariants}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and pushing the boundaries of what's possible in web development.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <AnimatedCounter end={10} label="Years Experience" emoji="🚀" />
              <AnimatedCounter end={50} label="Projects Delivered" emoji="⭐" />
              <AnimatedCounter end={100} label="Satisfaction Rate" emoji="💯" />
            </motion.div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Fun Facts Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card-interactive p-6 group"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-start gap-4">
                <motion.span 
                  className="text-4xl flex-shrink-0"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🎮
                </motion.span>
                <div className="flex-1">
                  <h3 className="text-cyber-cyan font-bold text-lg mb-3 group-hover:text-cyber-pink transition-colors duration-300">
                    Fun Facts
                  </h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    {['Avid gamer & puzzle enthusiast', 'Always learning & growing', 'Coffee-powered developer', 'Travel & culture explorer'].map((fact, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-cyber-cyan">✦</span> {fact}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Interests Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="card-interactive p-6 group"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-start gap-4">
                <motion.span 
                  className="text-4xl flex-shrink-0"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  💡
                </motion.span>
                <div className="flex-1">
                  <h3 className="text-cyber-pink font-bold text-lg mb-3 group-hover:text-cyber-cyan transition-colors duration-300">
                    Interests & Passions
                  </h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    {['🤖 AI & Machine Learning', '🎨 UI/UX Design Excellence', '🚀 Emerging Technologies', '📱 Cross-Platform Development'].map((interest, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-cyber-pink">✦</span> {interest}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full mt-8 px-6 py-4 bg-gradient-glow text-black font-bold rounded-xl text-center transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Work Together 🚀</span>
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

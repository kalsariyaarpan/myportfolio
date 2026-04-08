import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '-50%', right: '-50%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '-50%', left: '-50%' }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* 404 Number */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <div className="text-9xl sm:text-[150px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-pulse">
            404
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"
          variants={itemVariants}
        />

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <FiArrowLeft /> Back to Home
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="mt-16 space-y-2 text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>Error Code: 404 | Page Not Found</p>
          <p>Let's get you back on track</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;

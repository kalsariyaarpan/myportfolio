import React from 'react';
import { motion } from 'framer-motion';

const Qualifications = () => {
  const qualifications = [
    {
      year: '2023',
      title: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      description: 'Graduated with honors, specializing in web development and AI.',
      achievements: ['Deans List', 'Best Project Award']
    },
    {
      year: '2021',
      title: 'Full Stack Development Certification',
      institution: 'Online Learning Platform',
      description: 'Comprehensive course covering modern web technologies.',
      achievements: ['Top 5% of class']
    },
    {
      year: '2020',
      title: 'High School Diploma',
      institution: 'City High School',
      description: 'Mathematics and Computer Science focus.',
      achievements: ['Valedictorian']
    }
  ];

  return (
    <section id="qualifications" className="py-20 px-4 bg-darker-bg">
      <div className="w-full md:max-w-6xl md:mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12"
        >
          Qualifications
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-cyber-purple"></div>

          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-4 md:pr-8 md:text-right' : 'pl-4 md:pl-8'}`}>
                <div className="bg-dark-bg p-4 md:p-6 rounded-lg border border-cyan-400/20 hover:border-cyan-400 transition-all duration-300">
                  <div className="text-cyan-400 font-semibold text-base md:text-lg mb-2">{qual.year}</div>
                  <h3 className="text-white font-bold text-lg md:text-xl mb-2">{qual.title}</h3>
                  <div className="text-cyber-purple mb-2">{qual.institution}</div>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">{qual.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {qual.achievements.map((achievement, i) => (
                      <span key={i} className="bg-cyan-400/20 text-cyan-400 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full border-2 md:border-4 border-dark-bg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

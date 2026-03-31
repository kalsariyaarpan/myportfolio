import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const [isViewing, setIsViewing] = useState(false);

  return (
    <section id="resume" className="py-20 px-4 bg-darker-bg">
      <div className="w-full md:max-w-4xl md:mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12"
        >
          Resume
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-dark-bg p-8 rounded-lg border border-gray-700"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate Full Stack Developer with 3+ years of experience in creating innovative web applications.
              Expertise in React, Node.js, and modern web technologies. Committed to delivering high-quality,
              scalable solutions that drive business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Key Skills</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• React & Next.js Development</li>
                <li>• Node.js & Express APIs</li>
                <li>• Database Design (MongoDB, PostgreSQL)</li>
                <li>• Cloud Platforms (AWS, Vercel)</li>
                <li>• UI/UX Design & Prototyping</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-cyber-purple mb-4">Certifications</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• AWS Certified Developer</li>
                <li>• React Developer Certification</li>
                <li>• Full Stack Web Development</li>
                <li>• Agile Scrum Master</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsViewing(!isViewing)}
              className="bg-cyan-400 text-black px-6 md:px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
            >
              {isViewing ? 'Hide Resume' : 'View Resume'}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="border-2 border-cyan-400 text-cyan-400 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 text-center"
            >
              Download PDF
            </motion.a>
          </div>

          {isViewing && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <div className="bg-gray-800 p-4 rounded-lg text-left">
                <p className="text-gray-300 mb-4">
                  Resume content would be displayed here. In a real implementation, you could embed a PDF viewer
                  or display the resume content directly.
                </p>
                <div className="text-center text-gray-500">
                  [Resume Preview Placeholder]
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

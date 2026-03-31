import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Sahil Singh', role: 'CEO, Pixley', text: 'Arpan delivers premium experiences with top notch attention to details and performance.' },
  { name: 'Aisha Khan', role: 'Product Lead', text: 'The UI/UX is futuristic and the product delivered on time with amazing quality.' },
  { name: 'Jason Wong', role: 'Founder, Webspire', text: 'Highly recommend for enterprise-grade web solutions with cinematic polish.' },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-4 bg-dark-bg">
    <div className="w-full md:max-w-6xl md:mx-auto text-center mb-12">
      <p className="text-cyber-gold uppercase tracking-widest text-sm mb-2">Testimonials</p>
      <h2 className="text-4xl font-bold text-white">Our Client Feedback</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((item, idx) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.13 }}
          className="card border border-cyber-cyan/20 rounded-2xl p-4 md:p-6"
        >
          <p className="text-gray-300 mb-5 italic">"{item.text}"</p>
          <p className="text-white font-semibold">{item.name}</p>
          <p className="text-gray-400 text-sm">{item.role}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;

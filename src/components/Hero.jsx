import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

// const MAIN_TEXT = 'Creative Designer & Developer';
const MAIN_TEXT = 'Creative Designer & Developer';
const ROLES = [
  'Web Developer',
  'Brand Strategist',
  'Creative Director',
  'AWS Services'
];


  

const Hero = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [typed, setTyped] = useState('');
  const [typingIdx, setTypingIdx] = useState(0);
  const controls = useAnimation();
  const ctaRef = useRef(null);



  // Typing effect for subtitle
  useEffect(() => {
    if (typingIdx < MAIN_TEXT.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => prev + MAIN_TEXT[typingIdx]);
        setTypingIdx((idx) => idx + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [typingIdx]);





//   useEffect(() => {
//   let timeout;

//   const currentRole = ROLES[roleIndex];

//   if (!isDeleting) {
//     if (roleText.length < currentRole.length) {
//       timeout = setTimeout(() => {
//         setRoleText(currentRole.slice(0, roleText.length + 1));
//       }, 80);
//     } else {
//       timeout = setTimeout(() => setIsDeleting(true), 1500);
//     }
//   } else {
//     if (roleText.length > 0) {
//       timeout = setTimeout(() => {
//         setRoleText(currentRole.slice(0, roleText.length - 1));
//       }, 40);
//     } else {
//       setIsDeleting(false);
//       setRoleIndex((prev) => (prev + 1) % ROLES.length);
//     }
//   }

//   return () => clearTimeout(timeout);
// }, [roleText, isDeleting, roleIndex]);



  // Magnetic button effect
  useEffect(() => {
    const btn = ctaRef.current;
    if (!btn) return;
    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.07)`;
    };
    const handleMouseLeave = () => {
      btn.style.transform = '';
    };
    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ctaRef]);

  const handleNameClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount >= 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-cyber">
      {/* Animated mesh + grid background overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_20%_top_60%,rgba(0,217,255,0.18),transparent_60%),radial-gradient(circle_at_right_80%_bottom_40%,rgba(247,37,133,0.13),transparent_60%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,217,255,0.08),transparent_60%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grid-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#00d9ff" stopOpacity="0.2" />
              <stop offset="1" stopColor="#9d4edd" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <g>
            {[...Array(30)].map((_, i) => (
              <line key={i} x1={i * 48} y1="0" x2={i * 48} y2="800" stroke="url(#grid-gradient)" strokeWidth="1" />
            ))}
            {[...Array(17)].map((_, i) => (
              <line key={i} x1="0" y1={i * 48} x2="1440" y2={i * 48} stroke="url(#grid-gradient)" strokeWidth="1" />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 w-full md:max-w-6xl md:mx-auto px-4 md:px-6 py-16 md:py-24 grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
        {/* Left: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="text-cyber-cyan uppercase tracking-widest text-sm mb-4 font-bold drop-shadow-glow">✨ Hi there! I'm</p>
          <motion.h1
            onClick={handleNameClick}
            whileHover={{ scale: 1.07, rotate: -2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-glow bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-glow cursor-pointer select-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Arpan
          </motion.h1>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink bg-clip-text text-transparent mt-2 mb-6 drop-shadow-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
          <span className="inline-block font-bold tracking-wide">
  {typed}
  <span className="opacity-60 animate-blink">|</span>
</span>
          
          
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl mt-6 mb-8 leading-relaxed font-light drop-shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            I build cinematic, immersive product experiences for web. A designer-developer hybrid bringing premium storytelling + high-impact UI.
          </motion.p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-4">
            <motion.a
              ref={ctaRef}
              href="#projects"
              className="px-8 sm:px-10 py-3 bg-gradient-glow text-black font-bold rounded-lg shadow-glow-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">View Works</span>
              <span className="absolute inset-0 rounded-lg bg-cyber-cyan/20 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ripple" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="px-8 sm:px-10 py-3 border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg hover:bg-cyber-cyan/10 hover:shadow-glow-cyan transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume
            </motion.a>
          </div>

          <motion.div
            className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18 }
              }
            }}
          >
            <motion.div
              className="bg-card-bg border border-cyber-cyan/30 p-4 rounded-lg backdrop-blur-sm hover:border-cyber-cyan/60 transition-all duration-300 shadow-glow-cyan/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-4xl font-bold bg-gradient-glow bg-clip-text text-transparent">10+</p>
              <p className="text-gray-300 mt-1">Years Experience</p>
            </motion.div>
            <motion.div
              className="bg-card-bg border border-cyber-pink/30 p-4 rounded-lg backdrop-blur-sm hover:border-cyber-pink/60 transition-all duration-300 shadow-glow-pink/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-4xl font-bold bg-gradient-glow bg-clip-text text-transparent">50+</p>
              <p className="text-gray-300 mt-1">Projects Delivered</p>
            </motion.div>
          </motion.div>
        </motion.div>


    {/* Right: Cinematic Rectangular Profile Card */}
<motion.div
  initial={{ opacity: 0, x: 80, scale: 0.95 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="flex justify-center items-center"
>
  <div className="relative group">

    {/* 🔥 Glow Background Layer */}
    <motion.div
      className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink blur-xl opacity-40 group-hover:opacity-80 transition duration-500"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />

    {/* 🧊 Glass Card */}
    <motion.div
      className="relative w-full max-w-[400px] md:w-[380px] h-[560px] rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
      whileHover={{ scale: 1.04, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 120 }}
    >

      {/* 🌌 Image Section */}
      <div className="relative w-full h-[85%] overflow-hidden">
        
        {/* Image */}
        <motion.img
          src="portfolio.png"
          alt="Profile"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Floating Tag */}
        <motion.div
          className="absolute top-4 left-4 px-4 py-1 text-xs font-bold bg-cyber-cyan/20 border border-cyber-cyan/40 backdrop-blur-md rounded-full text-cyber-cyan"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Available for Work
        </motion.div>
      </div>

      {/* 📄 Info Section */}
      <div className="p-3 space-y-3">

        <h2 className="text-2xl font-bold bg-gradient-glow bg-clip-text text-transparent">
          Arpan Kalsariya
        </h2>

        <p className="text-sm text-gray-300">
          UI/UX Designer & Full Stack Developer
        </p>

        {/*
         <div className="flex items-center justify-between mt-4">

          <span className="text-xs px-3 py-1 rounded-full bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/40">
            📍 India
          </span>

          
          <span className="text-xs px-3 py-1 rounded-full bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/40">
            🚀 Open to Work
          </span>

        </div> 
        
        <div className="flex gap-3 mt-5">

          <motion.button
            className="flex-1 py-2 rounded-lg bg-gradient-glow text-black font-semibold"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Hire Me
          </motion.button>

          <motion.button
            className="flex-1 py-2 rounded-lg border border-cyber-cyan text-cyber-cyan"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.button>

        </div>

            */}
        </div>


      {/* ✨ Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
        <div className="absolute -top-20 left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-shine" />
      </div>

    </motion.div>
  </div>
</motion.div>
      </div>

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div className="bg-card-bg p-8 rounded-2xl border border-cyber-cyan shadow-glow-lg text-center"
            initial={{ y: -50, scale: 0.8 }} animate={{ y:0, scale: 1 }} transition={{ duration: 0.4 }}>
            <div className="text-6xl mb-3 animate-bounce">✨</div>
            <h2 className="text-3xl bg-gradient-glow bg-clip-text text-transparent font-bold">Easter Egg Unlocked</h2>
            <p className="text-gray-300 mt-2">Keep exploring to discover brand new experiences.</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;

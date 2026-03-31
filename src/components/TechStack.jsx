import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "./skills.jsx";

const TechStack = () => {
  const allSkills = Object.values(skills).flat();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      id="techstack"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden py-20 px-4"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 blur-[120px] md:blur-[150px] rounded-full" />

      {/* 🚀 HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16 z-10"
      >
        <p className="text-xs md:text-sm tracking-widest text-cyan-400 uppercase mb-2 md:mb-3 animate-pulse">
          ⚡ My Expertise
        </p>

        <h2 className="text-3xl md:text-6xl font-extrabold text-white">
          Tech Stack
        </h2>

        <div className="w-16 md:w-24 h-1 bg-cyan-400 mx-auto mt-3 md:mt-4 rounded-full" />
      </motion.div>

      {/* 🌌 ORBIT AREA */}
      <div className="relative flex items-center justify-center w-full h-[400px] md:h-[600px]">

        {/* 🧠 CENTER CORE */}
        <motion.div
          className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white font-bold text-sm md:text-lg border border-white/20 shadow-[0_0_40px_rgba(0,255,255,0.2)] z-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ARPAN
        </motion.div>

        {/* 🔄 ORBITING SKILLS */}
        {allSkills.map((skill, i) => {
          const angle = (i / allSkills.length) * 2 * Math.PI;

          // ✅ Responsive radius
          const baseRadius = isMobile ? 90 : 180;
          const dynamicRadius = baseRadius + (i % 3) * (isMobile ? 30 : 60);

          return (
            <motion.div
              key={skill.name + i}
              className="absolute flex flex-col items-center cursor-pointer group"
              animate={{
                x: Math.cos(angle) * dynamicRadius,
                y: Math.sin(angle) * dynamicRadius,
              }}
              whileHover={{ scale: 1.3, zIndex: 20 }}
            >
              {/* Glow */}
              <div className="absolute w-10 h-10 md:w-16 md:h-16 bg-cyan-400/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition" />

              {/* Icon */}
              <motion.div
                className="text-2xl md:text-4xl relative z-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 25 + i,
                  ease: "linear",
                }}
                whileHover={{
                  scale: 1.2,
                  filter: "drop-shadow(0 0 25px currentColor)",
                }}
              >
                {skill.icon}
              </motion.div>

              {/* Name */}
              <span className="text-[9px] md:text-xs text-gray-400 mt-1 md:mt-2 group-hover:text-cyan-400 transition">
                {skill.name}
              </span>
            </motion.div>
          );
        })}

        {/* 🌀 ROTATING RINGS */}
        <motion.div
          className="absolute w-[200px] md:w-[500px] h-[200px] md:h-[500px] border border-cyan-400/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        />

        <motion.div
          className="absolute w-[140px] md:w-[350px] h-[140px] md:h-[350px] border border-purple-400/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />
      </div>
    </section>
  );
};

export default TechStack;
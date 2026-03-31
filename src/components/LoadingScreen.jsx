import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ progress }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />

      {/* Welcome Text */}
      <motion.h1
        className="text-white text-5xl md:text-7xl font-bold tracking-widest"
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        Welcome
      </motion.h1>

      {/* Animated Dots */}
      <motion.div
        className="flex mt-2 space-x-2"
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="w-2 h-2 bg-white rounded-full"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: [0, 1, 0],
                transition: {
                  duration: 1.2,
                  repeat: Infinity,
                  delay: dot * 0.2,
                },
              },
            }}
          />
        ))}
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-gray-400 mt-4 tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Crafting Digital Experience
      </motion.p>

      {/* Progress Bar */}
      <div className="w-[60%] h-[3px] bg-gray-800 mt-10 overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>

      {/* Percentage */}
      <motion.span
        className="text-gray-500 mt-3 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {Math.floor(progress)}%
      </motion.span>

      {/* Bottom Branding */}
      <motion.div
        className="absolute bottom-10 text-gray-600 text-xs tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        PORTFOLIO LOADING
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
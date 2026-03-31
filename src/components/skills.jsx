import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub
} from "react-icons/fa";
  
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql,
  SiExpress, SiFirebase, SiPostman, SiFigma,
  SiTypescript, SiRedux, SiLaravel, SiPhp
} from "react-icons/si";


export const skills = {
  frontend: [
    { name: "React", icon: <FaReact color="#61DBFB" />, level: 90 },
    { name: "Next.js", icon: <SiNextdotjs color="#ffffff" />, level: 85 },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" />, level: 90 },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, level: 92 },
    { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" />, level: 88 },
    { name: "Redux", icon: <SiRedux color="#764ABC" />, level: 80 },
  ],

  backend: [
    { name: "Node.js", icon: <FaNodeJs color="#68A063" />, level: 85 },
    { name: "Express.js", icon: <SiExpress color="#ffffff" />, level: 82 },
    { name: "Laravel", icon: <SiLaravel color="#FF2D20" />, level: 78 },
    { name: "PHP", icon: <SiPhp color="#8892BF" />, level: 80 },
  ],

  languages: [
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, level: 92 },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, level: 75 },
    { name: "PHP", icon: <SiPhp color="#8892BF" />, level: 80 },
  ],

  tools: [
    { name: "Git", icon: <FaGitAlt color="#F05032" />, level: 90 },
    { name: "GitHub", icon: <FaGithub color="#ffffff" />, level: 92 },
    { name: "Postman", icon: <SiPostman color="#FF6C37" />, level: 85 },
    { name: "Figma", icon: <SiFigma color="#F24E1E" />, level: 70 },
  ],

  others: [
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" />, level: 85 },
    { name: "MySQL", icon: <SiMysql color="#00758F" />, level: 80 },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" />, level: 78 },
  ],

};
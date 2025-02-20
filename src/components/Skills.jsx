import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "../components/ui";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss, SiBootstrap, SiNextdotjs, SiNetlify, SiRender, SiVercel, SiC, SiPython } from "react-icons/si";
import { DiJava } from "react-icons/di";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const skillsData = [
    {
      category: "Scripting Language",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "NextJS", icon: <SiNextdotjs className="text-black bg-white rounded-lg" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
      ],
    },
    {
      category: "Version Controls",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-black bg-white rounded-lg" /> },
      ],
    },
    {
      category: "Programming Language",
      skills: [
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "Python", icon: <SiPython className="text-blue-700" /> },
        { name: "Java", icon: <DiJava className="text-red-600" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      ],
    },
    {
      category: "Hosting Platform",
      skills: [
        { name: "Netlify", icon: <SiNetlify className="text-blue-500" /> },
        { name: "Render", icon: <SiRender className="text-purple-500" /> },
        { name: "GitHub Pages", icon: <FaGithub className="text-black bg-white rounded-lg" /> },
        { name: "Vercel", icon: <SiVercel className="text-black" /> },
      ],
    },
  ];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="section"
      id="skills"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-[55px] font-bold leading-[normal] lg:text-[70px] text-center mb-8">
          My <span className="text-accent">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-4 shadow-lg hover:shadow-2xl transition-shadow rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-center">{skillCategory.category}</h3>
                <CardContent className="grid grid-cols-2 gap-4 place-items-center">
                  {skillCategory.skills.map((skill, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="text-4xl">{skill.icon}</div>
                      <p className="text-sm mt-2">{skill.name}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

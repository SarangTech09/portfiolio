import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../varients';
// Importing images
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import Img4 from '../assets/img4.png';
import Img5 from '../assets/img5.png';

const projectData = [
  { img: Img1, title: 'MoodFlix', link: 'https://moodflixentertainment.netlify.app/' },
  { img: Img2, title: 'PassOP', link: 'https://password-manager-rho-three.vercel.app/' },
  { img: Img3, title: 'QuizMe', link: 'https://sarangtech09.github.io/Quiz_Buddy/' },
  { img: Img4, title: 'To-do List', link: 'https://sarangtech09.github.io/Simple_to-do-list/' },
  { img: Img5, title: 'Resume Builder', link: 'https://sarangtech09.github.io/Resume_builder/' },
];

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each card animation
    },
  },
};

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container mx-auto">
      <div className="flex flex-col items-start text-left mb-10">
  <h2 className="text-[55px] font-bold leading-[normal] lg:text-[70px]">
    Proj<span className='text-accent'>ects</span> 
  </h2>
  <p className="max-w-sm mt-5 text-lg text-gray-300">
    Following projects showcase my skills and experience through real-world examples of my work. 
    Each project is briefly described with links to code repositories and live demos.
  </p>
</div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.2 * index)} // Delayed fade-in effect
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={project.img} alt={project.title} />
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 sm:group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="text-3xl sm:text-2xl text-white">{project.title}</span>
              </div>
              <div className="absolute -bottom-full left-12 mb-3 group-hover:bottom-20 transition-all duration-500 z-50">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-black hover:text-white transition-all duration-300 font-semibold"
                >
                  Live
                </a>
              </div>
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

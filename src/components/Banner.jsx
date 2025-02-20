import React from 'react';
import Image from "../assets/picture.jpeg";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../varients';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-10'>
          {/* Left Content */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[normal] lg:text-[70px]'
            >
              Hi, I'm Sarang Tadaskar
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'Web Designer', 2000,
                  'Frontend Developer', 2000,
                  'Backend Developer', 2000
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div> 

            {/* Social Links */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-4 mt-2 max-w-max mx-auto mb-6 lg:mx-3'
            >
              <a href="https://github.com/SarangTech09" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-full border-2 border-accent flex justify-center items-center text-accent hover:bg-accent hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:translate-y-[-8px]'>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sarang-tadaskar-ba9a64251/" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-full border-2 border-accent flex justify-center items-center text-accent hover:bg-accent hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:translate-y-[-8px]'>
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-full border-2 border-accent flex justify-center items-center text-accent hover:bg-accent hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:translate-y-[-8px]'>
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-full border-2 border-accent flex justify-center items-center text-accent hover:bg-accent hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:translate-y-[-8px]'>
                <FaInstagram />
              </a>            
            </motion.div>

             {/* Download CV Button */}
             <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-6 items-center mb-7 mx-auto lg:mx-4 '
            >
             <a href="https://drive.google.com/file/d/1H_uEvq9xQgup7xoYPWsKFxTOlXiKG98d/view?usp=sharing">
             <motion.button 
               initial={{ scale: 1 }}
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.2 }}
              className='py-3 px-4 font-secondary font-bold cursor-pointer  bg-white text-black rounded-lg shadow-md hover:bg-black hover:text-white ease-in duration-500'>
                Download CV
              </motion.button>
             </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img className='rounded-full shadow-2xl mb-7 hover:scale-105 border-4 border-accent transition-transform duration-300' loading='lazy' height={400} width={400} src={Image} alt="Profile" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

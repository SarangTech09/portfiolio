import React from 'react'
import Image from '../assets/picture.jpeg'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'
import { Link } from 'react-scroll'
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <section className='section text-white py-20' id='about' ref={ref}>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center'>
        {/* Image Section with motion animation */}
        <motion.div 
          className='flex-1 flex justify-center mb-8 lg:mb-0'
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          // initial={{ opacity: 0, y: -80 }}
          // animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
          // transition={{ duration: 1.2 }}
        >
          <img className='rounded-full shadow-2xl border-4 border-accent mb-7 hover:scale-105 transition-transform duration-300 ' height={400} width={400} src={Image} alt="Profile" />
        </motion.div>

        {/* Info Section */}
        <motion.div 
         variants={fadeIn('left', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
          className='flex-1 text-center lg:text-left'
          // initial={{ opacity: 0, x: 80 }}
          // animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          // transition={{ duration: 1.2 }}
        >
          <h2 className='text-[55px] font-bold leading-[normal] lg:text-[70px] text-white mb-4'>About <span className='text-accent'>Me</span></h2>
          <h3 className='text-xl text-white mb-6'>I'm a certified Full Stack Web Developer from Almabetter</h3>
          <p className='text-lg text-gray-300 mb-8'>
          I'm a Full-Stack developer with experience in JavaScript, React, and Node.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. I ensure intuitive and responsive user interfaces. Let's work together to bring your ideas to life!
          </p>
          <p className='text-lg text-gray-300 mb-8'>
          I'm always interested in expanding my knowledge and staying up-to-date with the latest technologies. I'm always open to new opportunities and I'm always seeking ways to improve my skills.
          </p>
          {/* Button with Hover Effect */}
          <motion.div 
            className='flex justify-center'
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
           <Link to="contact"  smooth={true}
            duration={1000}>
            <button className='btn btn-sm py-3 px-6 font-secondary font-bold cursor-pointer  bg-white text-black rounded-lg shadow-md hover:bg-black hover:text-white ease-in duration-500'>
              Let's Talk
            </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

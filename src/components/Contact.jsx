import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../varients';

const Contact = () => {
  return (
    <section className='section' id='contact'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-20'>

          {/* Right Content - Heading */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }} // Removed "once: true" so it animates every time
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h2 className='text-[40px] md:text-[50px] lg:text-[70px] text-white leading-none mb-6 md:mb-10'>
                Let's work <br /> <span className='text-accent'>Together!</span> 
              </h2>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }} // Ensures animation runs every time
            className='flex-1 border rounded-2xl flex flex-col gap-y-5 pb-10 md:pb-20 p-5 md:p-6 items-start w-full'
          >
            <h4 className='text-lg md:text-2xl uppercase self-center text-zinc-300 font-medium tracking-wide text-center lg:text-left'>
                Get in touch
            </h4>
            <input 
              className='bg-transparent border-b py-2 outline-none w-full placeholder:text-zinc-400 focus:border-accent transition-all mb-5 md:mb-6' 
              type="text" 
              placeholder='Your Name' 
            />
            <input 
              className='bg-transparent border-b py-2 outline-none w-full placeholder:text-zinc-400 focus:border-accent transition-all mb-5 md:mb-6' 
              type="text" 
              placeholder='Your Email' 
            />
            <textarea 
              className='bg-transparent border-b h-24 md:h-36 outline-none resize-none w-full placeholder:text-zinc-400 focus:border-accent transition-all mb-6 md:mb-8' 
              placeholder='Your Message'
            ></textarea>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='btn btn-sm py-3 px-6 font-secondary font-bold cursor-pointer bg-white text-black rounded-lg shadow-md hover:bg-black hover:text-white ease-in duration-500 self-center'
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

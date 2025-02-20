import React from 'react';
import { Link } from 'react-scroll';
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header id='home' className='py-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            {/* <img width={50} height={70} src={Logo} alt="Logo" className='w-12 h-12' /> */}
            <h3 className='text-2xl font-bold'>Sarang | <span className='text-accent'>Portfolio</span> </h3>
          </div>
          <Link 
            to="contact"
            smooth={true}
            duration={1000}
            className='btn btn-sm py-4 px-4 font-secondary font-bold cursor-pointer  bg-white text-black rounded-lg shadow-md hover:bg-black hover:text-white ease-in duration-500'>
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

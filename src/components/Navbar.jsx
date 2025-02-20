import React, { useState } from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsCodeSlash, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  const handleSetActive = (to) => {
    setActive(to);
    if (timeoutId) clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => setActive(''), 5000);
    setTimeoutId(newTimeoutId);
  };

  return (
    <nav className="fixed bottom-4 lg:bottom-8 w-full z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/30 h-[80px] backdrop-blur-xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl shadow-lg">
          {[
            { to: 'home', icon: <BiHomeAlt /> },
            { to: 'about', icon: <BiUser /> },
            { to: 'skills', icon: <BsClipboardData /> },
            { to: 'projects', icon: <BsCodeSlash /> },
            { to: 'contact', icon: <BsChatSquareText /> },
          ].map(({ to, icon }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={1000}
              onClick={() => handleSetActive(to)}
              className={`flex cursor-pointer w-[60px] h-[60px] justify-center items-center rounded-full transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-110 ${
                active === to ? 'bg-white text-black' : 'bg-transparent text-white'
              }`}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

'use client';
import { useState, useEffect } from 'react';
import { FaAnglesUp, FaAngleDown } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const ScrollNavigationButtons = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const aboutButton = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', aboutButton);
  }, []);

  return (
    <div className={`${isFixed ? 'fixed' : 'hidden'} bottom-4 right-4 flex flex-col gap-2 z-[20]`}>
      <a
        href='tel:9057304227'
        aria-label='Phone | (905) 730-4227 | Web Development Hamilton'
        title='Phone | (905) 730-4227 | Web Development Hamilton'
        className={`bg-[#C0D6FF] rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:shadow-blue-400 hover:scale-105 ease-in duration-300`}
      >
        <FaPhone size={25} />
      </a>
      <a
        href='mailto:webdevelopmenthamilton@gmail.com'
        aria-label='Email | webdevelopmenthamilton@gmail.com | Web Development Hamilton'
        title='Email | webdevelopmenthamilton@gmail.com | Web Development Hamilton'
        className={`bg-[#C0D6FF] rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:shadow-blue-400 hover:scale-105 ease-in duration-300`}
      >
        <AiOutlineMail size={25} />
      </a>
      <a
        href='#'
        title={`Navigate back to Top | Web Development Hamilton`}
        aria-label={`Navigate back to Top | Web Development Hamilton`}
        className={`bg-[#C0D6FF] rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:shadow-blue-400 hover:scale-105 ease-in duration-300]`}
      >
        <FaAnglesUp size={25} />
      </a>
    </div>
  );
};

export default ScrollNavigationButtons;

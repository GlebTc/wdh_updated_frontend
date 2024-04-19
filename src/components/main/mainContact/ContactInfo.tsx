import { AiOutlineMail } from 'react-icons/ai';
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';

const ContactInfo = () => {
  const componentName = 'CONTACT_INFO';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER floating_container p-8 w-full flex flex-col justify-start items-center gap-2`}
    >
      <h2 className='my-5 border-b-2 border-cyan-900'>Direct Contact</h2>
      <div
        className={`${componentName}_MESSAGE_CONTAINER px-4 flex flex-col items-center gap-4`}
      >
        <h3 className='text-wrap text-center'>
          We will respond within 24 hours
        </h3>
        <a
          href='tel:9057304227'
          aria-label='Phone | (905) 730-4227 | Web Development Hamilton'
          title='Phone | (905) 730-4227 | Web Development Hamilton'
          className='text_links sm:text-base'
        >
          (905) 730-4227
        </a>
        <a
          href='mailto:webdevelopmenthamilton@gmail.com'
          aria-label='Email | webdevelopmenthamilton@gmail.com | Web Development Hamilton'
          title='Email | webdevelopmenthamilton@gmail.com | Web Development Hamilton'
          className='text_links sm:text-base'
        >
          webdevelopmenthamilton@gmail.com
        </a>
      </div>
      <h2 className='my-5 border-b-2 border-cyan-900'>Social Media</h2>
      <ul
        className={`${componentName}_SOCIAL_MEDIA_CONTAINER w-full flex items-center justify-around flex-wrap gap-4 px-8`}
      >
        <li className='bg-[#C0D6FF] rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:shadow-blue-400 hover:scale-105 ease-in duration-300'>
          <a
            href='mailto:webdevelopmenthamilton@gmail.com'
            aria-label='Email | webdevelopmenthamilton@gmail.com | Web Development Hamilton'
            title='Email | webdevelopmenthamilton@gmail.com | Web Development Hamilton'
          >
            <AiOutlineMail size={30} />
          </a>
        </li>
        <li className='bg-[#C0D6FF] rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:shadow-blue-400 hover:scale-105 ease-in duration-300'>
          <a
            href='tel:9057304227'
            aria-label='Phone | (905) 730-4227 | Web Development Hamilton'
            title='Phone | (905) 730-4227 | Web Development Hamilton'
          >
            <FaPhone size={30} />
          </a>
        </li>
        <li className='bg-[#C0D6FF] rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:shadow-blue-400 hover:scale-105 ease-in duration-300'>
          <a
            href='https://wa.me/19057304227'
            aria-label='Whats App | Web Development Hamilton'
            title='Whats App | Web Development Hamilton'
          >
            <FaWhatsapp size={30} />
          </a>
        </li>
        <li className='bg-[#C0D6FF] rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:shadow-blue-400 hover:scale-105 ease-in duration-300 hidden lg:block'>
          <a
            href='https://www.facebook.com/people/Web-Development-Hamilton/61551493012736/'
            aria-label='Facebook | Web Development Hamilton'
            title='Facebook | Web Development Hamilton'
          >
            <FaFacebook size={30} />
          </a>
        </li>

        <li className='bg-[#C0D6FF] rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:shadow-blue-400 hover:scale-105 ease-in duration-300 hidden lg:block'>
          <a
            href='https://www.linkedin.com/company/webdevelopmenthamilton/'
            aria-label='Linked In | Web Development Hamilton'
            title='Linked In | Web Development Hamilton'
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className='bg-[#C0D6FF] rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:shadow-blue-400 hover:scale-105 ease-in duration-300 hidden lg:block'>
          <a
            href='https://github.com/GlebTc'
            aria-label='Git Hub | Web Development Hamilton'
            title='Git Hub | Web Development Hamilton'
          >
            <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;

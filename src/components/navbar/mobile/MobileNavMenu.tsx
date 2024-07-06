'use client';
import { AiOutlineClose } from 'react-icons/ai';
import menuItems from '@/src/utils/constants/menuItems.json';
import { usePathname } from 'next/navigation';
import logo from '@/public/assets/wdh_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';

const MobileNavMenu = ({
  mobileMenu,
  handleMobileMenu,
}: {
  mobileMenu: boolean;
  handleMobileMenu: () => void;
}) => {
  const componentName = 'MOBILE_NAV_MENU';
  const pathname = usePathname();

  return (
    <>
      <div
        className={
          mobileMenu
            ? 'MOBILE_MENU_OVERLAY sm:hidden fixed left-0 top-0 w-full h-screen bg-gray-300/90 duration-300 z-[100]'
            : 'MOBILE_MENU_OVERLAY hidden'
        }
      ></div>
      <div
        className={
          mobileMenu
            ? 'MOBILE_MENU sm:hidden fixed right-0 top-0 w-[100%] sm:w-[50%] md:w-[45%] h-full bg-blue-300/90 p-3 ease-in-out duration-500 z-[100]'
            : 'MOBILE_MENU sm:hidden fixed opacity-0 right-[-100%] top-0 w-[100%] sm:w-[50%] md:w-[45%] h-full bg-blue-300/90 p-3 ease-in duration-500 z-[100]'
        }
      >
        <div
          className={`${componentName}_LOGO_AND_CLOSE_BUTTON_CONTAINER flex justify-between items-center h-fit w-full p-4`}
        >
          <a
            href='/'
            className='max-w-[64px] md:max-w-[120px] relative'
            aria-label='Home Link | Web Development Hamilton'
            title='Home Link | Web Development Hamilton'
          >
            <Image
              src={logo}
              alt='Logo | Web Development Hamilton'
              className='cursor-pointer rounded-lg object-contain floating_container'
            />
          </a>

          <AiOutlineClose
            size={60}
            className='md:hidden floating_container hover:shadow-xl hover:shadow-blue-400 ease-in duration-300 cursor-pointer bg-[#C0D6FF] p-2'
            title='Menu | Web Development Hamilton'
            aria-label='Menu | Web Development Hamilton'
            onClick={handleMobileMenu}
          />
        </div>
        <div className='MOBILE_MENU_ITEMS_CONTAINER p-5 uppercase'>
          <ul className='flex flex-col gap-4 justify-around items-end'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`floating_container text-sm font-bold bg-[#C0D6FF] hover:shadow-blue-500 ease-in duration-300 w-[70%]`}
                onClick={handleMobileMenu}
              >
                <Link
                  href={item.item_href}
                  aria-label={`${item.item_title} | MUSIC DJ MAGS | Toronto | Ontario | CANADA`}
                  className={`block px-4 py-2 rounded-lg cursor-pointer`}
                >
                  {item.item_title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul
          className={`${componentName}_SOCIAL_MEDIA_CONTAINER w-full flex items-center justify-end flex-wrap gap-4 px-8 border-t-2 border-cyan-900 pt-4`}
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
        </ul>
      </div>
    </>
  );
};

export default MobileNavMenu;

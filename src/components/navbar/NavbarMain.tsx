'use client';
import { useState } from 'react';
import DesktopNavMenu from '@/src/components/navbar/desktop/DesktopNavMenu';
import desktop_nav_logo from '@/public/assets/wdh_logo.png';
import Image from 'next/image';
import { IoMdMenu } from 'react-icons/io';
import MobileNavMenu from './mobile/MobileNavMenu';

const NavbarMain = () => {
  const componentName = 'NAVBAR_MAIN';
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col h-[fit] floating_container`}
    >
      <div
        className={`${componentName}_LOGO_AND_MENU_ITEMS_CONTAINER flex justify-between items-center h-full w-full p-4`}
      >
        <a
          href='https://www.webdevelopmenthamilton.com'
          className='max-w-[64px] md:max-w-[120px] relative'
          aria-label='Home Link | Web Development Hamilton'
          title='Home Link | Web Development Hamilton'
        >
          <Image
            src={desktop_nav_logo}
            alt='Logo | Web Development Hamilton'
            className='cursor-pointer rounded-lg object-contain floating_container'
          />
        </a>

        <IoMdMenu
          size={60}
          className='sticky md:hidden floating_container hover:shadow-xl hover:shadow-blue-400 ease-in duration-300 cursor-pointer bg-[#C0D6FF] p-2'
          title='Menu | Web Development Hamilton'
          aria-label='Menu | Web Development Hamilton'
          onClick={handleMobileMenu}
        />
        <DesktopNavMenu />
      </div>
      <a
        href='https://www.webdevelopmenthamilton.com'
        className='text_links'
        aria-label='Home Link | Web Development Hamilton'
        title='Home Link | Web Development Hamilton'
      >
        www.WebDevelopmentHamilton.com
      </a>
      <MobileNavMenu
        mobileMenu={mobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
    </div>
  );
};

export default NavbarMain;

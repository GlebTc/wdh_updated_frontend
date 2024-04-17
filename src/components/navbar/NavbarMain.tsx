import DesktopNavMenu from '@/src/components/navbar/desktop/DesktopNavMenu';
import desktop_nav_logo from '@/public/assets/wdh_logo.png';
import Image from 'next/image';
import { IoMdMenu } from 'react-icons/io';

const NavbarMain = () => {
  const componentName = 'NAVBAR_MAIN';
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex flex-col h-[fit] floating_container`}>
      <div
        className={`${componentName}_LOGO_AND_MENU_ITEMS_CONTAINER flex justify-between items-center h-full w-full p-4`}
      >
        <a
          href='https://www.webdevelopmenthamilton.com'
          className='max-w-[60px] md:max-w-[120px] relative'
          aria-label='Homw Link | Web Development Hamilton'
          title='Home Link | Web Development Hamilton'
        >
          <Image
            src={desktop_nav_logo}
            alt='Logo | Web Development Hamilton'
            className='cursor-pointer rounded-lg object-contain'
          />
        </a>

        <IoMdMenu
          size={60}
          className='md:hidden floating_container hover:shadow-xl hover:shadow-blue-400 ease-in duration-300 cursor-pointer bg-[#C0D6FF] p-2'
          title='Menu'
          aria-label='Menu'
        />
        <DesktopNavMenu />
      </div>
      <a
        href='https://www.webdevelopmenthamilton.com'
        className='w-full min-h-[20px] text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold hover:text-cyan-600 duration-300'
        aria-label='Homw Link | Web Development Hamilton'
        title='Home Link | Web Development Hamilton'
      >
        www.WebDevelopmentHamilton.com
      </a>
    </div>
  );
};

export default NavbarMain;

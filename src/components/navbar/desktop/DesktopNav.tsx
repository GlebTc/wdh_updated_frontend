import DesktopNavMenu from '@/src/components/navbar/desktop/DesktopNavMenu';
import desktop_nav_logo from '@/public/assets/wdh_logo.png';
import Image from 'next/image';

const DesktopNav = () => {
  const componentName = 'DESKTOP_NAV';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col h-[fit] border-2 border-red-600`}
    >
      <div
        className={`${componentName}_LOGO_AND_MENU_ITEMS_CONTAINER flex justify-between items-center h-full w-full p-4`}
      >
        <div className='max-w-[120px] relative'>
          <Image
            src={desktop_nav_logo}
            alt='WDH Logo'
            className='cursor-pointer rounded-lg object-contain'
          />
        </div>
        <DesktopNavMenu />
      </div>
      <h1 className='w-full min-h-[20px] text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold'>www.WebDevelopmentHamilton.com</h1>
    </div>
  );
};

export default DesktopNav;

import menuItems from '@/src/utils/constants/menuItems.json';
import Link from 'next/link';

const DesktopNavMenu = () => {
  const componentName = 'DESKTOP_NAV_MENU';
  return (
    <ul className='hidden md:flex justify-end uppercase items-center text-center w-full gap-1'>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className='text-sm font-bold px-4 py-2 rounded-xl hover:shadow-xl hover:shadow-white ease-in duration-300'
        >
          <Link
            href={`${item.item_href}`}
            className='w-full cursor-pointer h-full'

          >
            <h2>{item.item_title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavMenu;

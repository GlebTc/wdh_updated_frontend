import menuItems from '@/src/utils/constants/menuItems.json';
import Link from 'next/link';

const DesktopNavMenu = () => {
  const componentName = 'DESKTOP_NAV_MENU';
  return (
    <ul
      className={`${componentName}_MAIN_CONTAINER hidden md:flex justify-end uppercase items-center text-center w-full gap-1 lg:gap-2 xl:gap-4`}
    >
      {menuItems.map((item, index) => (
        <li
          key={index}
          className='floating_container text-sm font-bold px-4 py-2 bg-[#C0D6FF] hover:shadow-blue-500 ease-in duration-300 cursor-pointer'
        >
          <Link href={`${item.item_href}`}>
            <h2>{item.item_title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavMenu;

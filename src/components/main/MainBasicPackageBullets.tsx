import { FiArrowRightCircle } from 'react-icons/fi';
import packages from '@/src/utils/constants/packages.json';

const MainBasicPackageBullets = () => {
  const componentName = 'MAIN_BASIC_PACKAGE_BULLETS';
  return (
    <ul
      className={`${componentName} floating_container grid lg:grid-cols-2 gap-2 p-2`}
    >
      <li className='flex items-center gap-2'>
        <FiArrowRightCircle />
        <p className='text-sm sm:text-base md:text-lg lg:text-2xl'>
        Starting at just <strong><s>$300</s> $200</strong> plus tax
        </p>
      </li>
      {packages[0].services.map((service, index) => (
        <li
          key={index}
          className='flex items-center gap-2'
        >
          <FiArrowRightCircle />
          <p
            dangerouslySetInnerHTML={{ __html: service.name }}
            className='text-sm sm:text-base md:text-lg lg:text-2xl'
          ></p>
        </li>
      ))}
    </ul>
  );
};

export default MainBasicPackageBullets;

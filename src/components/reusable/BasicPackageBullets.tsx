import { FiArrowRightCircle } from 'react-icons/fi';
import packages from '@/src/utils/constants/packages.json';

const BasicPackagesBullets = () => {
  const componentName = 'BASIC_PACKAGE_BULLETS';
  return (
    <ul className={`${componentName} primary_container grid lg:grid-cols-2 gap-2 p-2`}>
      {packages.basic_services.map((service, index) => (
        <li
          key={index}
          className='flex items-center gap-2'
        >
          <FiArrowRightCircle />
          <p dangerouslySetInnerHTML={{ __html: service.name }}></p>
        </li>
      ))}
    </ul>
  );
};

export default BasicPackagesBullets;

import { FiArrowRightCircle } from 'react-icons/fi';
import packages from '@/src/utils/constants/packages.json';
import Link from 'next/link';

const PackagesContainer = (packages: any) => {
  const componentName = 'PACAKGES_CONTAINER';

  return (
    <div className={`${componentName}_MAIN_CONTAINER grid gap-8`}>
      <div
        className={`${componentName}_PACKAGES_CONTAINER grid md:grid-cols-3 gap-8`}
      >
        {packages.packages.map((specificPackage: any, index: number) => (
          <Link href="/contact" className={`floating_container flex flex-col cursor-pointer hover:shadow-blue-400 hover:scale-105 ease-in duration-300 ${specificPackage.pulsate ? "animate-pulse" : ""}`}>
            <h3 className='flex justify-center border-b-2 border-cyan-900 w-[80%] mx-auto mb-2'>{specificPackage.package_name}</h3>
            <h4 className='text-3xl font-extrabold text-cyan-900 text-center'>{specificPackage.monthly}</h4>

            <ul className='p-4'>
              {specificPackage.services.map((service: any, index: number) => (
                <li
                  key={index}
                  className='w-full flex items-center'
                >
                  <FiArrowRightCircle />
                  <p
                    dangerouslySetInnerHTML={{ __html: service.name }}
                    className='ml-2 text-base sm:text-xl md:text-sm lg:text-lg xl:text-xl text-left'
                  ></p>
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PackagesContainer;

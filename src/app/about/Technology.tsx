import Image from 'next/image';
import technology from '@/public/assets/technology.webp';

const Technology = () => {
  const componentName = 'ABOUT_PAGE_TECHNOLOGY_SECTION';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex justify-between items-center flex-col md:flex-row`}
    >
      <div className={`${componentName}_IMAGE_CONTAINER relative h-80 w-60`}>
        <Image
          src={technology}
          alt='Web Development Hamilton | Technology Image'
          fill
          sizes='1'
          className='object-cover floating_container'
        />
      </div>
      <div className={`${componentName}_TEXT_CONTAINER md:max-w-[80%]`}>
        <h2 className='text-2xl font-bold my-4 border-b-2 border-cyan-900 w-[80%] md:w-[60%] mx-auto'>
          My Tech Stack
        </h2>
        <p className='md:pl-12'>
          When I first began coding, I focused heavily on the basics of the most
          popular front end technologies: HTML, CSS, and JavaScript. I have
          quickly switched to learning React JS and it wasn't long before I felt
          like I wanted to have control over the full stack. From there, I began
          learning and using Node JS and Express JS for the backend and
          PostgreSQL for the database. After building a few full stack
          applications, I discovered Next JS. While opinions may vary, I believe
          Next JS is a perfect fit for building small to medium size websites
          and applications. Majority of website I create are built using Next JS
          (frontend and backend) and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default Technology;

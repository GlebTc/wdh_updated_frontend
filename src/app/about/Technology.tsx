import Image from 'next/image';
import technology from '@/public/assets/technology.webp';

const Technology = () => {
  const componentName = 'ABOUT_PAGE_TECHNOLOGY_SECTION';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full flex justify-center items-center flex-col md:flex-row-reverse gap-4 px-4 text-center`}
    >
      <div className={`${componentName}_CONTENT_SECTION`}>
        <h2 className='text-2xl font-bold my-4 border-b-2 border-cyan-900 w-[80%] md:w-[60%] mx-auto'>
          My Tech Stack
        </h2>
        <p className='md:px-12'>
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
      <Image
        src={technology}
        alt='Portrait of Web Developer'
        width={240}
        height={360}
        className='floating_container'
      />
    </div>
  );
};

export default Technology;

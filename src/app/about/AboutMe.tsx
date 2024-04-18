import Image from 'next/image';
import portrait from '@/public/assets/portrait.webp';

const AboutMe = () => {
  const componentName = 'ABOUT_PAGE_ABOUT_ME_SECTION';
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2021;
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full flex justify-center items-center flex-col md:flex-row-reverse gap-4 px-4 text-centey mb-8 md:mb-20`}
    >
      <Image
        src={portrait}
        alt='Portrait of Web Developer'
        width={300}
        height={400}
        className='floating_container'
      />
      <div className={`${componentName}_CONTENT_SECTION`}>
        <h2 className='text-2xl font-bold my-4 border-b-2 border-cyan-900 w-[80%] md:w-[60%] mx-auto'>A Little About Me</h2>
        <p className='md:px-12'>
          Hello, my name is Gleb.  I am a software developer with a passion for creating websites and web
          applications with over {yearsOfExperience} years of experience. I have started this journey because I wanted to build a website for my own business.  It turns out that I really enjoy the process of creating websites and web applications.  For the past {yearsOfExperience} years I have embarked on a journey that started with the classic "Hello World" to building modern, responsive, and accessible website and full stack applications using the latest technologies.  Let's talk about technologies I use and why I use them.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

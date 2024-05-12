import Image from 'next/image';
import portrait from '@/public/assets/portrait.webp';

const AboutMe = () => {
  const componentName = 'ABOUT_PAGE_ABOUT_ME_SECTION';
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2021;
  return (
    <div className={`${componentName}_MAIN_CONTAINER flex justify-between items-center flex-col md:flex-row-reverse`}>
      <div
        className={`${componentName}_IMAGE_CONTAINER relative h-80 w-60`}
      >
        <Image
          src={portrait}
          alt='Web Development Hamilton | Portrait of Web Developer'
          fill
          sizes='1'
          className='object-cover floating_container'
        />
      </div>
      <div className={`${componentName}_TEXT_CONTAINER md:max-w-[80%]`}>
        <h2 className='text-2xl font-bold my-4 border-b-2 border-cyan-900 w-[80%] md:w-[60%] mx-auto'>
          A Little About Me
        </h2>
        <p className='md:pr-12'>
          Hello, my name is Gleb. I am a software developer with a passion for
          creating websites and web applications with over {yearsOfExperience}{' '}
          years of experience. I have started this journey because I wanted to
          build a website for my own business. It turns out that I really enjoy
          the process of creating websites and web applications. For the past{' '}
          {yearsOfExperience} years I have embarked on a journey that started
          with the classic "Hello World" to building modern, responsive, and
          accessible websites and full stack applications using the latest
          technologies. Let's talk about technologies I use and why I use them.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

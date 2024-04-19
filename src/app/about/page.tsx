import AboutMe from '@/src/app/about/AboutMe';
import Technology from '@/src/app/about/Technology';
import TechStackIcons from '@/src/app/about/TechStackIcons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = () => {
  
  const componentName = 'ABOUT_US_PAGE_MAIN_SECTION';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full flex justify-center items-center flex-col gap-4 pt-4 px-4 text-center max-w-[1300px] mx-auto`}
    >
      <h1>About</h1>
      <AboutMe />
      <TechStackIcons />
      <Technology />
    </div>
  );
};

export default AboutPage;

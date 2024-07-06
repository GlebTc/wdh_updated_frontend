import AboutMe from '@/src/app/about/AboutMe';
import Technology from '@/src/app/about/Technology';
import TechStackIcons from '@/src/app/about/TechStackIcons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Web Development Hamilton',
  description:
    'Learn more about Web Development Hamilton, our mission, our team, and the technologies we use to deliver top-notch web design and SEO services. Discover how we can help your business succeed online.',
  keywords: [
    'About Web Development Hamilton',
    'Our Mission',
    'Our Team',
    'Web Design Technologies',
    'SEO Services',
    'Web Development',
    'Digital Marketing Hamilton',
    'Custom Websites',
    'Professional Web Design',
    'Hamilton Ontario',
  ],
  openGraph: {
    title: 'About | Web Development Hamilton',
    description:
      'Discover more about Web Development Hamilton, including our mission, team, and the technologies we use to provide exceptional web design and SEO services.',
    url: 'https://www.webdevelopmenthamilton.com/about',
    type: 'website',
  },
  twitter: {
    title: 'About | Web Development Hamilton',
    card: 'summary_large_image',
    description:
      'Learn more about Web Development Hamilton, our mission, our team, and the technologies we use to deliver top-notch web design and SEO services.',
  },
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

import WebDesignPortfolio from '@/src/app/portfolio/WebDesignPortfolio';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Web Development Hamilton',
  description:
    'Explore the portfolio of Web Development Hamilton to see our past projects and the quality of our work in web design, development, and SEO services. Discover how we have helped businesses achieve their online goals.',
  keywords: [
    'Web Development Portfolio',
    'Web Design Portfolio',
    'SEO Portfolio',
    'Digital Marketing Portfolio',
    'Web Development Hamilton Portfolio',
    'Web Design Projects',
    'SEO Case Studies',
    'Web Development Projects',
    'Web Design Examples',
    'Hamilton Ontario Portfolio',
  ],
  openGraph: {
    title: 'Portfolio | Web Development Hamilton',
    description:
      'Explore the portfolio of Web Development Hamilton to see our past projects and the quality of our work in web design, development, and SEO services. Discover how we have helped businesses achieve their online goals.',
    url: 'https://www.webdevelopmenthamilton.com/portfolio',
    type: 'website',
  },
  twitter: {
    title: 'Portfolio | Web Development Hamilton',
    card: 'summary_large_image',
    description:
      'Explore the portfolio of Web Development Hamilton to see our past projects and the quality of our work in web design, development, and SEO services. Discover how we have helped businesses achieve their online goals.',
  },
};

const PortfolioPage = () => {
  const componentName = 'PORTFOLIO_PAGE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full flex justify-center items-center flex-col gap-4 py-10 px-4 text-center max-w-[1200px] mx-auto`}
    >
      <h1>Portfolio</h1>
      <div className={`${componentName}_WEBSITE_PORTFOLIO`}>
        <WebDesignPortfolio />
      </div>
    </div>
  );
};

export default PortfolioPage;

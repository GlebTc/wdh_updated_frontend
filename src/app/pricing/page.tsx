import PackagesContainer from './PackagesContainer';
import packages from '@/src/utils/constants/packages.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Web Development Hamilton',
  description:
    'Explore the pricing options for our web development, web design, and SEO services at Web Development Hamilton. Find the perfect package for your business needs and budget.',
  keywords: [
    'Web Development Pricing',
    'Web Design Pricing',
    'SEO Pricing',
    'Digital Marketing Pricing',
    'Web Development Hamilton Pricing',
    'Web Design Packages',
    'SEO Packages',
    'Affordable Web Design',
    'Hamilton Ontario Pricing',
    'Web Development Costs',
  ],
  openGraph: {
    title: 'Pricing | Web Development Hamilton',
    description:
      'Explore the pricing options for our web development, web design, and SEO services at Web Development Hamilton. Find the perfect package for your business needs and budget.',
    url: 'https://www.webdevelopmenthamilton.com/pricing',
    type: 'website',
  },
  twitter: {
    title: 'Pricing | Web Development Hamilton',
    card: 'summary_large_image',
    description:
      'Explore the pricing options for our web development, web design, and SEO services at Web Development Hamilton. Find the perfect package for your business needs and budget.',
  },
};

const PricingPage = () => {
  const componentName = 'PRICING_PAGE_MAIN_SECTION';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col gap-4 items-center py-4 px-4 max-w-[1400px] mx-auto`}
    >
      <h1>Pricing</h1>
      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 lg:gap-4'>
        <PackagesContainer packages={packages} />
      </div>
    </div>
  );
};

export default PricingPage;

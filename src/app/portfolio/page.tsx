import WebDesignPortfolio from '@/src/app/portfolio/WebDesignPortfolio';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
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

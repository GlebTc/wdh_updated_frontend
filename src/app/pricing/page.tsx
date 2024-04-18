import PackagesContainer from './PackagesContainer';
import packages from '@/src/utils/constants/packages.json';

const PricingPage = () => {
  const componentName = 'PRICING_PAGE_MAIN_SECTION';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col gap-4 items-center py-10 px-4 max-w-[1400px] mx-auto`}
    >
      <h1>Pricing</h1>
      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 lg:gap-4'>
        <PackagesContainer packages={packages} />
      </div>
    </div>
  );
};

export default PricingPage;

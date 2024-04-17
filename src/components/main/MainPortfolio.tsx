import portfolioItems from '@/src/utils/constants/portfolioItems.json';
import Image from 'next/image';

const Portfolio = () => {
  const componentName = 'MAIN_PAGE_PORTFOLIO_SECTION';
  const src = '/assets/portfolio_items/';
  return (
    <div
      id='portfolio'
      className={`${componentName}_MAIN_CONTAINER main_container flex flex-col justify-center items-center gap-2`}
    >
      <h1>Our Clients</h1>
      <ul className='grid md:grid-cols-2 gap-8'>
        {portfolioItems.map((item, index) => (
          <li
            key={index}
            className=' relative flex flex-col justify-center h-auto w-fit floating_container group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer transition duration-300'
          >
            <a
              href={`${item.portfolio_item_href}`}
              aria-label={`Web Development Hamilton Portfolio Item | ${item.portfolio_item_name}`}
            >
              <Image
                src={src + item.portfolio_item_img_name}
                alt={item.portfolio_item_name}
                width={600}
                height={400}
                className='rounded-md group-hover:opacity-10 transition duration-300'
              />
              <div className='hidden group-hover:flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-300'>
                <h3 className='text-white mb-4 text-center transition duration-300'>
                  {item.portfolio_item_name}
                </h3>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;

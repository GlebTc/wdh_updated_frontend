'use client';
import React, { useState } from 'react';
import portfolioItems from '@/src/utils/constants/portfolioItems.json';
import Image from 'next/image';

const WebDesignPortfolio = () => {
  const componentName = 'WEB_DESIGN_PORTFOLIO';
  const src = '/assets/portfolio_items/';
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract all unique categories from portfolioItems
  const allCategoriesArray = portfolioItems
    .map(item => item.portfolio_item_category)
    .reduce((categories, categoryArray) => {
      categoryArray.forEach(category => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
      return categories;
    }, []);

  // Filter portfolio items based on selected category
  const filteredItems = selectedCategory
    ? portfolioItems.filter(item => item.portfolio_item_category.includes(selectedCategory))
    : portfolioItems;

  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <div className={`${componentName}_CATEGORY_SELECTION_CONTAINER`}>
        <h2 className='mb-4'>Categories</h2>
        <ul className={`${componentName}_CATEGORIES_LIST_CONTAINER flex flex-wrap gap-2 justify-center mb-8`}>
          {allCategoriesArray.map((category, index) => (
            <li
              key={index}
              className={`floating_container text-sm font-bold px-4 py-2 bg-[#C0D6FF] hover:shadow-blue-500 ease-in duration-300 cursor-pointer w-fit uppercase ${selectedCategory === category ? 'bg-[#5651e5] text-white' : ''}`}
              onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={`${componentName}_PORTFOLIO_DISPLAY`}>
        {/* I had added flex and flex wrap and then each container is set to max width based on screen size */}
        <ul className={`flex flex-wrap justify-center gap-4`}>
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className='relative flex flex-col justify-center h-auto floating_container group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer transition duration-300 max-w-[80dvw] md:max-w-[45dvw] lg:max-w-[35dvw] xl:max-w-[25dvw]'
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
    </div>
  );
};

export default WebDesignPortfolio;


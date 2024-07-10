'use client';
import { useState } from 'react';
import blogPosts from '@/src/utils/constants/blogPosts.json';
import Image from 'next/image';

const BlogPortfolio = () => {
  const componentName = 'BLOG_PAGE_MAIN_SECTION';
  const src = '/assets/blog_items/';
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllItems, setShowAllItems] = useState<boolean>(true);

  // Extract all unique categories from portfolioItems
  const allCategoriesArray = blogPosts
    .map((item) => item.blog_post_category)
    .reduce((categories, categoryArray) => {
      categoryArray.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
      return categories;
    }, []);

  // Filter portfolio items based on selected category
  const filteredItems = selectedCategory
    ? blogPosts.filter((item) =>
        item.blog_post_category.includes(selectedCategory)
      )
    : blogPosts;

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    setShowAllItems(false);
  };

  const handleShowAllItems = () => {
    setSelectedCategory(null);
    setShowAllItems(true);
  };

  return (
    <div className={`${componentName}_MAIN_CONTAINER`}>
      <div className={`${componentName}_CATEGORY_SELECTION_CONTAINER`}>
        <h2 className='mb-4'>Categories</h2>
        {!showAllItems && (
          <ul
            className={`${componentName}_CATEGORIES_LIST_CONTAINER flex flex-wrap gap-2 justify-center mb-8`}
          >
            <li
              className={`floating_container text-sm font-bold px-4 py-2 bg-[#C0D6FF] hover:shadow-blue-500 ease-in duration-300 cursor-pointer w-fit uppercase ${
                showAllItems ? 'bg-[#5651e5] text-white' : ''
              }`}
              onClick={handleShowAllItems}
            >
              Show All ({blogPosts.length})
            </li>
          </ul>
        )}
        <ul
          className={`${componentName}_CATEGORIES_LIST_CONTAINER flex flex-wrap gap-2 justify-center mb-8`}
        >
          {allCategoriesArray.map((category, index) => (
            <li
              key={index}
              className={`floating_container text-sm font-bold px-4 py-2 bg-[#C0D6FF] hover:shadow-blue-500 ease-in duration-300 cursor-pointer w-fit uppercase ${
                selectedCategory === category ? 'bg-[#5651e5] text-white' : ''
              }`}
              onClick={() => handleCategorySelection(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={`${componentName}_PORTFOLIO_DISPLAY`}>
        <ul className={`flex flex-wrap justify-center gap-4`}>
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className='relative flex flex-col justify-center h-auto floating_container group bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer transition duration-300 sm:max-w-[45%] lg:max-w-[30%]'
            >
              <a
                href={`/blog/${item.blog_post_url}`}
                aria-label={`Web Development Hamilton Portfolio Item | ${item.title}`}
                title={`Web Development Hamilton Portfolio Item | ${item.title}`}
              >
                <Image
                  src={src + item.imageURL}
                  alt={`Web Development Hamilton Portfolio Item Image | ${item.title}`}
                  width={600}
                  height={400}
                  className='rounded-md group-hover:opacity-100 opacity-80 transition duration-300'
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500'></div>
                <div className='flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-opacity duration-500 opacity-100 group-hover:opacity-0'>
                  <h3 className='text-white mb-4 text-center transition duration-300 text-3xl'>
                    {item.title}
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

export default BlogPortfolio;

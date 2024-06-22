import BlogPortfolio from '@/src/app/blog/BlogPortfolio'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};


const BlogPage = () => {
  const componentName = 'PORTFOLIO_PAGE';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full flex justify-center items-center flex-col gap-4 py-10 px-4 text-center max-w-[1200px] mx-auto`}
    >
      <h1>Blog</h1>
      <div className={`${componentName}_BLOG_PORTFOLIO`}>
        <BlogPortfolio />
      </div>
    </div>
  );
};

export default BlogPage;

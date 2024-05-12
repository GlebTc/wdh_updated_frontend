import { Metadata } from 'next';
import BlogPosts from './BlogPosts';

export const metadata: Metadata = {
  title: 'Blog',
};

const BlogPage = () => {
  const componentName = 'BLOG_PAGE_MAIN_SECTION';

  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full flex justify-center items-center flex-col gap-4 py-10 px-4 text-center max-w-[1200px] mx-auto`}
    >
      <h1>Blog</h1>
      <div className='border-b-2 border-t-2 border-cyan-900'>
        <BlogPosts />
      </div>
    </div>
  );
};

export default BlogPage;

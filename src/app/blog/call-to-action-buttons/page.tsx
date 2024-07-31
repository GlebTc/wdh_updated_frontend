import blogPosts from '@/src/utils/constants/blogPosts.json';
import BlogPosts from '@/src/app/blog/BlogPosts';




const CTA = () => {
  const componentName = 'BLOG_POST_CTA';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full flex justify-center items-center flex-col gap-4 py-10 px-4 text-center max-w-[1200px] mx-auto`}
    >
      <div>
        <BlogPosts blog={blogPosts[3]} />
      </div>
    </div>
  );
};

export default CTA;

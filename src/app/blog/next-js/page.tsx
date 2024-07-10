import blogPosts from '@/src/utils/constants/blogPosts.json';
import BlogPosts from '@/src/app/blog/BlogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Engine Optimization aka SEO | Web Development Hamilton',
  description:
    'Learn about the intricacies of Search Engine Optimization (SEO) from Web Development Hamilton. Discover why SEO is essential and how we plan to incorporate it into our future services.',
  keywords: [
    'SEO',
    'Search Engine Optimization',
    'Technical SEO',
    'SEO Strategies',
    'Web Development Hamilton SEO',
    'SEO Tips',
    'SEO Techniques',
    'Organic Search Traffic',
    'Improving Search Rankings',
    'SEO Best Practices',
  ],
  openGraph: {
    title: 'Search Engine Optimization aka SEO | Web Development Hamilton',
    description:
      'Learn about the intricacies of Search Engine Optimization (SEO) from Web Development Hamilton. Discover why SEO is essential and how we plan to incorporate it into our future services.',
    url: 'https://www.webdevelopmenthamilton.com/blog/seo',
    type: 'article',
  },
  twitter: {
    title: 'Search Engine Optimization aka SEO | Web Development Hamilton',
    card: 'summary_large_image',
    description:
      'Learn about the intricacies of Search Engine Optimization (SEO) from Web Development Hamilton. Discover why SEO is essential and how we plan to incorporate it into our future services.',
  },
};

const SEO = () => {
  const componentName = 'BLOG_POCT_NEXTJS';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full flex justify-center items-center flex-col gap-4 py-10 px-4 text-center max-w-[1200px] mx-auto`}
    >
      <div>
        <BlogPosts blog={blogPosts[2]} />
      </div>
    </div>
  );
};

export default SEO;

import blogPosts from '@/src/utils/constants/blogPosts.json';
import BlogPosts from '@/src/app/blog/BlogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why We Use Next.js for Web Development | Web Development Hamilton',
  description:
    'Discover why Web Development Hamilton leverages Next.js for building fast, scalable, and SEO-friendly websites. Learn about the benefits of server-side rendering, static site generation, and optimized performance.',
  keywords: [
    'Next.js',
    'Web Development',
    'Performance',
    'Server-Side Rendering',
    'Static Site Generation',
    'SEO-Friendly Websites',
    'Optimized Performance',
    'Web Development Hamilton',
    'React Framework',
    'Scalable Web Applications',
  ],
  openGraph: {
    title: 'Why We Use Next.js for Web Development | Web Development Hamilton',
    description:
      'Discover why Web Development Hamilton leverages Next.js for building fast, scalable, and SEO-friendly websites. Learn about the benefits of server-side rendering, static site generation, and optimized performance.',
    url: 'https://www.webdevelopmenthamilton.com/blog/next-js',
    type: 'article',
  },
  twitter: {
    title: 'Why We Use Next.js for Web Development | Web Development Hamilton',
    card: 'summary_large_image',
    description:
      'Discover why Web Development Hamilton leverages Next.js for building fast, scalable, and SEO-friendly websites. Learn about the benefits of server-side rendering, static site generation, and optimized performance.',
  },
};

const NextJS = () => {
  const componentName = 'BLOG_POST_NEXTJS';
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

export default NextJS;

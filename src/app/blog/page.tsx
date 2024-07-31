import BlogPortfolio from '@/src/app/blog/BlogPortfolio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Web Development Hamilton',
  description:
    'Stay updated with the latest news, trends, and tips in web development, web design, and SEO. Read our blog to learn how Web Development Hamilton can help your business succeed online.',
  keywords: [
    'Web Development Blog',
    'Web Design Blog',
    'SEO Blog',
    'Digital Marketing Blog',
    'Web Development Hamilton Blog',
    'Latest Web Trends',
    'Web Development Tips',
    'SEO Tips',
    'Online Marketing',
    'Hamilton Ontario Blog',
  ],
  openGraph: {
    title: 'Blog | Web Development Hamilton',
    description:
      'Stay updated with the latest news, trends, and tips in web development, web design, and SEO. Read our blog to learn how Web Development Hamilton can help your business succeed online.',
    url: 'https://www.webdevelopmenthamilton.com/blog',
    type: 'website',
  },
  twitter: {
    title: 'Blog | Web Development Hamilton',
    card: 'summary_large_image',
    description:
      'Stay updated with the latest news, trends, and tips in web development, web design, and SEO. Read our blog to learn how Web Development Hamilton can help your business succeed online.',
  },
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

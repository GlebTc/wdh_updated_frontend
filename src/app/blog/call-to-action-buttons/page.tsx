import blogPosts from '@/src/utils/constants/blogPosts.json';
import BlogPosts from '@/src/app/blog/BlogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Call-to-Action Buttons | Web Development Hamilton',
  description:
    'Learn about the importance of Call-to-Action (CTA) buttons in web design and development. Discover best practices for creating effective CTAs that drive user actions and improve conversion rates.',
  keywords: [
    'Call-to-Action Buttons',
    'CTA',
    'Web Design',
    'User Experience',
    'UX Design',
    'Web Development',
    'Conversion Rate Optimization',
    'Web Development Hamilton',
    'Effective CTAs',
    'Button Design',
  ],
  openGraph: {
    title: 'Call-to-Action Buttons | Web Development Hamilton',
    description:
      'Learn about the importance of Call-to-Action (CTA) buttons in web design and development. Discover best practices for creating effective CTAs that drive user actions and improve conversion rates.',
    url: 'https://www.webdevelopmenthamilton.com/blog/call-to-action-buttons',
    type: 'article',
  },
  twitter: {
    title: 'Call-to-Action Buttons | Web Development Hamilton',
    card: 'summary_large_image',
    description:
      'Learn about the importance of Call-to-Action (CTA) buttons in web design and development. Discover best practices for creating effective CTAs that drive user actions and improve conversion rates.',
  },
};

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

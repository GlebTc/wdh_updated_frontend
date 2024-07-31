import blogPosts from '@/src/utils/constants/blogPosts.json';
import BlogPosts from '@/src/app/blog/BlogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI, UX, and Responsive Design | Web Development Hamilton',
  description:
    'Learn about the importance of UI, UX, and responsive design in creating visually appealing, intuitive, and user-friendly websites and applications. Discover how Web Development Hamilton prioritizes these elements in all our projects.',
  keywords: [
    'UI Design',
    'UX Design',
    'Responsive Design',
    'Web Design',
    'Web Development',
    'User Interface Design',
    'User Experience Design',
    'Responsive Web Design',
    'Web Development Hamilton UI UX',
    'UI UX Best Practices',
  ],
  openGraph: {
    title: 'UI, UX, and Responsive Design | Web Development Hamilton',
    description:
      'Learn about the importance of UI, UX, and responsive design in creating visually appealing, intuitive, and user-friendly websites and applications. Discover how Web Development Hamilton prioritizes these elements in all our projects.',
    url: 'https://www.webdevelopmenthamilton.com/blog/ui-ux-responsive-design',
    type: 'article',
  },
  twitter: {
    title: 'UI, UX, and Responsive Design | Web Development Hamilton',
    card: 'summary_large_image',
    description:
      'Learn about the importance of UI, UX, and responsive design in creating visually appealing, intuitive, and user-friendly websites and applications. Discover how Web Development Hamilton prioritizes these elements in all our projects.',
  },
};

const SEO = () => {
  const componentName = 'BLOG_POCT_SEO';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full flex justify-center items-center flex-col gap-4 py-10 px-4 text-center max-w-[1200px] mx-auto`}
    >
      <div>
        <BlogPosts blog={blogPosts[1]} />
      </div>
    </div>
  );
};

export default SEO;

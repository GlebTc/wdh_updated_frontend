import MainContact from '@/src/components/main/mainContact/MainContact';
import { Metadata } from 'next';
import RunSpeedTest from '../../components/main/PageSpeedTest';

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
      <p>We are working on updating this page. Thank you for your patience.</p>
      <p>
        If you have any questions, please email us at{' '}
        <a
          href='mailto:webdevelopmenthamilton@gmail.com'
          title={`Email Web Developer | webdevelopmenthamilton@gmail.com`}
          aria-label={`Email Web Developer | webdevelopmenthamilton@gmail.com`}
          className='hover:text-cyan-600'
        >
          webdevelopmenthamilton@gmail.com
        </a>{' '}
        or use the contact information below.
      </p>

      <a
        href='/'
        aria-label='Return Home | Web Development Hamilton'
        title='Return Home | Web Development Hamilton'
        className='text-sm font-bold px-4 py-2 rounded-md shadow-lg shadow-gray-400 bg-[#C0D6FF] hover:shadow-blue-500 ease-in duration-300 cursor-pointer'
      >
        Return Home
      </a>
      <MainContact />
    </div>
  );
};

export default BlogPage;

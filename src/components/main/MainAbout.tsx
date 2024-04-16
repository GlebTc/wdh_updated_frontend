import Image from 'next/image';

const About = () => {
  const componentName = 'MAIN_PAGE_ABOUT_SECTION';
  return (
    <div
      id='about'
      className={`${componentName}_MAIN_CONTAINER flex flex-col justify-center items-center gap-2`}
    >
      <h1>Simple | Affordable | Effective</h1>
      <Image
        className='primary_container m-4 hidden md:block'
        src='https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80'
        width={400}
        height={400}
        alt='About Us | Web Designer | Web Developer | Web Development Hamilton'
      />
      <p>
        The goal of a website is to attract new customers and retain existing
        ones. It has to be professional and easy to use. It must be fast,
        responsive, secure, and optimized for search engines.
      </p>
      <p>
        At{' '}
        <strong>
          <a
            href='webdevelopmenthamilton.com'
            aria-label='webdevelopmenthamilton.com | Home Page'
          >
            webdevelopmenthamilton.com
          </a>
        </strong>
        , our goal is to help you establish an online presence and gain
        visibility without breaking the bank. Our plans include unlimited
        support and maintenance. We will take care of everything, allowing you
        to concentrate on growing your business.
      </p>
    </div>
  );
};

export default About;

import Image from 'next/image';

const About = () => {
  const componentName = 'MAIN_PAGE_ABOUT_SECTION';
  return (
    <div
      id='about'
      className={`${componentName}_MAIN_CONTAINER main_container flex flex-col justify-center items-center gap-2`}
    >
      <h1 className='text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
        Simple | Affordable | Effective
      </h1>
      <div className={`${componentName}_IMAGE_AND_TEXT_CONTAINER md:flex flex-auto gap-8`}>
        <div className={`${componentName}_IMAGE_CONTAINER w-1/3 self-center`}>
          <Image
            className='floating_container hidden md:block'
            src='https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80'
            width={400}
            height={400}
            alt='About | Web Development Hamilton'
          />
        </div>
        <div className={`${componentName}_TEXT_CONTAINER md:w-2/3 lg:px-16 self-center`}>
          <p>
            The goal of a website is to attract new customers and retain
            existing ones. It has to be professional and easy to use. It must be
            fast, responsive, secure, and optimized for search engines.
          </p>
          <p>
            At{' '}
            <strong>
              <a
                href='webdevelopmenthamilton.com'
                aria-label='webdevelopmenthamilton.com | Home Page'
                title='webdevelopmenthamilton.com | Home Page'
                className='hover:text-cyan-600 duration-300 cursor-pointer'
              >
                WebDevelopmentHamilton.com
              </a>
            </strong>
            , our goal is to help you establish an online presence and gain
            visibility without breaking the bank. Our plans include unlimited
            support and maintenance. We will take care of everything, allowing
            you to concentrate on growing your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

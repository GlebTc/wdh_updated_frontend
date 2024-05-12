import perfect_score from '@/public/assets/perfect_score.webp';
import Image from 'next/image';
import { AiOutlineLink } from 'react-icons/ai';
import MainBasicPackageBullets from '@/src/components/main/MainBasicPackageBullets';
import RunSpeedTest from '@/src/app/blog/RunSpeedTest';

const Main = () => {
  const componentName = 'MAIN_PAGE_MAIN_SECTION';
  return (
    <div
      id='home'
      className={`${componentName}_MAIN_CONTAINER main_container flex flex-col items-center gap-2`}
    >
      <Image
        src={perfect_score}
        className='floating_container w-[75vw] max-w-[800px] mx-auto'
        quality={50}
        placeholder='blur'
        priority
        alt='Perfect Score | Web Development Hamilton | webdevelopmenthamilton.com'
      />
      <h1>Website Development</h1>

      <p>
        No third party Content Management Systems such as wordpress and wix
        allows us to give you full control on how your website looks and
        functions. Most importantly, our goal is to make sure your website
        scores as close to perfect as possible.
      </p>
      <div className='PAGESPEED_LINK mb-5 flex flex-col items-center'>
        <h2 className='mb-4'>Test Your Website</h2>

        <RunSpeedTest />
      </div>
      <MainBasicPackageBullets />
    </div>
  );
};

export default Main;

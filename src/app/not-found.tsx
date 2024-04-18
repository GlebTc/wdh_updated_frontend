import MainContact from '@/src/components/main/mainContact/MainContact';

export default function NotFound() {
  return (
    <div className='h-full flex justify-center items-center flex-col gap-4 py-10 px-4 text-center max-w-[1200px] mx-auto'>
      <h2 className='font-bold text-3xl'>
        The Page You Requested Could Not Be Found
      </h2>
      <p>
        Please check the URL and if you still experience error, please email us
        at{' '}
        <a
          href='mailto:webdevelopmenthamilton@gmail.com'
          title={`Email Web Developer | webdevelopmenthamilton@gmail.com`}
          aria-label={`Email Web Developer | webdevelopmenthamilton@gmail.com`}
          className='hover:text-cyan-600'
        >
          webdevelopmenthamilton@gmail.com
        </a>
      </p>
      <p>Error Code: 404 (Page Not Found)</p>
      <a
        href='/'
        aria-label='Return Home'
        className='text-sm font-bold px-4 py-2 rounded-md shadow-lg shadow-gray-400 bg-[#C0D6FF] hover:shadow-blue-500 ease-in duration-300 cursor-pointer'
      >
        Return Home
      </a>
      <MainContact />
    </div>
  );
}

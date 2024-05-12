'use client';
import { useState } from 'react';

const RunSpeedTest = () => {
  const [url, setUrl] = useState('');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<number | null>(null);
  const [error, setError] = useState(null);

  const handleChange = (e: any) => {
    setUrl(e.target.value);
  };

  const runSpeedTest = () => {
    setTesting(true);
    setTestResult(null);
    setError(null);

    const testUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://${url}`;
    fetch(testUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.lighthouseResult.categories.performance.score);
        // Calculate the score out of 100
        const score = Math.round(
          data.lighthouseResult.categories.performance.score * 100
        );
        setTestResult(score);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setTesting(false));
  };

  if (testing) {
    return (
      <div>
        <button
          type='button'
          className='py-2 px-4 flex justify-center items-center  bg-[#C0D6FF] focus:ring-blue-500 focus:ring-offset-blue-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg max-w-md'
        >
          <svg
            width='20'
            height='20'
            fill='currentColor'
            className='mr-2 animate-spin'
            viewBox='0 0 1792 1792'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z'></path>
          </svg>
          <div className='text-center'>
            <p>Testing Performance</p>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div className='flex flex-col justify-center gap-2 md:flex-row md:gap-8'>
        <input
          type='text'
          placeholder='Enter URL'
          className='border border-gray-300 rounded-md p-2'
          onChange={handleChange}
        />

        <button
          onClick={runSpeedTest}
          className='text-sm font-bold px-4 py-2 rounded-md shadow-lg shadow-gray-400 bg-[#C0D6FF] hover:shadow-blue-500 ease-in duration-300 cursor-pointer'
        >
          <p>Test Performance</p>
        </button>
      </div>

      {testResult && (
        <div>
          <p>
            Performance Score:{' '}
            <span
              className={`${
                testResult > 80
                  ? 'text-green-600'
                  : testResult > 50
                  ? 'text-yellow-600'
                  : 'text-red-600'
              }`}
            >
              {testResult}
            </span>
          </p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default RunSpeedTest;
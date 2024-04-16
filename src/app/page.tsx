import Main from '@/src/components/main/Main';
import About from '@/src/components/main/MainAbout';

export default function Home() {
  return (
    <main className='max-w-[1200px] mx-auto'>
      <Main />
      <About />
    </main>
  );
}

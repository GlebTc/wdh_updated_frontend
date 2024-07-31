import Main from '@/src/components/main/Main';
import About from '@/src/components/main/MainAbout';
import Portfolio from '@/src/components/main/MainPortfolio';
import Contact from '@/src/components/main/mainContact/MainContact';

export default function Home() {
  return (
    <main className='max-w-[1200px] mx-auto'>
      <Main />
      <About />
      <Portfolio />
      <Contact />

    </main>
  );
}

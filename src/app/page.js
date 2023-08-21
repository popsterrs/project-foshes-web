import 'src/app/page.module.css';
import Hero from 'src/app/components/hero.js';

export default function Home() {
  return (
    <div className='wrapper'>
      <link rel="icon" href="/favicon.ico" />
      <Hero />
    </div>
  );
}

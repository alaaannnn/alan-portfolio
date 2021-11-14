import Head from 'next/head'
import Hero from '../components/Hero';
import Test from '../components/Test';

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Alan Ye - Software Engineer!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Hero />
        <Test />
      </main>
    </div>
  );
};

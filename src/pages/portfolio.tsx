import About from '@components/About';
import Header from '@components/Header';
import Hero from '@components/Hero';
import WorkExperience from '@components/WorkExperience';
import Head from 'next/head';
import Link from 'next/link';

const PortfolioPage = () => (
  <div className="bg-[#2C2C2C] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0">
    <Head>
      <title>Kishan's Portfolio</title>
    </Head>

    <Header />

    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero />
    </section>

    {/* About */}
    <section id="about" className="snap-center">
      <About />
    </section>

    {/* Experience */}
    <section id="experience" className="snap-center">
      <WorkExperience />
    </section>

    <footer
      className="bg-transparent
             md:text-3xl text-white text-center
             fixed
             inset-x-0
             bottom-0"
    >
      <div className="z-30 py-5 lg:space-x-10">
        <Link href="#about">
          <button className="heroButton bg-[#2C2C2C]">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton bg-[#2C2C2C]">Experience</button>
        </Link>
        {/* <Link href="#skills">
          <button className="heroButton bg-[#2C2C2C]">Skills</button>
        </Link> */}
      </div>
    </footer>
  </div>
);

export default PortfolioPage;

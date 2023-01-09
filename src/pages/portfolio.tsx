import About from '@components/About';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Projects from '@components/Projects';
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

    {/* Projects */}
    {/* <section id="projects" className="snap-center">
      <Projects />
    </section> */}

    <footer
      className="bg-transparent
             md:text-3xl text-white
             fixed
             inset-x-0
             bottom-0 
             grid place-items-center
             "
    >
      <div className="z-30 py-2 px-5 mb-2 border border-heroGreen/20 rounded-lg grid grid-cols-[repeat(2,_1fr)] justify-center items-center gap-5">
        <Link
          href="#about"
          className="group text-red-300 transition-all duration-300 ease-in-out"
        >
          <button className="heroButton bg-[#2C2C2C]">About</button>
        </Link>
        <Link
          href="#experience"
          className="group text-red-300 transition-all duration-300 ease-in-out"
        >
          <button className="heroButton bg-[#2C2C2C]">Experience</button>
        </Link>
        {/* <Link
          href="#projects"
          className="group text-red-300 transition-all duration-300 ease-in-out"
        >
          <button className="heroButton bg-[#2C2C2C]">Projects</button>
        </Link> */}
        {/* <Link href="#skills">
          <button className="heroButton bg-[#2C2C2C]">Skills</button>
        </Link> */}
      </div>
    </footer>
  </div>
);

export default PortfolioPage;

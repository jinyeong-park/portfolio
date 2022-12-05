import type { NextPage } from "next";
import Head from 'next/head'
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(236, 236, 231)] h-screen text-gray snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Jenny Park</title>
      </Head>

      {/* - Header */}
      <Header />

      {/* - Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      
      {/* - About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* - Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* - Skills  */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* - Projects  */}
      
      {/* - Contact Us */}
    </div>
  )
}

export default Home;



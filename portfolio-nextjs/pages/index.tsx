import type { NextPage } from "next";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Hero from "../components/Hero";


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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

      {/* - Experience */}

      {/* - Skills  */}

      {/* - Projects  */}
      
      {/* - Contact Us */}
    </div>
  )
}

export default Home;



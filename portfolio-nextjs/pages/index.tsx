import type { NextPage } from "next";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jenny Park</title>
      </Head>

      {/* - Header */}
      <Header />

      {/* - Hero */}
      
      {/* - About */}

      {/* - Experience */}

      {/* - Skills  */}

      {/* - Projects  */}
      
      {/* - Contact Us */}
    </div>
  )
}

export default Home;



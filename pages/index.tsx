import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Landing } from '../components/landing/Landing'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lina Alvarez</title>
        <meta name="description" content="Lina Alvarez, Asesora de Imagen y Diseñadora" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Lina Alvarez
        </h1>
      </main> */}

      <Landing />

      
    </div>
  )
}

export default Home

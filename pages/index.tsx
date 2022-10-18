import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Landing } from '../components/landing/Landing'
import styles from '../styles/Home.module.css'
import { gsap } from 'gsap'

const Home: NextPage = () => {

  const el = useRef() as React.MutableRefObject<HTMLInputElement>;  ;
  const tl = useRef<any>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline()
        .to('.'+styles.landing, {
          opacity: 1,
          duration: 5,
        })
    }, el);
  }, []);

  return (
    <div className={styles.container} ref={el}>
      <Head>
        <title>Lina Alvarez</title>
        <meta name="description" content="Lina Alvarez, Asesora de Imagen y Diseñadora" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.landing}>
        <Landing />
      </div>
      
      
    </div>
  )
}

export default Home

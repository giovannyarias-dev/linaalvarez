import React, { useEffect, useRef } from 'react'
import styles from './Logo.module.css'
import { gsap } from 'gsap'

const letterAnimation = {
  marginLeft: 0,
  opacity: 1,
  duration: 0.4,
  delay: -0.2
}


export const Logo = () => {

  const el = useRef() as React.MutableRefObject<HTMLInputElement>;  ;
  const tl = useRef<any>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline()
        .to('#lina-l', letterAnimation)
        .to('#lina-i', letterAnimation)
        .to('#lina-n', letterAnimation)
        .to('#triangle', {
          opacity: 1,
          scale: 1,
          duration: 0.8
        })
        .to('#alvarez-l', letterAnimation)
        .to('#alvarez-v', letterAnimation)
        .to('#alvarez-a', letterAnimation)
        .to('#alvarez-r', letterAnimation)
        .to('#alvarez-e', letterAnimation)
        .to('#alvarez-z', letterAnimation);
    }, el);
  }, []);

  return (
    <div className={styles.container} ref={el}>
      <img src="/images/logo/lina-l.svg" className={styles.letter+' '+styles.gap} id="lina-l" />
      <img src="/images/logo/lina-i.svg" className={styles.letter+' '+styles.gap} id="lina-i" />
      <img src="/images/logo/lina-n.svg" className={styles.letter+' '+styles.gap} id="lina-n" />
      <img src="/images/logo/lina-triangle.svg" className={styles.triangle+' '+styles.gap} id="triangle" />
      <img src="/images/logo/alvarez-l.svg" className={styles.letter} id="alvarez-l" />
      <img src="/images/logo/alvarez-v.svg" className={styles.letter} id="alvarez-v" />
      <img src="/images/logo/alvarez-a.svg" className={styles.letter+' '+styles.gap} id="alvarez-a" />
      <img src="/images/logo/alvarez-r.svg" className={styles.letter+' '+styles.gap} id="alvarez-r" />
      <img src="/images/logo/alvarez-e.svg" className={styles.letter+' '+styles.gap} id="alvarez-e" />
      <img src="/images/logo/alvarez-z.svg" className={styles.letter} id="alvarez-z" />
    </div>
  )
}

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import styles from './Landing.module.css'

export const Landing = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  }, []);
    
  return (
    <div>
      <div className={styles.box} ref={boxRef}>
        Helloeede
      </div>
    </div>
  );
}

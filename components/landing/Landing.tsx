import styles from './Landing.module.css'
import { Logo } from '../logo/Logo';

export const Landing = () => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
}

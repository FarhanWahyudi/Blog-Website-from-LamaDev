import Image from 'next/image';
import styles from './themeToggle.module.css';

export default function ThemeToggle() {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" height={14} width={14} />
      <span className={styles.ball} />
      <Image src="/sun.png" height={14} width={14} />
    </div>
  );
}

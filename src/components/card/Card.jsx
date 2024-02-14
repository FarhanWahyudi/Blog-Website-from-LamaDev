import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="p1" className={styles.img} fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>13.02.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, error.</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente, magnam, molestias, harum vitae vero nam aliquid eos hic et a dolor ratione sint ex quidem aliquam earum sunt qui.</p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

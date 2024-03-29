import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" height={24} width={24} />
        <Image src="/instagram.png" alt="instagram" height={24} width={24} />
        <Image src="/tiktok.png" alt="tiktok" height={24} width={24} />
        <Image src="/youtube.png" alt="youtube" height={24} width={24} />
      </div>
      <div className={styles.logo}>HansBlog</div>
      <div className={styles.list}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
}

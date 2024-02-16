import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="hansblog" width={50} height={50} />
          <h1 className={styles.logoText}>Hansblog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, voluptatibus. Optio ipsum mollitia dolor possimus voluptas, veritatis totam sequi! Est molestiae cum ipsa architecto expedita, non sint animi quaerat excepturi?
          Accusamus architecto molestiae, sit alias iure consectetur placeat nostrum.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" height={18} width={18} />
          <Image src="/instagram.png" alt="instagram" height={18} width={18} />
          <Image src="/tiktok.png" alt="tiktok" height={18} width={18} />
          <Image src="/youtube.png" alt="youtube" height={18} width={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}

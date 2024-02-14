import Link from 'next/link';
import styles from './menuPosts.module.css';
import Image from 'next/image';

export default function MenuPosts({ img, category, title, author, date, clas }) {
  return (
    <Link href="/" className={styles.item}>
      {img && (
        <div className={styles.imgContainer}>
          <Image src={img} alt="p1" className={styles.img} fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${clas}`}>{category}</span>
        <h3 className={styles.postTitle}>{title}</h3>
        <div className={styles.detail}>
          <span className={styles.author}>{author} - </span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </Link>
  );
}

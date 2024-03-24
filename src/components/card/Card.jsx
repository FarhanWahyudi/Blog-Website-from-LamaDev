import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';

export default function Card({ item }) {
  return (
    <div key={item._id} className={styles.container}>
      {item.img && (
        <div className={styles.imgContainer}>
          <Image src={item.img} alt="p1" className={styles.img} fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.createdAt.substring(0, 10)} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

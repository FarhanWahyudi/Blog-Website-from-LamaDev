import Link from 'next/link';
import styles from './categoryList.module.css';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  return res.json();
}

export default async function CategoryList() {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.map((item) => (
          <Link href={item.href} className={`${styles.category} ${styles[item.slug]}`}>
            <Image src={item.img} alt={item.title} width={32} height={32} className={styles.img} />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

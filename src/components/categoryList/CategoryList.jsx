import Link from 'next/link';
import styles from './categoryList.module.css';
import Image from 'next/image';

const categories = [
  {
    href: '/blog?cat=style',
    src: '/style.png',
    class: styles.style,
    name: 'style',
  },
  {
    href: '/blog?cat=fashion',
    src: '/fashion.png',
    class: styles.fashion,
    name: 'fashion',
  },
  {
    href: '/blog?cat=food',
    src: '/food.png',
    class: styles.food,
    name: 'food',
  },
  {
    href: '/blog?cat=travel',
    src: '/travel.png',
    class: styles.travel,
    name: 'travel',
  },
  {
    href: '/blog?cat=culture',
    src: '/culture.png',
    class: styles.culture,
    name: 'culture',
  },
  {
    href: '/blog?cat=coding',
    src: '/coding.png',
    class: styles.coding,
    name: 'coding',
  },
];

export default function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link href={category.href} className={`${styles.category} ${category.class}`}>
            <Image src={category.src} alt={category.name} width={32} height={32} className={styles.img} />
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

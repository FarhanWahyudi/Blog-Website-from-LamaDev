import Link from 'next/link';
import styles from './menuCategories.module.css';

export default function MenuCategories({ stylesCategory, category }) {
  return (
    <Link href="/" className={`${styles.categoryItem} ${stylesCategory}`}>
      {category}
    </Link>
  );
}

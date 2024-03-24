'use client';

import { useRouter } from 'next/navigation';
import styles from './pagination.module.css';

export default function Pagination({ page, hasPrev, hasNext }) {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
      <button type="button" disabled={!hasPrev} onClick={() => push(`?page=${page - 1}`)} className={styles.button}>
        Previous
      </button>
      <button type="button" disabled={!hasNext} onClick={() => push(`?page=${page + 1}`)} className={styles.button}>
        Next
      </button>
    </div>
  );
}

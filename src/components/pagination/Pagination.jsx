import styles from './pagination.module.css';

export default function Pagination() {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button}>
        Previous
      </button>
      <button type="button" className={styles.button}>
        Next
      </button>
    </div>
  );
}

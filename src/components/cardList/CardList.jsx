import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';

export default function CardList() {
  return (
    <div>
      <h1 className={styles.container}>CardList</h1>
      <Pagination />
    </div>
  );
}

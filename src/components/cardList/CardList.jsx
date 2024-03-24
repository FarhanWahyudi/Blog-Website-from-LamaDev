import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';

async function getData(page, cat) {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  return res.json();
}

export default async function CardList({ page, cat }) {
  const { posts, count } = await getData(page, cat);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
}

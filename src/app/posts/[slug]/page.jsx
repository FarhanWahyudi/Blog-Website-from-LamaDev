import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

async function getData(slug) {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  return res.json();
}

export default async function SinglePage({ params }) {
  const { slug } = params;
  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.user}>
            {data?.user.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="p1" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{data?.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imgContainer}>
            <Image src={data.img} alt="p1" fill className={styles.img} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.desc }} />
          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
}

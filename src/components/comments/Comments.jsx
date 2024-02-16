import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';

export default function Comments() {
  const status = 'authenticated';
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea name="comment" placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/">Login to write comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" height={50} width={50} alt="p1" className={styles.avatar} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>13.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor debitis quasi, facilis est, dignissimos, eos necessitatibus illum consequatur unde quod natus mollitia! Excepturi repellat libero deleniti, officiis
            voluptates quasi!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" height={50} width={50} alt="p1" className={styles.avatar} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>13.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor debitis quasi, facilis est, dignissimos, eos necessitatibus illum consequatur unde quod natus mollitia! Excepturi repellat libero deleniti, officiis
            voluptates quasi!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" height={50} width={50} alt="p1" className={styles.avatar} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>13.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor debitis quasi, facilis est, dignissimos, eos necessitatibus illum consequatur unde quod natus mollitia! Excepturi repellat libero deleniti, officiis
            voluptates quasi!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" height={50} width={50} alt="p1" className={styles.avatar} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>13.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor debitis quasi, facilis est, dignissimos, eos necessitatibus illum consequatur unde quod natus mollitia! Excepturi repellat libero deleniti, officiis
            voluptates quasi!
          </p>
        </div>
      </div>
    </div>
  );
}

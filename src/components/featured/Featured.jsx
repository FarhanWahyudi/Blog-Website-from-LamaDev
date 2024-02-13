import Image from 'next/image';
import styles from './featured.module.css';

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Hans here</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/p1.jpeg" alt="p1" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fugiat.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quae doloribus sequi, ratione veniam architecto similique animi a deleniti, sed ipsa qui consequatur tenetur in! Laudantium neque consequuntur doloribus dolorem. Hic
            cupiditate minima quos possimus fuga voluptatem debitis, doloribus, doloremque itaque repellendus fugiat praesentium? Similique placeat distinctio dolores officia odio.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

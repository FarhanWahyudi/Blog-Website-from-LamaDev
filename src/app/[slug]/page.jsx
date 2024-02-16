import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="p1" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>13.11.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="p1" fill className={styles.img} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquam a libero illo exercitationem molestias repudiandae natus blanditiis odit perferendis quam expedita earum dolorum, sunt in? Quod id dicta debitis.</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquam a libero illo exercitationem molestias repudiandae natus blanditiis odit perferendis quam expedita earum dolorum, sunt in? Quod id dicta debitis.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquam a libero illo exercitationem molestias repudiandae natus blanditiis odit perferendis quam expedita earum dolorum, sunt in? Quod id dicta debitis.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquam a libero illo exercitationem molestias repudiandae natus blanditiis odit perferendis quam expedita earum dolorum, sunt in? Quod id dicta debitis.</p>
          </div>
          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
}

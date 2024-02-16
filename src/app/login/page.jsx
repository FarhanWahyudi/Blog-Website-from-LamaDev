import styles from './loginPage.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.loginButton}>Login with Google</button>
        <button className={styles.loginButton}>Login with Github</button>
        <button className={styles.loginButton}>Login with FaceBook</button>
      </div>
    </div>
  );
}

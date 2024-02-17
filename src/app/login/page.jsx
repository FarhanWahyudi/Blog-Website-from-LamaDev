'use client';

import { signIn, useSession } from 'next-auth/react';
import styles from './loginPage.module.css';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { push } = useRouter();
  const { status } = useSession();
  if (status === 'authenticated') {
    push('/');
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button onClick={() => signIn('google')} className={styles.loginButton}>
          Login with Google
        </button>
        <button className={styles.loginButton}>Login with Github</button>
        <button className={styles.loginButton}>Login with FaceBook</button>
      </div>
    </div>
  );
}

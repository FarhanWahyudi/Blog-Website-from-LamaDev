'use client';

import Link from 'next/link';
import styles from './authLinks.module.css';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

export default function AuthLinks() {
  const { status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <button onClick={signOut} className={styles.signOut}>
            Logout
          </button>
        </>
      )}
      <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === 'notauthenticated' ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/">Write</Link>
              <Link href="/">Logout</Link>
            </>
          )}
        </div>
      )}
    </>
  );
}

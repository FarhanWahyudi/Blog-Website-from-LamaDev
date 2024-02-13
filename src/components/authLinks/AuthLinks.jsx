'use client';

import Link from 'next/link';
import styles from './authLinks.module.css';
import { useState } from 'react';

export default function AuthLinks() {
  const status = 'notauthenticated';
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/" className={styles.link}>
            Write
          </Link>
          <Link href="/" className={styles.link}>
            Logout
          </Link>
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

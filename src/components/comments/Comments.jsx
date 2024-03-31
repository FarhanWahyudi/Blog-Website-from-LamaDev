'use client';

import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import { useState } from 'react';

export async function fetcher(url) {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(res.message);
    throw error;
  }

  return data;
}

export default function Comments({ postSlug }) {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);
  const [desc, setDesc] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc, postSlug }),
    });
    e.target.comment.value = '';
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <form onSubmit={handleSubmit}>
          <div className={styles.write}>
            <textarea name="comment" placeholder="write a comment..." className={styles.input} onChange={(e) => setDesc(e.target.value)} />
            <button className={styles.button} type="submit">
              Send
            </button>
          </div>
        </form>
      ) : (
        <Link href="/">Login to write comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? 'loading'
          : data?.map((item) => (
              <div className={styles.comment}>
                <div className={styles.user}>
                  {item?.user.image && <Image src={item.user.image} height={50} width={50} alt="p1" className={styles.avatar} />}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item?.user.name}</span>
                    <span className={styles.date}>{item?.createdAt.substring(0, 10)}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item?.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import styles from './writePage.module.css';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

export default function WritePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div className={styles.container}>
      <input className={styles.inputTitle} type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
          <Image src="/plus.png" alt="plus" height={16} width={16} />
        </button>
        {isOpen && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="image" height={16} width={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="external" height={16} width={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="video" height={16} width={16} />
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..." />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}

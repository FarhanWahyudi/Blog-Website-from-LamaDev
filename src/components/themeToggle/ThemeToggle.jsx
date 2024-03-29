'use client';

import Image from 'next/image';
import styles from './themeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div onClick={toggle} className={styles.container} style={theme === 'dark' ? { backgroundColor: '#eee' } : { backgroundColor: '#0f172a' }}>
      <Image src="/moon.png" alt="moon" height={14} width={14} />
      <span className={styles.ball} style={theme === 'dark' ? { left: '3px', backgroundColor: '#0f172a' } : { right: '3px', backgroundColor: 'white' }} />
      <Image src="/sun.png" alt="sun" height={14} width={14} />
    </div>
  );
}

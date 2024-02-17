'use client';

import { SessionProvider } from 'next-auth/react';

export default function NextauthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

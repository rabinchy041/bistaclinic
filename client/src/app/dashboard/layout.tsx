// /app/dashboard/layout.tsx

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('adminToken');
    if (!token) {
      router.replace('/auth/adminLogin');
    }
  }, []);

  return <>{children}</>;
}

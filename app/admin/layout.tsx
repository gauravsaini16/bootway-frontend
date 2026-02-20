'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

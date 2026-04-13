'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Funcionario() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/funcionario/dashboard');
  }, []);
  return null;
}
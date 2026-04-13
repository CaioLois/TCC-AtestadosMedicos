'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    router.push('/login');
  }

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">

      <div className="text-xl font-bold text-[#1a6b6b] cursor-pointer">
        ATESTE+
      </div>

      <div className="flex items-center gap-8 text-sm text-gray-600 font-medium">
        <Link href="/funcionario/dashboard" className="text-gray-900 hover:text-[#1a6b6b] transition-colors">
          Início
        </Link>
        <Link href="/funcionario/novo-atestado" className="hover:text-[#1a6b6b] transition-colors">
          Enviar Atestado
        </Link>
        <Link href="/funcionario/meus-atestados" className="hover:text-[#1a6b6b] transition-colors">
          Meus Atestados
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors"
        >
          Sair
        </button>
        <Link href="/perfil">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </Link>
      </div>

    </nav>
  );
}
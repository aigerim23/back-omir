'use client'

import Link from 'next/link'
import { useAuthStore } from '@/lib/auth'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { user, logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Логотип */}
        <Link href="/" className="text-xl font-bold text-emerald-600">
          БлагоФонд
        </Link>

        {/* Навигация */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-emerald-600 transition">
            Главная
          </Link>
          <Link href="/projects" className="hover:text-emerald-600 transition">
            Проекты
          </Link>
          <Link href="/news" className="hover:text-emerald-600 transition">
            Новости
          </Link>
          <Link href="/about" className="hover:text-emerald-600 transition">
            О нас
          </Link>
          <Link href="/contact" className="hover:text-emerald-600 transition">
            Контакты
          </Link>
        </div>

        {/* Кнопки */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/admin"
                className="text-sm text-emerald-600 font-medium hover:underline"
              >
                Админ-панель
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-500 hover:text-red-500 transition"
              >
                Выйти
              </button>
            </>
          ) : (
            <Link
              href="/admin/login"
              className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Войти
            </Link>
          )}
        </div>

      </div>
    </nav>
  )
}
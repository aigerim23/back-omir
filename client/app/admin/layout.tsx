'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuthStore } from '@/lib/auth'
import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, logout, init } = useAuthStore()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    init()  // ← восстанавливаем токен из localStorage
  }, [])

  useEffect(() => {
    if (!user && pathname !== '/admin/login') {
      router.push('/admin/login')
    }
  }, [user, pathname])

  if (pathname === '/admin/login') return <>{children}</>
  if (!user) return null

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col">
        <div className="p-5 border-b border-gray-100">
          <h2 className="font-bold text-emerald-600">Админ-панель</h2>
          <p className="text-xs text-gray-400 mt-1">{user.name}</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition">
            📊 Дашборд
          </Link>
          <Link href="/admin/posts" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition">
            📰 Новости
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition">
            🌱 Проекты
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => { logout(); router.push('/') }}
            className="w-full text-sm text-gray-400 hover:text-red-500 transition text-left px-3 py-2"
          >
            Выйти →
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { getAllPosts, getAllProjects } from '@/lib/api'
import Link from 'next/link'

export default function AdminDashboard() {
  const [postsCount, setPostsCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)

  useEffect(() => {
    getAllPosts().then((res) => setPostsCount(res.data.length))
    getAllProjects().then((res) => setProjectsCount(res.data.length))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Дашборд</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Всего новостей</p>
          <p className="text-4xl font-bold text-emerald-600">{postsCount}</p>
          <Link href="/admin/posts" className="text-sm text-emerald-600 hover:underline mt-2 inline-block">
            Управлять →
          </Link>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Всего проектов</p>
          <p className="text-4xl font-bold text-emerald-600">{projectsCount}</p>
          <Link href="/admin/projects" className="text-sm text-emerald-600 hover:underline mt-2 inline-block">
            Управлять →
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="font-semibold text-gray-700 mb-4">Быстрые действия</h2>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/admin/posts/new"
            className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            + Новая новость
          </Link>
          <Link
            href="/admin/projects/new"
            className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            + Новый проект
          </Link>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { getAllPosts, deletePost } from '@/lib/api'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  published: boolean
  createdAt: string
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = () => {
    getAllPosts()
      .then((res) => setPosts(res.data))
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchPosts() }, [])

  const handleDelete = async (id: number) => {
    if (!confirm('Удалить новость?')) return
    await deletePost(id)
    fetchPosts()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Новости</h1>
        <Link
          href="/admin/posts/new"
          className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          + Добавить
        </Link>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1,2,3].map(i => (
            <div key={i} className="h-14 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          {posts.length === 0 ? (
            <p className="text-center text-gray-400 py-10">Новостей нет</p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between px-5 py-4 border-b border-gray-50 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-800 text-sm">{post.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {new Date(post.createdAt).toLocaleDateString('ru-RU')} ·{' '}
                    <span className={post.published ? 'text-emerald-500' : 'text-gray-400'}>
                      {post.published ? 'Опубликовано' : 'Черновик'}
                    </span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/posts/${post.id}`}
                    className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition"
                  >
                    Редактировать
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-xs border border-red-100 text-red-500 px-3 py-1.5 rounded-lg hover:bg-red-50 transition"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
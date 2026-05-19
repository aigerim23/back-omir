'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getPost } from '@/lib/api'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  content: string
  image?: string
  createdAt: string
}

export default function PostPage() {
  const { id } = useParams()
  const router = useRouter()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPost(Number(id))
      .then((res) => setPost(res.data))
      .catch(() => router.push('/news'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="h-8 bg-gray-200 rounded animate-pulse mb-4 w-2/3" />
        <div className="h-64 bg-gray-200 rounded animate-pulse mb-6" />
        <div className="space-y-3">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (!post) return null

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      <Link href="/news" className="text-emerald-600 text-sm hover:underline mb-6 inline-block">
        ← Назад к новостям
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-3">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(post.createdAt).toLocaleDateString('ru-RU', {
          day: 'numeric', month: 'long', year: 'numeric'
        })}
      </p>

      {post.image && (
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${post.image}`}
          alt={post.title}
          className="w-full h-72 object-cover rounded-xl mb-8"
        />
      )}

      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>

    </div>
  )
}
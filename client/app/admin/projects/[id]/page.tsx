'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getPost } from '@/lib/api'
import PostForm from '@/components/admin/PostForm'

export default function EditPostPage() {
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    getPost(Number(id))
      .then((res) => setPost(res.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="text-gray-400">Загрузка...</p>
  if (!post) return <p className="text-gray-400">Новость не найдена</p>

  return <PostForm initial={post} />
}
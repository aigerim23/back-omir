'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getProject } from '@/lib/api'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  image?: string
  goal: number
  collected: number
  active: boolean
}

export default function ProjectPage() {
  const { id } = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProject(Number(id))
      .then((res) => setProject(res.data))
      .catch(() => router.push('/projects'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="h-72 bg-gray-200 rounded-xl animate-pulse mb-6" />
        <div className="h-8 bg-gray-200 rounded animate-pulse mb-4 w-2/3" />
      </div>
    )
  }

  if (!project) return null

  const percent = Math.min(Math.round((project.collected / project.goal) * 100), 100)

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      <Link href="/projects" className="text-emerald-600 text-sm hover:underline mb-6 inline-block">
        ← Назад к проектам
      </Link>

      {project.image && (
        <img
          src={`http://localhost:5000${project.image}`}
          alt={project.title}
          className="w-full h-72 object-cover rounded-xl mb-8"
        />
      )}

      <div className="flex items-center gap-3 mb-3">
        <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
        {project.active ? (
          <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium">
            Активный
          </span>
        ) : (
          <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full font-medium">
            Завершён
          </span>
        )}
      </div>

      <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
        {project.description}
      </p>

      {/* Прогресс */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-3">
          <span>Собрано: {Number(project.collected).toLocaleString()} ₸</span>
          <span>Цель: {Number(project.goal).toLocaleString()} ₸</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
          <div
            className="bg-emerald-500 h-3 rounded-full transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-right text-sm text-emerald-600 font-semibold">{percent}%</p>
      </div>

    </div>
  )
}
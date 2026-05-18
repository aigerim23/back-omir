'use client'

import { useEffect, useState } from 'react'
import { getAllProjects, deleteProject } from '@/lib/api'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  active: boolean
  goal: number
  collected: number
  createdAt: string
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProjects = () => {
    getAllProjects()
      .then((res) => setProjects(res.data))
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchProjects() }, [])

  const handleDelete = async (id: number) => {
    if (!confirm('Удалить проект?')) return
    await deleteProject(id)
    fetchProjects()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Проекты</h1>
        <Link
          href="/admin/projects/new"
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
          {projects.length === 0 ? (
            <p className="text-center text-gray-400 py-10">Проектов нет</p>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between px-5 py-4 border-b border-gray-50 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-800 text-sm">{project.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {new Date(project.createdAt).toLocaleDateString('ru-RU')} ·{' '}
                    <span className={project.active ? 'text-emerald-500' : 'text-gray-400'}>
                      {project.active ? 'Активный' : 'Завершён'}
                    </span>
                    {' · '}
                    {Number(project.collected).toLocaleString()} / {Number(project.goal).toLocaleString()} ₸
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/projects/${project.id}`}
                    className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition"
                  >
                    Редактировать
                  </Link>
                  <button
                    onClick={() => handleDelete(project.id)}
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
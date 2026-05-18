'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createProject, updateProject, uploadImage } from '@/lib/api'

interface Props {
  initial?: {
    id?: number
    title: string
    description: string
    image?: string
    goal: number
    collected: number
    active: boolean
  }
}

export default function ProjectForm({ initial }: Props) {
  const router = useRouter()
  const isEdit = !!initial?.id

  const [title, setTitle] = useState(initial?.title || '')
  const [description, setDescription] = useState(initial?.description || '')
  const [image, setImage] = useState(initial?.image || '')
  const [goal, setGoal] = useState(initial?.goal || 0)
  const [collected, setCollected] = useState(initial?.collected || 0)
  const [active, setActive] = useState(initial?.active ?? true)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const res = await uploadImage(file)
      setImage(res.data.url)
    } catch {
      setError('Ошибка загрузки изображения')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (isEdit) {
        await updateProject(initial!.id!, { title, description, image, goal, collected, active })
      } else {
        await createProject({ title, description, image, goal })
      }
      router.push('/admin/projects')
    } catch {
      setError('Ошибка сохранения')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {isEdit ? 'Редактировать проект' : 'Новый проект'}
      </h1>

      {error && (
        <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-xl border border-gray-100">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Название</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Изображение</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="text-sm text-gray-500"
          />
          {uploading && <p className="text-xs text-gray-400 mt-1">Загрузка...</p>}
          {image && (
            <img
              src={`http://localhost:5000${image}`}
              className="mt-3 h-40 object-cover rounded-lg"
            />
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Цель сбора (₸)
            </label>
            <input
              type="number"
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
              min={0}
            />
          </div>

          {isEdit && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Собрано (₸)
              </label>
              <input
                type="number"
                value={collected}
                onChange={(e) => setCollected(Number(e.target.value))}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                min={0}
              />
            </div>
          )}
        </div>

        {isEdit && (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="active"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              className="accent-emerald-600"
            />
            <label htmlFor="active" className="text-sm text-gray-700">
              Активный проект
            </label>
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving || uploading}
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-700 transition disabled:opacity-50"
          >
            {saving ? 'Сохраняю...' : 'Сохранить'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/projects')}
            className="border border-gray-200 px-6 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition"
          >
            Отмена
          </button>
        </div>

      </form>
    </div>
  )
}
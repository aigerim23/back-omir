'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createProject, updateProject, uploadImage } from '@/lib/api';
import { UploadCloud, Trash2, Image, AlertCircle, CheckCircle2 } from 'lucide-react';

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
  const router = useRouter();
  const isEdit = !!initial?.id;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState(initial?.title || '')
  const [description, setDescription] = useState(initial?.description || '')
  const [image, setImage] = useState(initial?.image || '')
  const [goal, setGoal] = useState(initial?.goal || 0)
  const [collected, setCollected] = useState(initial?.collected || 0)
  const [active, setActive] = useState(initial?.active ?? true)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const getImageUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const res = await uploadImage(file);
      const uploadedUrl = res.data?.url || res.data;
      if (uploadedUrl) {
        setImage(uploadedUrl);
      } else {
        setError('Сервер не вернул URL изображения');
      }
    } catch {
      setError('Ошибка загрузки изображения');
    } finally {
      setUploading(false);
    }
  };

  const removeImage = () => {
    setImage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      // ИСПРАВЛЕНО: Теперь собранная сумма (collected) и статус (active) отправляются И при создании, И при редактировании
      const projectData = { 
        title, 
        description, 
        image, 
        goal: Number(goal), 
        collected: Number(collected), 
        active 
      };

      if (isEdit) {
        await updateProject(initial!.id!, projectData);
      } else {
        await createProject(projectData);
      }
      
      router.push('/admin/projects');
      router.refresh(); // Сбрасываем кэш Next.js, чтобы сумма на сайте обновилась мгновенно
    } catch {
      setError('Ошибка сохранения проекта');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl text-left">
      <h1 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">
        {isEdit ? 'Редактировать благотворительный проект' : 'Новый благотворительный проект'}
      </h1>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-2xl mb-5 flex items-center space-x-2.5">
          <AlertCircle size={18} className="flex-shrink-0" />
          <span className="font-medium">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50">

        {/* Название */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Название проекта</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Например: Проект «Генетический код жизни»"
            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#0091d2] focus:ring-2 focus:ring-[#0091d2]/10 bg-[#f8fafc] focus:bg-white transition-all"
            required
          />
        </div>

        {/* Описание */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Детальное описание</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            placeholder="Опишите медицинскую цель сбора, лаборатории, с которыми сотрудничаете, и важность помощи..."
            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#0091d2] focus:ring-2 focus:ring-[#0091d2]/10 bg-[#f8fafc] focus:bg-white transition-all resize-none"
            required
          />
        </div>

        {/* Загрузка фото с полной возможностью замены */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Тематическое изображение (Конфиденциально)</label>
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-[#f8fafc] flex flex-col items-center justify-center relative hover:border-[#0091d2]/40 transition-colors">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImage}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              disabled={uploading || !!image}
            />
            
            {!image ? (
              <div className="text-center space-y-2 pointer-events-none">
                <div className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 inline-block shadow-sm">
                  <UploadCloud size={24} />
                </div>
                <div className="text-xs font-bold text-slate-600">
                  {uploading ? 'Загрузка файла...' : 'Нажмите для выбора обложки проекта'}
                </div>
                <div className="text-[10px] text-slate-400 font-medium">PNG, JPG, WEBP до 5MB</div>
              </div>
            ) : (
              <div className="w-full relative z-10 text-center">
                <div className="relative inline-block rounded-xl overflow-hidden border border-slate-200 bg-white max-w-full">
                  <img
                    src={getImageUrl(image)}
                    alt="Превью проекта"
                    className="h-44 max-w-full object-contain mx-auto"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-colors"
                    title="Заменить изображение"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <p className="text-[11px] text-emerald-600 font-bold mt-2 flex items-center justify-center gap-1">
                  <Image size={12} /> Изображение успешно прикреплено
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Финансы (Суммы теперь всегда доступны для ручной корректировки) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Цель сбора (₸)</label>
            <input
              type="number"
              value={goal || ''}
              onChange={(e) => setGoal(Number(e.target.value))}
              placeholder="0"
              className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#0091d2] focus:ring-2 focus:ring-[#0091d2]/10 bg-[#f8fafc] focus:bg-white transition-all"
              required
              min={0}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Уже собрано (₸)</label>
            <input
              type="number"
              value={collected || ''}
              onChange={(e) => setCollected(Number(e.target.value))}
              placeholder="0"
              className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#0091d2] focus:ring-2 focus:ring-[#0091d2]/10 bg-[#f8fafc] focus:bg-white transition-all"
              min={0}
            />
          </div>
        </div>

        {/* Статус проекта */}
        <div className="flex items-center gap-3 bg-[#f8fafc] border border-slate-100 p-4 rounded-xl w-fit">
          <input
            type="checkbox"
            id="active"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-[#0091d2] focus:ring-[#0091d2] accent-[#0091d2]"
          />
          <label htmlFor="active" className="text-sm font-bold text-slate-700 cursor-pointer select-none">
            Проект активен (на сайте открыт прием пожертвований)
          </label>
        </div>

        {/* Кнопки действий */}
        <div className="flex gap-3 pt-3 border-t border-slate-100">
          <button
            type="submit"
            disabled={saving || uploading}
            className="bg-[#0091d2] hover:bg-[#007cb5] text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg shadow-[#0091d2]/10 transition disabled:opacity-50"
          >
            {saving ? 'Сохранение...' : isEdit ? 'Обновить данные проекта' : 'Запустить новый проект'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/projects')}
            className="border border-slate-200 bg-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition"
          >
            Отмена
          </button>
        </div>

      </form>
    </div>
  );
}

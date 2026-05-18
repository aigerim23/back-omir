'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPost, updatePost, uploadImage } from '@/lib/api';
import { Image, Trash2, UploadCloud, AlertCircle } from 'lucide-react';

interface Props {
  initial?: {
    id?: number
    title: string
    content: string
    image?: string
    published: boolean
  }
}

export default function PostForm({ initial }: Props) {
  const router = useRouter();
  const isEdit = !!initial?.id;
  const fileInputRef = useRef<HTMLInputElement>(null); // Реф для управления инпутом

  const [title, setTitle] = useState(initial?.title || '');
  const [content, setContent] = useState(initial?.content || '');
  const [image, setImage] = useState(initial?.image || '');
  const [published, setPublished] = useState(initial?.published || false)
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Универсальная функция для проверки путей изображений
  const getImageUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `http://localhost:5000${path}`;
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploading(true);
    setError('');
    
    try {
      const res = await uploadImage(file);
      // Убедитесь, что бэкенд возвращает корректное поле (res.data.url или res.url)
      const uploadedUrl = res.data?.url || res.url || res.data;
      if (uploadedUrl) {
        setImage(uploadedUrl);
      } else {
        setError('Сервер не вернул URL изображения');
      }
    } catch (err) {
      setError('Ошибка при загрузке файла на сервер');
    } finally {
      setUploading(false);
    }
  };

  // ИСПРАВЛЕНО: Функция для удаления и возможности полной замены фото
  const removeImage = () => {
    setImage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Полностью сбрасываем нативный инпут в DOM
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      if (isEdit) {
        await updatePost(initial!.id!, { title, content, image, published });
      } else {
        await createPost({ title, content, image, published });
      }
      router.push('/admin/posts');
      router.refresh(); // Обновляем данные на странице списка постов
    } catch {
      setError('Ошибка при сохранении публикации');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl text-left">
      
      {/* Заголовок */}
      <h1 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">
        {isEdit ? 'Редактирование публикации' : 'Создание новой новости'}
      </h1>

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-2xl mb-5 flex items-center space-x-2.5">
          <AlertCircle size={18} className="flex-shrink-0" />
          <span className="font-medium">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50">

        {/* Заголовок */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Заголовок новости</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Введите название новости или статьи..."
            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#0091d2] focus:ring-2 focus:ring-[#0091d2]/10 bg-[#f8fafc] focus:bg-white transition-all"
            required
          />
        </div>

        {/* Текст */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Текст публикации</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            placeholder="Напишите здесь содержание вашей статьи..."
            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#0091d2] focus:ring-2 focus:ring-[#0091d2]/10 bg-[#f8fafc] focus:bg-white transition-all resize-none"
            required
          />
        </div>

        {/* Изображение */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Обложка новости</label>
          
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
                  {uploading ? 'Загрузка файла...' : 'Нажмите для выбора или перетащите фото'}
                </div>
                <div className="text-[10px] text-slate-400 font-medium">PNG, JPG, WEBP до 5MB</div>
              </div>
            ) : (
              <div className="w-full relative z-10 text-center">
                <div className="relative inline-block rounded-xl overflow-hidden border border-slate-200 bg-white max-w-full">
                  <img
                    src={getImageUrl(image)}
                    alt="Превью"
                    className="h-44 max-w-full object-contain mx-auto"
                  />
                  {/* Кнопка мгновенного удаления для перезаписи */}
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-colors"
                    title="Удалить и выбрать другое фото"
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

        {/* Статус публикации */}
        <div className="flex items-center gap-3 bg-[#f8fafc] border border-slate-100 p-4 rounded-xl w-fit">
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-[#0091d2] focus:ring-[#0091d2] accent-[#0091d2]"
          />
          <label htmlFor="published" className="text-sm font-bold text-slate-700 cursor-pointer select-none">
            Опубликовать новость на сайте сразу
          </label>
        </div>

        {/* Кнопки управления */}
        <div className="flex gap-3 pt-3 border-t border-slate-100">
          <button
            type="submit"
            disabled={saving || uploading}
            className="bg-[#0091d2] hover:bg-[#007cb5] text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider shadow-lg shadow-[#0091d2]/10 transition disabled:opacity-50 flex items-center space-x-2"
          >
            <span>{saving ? 'Сохранение...' : isEdit ? 'Обновить новость' : 'Создать статью'}</span>
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/posts')}
            className="border border-slate-200 bg-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition"
          >
            Отмена
          </button>
        </div>

      </form>
    </div>
  );
}

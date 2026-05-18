'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProject } from '@/lib/api'; // ИСПРАВЛЕНО: Импортируем получение проекта вместо новостей
import ProjectForm from '@/components/admin/ProjectForm'; // ИСПРАВЛЕНО: Подключаем форму проектов вместо новостей
export const dynamic = 'force-dynamic'; // Отключает кэш этой страницы в Vercel

export default function EditProjectPage() {
  const params = useParams();
  // Безопасное извлечение ID проекта из параметров маршрута
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    
    setLoading(true);
    setError(false);

    // ИСПРАВЛЕНО: Запрашиваем данные проекта по его ID
    getProject(Number(id))
      .then((res) => {
        // Проверяем структуру ответа сервера (res.data или сам res)
        setProject(res.data || res);
      })
      .catch((err) => {
        console.error('Ошибка при получении проекта:', err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-left">
        <p className="text-sm font-bold text-slate-400 tracking-wider uppercase animate-pulse">
          Загрузка данных проекта...
        </p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="py-20 text-left space-y-4">
        <p className="text-sm font-bold text-red-500 tracking-wider uppercase">
          Благотворительный проект не найден
        </p>
        <p className="text-xs text-slate-500 font-medium max-w-sm">
          Возможно, этот сбор был удален или указан неверный идентификатор в адресной строке.
        </p>
      </div>
    );
  }

  // ИСПРАВЛЕНО: Передаем данные проекта в форму проектов (ProjectForm)
  return <ProjectForm initial={project} />;
}

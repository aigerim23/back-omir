import Link from 'next/link'

interface Props {
  id: number
  title: string
  description: string
  image?: string
  goal: number
  collected: number
}

export default function ProjectCard({ id, title, description, image, goal, collected }: Props) {
  const percent = Math.min(Math.round((collected / goal) * 100), 100)

  return (
    <Link href={`/projects/${id}`}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition cursor-pointer">
        {image ? (
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
            alt={title}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-emerald-50 flex items-center justify-center text-4xl">
            🌱
          </div>
        )}
        <div className="p-5">
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{description}</p>

          {/* Прогресс бар */}
          <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
            <div
              className="bg-emerald-500 h-2 rounded-full transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Собрано: {Number(collected).toLocaleString()} ₸</span>
            <span>{percent}%</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Цель: {Number(goal).toLocaleString()} ₸
          </p>
        </div>
      </div>
    </Link>
  )
}
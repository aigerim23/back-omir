import Link from 'next/link'

interface Props {
  id: number
  title: string
  content: string
  image?: string
  createdAt: string
}

export default function PostCard({ id, title, content, image, createdAt }: Props) {
  return (
    <Link href={`/news/${id}`}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition cursor-pointer">
        {image && (
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-5">
          <p className="text-xs text-gray-400 mb-2">
            {new Date(createdAt).toLocaleDateString('ru-RU')}
          </p>
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-500 line-clamp-3">{content}</p>
          <span className="mt-3 inline-block text-emerald-600 text-sm font-medium">
            Читать далее →
          </span>
        </div>
      </div>
    </Link>
  )
}
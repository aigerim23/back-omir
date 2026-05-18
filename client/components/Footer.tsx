export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-white font-bold text-lg mb-3">БлагоФонд</h3>
          <p className="text-sm leading-relaxed">
            Благотворительный фонд помощи людям, которые нуждаются в поддержке.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Навигация</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/projects" className="hover:text-white transition">Проекты</a></li>
            <li><a href="/news" className="hover:text-white transition">Новости</a></li>
            <li><a href="/about" className="hover:text-white transition">О нас</a></li>
            <li><a href="/contact" className="hover:text-white transition">Контакты</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Контакты</h3>
          <ul className="space-y-2 text-sm">
            <li>📧 info@charity.kz</li>
            <li>📞 +7 (700) 000-00-00</li>
            <li>📍 Алматы, Казахстан</li>
          </ul>
        </div>

      </div>
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
        © 2025 БлагоФонд. Все права защищены.
      </div>
    </footer>
  )
}
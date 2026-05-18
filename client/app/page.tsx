import Link from 'next/link'

export default function HomePage() {
  return (
    <div>

      {/* Hero секция */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Вместе мы можем<br />изменить жизни
          </h1>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Наш фонд помогает людям, которые нуждаются в поддержке.
            Каждый вклад имеет значение.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/projects"
              className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-xl hover:bg-emerald-50 transition"
            >
              Наши проекты
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: '500+', label: 'Людей получили помощь' },
            { number: '50+', label: 'Завершённых проектов' },
            { number: '1000+', label: 'Волонтёров' },
            { number: '5 лет', label: 'Работы фонда' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-xl bg-emerald-50">
              <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Как помочь */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Как вы можете помочь
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '💰',
                title: 'Финансовая помощь',
                desc: 'Пожертвуйте любую сумму — каждый тенге идёт на помощь нуждающимся.'
              },
              {
                icon: '🤝',
                title: 'Волонтёрство',
                desc: 'Присоединяйтесь к нашей команде волонтёров и помогайте напрямую.'
              },
              {
                icon: '📣',
                title: 'Распространение',
                desc: 'Расскажите о нас друзьям и близким — это тоже огромная помощь.'
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-emerald-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Готовы помочь?</h2>
          <p className="text-emerald-100 mb-6">
            Посмотрите наши текущие проекты и выберите тот, который близок вам.
          </p>
          <Link
            href="/projects"
            className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-xl hover:bg-emerald-50 transition inline-block"
          >
            Смотреть проекты
          </Link>
        </div>
      </section>

    </div>
  )
}
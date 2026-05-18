'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Users, 
  Megaphone, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp 
} from 'lucide-react';

export default function HomePage() {
  return (
    // ИЗМЕНЕНО: Добавлены стили для легкого зацикленного орнамента на весь фон страницы
    <div 
      className="min-h-screen bg-[#f8fafc] pt-20 overflow-hidden text-slate-800 relative"
      style={{
        backgroundImage: "url('/pattern.webp')",
        backgroundRepeat: "repeat",    // Орнамент циклично повторяется во все стороны
        backgroundSize: "100px auto",   // ТУТ РАЗМЕР: 80px делает узор мелким и аккуратным
        backgroundAttachment: "fixed"  // Орнамент зафиксирован, пока страница скроллится (эффект глубины)
      }}
    >
      
      {/* Слой-затемнитель, чтобы орнамент был едва заметным (ультра-легким) */}
      <div className="absolute inset-0 bg-white/94 pointer-events-none z-0" />

      {/* Обертка для контента, чтобы он был поверх фона */}
      <div className="relative z-10">

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(1deg); }
          }
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(40px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 40px) scale(0.95); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-blob { animation: blob 12s infinite alternate; }
          .animation-delay-2000 { animation-delay: 3s; }
        `}} />

        {/* 1. HERO СЕКЦИЯ */}
        <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-[#0091d2]/15 rounded-full filter blur-3xl opacity-70 mix-blend-multiply animate-blob" />
          <div className="absolute top-1/3 right-1/12 w-96 h-96 bg-[#d4af37]/10 rounded-full filter blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-left space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#00a5e3]/30 shadow-sm">
                <Sparkles size={14} className="text-[#b8962e]" />
                <span className="text-[11px] font-bold text-[#0091d2] tracking-wider uppercase">Общественный Фонд «Өмір Сыйы»</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.1] tracking-tight">
                Вместе мы можем <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0091d2] to-[#b8962e]">
                  изменить жизни
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                Мы протягиваем руку помощи тем, кто оказался в трудной ситуации. 
                Каждое ваше действие, слово или вклад возвращают людям веру в будущее.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/projects"
                  className="group flex items-center space-x-2 bg-[#0091d2] hover:bg-[#007cb5] text-white font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-2xl shadow-lg shadow-[#0091d2]/20 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Наши проекты</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-slate-700 border border-slate-200 font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-2xl shadow-sm hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center items-center lg:pl-6">
              <div className="relative w-full max-w-[460px] aspect-square rounded-[3rem] bg-gradient-to-tr from-[#0091d2]/30 to-[#00a5e3]/20 p-3 shadow-xl animate-float">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white relative border border-white">
                  <img 
                    src="/hero-charity.jpg" 
                    alt="Благотворительность" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>

                <div className="absolute -left-6 bottom-16 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center space-x-3 max-w-[200px]">
                  <div className="p-2.5 rounded-xl bg-[#0091d2] text-white">
                    <Heart size={20} fill="white" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-[#d4af37]">Надежда</div>
                    <div className="text-[10px] text-slate-300 font-medium">В каждом сердце</div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* 2. СЕКЦИЯ СТАТИСТИКИ */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-slate-100 p-8 lg:p-12 shadow-md grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
            {[
              { number: '500+', label: 'Людей получили помощь', color: 'text-[#0091d2]' },
              { number: '50+', label: 'Завершённых проектов', color: 'text-[#b8962e]' },
              { number: '1000+', label: 'Волонтёров фонда', color: 'text-teal-600' },
              { number: '5 лет', label: 'Успешной работы', color: 'text-indigo-600' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2 relative group">
                <div className={`text-3xl sm:text-4xl font-black tracking-tight group-hover:scale-105 transition-transform duration-300 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-bold tracking-wide max-w-[150px] mx-auto">
                  {stat.label}
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-slate-200/50" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 3. СЕКЦИЯ: КАК ПОМОЧЬ */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Как вы можете помочь
            </h2>
            <p className="text-sm sm:text-base text-[#0091d2] font-bold tracking-wide max-w-md mx-auto uppercase">
              Три простых способа внести свой вклад
            </p>
            <div className="w-16 h-1 bg-[#d4af37] rounded-full mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                color: 'text-[#0091d2] bg-[#0091d2]/10',
                title: 'Финансовая помощь',
                desc: 'Пожертвуйте любую посильную сумму. Каждый тенге направляется строго на закупку необходимых вещей, медикаментов или оборудования для нуждающихся.'
              },
              {
                icon: Users,
                color: 'text-[#b8962e] bg-[#d4af37]/10',
                title: 'Волонтёрство',
                desc: 'Станьте частью нашей сильной команды. Помогайте в организации мероприятий, развозите помощь или делитесь своими профессиональными навыками.'
              },
              {
                icon: Megaphone,
                color: 'text-cyan-600 bg-cyan-50',
                title: 'Информационная поддержка',
                desc: 'Расскажите о нашем поиске друзьям, делитесь публикациями. Чем больше людей знает о нас, тем больше жизней мы спасем вместе.'
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="space-y-5 text-left">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-6 ${item.color}`}>
                    <item.icon size={26} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. СЕКЦИЯ: CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#1e40af] via-[#0091d2] to-[#007cb5] p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl border border-white/10">
            
            {/* 1 большая картинка на весь блок СТА */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: "url('/pattern.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#d4af37]/15 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full filter blur-xl pointer-events-none" />
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full filter blur-xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-[#d4af37] drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                Готовы сделать доброе дело?
              </h2>
              <p className="text-sm sm:text-base text-cyan-50 font-medium max-w-md mx-auto opacity-95 leading-relaxed">
                Ознакомьтесь с нашими активными благотворительными программами и выберите проект, которому вы хотите помочь прямо сейчас.
              </p>
              <div className="pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center space-x-2 bg-white text-[#0091d2] hover:text-[#b8962e] font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-2xl shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-300 transform hover:-translate-y-0.5 border border-white"
                >
                  <CheckCircle2 size={16} strokeWidth={2.5} />
                  <span>Смотреть проекты</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Target, 
  Calendar, 
  Handshake, 
  Dna, 
  ShieldCheck, 
  Users2, 
  Award, 
  CheckCircle2,
  ChevronRight,
  FileText,
  ExternalLink
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div 
      className="min-h-screen bg-[#f4f8fa] pt-28 pb-20 overflow-hidden text-slate-800 relative bg-ornament"
      style={{
        backgroundImage: "url('/pattern.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "75px auto",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Кристально-светлая подложка для читаемости орнамента */}
      <div className="absolute inset-0 bg-white/93 pointer-events-none z-0 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. ГЛАВНЫЙ БАННЕР И МИССИЯ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#00a5e3]/30 shadow-sm">
              <Sparkles size={13} className="text-[#b8962e]" />
              <span className="text-[10px] font-extrabold text-[#0091d2] tracking-widest uppercase">Организация с высокой миссией</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.05]">
              Общественный фонд <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0091d2] via-[#b8962e] to-[#0091d2] bg-[length:200%_auto] font-black">
                «Өмір-Сыйла»
              </span>
            </h1>
            
            <div className="p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white shadow-xl shadow-slate-200/50 space-y-4 relative overflow-hidden group hover:border-[#0091d2]/30 transition-all duration-500">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#0091d2]/10 to-transparent rounded-full filter blur-2xl group-hover:scale-110 transition-transform duration-500" />
              <div className="flex items-center space-x-2.5 text-[#0091d2]">
                <div className="p-2 rounded-xl bg-[#0091d2]/10">
                  <Target size={22} strokeWidth={2.5} />
                </div>
                <h2 className="text-xs font-black uppercase tracking-widest">Наша миссия и философия</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Фонд создан для поддержки детей с тяжелыми заболеваниями почек и их семей. Наша цель — не просто оказывать адресную помощь, но и открыто говорить о проблемах, с которыми они сталкиваются. Мы стремимся к тому, чтобы каждый ребенок, независимо от диагноза, имел полноценное детство: мог развиваться, учиться, заниматься спортом и чувствовать поддержку общества.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-[#0091d2]/10 rounded-full filter blur-3xl -z-10 animate-blob" />
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[2.8rem] bg-gradient-to-tr from-[#0091d2]/40 via-white/40 to-[#00a5e3]/30 p-2.5 shadow-2xl border border-white/60">
              <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-white border border-white shadow-inner relative">
                <img 
                  src="/logobg.png" 
                  alt="Современная медицина" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0091d2]/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. КЛЮЧЕВЫЕ ФАКТЫ (Интерактивные анимации возвращены) */}
        <section className="space-y-6">
          <div className="text-left space-y-1">
            <h3 className="text-[10px] font-black text-[#0091d2] tracking-widest uppercase">Хронология и легитимность</h3>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Важные вехи фонда</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-md rounded-[2.2rem] border border-white p-7 flex items-start space-x-5 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-[#0091d2]/5 hover:border-[#0091d2]/20 hover:-translate-y-1 transition-all duration-300 group text-left">
              <div className="p-4 rounded-2xl bg-[#0091d2]/10 text-[#0091d2] flex-shrink-0 transition-all duration-500 group-hover:bg-[#0091d2] group-hover:text-white group-hover:rotate-3">
                <Calendar size={24} strokeWidth={2.2} />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Официальная регистрация</span>
                <p className="text-xl font-black text-slate-900">9 ноября 2022 года</p>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">Фонд официально зарегистрирован в городе Алматы, заложив прочный правовой фундамент для долгосрочной прозрачной работы.</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-[2.2rem] border border-white p-7 flex items-start space-x-5 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-[#b8962e]/5 hover:border-[#d4af37]/30 hover:-translate-y-1 transition-all duration-300 group text-left">
              <div className="p-4 rounded-2xl bg-[#d4af37]/10 text-[#b8962e] flex-shrink-0 transition-all duration-500 group-hover:bg-[#d4af37] group-hover:text-slate-950 group-hover:rotate-3">
                <Handshake size={24} strokeWidth={2.2} />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Международный статус</span>
                <p className="text-xl font-black text-slate-900">Членство в СПО Евразии</p>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">С 12 сентября 2023 года фонд входит в состав ОЮЛ «Союз пациентских организаций Евразии» для международной защиты прав пациентов.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ И ТИПЫ ДИАГНОСТИК С КАРТИНКАМИ */}
        <section className="space-y-8">
          <div className="text-left space-y-1">
            <h3 className="text-[10px] font-black text-[#0091d2] tracking-widest uppercase">Медицинский авангард</h3>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Направления нашей работы</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Генетический блок (Крупный, на 2 колонки) */}
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-white p-8 shadow-xl shadow-slate-200/60 space-y-6 text-left relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-gradient-to-tr from-[#0091d2]/10 to-transparent rounded-full filter blur-2xl pointer-events-none" />
              
              <div className="flex items-center space-x-3.5 border-b border-slate-100 pb-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#0091d2] to-[#00a5e3] text-white shadow-md shadow-[#0091d2]/20">
                  <Dna size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Дорогостоящая молекулярная диагностика</h3>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">Высокотехнологичные генетические исследования</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Мы обеспечиваем семьям доступ к передовым генетическим исследованиям, которые критически важны для постановки точного диагноза и выбора верного лечения. Фонд гордится сотрудничеством с **Центром молекулярной медицины** и ведущей международной лабораторией **3Billion (Южная Корея)**.
              </p>

              {/* Типы диагностик крупными карточками с КАРТИНКАМИ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  {
                    name: 'Полноэкзомное секвенирование (WES)',
                    img: '/wes.png'
                  },
                  {
                    name: 'Полногеномное секвенирование (WGS)',
                    img: '/123.jpeg'
                  },
                  {
                    name: 'Таргетные генетические панели',
                    img: 'gen-8-scaled.jpg'
                  }
                ].map((test, index) => (
                  <div key={index} className="rounded-2xl border border-slate-100 bg-[#f8fafc] overflow-hidden shadow-sm flex flex-col group hover:border-[#0091d2]/30 transition-all duration-300">
                    <div className="w-full h-24 relative overflow-hidden bg-slate-200">
                      <img 
                        src={test.img} 
                        alt={test.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#0091d2]/5" />
                    </div>
                    <div className="p-3 text-left flex-grow flex items-center">
                      <span className="text-[11px] sm:text-xs font-black text-slate-950 leading-tight tracking-wide group-hover:text-[#0091d2] transition-colors">
                        {test.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Карточка системных инициатив */}
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden border border-slate-800">
              <div className="space-y-5">
                <div className="flex items-center space-x-2.5 text-[#d4af37]">
                  <Award size={20} strokeWidth={2.2} />
                  <h3 className="text-xs font-black uppercase tracking-widest">Системные программы</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    { label: 'Медицинская помощь', desc: 'Подготовка детей к трансплантации почек.' },
                    { label: 'Реабилитация', desc: 'Восстановление до и после пересадки органов.' },
                    { label: 'Поддержка семей', desc: 'Психологическая и социальная помощь родителям.' },
                    { label: 'Гос. инициативы', desc: 'Продвижение доступных лабораторий в РК.' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-left">
                      <ChevronRight size={14} className="text-[#00a5e3] mt-0.5 flex-shrink-0" />
                      <div className="space-y-0.5">
                        <span className="text-xs font-black text-white block tracking-wide">{item.label}</span>
                        <span className="text-[11px] text-slate-400 font-medium block leading-tight">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 5. РУКОВОДСТВО ФОНДА (Исходная версия с крупным шрифтом) */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-black text-[#0091d2] tracking-widest uppercase justify-center">
              <Users2 size={15} />
              <span>Органы управления</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Руководство фонда</h2>
            <div className="w-12 h-1 bg-[#d4af37] rounded-full mx-auto mt-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Руководитель */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-white p-6 sm:p-8 shadow-xl shadow-slate-100/70 text-left flex flex-col justify-between hover:border-[#0091d2]/30 transition-all duration-300 group">
              <div className="space-y-3">
                <span className="text-[9px] font-black text-[#0091d2] uppercase tracking-widest block bg-[#0091d2]/5 px-2.5 py-1 rounded-md w-fit">Руководитель фонда</span>
                <p className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#0091d2] transition-colors">
                  Исабеков <br /> Аманжол Асилбаевич
                </p>
              </div>
            </div>

            {/* Учредители */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-white p-6 sm:p-8 shadow-xl shadow-slate-100/70 text-left flex flex-col justify-between hover:border-[#0091d2]/30 transition-all duration-300 group">
              <div className="space-y-3">
                <span className="text-[9px] font-black text-[#0091d2] uppercase tracking-widest block bg-[#0091d2]/5 px-2.5 py-1 rounded-md w-fit">Учредители</span>
                <ul className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight space-y-2 leading-none pt-1">
                  <li className="hover:text-[#0091d2] transition-colors">• Исабеков А. А.</li>
                  <li className="hover:text-[#0091d2] transition-colors">• Өтебаев Ы. Ж.</li>
                </ul>
              </div>
            </div>

            {/* Попечительский совет */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-white p-6 sm:p-8 shadow-xl shadow-slate-100/70 text-left flex flex-col justify-between hover:border-[#d4af37]/30 transition-all duration-300 group">
              <div className="space-y-3">
                <span className="text-[9px] font-black text-[#b8962e] uppercase tracking-widest block bg-[#d4af37]/10 px-2.5 py-1 rounded-md w-fit">Попечительский совет</span>
                <ul className="text-base sm:text-lg font-black text-slate-700 space-y-1.5 pt-1">
                  <li className="flex items-center space-x-2 text-slate-800"><div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" /> <span>Садыкова М. Н.</span></li>
                  <li className="flex items-center space-x-2 text-slate-800"><div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" /> <span>Алтынбекова М. Р.</span></li>
                  <li className="flex items-center space-x-2 text-slate-800"><div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" /> <span>Мамедова Т. М.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. БЛОК С ГРАМОТАМИ И СЕРТИФИКАТАМИ */}
        <section className="space-y-8">
          <div className="text-left space-y-1">
            <div className="flex items-center space-x-2 text-[#b8962e]">
              <Award size={18} strokeWidth={2.5} />
              <h3 className="text-[10px] font-black tracking-widest uppercase">Признание и прозрачность</h3>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Документы и благодарственные письма</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Благодарственное письмо', desc: 'От союза организаций' },
              { title: 'Сертификат членства', desc: 'СПО Евразии 2023' },
              { title: 'Официальное свидетельство', desc: 'Регистрация фонда' },
              { title: 'Почетная грамота', desc: 'За системную помощь' },
            ].map((doc, idx) => (
              <div 
                key={idx} 
                className="bg-white/60 backdrop-blur-md border border-white rounded-3xl p-4 flex flex-col justify-between aspect-[3/4] shadow-md hover:shadow-xl hover:border-[#0091d2]/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="w-full h-[75%] rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center p-3 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/50">
                  {/* ТУТ БУДЕТ ВАША КАРТИНКА ГРАМОТЫ: просто раскомментируйте код ниже, когда загрузите фото */}
                  {/* 
                  <img 
                    src={`/diploma-${idx + 1}.jpg`} 
                    alt={doc.title} 
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                  /> 
                  */}
                  <FileText size={36} strokeWidth={1.5} className="text-slate-300 group-hover:text-[#0091d2] transition-colors duration-300" />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-2">Место для скана</span>
                  
                  <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={12} className="text-[#0091d2]" />
                  </div>
                </div>

                <div className="pt-3 text-left">
                  <p className="text-xs font-black text-slate-900 leading-tight tracking-wide truncate group-hover:text-[#0091d2] transition-colors">
                    {doc.title}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 truncate">
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. СТА-БЛОК (Идеальный Сине-Голубой Финал) */}
        <section className="pt-4">
          <div className="relative rounded-[2.8rem] bg-gradient-to-br from-[#1e40af] via-[#0091d2] to-[#007cb5] p-10 sm:p-14 text-center overflow-hidden shadow-2xl border border-white/10 shadow-[#0091d2]/20">
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: "url('/pattern.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-[#d4af37]/20 rounded-full filter blur-3xl pointer-events-none animate-pulse" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-[#d4af37] drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                Помогите подарить полноценное детство
              </h2>
              <p className="text-sm text-cyan-50 font-medium max-w-md mx-auto opacity-95 leading-relaxed">
                Каждый ваш вклад помогает оплатить сложнейшие молекулярные тесты и открывает детям путь к точному лечению и выздоровлению.
              </p>
              <div className="pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center space-x-2 bg-white text-[#0091d2] hover:text-[#b8962e] font-black text-xs tracking-wider uppercase px-9 py-4 rounded-2xl shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-300 transform hover:-translate-y-0.5 border border-white"
                >
                  <CheckCircle2 size={16} strokeWidth={2.5} />
                  <span>Поддержать наши проекты</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

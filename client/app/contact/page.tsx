'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

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
      <div className="absolute inset-0 bg-white/93 pointer-events-none z-0 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Заголовок страницы */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#00a5e3]/30 shadow-sm">
            <Sparkles size={13} className="text-[#b8962e]" />
            <span className="text-[10px] font-extrabold text-[#0091d2] tracking-widest uppercase">Мы всегда на связи</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Контакты фонда <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0091d2] to-[#b8962e]">«Өмір-Сыйла»</span>
          </h1>
          <div className="w-12 h-1 bg-[#d4af37] rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Телефон */}
            <a 
              href="tel:+77014594916" 
              className="bg-white/80 backdrop-blur-md rounded-3xl border border-white p-6 flex items-center space-x-5 shadow-lg shadow-slate-100/70 hover:border-[#0091d2]/30 hover:-translate-y-1 transition-all duration-300 group block"
            >
              <div className="p-4 rounded-2xl bg-[#0091d2]/10 text-[#0091d2] flex-shrink-0 transition-all duration-300 group-hover:bg-[#0091d2] group-hover:text-white group-hover:rotate-6">
                <Phone size={24} strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Telephone руководителя</span>
                <p className="text-lg font-black text-slate-900 group-hover:text-[#0091d2] transition-colors mt-0.5">+7 (701) 459-49-16</p>
                <p className="text-xs text-slate-500 font-medium">Звонки и сообщения (WhatsApp)</p>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:amanzholissabekov@gmail.com" 
              className="bg-white/80 backdrop-blur-md rounded-3xl border border-white p-6 flex items-center space-x-5 shadow-lg shadow-slate-100/70 hover:border-[#0091d2]/30 hover:-translate-y-1 transition-all duration-300 group block"
            >
              <div className="p-4 rounded-2xl bg-[#0091d2]/10 text-[#0091d2] flex-shrink-0 transition-all duration-300 group-hover:bg-[#0091d2] group-hover:text-white group-hover:rotate-6">
                <Mail size={24} strokeWidth={2.2} />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Электронная почта</span>
                <p className="text-lg font-black text-slate-900 group-hover:text-[#0091d2] transition-colors mt-0.5 truncate">amanzholissabekov@gmail.com</p>
                <p className="text-xs text-slate-500 font-medium">Для официальных запросов и писем</p>
              </div>
            </a>

            {/* Instagram (ИСПРАВЛЕНО: Чистый SVG вместо импорта из lucide) */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/80 backdrop-blur-md rounded-3xl border border-white p-6 flex items-center space-x-5 shadow-lg shadow-slate-100/70 hover:border-[#d4af37]/40 hover:-translate-y-1 transition-all duration-300 group block"
            >
              <div className="p-4 rounded-2xl bg-[#d4af37]/10 text-[#b8962e] flex-shrink-0 transition-all duration-300 group-hover:bg-[#d4af37] group-hover:text-slate-950 group-hover:rotate-6 flex items-center justify-center w-14 h-14">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Социальные сети</span>
                <p className="text-lg font-black text-slate-900 group-hover:text-[#b8962e] transition-colors mt-0.5">@fond_omir_syila</p>
                <p className="text-xs text-slate-500 font-medium">Следите за нашими отчетами в Instagram</p>
              </div>
            </a>

            {/* Локация фонда */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white p-6 flex items-center space-x-5 shadow-lg shadow-slate-100/70">
              <div className="p-4 rounded-2xl bg-slate-100 text-slate-600 flex-shrink-0">
                <MapPin size={24} strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Город</span>
                <p className="text-lg font-black text-slate-900 mt-0.5">Алматы, Казахстан</p>
                <p className="text-xs text-slate-500 font-medium">Регистрация и основная деятельность</p>
              </div>
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-white p-8 sm:p-10 shadow-xl shadow-slate-200/60 relative overflow-hidden text-left">
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#0091d2]/5 rounded-full filter blur-2xl pointer-events-none" />
            
            <div className="space-y-2 border-b border-slate-100 pb-4 mb-6">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Напишите нам напрямую</h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">Если у вас возникли вопросы, предложения по сотрудничеству или вам нужна консультация — заполните форму ниже.</p>
            </div>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100 shadow-md">
                  <CheckCircle2 size={32} strokeWidth={2.5} />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-black text-slate-900">Сообщение успешно отправлено!</p>
                  <p className="text-xs text-slate-500 font-medium max-w-sm">Спасибо за обращение. Администрация фонда свяжется с вами по указанному email в ближайшее время.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Ваше имя</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Александр"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-[#f8fafc] text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0091d2] focus:bg-white transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Ваш Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="example@mail.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-[#f8fafc] text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0091d2] focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">Текст сообщения</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Опишите ваше предложение или вопрос..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-[#f8fafc] text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0091d2] focus:bg-white transition-all duration-300 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0091d2] to-[#007cb5] hover:from-[#007cb5] hover:to-[#006fa3] text-white font-black text-xs tracking-wider uppercase py-4 rounded-2xl shadow-xl shadow-[#0091d2]/10 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <Send size={15} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Отправить сообщение</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

        {/* НИЖНИЙ БЛОК */}
        <section className="bg-slate-900 text-white rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-left relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-[#d4af37]/5 rounded-full filter blur-lg" />
          <div className="flex items-center space-x-4">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[#d4af37]">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#00a5e3]">График обработки обращений</h3>
              <p className="text-base font-bold text-white mt-0.5">Понедельник — Пятница, с 09:00 до 18:00</p>
            </div>
          </div>
          <div className="text-xs font-bold text-slate-400 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl sm:self-center">
            Время Алматы (GMT+5)
          </div>
        </section>

      </div>
    </div>
  );
}

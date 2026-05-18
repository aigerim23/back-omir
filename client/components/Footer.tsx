'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Проекты', path: '/projects' },
    { name: 'Новости', path: '/news' },
    { name: 'О нас', path: '/about' },
    { name: 'Контакты', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0091d2]/5 border-t border-[#00a5e3]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

        {/* О фонде */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-12 h-12 relative flex-shrink-0 bg-white rounded-full p-1 shadow-sm border border-[#00a5e3]/20">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain rounded-full" 
              />
            </div>
            <div>
              <span className="font-bold tracking-tight text-[#0091d2] block text-base leading-none">
                Өмір Сыйы
              </span>
              <span className="text-[9px] text-[#b8962e] font-bold tracking-widest block uppercase mt-0.5">
                Общественный Фонд
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-sm">
            Благотворительный фонд помощи людям, которые нуждаются в поддержке. Дарим надежду и опору каждому.
          </p>
        </div>

        {/* Навигация */}
        <div>
          <h3 className="text-[#0091d2] font-bold text-sm tracking-wider uppercase mb-4">
            Навигация
          </h3>
          <ul className="space-y-2.5 text-sm font-bold tracking-wide">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path} 
                  className="group flex items-center space-x-1 text-slate-600 hover:text-[#0091d2] transition-colors duration-300"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transform translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0 transition-all duration-300 text-[#0091d2]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h3 className="text-[#0091d2] font-bold text-sm tracking-wider uppercase mb-4">
            Контакты
          </h3>
          <ul className="space-y-3.5 text-sm font-bold text-slate-600 tracking-wide">
            <li>
              <a href="mailto: amanzholissabekov@gmail.com" className="flex items-center space-x-2.5 hover:text-[#0091d2] transition-colors">
                <div className="p-1.5 rounded-lg bg-white border border-[#00a5e3]/20 text-[#0091d2]">
                  <Mail size={14} strokeWidth={2.2} />
                </div>
                <span> amanzholissabekov@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+77014594916" className="flex items-center space-x-2.5 hover:text-[#0091d2] transition-colors">
                <div className="p-1.5 rounded-lg bg-white border border-[#00a5e3]/20 text-[#0091d2]">
                  <Phone size={14} strokeWidth={2.2} />
                </div>
                <span> +77014594916</span>
              </a>
            </li>
            <li className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-white border border-[#00a5e3]/20 text-[#0091d2]">
                <MapPin size={14} strokeWidth={2.2} />
              </div>
              <span>Алматы, Казахстан</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Копирайт */}
      <div className="border-t border-[#00a5e3]/20 bg-[#0091d2]/5 text-center py-5 text-xs font-bold text-slate-400 tracking-wider uppercase">
        © {currentYear} Общественный Фонд «Өмір Сыйы». Все права защищены.
      </div>
    </footer>
  );
}

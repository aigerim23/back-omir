'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/auth';
import {
  Home,
  Briefcase,
  Newspaper,
  Info,
  Phone,
  LayoutDashboard,
  LogOut,
  LogIn
} from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    { name: 'Главная', path: '/', icon: Home },
    { name: 'Проекты', path: '/projects', icon: Briefcase },
    { name: 'Новости', path: '/news', icon: Newspaper },
    { name: 'О нас', path: '/about', icon: Info },
    { name: 'Контакты', path: '/contact', icon: Phone },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#0091d2]/95 backdrop-blur-lg h-16 shadow-lg border-[#d4af37]/30' 
          : 'bg-[#0091d2]/90 backdrop-blur-md h-20 border-[#00a5e3]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-3 group text-left">
            <div className={`relative flex-shrink-0 rounded-full p-1 shadow-md group-hover:scale-105 transition-all duration-300 bg-white ${
              isScrolled ? 'w-10 h-10' : 'w-20 h-20'
            }`}>
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain rounded-full" 
              />
            </div>
            <div>
              <span className="font-bold tracking-tight text-white block leading-none text-lg transition-all duration-300">
                Өмір Сыйы
              </span>
              <span className="text-[9px] text-[#d4af37] font-bold tracking-widest block uppercase mt-0.5">
                Общественный Фонд
              </span>
            </div>
          </Link>

          {/* Меню (Десктоп) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold tracking-wide">
            {menuItems.map((link) => {
              const active = isActive(link.path);
              return (
                <Link 
                  key={link.path}
                  href={link.path} 
                  className={`relative py-2 flex items-center space-x-1.5 transition-colors duration-300 ${
                    active ? 'text-[#d4af37]' : 'text-white/90 hover:text-[#d4af37]'
                  }`}
                >
                  <link.icon size={16} strokeWidth={2.2} />
                  <span>{link.name}</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#d4af37] rounded-full transform origin-left transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Авторизованная зона (Десктоп) */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md pl-4 pr-2 py-1.5 rounded-2xl border border-white/20 shadow-sm">
                <span className="text-xs text-white font-bold">
                  {user.name}
                </span>
                <Link href="/admin" className="text-xs text-[#d4af37] font-bold tracking-wider uppercase hover:text-white transition-colors">
                  Панель
                </Link>
                <button
                  onClick={logout}
                  className="text-xs text-white/70 hover:text-red-400 font-bold tracking-wider uppercase px-3 py-1.5 rounded-xl hover:bg-white/5 transition-colors"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <Link
                href="/admin/login"
                className="bg-[#d4af37] hover:bg-[#b8962e] text-slate-900 text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Войти
              </Link>
            )}
          </div>

          {/* Гамбургер кнопка */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Мобильное меню */}
      <div 
        className={`fixed inset-x-0 top-0 z-40 bg-[#0091d2]/98 backdrop-blur-xl border-b border-[#d4af37]/20 shadow-2xl transition-all duration-500 transform md:hidden flex flex-col justify-between ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`} 
        style={{ 
          paddingTop: isScrolled ? '4rem' : '5rem',
          maxHeight: '100vh' 
        }}
      >
        <div className="px-4 py-4 space-y-2 overflow-y-auto">
          {menuItems.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 p-3 rounded-2xl text-sm font-bold tracking-wide transition-all ${
                  active ? 'bg-[#d4af37] text-slate-900 shadow-md' : 'text-white hover:bg-white/10'
                }`}
              >
                <link.icon size={18} strokeWidth={2.2} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/10 bg-black/10">
          {user ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-[11px] text-white/50 font-bold uppercase tracking-wider">Пользователь</span>
                <span className="text-sm text-white font-bold">{user.name}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-white/10 text-[#d4af37] border border-white/10 text-xs font-bold uppercase tracking-wider"
                >
                  <LayoutDashboard size={16} />
                  <span>Панель</span>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider"
                >
                  <LogOut size={16} />
                  <span>Выйти</span>
                </button>
              </div>
            </div>
          ) : (
            <Link
              href="/admin/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full bg-[#d4af37] text-slate-900 text-xs font-bold tracking-wider uppercase p-3.5 rounded-xl shadow-md"
            >
              <LogIn size={16} />
              <span>Войти в аккаунт</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

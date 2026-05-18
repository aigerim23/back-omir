import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'БлагоФонд — Благотворительный фонд',
  description: 'Помогаем тем, кто нуждается в поддержке',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" >
      <body className={`${roboto.className} bg-gray-50 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
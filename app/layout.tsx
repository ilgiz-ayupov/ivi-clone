import './globals.css'
import { Inter } from 'next/font/google'

import { Header } from '@/components'
import { LanguageProvider } from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IVI',
  description: 'Онлайн-кинотеатр Иви',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

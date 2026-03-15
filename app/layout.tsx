import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: 'НМИЦ здоровья детей | Минздрав России',
  description: 'Национальный медицинский исследовательский центр здоровья детей. Многопрофильная высокотехнологичная медицинская помощь детям.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

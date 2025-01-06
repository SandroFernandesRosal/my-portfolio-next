import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Ms_Madi as MsMadi } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import { ThemeProviders } from './theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const msmadi = MsMadi({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-msmadi',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Sandro Fernandes',
    default: 'Sandro Fernandes',
  },
  description: 'Desenvolvedor Front-end',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${msmadi.variable}   overflow-x-hidden `}
      >
        <ThemeProviders>
          <Header />

          {children}
          <Analytics />
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Ms_Madi as MsMadi,
  Margarine,
} from 'next/font/google'

import './globals.css'
import { ThemeProviders } from './theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const margarine = Margarine({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-margarine',
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
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${msmadi.variable} ${margarine.variable} overflow-x-hidden `}
      >
        <ThemeProviders>
          <Header />

          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}

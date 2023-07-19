import StyleWrapper from '@/components/StyleWrapper'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Event Zapper',
  description: 'Event Zapper',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <StyleWrapper>
          {children}
        </StyleWrapper>
      </body>
    </html>
  )
}

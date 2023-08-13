import './globals.css'

import type { Metadata } from 'next'

import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modalProvider'
import ToastProvider from '@/providers/toastProvider'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store app',
  description: 'A Shopper\'s heaven',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider/>
          <Navbar/>
          {children}
          <ModalProvider/>
          <Footer/>
        </body>
    </html>
  )
}

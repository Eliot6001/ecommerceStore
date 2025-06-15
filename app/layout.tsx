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
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navbar = await Navbar();
  return (
    <html lang="en">
      <body>
        <ToastProvider/>
          {navbar}
          {children}
          <ModalProvider/>
          <Footer/>
        </body>
    </html>
  )
}

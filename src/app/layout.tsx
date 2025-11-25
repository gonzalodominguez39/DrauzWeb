import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inmobiliaria Drauz - Encuentra tu hogar ideal',
  description: 'Explora las mejores propiedades en venta y alquiler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
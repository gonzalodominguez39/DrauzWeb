import type { Metadata } from 'next'
import './globals.css'
import { Sansita, Momo_Trust_Display } from 'next/font/google';

const sansita = Sansita({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const momo = Momo_Trust_Display({
  subsets: ['latin'],
  weight: '400',
});

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
    <html className={`${sansita.className} ${momo.className}`}>
      <body>{children}</body>
    </html>
  );

}
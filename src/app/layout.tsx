import type { Metadata } from "next";
import "./globals.css";
import { Sansita, Momo_Trust_Display } from "next/font/google";
import { QueryProvider } from "@/lib/queryClient";
import HeaderWrapper from "../shared/components/layout/header/HeaderWrapper";
import { AuthProvider } from "./providers/AuthProvider";
import { Footer } from "@/shared/components/layout/Footer";


const sansita = Sansita({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
});

const momo = Momo_Trust_Display({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Inmobiliaria Drauz - Encuentra tu hogar ideal",
  description: "Explora las mejores propiedades en venta y alquiler con Drauz. Tu próximo hogar está aquí.",
  keywords: ["inmobiliaria", "propiedades", "alquiler", "venta", "casas", "departamentos", "Drauz"],
  authors: [{ name: "Drauz" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://drauz.com.ar",
    title: "Inmobiliaria Drauz - Encuentra tu hogar ideal",
    description: "Explora las mejores propiedades en venta y alquiler con Drauz.",
    siteName: "Inmobiliaria Drauz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inmobiliaria Drauz - Encuentra tu hogar ideal",
    description: "Explora las mejores propiedades en venta y alquiler con Drauz.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es" className={`${sansita.className} ${momo.className}`}>
      <body className="bg-[#121212] min-h-screen">
        <QueryProvider>
          <AuthProvider>
            {/* HEADER GLOBAL */}
            <HeaderWrapper />

            {/* CONTENIDO */}
            <main className="pt-24">
              {children}
            </main>

            {/* FOOTER GLOBAL */}
            <Footer />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

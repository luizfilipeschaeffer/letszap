import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://letszap.com.br'),
  title: "LetsZap - Toda sua equipe em um único número",
  description: "Centralize e melhore o desempenho do seu atendimento. Reduza custos, automatize respostas e encante seus clientes em uma única tela. Plataforma completa de atendimento multicanal com WhatsApp Business, chatbot, IA e muito mais. Mais de 20 empresas já confiam na LetsZap para transformar seu atendimento.",
  keywords: "atendimento ao cliente, WhatsApp Business, chatbot, IA, omnichannel, LetsZap, automação de atendimento, multiagente, CRM, gestão de conversas, atendimento multicanal, plataforma de atendimento",
  authors: [{ name: "LetsZap" }],
  creator: "LetsZap",
  publisher: "LetsZap",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://letszap.com.br",
    siteName: "LetsZap",
    title: "LetsZap - Toda sua equipe em um único número",
    description: "Centralize e melhore o desempenho do seu atendimento. Reduza custos, automatize respostas e encante seus clientes em uma única tela. Mais de 20 empresas já confiam na LetsZap para transformar seu atendimento. Plataforma completa com WhatsApp Business, chatbot, IA e muito mais.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "LetsZap - Plataforma de Atendimento Multicanal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LetsZap - Toda sua equipe em um único número",
    description: "Centralize e melhore o desempenho do seu atendimento. Reduza custos, automatize respostas e encante seus clientes. Plataforma completa de atendimento multicanal com WhatsApp Business, chatbot e IA. Mais de 20 empresas já confiam na LetsZap.",
    images: ["/logo.png"],
    creator: "@letszap",
    site: "@letszap",
  },
  alternates: {
    canonical: "https://letszap.com.br",
  },
  category: "technology",
  classification: "SaaS, Atendimento ao Cliente, WhatsApp Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} antialiased text-gray-800 bg-white relative`}
        suppressHydrationWarning={true}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQX13EYG4L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQX13EYG4L');
          `}
        </Script>
        <script 
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          async
        />
        {children}
      </body>
    </html>
  );
}

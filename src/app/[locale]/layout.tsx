import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

export const metadata: Metadata = {
  title: "설화 (魂录) — 조선 설화 로그라이크 서바이벌 액션",
  description: "달빛 아래 귀문이 열린다. 부적과 정화수로 악귀를 막아내는 조선 설화 로그라이크 퇴마 액션.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "설화 (魂录) | Tailbound",
    description: "저승 사자와 퇴마 무당이 되어 쏟아지는 악귀를 막아내라. 조선 설화 바탕의 스피디한 로그라이크 액션",
    url: "https://tailbound.xyz",
    siteName: "Tailbound",
    images: [
      {
        url: "https://tailbound.xyz/lore-bg.png",
        width: 1200,
        height: 630,
        alt: "설화 세계관 일러스트",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "설화 (魂录) - Tailbound",
    description: "달빛 아래 귀문이 열린다. 부적과 정화수로 악귀를 막아내는 조선 설화 로그라이크.",
    images: ["https://tailbound.xyz/lore-bg.png"],
    creator: "@tailbound_game",
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700;900&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

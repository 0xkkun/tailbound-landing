import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Noto_Sans_KR, Outfit } from 'next/font/google';
import "../globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "설화 (魂录) — 조선 설화 로그라이크 서바이벌 액션",
  description: "달빛 아래 귀문이 열린다. 부적과 정화수로 악귀를 막아내는 조선 설화 로그라이크 퇴마 액션.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
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
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({locale});

  return (
    <html lang={locale} className={`${notoSansKR.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans" style={{ fontFamily: 'var(--font-noto-sans-kr), sans-serif' }}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

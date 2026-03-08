import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: '에이원특수강 | 국산 특수강 봉강 전문 유통기업',
    template: '%s | 에이원특수강',
  },
  description: '세아베스틸 공식 대리점 에이원특수강. 특수강 봉강 유통, 절단 가공, 열처리 협력망을 통한 토털 솔루션을 제공합니다.',
  keywords: ['특수강', '봉강', '세아베스틸', '에이원특수강', '합금강', '절단가공', '방산'],
  authors: [{ name: '에이원특수강' }],
  creator: '에이원특수강',
  publisher: '에이원특수강',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://a1specialsteel.example.com',
    title: '에이원특수강 | 국산 특수강 봉강 전문 유통기업',
    description: '세아베스틸 공식 대리점 에이원특수강. 특수강 봉강 전문 유통 기업.',
    siteName: '에이원특수강',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

'use client';

import { Hero } from '@/components/ui/Hero';
import { CardList } from '@/components/ui/CardList';
import { dummyNews } from '@/data/dummy';
import { useLang } from '@/lib/LanguageContext';

export default function NewsPage() {
    const { lang } = useLang();

    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'News & Media' : '뉴스'}
                subtitle={lang === 'ENG'
                    ? 'Latest updates and press releases from A1 Special Steel.'
                    : '에이원특수강의 최신 소식과 보도자료를 확인하세요.'
                }
                imageSrc="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&auto=format&fit=crop"
                size="sm"
            />

            <div className="min-h-[50vh]">
                <CardList
                    items={dummyNews}
                />
            </div>
        </>
    );
}

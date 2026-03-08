'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

export default function DistributionPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Reliable Supply Chain for Special Steel' : '국산 특수강, 신뢰 있는 공급망으로'}
                subtitle={lang === 'ENG'
                    ? 'Official SeAH Besteel Dealer — Stable inventory and fast delivery'
                    : '세아베스틸 공식 대리점 — 안정적인 재고와 빠른 납기'}
                imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                    {lang === 'ENG' ? 'Special Steel Distribution' : '유통'}
                </h2>
                <p className="text-lg text-blue-700 font-semibold mb-8">
                    {lang === 'ENG'
                        ? 'Official SeAH Besteel Dealer — Stable inventory and fast delivery'
                        : '세아베스틸 공식 대리점 — 안정적인 재고와 빠른 납기'}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                    {lang === 'ENG'
                        ? 'A1 Special Steel, as an official SeAH Besteel dealer, stably supplies various special steel bars including S45C structural carbon steel and SCM structural alloy steel bars. With an average inventory of 1,500–2,000 tons, we deliver fast and accurate supply to domestic manufacturing sites.'
                        : '에이원특수강은 세아베스틸의 공식 대리점으로서 S45C 기계구조용 탄소강, SCM 구조용 합금강봉강을 포함한 다양한 특수강 봉강을 안정적으로 공급합니다. 평균 1,500~2,000톤의 재고를 보유하며, 국내 제조업 현장에 신속하고 정확한 공급을 실현합니다.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        lang === 'ENG' ? '✔ Official SeAH Besteel Dealer' : '✔ 세아베스틸 공식 대리점',
                        lang === 'ENG' ? '✔ 1,500–2,000t Inventory' : '✔ 1,500~2,000톤 재고 보유',
                        lang === 'ENG' ? '✔ Domestic Special Steel Specialist' : '✔ 국산 특수강 전문 취급',
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">{point}</div>
                    ))}
                </div>
            </section>
        </>
    );
}

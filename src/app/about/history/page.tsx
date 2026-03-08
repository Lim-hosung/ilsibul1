'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

const milestones = [
    { year: '2008', textKOR: '㈜에이원특수강 설립', textENG: 'A1 Special Steel Co., Ltd. Founded' },
    { year: '2011', textKOR: '경기도 시흥 시화공단 공장 설립, 본격 영업 개시', textENG: 'Established factory at Siheung Sihwa Industrial Complex, full operations commenced' },
    { year: '2012', textKOR: '가공설비(밴드쏘·서큘레이터) 도입, 절단가공 서비스 시작', textENG: 'Introduced processing equipment (band saws, circulators), launched cutting service' },
    { year: '2015~', textKOR: '세아베스틸 공식 대리점 체계 강화, 거래처 확대', textENG: 'Strengthened official SeAH Besteel dealership, expanded customer base' },
    { year: '현재', textKOR: '특수강 유통·절단·솔루션 토털 서비스 기업으로 성장', textENG: 'Growing as a total service company for distribution, cutting, and solutions' },
];

export default function HistoryPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Company History' : '회사 연혁'}
                imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-12">{lang === 'ENG' ? 'History' : '연혁'}</h2>
                <div className="relative">
                    <div className="absolute left-20 top-0 bottom-0 w-px bg-gray-200" />
                    <div className="space-y-10">
                        {milestones.map((m, i) => (
                            <div key={i} className="flex gap-8 items-start relative">
                                <div className="w-20 flex-shrink-0 text-left">
                                    <span className="font-black text-blue-700 text-lg">{m.year}</span>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-blue-600 border-2 border-white" />
                                    <p className="text-gray-700 font-medium text-lg leading-relaxed pt-0.5">
                                        {lang === 'ENG' ? m.textENG : m.textKOR}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

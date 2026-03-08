'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

export default function CEOPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'CEO Message' : 'CEO 인사말'}
                imageSrc="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <blockquote className="text-2xl md:text-3xl font-black text-gray-900 mb-12 leading-tight border-l-4 border-blue-600 pl-8">
                    {lang === 'ENG'
                        ? '"We will grow together with our customers, with steel-like trust."'
                        : '"강철 같은 신뢰로, 고객과 함께 성장하겠습니다"'}
                </blockquote>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        {lang === 'ENG'
                            ? 'Thank you sincerely for visiting the A1 Special Steel website.'
                            : '에이원특수강 홈페이지를 방문해 주신 여러분께 진심으로 감사드립니다.'}
                    </p>
                    <p>
                        {lang === 'ENG'
                            ? 'Since our founding in 2008 as an official SeAH Besteel dealer, A1 Special Steel has grown steadily in the domestic special steel bar distribution market. As the founder, I have always put first what customers truly need, based on 30 years of sales experience and technical know-how accumulated at SeAH Besteel.'
                            : '저희 에이원특수강은 2008년 창립 이후 세아베스틸의 공식 대리점으로서 국내 특수강 봉강 유통 시장에서 꾸준히 성장해 왔습니다. 창립자로서 저는 세아베스틸에서 30년간 쌓아온 영업 경험과 기술 노하우를 바탕으로, 고객이 진정으로 필요로 하는 것이 무엇인지를 항상 먼저 생각해 왔습니다.'}
                    </p>
                    <p>
                        {lang === 'ENG'
                            ? 'A1 Special Steel is now evolving into a total service company that encompasses cutting, processing, and solutions beyond simple steel distribution. As a company that supplies core materials for key national industries such as heavy equipment, automotive, defense, shipbuilding, and energy, we take this responsibility very seriously.'
                            : '이제 에이원특수강은 단순한 철강 유통을 넘어 절단·가공·솔루션까지 아우르는 토털 서비스 기업으로 도약하고 있습니다. 중장비, 자동차, 방산, 조선, 에너지 등 국가 기간 산업의 핵심 소재를 공급하는 기업으로서 그 책임을 무겁게 인식하고 있습니다.'}
                    </p>
                    <p>
                        {lang === 'ENG'
                            ? 'We will continue to prioritize quality and trust, and grow together with our customers.'
                            : '앞으로도 품질과 신뢰를 최우선으로 삼아 고객과 함께 성장하는 에이원특수강이 되겠습니다.'}
                    </p>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-lg font-bold text-gray-900">
                        {lang === 'ENG' ? 'CEO, A1 Special Steel Co., Ltd.' : '㈜에이원특수강 대표이사'}
                    </p>
                    <p className="text-2xl font-black text-blue-800 mt-1">나한수</p>
                </div>
            </section>
        </>
    );
}

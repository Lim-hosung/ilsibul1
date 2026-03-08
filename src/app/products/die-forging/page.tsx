'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

export default function DieForgingPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Complex Shapes, Precise Dimensions — The Power of Die Forging' : '복잡한 형상, 정밀한 치수 — 형단조의 강점'}
                subtitle={lang === 'ENG'
                    ? 'Die forging solutions optimized for automotive, heavy equipment & defense parts'
                    : '자동차, 중장비, 방산 부품에 최적화된 단조 솔루션'}
                imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-6">
                    {lang === 'ENG' ? 'Die Forging' : '형단조'}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                    {lang === 'ENG'
                        ? 'Die forging is a manufacturing process that forms complex-shaped parts with high precision using molds. Minimizing cutting loss while securing excellent mechanical properties, it is widely applied to automotive transmission gears, heavy equipment connecting parts, and key defense components. A1 Special Steel proposes total solutions from optimal material selection to forging process management.'
                        : '형단조는 금형을 이용해 복잡한 형상의 부품을 높은 정밀도로 성형하는 공법입니다. 절삭량을 최소화하면서도 우수한 기계적 특성을 확보할 수 있어 자동차 변속기 기어, 중장비 연결부품, 방산 핵심 부품 등에 널리 활용됩니다. 에이원특수강은 최적의 소재 선정에서 단조 공정 관리까지 토털 솔루션을 제안합니다.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { kor: '✔ 재료 절약 — 절삭량 최소화', eng: '✔ Material savings — minimal cutting' },
                        { kor: '✔ 우수한 기계적 특성 확보', eng: '✔ Superior mechanical properties' },
                        { kor: '✔ 소재선정~공정관리 토털 솔루션', eng: '✔ Total solution from material to process' },
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">
                            {lang === 'ENG' ? point.eng : point.kor}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

export default function CuttingPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Precision Cutting Optimizes Your Process' : '정밀 절단으로 고객의 공정을 최적화합니다'}
                subtitle={lang === 'ENG'
                    ? '11 Circulators · 6 Band Saws in operation'
                    : '서큘레이터 11대 · 밴드쏘 6대 운영'}
                imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                    {lang === 'ENG' ? 'Cutting Service' : '절단'}
                </h2>
                <p className="text-lg text-blue-700 font-semibold mb-8">
                    {lang === 'ENG' ? '11 Circulators · 6 Band Saws in operation' : '서큘레이터 11대 · 밴드쏘 6대 운영'}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                    {lang === 'ENG'
                        ? 'A1 Special Steel operates 11 circulators and 6 band saws to provide precision cutting services tailored to customer specifications. Going beyond raw material supply, we serve as a processing partner that improves your operational efficiency — delivering optimal results in delivery, quality, and cost.'
                        : '에이원특수강은 서큘레이터 11대와 밴드쏘 6대를 보유하고, 고객이 요구하는 사양에 맞춘 정밀 절단 서비스를 제공합니다. 단순 원재료 공급에서 벗어나, 고객사의 공정 효율을 높이는 가공 파트너로서 납기·품질·비용 모든 면에서 최적의 결과를 만들어 드립니다.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        lang === 'ENG' ? '✔ 11 Circulators' : '✔ 서큘레이터 11대 운용',
                        lang === 'ENG' ? '✔ 6 Band Saws' : '✔ 밴드쏘 6대 운용',
                        lang === 'ENG' ? '✔ Custom Spec Cutting' : '✔ 고객 맞춤 규격 절단',
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">{point}</div>
                    ))}
                </div>
            </section>
        </>
    );
}

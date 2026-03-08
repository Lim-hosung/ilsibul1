'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

export default function EquipmentPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Systematic Equipment, Consistent Quality' : '체계적인 설비, 일관된 품질의 기반'}
                subtitle={lang === 'ENG'
                    ? 'From cutting to heat treatment network — complete operations'
                    : '가공부터 열처리 연계까지, 완결된 설비 운영'}
                imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                    {lang === 'ENG' ? 'Equipment' : '보유설비'}
                </h2>
                <p className="text-lg text-blue-700 font-semibold mb-8">
                    {lang === 'ENG' ? 'From cutting to heat treatment network — complete operations' : '가공부터 열처리 연계까지, 완결된 설비 운영'}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                    {lang === 'ENG'
                        ? 'A1 Special Steel owns its cutting equipment in-house and covers a wide range of processing requirements through a systematic partner network for heat treatment, hole machining, and more. Each piece of equipment is maintained in optimal condition through regular upkeep, ensuring stable productivity and delivery.'
                        : '에이원특수강은 절단 가공 설비를 자체 보유하고 있으며, 열처리·홀가공 등 다양한 협력 업체 네트워크를 통해 고객이 요구하는 폭넓은 가공 범위를 커버합니다. 각 설비는 정기적인 유지·관리를 통해 최상의 가동 상태를 유지하며, 안정적인 생산성과 납기를 보장합니다.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        lang === 'ENG' ? '11 Circulators' : '✔ 서큘레이터 11대',
                        lang === 'ENG' ? '6 Band Saws' : '✔ 밴드쏘 6대',
                        lang === 'ENG' ? 'Partner Network: Heat Treatment & Hole Machining' : '✔ 협력 네트워크: 열처리, 홀가공 등',
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">{point}</div>
                    ))}
                </div>
            </section>
        </>
    );
}

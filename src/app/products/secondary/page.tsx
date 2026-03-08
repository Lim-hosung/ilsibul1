'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

export default function SecondaryPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Secondary Processed Steel for Precision Applications' : 'PM(PEELING), CD(DRAWING)등 이차가공을 통한 목적재'}
                subtitle={lang === 'ENG'
                    ? 'Precision-processed materials ready for your production'
                    : '고객의 목적에 맞는 이차가공을 통한 준비된 소재 구비'}
                imageSrc="https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                    {lang === 'ENG' ? 'Secondary Processed Steel' : '이차가공재'}
                </h2>
                <p className="text-lg text-blue-700 font-semibold mb-8">
                    {lang === 'ENG' ? 'Precision-processed materials ready for your production' : '고객의 목적에 맞는 이차가공을 통한 준비된 소재 구비'}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                    {lang === 'ENG'
                        ? 'Secondary processed steel refers to materials that undergo additional processing such as Peeling (PM) or Cold Drawing (CD) beyond standard special steel specifications. Applied across diverse industrial fields, we provide various grades and shapes of secondary processed materials quickly.'
                        : '이차가공재는 정밀 가공 및 고객의 목적에 맞게 일반 특수강 기준, 이차가공을 더한 소재로 산업의 다양한 분야에 적용되며, 다양한 규격과 형상의 이차가공재를 신속하게 공급합니다.'}
                </p>
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{lang === 'ENG' ? 'Main Products' : '주요 제품'}</h3>
                    <p className="text-gray-700 text-lg font-semibold">PM재, CD재, 연마봉 등</p>
                </div>
            </section>
        </>
    );
}

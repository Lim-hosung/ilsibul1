'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

export default function SolutionPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Solutions Through Technology, From Material to Process' : '소재 선택부터 가공까지, 기술로 완성하는 솔루션'}
                subtitle={lang === 'ENG'
                    ? 'Customized material proposals starting from your product development'
                    : '고객의 요구에서 시작하는 맞춤형 소재 제안'}
                imageSrc="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                    {lang === 'ENG' ? 'Product Development Solutions' : '제품개발 솔루션'}
                </h2>
                <p className="text-lg text-blue-700 font-semibold mb-8">
                    {lang === 'ENG' ? 'Customized material proposals starting from your product development' : '고객의 요구에서 시작하는 맞춤형 소재 제안'}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                    {lang === 'ENG'
                        ? 'Beyond simple sales, A1 Special Steel proposes optimal materials at the product development stage and works with you on process optimization. From steel grade selection, spec determination, to heat treatment direction — our team leverages 30+ years of accumulated knowhow to elevate your competitiveness.'
                        : '에이원특수강은 단순 판매를 넘어, 고객사의 제품 개발 단계에서부터 최적 소재를 제안하고 공정 최적화 방안을 함께 고민합니다. 특수강 봉강의 강종 선택, 규격 결정, 열처리 방향까지 전문가 그룹의 30년 이상 축적된 노하우를 바탕으로 고객의 경쟁력을 높여 드립니다.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        lang === 'ENG' ? '✔ Steel Grade Consulting' : '✔ 강종 선택 컨설팅',
                        lang === 'ENG' ? '✔ Optimal Spec Proposal' : '✔ 최적 규격 제안',
                        lang === 'ENG' ? '✔ Process-Linked Solutions' : '✔ 공정 연계 솔루션',
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">{point}</div>
                    ))}
                </div>
            </section>
        </>
    );
}

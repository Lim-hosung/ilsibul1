'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

export default function ExportPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Global Supply Chain Beyond Korea' : '국내외를 아우르는 유통 서플라이 체인'}
                subtitle={lang === 'ENG'
                    ? 'Customized supply chain reaching overseas customers'
                    : '해외의 고객까지 놓치지 않는 맞춤 공급망'}
                imageSrc="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                    {lang === 'ENG' ? 'Export' : '수출'}
                </h2>
                <p className="text-lg text-blue-700 font-semibold mb-8">
                    {lang === 'ENG' ? 'Customized supply chain reaching overseas customers' : '해외의 고객까지 놓치지 않는 맞춤 공급망'}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                    {lang === 'ENG'
                        ? 'A1 Special Steel distributes steel products from leading domestic steel manufacturers through a reliable supply chain. Since 2010, we have been continuously exporting to Asian countries including Thailand, Vietnam, and India, as well as European countries such as Russia. We also manage tariff-aligned export strategies.'
                        : '에이원특수강은 국내 유수의 철강 제조 메이커의 철강 제품을 신뢰성 있는 공급망을 통해 유통하고 있습니다. 2010년부터 태국, 베트남, 인도 등의 아시아국가 이외에도 러시아 등의 유럽국가에도 지속적으로 수출하고 있으며, 관세 정책에 연계해 수출 사업 역시 영위하고 있습니다.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        lang === 'ENG' ? '✔ Exporting to multiple countries since 2010' : '✔ 2010년부터 여러 국가에 철강 공급중',
                        lang === 'ENG' ? '✔ Tariff-optimized export strategy' : '✔ 관세에 맞춤 수출 전략 솔루션',
                        lang === 'ENG' ? '✔ C/O & documentation support' : '✔ 원산지 증명 등 다양한 서류 대응 가능',
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">{point}</div>
                    ))}
                </div>
            </section>
        </>
    );
}

'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

const steelTable = [
    { part: '발전기 로터 · 터빈 샤프트', partENG: 'Generator Rotor · Turbine Shaft', grade: 'SNCM630 · SNCM439', descKOR: 'Ni-Cr-Mo 고합금 대형 단조강, 대단면 균일 인성 확보', descENG: 'Ni-Cr-Mo high alloy large forging, uniform toughness in large sections' },
    { part: '선박 추진축 · 중간축', partENG: 'Propulsion Shaft · Intermediate Shaft', grade: 'SNCM630 · SCM440', descKOR: '해수 환경 내식성 + 고강도, 대형 단조 가공 최적', descENG: 'Seawater corrosion resistance + high strength, optimal for large forging' },
    { part: '방산 대형 구조재', partENG: 'Defense Large Structure', grade: 'SNCM447 · SNC836', descKOR: '극한 충격·하중 대응, 엄격한 품질 추적 가능', descENG: 'Withstands extreme impact & loads, strict quality traceability' },
    { part: '산업기계 프레임 · 베드', partENG: 'Industrial Machine Frame · Bed', grade: 'S45C · SCM440', descKOR: '구조용 단조 소재, 절단·가공 후 바로 사용 가능', descENG: 'Structural forging material, ready to use after cutting & processing' },
];

export default function LargeForgingPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Large Forgings for Heavy Industry' : '중후장대 산업의 핵심 대형 단조품 공급'}
                subtitle={lang === 'ENG'
                    ? 'Forged products for energy, marine & defense structures'
                    : '에너지, 조선, 방산 등 대형 구조물용 단조 소재'}
                imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-6">
                    {lang === 'ENG' ? 'Large Forging' : '대형단조'}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {lang === 'ENG'
                        ? 'Large forgings are high-strength forged products formed by large presses or hammers to densify the internal structure. Applied mainly to large structures such as power generation equipment, ship shaft systems, and defense equipment, A1 Special Steel supplies large forging products meeting strict quality standards through reliable manufacturing partners.'
                        : '대형단조는 대형 프레스나 해머로 강재를 성형해 내부 조직을 치밀하게 만든 고강도 단조품입니다. 발전설비, 선박 축계, 방산 장비 등 대형 구조물에 적용되며, 에이원특수강은 신뢰할 수 있는 파트너를 통해 엄격한 품질 기준을 충족하는 대형단조 제품을 공급합니다.'}
                </p>
                <div className="bg-blue-50 rounded-lg px-6 py-3 mb-10 inline-block">
                    <span className="font-bold text-blue-900">{lang === 'ENG' ? 'Key Applications: ' : '주요 적용: '}</span>
                    <span className="text-blue-800">{lang === 'ENG' ? 'Turbine Shaft / Ship Propulsion Shaft / Defense / Industrial Machinery' : '터빈 샤프트 / 선박 추진축 / 방산 구조재 / 산업기계 프레임'}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{lang === 'ENG' ? 'Recommended Steel Grades' : '강종 추천'}</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-900 text-white">
                            <tr>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Application' : '적용 부품'}</th>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Recommended Grade' : '추천 강종'}</th>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Characteristics' : '강종 특성'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {steelTable.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 font-semibold text-gray-900">{lang === 'ENG' ? row.partENG : row.part}</td>
                                    <td className="px-6 py-4 font-mono text-blue-700 font-bold">{row.grade}</td>
                                    <td className="px-6 py-4 text-gray-600">{lang === 'ENG' ? row.descENG : row.descKOR}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

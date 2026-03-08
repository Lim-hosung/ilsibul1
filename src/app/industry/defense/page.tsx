'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

const steelTable = [
    { part: '장갑차 차체·구조재', partENG: 'Armored Vehicle Body', grade: 'SNCM630 · SNCM447', desc: 'Ni-Cr-Mo 고합금강, 최고 수준의 강인성·방탄 성능', descENG: 'Ni-Cr-Mo high alloy, top-level toughness & ballistic resistance' },
    { part: '포신 · 포미 부품', partENG: 'Gun Barrel · Breech', grade: 'SCM440 · SNCM439', desc: '고압 하중 대응, 내마모·내피로 특성 우수한 Cr-Mo계', descENG: 'High-pressure load resistance, excellent wear & fatigue resistance' },
    { part: '탄체 · 탄두 소재', partENG: 'Projectile Body · Warhead', grade: 'SNC836 · SNCM220', desc: '고충격 에너지 흡수, 고경도 표면처리 가능 Ni-Cr계', descENG: 'High-impact absorption, Ni-Cr series with surface hardening capability' },
    { part: '함정 축계 부품', partENG: 'Naval Shaft Components', grade: 'SNCM630 · SCM440', desc: '해수 환경 내식성 + 고강도 요건 충족', descENG: 'Seawater corrosion resistance + high strength requirements' },
];

export default function DefensePage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'High-Reliability Materials for National Security' : '국가 안보를 뒷받침하는 고신뢰 소재'}
                subtitle={lang === 'ENG' ? 'Defense Industry' : '방산 산업'}
                imageSrc="https://images.unsplash.com/photo-1565814329452-e1efa11c5e8d?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-6">{lang === 'ENG' ? 'Defense' : '방산'}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {lang === 'ENG'
                        ? 'Materials in the defense sector require absolute reliability and performance even in extreme situations. A1 Special Steel supplies materials centered on high-alloy special steels that meet the strict specifications required for defense component manufacturing, supporting K-defense competitiveness.'
                        : '방산 분야에서의 소재는 극한 상황에서도 절대적인 신뢰성과 성능을 요구합니다. 에이원특수강은 고합금 특수강을 중심으로 방산 핵심 부품 제조에 필요한 엄격한 사양을 충족하는 소재를 공급하며, 국산 특수강의 신뢰도 향상과 함께 K-방산 경쟁력을 지원합니다.'}
                </p>
                <div className="bg-blue-50 rounded-lg px-6 py-3 mb-10 inline-block">
                    <span className="font-bold text-blue-900">{lang === 'ENG' ? 'Key Parts: ' : '적용 부품: '}</span>
                    <span className="text-blue-800">{lang === 'ENG' ? 'Vehicle Body / Gun Barrel / Projectile / Naval Parts' : '차체 구조재 / 포신 소재 / 탄체 및 탄두 / 함정 구조 부품'}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{lang === 'ENG' ? 'Recommended Steel Grades' : '강종 추천'}</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-900 text-white">
                            <tr>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Part' : '적용 부품'}</th>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Recommended Grade' : '추천 강종'}</th>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Characteristics' : '강종 특성'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {steelTable.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 font-semibold text-gray-900">{lang === 'ENG' ? row.partENG : row.part}</td>
                                    <td className="px-6 py-4 font-mono text-blue-700 font-bold">{row.grade}</td>
                                    <td className="px-6 py-4 text-gray-600">{lang === 'ENG' ? row.descENG : row.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

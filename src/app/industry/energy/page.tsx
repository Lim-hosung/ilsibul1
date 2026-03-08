'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

const steelTable = [
    { part: '풍력 타워 플랜지 · 허브', partENG: 'Wind Tower Flange · Hub', grade: 'SCM440 · SNCM439', desc: '고강도·고인성 단조강, 반복 하중 피로 저항성 우수', descENG: 'High-strength forging steel with excellent cyclic fatigue resistance' },
    { part: '발전 터빈 로터 · 샤프트', partENG: 'Turbine Rotor · Shaft', grade: 'SNCM630 · SCM440', desc: 'Cr-Mo / Ni-Cr-Mo 계열, 고온 크리프 강도 및 내열성 우수', descENG: 'Cr-Mo/Ni-Cr-Mo series, excellent high-temp creep strength & heat resistance' },
    { part: 'LNG 설비 구조재', partENG: 'LNG Facility Structure', grade: 'SNC836 · SNCM220', desc: '저온 인성 우수, 극저온 환경 하에서 취성파괴 방지', descENG: 'Excellent low-temperature toughness, prevents brittle fracture in cryogenic environments' },
    { part: '원전 구조 부품', partENG: 'Nuclear Structure Parts', grade: 'SNCM630 · SNCM447', desc: '고방사선·고온 환경 대응, 엄격한 품질 추적 관리 가능', descENG: 'Resistant to high radiation & temperature, with strict quality traceability' },
];

export default function EnergyPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'High-Performance Materials for Future Energy' : '미래 에너지 산업을 위한 고성능 소재 솔루션'}
                subtitle={lang === 'ENG' ? 'Energy Industry' : '에너지 산업'}
                imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-6">{lang === 'ENG' ? 'Energy' : '에너지'}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {lang === 'ENG'
                        ? 'Core structures in the energy industry such as power generation equipment, wind turbines, and LNG plants must ensure long-term reliability in high-temperature and high-pressure environments. A1 Special Steel supplies large forged products and special steel materials for energy equipment, actively responding to new material demands in the renewable energy era.'
                        : '발전설비, 풍력 터빈, LNG 플랜트 등 에너지 산업의 핵심 구조물은 고온·고압 환경에서 장기 신뢰성을 확보해야 합니다. 에이원특수강은 에너지 설비용 대형단조품과 특수강 소재를 공급하며, 신재생에너지 시대의 새로운 소재 수요에도 적극 대응합니다.'}
                </p>
                <div className="bg-blue-50 rounded-lg px-6 py-3 mb-10 inline-block">
                    <span className="font-bold text-blue-900">{lang === 'ENG' ? 'Key Parts: ' : '적용 부품: '}</span>
                    <span className="text-blue-800">{lang === 'ENG' ? 'Turbine Parts / Wind Flange / LNG Structure / Nuclear Parts' : '발전 터빈 부품 / 풍력 타워 플랜지 / LNG 설비 구조재 / 원전 부품'}</span>
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

'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

const steelTable = [
    { part: '크랭크샤프트 · 커넥팅로드', partENG: 'Crankshaft · Connecting Rod', grade: 'SCM440 · SNCM439', desc: '중탄소 Cr-Mo / Ni-Cr-Mo계, 고강도·고인성 비조질강도 적용', descENG: 'Medium-carbon Cr-Mo / Ni-Cr-Mo, high strength & toughness' },
    { part: '변속기 기어 · 샤프트', partENG: 'Transmission Gear · Shaft', grade: 'SCr420 · SCM420 · SCM415', desc: '침탄 열처리용 저탄소 합금강, 표면 경도·치수 안정성 우수', descENG: 'Low-carbon alloy for carburizing, excellent surface hardness & dimensional stability' },
    { part: '드라이브샤프트 · 등속조인트', partENG: 'Drive Shaft · CV Joint', grade: 'SCM440 · SCr440', desc: 'Cr-Mo / Cr계 합금강, 비틀림 피로 강도 및 내마모성 우수', descENG: 'Cr-Mo/Cr alloy steel, excellent torsional fatigue & wear resistance' },
    { part: '서스펜션 스프링', partENG: 'Suspension Spring', grade: 'SUP9D · SUP11D', desc: '고탄성 스프링강, 탈탄 최소화 및 피로 내구성 최적화', descENG: 'High-elasticity spring steel, minimized decarburization & optimized fatigue durability' },
];

export default function AutomotivePage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Lightweight & High Strength Achieved Together' : '경량화와 고강도, 두 가지를 동시에'}
                subtitle={lang === 'ENG' ? 'Automotive Industry' : '자동차 산업'}
                imageSrc="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-6">{lang === 'ENG' ? 'Automotive' : '자동차'}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {lang === 'ENG'
                        ? 'The automotive industry simultaneously demands lightweight materials for fuel efficiency and high-strength materials for collision safety. A1 Special Steel supplies high-alloy special steels suited for core drivetrain components such as transmission gears, drive shafts, and suspension parts.'
                        : '자동차 산업은 연비 향상을 위한 경량화와 충돌 안전성 확보를 위한 고강도 소재를 동시에 요구합니다. 에이원특수강은 변속기 기어, 드라이브 샤프트, 서스펜션 부품 등 자동차 구동계 핵심 부품에 적합한 고합금 특수강을 공급하며, 엄격한 품질 기준을 충족합니다.'}
                </p>
                <div className="bg-blue-50 rounded-lg px-6 py-3 mb-10 inline-block">
                    <span className="font-bold text-blue-900">{lang === 'ENG' ? 'Key Parts: ' : '적용 부품: '}</span>
                    <span className="text-blue-800">{lang === 'ENG' ? 'Transmission Gear / Drive Shaft / Crankshaft / Suspension' : '변속기 기어 / 드라이브 샤프트 / 크랭크샤프트 / 서스펜션'}</span>
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

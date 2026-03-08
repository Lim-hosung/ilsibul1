'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

const steelTable = [
    { part: '유압실린더 로드', partENG: 'Hydraulic Cylinder Rod', grade: 'S45C · SCM440', desc: '기계구조용 탄소강 / 조질처리 후 고강도·고인성 확보', descENG: 'Structural carbon steel / High strength & toughness after QT' },
    { part: '핀 · 부싱', partENG: 'Pin · Bushing', grade: 'SCM415 · SCM420', desc: '침탄·고주파 열처리로 표면 경도 + 코어 인성 동시 확보', descENG: 'Carburizing & induction hardening for surface hardness + core toughness' },
    { part: '구동축 · 회전체', partENG: 'Drive Shaft · Rotor', grade: 'SNCM439 · SNCM630', desc: 'Ni-Cr-Mo 계열, 대단면 담금질성 우수, 고하중 구동부 최적', descENG: 'Ni-Cr-Mo series, excellent large-section hardenability' },
    { part: '아암 · 연결부', partENG: 'Arm · Connector', grade: 'SCM440 · SNC836', desc: '고인성 합금강, 충격 흡수성 + 피로 강도 우수', descENG: 'High-toughness alloy steel with excellent fatigue strength' },
];

export default function HeavyEquipmentPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Proven Material Reliability in Harsh Conditions' : '혹독한 환경에서 증명된 소재 신뢰성'}
                subtitle={lang === 'ENG' ? 'Heavy Equipment Industry' : '중장비 산업'}
                imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-6">{lang === 'ENG' ? 'Heavy Equipment' : '중장비'}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {lang === 'ENG'
                        ? 'Heavy equipment such as excavators, cranes, and forklifts requires high-strength, high-toughness materials that can withstand extreme loads and impacts. A1 Special Steel stably supplies special steel materials optimized for key heavy equipment components such as hydraulic cylinders, drive shafts, and pin types.'
                        : '굴삭기, 크레인, 지게차 등 중장비 장비에는 극한의 하중과 충격에도 견디는 고강도·고인성 소재가 필수입니다. 에이원특수강은 유압실린더, 연결 축, 핀류 등 중장비 핵심 구동 부품에 최적화된 특수강 소재를 안정적으로 공급하며, 국내 주요 중장비 제조사의 신뢰받는 파트너입니다.'}
                </p>
                <div className="bg-blue-50 rounded-lg px-6 py-3 mb-10 inline-block">
                    <span className="font-bold text-blue-900">{lang === 'ENG' ? 'Key Parts: ' : '적용 부품: '}</span>
                    <span className="text-blue-800">{lang === 'ENG' ? 'Hydraulic Cylinder / Pin·Bushing / Drive Shaft / Arm Connector' : '유압실린더 / 핀·부싱 / 구동축 / 아암 연결부'}</span>
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

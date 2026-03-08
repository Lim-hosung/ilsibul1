'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

const steelTable = [
    { part: '선박 추진축 · 중간축', partENG: 'Propulsion Shaft · Intermediate Shaft', grade: 'SNCM630 · SNCM439', desc: 'Ni-Cr-Mo 계열 대형 단조강, 대단면 균일 인성 확보', descENG: 'Ni-Cr-Mo large forging steel, uniform toughness in large sections' },
    { part: '저속 디젤엔진 크랭크샤프트', partENG: 'Low-Speed Diesel Crankshaft', grade: 'SCM440 · SNCM439', desc: '고주기 피로 강도 및 고인성 Cr-Mo / Ni-Cr-Mo계 단조강', descENG: 'High-cycle fatigue strength & toughness Cr-Mo/Ni-Cr-Mo forging steel' },
    { part: '프로펠러 보스 · 러더 부품', partENG: 'Propeller Boss · Rudder Parts', grade: 'SNC836 · SNCM220', desc: 'Ni-Cr계, 해수 환경에서 강인성·내식성 우수', descENG: 'Ni-Cr series, excellent toughness & corrosion resistance in seawater' },
    { part: '윈치 · 계류 장치 구동부', partENG: 'Winch · Mooring Drive', grade: 'SCM440 · S45C', desc: '구조용 단조 소재, 절단·가공 후 바로 투입 가능', descENG: 'Structural forging material, ready to use after cutting & processing' },
];

export default function ShipbuildingPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Marine Strength — Core Materials for Shipbuilding' : '바다 위의 강인함, 조선 산업의 핵심 소재'}
                subtitle={lang === 'ENG' ? 'Shipbuilding Industry' : '조선 산업'}
                imageSrc="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-6">{lang === 'ENG' ? 'Shipbuilding' : '조선'}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {lang === 'ENG'
                        ? 'Ships require materials that simultaneously satisfy corrosion resistance in seawater, strength to withstand high loads, and precise machinability. A1 Special Steel supplies suitable materials for core shipbuilding components such as propulsion shafts, crankshafts, and forged parts.'
                        : '선박은 해수 환경에서의 내식성, 고하중을 견디는 강도, 그리고 정밀한 가공성을 동시에 만족하는 소재를 필요로 합니다. 에이원특수강은 선박 추진축, 크랭크샤프트, 단조 부품 등 조선 핵심 구조물에 적합한 소재를 공급하여 국내 조선 산업의 품질 경쟁력에 기여합니다.'}
                </p>
                <div className="bg-blue-50 rounded-lg px-6 py-3 mb-10 inline-block">
                    <span className="font-bold text-blue-900">{lang === 'ENG' ? 'Key Parts: ' : '적용 부품: '}</span>
                    <span className="text-blue-800">{lang === 'ENG' ? 'Propulsion Shaft / Crankshaft / Rudder Parts / Ship Forgings' : '선박 추진축 / 크랭크샤프트 / 러더 부품 / 선박 단조품'}</span>
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

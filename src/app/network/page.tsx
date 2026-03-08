'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

export default function NetworkPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Partnership-Powered Supply Chain' : '탄탄한 파트너십으로 완성되는 공급망'}
                subtitle={lang === 'ENG' ? 'Network' : '네트워크'}
                imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-6">{lang === 'ENG' ? 'Network' : '네트워크'}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-12">
                    {lang === 'ENG'
                        ? 'Based on close partnerships with SeAH Besteel and other major domestic steel manufacturers, A1 Special Steel systematically operates a cooperative network including heat treatment, hole machining, and forging. We continuously strengthen our global supply capabilities through expanding our overseas export network beyond Korea.'
                        : '에이원특수강은 세아베스틸을 비롯한 국내 주요 철강 제조사와의 긴밀한 파트너십을 바탕으로, 열처리·홀가공·단조 등 협력 업체 네트워크를 체계적으로 운영합니다. 국내를 넘어 해외 수출 네트워크 확장을 통해 글로벌 공급 역량을 지속적으로 강화하고 있습니다.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">{lang === 'ENG' ? 'Key Partners' : '주요 파트너'}</h3>
                        <ul className="space-y-3 text-gray-700 font-medium">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                {lang === 'ENG' ? 'SeAH Besteel (Official Dealer)' : '세아베스틸 공식 대리점'}
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                {lang === 'ENG' ? 'FABIO (Processing Partner)' : '파비오 (가공 협력사)'}
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                {lang === 'ENG' ? 'Heat Treatment & Hole Machining Partners' : '열처리·홀가공 협력 업체'}
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{lang === 'ENG' ? 'Export Markets' : '수출 국가'}</h3>
                        <ul className="space-y-3 text-gray-700 font-medium">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-gray-500 flex-shrink-0" />
                                {lang === 'ENG' ? 'Thailand, Vietnam, India (Asia)' : '태국, 베트남, 인도 (아시아)'}
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-gray-500 flex-shrink-0" />
                                {lang === 'ENG' ? 'Russia and European markets' : '러시아 등 유럽 국가'}
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-gray-500 flex-shrink-0" />
                                {lang === 'ENG' ? 'Continuously expanding since 2010' : '2010년부터 지속 확장 중'}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

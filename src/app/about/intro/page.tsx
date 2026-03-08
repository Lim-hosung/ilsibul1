'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';
import { Building2, User, MapPin, Calendar } from 'lucide-react';

export default function IntroPage() {
    const { lang } = useLang();

    const infoItems = [
        { icon: Building2, label: lang === 'ENG' ? 'Company' : '회사명', value: lang === 'ENG' ? 'A1 Special Steel Co., Ltd.' : '㈜에이원특수강' },
        { icon: User, label: lang === 'ENG' ? 'CEO' : '대표', value: '나한수' },
        { icon: Calendar, label: lang === 'ENG' ? 'Founded' : '설립', value: lang === 'ENG' ? '2008' : '2008년' },
        { icon: MapPin, label: lang === 'ENG' ? 'Location' : '소재지', value: lang === 'ENG' ? '145 Mayu-ro, Siheung-si, Gyeonggi-do' : '경기 시흥시 마유로 145' },
    ];

    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Total Solution Company for Special Steel Bar' : '특수강 봉강 유통·가공의 토털 솔루션 기업'}
                imageSrc="https://images.unsplash.com/photo-1565814329452-e1efa11c5e8d?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-6">{lang === 'ENG' ? 'Company Overview' : '회사개요'}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-12">
                    {lang === 'ENG'
                        ? 'A1 Special Steel Co., Ltd. has been operating special steel bar distribution and processing business as an official SeAH Besteel dealer since its founding in 2008. CEO Na Han-su, an expert who handled sales at SeAH Besteel for 30 years, has grown A1 Special Steel into a trusted company in the industry based on that experience and know-how. With its own factory in Siheung Sihwa Industrial Complex, Gyeonggi-do, operating processing equipment including circulators and band saws, the company is evolving into a comprehensive solution company combining processing and management beyond simple distribution.'
                        : '㈜에이원특수강은 2008년 설립 이후 세아베스틸의 공식 대리점으로서 국산 특수강 봉강 유통 및 가공 사업을 영위하고 있습니다. 창립자 나한수 대표이사는 세아베스틸에서 30년간 영업을 담당한 전문가로, 그 경험과 노하우를 바탕으로 에이원특수강을 업계의 신뢰받는 기업으로 성장시켜 왔습니다. 경기도 시흥 시화공단에 자체 공장을 보유하고 서큘레이터·밴드쏘 등 가공 설비를 운영하며, 단순 유통을 넘어 가공·관리를 결합한 종합 솔루션 기업으로 진화하고 있습니다.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {infoItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <item.icon className="w-5 h-5 text-blue-700" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-500 mb-1">{item.label}</p>
                                <p className="font-bold text-gray-900">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

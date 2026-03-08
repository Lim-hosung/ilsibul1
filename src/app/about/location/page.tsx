'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';
import { MapPin, Phone, Printer } from 'lucide-react';

export default function LocationPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'How to Find Us' : '찾아오시는길'}
                imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-black text-gray-900">
                            {lang === 'ENG' ? 'A1 Special Steel' : '㈜에이원특수강'}
                        </h2>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-blue-700" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">{lang === 'ENG' ? 'Address' : '주소'}</p>
                                    <p className="text-gray-600 leading-relaxed">
                                        {lang === 'ENG'
                                            ? '145 Mayu-ro, Siheung-si, Gyeonggi-do (Jeongwang-dong)\nA1 Special Steel Co., Ltd.'
                                            : '경기도 시흥시 마유로 145 (정왕동)\n㈜에이원특수강'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-blue-700" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">{lang === 'ENG' ? 'Phone' : '전화'}</p>
                                    <a href="tel:031-475-5549" className="text-gray-600 hover:text-blue-700 transition-colors font-semibold">031-475-5549</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <Printer className="w-5 h-5 text-blue-700" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">{lang === 'ENG' ? 'Fax' : '팩스'}</p>
                                    <p className="text-gray-600 font-semibold">031-475-5649</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <p className="text-amber-800 text-sm font-medium">
                                {lang === 'ENG'
                                    ? '💡 Please contact us in advance before visiting for smooth guidance.'
                                    : '💡 방문 전 사전 연락을 주시면 원활한 안내가 가능합니다.'}
                            </p>
                        </div>
                    </div>
                    {/* Google Maps */}
                    <div className="rounded-2xl overflow-hidden min-h-[400px] border border-gray-200 shadow-sm">
                        <iframe
                            src="https://maps.google.com/maps?q=37.3326917,126.7228057&z=16&output=embed"
                            width="100%"
                            height="100%"
                            style={{ minHeight: '400px', border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="에이원특수강 위치"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

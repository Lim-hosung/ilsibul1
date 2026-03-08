'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';
import { Download, FileText, Mail, Phone } from 'lucide-react';

export default function CatalogPage() {
    const { lang } = useLang();

    const handleRequest = () => {
        const subject = encodeURIComponent('[에이원특수강] 카탈로그 요청');
        const body = encodeURIComponent('안녕하세요,\n\n에이원특수강 제품 카탈로그를 요청드립니다.\n\n이름/회사:\n연락처:\n이메일:');
        window.location.href = `mailto:icecuve84@naver.com?subject=${subject}&body=${body}`;
    };

    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Check Products & Solutions at a Glance' : '제품과 솔루션을 한눈에 확인하세요'}
                subtitle={lang === 'ENG'
                    ? 'A1 Special Steel catalogues with grades, specs, and application details'
                    : '에이원특수강의 제품 카탈로그를 통해 취급 강종, 규격, 적용 분야에 대한 상세 정보를 확인하실 수 있습니다.'}
                imageSrc="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />

            <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Description */}
                <div className="mb-12 text-center">
                    <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
                        {lang === 'ENG'
                            ? 'Check detailed information on the grades we handle, specifications, and application areas through our product catalogues. If needed, please contact us and we will provide the latest materials.'
                            : '에이원특수강의 제품 카탈로그를 통해 취급 강종, 규격, 적용 분야에 대한 상세 정보를 확인하실 수 있습니다. 필요하신 경우 담당자에게 요청하시면 최신 자료를 제공해 드리겠습니다.'}
                    </p>
                </div>

                {/* Download Request Card */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-10 text-center mb-10">
                    <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-3">
                        {lang === 'ENG' ? 'A1 Special Steel Product Catalogue' : '에이원특수강 제품 카탈로그'}
                    </h2>
                    <p className="text-gray-600 mb-2 text-sm">
                        {lang === 'ENG'
                            ? 'SCM · S45C · SNCM · SNC · SCr — Full lineup of domestic special steel bars'
                            : 'SCM · S45C · SNCM · SNC · SCr — 국산 특수강 봉강 전 강종 취급'}
                    </p>
                    <p className="text-gray-500 mb-8 text-sm">
                        {lang === 'ENG'
                            ? '※ The latest catalogue is provided upon request to our representative.'
                            : '※ 최신 카탈로그는 담당자에게 요청하시면 제공됩니다.'}
                    </p>
                    <button
                        onClick={handleRequest}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors text-lg shadow-md"
                    >
                        <Download className="w-5 h-5" />
                        {lang === 'ENG' ? 'Download Catalogue' : '카탈로그 다운로드'}
                    </button>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-blue-700" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 mb-1">{lang === 'ENG' ? 'Phone' : '전화 문의'}</p>
                            <a href="tel:031-475-5549" className="font-bold text-gray-900 hover:text-blue-700 transition-colors">031-475-5549</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-blue-700" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 mb-1">{lang === 'ENG' ? 'Email' : '이메일 문의'}</p>
                            <p className="font-bold text-gray-900">icecuve84@naver.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

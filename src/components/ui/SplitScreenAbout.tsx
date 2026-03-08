'use client';

import { motion, Variants } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

export function SplitScreenAbout() {
    const { lang } = useLang();

    const variants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <section className="relative w-full h-screen snap-start bg-[#111] flex flex-col md:flex-row overflow-hidden">
            {/* Text Side */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-16 lg:p-24 z-10 bg-[#111]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={variants}
                    className="max-w-xl"
                >
                    <h2 className="text-sm md:text-base text-blue-500 font-bold tracking-widest uppercase mb-4">
                        {lang === 'ENG' ? 'About Us' : '회사 소개'}
                    </h2>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                        {lang === 'ENG' ? 'STEEL-LIKE TRUST,\nSPECIAL STEEL PARTNER' : '강철 같은 신뢰,\n특수강 전문 파트너'}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                        {lang === 'ENG'
                            ? 'A leader in domestic special steel distribution and processing.\nSince our founding in 2008, as an official agency of SeAH Besteel, we have provided total steel solutions optimized for our customers\' industrial sites, from distribution to cutting, processing, and product development.'
                            : '국산 특수강 유통ㆍ가공의 선두주자\n2008년 창립 이래 세아베스틸의 공식 대리점으로서 특수강 유통부터 절단, 가공,\n제품개발 솔루션까지 고객의 산업 현장에 최적화된 토털 철강 솔루션을 제공합니다.'}
                    </p>
                </motion.div>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-black">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600"
                        alt="Quality Steel"
                        className="w-full h-full object-cover grayscale"
                    />
                </motion.div>
            </div>
        </section>
    );
}

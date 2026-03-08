'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import Link from 'next/link';

export function FullScreenFooter() {
    const { lang } = useLang();

    return (
        <section className="relative w-full h-screen snap-start bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/10 z-0" />

            <div className="relative z-10 max-w-4xl px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
                        {lang === 'ENG' ? 'READY TO BUILD?' : '성공적인 파트너십의 시작'}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light mb-12">
                        {lang === 'ENG'
                            ? 'Contact A1 Special Steel for unmatched quality and service.'
                            : '에이원특수강과 함께 최고 수준의 특수강 솔루션을 경험하세요.'}
                    </p>

                    <Link href="/contact" className="inline-block bg-white text-black font-bold text-lg md:text-xl px-12 py-5 hover:bg-gray-200 transition-colors">
                        {lang === 'ENG' ? 'Contact Us' : '문의하기'}
                    </Link>
                </motion.div>
            </div>

            {/* Minimal Footer Credits */}
            <div className="absolute bottom-8 left-0 right-0 px-8 flex justify-between text-gray-500 text-sm font-medium z-10 w-full max-w-7xl mx-auto">
                <span>© 2024 A1 Special Steel</span>
                <Link href="/about/map" className="hover:text-white transition-colors">
                    {lang === 'ENG' ? 'Location Map' : '오시는 길'}
                </Link>
            </div>
        </section>
    );
}

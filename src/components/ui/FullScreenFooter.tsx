'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';

export function FullScreenFooter() {
    const { lang } = useLang();

    return (
        <section className="relative w-full min-h-screen snap-start bg-black flex flex-col overflow-hidden">
            {/* CTA Section */}
            <div className="relative flex-grow flex flex-col items-center justify-center py-24 md:py-32">
                <div className="absolute inset-0 bg-blue-900/5 z-0" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl px-4 text-center"
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

            {/* Actual Footer Component */}
            <div className="relative z-20">
                <Footer />
            </div>
        </section>
    );
}

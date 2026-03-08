'use client';

import { motion, Variants } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FullScreenHero() {
    const { lang } = useLang();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <section className="relative w-full h-screen snap-start overflow-hidden bg-black flex items-center justify-center">
            {/* Background Image with Ken Burns effect */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute inset-0 z-0 overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/60 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/hero/hero-1.jpg"
                    className="w-full h-full object-cover"
                >
                    <source src="https://cdn.pixabay.com/video/2021/10/31/94063-641767740_large.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Content Segment */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left mt-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-4xl relative"
                >
                    {/* Animated Glow/Flash Effect behind text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -100 }}
                        animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 1.5], x: [-100, 200, 400] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
                        className="absolute -inset-10 bg-blue-500/20 blur-3xl rounded-full z-[-1] pointer-events-none"
                    />

                    <motion.h1 variants={textVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.2] mb-6 whitespace-pre-line relative overflow-hidden">
                        {lang === 'ENG' ? 'A1 Special Steel' : 'A1 Special Steel'}
                        {/* Text Sweep Flash Effect */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: 'linear' }}
                            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                        />
                    </motion.h1>

                    <motion.p variants={textVariants} className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl">
                        {lang === 'ENG' ? '' : '에이원특수강'}
                    </motion.p>

                    <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="/products/special-steel" className="group flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white hover:bg-gray-200 transition-colors">
                            {lang === 'ENG' ? 'Explore Products' : '제품 탐색'}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/contact" className="group flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            {lang === 'ENG' ? 'Contact Us' : '문의하기'}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 z-20"
            >
                <span className="text-sm tracking-widest uppercase mb-2 font-bold">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
                />
            </motion.div>
        </section>
    );
}

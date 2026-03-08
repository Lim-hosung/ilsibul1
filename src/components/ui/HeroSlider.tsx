'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideCTA {
    labelKOR: string;
    labelENG: string;
    href: string;
}

interface Slide {
    imageSrc: string;
    titleKOR: string;
    titleENG: string;
    subtitleKOR: string;
    subtitleENG: string;
    ctas?: SlideCTA[];
}

interface HeroSliderProps {
    slides: Slide[];
    lang: 'ENG' | 'KOR';
    children?: ReactNode;
    interval?: number;
}

export function HeroSlider({ slides, lang, children, interval = 6000 }: HeroSliderProps) {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [animating, setAnimating] = useState(false);

    const goTo = useCallback((idx: number) => {
        if (animating || idx === current) return;
        setPrev(current);
        setAnimating(true);
        setCurrent(idx);
        setTimeout(() => {
            setPrev(null);
            setAnimating(false);
        }, 900);
    }, [animating, current]);

    const next = useCallback(() => {
        goTo((current + 1) % slides.length);
    }, [current, slides.length, goTo]);

    const prev_ = useCallback(() => {
        goTo((current - 1 + slides.length) % slides.length);
    }, [current, slides.length, goTo]);

    useEffect(() => {
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [next, interval]);

    return (
        <div className="relative w-full min-h-[600px] lg:min-h-[780px] overflow-hidden bg-gray-950">

            {/* Slides */}
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                    className="absolute inset-0 z-0"
                >
                    <motion.img
                        src={slides[current].imageSrc}
                        alt=""
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.08 }}
                        transition={{ duration: interval / 1000 + 1, ease: 'linear' }}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading={current === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/60 to-gray-900/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full min-h-[600px] lg:min-h-[780px] flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
                    <div className="max-w-3xl">
                        {/* Slide counter */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-blue-400 font-bold text-sm tracking-widest">
                                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                            </span>
                            <div className="w-12 h-px bg-blue-400" />
                        </div>

                        {/* Title */}
                        <motion.h1
                            key={`title-${current}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-wide mb-6 leading-[1.1] whitespace-pre-line"
                        >
                            {lang === 'ENG' ? slides[current].titleENG : slides[current].titleKOR}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            key={`sub-${current}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="text-lg sm:text-xl text-gray-300 font-medium max-w-2xl leading-relaxed mb-10 whitespace-pre-line"
                        >
                            {lang === 'ENG' ? slides[current].subtitleENG : slides[current].subtitleKOR}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            key={`cta-${current}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="flex flex-wrap gap-3"
                        >
                            {slides[current].ctas
                                ? slides[current].ctas!.map((cta, i) => (
                                    <Link
                                        key={i}
                                        href={cta.href}
                                        className="px-5 py-2.5 bg-white/15 text-white font-bold rounded-lg backdrop-blur-sm border border-white/25 hover:bg-blue-600 hover:border-blue-500 transition-all duration-200 text-sm"
                                    >
                                        {lang === 'ENG' ? cta.labelENG : cta.labelKOR}
                                    </Link>
                                ))
                                : children
                            }
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Arrow Controls */}
            <button
                onClick={prev_}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200"
                aria-label="Previous"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={next}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200"
                aria-label="Next"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`transition-all duration-500 rounded-full ${idx === current
                            ? 'w-8 h-2 bg-blue-400'
                            : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                            }`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/10">
                <div
                    key={current}
                    className="h-full bg-blue-500"
                    style={{
                        animation: `progressBar ${interval}ms linear forwards`,
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes progressBar {
                    from { width: 0%; }
                    to   { width: 100%; }
                }
            `}</style>
        </div>
    );
}

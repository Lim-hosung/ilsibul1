'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
            {slides.map((slide, idx) => {
                const isActive = idx === current;
                const isPrev = idx === prev;

                return (
                    <div
                        key={idx}
                        className="absolute inset-0"
                        style={{
                            opacity: isActive ? 1 : isPrev ? 0 : 0,
                            transition: 'opacity 0.9s ease-in-out',
                            zIndex: isActive ? 2 : isPrev ? 1 : 0,
                        }}
                    >
                        {/* Background image using img tag for better reliability */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={slide.imageSrc}
                            alt=""
                            className={`absolute inset-0 w-full h-full object-cover ${isActive ? 'ken-burns' : ''}`}
                            loading={idx === 0 ? 'eager' : 'lazy'}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/60 to-gray-900/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
                    </div>
                );
            })}

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
                        <h1
                            key={`title-${current}`}
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-wide mb-6 leading-[1.1] whitespace-pre-line"
                            style={{ animation: 'slideUp 0.8s ease-out forwards' }}
                        >
                            {lang === 'ENG' ? slides[current].titleENG : slides[current].titleKOR}
                        </h1>

                        {/* Subtitle */}
                        <p
                            key={`sub-${current}`}
                            className="text-lg sm:text-xl text-gray-300 font-medium max-w-2xl leading-relaxed mb-10 whitespace-pre-line"
                            style={{ animation: 'slideUp 0.8s ease-out 0.15s both' }}
                        >
                            {lang === 'ENG' ? slides[current].subtitleENG : slides[current].subtitleKOR}
                        </p>

                        {/* CTA Buttons */}
                        <div
                            key={`cta-${current}`}
                            className="flex flex-wrap gap-3"
                            style={{ animation: 'slideUp 0.8s ease-out 0.3s both' }}
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
                        </div>
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
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes progressBar {
                    from { width: 0%; }
                    to   { width: 100%; }
                }
            `}</style>
        </div>
    );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import Link from 'next/link';

const industries = [
    {
        id: 'heavy',
        name: 'Heavy Equipment',
        kor: '중장비',
        img: '/images/industry/heavy-equipment.jpg',
        href: '/industry/heavy-equipment'
    },
    {
        id: 'auto',
        name: 'Automotive',
        kor: '자동차',
        img: '/images/hero/hero-4.jpg',
        href: '/industry/automotive'
    },
    {
        id: 'defense',
        name: 'Defense',
        kor: '방산',
        img: '/images/industry/defense.jpg',
        href: '/industry/defense'
    },
    {
        id: 'ship',
        name: 'Shipbuilding',
        kor: '조선',
        img: '/images/industry/shipbuilding.jpg',
        href: '/industry/shipbuilding'
    },
    {
        id: 'energy',
        name: 'Energy',
        kor: '에너지',
        img: '/images/hero/hero-2.jpg',
        href: '/industry/energy'
    },
];

export function InteractiveIndustries() {
    const { lang } = useLang();
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="relative w-full h-screen snap-start bg-black overflow-hidden flex flex-col">
            {/* Cinematic Video Background for Section */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="https://cdn.pixabay.com/video/2025/05/28/282244_large.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="absolute top-12 left-12 z-30 pointer-events-none">
                <h2 className="text-2xl md:text-3xl font-bold text-white/50 tracking-widest uppercase">
                    {lang === 'ENG' ? 'Industries' : '적용 산업'}
                </h2>
            </div>

            <div className="flex w-full h-full relative z-20">
                {industries.map((ind) => (
                    <motion.div
                        key={ind.id}
                        onMouseEnter={() => setHoveredId(ind.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        animate={{
                            width: hoveredId === ind.id ? '40%' : '15%',
                        }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative h-full overflow-hidden border-r border-white/5 cursor-pointer group flex-grow"
                    >
                        {/* Blade Image */}
                        <motion.div
                            animate={{
                                scale: hoveredId === ind.id ? 1.1 : 1,
                                filter: hoveredId === ind.id ? 'grayscale(0%)' : 'grayscale(100%) brightness(50%)',
                                opacity: hoveredId === ind.id ? 1 : 0.4
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={ind.img}
                                alt={ind.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                        {/* Text Content */}
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-20 px-4">
                            <motion.div
                                animate={{
                                    rotate: hoveredId === ind.id ? 0 : -90,
                                    y: hoveredId === ind.id ? 0 : -100,
                                    opacity: hoveredId === ind.id ? 1 : 0.6,
                                }}
                                className="whitespace-nowrap transition-all duration-500"
                            >
                                <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                    {lang === 'ENG' ? ind.name : ind.kor}
                                </span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: hoveredId === ind.id ? 1 : 0,
                                    y: hoveredId === ind.id ? 0 : 20,
                                }}
                                className="mt-8"
                            >
                                <Link
                                    href={ind.href}
                                    className="px-6 py-2 border border-white text-white text-sm hover:bg-white hover:text-black transition-colors"
                                >
                                    EXPLORE
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

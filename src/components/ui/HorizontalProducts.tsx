'use client';

import { motion, Variants } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HorizontalProducts() {
    const { lang } = useLang();

    const products = [
        { title: 'Special Steel', kor: '특수강', img: '/images/products/special-steel.jpg' },
        { title: 'Secondary Processing', kor: '이차가공재', img: '/images/products/secondary.jpg' },
        { title: 'Large Forging', kor: '대형단조', img: '/images/products/large-forging.jpg' },
        { title: 'Die Forging', kor: '형단조', img: '/images/products/die-forging.jpg' },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <section className="relative w-full h-screen snap-start bg-zinc-900 flex flex-col justify-center overflow-hidden py-20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                    {lang === 'ENG' ? 'PRODUCTS' : '주요 제품'}
                </h2>
                <Link href="/products/special-steel" className="hidden md:flex text-gray-400 hover:text-white text-lg font-bold transition-colors items-center">
                    {lang === 'ENG' ? 'Explore Details' : '상세보기'} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-[50vh]">
                    {products.map((p, idx) => (
                        <motion.div variants={cardVariants} key={idx} className="relative group overflow-hidden bg-black w-full h-full text-white">
                            <img src={p.img} alt={p.title} className="w-full h-full object-cover border border-white/10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                            <div className="absolute bottom-8 left-8 right-8 z-10">
                                <h3 className="text-3xl font-black mb-2">{lang === 'ENG' ? p.title : p.kor}</h3>
                                <Link href="/products/special-steel" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-transparent group-hover:border-white transition-colors">
                                    {lang === 'ENG' ? 'View Details' : '상세 보기'} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={cardVariants} className="mt-8 flex justify-end md:hidden">
                    <Link href="/products/special-steel" className="text-gray-400 hover:text-white text-lg font-bold transition-colors">
                        {lang === 'ENG' ? 'Explore All Products →' : '전체 품목 보기 →'}
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}

import { ReactNode } from 'react';
import Link from 'next/link';

interface StaggeredItem {
    title: string;
    description?: string;
    imageUrl: string;
    href?: string;
}

interface StaggeredVerticalGridProps {
    title: string;
    subtitle?: string;
    features: StaggeredItem[];
}

export function StaggeredVerticalGrid({ title, subtitle, features }: StaggeredVerticalGridProps) {
    return (
        <section className="py-8 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-6 md:mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4 whitespace-pre-line">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed whitespace-pre-line">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className={`grid grid-cols-2 md:grid-cols-3 ${features.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-1 md:gap-2 items-start`}>
                    {features.map((feature, idx) => {
                        // Create a uniform alternating stagger pattern
                        let mtClass = idx % 2 === 0 ? 'mt-0' : 'md:mt-12 lg:mt-16';

                        const cardContent = (
                            <div className="relative group w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl shadow-sm cursor-pointer border border-gray-100">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${feature.imageUrl})` }}
                                />

                                {/* Gradient Overlay for Text Readability */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 transition-opacity duration-300" />
                                <div className="absolute inset-0 hover:bg-black/20 transition-colors duration-300" />

                                {/* Text Content overlaying at the top/left depending on design */}
                                <div className="absolute top-6 left-6 right-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-md pb-2">
                                        {feature.title}
                                    </h3>
                                </div>

                                <div className="absolute inset-x-6 bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                    {feature.description && (
                                        <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                                            {feature.description}
                                        </p>
                                    )}
                                    {feature.href && (
                                        <span className="inline-block mt-3 text-sm font-semibold text-white uppercase tracking-wider border-b border-white/50 pb-1 hover:border-white">
                                            Explore
                                        </span>
                                    )}
                                </div>
                            </div>
                        );

                        return feature.href ? (
                            <Link key={idx} href={feature.href} className={`block ${mtClass}`}>
                                {cardContent}
                            </Link>
                        ) : (
                            <div key={idx} className={mtClass}>
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

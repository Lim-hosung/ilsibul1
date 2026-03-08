import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface FeatureItem {
    title: string;
    description: string;
    icon?: ReactNode;
    imageUrl?: string;
    href?: string;
}

interface FeatureGridProps {
    title: string;
    subtitle?: string;
    features: FeatureItem[];
    columns?: 2 | 3 | 4;
}

export function FeatureGrid({ title, subtitle, features, columns = 3 }: FeatureGridProps) {
    const colClasses = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-2 lg:grid-cols-4',
    };

    return (
        <section className="py-8 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-8 md:mb-12 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">{title}</h2>
                    {subtitle && (
                        <p className="text-lg text-gray-500 leading-relaxed font-medium">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className={`grid grid-cols-1 ${colClasses[columns]} gap-x-8 gap-y-8`}>
                    {features.map((feature, idx) => {
                        const content = (
                            <>
                                {feature.imageUrl && (
                                    <div className="aspect-[4/3] w-full overflow-hidden rounded-xl mb-6 bg-gray-100">
                                        <img
                                            src={feature.imageUrl}
                                            alt={feature.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}

                                {feature.icon && (
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                )}

                                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-500 leading-relaxed max-w-sm">
                                    {feature.description}
                                </p>

                                {feature.href && (
                                    <div className="mt-6 flex items-center text-sm font-semibold text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                                        Learn more <ArrowRight className="ml-1 w-4 h-4" />
                                    </div>
                                )}
                            </>
                        );

                        if (feature.href) {
                            return (
                                <Link key={idx} href={feature.href} className="group block">
                                    {content}
                                </Link>
                            );
                        }

                        return (
                            <div key={idx} className="group">
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

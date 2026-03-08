'use client';

import { useLang } from '@/lib/LanguageContext';

interface StatItem {
    labelKOR: string;
    labelENG: string;
    value: string;
    suffixKOR?: string;
    suffixENG?: string;
}

interface StatStripProps {
    stats: StatItem[];
    theme?: 'light' | 'dark' | 'blue';
}

export function StatStrip({ stats, theme = 'dark' }: StatStripProps) {
    const { lang } = useLang();

    const themeClasses = {
        light: 'bg-white text-gray-900 border-y border-gray-100',
        dark: 'bg-gray-950 text-white',
        blue: 'bg-blue-700 text-white'
    };

    const labelClasses = {
        light: 'text-gray-500',
        dark: 'text-gray-400',
        blue: 'text-blue-100'
    };

    return (
        <div className={`${themeClasses[theme]} py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
                    {stats.map((stat, idx) => {
                        const label = lang === 'ENG' ? stat.labelENG : stat.labelKOR;
                        const suffix = lang === 'ENG' ? (stat.suffixENG ?? '') : (stat.suffixKOR ?? '');
                        return (
                            <div key={idx} className="flex flex-col items-center justify-center text-center px-2">
                                <div className="flex items-baseline justify-center font-black tracking-tighter mb-2 whitespace-nowrap">
                                    <span className="text-2xl md:text-3xl leading-tight">{stat.value}</span>
                                    {suffix && (
                                        <span className="text-sm md:text-base font-bold ml-1">{suffix}</span>
                                    )}
                                </div>
                                <span className={`text-xs md:text-sm font-medium tracking-wide ${labelClasses[theme]}`}>
                                    {label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

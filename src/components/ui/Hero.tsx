import { ReactNode } from 'react';

interface HeroProps {
    title: string;
    subtitle?: string;
    imageSrc?: string;
    align?: 'left' | 'center';
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
}

export function Hero({
    title,
    subtitle,
    imageSrc = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop',
    align = 'left',
    size = 'md',
    children
}: HeroProps) {

    const heightClasses = {
        sm: 'min-h-[300px]',
        md: 'min-h-[400px] lg:min-h-[500px]',
        lg: 'min-h-[500px] lg:min-h-[700px]'
    };

    const alignClasses = {
        left: 'items-center justify-start text-left',
        center: 'items-center justify-center text-center mx-auto'
    };

    return (
        <div className={`relative flex w-full ${heightClasses[size]} overflow-hidden bg-gray-900`}>
            {/* Background Image */}
            {imageSrc && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={imageSrc}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-gray-900/30" />
            <div className="hero-pattern absolute inset-0 opacity-20 mix-blend-overlay" />

            {/* Content */}
            <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full flex ${alignClasses[align]}`}>
                <div className={`max-w-5xl ${align === 'center' ? 'mx-auto flex flex-col items-center' : ''}`}>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide mb-6 leading-[1.15]">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-2xl leading-relaxed mb-8">
                            {subtitle}
                        </p>
                    )}
                    {children && (
                        <div className="mt-8 flex flex-wrap gap-4">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

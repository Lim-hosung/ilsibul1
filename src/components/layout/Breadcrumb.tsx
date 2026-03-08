'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumb() {
    const pathname = usePathname();
    if (pathname === '/') return null;

    const paths = pathname.split('/').filter(Boolean);

    return (
        <nav className="bg-gray-50 border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8 flex text-sm text-gray-500 overflow-x-auto">
            <div className="max-w-7xl mx-auto w-full flex items-center whitespace-nowrap">
                <Link href="/" className="hover:text-blue-700 transition-colors flex items-center">
                    <Home className="w-4 h-4" />
                    <span className="sr-only">Home</span>
                </Link>

                {paths.map((path, index) => {
                    const href = `/${paths.slice(0, index + 1).join('/')}`;
                    const isLast = index === paths.length - 1;

                    // Format text: products -> Products, special-steel -> Special Steel
                    const text = path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

                    return (
                        <div key={path} className="flex items-center">
                            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                            {isLast ? (
                                <span className="font-semibold text-gray-900" aria-current="page">{text}</span>
                            ) : (
                                <Link href={href} className="hover:text-blue-700 transition-colors">
                                    {text}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}

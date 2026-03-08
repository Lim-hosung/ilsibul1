'use client';

import { usePathname } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';

export function ConditionalFooter() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    if (isHomePage) return null;

    return <Footer />;
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navItems, navItemsKOR } from '@/data/dummy';
import { useLang } from '@/lib/LanguageContext';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
    const { lang, setLang } = useLang();
    const pathname = usePathname();

    const currentNavItems = lang === 'ENG' ? navItems : navItemsKOR;

    useEffect(() => {
        setIsMenuOpen(false);
        setOpenSubMenus({});
    }, [pathname]);

    const toggleSubMenu = (menuName: string) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [menuName]: !prev[menuName]
        }));
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
                <div className="w-full px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-900 flex items-center gap-2.5">
                                <div className="w-8 h-8 bg-blue-700 text-white rounded-sm flex items-center justify-center font-black">A1</div>
                                <span>Special Steel</span>
                                <span className="hidden sm:inline text-gray-300 font-light">|</span>
                                <span className="hidden sm:inline text-base font-bold text-gray-500 tracking-normal">에이원 특수강</span>
                            </Link>
                        </div>

                        {/* Right side: ENG/KOR toggle + Hamburger */}
                        <div className="flex items-center gap-4">
                            {/* Language Toggle in Top Nav */}
                            <div className="flex items-center gap-1 text-sm font-bold">
                                <button
                                    className={`px-2 py-1 rounded transition-colors ${lang === 'ENG' ? 'text-blue-700 bg-blue-50' : 'text-gray-400 hover:text-gray-700'}`}
                                    onClick={() => setLang('ENG')}
                                >
                                    ENG
                                </button>
                                <span className="text-gray-200">|</span>
                                <button
                                    className={`px-2 py-1 rounded transition-colors ${lang === 'KOR' ? 'text-blue-700 bg-blue-50' : 'text-gray-400 hover:text-gray-700'}`}
                                    onClick={() => setLang('KOR')}
                                >
                                    KOR
                                </button>
                            </div>

                            {/* Hamburger */}
                            <button
                                type="button"
                                className="p-2 -mr-2 rounded-md text-gray-900 hover:text-blue-700 hover:bg-gray-100 focus:outline-none transition-colors"
                                onClick={() => setIsMenuOpen(true)}
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Menu className="h-8 w-8" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Backdrop Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Right Sliding Floating Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-gray-50 shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Menu Header - 닫기 버튼만 */}
                <div className="flex justify-end items-center px-8 py-8 border-b border-gray-200 bg-white">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-500 hover:text-gray-900 transition-colors p-1"
                    >
                        <X className="h-8 w-8" />
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>

                {/* Main Navigation List */}
                <div className="flex-grow overflow-y-auto px-8 py-10">
                    <nav className="space-y-8">
                        {currentNavItems.map((item) => (
                            <div key={item.name} className="border-b border-gray-100 pb-4 last:border-0 pl-2">
                                <div className="flex items-center justify-between">
                                    {item.submenu ? (
                                        <button
                                            onClick={() => toggleSubMenu(item.name)}
                                            className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-blue-700 tracking-tight transition-colors inline-flex items-center gap-3 w-full text-left"
                                        >
                                            {item.name}
                                            <ChevronRight className={`w-6 h-6 transition-transform duration-300 ml-auto flex-shrink-0 ${openSubMenus[item.name] ? 'rotate-90 text-blue-700' : 'text-gray-400'}`} />
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-blue-700 tracking-tight transition-colors inline-block"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>

                                {item.submenu && (() => {
                                    const navItem = item as { tagline?: string; description?: string; submenu: { name: string; href: string }[] };
                                    return (
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubMenus[item.name] ? 'max-h-[480px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            {navItem.tagline && (
                                                <div className="mb-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                                                    <p className="text-sm font-bold text-blue-800 mb-1">{'"'}{navItem.tagline}{'"'}</p>
                                                    {navItem.description && (
                                                        <p className="text-xs text-blue-700 leading-relaxed">{navItem.description}</p>
                                                    )}
                                                </div>
                                            )}
                                            <div className="pl-4 border-l-2 border-blue-100 space-y-3">
                                                {item.submenu.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="block text-base font-semibold text-gray-500 hover:text-blue-700 transition-colors py-1"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Menu Footer */}
                <div className="px-8 py-8 bg-gray-100 border-t border-gray-200 mt-auto">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                        {lang === 'ENG' ? 'QUICK LINKS' : '빠른 참조'}
                    </h4>
                    <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 font-medium">
                        <Link href="/contact" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'Contact Us' : '제품 문의'}
                        </Link>
                        <Link href="/catalog" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'E-Catalog' : 'E-카탈로그'}
                        </Link>
                        <Link href="/network" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'Network' : '네트워크'}
                        </Link>
                        <Link href="/about/intro" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'About Us' : '회사 소개'}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

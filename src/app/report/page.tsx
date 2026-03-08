'use client';
import { Hero } from '@/components/ui/Hero';
import { useState } from 'react';
import { Download, FileText, Search } from 'lucide-react';

export default function CatalogPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const catalogs = [
        { id: 1, title: 'Special Steel Product Guide 2026', category: 'Special Steel', size: '4.2 MB' },
        { id: 2, title: 'Open Die Forging Capabilities', category: 'Forging', size: '5.1 MB' },
        { id: 3, title: 'Automotive Alloy Grades', category: 'Automotive', size: '3.8 MB' },
        { id: 4, title: 'Nuclear Material Certifications', category: 'Nuclear', size: '2.5 MB' },
        { id: 5, title: 'Die Forging Design Tolerances', category: 'Forging', size: '6.7 MB' },
        { id: 6, title: 'Corporate Brochure 2026', category: 'Corporate', size: '12.4 MB' },
    ];

    const categories = ['All', 'Special Steel', 'Forging', 'Automotive', 'Nuclear', 'Corporate'];

    const filteredCatalogs = activeCategory === 'All'
        ? catalogs
        : catalogs.filter(c => c.category === activeCategory);

    return (
        <>
            <Hero
                title="Catalogs & Brochures"
                subtitle="Download technical specifications and product guides."
                imageSrc="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&auto=format&fit=crop"
                size="sm"
            />

            <div className="py-20 bg-gray-50 min-h-[50vh]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <div className="flex overflow-x-auto gap-2 w-full md:w-auto pb-2 md:pb-0">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-blue-700 text-white' : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-72 border border-gray-400">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search catalogs..."
                                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <ul className="divide-y divide-gray-100">
                            {filteredCatalogs.map(catalog => (
                                <li key={catalog.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center mr-4">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{catalog.title}</h4>
                                            <div className="flex gap-3 text-xs text-gray-500 mt-1">
                                                <span className="font-medium bg-gray-100 px-2 rounded uppercase text-[10px] tracking-wider">{catalog.category}</span>
                                                <span>PDF / {catalog.size}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="flex items-center text-sm font-bold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded transition-colors">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </button>
                                </li>
                            ))}
                        </ul>
                        {filteredCatalogs.length === 0 && (
                            <div className="p-12 text-center text-gray-500">
                                No catalogs found in this category.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

import Link from 'next/link';

interface CardItem {
    id: string | number;
    title: string;
    description?: string;
    date?: string;
    category?: string;
    href: string;
}

interface CardListProps {
    title?: string;
    items: CardItem[];
    viewAllHref?: string;
    viewAllText?: string;
}

export function CardList({ title, items, viewAllHref, viewAllText = "View All" }: CardListProps) {
    return (
        <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {(title || viewAllHref) && (
                    <div className="flex justify-between items-end mb-12">
                        {title && <h2 className="text-3xl font-black text-gray-900 tracking-tight">{title}</h2>}
                        {viewAllHref && (
                            <Link href={viewAllHref} className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors">
                                {viewAllText} &rarr;
                            </Link>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => {
                        const isExternal = item.href.startsWith('http');
                        const cardClass = "bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group flex flex-col h-full";
                        const cardContent = (
                            <>
                                {item.category && (
                                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-4 block">
                                        {item.category}
                                    </span>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors tracking-tight line-clamp-2">
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                        {item.description}
                                    </p>
                                )}
                                {item.date && (
                                    <div className="mt-auto pt-6 border-t border-gray-100 text-sm text-gray-400 font-medium">
                                        {item.date}
                                    </div>
                                )}
                            </>
                        );
                        return isExternal ? (
                            <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                                {cardContent}
                            </a>
                        ) : (
                            <Link key={item.id} href={item.href} className={cardClass}>
                                {cardContent}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

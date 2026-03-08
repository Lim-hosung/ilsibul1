import { MetadataRoute } from 'next';
import { navItems } from '@/data/dummy';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://a1specialsteel.example.com';

    // Base routes
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    ];

    // Dynamic routes from dummy data structure
    navItems.forEach(item => {
        // Add main category page if it exists (for a1, they route to first child usually, but we register the href)
        if (item.href && item.href !== '/') {
            routes.push({
                url: `${baseUrl}${item.href}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            });
        }

        // Add sub-pages
        if (item.submenu) {
            item.submenu.forEach(sub => {
                routes.push({
                    url: `${baseUrl}${sub.href}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.7,
                });
            });
        }
    });

    return routes;
}

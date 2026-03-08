import { Hero } from '@/components/ui/Hero';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CTASection } from '@/components/ui/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Applications - Energy & Machinery',
    description: 'A1 Special Steel applications for Energy and Heavy Machinery.',
};

export default function GeneralApplicationPage() {
    const applications = [
        {
            title: 'Power Generation',
            description: 'Turbine rotors and generator shafts for conventional power plants.',
            imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop'
        },
        {
            title: 'Renewable Energy',
            description: 'Main shafts for onshore and offshore wind turbines.',
            imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop'
        },
        {
            title: 'Heavy Machinery',
            description: 'Durable components for mining, construction, and earthmoving equipment.',
            imageUrl: 'https://images.unsplash.com/photo-1541888069695-1f9f2dd0c609?w=800&auto=format&fit=crop'
        }
    ];

    return (
        <>
            <Hero
                title="Energy & Machinery"
                subtitle="Powering the World&apos;s Infrastructure"
                imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg text-gray-600 leading-relaxed">
                <p>
                    A1 Special Steel provides the foundational materials that power global infrastructure.
                    From the massive shafts turning within wind turbines to the rugged components of heavy mining
                    machinery, our products ensure reliability in the world&apos;s most demanding electrical and mechanical systems.
                </p>
            </div>

            <div className="bg-gray-50 border-y border-gray-100">
                <FeatureGrid
                    title="Industry Solutions"
                    features={applications}
                    columns={3}
                />
            </div>

            <CTASection
                title="Explore Technical Specs"
                description="Review detailed metallurgical data for our industrial steel grades."
                buttonText="Download Catalog"
                buttonHref="/catalog"
            />
        </>
    );
}

import { Hero } from '@/components/ui/Hero';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CTASection } from '@/components/ui/CTASection';
import { Anchor, Settings, Zap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Open Die Forging',
    description: 'Large scale open die forging products for heavy industries.',
};

export default function OpenDieForgingPage() {
    const products = [
        {
            title: 'Marine Shafts',
            description: 'Propeller and intermediate shafts for commercial and naval vessels.',
            imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop'
        },
        {
            title: 'Power Generaton Rotors',
            description: 'Turbine and generator rotors for conventional and nuclear power plants.',
            imageUrl: 'https://images.unsplash.com/photo-1478059425650-ca13d6d422f4?w=800&auto=format&fit=crop'
        },
        {
            title: 'Industrial Rolls',
            description: 'Work rolls and backup rolls for steel mills and paper manufacturing.',
            imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop'
        }
    ];

    return (
        <>
            <Hero
                title="Open Die Forging"
                subtitle="Massive Scale. Microscopic Precision."
                imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg text-gray-600 leading-relaxed">
                <p>
                    Utilizing some of the largest forging presses in the world, our Open Die Forging division shapes
                    massive steel ingots into critical components for heavy industry. Our integrated process, from
                    steelmaking to final machining, guarantees the structural integrity required for applications
                    where failure is not an option.
                </p>
            </div>

            <div className="bg-gray-50 border-y border-gray-100">
                <FeatureGrid
                    title="Major Forged Products"
                    features={products}
                    columns={3}
                />
            </div>

            <CTASection
                title="Discuss Your Custom Project"
                description="We specialize in forging custom geometries up to 150 tons."
                buttonText="Request a Quote"
            />
        </>
    );
}

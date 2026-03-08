import { Hero } from '@/components/ui/Hero';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CTASection } from '@/components/ui/CTASection';
import { ShieldCheck, Target, Activity } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nuclear & Die Forging',
    description: 'Precision forged materials for energy and automotive.',
};

export default function NuclearDieForgingPage() {
    const capabilities = [
        {
            title: 'ASME Certified',
            description: 'Full compliance with international nuclear material standards.',
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: 'Precision Tolerances',
            description: 'Near-net shape forging reducing machining time and material waste.',
            icon: <Target className="w-6 h-6" />
        },
        {
            title: 'NDE Testing',
            description: '100% volumetric non-destructive examination on critical parts.',
            icon: <Activity className="w-6 h-6" />
        }
    ];

    return (
        <>
            <Hero
                title="Nuclear & Die Forging"
                subtitle="The Highest Standard of Reliability"
                imageSrc="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg text-gray-600 leading-relaxed">
                <p>
                    Delivering zero-defect solutions for the most critical industrial sectors. Our nuclear materials
                    are trusted in reactor vessels worldwide, while our precision die forging lines produce high-volume,
                    high-strength components for the global automotive and aerospace supply chains.
                </p>
            </div>

            <FeatureGrid
                title="Quality Assurance & Capabilities"
                features={capabilities}
                columns={3}
            />

            <CTASection
                title="Need Technical Documentation?"
                description="Access our material test reports and certification documents."
                buttonText="View Reports"
                buttonHref="/report"
            />
        </>
    );
}

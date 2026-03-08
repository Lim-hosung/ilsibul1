import { Hero } from '@/components/ui/Hero';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { Microscope, Cpu, Layers } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research & Development',
    description: 'A1 Special Steel R&D capabilities and material science innovation.',
};

export default function RNDPage() {
    const focuses = [
        {
            title: 'Advanced Alloy Design',
            description: 'Developing new material compositions using computational thermodynamics and kinetic modeling.',
            icon: <Cpu className="w-6 h-6" />
        },
        {
            title: 'Microstructural Analysis',
            description: 'State-of-the-art electron microscopy focusing on grain boundary engineering.',
            icon: <Microscope className="w-6 h-6" />
        },
        {
            title: 'Process Optimization',
            description: 'Simulating thermomechanical processes to enhance material yield and reduce energy consumption.',
            icon: <Layers className="w-6 h-6" />
        }
    ];

    return (
        <>
            <Hero
                title="Research & Development"
                subtitle="Pushing the Boundaries of Material Science"
                imageSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg text-gray-600 leading-relaxed">
                <p>
                    At A1 Special Steel, innovation is woven into our DNA. Our dedicated R&D center houses over 200
                    material scientists and engineers focused on solving the most complex metallurgical challenges.
                    Through continuous research, we develop custom alloys that enable our clients to build safer,
                    lighter, and more efficient industrial systems.
                </p>
            </div>

            <FeatureGrid
                title="Core Research Focus Areas"
                features={focuses}
                columns={3}
            />
        </>
    );
}

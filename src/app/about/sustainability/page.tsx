import { Hero } from '@/components/ui/Hero';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { Target, Heart, Eye } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Corporate Vision & Intro',
    description: 'A1 Special Steel corporate vision, core values and introduction.',
};

export default function IntroPage() {
    const values = [
        {
            title: 'Integrity',
            description: 'We conduct our business with the highest ethical standards, ensuring transparency in all our global operations.',
            icon: <Target className="w-6 h-6" />
        },
        {
            title: 'Excellence',
            description: 'We strive for perfection in every ingot we cast and every component we forge.',
            icon: <Heart className="w-6 h-6" />
        },
        {
            title: 'Innovation',
            description: 'We continuously invest in R&D to pioneer the next generation of advanced materials.',
            icon: <Eye className="w-6 h-6" />
        }
    ];

    return (
        <>
            <Hero
                title="Who We Are"
                subtitle="Forging the foundations of modern industry since our establishment."
                imageSrc="https://images.unsplash.com/photo-1574689211272-bc1550ce71cc?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-sm font-bold text-blue-700 tracking-widest uppercase mb-4">Our Vision</h2>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">
                    &quot;To be the world&#39;s most trusted partner in advanced materials, driving sustainable industrial progress.&quot;
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                    From our roots as a domestic steelmaker, A1 Special Steel has grown into a global powerhouse
                    in the manufacturing of special alloy steels and heavy open-die forgings. We are driven by a
                    commitment to metallurgical excellence and a profound responsibility to the industries that rely
                    on our materials to operate safely and efficiently.
                </p>

                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 relative">
                    <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop"
                        alt="A1 Special Steel Facility"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="bg-gray-50 border-y border-gray-100">
                <FeatureGrid
                    title="Our Core Values"
                    features={values}
                    columns={3}
                />
            </div>
        </>
    );
}

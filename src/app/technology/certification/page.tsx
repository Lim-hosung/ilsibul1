import { Hero } from '@/components/ui/Hero';
import { CTASection } from '@/components/ui/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Manufacturing Process',
    description: 'Integrated steelmaking and forging processes at A1 Special Steel.',
};

export default function ProcessPage() {
    return (
        <>
            <Hero
                title="Manufacturing Process"
                subtitle="End-to-End Quality Control"
                imageSrc="https://images.unsplash.com/photo-1578328819058-b69f3a3f5de6?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Integrated Production Value Chain</h2>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">

                        {[
                            { step: '01', title: 'Steelmaking & Refining', desc: 'Electric Arc Furnace (EAF) melting followed by Ladle Refining and Vacuum Degassing for extreme purity.' },
                            { step: '02', title: 'Ingot Casting', desc: 'Bottom pouring techniques to ensure homogeneous solidification and minimal inclusions.' },
                            { step: '03', title: 'Forging', desc: 'Hydraulic presses up to 15,000 tons reshaping the internal grain structure for maximum strength.' },
                            { step: '04', title: 'Heat Treatment', desc: 'Precise quenching and tempering to achieve the exact mechanical properties required by the client.' },
                            { step: '05', title: 'Machining & Inspection', desc: 'CNC machining to near-net or final shape, followed by rigorous ultrasonic and magnetic particle testing.' }
                        ].map((item, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:even:text-right">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-700 text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    {item.step}
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CTASection
                title="Experience Our Facility"
                description="We invite our partners to tour our state-of-the-art manufacturing plants."
                buttonText="Schedule a Visit"
            />
        </>
    );
}

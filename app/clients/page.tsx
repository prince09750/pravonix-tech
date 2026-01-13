"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowRight
} from 'lucide-react';
import Footer from '../components/footer';

// --- Reusable Components ---
const AmbientBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#FDFCF8]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-yellow-100/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
);

type FadeInProps = React.PropsWithChildren<{
    delay?: number;
    className?: string;
}>;

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [delay]);

    return (
        <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
            {children}
        </div>
    );
};

// --- Client Card Component ---
const ClientCard: React.FC<{ client: { name: string; image: string }; idx: number }> = ({ client, idx }) => {
    const [imageError, setImageError] = useState(false);
    
    return (
        <FadeIn delay={idx * 50}>
            <div className="glass-card p-6 rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-stone-200/50 flex items-center justify-center min-h-[150px] bg-white">
                <div className="relative w-full h-24 flex items-center justify-center">
                    {!imageError ? (
                        <Image 
                            src={client.image}
                            alt={client.name}
                            width={200}
                            height={80}
                            className="object-contain max-w-full max-h-full"
                            unoptimized
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <p className="text-sm font-semibold text-stone-900 px-2">{client.name}</p>
                    )}
                </div>
            </div>
        </FadeIn>
    );
};

// --- Clients List with Images ---
const clients = [
    { name: "Sanskriti School", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761818023383-logo.png" },
    { name: "Seymour Management", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761644602861-logo.png" },
    { name: "Omsons India Handicraft", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761644572462-logo.png" },
    { name: "Kirana Quick Technologies Private Limited", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761307901537-logo.png" },
    { name: "SOLIDARITY ADVISORS PRIVATE LIMITED", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761307195398-logo.png" },
    { name: "CP67", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761307073516-logo.png" },
    { name: "Capital Curve", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761306951257-logo.jpeg" },
    { name: "FDX Group", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761306794323-logo.png" },
    { name: "Kalco", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/1761307901537-logo.png" },
    { name: "Bhojras", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/bhojras-1760612419392.png" },
    { name: "Wings Rehabilitation Center", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/wings-rehabilitation-1760612418801.png" },
    { name: "Airdrop JA", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/airdrop-ja-1760612418354.webp" },
    { name: "NK Architects", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/nk-architects-1760612417999.jpeg" },
    { name: "Vestiary", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/vestiary-1760612417637.jpeg" },
    { name: "Skuad", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/skuad-1760612417294.jpeg" },
    { name: "Piaah", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/piaah-1760612416885.jpeg" },
    { name: "Litmus Ink", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/litmus-ink-1760612416485.jpeg" },
    { name: "Forescribe", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/forescribe-1760612416165.jpeg" },
    { name: "Apptrove", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/apptrove-1760612415831.jpeg" },
    { name: "Spoteezy", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/spoteezy-1760612415441.png" },
    { name: "BeatRoute", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/beatroute-1760612415117.png" },
    { name: "Vibgyor Web", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/vibgyor-web-1760612414613.png" },
    { name: "Phonologix Therapy", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/phonologix-therapy-1760612414290.png" },
    { name: "Kite Digiceutix", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/kite-digiceutix-1760612413861.png" },
    { name: "Sterling Web", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/sterling-web-1760612413404.png" },
    { name: "E-Pay Later", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/epay-later-1760612413032.png" },
    { name: "Astro Reader", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/astro-reader-1760612412547.jpeg" },
    { name: "Sagitta", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/sagitta-1760612411988.jpeg" },
    { name: "Viral Hai", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/viral-hai-1760612411500.jpeg" },
    { name: "Matrix Solutions", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/minten-1760612410778.png" },
    { name: "Minten", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/minten-1760612410778.png" },
    { name: "Parashar", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/parashar-1760612410064.png" },
    { name: "Vakeel at Home", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/vakeel-at-home-1760612409594.png" },
    { name: "Papertio", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/papertio-1760612409208.png" },
    { name: "MatchMe Global", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/matchme-1760612408758.jpeg" },
    { name: "Mint HR", image: "https://cling-project.s3.ap-south-1.amazonaws.com/logos/minthr-1760612408304.png" }
];

export default function ClientsPage() {
    return (
        <div className="min-h-screen text-stone-900 selection:bg-amber-200">
            <style jsx global>{`
                .glass-card {
                    background: rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.7);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .glass-card-dark {
                    background: rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .text-gradient {
                    background: linear-gradient(to right, #78350f, #d97706);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .glow-effect {
                    filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.4));
                }
            `}</style>

            <AmbientBackground />

            <main className="relative z-10 pt-24">
                {/* Hero Section */}
                <section className="py-20 text-center relative">
                    <div className="max-w-4xl mx-auto px-6">
                        <FadeIn>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-stone-900 mb-6 leading-tight">
                                Our <span className="text-gradient">Clients</span>
                            </h1>
                            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                                When we say "Making your idea happen!" , we mean it. Same is shown by the list of our clients. We are helping every possible Entrepreneur, to build/innovate their ideas.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Clients List Section */}
                <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                            {clients.map((client, idx) => (
                                <ClientCard key={idx} client={client} idx={idx} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="py-32 px-6">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto bg-stone-900 text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-stone-900/40">
                             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent opacity-50" />
                             
                             <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Ready to Shape Your Future?</h2>
                             <p className="text-stone-400 text-xl mb-10 max-w-xl mx-auto relative z-10">
                                Let's collaborate to build your next industry-defining product. Your success story starts here.
                             </p>
                             
                             <Link href="/contact" className="group relative z-10 inline-flex items-center gap-4 bg-amber-500 text-stone-900 font-bold px-10 py-5 rounded-full hover:bg-amber-400 transition-all text-lg shadow-xl shadow-amber-500/30">
                                Connect With Us <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                             </Link>
                        </div>
                    </FadeIn>
                </section>
            </main>

            <Footer />
        </div>
    );
}
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
    ArrowRight, 
    Zap, 
    ShieldCheck, 
    BarChart2, 
    Rocket,
    Globe,
    Quote,
    Award,
    Lightbulb,
    Handshake,
    CheckCircle
} from 'lucide-react';

// --- Reusable Components ---
const AmbientBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#FDFCF8]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-yellow-100/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
);

const FadeIn = ({ children, delay = 0, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.target); };
    }, [delay]);

    return (
        <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
            {children}
        </div>
    );
};

// --- Project Data (Updated & Expanded) ---
const projects = [
    {
        name: "FinFlow Global",
        industry: "Financial Analytics & Trading",
        description: "Developed a secure, high-performance financial analytics dashboard with real-time data streaming and predictive modeling, enabling rapid, informed trading decisions.",
        challenge: "Integrating disparate market data sources and ensuring sub-millisecond latency for high-frequency trading while meeting stringent regulatory compliance.",
        solution: "Engineered a Next.js frontend with Rust-based backend microservices, leveraging WebSockets for real-time updates and AWS Fargate for scalable, compliant infrastructure.",
        results: [
            "99.99% Uptime for critical operations",
            "30% faster data processing",
            "Achieved full SOC 2 Type II compliance"
        ],
        testimonial: {
            quote: "PravonixTech transformed our vision into a robust, secure, and incredibly fast trading platform. Their expertise in FinTech is unmatched.",
            author: "Dr. Evelyn Reed",
            title: "CTO, FinFlow Global"
        },
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1621932616428-c1f0b0949d0d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image for FinTech
    },
    {
        name: "EcoCharge Network",
        industry: "Green Energy & EV Charging",
        description: "Created a nationwide smart EV charging network management system, including user-facing mobile apps and a robust operator dashboard for monitoring and maintenance.",
        challenge: "Managing a distributed network of charging stations, dynamic pricing, and user authentication across various hardware types and locations.",
        solution: "Implemented a cloud-native IoT platform on Google Cloud, developed cross-platform mobile apps with React Native, and integrated payment gateways for seamless transactions.",
        results: [
            "Expanded network to 500+ stations",
            "Improved charging session success rate by 25%",
            "Reduced operational costs by 15%"
        ],
        testimonial: {
            quote: "Their team brought a fresh perspective to our sustainable energy goals, delivering a scalable and user-friendly solution that exceeded expectations.",
            author: "Mr. Alok Sharma",
            title: "CEO, EcoCharge Network"
        },
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1627993079089-a2a2c3d5e9b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image for EV
    },
    {
        name: "MediTrack AI",
        industry: "Healthcare & AI Diagnostics",
        description: "Designed an AI-powered diagnostic support system that assists radiologists in detecting anomalies with higher accuracy and reduced review times.",
        challenge: "Developing a HIPAA-compliant system capable of processing vast amounts of medical imaging data and integrating AI models for real-time analysis.",
        solution: "Built a secure, serverless backend for data processing with Python and TensorFlow, and a intuitive React interface for medical professionals, ensuring strict data privacy.",
        results: [
            "15% increase in diagnostic accuracy",
            "Reduced image review time by 20%",
            "Seamless integration with existing hospital systems"
        ],
        testimonial: {
            quote: "MediTrack AI is a game-changer. PravonixTech's understanding of medical technology and AI ethics is truly commendable.",
            author: "Dr. Sanjay Gupta",
            title: "Chief Radiologist, St. Jude's Hospital"
        },
        icon: BarChart2,
        image: 'https://images.unsplash.com/photo-1579684385153-f00e99f12b84?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image for Medical AI
    }
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
                            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block">Our Journey with Innovation</span>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-stone-900 mb-6 leading-tight">
                                Igniting <span className="text-gradient">Success Stories</span> <br /> 
                                Worldwide.
                            </h1>
                            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                                At PravonixTech, we don't just build; we partner with visionary clients to turn complex challenges into digital triumphs. Explore the impact we've made together.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Impact Metrics Section */}
                <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-amber-950 opacity-90 z-0" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Global Impact in Numbers</h2>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { num: "10+", label: "Years of Excellence", icon: Award },
                                { num: "350+", label: "Successful Projects", icon: Rocket },
                                { num: "20+", label: "Countries Served", icon: Globe },
                                { num: "95%", label: "Client Retention Rate", icon: CheckCircle }
                            ].map((item, idx) => (
                                <FadeIn key={idx} delay={idx * 150} className="text-center">
                                    <div className="glass-card-dark p-8 rounded-3xl h-full flex flex-col items-center justify-center border-amber-800/20">
                                        <item.icon className="w-12 h-12 text-amber-400 mb-6 glow-effect" />
                                        <p className="text-5xl font-extrabold text-amber-500 mb-2">{item.num}</p>
                                        <p className="text-xl text-stone-300 font-medium">{item.label}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Individual Project Showcases */}
                {projects.map((project, idx) => (
                    <section key={idx} className="py-24 overflow-hidden">
                        <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Project Image */}
                            <FadeIn delay={100} className={idx % 2 === 1 ? 'order-2' : 'order-1'}>
                                <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:scale-[1.01] group">
                                    <img src={project.image} alt={project.name} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                                </div>
                            </FadeIn>

                            {/* Project Details */}
                            <FadeIn delay={200} className={idx % 2 === 1 ? 'order-1' : 'order-2'}>
                                <div className="space-y-8">
                                    <span className="text-sm font-bold text-amber-600 uppercase tracking-widest block">{project.industry}</span>
                                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">{project.name}</h2>
                                    <p className="text-lg text-stone-600 leading-relaxed">{project.description}</p>

                                    {/* Challenge */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-stone-800 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500" /> The Challenge</h3>
                                        <p className="text-stone-700 border-l-4 border-amber-200 pl-4 py-1 italic">{project.challenge}</p>
                                    </div>

                                    {/* Solution */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-stone-800 mb-3 flex items-center gap-2"><Handshake className="w-6 h-6 text-amber-500" /> Our Solution</h3>
                                        <p className="text-stone-700 border-l-4 border-amber-200 pl-4 py-1 italic">{project.solution}</p>
                                    </div>

                                    {/* Results */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-stone-800 mb-3 flex items-center gap-2"><BarChart2 className="w-6 h-6 text-amber-500" /> Key Results</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-stone-700">
                                            {project.results.map((result, rIdx) => (
                                                <li key={rIdx}>{result}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Testimonial */}
                                    <div className="glass-card p-6 rounded-2xl border-l-4 border-amber-500 shadow-lg mt-8">
                                        <Quote className="w-8 h-8 text-amber-500 mb-4 opacity-70" />
                                        <p className="text-lg italic text-stone-700 mb-4">"{project.testimonial.quote}"</p>
                                        <p className="font-bold text-stone-900">{project.testimonial.author}</p>
                                        <p className="text-sm text-stone-500">{project.testimonial.title}</p>
                                    </div>

                                    <Link href={`/case-studies/${project.name.toLowerCase().replace(/\s/g, '-')}`} className="inline-flex items-center gap-3 bg-stone-900 text-white font-bold px-8 py-4 rounded-full hover:bg-amber-600 transition-all active:scale-95 shadow-xl shadow-stone-900/20 mt-8">
                                        View Full Case Study <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </section>
                ))}

                {/* Why Partner With Us Section */}
                <section className="py-24 bg-gradient-to-br from-amber-50 to-white">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8">Why Our Clients Choose PravonixTech</h2>
                            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-16">
                                We believe in true partnership, combining technical prowess with a deep understanding of your business goals to deliver exceptional results.
                            </p>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                { title: "Unmatched Expertise", description: "Our team consists of industry veterans and innovators, bringing a wealth of knowledge to every project.", icon: Lightbulb },
                                { title: "Transparent Collaboration", description: "We keep you informed and involved at every stage, fostering trust and open communication.", icon: Handshake },
                                { title: "Results-Driven Approach", description: "Your success is our priority. We focus on delivering measurable impact and long-term value.", icon: BarChart2 }
                            ].map((feature, idx) => (
                                <FadeIn key={idx} delay={idx * 150} className="glass-card p-8 rounded-3xl shadow-lg">
                                    <feature.icon className="w-12 h-12 text-amber-500 mb-6 mx-auto" />
                                    <h3 className="text-2xl font-bold text-stone-900 mb-4">{feature.title}</h3>
                                    <p className="text-stone-600">{feature.description}</p>
                                </FadeIn>
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
        </div>
    );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    Rocket,
    Users,
    Lightbulb,
    CheckCircle,
    ArrowRight,
    Target,
    Zap,
    Briefcase,
} from "lucide-react";
import Footer from "../../components/footer";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            {children}
        </div>
    );
};

const entrepreneurshipServices = [
    {
        title: "Technology Consulting",
        description: "Expert guidance on technology stack selection and architecture for your startup.",
        icon: Lightbulb,
        features: ["Tech Stack Selection", "Architecture Design", "Scalability Planning", "Cost Optimization"],
    },
    {
        title: "MVP Development",
        description: "Build your Minimum Viable Product quickly to validate your business idea.",
        icon: Rocket,
        features: ["Rapid Prototyping", "Core Features", "Fast Time to Market", "Iterative Development"],
    },
    {
        title: "Startup Support",
        description: "Comprehensive technical support to help your startup grow and scale.",
        icon: Briefcase,
        features: ["Technical Expertise", "Development Resources", "Ongoing Support", "Growth Strategy"],
    },
    {
        title: "Team Augmentation",
        description: "Extend your team with skilled developers and technical experts.",
        icon: Users,
        features: ["Expert Developers", "Flexible Engagement", "Quick Onboarding", "Seamless Integration"],
    },
    {
        title: "Product Development",
        description: "End-to-end product development from concept to launch and beyond.",
        icon: Target,
        features: ["Product Strategy", "Full Development", "Quality Assurance", "Launch Support"],
    },
    {
        title: "Business Solutions",
        description: "Custom business solutions tailored to your startup's unique needs.",
        icon: Zap,
        features: ["Custom Solutions", "Business Automation", "Process Optimization", "Digital Transformation"],
    },
];

export default function ITEntrepreneurshipPage() {
    return (
        <div className="min-h-screen text-stone-800 overflow-hidden font-sans selection:bg-amber-200 selection:text-amber-900">
            <style jsx global>{`
                .glass-card {
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    box-shadow: 0 10px 40px -10px rgba(217, 119, 6, 0.05);
                }
                .glass-card:hover {
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(251, 191, 36, 0.3);
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px -10px rgba(217, 119, 6, 0.1);
                }
            `}</style>

            <div className="fixed inset-0 bg-gradient-to-br from-[#FDFCF8] via-[#FEF9E7] to-[#FFF8E1] -z-10"></div>
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)] -z-10"></div>
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.08),transparent_50%)] -z-10"></div>

            <main className="relative z-10">
                <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80')"
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8]/90 via-[#FDFCF8]/80 to-[#FDFCF8]/90"></div>
                    </div>
                    
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
                        <FadeIn>
                            <div className="text-left">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 sm:mb-8 leading-tight">
                                    IT Team for <span className="text-amber-600">Entrepreneurship</span>
                                </h1>
                                <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-8 sm:mb-10 leading-relaxed">
                                    Entrepreneurship is exciting and challenging, yet risky. The PravonixTech Team. It certainly helps to have strong technology skills and expertise in key areas.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-stone-900 text-white font-bold rounded-full text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl hover:scale-105 hover:shadow-2xl"
                                >
                                    <span>Get Your Project</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                                    alt="IT Team for Entrepreneurship"
                                    fill
                                    className="rounded-2xl object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent rounded-2xl"></div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    Our Entrepreneurship <span className="text-amber-600">Services</span>
                                </h2>
                                <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto">
                                    Comprehensive IT solutions to support your entrepreneurial journey
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {entrepreneurshipServices.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <FadeIn key={index} delay={index * 100}>
                                        <div className="glass-card p-6 sm:p-8 rounded-2xl h-full flex flex-col">
                                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                                                <Icon className="w-6 h-6 text-green-600" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">{service.title}</h3>
                                            <p className="text-stone-600 mb-4 flex-grow">{service.description}</p>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm text-stone-700">
                                                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-900 to-amber-950">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeIn>
                            <Rocket className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400 mx-auto mb-6 sm:mb-8" />
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                                Ready to Start Your Entrepreneurial Journey?
                            </h2>
                            <p className="text-lg sm:text-xl text-stone-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
                                Let's discuss how our IT team can support your startup's success
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-amber-600 text-white font-bold rounded-full text-base sm:text-lg hover:bg-amber-500 transition-all duration-300 shadow-xl hover:scale-105 hover:shadow-2xl"
                                >
                                    <span>Start Your Project</span>
                                    <Rocket className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-white text-stone-900 font-bold rounded-full text-base sm:text-lg hover:bg-amber-50 transition-all duration-300 border-2 border-stone-200 hover:border-amber-300 hover:scale-105"
                                >
                                    Explore All Services
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}


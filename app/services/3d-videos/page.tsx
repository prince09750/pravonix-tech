"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    Video,
    Film,
    Camera,
    Sparkles,
    ArrowRight,
    Rocket,
    Play,
    CheckCircle,
    Zap,
    Users,
    Globe,
} from "lucide-react";
import Footer from "../../components/footer";

// FadeIn Animation Component
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

const videoServices = [
    {
        title: "3D Product Videos",
        description: "Stunning 3D product showcases that bring your products to life and increase customer engagement.",
        icon: Video,
        features: ["Product Visualization", "360° Views", "Interactive Models", "E-Commerce Integration"],
    },
    {
        title: "3D Animation & Motion Graphics",
        description: "Captivating 3D animations and motion graphics that tell your brand's story effectively.",
        icon: Film,
        features: ["Character Animation", "Logo Animation", "Explainer Videos", "Motion Graphics"],
    },
    {
        title: "Virtual Reality (VR) Videos",
        description: "Immersive VR experiences that transport your audience into virtual worlds.",
        icon: Sparkles,
        features: ["VR Experiences", "360° Video Tours", "Virtual Showrooms", "Interactive VR"],
    },
    {
        title: "Architectural Visualization",
        description: "Photorealistic 3D architectural renders and walkthroughs for real estate and construction.",
        icon: Camera,
        features: ["3D Renders", "Virtual Tours", "Interior Design", "Exterior Visualization"],
    },
    {
        title: "3D Marketing Videos",
        description: "Eye-catching 3D marketing videos that grab attention and drive conversions.",
        icon: Globe,
        features: ["Social Media Videos", "Advertisement Clips", "Brand Videos", "Promotional Content"],
    },
    {
        title: "3D Video Editing & Post-Production",
        description: "Professional 3D video editing, compositing, and post-production services.",
        icon: Film,
        features: ["Color Grading", "Visual Effects", "Motion Tracking", "3D Compositing"],
    },
];

const videoProjects = [
    {
        title: "3D Product Animation",
        description: "Stunning 3D product visualization with smooth animations and lighting",
        category: "3D Animation",
        videoId: "eP5t2fF4CpM", // 3D product animation example
    },
    {
        title: "3D Architectural Visualization",
        description: "Photorealistic 3D architectural walkthrough and rendering",
        category: "3D Visualization",
        videoId: "X-kBdfv8VxM", // 3D architectural visualization
    },
    {
        title: "3D Motion Graphics",
        description: "Dynamic 3D motion graphics and animated sequences",
        category: "3D Motion",
        videoId: "jNQXAC9IVRw", // 3D motion graphics example
    },
];

export default function ThreeDVideosPage() {

    return (
        <div className="min-h-screen text-stone-800 overflow-hidden font-sans selection:bg-amber-200 selection:text-amber-900">
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
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

            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-br from-[#FDFCF8] via-[#FEF9E7] to-[#FFF8E1] -z-10"></div>
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)] -z-10"></div>
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.08),transparent_50%)] -z-10"></div>

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                            {/* Left Side: Content */}
                            <FadeIn>
                                <div className="text-left">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 sm:mb-8 leading-tight">
                                        <span className="text-amber-600">3D Videos</span>
                                    </h1>
                                    <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-8 sm:mb-10 leading-relaxed">
                                        Bring your ideas to life with stunning 3D videos. Our cutting-edge 3D visualization and animation services create immersive experiences that captivate audiences and drive engagement. From product showcases to architectural walkthroughs, we transform your vision into reality.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-stone-900 text-white font-bold rounded-full text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl"
                                    >
                                        Get Your Project <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Right Side: 3D Video */}
                            <FadeIn delay={200}>
                                <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] rounded-2xl overflow-hidden">
                                    <iframe
                                        className="w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] rounded-2xl"
                                        src="https://www.youtube.com/embed/eP5t2fF4CpM?rel=0&modestbranding=1"
                                        title="3D Video Showcase - Product Animation"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* 3D Video Services Grid */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16 md:mb-20">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    Our <span className="text-amber-600">3D Video Services</span>
                                </h2>
                                <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
                                    Comprehensive 3D video solutions tailored to your business needs
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {videoServices.map((service, idx) => {
                                const Icon = service.icon;
                                return (
                                    <FadeIn key={service.title} delay={idx * 100}>
                                        <div className="glass-card p-6 sm:p-8 rounded-2xl transition-all duration-300 group cursor-pointer">
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-stone-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                                                {service.description}
                                            </p>
                                            <ul className="space-y-2 sm:space-y-3">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm sm:text-base text-stone-700">
                                                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                                        {feature}
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

                {/* Video Showcase Section */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50/50">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    Our <span className="text-amber-600">Video Portfolio</span>
                                </h2>
                                <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
                                    Explore our recent 3D video projects
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {videoProjects.map((project, idx) => (
                                <FadeIn key={project.title} delay={idx * 100}>
                                    <div className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                        <div className="relative aspect-video bg-stone-900 rounded-t-2xl overflow-hidden">
                                            <iframe
                                                className="w-full h-full"
                                                src={`https://www.youtube.com/embed/${project.videoId}?rel=0&modestbranding=1`}
                                                title={project.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        <div className="p-6 sm:p-8">
                                            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-3">
                                                {project.category}
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeIn>
                            <div className="glass-card p-8 sm:p-10 md:p-12 rounded-3xl">
                                <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-amber-600 mx-auto mb-6 sm:mb-8" />
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    Ready to Create Stunning 3D Videos?
                                </h2>
                                <p className="text-lg sm:text-xl text-stone-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                                    Let's discuss how our 3D video services can bring your ideas to life and engage your audience.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-stone-900 text-white font-bold rounded-full text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl"
                                    >
                                        Start Your Project <Rocket className="ml-2 w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-white text-stone-900 font-bold rounded-full text-base sm:text-lg hover:bg-amber-50 transition-all duration-300 border-2 border-stone-200"
                                    >
                                        Explore All Services
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}


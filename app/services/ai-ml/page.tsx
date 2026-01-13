"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    Bot,
    Brain,
    Database,
    Sparkles,
    ArrowRight,
    Rocket,
    Code,
    TrendingUp,
    Shield,
    Zap,
    Users,
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

const aiServices = [
    {
        title: "Machine Learning Models",
        description: "Custom ML models tailored to your business needs for predictive analytics and data insights.",
        icon: Brain,
        features: ["Predictive Analytics", "Classification Models", "Regression Analysis", "Model Training & Optimization"],
    },
    {
        title: "Natural Language Processing",
        description: "NLP solutions for chatbots, sentiment analysis, and automated text processing.",
        icon: Bot,
        features: ["Chatbots & Virtual Assistants", "Sentiment Analysis", "Text Classification", "Language Translation"],
    },
    {
        title: "Computer Vision",
        description: "Advanced image and video analysis using AI-powered computer vision technology.",
        icon: Sparkles,
        features: ["Image Recognition", "Object Detection", "Facial Recognition", "Video Analysis"],
    },
    {
        title: "Generative AI",
        description: "Leverage GenAI for content generation, automation, and innovative applications.",
        icon: Code,
        features: ["Content Generation", "Code Generation", "Image Generation", "Automated Workflows"],
    },
    {
        title: "AI Integration & APIs",
        description: "Seamlessly integrate AI capabilities into your existing systems and applications.",
        icon: Database,
        features: ["API Development", "System Integration", "Real-time Processing", "Scalable Infrastructure"],
    },
    {
        title: "AI Consulting & Strategy",
        description: "Expert guidance on AI adoption, strategy, and implementation for your business.",
        icon: TrendingUp,
        features: ["AI Strategy Planning", "Use Case Analysis", "Technology Selection", "ROI Assessment"],
    },
];

const techStack = [
    { name: "TensorFlow", category: "ML Framework" },
    { name: "PyTorch", category: "ML Framework" },
    { name: "OpenAI GPT", category: "LLM" },
    { name: "Hugging Face", category: "ML Models" },
    { name: "Scikit-learn", category: "ML Library" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "LangChain", category: "LLM Framework" },
    { name: "Python", category: "Programming" },
];

export default function AIMLPage() {

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
                {/* Hero Section with Image */}
                <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                            {/* Left Side: Content */}
                            <FadeIn>
                                <div className="text-left">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 sm:mb-8 leading-tight">
                                        <span className="text-amber-600 ">AI & ML</span>
                                    </h1>
                                    <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-8 sm:mb-10 leading-relaxed">
                                        Discover the power of AI and ML on our website. Our cutting-edge technology leverages artificial intelligence and machine learning to revolutionize your experience. From personalized recommendations to intelligent automation.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-stone-900 text-white font-bold rounded-full text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl"
                                    >
                                        Get Your Project <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Right Side: Image */}
                            <FadeIn delay={200}>
                                <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] rounded-2xl overflow-hidden ">
                                    <Image
                                        src="https://clinginfotech.com/_next/image?url=%2Fassests%2FAiml.jpeg&w=640&q=75"
                                        alt="AI & Machine Learning"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover rounded-2xl"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent rounded-2xl"></div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Our Recent Work Section */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16 md:mb-20">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    Our <span className="text-amber-600">Recent Work</span>
                                </h2>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                            {/* Video 1: Surveillance */}
                            <FadeIn delay={100}>
                                <div className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                    <div className="relative aspect-video bg-stone-900 flex items-center justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20"></div>
                                        <div className="relative z-10 text-center px-4">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                            </div>
                                            <p className="text-white text-lg sm:text-xl font-semibold">Video</p>
                                            <p className="text-white/80 text-sm sm:text-base mt-1">Surveillance</p>
                                        </div>
                                    </div>
                                    <div className="p-6 sm:p-8">
                                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                                            Surveillance
                                        </h3>
                                        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                                            This AI Model is catching suspicious activity in this video
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Video 2: Face Recognition */}
                            <FadeIn delay={200}>
                                <div className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                    <div className="relative aspect-video bg-stone-900 flex items-center justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-600/20"></div>
                                        <div className="relative z-10 text-center px-4">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                            </div>
                                            <p className="text-white text-lg sm:text-xl font-semibold">Video</p>
                                            <p className="text-white/80 text-sm sm:text-base mt-1">Face Recognition</p>
                                        </div>
                                    </div>
                                    <div className="p-6 sm:p-8">
                                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                                            Face Recognition
                                        </h3>
                                        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                                            This AI Model is recognizing the person in the video
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
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
                                    Ready to Leverage AI?
                                </h2>
                                <p className="text-lg sm:text-xl text-stone-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                                    Let's discuss how AI and machine learning can transform your business processes 
                                    and drive innovation.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-stone-900 text-white font-bold rounded-full text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl"
                                    >
                                        Start Your AI Project <Rocket className="ml-2 w-5 h-5" />
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


"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { 
    Users, 
    Code, 
    Cloud, 
    CheckCircle, 
    Handshake, 
    Briefcase, 
    TrendingUp, 
    ArrowRight,
    Zap,
    Terminal,
    Atom, 
    Lightbulb,
    Sparkles,
    Award,
    Target,
    Rocket
} from 'lucide-react';

// Premium Background Images
const HERO_BG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80";
const VALUES_BG = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80";
const MILESTONE_BG = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80";
const TECH_BG = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80";

// Ambient Background Component
const AmbientBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#FDFCF8]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-yellow-100/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
);

// Fade In Component
const FadeIn = ({ children, delay = 0, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } ${className}`}
        >
            {children}
        </div>
    );
};

const milestones = [
    { year: 2018, description: 'Founded with a vision to revolutionize digital solutions through cutting-edge technology and innovation.', icon: Rocket },
    { year: 2020, description: 'Expanded globally, serving Fortune 500 clients with enterprise-grade SaaS platforms.', icon: TrendingUp },
    { year: 2022, description: 'Achieved AWS Advanced Partner status and launched AI-powered development framework.', icon: Award },
    { year: 2024, description: 'Pioneered GenAI integration, transforming how businesses leverage artificial intelligence.', icon: Sparkles },
    { year: 'Present', description: 'Leading digital transformation across Fintech, EdTech, and Healthcare sectors worldwide.', icon: Target },
];

const expertiseList = [
    { icon: Code, title: 'Modern Frameworks', details: 'React, Next.js, Node.js, TypeScript', color: 'from-amber-500 to-orange-500' },
    { icon: Cloud, title: 'Cloud Native', details: 'AWS, Google Cloud, Azure, Serverless', color: 'from-orange-500 to-amber-500' },
    { icon: TrendingUp, title: 'Data & AI', details: 'Python, TensorFlow, GenAI, ML Pipelines', color: 'from-yellow-500 to-amber-500' },
    { icon: Briefcase, title: 'DevOps & CI/CD', details: 'Docker, Kubernetes, GitOps, Automation', color: 'from-amber-600 to-orange-600' },
];

const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Global Clients', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Zap },
];

export default function AboutPage() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                .text-gradient-gold {
                    background: linear-gradient(135deg, #b45309 0%, #f59e0b 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>

            <AmbientBackground />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-28">
                    <div 
                        className="absolute inset-0 z-0 opacity-20"
                        style={{ 
                            backgroundImage: `url(${HERO_BG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: `translateY(${offsetY * 0.5}px) scale(1.1)`,
                        }}
                    />
                    
                    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <FadeIn>
                            <div className="inline-block mb-6 sm:mb-8">
                                <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse" />
                                    <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-800">About PravonixTech</span>
                                </div>
                            </div>
                            <Zap className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-amber-600 mx-auto mb-6 sm:mb-8" />
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 text-stone-900 leading-[1.1] px-2">
                                <span className="text-gradient-gold">Engineering Tomorrow</span>
                            </h1>
                        </FadeIn>
                        
                        <FadeIn delay={200}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-stone-700 px-2">
                                Where <span className="text-amber-600 font-semibold">Vision</span> Meets <span className="text-orange-600 font-semibold">Code</span>
                            </h2>
                        </FadeIn>
                        
                        <FadeIn delay={400}>
                            <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2">
                                PravonixTech transforms ambitious ideas into scalable, secure, and stunning digital experiences that drive real business impact.
                            </p>
                        </FadeIn>

                        <FadeIn delay={600}>
                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-2">
                                <Link 
                                    href="/contact" 
                                    className="px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-stone-900 text-white rounded-full font-bold text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl shadow-stone-900/10 flex items-center justify-center gap-2"
                                >
                                    Start Your Project <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                                <Link href="/services" className="px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-white border border-stone-200 text-stone-800 rounded-full font-semibold text-base sm:text-lg hover:border-amber-300 hover:bg-amber-50 transition-all shadow-sm text-center">
                                    Explore Services
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Stats Bar */}
                        <FadeIn delay={800}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2">
                                {stats.map((stat, i) => (
                                    <div key={i} className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:scale-105 transition-all duration-300">
                                        <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-600 mx-auto mb-2 sm:mb-3" />
                                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-1 sm:mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-xs sm:text-sm text-stone-600 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Values & Expertise Section */}
                <section className="relative py-16 sm:py-20 md:py-24 lg:py-32">
                    <div 
                        className="absolute inset-0 z-0 opacity-10"
                        style={{ 
                            backgroundImage: `url(${VALUES_BG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed'
                        }}
                    />

                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                            
                            {/* Core Values */}
                            <FadeIn>
                                <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 hover:scale-[1.02] transition-all duration-500">
                                    <Lightbulb className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 text-amber-600 mb-4 sm:mb-6" />
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-stone-900">
                                        Our DNA
                                    </h3>
                                    <div className="space-y-6 sm:space-y-8">
                                        {[
                                            { icon: Atom, title: 'Innovation First', desc: 'Pushing boundaries with bleeding-edge technology and creative solutions.' },
                                            { icon: TrendingUp, title: 'Built to Scale', desc: 'Enterprise-grade architecture designed for exponential growth.' },
                                            { icon: Handshake, title: 'Integrity Always', desc: 'Transparent partnerships built on trust and ethical practices.' }
                                        ].map((value, i) => (
                                            <div key={i} className="group flex items-start gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-300">
                                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-600" />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-stone-900 mb-1 sm:mb-2 group-hover:text-amber-600 transition-colors">{value.title}</h4>
                                                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">{value.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Technical Expertise */}
                            <FadeIn delay={200}>
                                <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 hover:scale-[1.02] transition-all duration-500">
                                    <Terminal className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 text-orange-600 mb-4 sm:mb-6" />
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-stone-900">
                                        Tech Arsenal
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                                        {expertiseList.map((item, i) => (
                                            <div 
                                                key={i}
                                                className="group relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/50 hover:bg-white border border-stone-100 hover:border-amber-200 transition-all duration-300"
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl sm:rounded-2xl`} />
                                                <item.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-amber-600 mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                                                <h4 className="text-base sm:text-lg md:text-xl font-bold text-stone-900 mb-1 sm:mb-2">{item.title}</h4>
                                                <p className="text-xs sm:text-sm text-stone-600">{item.details}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Link 
                                        href="/services"
                                        className="group inline-flex items-center mt-6 sm:mt-8 md:mt-10 text-amber-600 font-bold hover:text-orange-600 transition-colors text-base sm:text-lg"
                                    >
                                        View Full Tech Stack 
                                        <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Milestones Section */}
                <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white/50">
                    <div 
                        className="absolute inset-0 z-0 opacity-5"
                        style={{ 
                            backgroundImage: `url(${MILESTONE_BG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed'
                        }}
                    />

                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16 md:mb-20">
                                <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-amber-600 mx-auto mb-4 sm:mb-6" />
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-stone-900 px-2">
                                    Our Journey
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-2">
                                    From startup to industry leader, powered by innovation and excellence
                                </p>
                            </div>
                        </FadeIn>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-yellow-500 hidden lg:block" />

                            {milestones.map((item, i) => (
                                <FadeIn key={i} delay={i * 150}>
                                    <div className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-14 md:mb-16 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                        {/* Content */}
                                        <div className="w-full lg:w-5/12">
                                            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 hover:scale-105 transition-all duration-500 group">
                                                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                                    <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                                                        <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600" />
                                                    </div>
                                                    <h4 className="text-3xl sm:text-4xl font-bold text-stone-900">
                                                        {item.year}
                                                    </h4>
                                                </div>
                                                <p className="text-base sm:text-lg text-stone-600 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>

                                        {/* Center Marker */}
                                        <div className="hidden lg:block w-2/12 flex justify-center">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-lg md:text-xl text-white shadow-xl shadow-amber-500/30">
                                                {typeof item.year === 'number' ? item.year.toString().slice(2) : '25'}
                                            </div>
                                        </div>

                                        <div className="hidden lg:block w-5/12" />
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
                    <div 
                        className="absolute inset-0 z-0 opacity-20"
                        style={{ 
                            backgroundImage: `url(${TECH_BG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/90 to-[#FDFCF8]" />

                    <FadeIn>
                        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-14 lg:p-16">
                                <Rocket className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-amber-600 mx-auto mb-6 sm:mb-8" />
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-stone-900 px-2">
                                    Ready to Build Something Extraordinary?
                                </h3>
                                <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
                                    Let's transform your vision into a cutting-edge digital reality that drives growth and innovation.
                                </p>
                                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
                                    <Link 
                                        href="/contact"
                                        className="group px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 bg-stone-900 text-white rounded-full font-bold text-base sm:text-lg md:text-xl hover:bg-amber-600 transition-all duration-300 shadow-2xl shadow-stone-900/20 flex items-center justify-center"
                                    >
                                        Launch Your Project
                                        <Rocket className="ml-3 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                                    </Link>
                                    <Link 
                                        href="/portfolio"
                                        className="px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 glass-card rounded-full font-bold text-base sm:text-lg md:text-xl hover:bg-white transition-all duration-300 text-stone-900 text-center"
                                    >
                                        View Our Work

                                    </Link>
                    <Link
  href="/about/team"
  className="
    inline-flex items-center justify-center gap-2
    px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4
    bg-amber-600 text-white
    rounded-full font-bold
    text-base sm:text-lg
    hover:bg-amber-700
    transition-all duration-300
    shadow-xl
  "
>
  Meet Our Team
</Link>


                                </div>

                            </div>
                        </div>
                    </FadeIn>
                </section>
            </main>

            {/* Footer */}
            <footer className="relative bg-[#1C1917] text-stone-400 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-stone-800 font-sans">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 border-b border-stone-800 pb-12 sm:pb-16">
                        <div className="space-y-4 sm:space-y-6">
                            <span className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                                <Code className="text-amber-600 w-5 h-5 sm:w-6 sm:h-6" /> Pravonix<span className="text-amber-500">Tech</span>
                            </span>
                            <p className="text-stone-500 leading-relaxed text-xs sm:text-sm">Premier software consultancy delivering enterprise-grade digital transformation.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Services</h4>
                            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium">
                                <li><Link href="/services" className="hover:text-amber-500 transition-colors">Custom Development</Link></li>
                                <li><Link href="/services" className="hover:text-amber-500 transition-colors">Cloud Solutions</Link></li>
                                <li><Link href="/services" className="hover:text-amber-500 transition-colors">AI Integration</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Company</h4>
                            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium">
                                <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Contact</h4>
                            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                                <p className="text-stone-500">Cyber Hub, Gurugram, India</p>
                                <a href="mailto:hello@pravonixtech.com" className="hover:text-amber-500 transition-colors break-all">hello@pravonixtech.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-stone-600 gap-3 sm:gap-4">
                        <p>© {new Date().getFullYear()} PravonixTech Inc. All rights reserved.</p>
                        <div className="flex gap-4 sm:gap-6"><a href="#" className="hover:text-amber-500">Terms</a><a href="#" className="hover:text-amber-500">Privacy</a></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
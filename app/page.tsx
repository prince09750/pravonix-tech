"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { 
    Code, Zap, Database, TrendingUp, Users, ArrowRight, 
    Laptop, Handshake, ShieldCheck, Sparkles, CheckCircle, 
    Award, Rocket, Globe, Shield, ChevronRight, Cpu, Layers,
    Twitter, Linkedin, Github, Instagram, Mail, MapPin, Phone
} from 'lucide-react';

// --- IMAGES ---
const HERO_BG = "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80";
const SERVICES_BG = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80";
const PROCESS_BG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80";

// --- DATA ---
const coreServices = [
    { 
        title: 'Enterprise Software Engineering', 
        description: 'Bespoke digital ecosystems engineered for high-complexity business logic. We build scalable SaaS platforms that drive operational dominance.', 
        icon: Laptop,
        bg: 'bg-amber-50',
        accent: 'text-amber-600',
        border: 'border-amber-100'
    },
    { 
        title: 'Cloud Architecture & DevOps', 
        description: 'Next-generation cloud infrastructure (AWS/Azure). We optimize for zero-downtime scalability, security compliance, and cost-efficiency.', 
        icon: Database,
        bg: 'bg-stone-100',
        accent: 'text-stone-600',
        border: 'border-stone-200'
    },
    { 
        title: 'Cognitive AI & Machine Learning', 
        description: 'Unlock the power of data. We integrate predictive analytics, LLMs, and automation pipelines to future-proof your decision-making.', 
        icon: Cpu,
        bg: 'bg-orange-50',
        accent: 'text-orange-600',
        border: 'border-orange-100'
    },
    { 
        title: 'Cybersecurity & Compliance', 
        description: 'Bank-grade security protocols. We implement rigorous penetration testing and encryption to protect your digital assets.', 
        icon: ShieldCheck,
        bg: 'bg-yellow-50',
        accent: 'text-yellow-600',
        border: 'border-yellow-100'
    },
];

const collaborationSteps = [
    { step: '01', title: 'Consultation', description: 'We deconstruct your business challenges to define a high-impact technical roadmap.', icon: Handshake },
    { step: '02', title: 'Architecture', description: 'Designing robust, scalable system blueprints and intuitive UI/UX prototypes.', icon: Layers },
    { step: '03', title: 'Engineering', description: 'Agile development cycles with continuous integration and rigorous QA testing.', icon: Code },
    { step: '04', title: 'Deployment', description: 'Seamless production rollout with zero disruption and performance monitoring.', icon: Rocket },
    { step: '05', title: 'Evolution', description: 'Continuous feature scaling and maintenance to keep you ahead of the market.', icon: TrendingUp },
];

const guarantees = [
    { 
        title: 'Intellectual Property Rights', 
        description: 'You own 100% of the code, assets, and infrastructure. Complete transparency with no vendor lock-in guarantees.',
        icon: Shield
    },
    { 
        title: 'Rapid Agile Delivery', 
        description: 'We work in 2-week sprints with regular demos, ensuring the product evolves exactly as per your market needs.',
        icon: Zap
    },
    { 
        title: 'Enterprise SLA Support', 
        description: 'Post-launch dedicated support teams ensuring 99.9% uptime and immediate critical response.',
        icon: Award
    },
];

const stats = [
    { number: '200+', label: 'Enterprise Solutions Delivered' },
    { number: '98%', label: 'Client Retention Rate' },
    { number: '12+', label: 'Countries Served' },
    { number: '24/7', label: 'Engineering Support' },
];

// --- INTERNAL COMPONENTS ---

// 1. FOOTER COMPONENT
const Footer = () => (
    <footer className="bg-[#1C1917] text-stone-400 pt-20 pb-10 border-t border-stone-800 font-sans relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Newsletter */}
            <div className="bg-stone-800/50 border border-stone-700 rounded-[2rem] p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                <div className="max-w-md text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">Subscribe to our insights</h3>
                    <p className="text-stone-400">Join 5,000+ executives receiving weekly updates.</p>
                </div>
                <div className="flex w-full md:w-auto gap-3 flex-col sm:flex-row">
                    <input type="email" placeholder="Enter your email" className="bg-stone-900 border border-stone-700 text-white px-6 py-4 rounded-full focus:outline-none focus:border-amber-500 w-full md:w-72" />
                    <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg">Subscribe</button>
                </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 border-b border-stone-800 pb-12 sm:pb-16">
                <div className="space-y-4 sm:space-y-6">
                    <span className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                        <Code className="text-amber-600 w-5 h-5 sm:w-6 sm:h-6" /> Pravonix<span className="text-amber-500">Tech</span>
                    </span>
                    <p className="text-stone-500 leading-relaxed text-xs sm:text-sm">Premier software consultancy delivering enterprise-grade digital transformation.</p>
                    <div className="flex gap-3 sm:gap-4">
                        {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                            <a key={i} href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-white transition-all"><Icon size={16} className="sm:w-[18px] sm:h-[18px]" /></a>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Services</h4>
                    <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium">
                        <li><Link href="#" className="hover:text-amber-500 transition-colors">Custom Development</Link></li>
                        <li><Link href="#" className="hover:text-amber-500 transition-colors">Cloud Solutions</Link></li>
                        <li><Link href="#" className="hover:text-amber-500 transition-colors">AI Integration</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Company</h4>
                    <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium">
                        <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                        <li><Link href="/careers" className="hover:text-amber-500 transition-colors">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Contact</h4>
                    <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                        <div className="flex items-start gap-2 sm:gap-3"><MapPin className="text-amber-600 shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /><p>San Francisco, CA 94107</p></div>
                        <div className="flex items-center gap-2 sm:gap-3"><Mail className="text-amber-600 shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" /><a href="mailto:hello@pravonixtech.com" className="hover:text-white break-all">hello@pravonixtech.com</a></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-stone-600 gap-3 sm:gap-4">
                <p>© {new Date().getFullYear()} PravonixTech Inc. All rights reserved.</p>
                <div className="flex gap-4 sm:gap-6"><a href="#" className="hover:text-amber-500">Terms</a><a href="#" className="hover:text-amber-500">Privacy</a></div>
            </div>
        </div>
    </footer>
);

// 2. UTILITY COMPONENTS
const AmbientBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#FDFCF8]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-yellow-100/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
);

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

const FadeIn = ({ children, delay = 0, className = '' }: FadeInProps) => {
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
        <div ref={ref} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}>
            {children}
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function HomePage() {
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
            
            {/* Navbar Removed to prevent duplication with Global Layout */}

            <main className="relative z-10">
                {/* --- HERO SECTION --- */}
                <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 md:pt-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
                        <div className="order-2 lg:order-1">
                            <FadeIn>
                                <div className="inline-block mb-6 sm:mb-8">
                                    <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse" />
                                        <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-800">Global IT Consultancy</span>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={200}>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-stone-900 leading-[1.1]">
                                    Architecting <br className="hidden sm:block"/>
                                    <span className="text-gradient-gold">Digital Excellence.</span>
                                </h1>
                            </FadeIn>
                            <FadeIn delay={400}>
                                <p className="text-base sm:text-lg md:text-xl text-stone-600 mb-8 sm:mb-10 max-w-lg leading-relaxed font-light">
                                    We transform complex business requirements into elegant, high-performance software solutions. <span className="font-semibold text-stone-800">Scalable. Secure. Future-Proof.</span>
                                </p>
                            </FadeIn>
                            <FadeIn delay={600}>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                                    <Link href="/contact" className="px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-stone-900 text-white rounded-full font-bold text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl shadow-stone-900/10 flex items-center justify-center gap-2">
                                        Book Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </Link>
                                    <Link href="/services" className="px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-white border border-stone-200 text-stone-800 rounded-full font-semibold text-base sm:text-lg hover:border-amber-300 hover:bg-amber-50 transition-all shadow-sm text-center">
                                        View Solutions
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]">
                            <FadeIn delay={300} className="h-full w-full">
                                <div className="relative h-full w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-stone-400/20 border-4 sm:border-8 border-white">
                                    <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay z-10" />
                                    <img src={HERO_BG} alt="Tech Architecture" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* --- STATS SECTION --- */}
                <section className="py-12 sm:py-16 bg-white/50 border-y border-stone-200 mt-8 sm:mt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
                            {stats.map((stat, i) => (
                                <FadeIn key={i} delay={i * 100} className="text-center md:text-left">
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-2">{stat.number}</div>
                                    <div className="text-[10px] sm:text-xs text-amber-600 font-bold uppercase tracking-widest">{stat.label}</div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SERVICES SECTION --- */}
                <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <FadeIn>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20 gap-4">
                                <div className="max-w-2xl">
                                    <p className="text-amber-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Our Expertise</p>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">High-Impact Technology Solutions</h2>
                                </div>
                                <Link href="/services" className="flex items-center gap-2 text-stone-900 font-bold border-b-2 border-amber-200 pb-1 hover:border-amber-600 transition-all text-sm sm:text-base">
                                    Explore All Services <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                </Link>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {coreServices.map((service, i) => (
                                <FadeIn key={i} delay={i * 100}>
                                    <div className={`glass-card p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl h-full group flex flex-col border ${service.border} hover:border-amber-300 transition-all`}>
                                        <div className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-xl sm:rounded-2xl ${service.bg} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                            <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.accent}`} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-3 sm:mb-4">{service.title}</h3>
                                        <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">{service.description}</p>
                                        <div className="pt-4 sm:pt-6 border-t border-stone-100 flex justify-between items-center">
                                            <span className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider group-hover:text-amber-600 transition-colors">Learn More</span>
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-stone-300 group-hover:text-amber-600 group-hover:translate-x-2 transition-all" />
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- ABOUT SPLIT SECTION --- */}
                <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-[#F5F5F4]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
                            <FadeIn>
                                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] shadow-xl shadow-stone-200 relative border border-stone-100">
                                    <Globe className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-stone-900 absolute top-0 right-0 p-4 sm:p-6 md:p-8 opacity-10" />
                                    <p className="text-amber-600 font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">Why PravonixTech</p>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 sm:mb-6 leading-tight">
                                        Engineering the <br className="hidden sm:block"/>
                                        <span className="text-stone-500 italic">Next Generation</span> of Web.
                                    </h2>
                                    <p className="text-stone-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                                        <span className="font-bold text-stone-900">PravonixTech</span> is more than a development agency; we are your strategic technology partner.
                                    </p>
                                    <div className="space-y-3 sm:space-y-4">
                                        {['Certified Experts', 'Transparent Pricing', 'Global Delivery'].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 sm:gap-3">
                                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" />
                                                <span className="font-medium text-sm sm:text-base text-stone-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={200}>
                                <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                                    <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay z-10" />
                                    <img src={SERVICES_BG} alt="Our Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* --- PROCESS SECTION --- */}
                <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16 md:mb-20">
                                <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-xl bg-amber-100 text-amber-700 mb-4 sm:mb-6">
                                    <Handshake className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">Our Delivery Framework</h2>
                                <p className="text-stone-500 max-w-2xl mx-auto text-base sm:text-lg px-4">A disciplined, transparent methodology that ensures predictable outcomes.</p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 gap-4 sm:gap-6">
                            {collaborationSteps.map((item, i) => (
                                <FadeIn key={i} delay={i * 100}>
                                    <div className="group flex flex-col md:flex-row items-center gap-6 sm:gap-8 bg-white p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-amber-50 rounded-bl-[100%] -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 transition-all group-hover:scale-150 group-hover:bg-amber-100" />
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-stone-50 flex-shrink-0 flex items-center justify-center border border-stone-100 group-hover:bg-white z-10">
                                            <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-stone-400 group-hover:text-amber-600 transition-colors" />
                                        </div>
                                        <div className="flex-grow text-center md:text-left z-10">
                                            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                                                <span className="text-xs sm:text-sm font-black text-amber-600 bg-amber-50 px-2 sm:px-3 py-1 rounded-full">{item.step}</span>
                                                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">{item.title}</h3>
                                            </div>
                                            <p className="text-stone-500 text-base sm:text-lg leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- GUARANTEES SECTION --- */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-stone-900 text-white rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 md:mx-8 mb-8 sm:mb-10 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#fbbf24 1px, transparent 1px)`, backgroundSize: '32px 32px' }}></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-amber-500 mx-auto mb-4 sm:mb-6" />
                                <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">The Pravonix Promise</h2>
                                <p className="text-stone-400 text-sm sm:text-base">Ironclad guarantees for your peace of mind.</p>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                            {guarantees.map((item, i) => (
                                <FadeIn key={i} delay={i * 150}>
                                    <div className="bg-stone-800/50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] hover:bg-stone-800 transition-colors border border-stone-700 hover:border-amber-500/30 text-center">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-stone-900 flex items-center justify-center mb-4 sm:mb-6 border border-stone-700">
                                            <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{item.title}</h3>
                                        <p className="text-stone-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA SECTION --- */}
                <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-30">
                        <img src={PROCESS_BG} alt="CTA" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/90 to-[#FDFCF8]" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
                        <FadeIn>
                            <div className="bg-white p-3 sm:p-4 rounded-full w-fit mx-auto mb-6 sm:mb-8 shadow-xl shadow-amber-100">
                                <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-600" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-stone-900 mb-6 sm:mb-8 leading-tight px-2">
                                Ready to scale your <br className="hidden sm:block"/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Digital Potential?</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-stone-500 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                                Stop struggling with technical debt. Let's build a platform that drives revenue and efficiency.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <Link href="/contact" className="inline-flex items-center justify-center bg-stone-900 text-white font-bold px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full text-base sm:text-lg md:text-xl hover:bg-amber-600 transition-all duration-300 shadow-2xl">
                                    Start Now <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                                <Link href="/portfolio" className="inline-flex items-center justify-center bg-white text-stone-900 font-bold px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full text-base sm:text-lg md:text-xl border border-stone-200 hover:bg-stone-50 transition-all shadow-sm">
                                    View Work
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            {/* Added Footer Here */}
            <Footer />
        </div>
    );
}
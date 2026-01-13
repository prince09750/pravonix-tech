"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { 
    Code, Zap, Database, TrendingUp, Users, ArrowRight, 
    Laptop, Handshake, ShieldCheck, Sparkles, CheckCircle, 
    Award, Rocket, Globe, Shield, ChevronRight, Cpu, Layers
} from 'lucide-react';
import Footer from './components/footer';

// --- IMAGES ---
const HERO_BG = "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80";
const SERVICES_BG = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80";
const PROCESS_BG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80";

// --- DATA ---
const coreServices = [
    { 
        title: 'Career Counselling', 
        description: 'We encourage you to take full advantage of the services we provide to support your career development process.', 
        icon: Users,
        bg: 'bg-amber-50',
        accent: 'text-amber-600',
        border: 'border-amber-100',
        href: '/about/career'
    },
    { 
        title: 'App Development', 
        description: 'Need custom app development services? We can help you to take advantage of the rapidly growing segment of mobile application development.', 
        icon: Laptop,
        bg: 'bg-blue-50',
        accent: 'text-blue-600',
        border: 'border-blue-100',
        href: '/services/app-development'
    },
    { 
        title: 'Custom Development', 
        description: 'Don\'t let your website be just another URL on the web! We never use a pre-designed template for your website. All design layouts are developed from ground up.', 
        icon: Code,
        bg: 'bg-purple-50',
        accent: 'text-purple-600',
        border: 'border-purple-100',
        href: '/services/custom-development'
    },
    { 
        title: 'IT Team for Entrepreneurship', 
        description: 'Entrepreneurship is exciting and challenging, yet risky. The PravonixTech Team. It certainly helps to have strong technology skills and expertise in key areas.', 
        icon: Rocket,
        bg: 'bg-green-50',
        accent: 'text-green-600',
        border: 'border-green-100',
        href: '/services/it-entrepreneurship'
    },
    { 
        title: 'ERPs', 
        description: 'We help you to manage your business activities by integrating your back and front office applications.', 
        icon: Database,
        bg: 'bg-red-50',
        accent: 'text-red-600',
        border: 'border-red-100',
        href: '/services/erps'
    },
    { 
        title: 'Website Designing', 
        description: 'In this digital world no matter how small your business, whether you have local business or profession, a website can make your business to the highest peak.', 
        icon: Globe,
        bg: 'bg-indigo-50',
        accent: 'text-indigo-600',
        border: 'border-indigo-100',
        href: '/services/website-designing'
    },
    { 
        title: 'Digital Marketing', 
        description: 'Nowadays digital marketing is one of the popular ways to boost or promote brands & products through the internet and other digital channels.', 
        icon: TrendingUp,
        bg: 'bg-pink-50',
        accent: 'text-pink-600',
        border: 'border-pink-100',
        href: '/services/digital-marketing'
    },
    { 
        title: 'Social Media Marketing', 
        description: 'More than 3 billion people are connected through social platforms so it is important to reach out to our consumers who are on social platforms.', 
        icon: Users,
        bg: 'bg-cyan-50',
        accent: 'text-cyan-600',
        border: 'border-cyan-100',
        href: '/services/social-media-marketing'
    },
    { 
        title: 'SEO & Google Ads', 
        description: 'SEO(Search Engine Optimization) is one of the important factors in your business website. SEO will help you to reach to your targeted customers.', 
        icon: Zap,
        bg: 'bg-yellow-50',
        accent: 'text-yellow-600',
        border: 'border-yellow-100',
        href: '/services/seo-google-ads'
    },
    { 
        title: 'Political Campaign', 
        description: 'Our political campaign management services include development of political campaign strategies, powerful political campaign slogans and winning ideas.', 
        icon: Award,
        bg: 'bg-orange-50',
        accent: 'text-orange-600',
        border: 'border-orange-100',
        href: '/services/political-campaign'
    },
    { 
        title: '3D Animations', 
        description: 'Our 3D animation services bring imagination to life. From conceptualization to execution, we craft stunning visuals that captivate audiences.', 
        icon: Sparkles,
        bg: 'bg-violet-50',
        accent: 'text-violet-600',
        border: 'border-violet-100',
        href: '/services/3d-videos'
    },
    { 
        title: 'AI/ML', 
        description: 'We craft intelligent systems that adapt, learn, and evolve. Harnessing the power of Natural Language Processing (NLP) for deeper understanding.', 
        icon: Cpu,
        bg: 'bg-teal-50',
        accent: 'text-teal-600',
        border: 'border-teal-100',
        href: '/services/ai-ml'
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

    return (
        <>
        <div className="min-h-screen text-stone-800 overflow-hidden font-sans selection:bg-amber-200 selection:text-amber-900">
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
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
                                    <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full">
                                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500 animate-pulse shadow-lg shadow-amber-500/50" />
                                        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-800">Global IT Consultancy</span>
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
                                <div className="relative h-full w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 z-10" />
                                    <img src={HERO_BG} alt="Tech Architecture" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* --- STATS SECTION --- */}
                <section className="py-12 sm:py-16 bg-stone-50 border-y border-stone-200 mt-8 sm:mt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
                            {stats.map((stat, i) => (
                                <FadeIn key={i} delay={i * 100} className="text-center md:text-left">
                                    <div className="bg-white border border-stone-200 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300">
                                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-2">{stat.number}</div>
                                        <div className="text-[10px] sm:text-xs text-amber-600 font-bold uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SERVICES SECTION --- */}
                <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <FadeIn>
                            <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20 gap-4">
                                <div className="max-w-3xl">
                                    <p className="text-amber-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Our Expertise</p>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">High-Impact Technology Solutions</h2>
                                </div>
                                <Link href="/services" className="flex items-center gap-2 text-stone-900 font-bold border-b-2 border-amber-200 pb-1 hover:border-amber-600 transition-all text-sm sm:text-base">
                                    Explore All Services <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                </Link>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                            {coreServices.map((service, i) => {
                                return (
                                    <FadeIn key={i} delay={i * 100}>
                                        <Link href={service.href || '/services'}>
                                            <div className={`bg-white border ${service.border} p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl h-full group flex flex-col hover:border-amber-300 hover:shadow-lg transition-all cursor-pointer`}>
                                                <div className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-xl sm:rounded-2xl ${service.bg} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                                    <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.accent}`} />
                                                </div>
                                                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-3 sm:mb-4">{service.title}</h3>
                                                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">{service.description}</p>
                                                <div className="pt-4 sm:pt-6 border-t border-stone-100 mt-auto">
                                                    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-amber-600 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                                        <span>Learn More</span>
                                                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* --- ABOUT SPLIT SECTION --- */}
                <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-stone-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
                            <FadeIn>
                                <div className="bg-white border border-stone-200 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] shadow-xl relative">
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
                                <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-white border border-stone-200 shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 z-10" />
                                    <img src={SERVICES_BG} alt="Our Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
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
                                    <div className="group flex flex-col md:flex-row items-center gap-6 sm:gap-8 bg-white border border-stone-200 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl hover:border-amber-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-amber-50 rounded-bl-[100%] -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 transition-all group-hover:scale-150 group-hover:bg-amber-100" />
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-stone-50 border border-stone-200 flex-shrink-0 flex items-center justify-center group-hover:border-amber-300 z-10">
                                            <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-stone-400 group-hover:text-amber-600 transition-colors" />
                                        </div>
                                        <div className="flex-grow text-center md:text-left z-10">
                                            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                                                <span className="text-xs sm:text-sm font-black text-amber-600 bg-amber-50 border border-amber-200 px-2 sm:px-3 py-1 rounded-full">{item.step}</span>
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
                                    <div className="bg-stone-800 border border-stone-700 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] hover:border-amber-500 transition-all text-center">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-stone-700 border border-stone-600 flex items-center justify-center mb-4 sm:mb-6">
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
                            <div className="bg-amber-50 border border-amber-200 p-3 sm:p-4 rounded-full w-fit mx-auto mb-6 sm:mb-8 shadow-xl">
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
                                <Link href="/portfolio" className="inline-flex items-center justify-center bg-white border border-stone-200 text-stone-900 font-bold px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full text-base sm:text-lg md:text-xl hover:border-amber-300 hover:bg-amber-50 transition-all shadow-lg">
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

        {/* WhatsApp Floating Button - Outside main div to avoid overflow issues */}
        <Link
            href="https://wa.me/7248780652"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[9999] w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            aria-label="Contact us on WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
        </Link>
        </>
    );
}
"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { 
    Code, 
    Zap, 
    Database, 
    TrendingUp,
    Cloud,
    Smartphone,
    ShoppingCart,
    Lock,
    Globe,
    Palette,
    Server,
    Cpu,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Rocket,
    Target,
    Users,
    Award,
    ChevronRight,
    Layout,
    Terminal,
    Bot,
    Boxes,
    Shield,
    GitBranch,
    Laptop,
    Handshake
} from 'lucide-react';

// Premium Background Images
const HERO_BG = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80";
const SERVICES_BG = "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80";
const TECH_BG = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80";
const CTA_BG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80";

// Ambient Background Component
const AmbientBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#FDFCF8]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-yellow-100/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
);

// Fade In Component
const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
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

const mainServices = [
    {
        title: 'Web Application Development',
        description: 'Custom web applications built with cutting-edge technologies for maximum performance and scalability.',
        icon: Code,
        color: 'from-amber-500 to-orange-500',
        features: ['React & Next.js', 'Real-time Features', 'Progressive Web Apps', 'API Integration'],
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
    },
    {
        title: 'Cloud Architecture & DevOps',
        description: 'Scalable cloud infrastructure with automated deployment pipelines and monitoring.',
        icon: Cloud,
        color: 'from-orange-500 to-amber-500',
        features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Auto-scaling'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
        icon: Smartphone,
        color: 'from-yellow-500 to-amber-500',
        features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Publishing'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
    },
    {
        title: 'E-Commerce Solutions',
        description: 'Full-featured online stores with secure payment processing and inventory management.',
        icon: ShoppingCart,
        color: 'from-amber-600 to-orange-600',
        features: ['Custom Storefronts', 'Payment Gateways', 'Inventory Systems', 'Analytics'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
    },
    {
        title: 'AI & Machine Learning',
        description: 'Intelligent automation and predictive analytics powered by advanced AI algorithms.',
        icon: Bot,
        color: 'from-orange-600 to-amber-600',
        features: ['NLP & ChatBots', 'Computer Vision', 'Predictive Models', 'GenAI Integration'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    },
    {
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces designed with user psychology and modern aesthetics.',
        icon: Palette,
        color: 'from-amber-500 to-yellow-500',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
    },
];

const techStack = [
    {
        category: 'Frontend',
        icon: Layout,
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
        color: 'from-amber-500 to-orange-500'
    },
    {
        category: 'Backend',
        icon: Server,
        technologies: ['Node.js', 'Python', 'Go', 'Java', 'GraphQL', 'REST APIs'],
        color: 'from-orange-500 to-amber-500'
    },
    {
        category: 'Database',
        icon: Database,
        technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB', 'Firebase'],
        color: 'from-yellow-500 to-amber-500'
    },
    {
        category: 'DevOps',
        icon: GitBranch,
        technologies: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GitHub Actions', 'Terraform'],
        color: 'from-amber-600 to-orange-600'
    },
    {
        category: 'AI/ML',
        icon: Cpu,
        technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain', 'Scikit-learn'],
        color: 'from-orange-600 to-amber-600'
    },
    {
        category: 'Mobile',
        icon: Smartphone,
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase'],
        color: 'from-amber-500 to-yellow-500'
    },
];

const deliveryProcess = [
    { 
        phase: 'Discovery', 
        description: 'Requirements gathering, market research, and strategic planning',
        icon: Target,
        duration: '1-2 weeks'
    },
    { 
        phase: 'Design', 
        description: 'UI/UX design, prototyping, and user flow optimization',
        icon: Palette,
        duration: '2-3 weeks'
    },
    { 
        phase: 'Development', 
        description: 'Agile development with sprint-based delivery and testing',
        icon: Code,
        duration: '6-12 weeks'
    },
    { 
        phase: 'Testing', 
        description: 'Comprehensive QA, security audits, and performance testing',
        icon: Shield,
        duration: '1-2 weeks'
    },
    { 
        phase: 'Deployment', 
        description: 'Production launch, monitoring setup, and documentation',
        icon: Rocket,
        duration: '1 week'
    },
    { 
        phase: 'Support', 
        description: 'Ongoing maintenance, updates, and feature enhancements',
        icon: Users,
        duration: 'Continuous'
    },
];

const whyChooseUs = [
    { title: 'Expert Team', description: '50+ Senior developers with 10+ years average experience', icon: Users },
    { title: 'Proven Track Record', description: '200+ successful projects delivered globally', icon: Award },
    { title: 'Agile Methodology', description: 'Flexible, iterative approach with regular updates', icon: TrendingUp },
    { title: 'Quality Assurance', description: '99.9% uptime guarantee with rigorous testing', icon: Shield },
    { title: 'Transparent Pricing', description: 'No hidden costs, fixed-price or time & material options', icon: CheckCircle },
    { title: '24/7 Support', description: 'Round-the-clock technical support and maintenance', icon: Zap },
];

export default function ServicesPage() {
    const [offsetY, setOffsetY] = useState(0);
    const [activeService, setActiveService] = useState(0);

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
                <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center pt-20 sm:pt-24 md:pt-28">
                    <div 
                        className="absolute inset-0 z-0 opacity-20"
                        style={{ 
                            backgroundImage: `url(${HERO_BG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: `translateY(${offsetY * 0.5}px) scale(1.1)`,
                        }}
                    />

                    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12 sm:pb-16 md:pb-20">
                        <FadeIn>
                            <div className="inline-block mb-6 sm:mb-8">
                                <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse" />
                                    <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-800">Our Services</span>
                                </div>
                            </div>
                            <Sparkles className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-amber-600 mx-auto mb-6 sm:mb-8" />
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight mb-6 sm:mb-8 text-stone-900 leading-[1.1] px-2">
                                <span className="text-gradient-gold">Our Services</span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-stone-600 mb-10 sm:mb-12 max-w-5xl mx-auto leading-relaxed px-2">
                                Comprehensive <span className="text-amber-600 font-bold">digital solutions</span> crafted to accelerate your business growth
                            </p>
                        </FadeIn>
                        <FadeIn delay={400}>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2">
                                {['200+ Projects', '50+ Clients', '99.9% Uptime', '24/7 Support'].map((stat, i) => (
                                    <div key={i} className="glass-card rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4">
                                        <span className="font-bold text-xs sm:text-sm md:text-base text-amber-600">{stat}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Main Services Grid */}
                <section className="relative py-16 sm:py-20 md:py-24 lg:py-32">
                    <div 
                        className="absolute inset-0 z-0 opacity-10"
                        style={{ 
                            backgroundImage: `url(${SERVICES_BG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed'
                        }}
                    />

                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16 md:mb-20">
                                <p className="text-amber-600 font-bold tracking-wider uppercase mb-3 sm:mb-4 text-xs sm:text-sm">WHAT WE OFFER</p>
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 mb-4 sm:mb-6 px-2">
                                    Premium Services
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-2">
                                    End-to-end digital transformation solutions powered by cutting-edge technology
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                            {mainServices.map((service, i) => (
                                <FadeIn key={i} delay={i * 100}>
                                    <div 
                                        className="group glass-card rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500"
                                        onMouseEnter={() => setActiveService(i)}
                                    >
                                        {/* Service Image */}
                                        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                            <div 
                                                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                                style={{ backgroundImage: `url(${service.image})` }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                                            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                                                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                                                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Service Content */}
                                        <div className="p-6 sm:p-7 md:p-8">
                                            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3 sm:mb-4 group-hover:text-amber-600 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-stone-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
                                                        <span className="text-xs sm:text-sm text-stone-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Link 
                                                href="/contact"
                                                className="group/btn inline-flex items-center text-amber-600 font-bold hover:text-orange-600 transition-colors text-sm sm:text-base"
                                            >
                                                Get Started 
                                                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-2 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technology Stack */}
                <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16 md:mb-20">
                                <Terminal className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-amber-600 mx-auto mb-4 sm:mb-6" />
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 mb-4 sm:mb-6 px-2">
                                    Technology Stack
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-2">
                                    Industry-leading tools and frameworks for building world-class applications
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {techStack.map((stack, i) => (
                                <FadeIn key={i} delay={i * 100}>
                                    <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 hover:scale-105 transition-all duration-500 group">
                                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                            <div className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stack.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                                <stack.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">{stack.category}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {stack.technologies.map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/50 rounded-full text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-600 border border-stone-200 hover:border-amber-200 transition-all duration-300 cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Delivery Process */}
                <section className="relative py-16 sm:py-20 md:py-24 lg:py-32">
                    <div 
                        className="absolute inset-0 z-0 opacity-5"
                        style={{ 
                            backgroundImage: `url(${TECH_BG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed'
                        }}
                    />

                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16 md:mb-20">
                                <Boxes className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-amber-600 mx-auto mb-4 sm:mb-6" />
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 mb-4 sm:mb-6 px-2">
                                    Delivery Process
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-2">
                                    A proven methodology that ensures quality, transparency, and timely delivery
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {deliveryProcess.map((phase, i) => (
                                <FadeIn key={i} delay={i * 100}>
                                    <div className="relative group">
                                        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 h-full hover:scale-105 transition-all duration-500">
                                            <div className="w-14 h-14 sm:w-15 sm:h-15 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-xl sm:text-2xl text-white mb-4 sm:mb-6 mx-auto shadow-xl shadow-amber-500/30">
                                                {i + 1}
                                            </div>
                                            <div className="mb-4 sm:mb-6 flex justify-center">
                                                <phase.icon className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-amber-600" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 sm:mb-3 text-center">{phase.phase}</h3>
                                            <p className="text-stone-600 text-center mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{phase.description}</p>
                                            <div className="text-center">
                                                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-xs sm:text-sm font-semibold">
                                                    {phase.duration}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16 md:mb-20">
                                <Award className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-amber-600 mx-auto mb-4 sm:mb-6" />
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 mb-4 sm:mb-6 px-2">
                                    Why Choose PravonixTech
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-2">
                                    Industry-leading expertise combined with unwavering commitment to excellence
                                </p>
                            </div>
                        </FadeIn>
 
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {whyChooseUs.map((item, i) => (
                                <FadeIn key={i} delay={i * 100}>
                                    <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 hover:scale-105 transition-all duration-500 group">
                                        <div className="w-14 h-14 sm:w-15 sm:h-15 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                            <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-32 overflow-hidden">
                    <div 
                        className="absolute inset-0 z-0 opacity-20"
                        style={{ 
                            backgroundImage: `url(${CTA_BG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/90 to-[#FDFCF8]" />

                    <FadeIn>
                        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-14 lg:p-16">
                                <Rocket className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-amber-600 mx-auto mb-6 sm:mb-8" />
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 sm:mb-8 leading-tight px-2">
                                    Ready to Transform Your Business?
                                </h2>
                                <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
                                    Let's discuss how our services can help you achieve your digital goals
                                </p>
                                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
                                    <Link 
                                        href="/contact"
                                        className="group inline-flex items-center justify-center bg-stone-900 text-white font-bold px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl hover:bg-amber-600 transition-all duration-300 shadow-2xl shadow-stone-900/20"
                                    >
                                        Start Your Project
                                        <Rocket className="ml-3 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                                    </Link>
                                    <Link 
                                        href="/portfolio"
                                        className="glass-card font-bold px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 rounded-full hover:bg-white transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-2xl text-stone-900 text-center"
                                    >
                                        View Our Work
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
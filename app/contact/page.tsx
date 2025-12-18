"use client";

import Link from 'next/link';
import { 
    Mail, 
    Phone, 
    MapPin, 
    ArrowRight,
    MessageSquareText, 
    Headset, 
    Send,
    X,
    CheckCircle,
    AlertTriangle
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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

// --- Modal Component ---
interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    message: string;
    isSuccess: boolean;
}

const ContactModal: React.FC<ModalProps> = ({ show, onClose, title, message, isSuccess }) => {
    if (!show) return null;

    const Icon = isSuccess ? CheckCircle : AlertTriangle;
    const iconColor = isSuccess ? 'text-green-600' : 'text-red-600';
    const bgColor = isSuccess ? 'border-green-200' : 'border-red-200';

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            aria-modal="true"
            role="dialog"
            onClick={onClose} 
        >
            <div 
                className={`w-full max-w-md p-6 rounded-xl shadow-2xl transition-all duration-300 transform scale-100 bg-white border-2 ${bgColor}`}
                onClick={(e) => e.stopPropagation()} 
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                        <Icon className={`w-8 h-8 mr-3 ${iconColor}`} />
                        <h3 className="text-xl font-bold text-stone-900">{title}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-stone-400 hover:text-stone-900 transition-colors p-1 rounded-full hover:bg-stone-100"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="text-stone-600 mb-6">
                    <p>{message}</p>
                </div>

                <button
                    onClick={onClose}
                    className={`w-full py-2 rounded-full font-semibold transition-colors duration-200 text-white
                        ${isSuccess 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : 'bg-amber-600 hover:bg-amber-700'
                        }`}
                >
                    {isSuccess ? 'Done' : 'Try Again'}
                </button>
            </div>
        </div>
    );
};

// --- Data Structure for Contact Info ---
const contactInfo = [
    { icon: Mail, title: 'Email Address', details: 'hello@pravonixtech.com', link: 'mailto:hello@pravonixtech.com' },
    { icon: Phone, title: 'Phone Number', details: '+91 7248 780652', link: 'tel:+919876543210' },
    { icon: MapPin, title: 'Corporate Office', details: 'Cyber Hub, Gurugram, India', link: '#' },
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', message: '', isSuccess: false });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const clientValidate = (data: { name: string, email: string, phone: string, subject: string, message: string }): string | null => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return "Please enter a valid email address.";
        }

        const phoneRegex = /^[\+0-9\-\(\)\s]{8,20}$/;
        const strippedPhone = data.phone.trim();

        if (!phoneRegex.test(strippedPhone)) {
             return "Please enter a valid phone number (8-20 characters, including digits, +, -, or parentheses).";
        }
        
        if (data.name.trim().length < 3) {
            return "Full Name must be at least 3 characters long.";
        }

        return null;
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setModalContent({ title: '', message: '', isSuccess: false });

        const validationError = clientValidate(formData);
        if (validationError) {
            setModalContent({
                title: 'Validation Error',
                message: validationError,
                isSuccess: false,
            });
            setShowModal(true);
            setIsSubmitting(false);
            return; 
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setModalContent({
                    title: 'Message Sent!',
                    message: 'Thank you for reaching out! Your message has been sent successfully and saved. We will contact you shortly.',
                    isSuccess: true,
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                const errorMessage = result.message || 'An unexpected error occurred while processing your request. Please try again.';
                setModalContent({
                    title: 'Submission Failed',
                    message: errorMessage,
                    isSuccess: false,
                });
            }

        } catch (error) {
            console.error('Submission error:', error);
            setModalContent({
                title: 'Network Error',
                message: 'A network error occurred. Please check your connection or contact the administrator directly.',
                isSuccess: false,
            });
        } finally {
            setIsSubmitting(false);
            setShowModal(true); 
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalContent({ title: '', message: '', isSuccess: false });
    };

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

            <main className="relative z-10 pt-24 pb-16">
                
                {/* === 1. Hero / Header Section === */}
                <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <FadeIn>
                            <div className="inline-block mb-6 sm:mb-8">
                                <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse" />
                                    <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-800">Get In Touch</span>
                                </div>
                            </div>
                            <Headset className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-amber-600 mx-auto mb-4 sm:mb-6" />
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4 text-stone-900 px-2">
                                Let's Talk About Your <span className="text-gradient-gold">Project</span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-2">
                                Whether you have a question, a project idea, or just want to say hello, our team is ready to listen.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* === 2. Contact Form and Information (Dual Column Layout) === */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-start">
                            
                            {/* Left Column: Contact Information Cards */}
                            <FadeIn>
                                <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 sm:mb-6">Reach Out Directly</h3>
                                    
                                    {contactInfo.map((item) => (
                                        <Link 
                                            key={item.title} 
                                            href={item.link} 
                                            className="block p-4 sm:p-5 md:p-6 glass-card rounded-xl transition duration-300 transform hover:scale-[1.02] group"
                                        >
                                            <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                                            <p className="text-base sm:text-lg font-semibold text-stone-900 mb-1">{item.title}</p>
                                            <p className="text-xs sm:text-sm text-stone-600 group-hover:text-amber-600 break-words">{item.details}</p>
                                        </Link>
                                    ))}
                                    
                                    <div className="pt-2 sm:pt-4">
                                        <Link 
                                            href="/about" 
                                            className="inline-flex items-center text-sm sm:text-base text-amber-600 font-semibold hover:text-orange-600 transition-colors group"
                                        >
                                            Learn More About Us <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Right Column: Contact Form */}
                            <FadeIn delay={200}>
                                <div className="lg:col-span-2 p-6 sm:p-8 md:p-10 glass-card rounded-2xl shadow-2xl lg:w-[220%]">
                                    <MessageSquareText className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3 sm:mb-4" />
                                    <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6 sm:mb-8">Send Us a Message</h3>
                                
                                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-stone-200 rounded-lg text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-stone-200 rounded-lg text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                                                Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-stone-200 rounded-lg text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                                            Subject / Service Needed <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            id="subject" 
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-stone-200 rounded-lg text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                                            placeholder="Full-Stack SaaS Platform Development"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                                            Your Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-stone-200 rounded-lg text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200 resize-y"
                                            placeholder="Describe your project, goals, and timeline..."
                                        ></textarea>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className={`inline-flex items-center justify-center w-full sm:w-auto 
                                            bg-stone-900 text-white font-bold 
                                            px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg transition duration-300 shadow-xl 
                                            shadow-stone-900/10 hover:bg-amber-600 active:scale-95
                                            ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>
                
                {/* === 3. Location / Map Section === */}
                <section className="py-12 sm:py-16 md:py-20 bg-white/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 text-center mb-8 sm:mb-10 md:mb-12">Visit Our Headquarters</h2>
                            
                            <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-stone-200 glass-card">
                                <div className="flex flex-col sm:flex-row items-center justify-center h-full text-stone-500 p-4 sm:p-6">
                                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mr-0 sm:mr-3 mb-2 sm:mb-0 text-amber-600" />
                                    <p className="text-sm sm:text-base md:text-lg text-center">Google Maps Placeholder: Embed your interactive map here.</p>
                                </div>
                            </div>
                            
                            <p className="text-center text-sm sm:text-base text-stone-600 mt-4 sm:mt-6 px-4">
                                We operate globally, serving clients across all major time zones. Schedule a meeting for a virtual or in-person consultation.
                            </p>
                        </FadeIn>
                    </div>
                </section>
                
            </main>
            
            {/* Footer */}
            <footer className="relative bg-[#1C1917] text-stone-400 pt-20 pb-10 border-t border-stone-800 font-sans">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-stone-800 pb-16">
                        <div className="space-y-6">
                            <span className="text-2xl font-bold text-white flex items-center gap-2">
                                <MessageSquareText className="text-amber-600" /> Pravonix<span className="text-amber-500">Tech</span>
                            </span>
                            <p className="text-stone-500 leading-relaxed text-sm">Premier software consultancy delivering enterprise-grade digital transformation.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                <li><Link href="/services" className="hover:text-amber-500 transition-colors">Custom Development</Link></li>
                                <li><Link href="/services" className="hover:text-amber-500 transition-colors">Cloud Solutions</Link></li>
                                <li><Link href="/services" className="hover:text-amber-500 transition-colors">AI Integration</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
                            <div className="space-y-4 text-sm">
                                <p className="text-stone-500">Cyber Hub, Gurugram, India</p>
                                <a href="mailto:hello@pravonixtech.com" className="hover:text-amber-500 transition-colors">hello@pravonixtech.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-stone-600 gap-4">
                        <p>© {new Date().getFullYear()} PravonixTech Inc. All rights reserved.</p>
                        <div className="flex gap-6"><a href="#" className="hover:text-amber-500">Terms</a><a href="#" className="hover:text-amber-500">Privacy</a></div>
                    </div>
                </div>
            </footer>

            {/* === Contact Modal Component === */}
            <ContactModal
                show={showModal}
                onClose={handleCloseModal}
                title={modalContent.title}
                message={modalContent.message}
                isSuccess={modalContent.isSuccess}
            />

        </div>
    );
}
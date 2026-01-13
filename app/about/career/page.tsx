"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    BookOpen,
    Users,
    Briefcase,
    Award,
    CheckCircle,
    ArrowRight,
    GraduationCap,
    Code,
    Database,
    Globe,
    Smartphone,
    Zap,
    MessageCircle,
    Phone,
    Mail,
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

// Certificate Image Component with Error Handling
const CertificateImage = () => {
    const [imageError, setImageError] = useState(false);
    const [imageSrc, setImageSrc] = useState("/certificate.png");

    return (
        <>
            {!imageError ? (
                <Image
                    src={imageSrc}
                    alt="Certificate of Internship - PravonixTech"
                    width={1200}
                    height={900}
                    className="w-full h-full object-contain rounded-xl"
                    unoptimized
                    priority
                    onError={() => setImageError(true)}
                />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 text-white">
                    <Award className="w-16 h-16 text-amber-400 mb-4" />
                    <p className="text-lg font-semibold mb-2">Certificate Image</p>
                    <p className="text-sm text-stone-300">Please add certificate.png to public folder</p>
                </div>
            )}
        </>
    );
};

const valueItems = [
    {
        title: "Learning",
        description: "If you are looking for paid learning in the best institution, we will be there to help you",
        icon: BookOpen,
    },
    {
        title: "Training",
        description: "We provide best mentors to train the students and provide interviews in top companies",
        icon: GraduationCap,
    },
    {
        title: "Internship",
        description: "Need to develop your skills? And looking for great career, we are there to offer 1 year of internship",
        icon: Briefcase,
    },
    {
        title: "Placement",
        description: "Train with us, If you are not getting offers! We will provide job offer in PravonixTech",
        icon: Award,
    },
];

const achievements = [
    { number: "1500+", label: "Students placed" },
    { number: "800+", label: "Hiring partners" },
    { number: "1000+", label: "Industry experts" },
    { number: "90%", label: "Placement Rate" },
];

const courses = [
    {
        title: "Web Development",
        description: "Web development is the major thing that involves developing a website for the world wide. It can range from developing a simple single static to complex.",
        topics: [
            "Build websites with HTML & CSS",
            "Build back-end servers & APIs with nodes",
            "Work with NoSQL databases with MongoDB",
            "Build mobile-friendly websites with Bootstrap",
            "Introduction to JavaScript, JS Functions and objects",
        ],
        price: "Rs. 40,000/-",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    },
    {
        title: "React Development",
        description: "React is Java Script-based UI development library. It lets you compose complex UIs from small and isolated pieces of code components.",
        topics: [
            "Introduction to React",
            "About components",
            "Rendering Lists",
            "Event handling in React",
            "Working with forms, context, code splitting etc.,",
        ],
        price: "Rs. 50,000/-",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    },
    {
        title: "Node Js Development",
        description: "Node JS is an open source, cross platform runtime environment for executing JavaScript code. It mainly used for extensively server-side programming.",
        topics: [
            "Understand the Nodejs framework",
            "Work with node projects",
            "HTTP server with Nodejs",
            "Learn asynchronous programming",
            "Buffer streams and events etc.,",
        ],
        price: "Rs. 35,000/-",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
        title: "Mern Stack Development",
        description: "It mainly acts as collection of technologies that enables faster application development. It is used by world wide developers.",
        topics: [
            "Introduction to Mern stack",
            "Mern components",
            "About MongoDB",
            "Advanced Front-end with React js",
            "Full Front-end development",
        ],
        price: "Rs. 35,000/-",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    },
];

const tools = [
    { name: "HTML/CSS", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "React", icon: Code },
    { name: "Node.js", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Express", icon: Code },
    { name: "Bootstrap", icon: Globe },
    { name: "Git", icon: Code },
    { name: "REST API", icon: Code },
    { name: "MERN Stack", icon: Code },
];

const experts = [
    { name: "Himanshu Gupta", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
    { name: "Akshay Gupta", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
    { name: "Sagar Jaiswal", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
    { name: "Mohan Patil", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" },
];

const supportItems = [
    {
        title: "Personal Guidance",
        description: "Get groomed by experienced developers and designers who are working in top companies",
        icon: Users,
    },
    {
        title: "Dedicated Placements",
        description: "A team of warriors ensure your profile reaches to top companies",
        icon: Briefcase,
    },
    {
        title: "Interview Practice",
        description: "Gain confidence with unlimited mock interviews before the real interviews",
        icon: MessageCircle,
    },
];

const testimonials = [
    {
                                        name: "Pallavi Ritesh Mokaddam",
        text: "PravonixTech has a friendly environment. I have learnt new and challenging things over here which helps me to boost my confidence. The supportive atmosphere here encourages personal and professional growth.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
        name: "Aditya",
        text: "My experience with PravonixTech has been phenomenal due to the experiences gained, and new things learnt. It is only made better due to the flexible environment and supportive people.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
        name: "MD ZAHED IQBAL",
        text: "The supportive community fostered by PravonixTech played a crucial role in my development. I always felt encouraged to ask questions and share my insights, creating a collaborative environment.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
        name: "Priyanka Arya",
        text: "The interactive learning experience offered by PravonixTech made my journey truly engaging. I found myself eagerly anticipating each session, eager to delve deeper into the subject matter.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
    {
        name: "Meraj Hossain Samir",
        text: "My experience with PravonixTech has been nothing short of phenomenal. The knowledge and experiences gained have been invaluable, contributing significantly to my personal and professional growth",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
    },
    {
        name: "SAYED MOHAMMED",
        text: "The flexibility offered by PravonixTech has enhanced my learning journey. Being able to adapt my schedule to fit my needs has allowed me to fully immerse myself in the learning process without any constraints",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
        name: "Abhay Wankhade",
        text: "After joining PravonixTech as a MERN stack Intern, I gained invaluable experience in project management,, problem-solving, and product development while working on various projects.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
    },
];

export default function CareerPage() {
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

            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-br from-[#FDFCF8] via-[#FEF9E7] to-[#FFF8E1] -z-10"></div>
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)] -z-10"></div>
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.08),transparent_50%)] -z-10"></div>

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                            <FadeIn>
                                <div className="text-left flex flex-col justify-center">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 sm:mb-8 leading-tight">
                                        Getting Quality Education And <span className="text-amber-600">Technical Skills</span> Together Is Now More Easy!
                                    </h1>
                                    <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-8 sm:mb-10 leading-relaxed mt-8 sm:mt-10">
                                        We PravonixTech works on live projects in company as well as we provide best education to the students who are looking for great career change
                                    </p>
                                    <Link
                                        href="#courses"
                                        className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-stone-900 text-white font-bold rounded-full text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl mt-6 sm:mt-8"
                                    >
                                        Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </div>
                            </FadeIn>
                            <FadeIn delay={200}>
                                <div className="relative w-full">
                                    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] rounded-2xl overflow-hidden flex items-start justify-center mb-6">
                                        <Image
                                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                                            alt="Career Education"
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-cover rounded-2xl"
                                            unoptimized
                                        />
                                    </div>
                                    {/* Content Related Image Below */}
                                    <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden">
                                        <Image
                                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
                                            alt="Technical Skills and Education"
                                            width={800}
                                            height={400}
                                            className="w-full h-full object-cover rounded-2xl"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent rounded-2xl"></div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Our Value To Help You */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    Our Value To <span className="text-amber-600">Help You</span>
                                </h2>
                                <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
                                    We always provide the best career for students, join us to make your future bright
                                </p>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {valueItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <FadeIn key={item.title} delay={idx * 100}>
                                        <div className="glass-card p-6 sm:p-8 rounded-2xl text-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Our Achievement */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <FadeIn>
                                <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                                        alt="Achievement"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover rounded-2xl"
                                        unoptimized
                                    />
                                </div>
                            </FadeIn>
                            <FadeIn delay={200}>
                                <div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                        Our <span className="text-amber-600">Achievement</span>
                                    </h2>
                                    <p className="text-lg sm:text-xl text-stone-600 mb-8 sm:mb-10 leading-relaxed">
                                        We help students to achieve in their career. We work and train them according to the skills they have and make them career to extend of growth
                                    </p>
                                    <div className="grid grid-cols-2 gap-6 sm:gap-8">
                                        {achievements.map((achievement, idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                                                    {achievement.number}
                                                </div>
                                                <div className="text-stone-600 text-sm sm:text-base font-medium">
                                                    {achievement.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Certificate Section */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    Students outcome <span className="text-amber-600">certificates</span>
                                </h2>
                            </div>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <div className="glass-card p-4 sm:p-6 rounded-2xl max-w-4xl mx-auto">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                                    <CertificateImage />
                                    {/* Glowing border effect */}
                                    <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.3)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-xl border border-pink-400/20 shadow-[0_0_15px_rgba(244,114,182,0.2)] pointer-events-none"></div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Most Demanding Course */}
                <section id="courses" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50/50">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    Most Demanding <span className="text-amber-600">Course</span>
                                </h2>
                                <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
                                    We provide basic to advanced courses with theoretical and practical knowledge
                                </p>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {courses.map((course, idx) => (
                                <FadeIn key={course.title} delay={idx * 100}>
                                    <div className="glass-card rounded-2xl overflow-hidden">
                                        <div className="relative w-full h-48 sm:h-56 md:h-64">
                                            <Image
                                                src={course.image}
                                                alt={course.title}
                                                width={800}
                                                height={400}
                                                className="w-full h-full object-cover"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 sm:left-6">
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                                    {course.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="p-6 sm:p-8">
                                            <p className="text-stone-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                                                {course.description}
                                            </p>
                                            <div className="mb-4 sm:mb-6">
                                                <h4 className="font-bold text-stone-900 mb-3 sm:mb-4">Topics Covered</h4>
                                                <ul className="space-y-2">
                                                    {course.topics.map((topic, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-stone-700">
                                                            <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                                            <span>{topic}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                                                <div className="text-2xl sm:text-3xl font-bold text-amber-600">
                                                    {course.price}
                                                </div>
                                                <Link
                                                    href="/contact"
                                                    className="px-6 py-3 bg-stone-900 text-white font-bold rounded-full hover:bg-amber-600 transition-all duration-300 text-sm sm:text-base"
                                                >
                                                    Apply Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tools And Languages */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    Tools And languages that you will <span className="text-amber-600">specialize in</span>
                                </h2>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                            {tools.map((tool, idx) => {
                                const Icon = tool.icon;
                                return (
                                    <FadeIn key={tool.name} delay={idx * 50}>
                                        <div className="glass-card p-4 sm:p-6 rounded-xl text-center hover:scale-110 transition-transform">
                                            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mx-auto mb-2 sm:mb-3" />
                                            <div className="text-sm sm:text-base font-medium text-stone-900">{tool.name}</div>
                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Our Experts */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50/50">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    Our <span className="text-amber-600">Experts</span>
                                </h2>
                                <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
                                    Still confused about which course is the best fit for you? They will help you
                                </p>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                            {experts.map((expert, idx) => (
                                <FadeIn key={expert.name} delay={idx * 100}>
                                    <div className="glass-card p-6 rounded-2xl text-center">
                                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6">
                                            <Image
                                                src={expert.image}
                                                alt={expert.name}
                                                width={128}
                                                height={128}
                                                className="w-full h-full object-cover"
                                                unoptimized
                                            />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-stone-900">{expert.name}</h3>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                        <FadeIn delay={400}>
                            <div className="text-center mt-12">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-stone-900 text-white font-bold rounded-full text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-xl"
                                >
                                    Talk to our experts <MessageCircle className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* 24/7 Support */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    24 / 7 & <span className="text-amber-600">Lifelong support</span> to career
                                </h2>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {supportItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <FadeIn key={item.title} delay={idx * 100}>
                                        <div className="glass-card p-6 sm:p-8 rounded-2xl text-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50/50">
                    <div className="max-w-7xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 sm:mb-6">
                                    <span className="text-amber-600">Testimonials</span>
                                </h2>
                                <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
                                    More than 50+ students have given feedback regarding the PravonixTech and people who are interested in joining can learn from those testimonials.
                                </p>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {testimonials.map((testimonial, idx) => (
                                <FadeIn key={testimonial.name} delay={idx * 100}>
                                    <div className="glass-card p-6 sm:p-8 rounded-2xl">
                                        <div className="flex items-center gap-4 mb-4 sm:mb-6">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={64}
                                                    height={64}
                                                    className="w-full h-full object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-base sm:text-lg font-bold text-stone-900">{testimonial.name}</h3>
                                            </div>
                                        </div>
                                        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                                            {testimonial.text}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}


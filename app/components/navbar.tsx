"use client"; 

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { Menu, X, Code, Home, Info, Briefcase, Users, Mail } from "lucide-react"; 

// Define the navigation items
const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Clients", href: "/clients", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state
    const [scrolled, setScrolled] = useState(false); // Scroll state for glass effect opacity
    const pathname = usePathname(); 

    // Handle scroll effect for extra premium feel
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Helper function to render links
    const renderLink = (item: typeof navItems[0], isMobile = false) => {
        const isActive = pathname === item.href;

        // Base classes
        const baseClass = "font-medium transition-all duration-300 relative group";
        
        // --- PREMIUM COLOR LOGIC ---
        // Active: Dark Amber/Brown text
        const activeClass = "text-amber-700 font-semibold";
        // Inactive: Stone Gray text -> Hovers to Amber
        const inactiveClass = "text-stone-500 hover:text-amber-600";

        return (
            <Link 
                key={item.name}
                href={item.href} 
                onClick={isMobile ? toggleMenu : undefined}
                className={`${isMobile ? 'w-full text-center px-3 py-3 rounded-xl hover:bg-amber-50 text-lg border border-transparent hover:border-amber-100' : 'text-sm tracking-wide'} 
                           ${isActive ? activeClass : inactiveClass}
                           ${baseClass}`}
            >
                {item.name}
                
                {/* Active Indicator Bar (Desktop Only - Gold Line) */}
                {!isMobile && (
                    <span 
                        className={`absolute bottom-[-6px] left-0 h-[2px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full transition-all duration-300 ease-in-out 
                                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full opacity-0 group-hover:opacity-100'}`}
                    ></span>
                )}
            </Link>
        );
    };

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b
            ${scrolled 
                ? 'bg-[#FDFCF8]/90 backdrop-blur-md border-stone-200/60 shadow-sm' 
                : 'bg-[#FDFCF8]/50 backdrop-blur-sm border-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                
                {/* --- 1. Logo Section (Premium Stone & Gold) --- */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <Link href="/" className="flex items-center gap-2">
                        {/* Logo Icon Container */}
                        <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300 group-hover:scale-105">
                            <Code className="w-5 h-5" />
                        </div>

                        {/* Text Logo */}
                        <span className="text-xl font-bold tracking-tight text-stone-800">
                            Pravonix<span className="text-amber-600">Tech</span>
                        </span>
                    </Link>
                </div>

                {/* --- 2. Desktop Navigation Links --- */}
                <div className="hidden md:flex items-center space-x-10">
                    {navItems.map((item) => renderLink(item))}
                    
                    {/* CTA Button in Navbar */}
                    <Link 
                        href="/contact"
                        className="px-6 py-2.5 bg-stone-900 text-white text-sm font-bold rounded-full hover:bg-amber-600 transition-colors shadow-lg shadow-stone-900/10"
                    >
                        Get Started
                    </Link>
                </div>

                {/* --- 3. Mobile Menu Button (Hamburger) --- */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-stone-600 hover:text-amber-600 focus:outline-none transition-colors p-2"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </nav>

            {/* --- 4. Mobile Menu Sidebar (Slides from Right) --- */}
            {/* Sidebar from Right */}
            <div 
                className={`fixed top-16 right-0 h-[calc(90vh-4rem)] w-72 md:w-80 max-w-[80vw] bg-stone-900/98 backdrop-blur-md shadow-2xl z-[70] md:hidden transition-transform duration-300 ease-in-out rounded-2xl ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full rounded-2xl overflow-hidden">
                    {/* Menu Items - Start directly from Home */}
                    <div className="flex-1 px-4 py-6 space-y-2 flex flex-col overflow-y-auto">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={toggleMenu}
                                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-base border transition-all duration-200 flex items-center gap-3 ${
                                        isActive 
                                            ? 'bg-amber-600 text-white border-amber-500' 
                                            : 'text-white/90 hover:bg-white/10 hover:text-white border-transparent hover:border-white/20'
                                    }`}
                                >
                                    <Icon className="w-5 h-5 flex-shrink-0" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                        
                        <Link 
                            href="/contact"
                            onClick={toggleMenu}
                            className="w-full text-center px-6 py-3 bg-white text-stone-900 font-bold rounded-xl hover:bg-amber-50 transition-colors mt-4 shadow-lg"
                        >
                            Start Project
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
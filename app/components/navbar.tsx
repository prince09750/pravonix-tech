"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Code,
  Home,
  Info,
  Briefcase,
  Users,
  UsersRound,
  Mail,
  ChevronDown,
  UserCircle,
  GraduationCap,
  Video,
  Brain,
  Layout,
  Cpu,
  Film,
  Sliders,
} from "lucide-react";

// Navigation items
const navItems = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "About",
    href: "/about",
    icon: Info,
    children: [
      { name: "About us", href: "/about", icon: UserCircle },
      { name: "Team", href: "/about/team", icon: UsersRound },
      { name: "Career", href: "/about/career", icon: GraduationCap },
    ],
  },
  {
    name: "Services",
    href: "/services",
    icon: Briefcase,
    children: [
      { name: "Our Services", href: "/services", icon: Sliders },
      { name: "AI/ML", href: "/services/ai-ml", icon: Cpu },
      { name: "3D Videos", href: "/services/3d-videos", icon: Film },
    ],
  },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdownsDesktop, setOpenDropdownsDesktop] = useState<Record<string, boolean>>({});
  const [openDropdownsMobile, setOpenDropdownsMobile] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderLink = (item: any, isMobile = false) => {
    const isActive = pathname === item.href;
    const baseClass = "font-medium transition-all duration-300 relative group";
    const activeClass = "text-amber-700 font-semibold";
    const inactiveClass = "text-stone-500 hover:text-amber-600";

    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={isMobile ? toggleMenu : undefined}
        className={`${isMobile
          ? "w-full text-center px-3 py-3 rounded-xl hover:bg-amber-50 text-xl"
          : "text-base md:text-lg tracking-wide"
        } ${isActive ? activeClass : inactiveClass} ${baseClass}`}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b
      ${scrolled
        ? "bg-white/70 backdrop-blur-xl saturate-180 border-white/30 shadow-lg shadow-black/5"
        : "bg-white/40 backdrop-blur-lg saturate-150 border-white/20"
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(16px) saturate(150%)',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(16px) saturate(150%)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group/logo">
          <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover/logo:shadow-xl group-hover/logo:scale-110 transition-all duration-300">
            <Code className="w-5 h-5" />
          </div>
          <span className="text-2xl md:text-3xl font-bold text-stone-800 group-hover/logo:text-stone-900 transition-colors">
            Pravonix<span className="text-amber-600">Tech</span>
          </span>
        </Link>

        {/* ================= DESKTOP MENU (Tablet & Laptop & Desktop) ================= */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10 relative">
          {navItems.map((item) => {
            if (item.children) {
              const isDropdownOpen = openDropdownsDesktop[item.name] || false;
              const isActive = pathname.startsWith(item.href);
              
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdownsDesktop({ ...openDropdownsDesktop, [item.name]: true })}
                  onMouseLeave={() => setOpenDropdownsDesktop({ ...openDropdownsDesktop, [item.name]: false })}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 text-base md:text-lg font-medium transition-all duration-300 group py-2 px-1 ${
                      isActive
                        ? "text-amber-700 font-semibold"
                        : "text-stone-500 hover:text-amber-600"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''} ${isActive ? 'text-amber-700' : ''}`} />
                  </Link>

                  <div
                    className={`absolute top-full left-0 -mt-2 min-w-[180px] md:min-w-[200px] lg:min-w-[220px] bg-white/80 backdrop-blur-xl saturate-180 rounded-xl md:rounded-2xl shadow-2xl border border-white/50 z-50 overflow-hidden transition-all duration-300 origin-top ${
                      isDropdownOpen 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                    }`}
                    style={{
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
                    }}
                  >
                    <div className="py-1">
                      {item.children.map((child, index) => {
                        const isChildActive = pathname === child.href || (child.href.includes('#') && pathname.startsWith(item.href));
                        const ChildIcon = child.icon;
                        const isLast = index === item.children.length - 1;
                        return (
                          <div key={child.name}>
                            <Link
                              href={child.href}
                              className={`block w-full px-4 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2 text-sm md:text-base font-medium transition-all duration-300 ease-out relative group/item cursor-pointer touch-manipulation rounded-lg mx-1 ${
                                isChildActive
                                  ? 'bg-amber-50/80 text-amber-700 font-semibold backdrop-blur-sm'
                                  : 'text-stone-700 hover:bg-white/60 hover:text-amber-600 active:bg-white/80 backdrop-blur-sm'
                              }`}
                            >
                              <span className="relative z-10 flex items-center gap-2 md:gap-3">
                                {ChildIcon && (
                                  <ChildIcon className={`w-4 h-4 flex-shrink-0 transition-all duration-500 ease-out ${
                                    isChildActive ? 'text-amber-600' : 'text-stone-400 group-hover/item:text-amber-600 group-hover/item:scale-110'
                                  }`} />
                                )}
                                <span className="whitespace-nowrap transition-all duration-300 ease-out group-hover/item:translate-x-1">{child.name}</span>
                              </span>
                              <div className={`absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-amber-500 to-amber-600 transition-all duration-500 ease-out ${
                                isChildActive ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'
                              }`}></div>
                            </Link>
                            {!isLast && (
                              <div className="mx-4 border-b border-stone-200/30"></div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return renderLink(item);
          })}

          <Link
            href="/contact"
            className="px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 bg-gradient-to-r from-stone-900 to-stone-800 text-white text-base md:text-lg font-bold rounded-full hover:from-amber-600 hover:to-amber-500 active:from-amber-700 active:to-amber-600 transition-all duration-300 touch-manipulation whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-stone-800" /> : <Menu className="w-6 h-6 text-stone-800" />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU (Mobile & Small Tablets) ================= */}
      <div
        className={`fixed top-16 right-0 h-[calc(90vh-4rem)] w-72 sm:w-80 bg-white/85 backdrop-blur-xl saturate-180 md:hidden transition-transform z-40 rounded-tl-2xl rounded-bl-2xl shadow-2xl overflow-y-auto border-l border-t border-b border-white/50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
        }}
      >
        <div className="p-4 sm:p-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.children) {
              const isDropdownOpen = openDropdownsMobile[item.name] || false;
              const isParentActive = pathname.startsWith(item.href);
              
              return (
                <div key={item.name} className="rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenDropdownsMobile({ ...openDropdownsMobile, [item.name]: !isDropdownOpen })}
                    className={`flex items-center gap-3 w-full px-4 py-3.5 sm:px-5 sm:py-4 text-stone-800 transition-all duration-200 rounded-xl hover:bg-white/60 active:bg-white/80 touch-manipulation backdrop-blur-sm ${
                      isParentActive ? 'bg-white/50 font-semibold' : ''
                    }`}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="font-medium text-base sm:text-lg">{item.name}</span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 ml-auto transition-transform duration-300 flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isDropdownOpen ? 'max-h-80 sm:max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {item.children.map((child, index) => {
                      const isChildActive = pathname === child.href || (child.href.includes('#') && pathname.startsWith(item.href));
                      const ChildIcon = child.icon;
                      const isLast = index === item.children.length - 1;
                      return (
                        <div key={child.name}>
                          <Link
                            href={child.href}
                            onClick={toggleMenu}
                            className={`flex items-center gap-3 ml-10 sm:ml-12 px-4 py-3.5 sm:px-5 sm:py-4 text-stone-700 hover:text-stone-900 transition-all duration-500 ease-out relative cursor-pointer active:bg-white/60 touch-manipulation min-h-[48px] group backdrop-blur-sm rounded-lg ${
                              isChildActive ? 'text-amber-600 font-semibold bg-white/50' : 'hover:bg-white/40'
                            }`}
                          >
                            {ChildIcon && (
                              <ChildIcon className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-500 ease-out ${
                                isChildActive ? 'text-amber-600' : 'text-stone-500 group-hover:text-amber-600 group-hover:scale-110'
                              }`} />
                            )}
                            <span className="flex-1 text-base sm:text-lg transition-all duration-300 ease-out group-hover:translate-x-1">{child.name}</span>
                            {isChildActive && (
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-amber-600 rounded-r"></div>
                            )}
                          </Link>
                          {!isLast && (
                            <div className="ml-10 sm:ml-12 mr-4 border-b border-stone-200/50"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className={`flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4 text-stone-800 hover:bg-white/60 active:bg-white/80 rounded-xl transition-all duration-200 touch-manipulation min-h-[48px] backdrop-blur-sm ${
                  isActive ? 'bg-white/50 font-semibold text-amber-600' : ''
                }`}
              >
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ${isActive ? 'text-amber-600' : 'text-stone-600'}`} />
                <span className="text-base sm:text-lg font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

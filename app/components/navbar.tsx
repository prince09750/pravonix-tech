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
  Mail,
  ChevronDown,
} from "lucide-react";

// Navigation items
const navItems = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "About",
    href: "/about",
    icon: Info,
    children: [{ name: "Team", href: "/about/team" }],
  },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpenDesktop, setAboutOpenDesktop] = useState(false);
  const [aboutOpenMobile, setAboutOpenMobile] = useState(false);
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
          ? "w-full text-center px-3 py-3 rounded-xl hover:bg-amber-50 text-lg"
          : "text-sm tracking-wide"
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
        ? "bg-[#FDFCF8]/90 backdrop-blur-md border-stone-200/60 shadow-sm"
        : "bg-[#FDFCF8]/50 backdrop-blur-sm border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-white shadow-lg">
            <Code className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-stone-800">
            Pravonix<span className="text-amber-600">Tech</span>
          </span>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center space-x-10 relative">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setAboutOpenDesktop(true)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm font-medium transition
                      ${pathname.startsWith("/about")
                        ? "text-amber-700 font-semibold"
                        : "text-stone-500 hover:text-amber-600"
                      }`}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </Link>

                  {aboutOpenDesktop && (
                    <div
                      className="absolute top-9 left-0 w-40 bg-white rounded-xl shadow-lg border z-50"
                      onMouseLeave={() => setAboutOpenDesktop(false)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-600"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return renderLink(item);
          })}

          <Link
            href="/contact"
            className="px-6 py-2.5 bg-stone-900 text-white text-sm font-bold rounded-full hover:bg-amber-600"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed top-16 right-0 h-[calc(90vh-4rem)] w-72 bg-stone-900 md:hidden transition-transform z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.children) {
              return (
                <div key={item.name}>
                  <button
                    onClick={() => setAboutOpenMobile(!aboutOpenMobile)}
                    className="flex items-center gap-3 w-full px-4 py-3 text-white"
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-auto" />
                  </button>

                  {aboutOpenMobile &&
                    item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={toggleMenu}
                        className="block ml-12 px-4 py-2 text-white/80"
                      >
                        {child.name}
                      </Link>
                    ))}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="flex items-center gap-3 px-4 py-3 text-white"
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

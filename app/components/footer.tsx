"use client";

import Link from "next/link";
import { useState } from "react";
import { Code, Mail, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Thank you for subscribing!" });
        setEmail("");
        setTimeout(() => setMessage(null), 5000);
      } else {
        setMessage({ type: "error", text: data.message || "Something went wrong. Please try again." });
        setTimeout(() => setMessage(null), 5000);
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to subscribe. Please try again later." });
      setTimeout(() => setMessage(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1C1917] text-stone-400 pt-20 pb-10 border-t border-stone-800 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Newsletter */}
        <div className="bg-stone-800/50 border border-stone-700 rounded-[2rem] p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Subscribe to our insights</h3>
            <p className="text-stone-400">Join 5,000+ executives receiving weekly updates.</p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-3 flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="bg-stone-900 border border-stone-700 text-white px-6 py-4 rounded-full focus:outline-none focus:border-amber-500 w-full md:w-72 disabled:opacity-50 disabled:cursor-not-allowed" 
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {message && (
              <div className={`w-full md:w-auto px-4 py-2 rounded-lg text-sm font-medium text-center ${
                message.type === "success" 
                  ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                  : "bg-red-500/20 text-red-400 border border-red-500/30"
              }`}>
                {message.text}
              </div>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 border-b border-stone-800 pb-12 sm:pb-16">
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
              <li><Link href="/services" className="hover:text-amber-500 transition-colors">Our Services</Link></li>
              <li><Link href="/services/ai-ml" className="hover:text-amber-500 transition-colors">AI/ML</Link></li>
              <li><Link href="/services/3d-videos" className="hover:text-amber-500 transition-colors">3D Videos</Link></li>
              <li><Link href="/services/custom-development" className="hover:text-amber-500 transition-colors">Custom Development</Link></li>
              <li><Link href="/services/cloud-devops" className="hover:text-amber-500 transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Company</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium">
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/about/team" className="hover:text-amber-500 transition-colors">Our Team</Link></li>
              <li><Link href="/about/career" className="hover:text-amber-500 transition-colors">Careers</Link></li>
              <li><Link href="/clients" className="hover:text-amber-500 transition-colors">Clients</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Contact</h4>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="text-amber-600 shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px] mt-0.5" />
                <p>Cyber Hub, Gurugram, India</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="text-amber-600 shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <a 
                  href="mailto:hello@pravonixtech.com" 
                  className="hover:text-white break-all transition-colors"
                >
                  hello@pravonixtech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
          <p className="text-base sm:text-lg md:text-xl text-stone-600">© {new Date().getFullYear()} PravonixTech Inc. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-amber-500 transition-colors text-xs sm:text-sm">Terms</Link>
            <Link href="/privacy" className="hover:text-amber-500 transition-colors text-xs sm:text-sm">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

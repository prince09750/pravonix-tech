"use client";

import Link from "next/link";
import Footer from "../components/footer";
import { FileText, Clock, CheckCircle, Key, Globe, Headphones, Mail, Phone } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-900">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50/50 to-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 mb-4 sm:mb-6">
            Terms and <span className="text-amber-600">Conditions</span>
          </h1>
          <p className="text-stone-600 text-base sm:text-lg">
            As a software development agency, we are dedicated to delivering high-quality solutions within agreed timelines.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 mb-8 shadow-sm border border-stone-200">
            <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
              As a software development agency, we are dedicated to delivering high-quality solutions within agreed timelines. Here's what you need to know about our Terms and Conditions:
            </p>
          </div>

          {/* Project Timelines */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 mb-8 shadow-sm border border-stone-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-amber-600" />
              Project Timelines
            </h2>
            <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
              The timeline for delivering your software project will be outlined in the project proposal and agreement. We strive to adhere to these deadlines but will communicate promptly if any delays are anticipated.
            </p>
          </div>

          {/* Milestones & Updates */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 mb-8 shadow-sm border border-stone-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-amber-600" />
              Milestones & Updates
            </h2>
            <p className="text-stone-700 leading-relaxed text-base sm:text-lg mb-4">
              We provide regular updates throughout the development process. Key milestones and progress reports will be shared as per the project plan. Clients can track progress through project management tools or receive updates via email, based on the communication plan established.
            </p>
          </div>

          {/* Access to Deliverables */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 mb-8 shadow-sm border border-stone-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <Key className="w-6 h-6 text-amber-600" />
              Access to Deliverables
            </h2>
            <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
              Upon completion of each milestone or the final delivery, you will receive the necessary access credentials and documentation. For digital products or services, access details will be shared via email or through secure portals.
            </p>
          </div>

          {/* Support & Revisions */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 mb-8 shadow-sm border border-stone-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <Headphones className="w-6 h-6 text-amber-600" />
              Support & Revisions
            </h2>
            <p className="text-stone-700 leading-relaxed text-base sm:text-lg mb-4">
              Following delivery, we offer support for any issues or required revisions. Please contact us for assistance or to request changes within the scope of the project.
            </p>
          </div>

          {/* International Clients */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 mb-8 shadow-sm border border-stone-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-amber-600" />
              International Clients
            </h2>
            <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
              We work with clients globally. If you have specific requirements or encounter issues related to your location, please let us know, and we will provide the necessary support.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-6 sm:p-8 md:p-10 mb-8 shadow-sm border border-amber-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-amber-600" />
              Contact Us
            </h2>
            <p className="text-stone-700 leading-relaxed text-base sm:text-lg mb-6">
              For any inquiries or assistance, please contact us at:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-stone-600 text-sm">Email:</p>
                  <a 
                    href="mailto:info@pravonixtech.com" 
                    className="text-amber-600 hover:text-amber-700 font-semibold text-base sm:text-lg underline"
                  >
                    info@pravonixtech.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-stone-600 text-sm">Phone:</p>
                  <a 
                    href="tel:+917248780652" 
                    className="text-amber-600 hover:text-amber-700 font-semibold text-base sm:text-lg"
                  >
                    +91 7248780652
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}


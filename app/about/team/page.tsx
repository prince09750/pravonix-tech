"use client";

import React from 'react';
import Footer from '../../components/footer';

// ================= 1. DATA (Sirf Image Address Daalein) =================
const headMembers = [
  {
    name: "Prince Sharma",
    role: "CEO & Managing Director",
    // Yahan kisi bhi website ka "Copy Image Address" paste karein
    image: "https://clinginfotech.com/_next/image?url=%2Fassests%2FTeam%2FTeam40.png&w=640&q=75", 
  },
];

const teamMembers = [
  {
    name: "Amit Sharma",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
  },
  {
    name: "Neha Verma",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300",
  },
  {
    name: "Rahul Singh",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300",
  },
  {
    name: "ronnie kelvin",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300",
  },
  {
    name: "Mahish Kumar",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300",
  },
  {
    name: "sushant singh",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300",
  },
];

// ================= 2. UI COMPONENT =================
export default function TeamPage() {
  
  // Image na load hone par placeholder dikhane ke liye
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://via.placeholder.com/300?text=User+Photo";
  };

  return (
    <>
      <section className="min-h-screen bg-[#FDFCF8] pt-32 pb-24 px-6">

        {/* HEADER */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800">
           Meet Our 
 <span className="text-amber-600"> Amazing Team</span>
          </h1>
        </div>

        {/* CEO SECTION */}
        <div className="max-w-7xl mx-auto mb-24">
          {headMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl border border-stone-200 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
              
              {/* Image (No Link) */}
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-amber-500 shadow-lg flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold text-stone-800">{member.name}</h2>
                <p className="text-amber-600 font-semibold text-xl mt-2">{member.role}</p>
                <p className="mt-4 text-stone-600 text-lg max-w-2xl leading-relaxed">
                 Meet our CEO and Managing Director, a visionary leader fueled by a passion for technology and a proven history of catalyzing growth and triumph. Guided by strategic foresight and an active involvement, they inspire themselves to surpass expectations and reach new heights of achievement.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TEAM GRID */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-stone-800 text-center mb-14">
            Our Amazing Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 text-center transition-all">
                
                {/* Avatar (No Link) */}
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-amber-300 mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={handleImageError}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-xl font-semibold text-stone-800">{member.name}</h4>
                <p className="text-stone-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
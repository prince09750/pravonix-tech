"use client";

import React from "react";
import Footer from "../../components/footer";

/* ================= 1. DATA ================= */

const headMembers = [
  {
    name: "Prince Sharma",
    role: "CEO & Managing Director",
    image:
      "https://clinginfotech.com/_next/image?url=%2Fassests%2FTeam%2FTeam40.png&w=640&q=75",
  },
];

const teamMembers = [
  {
    name: "Amit Sharma",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
  },
  {
    name: "Neha Verma",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300",
  },
  {
    name: "Rahul Singh",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300",
  },
  {
    name: "Ronnie Kelvin",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300",
  },
  {
    name: "Mahish Kumar",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300",
  },
  {
    name: "Sushant Singh",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300",
  },
];

/* ================= 2. PAGE ================= */

export default function TeamPage() {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://via.placeholder.com/300?text=User+Photo";
  };

  return (
    <>
      <section className="bg-[#FDFCF8] pt-28 pb-24 px-4">
        {/* ================= HEADER ================= */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800">
            Meet Our <span className="text-amber-600">Amazing Team</span>
          </h1>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto">
            A passionate team of professionals dedicated to innovation,
            excellence, and growth.
          </p>
        </div>

        {/* ================= CEO SECTION ================= */}
        <div className="max-w-5xl mx-auto mb-28">
          {headMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-2xl"
            >
              {/* Image */}
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="text-center md:text-left text-black">
                <h2 className="text-3xl md:text-4xl font-bold">{member.name}</h2>
                <p className="text-lg font-medium opacity-90 mt-1">{member.role}</p>

                <p className="mt-4 text-sm md:text-base leading-relaxed opacity-95 max-w-2xl">
                  Meet our CEO and Managing Director, a visionary leader driven
                  by passion for technology and a strong history of building
                  successful digital solutions. With strategic insight and
                  hands-on leadership, they inspire teams to exceed expectations
                  and reach new milestones.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= TEAM GRID ================= */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-stone-800 text-center mb-14">
            Our Team Members
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200 shadow-md hover:shadow-xl transition-all p-6 text-center"
              >
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-red-600 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={handleImageError}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h4 className="text-sm font-semibold text-amber-600">{member.name}</h4>

                {/* Role */}
                <p className="text-xs text-stone-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

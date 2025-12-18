// ================= DATA =================
const headMembers = [
  {
    name: "Pawan Rajput",
    role: "CEO & Founder",
    image: "c:\Users\DELL\Downloads\pexels-thatguycraig000-1563356.jpg", // add image or keep ""
  },
];

const teamMembers = [
  {
    name: "Amit Sharma",
    role: "Frontend Developer",
    image: "/team/amit.jpg",
  },
  {
    name: "Neha Verma",
    role: "UI/UX Designer",
    image: "/team/neha.jpg",
  },
  {
    name: "Rahul Singh",
    role: "Backend Developer",
    image: "/team/rahul.jpg",
  },
  {
    name: "Vikash",
    role: "Backend Developer",
    image: "/team/rahul.jpg",
  },
  {
    name: "Mahish Kumar",
    role: "Backend Developer",
    image: "/team/rahul.jpg",
  },
   {
    name: "prince",
    role: "Backend Developer",
    image: "/team/rahul.jpg",
  },
];

// ================= UI =================
export default function TeamPage() {
  return (
    <section className="min-h-screen bg-[#FDFCF8] pt-32 pb-24 px-6">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800">
          Meet Our <span className="text-amber-600">Team</span>
        </h1>
        <p className="mt-5 text-stone-600 max-w-2xl mx-auto text-lg">
          Passionate professionals dedicated to building scalable and
          high-quality digital products.
        </p>
      </div>

      {/* ================= HEAD MEMBER (FULL WIDTH) ================= */}
      <div className="max-w-7xl mx-auto mb-24">
        {headMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl border border-stone-200 
                       p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
          >
            {/* Image */}
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-amber-500 shadow-lg flex-shrink-0">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-amber-100 flex items-center justify-center text-5xl font-bold text-amber-700">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-stone-800">
                {member.name}
              </h2>
              <p className="text-amber-600 font-semibold text-xl mt-2">
                {member.role}
              </p>
              <p className="mt-4 text-stone-600 text-lg max-w-2xl">
                Leading the company with a strong vision, technical expertise,
                and a passion for building impactful digital products.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= TEAM MEMBERS ================= */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-stone-800 text-center mb-14">
          Our Amazaing Team
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-stone-200 
                         p-8 text-center hover:shadow-xl transition"
            >
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden 
                              border-2 border-amber-300 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h4 className="text-xl font-semibold text-stone-800">
                {member.name}
              </h4>

              {/* Role */}
              <p className="text-stone-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

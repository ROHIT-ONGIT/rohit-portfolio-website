import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full shadow-sm"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical center line — show only on sm+ */}
        <div
          className="hidden sm:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(130,69,236,0.95) 0%, rgba(130,69,236,0.28) 40%, rgba(130,69,236,0.06) 100%)",
            boxShadow: "0 0 30px rgba(130,69,236,0.12)",
          }}
        />

        {/* Entries implemented as a 3-column grid per row (left / center / right).
            Center column has a fixed width so markers/line never overlap cards on zoom. */}
        {education.map((edu, index) => {
          const isOdd = index % 2 === 1;
          return (
            <div
              key={edu.id}
              className="grid grid-cols-1 sm:grid-cols-[1fr_80px_1fr] items-center mb-16 gap-4"
            >
              {/* left column (card or empty) */}
              <div className={`flex ${isOdd ? "sm:justify-end" : "sm:justify-start"} px-2`}>
                {!isOdd && (
                  <article className="relative z-10 w-full sm:max-w-md p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/3 to-white/2 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(2,6,23,0.6)]">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-md text-gray-300 mt-1">{edu.school}</h4>
                    <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                    <p className="mt-4 text-gray-400">{edu.desc}</p>
                  </article>
                )}
              </div>

              {/* center column (marker) */}
              <div className="flex justify-center items-center">
                <div
                  className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full z-30"
                  style={{
                    background: "#e6e7ea",
                    border: "4px solid #8245ec",
                    boxShadow: "0 6px 20px rgba(130,69,236,0.25)",
                  }}
                />
              </div>

              {/* right column (card or empty) */}
              <div className={`flex ${isOdd ? "sm:justify-start" : "sm:justify-end"} px-2`}>
                {isOdd && (
                  <article className="relative z-10 w-full sm:max-w-md p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/3 to-white/2 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(2,6,23,0.6)]">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-md text-gray-300 mt-1">{edu.school}</h4>
                    <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                    <p className="mt-4 text-gray-400">{edu.desc}</p>
                  </article>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;

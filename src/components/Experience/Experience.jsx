import React from "react";
import { experiences } from "../../constants"; // Import your data


const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical center line — show only on sm+ */}
        <div
          className="hidden sm:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(130,69,236,0.9) 0%, rgba(130,69,236,0.25) 40%, rgba(130,69,236,0.06) 100%)",
            boxShadow: "0 0 30px rgba(130,69,236,0.12)",
          }}
        />

        {/* Use a 3-column grid so center column has fixed width and markers never overlap cards when zooming */}
        {experiences.map((experience, index) => {
          const isOdd = index % 2 === 1;
          return (
            <div
              key={experience.id}
              className="grid grid-cols-1 sm:grid-cols-[1fr_80px_1fr] items-center mb-16 gap-4"
            >
              {/* left column (card or empty) */}
              <div className={`flex ${isOdd ? "sm:justify-end" : "sm:justify-start"} px-2`}>
                {!isOdd && (
                  <article className="relative z-10 w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white/10 bg-gray-900 backdrop-blur-md transform transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">
                          {experience.role}
                        </h3>
                        <h4 className="text-md sm:text-sm text-gray-300">
                          {experience.company}
                        </h4>
                        <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-400">{experience.desc}</p>
                    <div className="mt-4">
                      <h5 className="font-medium text-white">Skills:</h5>
                      <ul className="flex flex-wrap mt-2">
                        {experience.skills.map((skill, i) => (
                          <li
                            key={i}
                            className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                >
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-11 h-11 object-cover rounded-full"
                  />
                </div>
              </div>

              {/* right column (card or empty) */}
              <div className={`flex ${isOdd ? "sm:justify-start" : "sm:justify-end"} px-2`}>
                {isOdd && (
                    <article className="relative z-10 w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white/10 bg-gray-900 backdrop-blur-md transform transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={experience.img}
                            alt={experience.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
  
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-semibold text-white">
                            {experience.role}
                          </h3>
                          <h4 className="text-md sm:text-sm text-gray-300">
                            {experience.company}
                          </h4>
                          <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                        </div>
                      </div>
  
                      <p className="mt-4 text-gray-400">{experience.desc}</p>
                      <div className="mt-4">
                        <h5 className="font-medium text-white">Skills:</h5>
                        <ul className="flex flex-wrap mt-2">
                          {experience.skills.map((skill, i) => (
                            <li
                              key={i}
                              className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default Experience;

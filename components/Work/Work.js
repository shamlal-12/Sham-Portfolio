import { useEffect, useRef } from "react";
import { MENULINKS, WORK } from "../../constants";

const Work = () => {
  const sectionRef = useRef(null);

  // Temporarily remove GSAP animation for debugging

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[3].ref}
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-96"
    >
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          {/* Experience Section */}
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1">
              WORK
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit">
              Experience
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2">
              A quick recap of where I&apos;ve worked. {" "}
            </h2>
          </div>
          <div className="mt-12 space-y-12">
            {WORK && WORK.map((work) => (
              <div key={work.id} className="transform hover:scale-[1.03] transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-500/30 via-purple-700/20 to-indigo-900/30 border-4 border-transparent rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/40 group relative overflow-hidden" style={{borderImage: 'linear-gradient(135deg, #8B31FF 10%, #7000ff 90%) 1'}}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h3 className="text-3xl font-extrabold font-sans text-white group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">{work.title}</h3>
                      <p className="text-indigo-300 mt-2 font-semibold text-xl font-sans">{work.company}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-gray-200 bg-indigo-900/60 px-6 py-2 rounded-full text-lg font-semibold font-sans border border-indigo-400/30 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:shadow-lg cursor-pointer">{work.range}</span>
                      <span className="text-gray-300 mt-3 text-base font-sans">{work.location}</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <ul className="space-y-2">
                      {work.responsibilities && work.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-4 text-gray-200 group-hover:text-white text-lg font-medium font-sans transition-colors duration-300">
                          <span className="text-indigo-400 text-2xl font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-32" id="education">
            <div className="flex flex-col">
              <p className="uppercase tracking-widest text-gray-light-1">
                EDUCATION
              </p>
              <h1 className="text-6xl mt-2 font-medium text-gradient w-fit">
                Academic Journey
              </h1>
              <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2">
                My educational background and qualifications. {" "}
              </h2>
            </div>
            <div className="mt-12 space-y-6">
              <div className="transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-500/30 via-purple-700/20 to-indigo-900/30 border-4 border-transparent rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/40 group relative overflow-hidden" style={{borderImage: 'linear-gradient(135deg, #8B31FF 10%, #7000ff 90%) 1'}}>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div>
                        <h3 className="text-3xl font-extrabold font-sans text-white group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">BS Artificial Intelligence</h3>
                        <p className="text-indigo-300 mt-2 font-semibold text-xl font-sans">Air University Islamabad</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-gray-200 bg-indigo-900/60 px-6 py-2 rounded-full text-lg font-semibold font-sans border border-indigo-400/30">
                          In Progress
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div>
                        <h3 className="text-3xl font-extrabold font-sans text-white group-hover:text-indigo-300 transition-colors duration-300 tracking-tight">FSc (Pre-Engineering)</h3>
                        <p className="text-indigo-300 mt-2 font-semibold text-xl font-sans">Dr. AQ Khan School System and College Ibraheem Campus Islamabad</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-gray-200 bg-indigo-900/60 px-6 py-2 rounded-full text-lg font-semibold font-sans border border-indigo-400/30">
                          Sept 2020 – Aug 2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="mt-32" id="awards">
            <div className="flex flex-col">
              <p className="uppercase tracking-widest text-gray-light-1">
                ACHIEVEMENTS
              </p>
              <h1 className="text-6xl mt-2 font-medium text-gradient w-fit">
                Honors & Awards
              </h1>
              <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2">
                Recognition for excellence and dedication. {" "}
              </h2>
            </div>
            <div className="mt-12 space-y-6">
              <div className="transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-500/30 via-purple-700/20 to-indigo-900/30 border-4 border-transparent rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/40 group relative overflow-hidden" style={{borderImage: 'linear-gradient(135deg, #8B31FF 10%, #7000ff 90%) 1'}}>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 text-gray-200 group-hover:text-white text-lg font-medium font-sans transition-colors duration-300">
                      <span className="text-indigo-400 text-2xl font-bold mt-0.5 group-hover:scale-110 transition-transform duration-300">•</span>
                      <span className="leading-relaxed">Python for Everybody – University of Michigan (Coursera)</span>
                    </li>
                    <li className="flex items-start gap-4 text-gray-200 group-hover:text-white text-lg font-medium font-sans transition-colors duration-300">
                      <span className="text-indigo-400 text-2xl font-bold mt-0.5 group-hover:scale-110 transition-transform duration-300">•</span>
                      <span className="leading-relaxed">Machine Learning Specialization – Stanford University, USA - Coursera (In Progress)</span>
                    </li>
                    <li className="flex items-start gap-4 text-gray-200 group-hover:text-white text-lg font-medium font-sans transition-colors duration-300">
                      <span className="text-indigo-400 text-2xl font-bold mt-0.5 group-hover:scale-110 transition-transform duration-300">•</span>
                      <span className="leading-relaxed">GIKI AI Bootcamp Participant – Attended workshops on Generative AI, Blockchain & ML</span>
                    </li>
                    <li className="flex items-start gap-4 text-gray-200 group-hover:text-white text-lg font-medium font-sans transition-colors duration-300">
                      <span className="text-indigo-400 text-2xl font-bold mt-0.5 group-hover:scale-110 transition-transform duration-300">•</span>
                      <span className="leading-relaxed">Bronze Medal – Queen&apos;s Commonwealth Essay Competition (2023)</span>
                    </li>
                    <li className="flex items-start gap-4 text-gray-200 group-hover:text-white text-lg font-medium font-sans transition-colors duration-300">
                      <span className="text-indigo-400 text-2xl font-bold mt-0.5 group-hover:scale-110 transition-transform duration-300">•</span>
                      <span className="leading-relaxed">Fully Funded SEF Scholarship – FSc (12th) Education</span>
                    </li>
                    <li className="flex items-start gap-4 text-gray-200 group-hover:text-white text-lg font-medium font-sans transition-colors duration-300">
                      <span className="text-indigo-400 text-2xl font-bold mt-0.5 group-hover:scale-110 transition-transform duration-300">•</span>
                      <span className="leading-relaxed">Pakistan IT Innovation Award – Kinnetix Institute (December 2024)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

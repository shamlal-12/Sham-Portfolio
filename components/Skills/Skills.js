/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Specialized in developing AI solutions with expertise in Machine Learning, Computer Vision, and Deep Learning for real-world applications.{" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {SKILLS.languagesAndTools.map((skill) => (
                <div key={skill} className="flex flex-col items-center">
                  <Image
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                  <span className="text-sm text-gray-light-2 mt-2">{skill.toLowerCase() === 'cplusplus' ? 'C++' : skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <div key={skill} className="flex flex-col items-center">
                  <Image
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                  <span className="text-sm text-gray-light-2 mt-2">{skill.toLowerCase() === 'cplusplus' ? 'C++' : skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Soft Skills Section */}
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-white font-medium text-base mb-4 staggered-reveal">
              PROFESSIONAL SKILLS
            </h3>
            <ul className="space-y-3 text-lg text-gray-light-2 staggered-reveal">
              <li className="flex items-center gap-3">
                <span className="inline-block">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="url(#grad1)" />
                    <path d="M6 12.5L10 16L16 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8b31ff" />
                        <stop offset="1" stopColor="#7000ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                Problem Solving Skills
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="url(#grad1)" />
                    <path d="M6 12.5L10 16L16 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8b31ff" />
                        <stop offset="1" stopColor="#7000ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                Communication Skill
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="url(#grad1)" />
                    <path d="M6 12.5L10 16L16 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8b31ff" />
                        <stop offset="1" stopColor="#7000ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                Group Collaboration Work
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="url(#grad1)" />
                    <path d="M6 12.5L10 16L16 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8b31ff" />
                        <stop offset="1" stopColor="#7000ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                Research Skills
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

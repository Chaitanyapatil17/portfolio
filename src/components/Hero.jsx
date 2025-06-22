import React from "react";
import LogoWall from "../components/LogoWall";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FlowingSkills from "../components/FlowingSkills";

// import LetterGlitch from "../React/LetterGlitch";
// import LogoWall from "../components/LogoWall";
// import SkillsList from "../React/SkillsList";
 

const Hero = () => {
  return (
    <section className="text-white mt-12 md:mt-0" id="home">
      <div className="max-w-5xl mx-auto space-y-8 md:py-36 pb-14 px-6">
        {/* Intro */}
        <div className="text-left space-y-4">
          <p className="text-md md:text-lg text-gray-400 shiny-white">
            Hi, I'm Chaitanya Patil
          </p>

          {/* Title and Description */}
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 md:gap-4">
            <h1 className="text-white text-5xl md:text-6xl font-medium leading-none">
              Web <br /> Developer
            </h1>
            <p className="text-md md:text-2xl text-gray-400">
              Transforming ideas into interactive and seamless digital experiences with cutting-edge web development{" "}
              {/* <span className="shiny-sec">web</span> development. */}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-start gap-2 pt-3 md:pt-6">
            <a
              href="https://github.com/Chaitanyapatil17"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-btn"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/chaitanya-patil-4174ab281/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-btn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="patilchaitanya974@gmail.com"
              aria-label="Email"
              className="icon-btn"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Logo Wall */}
        {/* <LogoWall /> */}

        {/* Skills + Glitch Animation */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* <SkillsList /> */}
          <div className="flex justify-center md:w-full md:h-[150px] size-[90px] pt-3 md:pt-9 md:ml-1">
            {/* <LetterGlitch glitchColors={["#5e4491", "#A476FF", "#241a38"]} glitchSpeed={33} /> */}
            {/* <div className="text-4xl font-bold text-purple-400">[Glitch Effect Placeholder]</div> */}
            <FlowingSkills/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

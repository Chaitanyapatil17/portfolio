import React from "react";
import "./FlowingSkills.css";

// Correct imports from src/assets
import react from "../assets/react.svg";
import typeScript from "../assets/typeScript.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import next from "../assets/next.svg";
import nodejs from "../assets/nodejs.svg";
import HTML5 from "../assets/HTML5.svg";
import CSS3 from "../assets/css3.svg"; // lowercase
import javaScript from "../assets/javaScript.svg";
import git from "../assets/git.svg";
import java from "../assets/java.svg";
import mongodb from "../assets/mongodb.svg";

// tech mapping
const techIcons = {
  react,
  typeScript,
  tailwindcss,
  next,
  nodejs,
  HTML5,
  CSS3,
  javaScript,
  git,
  java,
  mongodb,

};

const technologies = [
  "react",
  "typeScript",
  "tailwindcss",
  "next",
  "nodejs",
  "HTML5",
  "CSS3",
  "javaScript",
  "git",
  "java",
  "mongodb",
];

const FlowingSkills = () => {
  const repeatedTech = [...technologies, ...technologies];

  return (
    <div className="relative overflow-x-hidden py-8 w-full">
      {/* Gradient overlays */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--background), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-20"
        style={{
          backgroundImage:
            "linear-gradient(to left, var(--background), transparent)",
        }}
      />

      {/* Animated Row */}
      <div className="flex animate-scroll hover:[animation-play-state:paused] gap-12 md:gap-20 w-max">
        {repeatedTech.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center gap-2 group transition-all duration-300"
          >
            <img
              src={techIcons[tech]}
              alt={tech}
              className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
              loading="lazy"
            />
            <span className="text-lg font-medium text-[var(--white-icon)]">
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowingSkills;

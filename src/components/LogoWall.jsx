import React from "react";

const techLogos = [
  {
    name: "Nodejs",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Supabase",
    src: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
  },
];

const LogoWall = () => {
  return (
    <div className="bg-white py-10 w-full flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
        {techLogos.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-white opacity-80 hover:opacity-100 transition-all"
          >
            <img src={tech.src} alt={tech.name} className="h-10 w-10 object-contain" />
            <span className="text-md font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoWall;

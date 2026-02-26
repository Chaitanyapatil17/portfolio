import React from 'react';

const Button53 = ({ text = 'RESUME', href = 'https://drive.google.com/file/d/1aFIjwQBeuRCKNTiDxlDiX26-z6htBJP3/view?usp=sharing' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block border border-black rounded-full px-2 py-1 text-xs font-black uppercase overflow-hidden group bg-black text-white"
  >
    <div className="absolute inset-0 bg-white text-black grid place-content-center transition-transform duration-200 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-y-full">
      {text}
    </div>
    <div className="relative inline-flex space-x-0.5">
      {[...text.toUpperCase()].map((char, i) => (
        <span
          key={i}
          className={`opacity-0 ${i % 2 ? 'translate-y-3' : '-translate-y-3'} transition-all duration-200 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:opacity-100 group-hover:translate-y-0`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          {char}
        </span>
      ))}
    </div>
  </a>
);

export default Button53;

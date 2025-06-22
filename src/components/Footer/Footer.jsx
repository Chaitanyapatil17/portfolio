import React from "react";
import SocialLinks from "./SocialLinks";
import SpotifyEmbed from "./SpotifyEmbed";
// import CopyrightText from "./CopyrightText";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-[#ffffff10]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="flex flex-col lg:items-start items-center space-y-6">
            <SocialLinks />
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <SpotifyEmbed />
          </div>
        </div>
        {/* <CopyrightText /> */}
      </div>
    </footer>
  );
}

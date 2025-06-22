import React from "react";

const Layout = ({ title, children }) => {
  document.title = title || "My Portfolio";

  return (
    <div className="bg-[--background] md:px-48 lg:px-20 px-9 text-[--white]">
      {children}
    </div>
  );
};

export default Layout;

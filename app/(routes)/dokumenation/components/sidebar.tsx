"use client";

import { useState } from "react";

const Sidebar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <div className="w-80 relative">
      <div
        className={`rounded-xl bg-slate-900 text-white p-6 h-fit w-80 text-sm ${
          navbar ? "fixed top-20" : "absolute"
        }`}
      >
        <h2 className="font-bold text-base mb-4">Innehållsförteckning</h2>
        <p className="hover:text-white text-white/50 cursor-pointer">
          # Button
        </p>
        <p className="hover:text-white text-white/50 cursor-pointer">
          # HTML Elements
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

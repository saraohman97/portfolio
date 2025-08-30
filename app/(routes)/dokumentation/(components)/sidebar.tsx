"use client";

import { useRouter } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    window.scrollY >= 110 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <div className="min-w-80 relative max-sm:hidden">
        <div
          className={`rounded-xl bg-slate-900 text-white p-6 h-fit w-full text-sm ${
            navbar ? "fixed top-20 sm:max-w-80" : "absolute"
          }`}
        >
          <h2 className="font-bold text-base mb-4">Innehållsförteckning</h2>
          <div className="flex flex-col gap-2 text-gray-400 pl-2">
            <div className="hover:text-white cursor-pointer"># Prisma</div>
            <div className="hover:text-white cursor-pointer"># Routes</div>
          </div>

          <div className="mt-8 flex gap-2 flex-col text-xs font-bold">
            <a
              href="https://www.linkedin.com/in/sara-öhman-0b7aa2116/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center w-fit text-white/50 hover:text-white"
            >
              <FaLinkedinIn size={16} />
              LinkedIn
            </a>
            <a
              href="http://github.com/saraohman97"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center w-fit text-white/50 hover:text-white"
            >
              <BsGithub size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

"use client";

import Image from "next/image";
import { useState } from "react";

const DocumentationPage = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <div className="mt-20 max-w-screen-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Documentation</h1>
      <p className="font-bold mb-10 text-center">This is a summary of useful frontend.</p>
      <div className="flex justify-between gap-10">
        <div className="flex flex-col gap-20">
          <div>
            <h2 className="text-xl font-light border-b">Button Element</h2>
            <p className="my-4 text-sm text-gray-900">
              The button element with className, children and other props.
              <br />
              <br />
              Ref forwarding is an opt-in feature that lets some components take
              a ref they receive, and pass it further down (in other words,
              “forward” it) to a child.
            </p>
            <Image
              src="/test/one.png"
              alt=""
              width={1000}
              height={1000}
              className="rounded-xl mt-10"
            />
          </div>
          <div>
            <h2 className="text-xl font-light border-b">Button Element</h2>
            <p className="my-4 text-xs text-gray-900">
              The button element with className, children and other props.
              <br />
              <br />
              Ref forwarding is an opt-in feature that lets some components take
              a ref they receive, and pass it further down (in other words,
              “forward” it) to a child.
            </p>
            <Image
              src="/test/one.png"
              alt=""
              width={1000}
              height={1000}
              className="rounded-xl mt-10"
            />
          </div>
        </div>

        <div className="w-80 relative">
          <div className={`rounded-xl bg-slate-900 text-white p-6 h-fit w-80 text-sm ${navbar ? 'fixed top-20' : 'absolute'}`}>
            <h2 className="font-bold text-base mb-4">Innehållsförteckning</h2>
            <p className="hover:text-white text-white/50 cursor-pointer">
              # Button
            </p>
            <p className="hover:text-white text-white/50 cursor-pointer">
              # HTML Elements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;

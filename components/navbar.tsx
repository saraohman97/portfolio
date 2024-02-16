"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";
import LoginButton from "./login-button";
import MobileMenu from "./mobile-menu";


interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-sm z-50">
      <div className="p-2 flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/">
          <div className="text-lg font-semibold">Sara Öhman</div>
        </Link>
        <MobileMenu currentUser={currentUser} />
        <div className="sm:flex items-center hidden">
          <Link href="/">
            <Button variant="link">Portfolio</Button>
          </Link>
          <Link href="/journal">
            <Button variant="link">Journal</Button>
          </Link>

          {currentUser ? (
            <>
              <Link href="/dashboard/journal">
                <Button variant="link">Dashboard</Button>
              </Link>
              <Button onClick={() => signOut()}>Logga ut</Button>
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { CiUser } from "react-icons/ci";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="p-2 max-w-screen-lg mx-auto flex items-center justify-between">
      <Link href="/">Logo</Link>
      <div className="flex gap-4 items-center">
        <div onClick={toggleOpen} className="relative cursor-pointer">
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <CiUser size={24} />
          </div>
          {isOpen && !currentUser && (
            <div className="absolute top-12 right-0 border rounded min-w-32 bg-white">
              <Link href="/login">
                <div className="p-2 hover:bg-gray-50 cursor-pointer">Login</div>
              </Link>
              <hr />
              <Link href="/register">
                <div className="p-2 hover:bg-gray-50 cursor-pointer">
                  Signin
                </div>
              </Link>
            </div>
          )}
          {isOpen && currentUser && (
            <div className="absolute top-12 right-0 border rounded min-w-32 bg-white">
              <Link href="/new">
                <div className="p-2 hover:bg-gray-50 cursor-pointer">
                  New post
                </div>
              </Link>
              <hr />
              <div
                onClick={() => signOut()}
                className="p-2 hover:bg-gray-50 cursor-pointer"
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

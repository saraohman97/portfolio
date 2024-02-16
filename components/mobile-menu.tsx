import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import LoginButton from "./login-button";
import Footer from "./footer";
import { Linkedin } from "lucide-react";
import { BsGithub } from "react-icons/bs";

interface MobileMenuProps {
  currentUser?: SafeUser | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ currentUser }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="link">
            <IoMdMenu size={30} className="sm:hidden bg-white border-none" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex justify-between mb-20">
            <SheetClose asChild>close</SheetClose>
          </div>
          <div className="w-full flex flex-col items-end">
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
                <Button onClick={() => signOut()} className="mt-4">
                  Logga ut
                </Button>
              </>
            ) : (
              <>
                <LoginButton />

                <div className="flex flex-col gap-4 text-end items-end p-2 mt-20">
                  <a
                    href="https://www.linkedin.com/in/sara-öhman-0b7aa2116/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="http://github.com/saraohman97"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub size={20} />
                  </a>
                  <p className="text-sm">
                    <span className="font-bold">Nummer: <br /> </span>070 493 73 54
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Email: <br /> </span>
                    saraohman97@gmail.com
                  </p>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;

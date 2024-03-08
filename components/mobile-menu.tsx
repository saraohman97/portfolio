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
          <button className="sm:hidden bg-transparent border-none">
            <IoMdMenu size={30} />
          </button>
        </SheetTrigger>
        <SheetContent>
          <div className="w-full flex flex-col justify-center items-end h-full">
            <Link href="/">
              <SheetClose asChild className="bg-transparent border-none">
                <Button variant="link">Portfolio</Button>
              </SheetClose>
            </Link>
            <Link href="/journal">
              <SheetClose asChild className="bg-transparent border-none">
                <Button variant="link">Journal</Button>
              </SheetClose>
            </Link>

            {currentUser ? (
              <>
                <Link href="/dashboard/journal">
                  <SheetClose asChild className="bg-transparent border-none">
                    <Button variant="link">Dashboard</Button>
                  </SheetClose>
                </Link>
                <SheetClose asChild>
                  <Button onClick={() => signOut()} className="mt-4">
                    Logga ut
                  </Button>
                </SheetClose>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-4 text-end items-end p-4">
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
                </div>

                <LoginButton />
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;

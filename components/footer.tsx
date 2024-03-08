"use client";

import { Linkedin } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import toast from "react-hot-toast";

const Footer = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
    toast.success("Kopierad");
  }

  return (
    <div className="bg-slate-900 w-full p-10 text-white mt-16 sm:mt-32">
      <div className="max-w-screen-xl mx-auto flex max-sm:flex-col items-center gap-4 text-center">
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p
                className="text-sm cursor-pointer"
                onClick={() => copyText("070 493 73 54")}
              >
                <span className="font-bold">Nummer: </span>070 493 73 54
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Kopiera</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p
                className="text-sm"
                onClick={() => copyText("saraohman97@gmail.com")}
              >
                <span className="font-bold">Email: </span>saraohman97@gmail.com
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Kopiera</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Footer;

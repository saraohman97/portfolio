import { Linkedin } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-slate-900 w-full p-10 text-white mt-32">
      <div className="max-w-screen-xl mx-auto flex items-center gap-4">
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
          <span className="font-bold">Nummer: </span>070 493 73 54
        </p>
        <p className="text-sm">
          <span className="font-bold">Email: </span>saraohman97@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;

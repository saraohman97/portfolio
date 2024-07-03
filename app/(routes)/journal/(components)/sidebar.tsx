"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryBadge from "./badges/category-badge";
import { Category, Post } from "@prisma/client";
import { Badge } from "../../../../components/ui/badge";
import FrameworkBadge from "./badges/framework-badge";
import DatabaseBadge from "./badges/database-badge";
import SchemaBadge from "./badges/schema-badge";
import CssBadge from "./badges/css-badge";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

interface SidebarProps {
  categories: Category[];
  posts: Post[];
}

const frameworks = [
  {
    label: "NextJS",
  },
  {
    label: "ReactJS",
  },
];

const schemas = [
  {
    label: "Prisma",
  },
  {
    label: "Mongoose",
  },
];

const databases = [
  {
    label: "MongoDB",
  },
  {
    label: "MySQL",
  },
];

const csses = [
  {
    label: "Tailwind",
  },
  {
    label: "VanillaCSS",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ categories, posts }) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const framework = params?.get("framework");
  const database = params?.get("database");
  const schema = params?.get("schema");
  const css = params?.get("css");
  const pathname = usePathname();
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

  const isMainPage = pathname === "/journal";

  if (!isMainPage) return null;

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
          <div className="flex flex-wrap gap-2">
            <Badge
              onClick={() => router.push("/journal")}
              className="cursor-pointer"
              variant="secondary"
            >
              All
            </Badge>
            {frameworks.map((item) => (
              <FrameworkBadge
                key={item.label}
                label={item.label}
                selected={framework === item.label}
              />
            ))}
            {databases.map((item) => (
              <DatabaseBadge
                key={item.label}
                label={item.label}
                selected={database === item.label}
              />
            ))}
            {schemas.map((item) => (
              <SchemaBadge
                key={item.label}
                label={item.label}
                selected={schema === item.label}
              />
            ))}
            {csses.map((item) => (
              <CssBadge
                key={item.label}
                label={item.label}
                selected={css === item.label}
              />
            ))}

            {categories.map((item) => (
              <CategoryBadge
                key={item.id}
                label={item.label}
                selected={category === item.label}
              />
            ))}
          </div>

          <div>
            <h2 className="font-bold text-base mb-2 mt-8">Favoriter</h2>
            <p className="text-sm text-slate-400">Inga favoriter hittills.</p>
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
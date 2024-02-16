"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgWebsite } from "react-icons/cg";
import { CiPen } from "react-icons/ci";
import { LiaSitemapSolid } from "react-icons/lia";

const DashboardNavbar = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/dashboard/journal",
      label: "Journal",
      active: pathname === "/dashboard/journal",
      icon: CiPen,
    },
    {
      href: "/dashboard/projekt",
      label: "Projekt",
      active: pathname === "/dashboard/projekt",
      icon: CgWebsite,
    },
    {
      href: "/dashboard/categories",
      label: "Kategorier",
      active: pathname === "/dashboard/categories",
      icon: LiaSitemapSolid,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center gap-4 px-4 max-sm:text-sm max-sm:pt-6">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className={`flex flex-col items-center gap-2 p-4 text-center text-slate-500 hover:text-slate-800 border-b-2 border-transparent hover:border-slate-800 ${
              route.active && "text-slate-800 border-b-slate-800"
            }`}
          >
            <route.icon className="text-xl sm:text-3xl" />
            <span>{route.label}</span>
          </Link>
        ))}
      </div>

      <hr className="mb-20" />
    </>
  );
};

export default DashboardNavbar;

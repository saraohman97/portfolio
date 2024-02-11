"use client";

import { GiWindmill } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";
import CategoryItem from "./category-item";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "Beach related posts.",
  },
  {
    label: "Modern",
    icon: GiWindmill,
    description: "Modern posts.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <div className="flex items-center gap-20 justify-center">
      {categories.map((item) => (
        <CategoryItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          selected={category === item.label}
        />
      ))}
    </div>
  );
};

export default Categories;

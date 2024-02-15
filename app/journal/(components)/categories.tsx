"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryBadge from "./badges/category-badge";
import { Category } from "@prisma/client";
import { Badge } from "../../../components/ui/badge";
import FrameworkBadge from "./badges/framework-badge";
import DatabaseBadge from "./badges/database-badge";
import SchemaBadge from "./badges/schema-badge";
import CssBadge from "./badges/css-badge";

interface CategoriesProps {
  categories: Category[];
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

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const framework = params?.get("framework");
  const database = params?.get("database");
  const schema = params?.get("schema");
  const css = params?.get("css");
  const pathname = usePathname();
  const router = useRouter();

  const isMainPage = pathname === "/journal";

  if (!isMainPage) return null;

  return (
    <div className="w-1/3 bg-slate-100 p-10 rounded h-fit">
      <div>
        <h3 className="font-semibold text-lg pb-2">Kollektion</h3>
        <div className="flex flex-wrap gap-2">
          <Badge
            onClick={() => router.push("/journal")}
            className="cursor-pointer"
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
      </div>
    </div>
  );
};

export default Categories;

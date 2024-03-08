"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryBadge from "./badges/category-badge";
import { Category, Post } from "@prisma/client";
import { Badge } from "../../../components/ui/badge";
import FrameworkBadge from "./badges/framework-badge";
import DatabaseBadge from "./badges/database-badge";
import SchemaBadge from "./badges/schema-badge";
import CssBadge from "./badges/css-badge";
import { format } from "date-fns";
import { sv } from "date-fns/locale";

interface CategoriesProps {
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

const Categories: React.FC<CategoriesProps> = ({ categories, posts }) => {
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
    <div className="sm:w-1/3 bg-slate-100 p-10 mx-6 rounded h-fit">
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

      <hr className="my-6" />

      <div>
        <h3 className="font-semibold text-lg pb-2">Favoriter</h3>
        <div className="space-y-2">
          <p className="text-sm text-slate-400">Inga favoriter hittills.</p>
          {/* Funktion till senare */}
          {/* {posts.map((fav) => (
            <div
              key={fav.id}
              className="flex items-center justify-between hover:border-b border-slate-500 text-sm"
            >
              {fav.favorite ? fav.title : "Inga favoriter hittills."}
              <p className="text-sm text-slate-400">
                {fav.favorite && format(fav.createdAt, "PPP", { locale: sv })}
              </p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Categories;

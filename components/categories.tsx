"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryBadge from "./category-badge";
import { Category } from "@prisma/client";
import { Badge } from "./ui/badge";
import FrameworkBadge from "./framework-badge";

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

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const framework = params?.get("framework");
  const pathname = usePathname();
  const router = useRouter();

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <div>
      {categories.length ? (
        <div className="grid grid-cols-2 gap-2">
          <Badge variant="outline" onClick={() => router.push("/")}>
            All
          </Badge>
          {categories.map((item) => (
            <CategoryBadge
            key={item.id}
            label={item.label}
            selected={category === item.label}
            />
            ))}
          {frameworks.map((item) => (
            <FrameworkBadge
              key={item.label}
              label={item.label}
              selected={framework === item.label}
            />
          ))}
        </div>
      ) : (
        <div>No categories</div>
      )}
    </div>
  );
};

export default Categories;

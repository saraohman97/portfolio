"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryBadge from "./category-badge";
import { Category } from "@prisma/client";
import { Badge } from "./ui/badge";

interface CategoriesProps {
  categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const router = useRouter();

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <div>
      {categories.length ? (
        <div className="grid grid-cols-2 gap-2">
          <Badge variant='outline' onClick={() => router.push('/')}>All</Badge>
          {categories.map((item) => (
            <CategoryBadge
              key={item.id}
              label={item.label}
              selected={category === item.label}
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

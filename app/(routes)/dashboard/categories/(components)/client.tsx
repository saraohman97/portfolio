"use client";

import { useRouter } from "next/navigation";
import { Category, columns } from "./columns";
import { DataTable } from "./data-table";
import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface CategoriesClientProps {
  data: Category[];
}

export default function CategoriesClient({ data }: CategoriesClientProps) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <Heading
          title="Kategorier"
          description="Här hittar du en lista av alla kategorier."
        />
        <Button
          onClick={() => router.push("/dashboard/categories/new")}
          className="self-end max-sm:mt-10"
        >
          <Plus className="mr-2" /> Ny kategori
        </Button>
      </div>
        <DataTable columns={columns} data={data} />
    </>
  );
}

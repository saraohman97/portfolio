"use client";

import { ProjectColumn, columns } from "./columns";
import { DataTable } from "./data-table";
import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProjectsClientProps {
  data: ProjectColumn[];
}

export default function ProjectsClient({ data }: ProjectsClientProps) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <Heading
          title="Projekt"
          description="Här hittar du en lista av alla projekt."
        />
        <Button
          onClick={() => router.push("/dashboard/projects/new")}
          className="self-end max-sm:mt-10"
        >
          <Plus className="mr-2" /> Ny Projekt
        </Button>
      </div>

      <DataTable columns={columns} data={data} />
    </>
  );
}

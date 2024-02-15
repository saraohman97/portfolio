"use client";

import { Post, columns } from "./columns";
import { DataTable } from "./data-table";
import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface BlogClientProps {
  data: Post[];
}

export default function PostsClient({ data }: BlogClientProps) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <Heading
          title="Journal"
          description="Här hittar du en lista av alla blogginlägg."
        />
        <Button
          onClick={() => router.push("/dashboard/journal/new")}
          className="self-end"
        >
          <Plus className="mr-2" /> Ny post
        </Button>
      </div>

      <DataTable columns={columns} data={data} />
    </>
  );
}

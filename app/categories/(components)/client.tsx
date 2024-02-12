import getCategories from "@/actions/getCategories";
import { Category, columns } from "./columns";
import { DataTable } from "./data-table";
import { format } from "date-fns";

export default async function PostsClient() {
  const data = await getCategories();

  const formattedData: Category[] = data.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}

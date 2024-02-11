import getPosts from "@/actions/getPosts";
import { Post, columns } from "./columns";
import { DataTable } from "./data-table";
import { format } from "date-fns";

export default async function PostsClient() {
  const data = await getPosts();

  const formattedData: Post[] = data.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}

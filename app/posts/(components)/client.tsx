import getPosts from "@/actions/getPosts";
import { Post, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Post[]> {
  const data = await getPosts();
  return data;
}

export default async function PostsClient() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

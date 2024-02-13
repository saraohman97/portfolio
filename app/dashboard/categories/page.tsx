import { Button } from "@/components/ui/button";
import PostsClient from "./(components)/client";
import Link from "next/link";

const CategoriesPage = async () => {
  return (
    <div>
      <Link href="/dashboard/categories/new">
        <Button>New</Button>
      </Link>
      <PostsClient />
    </div>
  );
};

export default CategoriesPage;

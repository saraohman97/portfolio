import getCategories from "@/actions/getCategories";
import getPosts, { IPostsParams } from "@/actions/getPosts";
import Categories from "@/components/categories";
import Posts from "@/components/posts";

interface HomeProps {
  searchParams: IPostsParams;
}

export default async function Home({searchParams}: HomeProps) {
  const posts = await getPosts(searchParams);
  const categories = await getCategories();

  return (
    <div className="flex flex-row gap-10">
      <div className="w-2/3">
        <Posts posts={posts} />
      </div>

      <Categories categories={categories} />
    </div>
  );
}

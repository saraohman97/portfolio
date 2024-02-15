import getCategories from "@/actions/getCategories";
import getPosts, { IPostsParams } from "@/actions/getPosts";
import Categories from "@/app/journal/(components)/categories";
import Posts from "@/app/journal/(components)/posts";

interface JournalProps {
  searchParams: IPostsParams;
}

const JournalPage = async ({ searchParams }: JournalProps) => {
  const posts = await getPosts(searchParams);
  const categories = await getCategories();

  return (
    <div className="p-10 max-w-screen-xl mx-auto">
      <h1 className="text-center py-20 text-5xl my-10">Journal</h1>
      <div className="flex flex-row gap-20">
        <Posts posts={posts} />
        <Categories categories={categories} />
      </div>
    </div>
  );
}
export default JournalPage;
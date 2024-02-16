import getCategories from "@/actions/getCategories";
import getPosts, { IPostsParams } from "@/actions/getPosts";
import Categories from "@/app/journal/(components)/categories";
import Posts from "@/app/journal/(components)/posts";
import Footer from "@/components/footer";

interface JournalProps {
  searchParams: IPostsParams;
}

const JournalPage = async ({ searchParams }: JournalProps) => {
  const posts = await getPosts(searchParams);
  const categories = await getCategories();

  return (
    <>
    <div className="p-4 sm:p-10 max-w-screen-xl mx-auto">
      <h1 className="text-center sm:py-20 text-2xl sm:text-5xl max-sm:pt-20 sm:my-10">Journal</h1>
      <div className="flex flex-col-reverse sm:flex-row gap-20">
        <Posts posts={posts} />
        <Categories categories={categories} posts={posts} />
      </div>
    </div>
    <Footer />
    </>
  );
};
export default JournalPage;

import getCategories from "@/actions/getCategories";
import getPosts, { IPostsParams } from "@/actions/getPosts";
import Posts from "@/app/(routes)/journal/(components)/posts";
import Footer from "@/components/footer";
import Heading from "@/components/ui/heading";
import Sidebar from "@/app/(routes)/journal/(components)/sidebar";

interface JournalProps {
  searchParams: IPostsParams;
}

const JournalPage = async ({ searchParams }: JournalProps) => {
  const posts = await getPosts(searchParams);
  const categories = await getCategories();

  return (
    <>
      <div className="p-4 max-w-screen-xl mx-auto">
        <Heading
          title="Journal"
          description="Nya webbsidor, arbetsprocess och tips."
          center={true}
        />
        <div className="flex flex-col-reverse sm:flex-row gap-10 w-full">
          <Posts posts={posts} />
          <Sidebar categories={categories} posts={posts} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default JournalPage;

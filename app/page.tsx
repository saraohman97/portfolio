import getCategories from "@/actions/getCategories";
import getPosts from "@/actions/getPosts";
import PostItem from "@/components/post-item";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const posts = await getPosts();
  const categories = await getCategories()

  return (
    <div className="flex flex-row gap-10">
      <div className="w-2/3">
      {posts.length ? (
        <div className="grid grid-cols-2 gap-2">
          {posts.map((post) => {
            return <PostItem key={post.id} data={post} />;
          })}
        </div>
      ) : (
        <div>No posts</div>
      )}
      </div>
      <div>
      {categories.length ? (
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => {
            return (
              <Badge key={category.id} variant="outline">{category.label}</Badge>
            )
          })}
        </div>
      ) : (
        <div>No categories</div>
      )}
      </div>
    </div>
  );
}

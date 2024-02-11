import getPosts from "@/actions/getPosts";
import PostItem from "@/components/post-item";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      {posts.length ? (
        <div className="grid grid-cols-2 gap-2">
          {posts.map((post) => {
            return <PostItem key={post.id} data={post} />;
          })}
        </div>
      ) : (
        <div>No posts</div>
      )}
    </>
  );
}

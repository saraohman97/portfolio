import { Post } from "@prisma/client";
import PostItem from "./post-item";

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className="w-full">
      {posts.length ? (
        <>
          {posts.map((post: any) => {
            return <PostItem key={post.id} post={post} />;
          })}
        </>
      ) : (
        <div className="w-full h-[400px]">Inga inlägg med den kategorin</div>
      )}
    </div>
  );
};

export default Posts;

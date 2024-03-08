import { Post } from "@prisma/client";
import PostItem from "./post-item";

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className="sm:w-2/3 sm:mt-10">
      {posts.length ? (
        <>
          {posts.map((post: any) => {
            return <PostItem key={post.id} post={post} />;
          })}
        </>
      ) : (
        <div>Inga inlägg med den kategorin</div>
      )}
    </div>
  );
};

export default Posts;
